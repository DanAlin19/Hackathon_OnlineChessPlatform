const app = require("./app")
const https = require("https")
const http = require("http")
const fs = require("fs")
const socketIO = require("socket.io");
// const { Chess } = await import("chess.js");
const dotenv = require('dotenv')
dotenv.config()


const port = process.env.PORT || 5000;

const server =
  process.env.ENV === "dev"
    ? http.createServer(app)
    : https.createServer(
        {
          key: fs.readFileSync(process.env.SSL_PRIVATE_KEY_PATH),
          cert: fs.readFileSync(process.env.SSL_CERT_PATH),
        },
        app
      );

// const io = socketio(server)
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

const games = {};

async function handleChess(io) {
  const Chess = await import("chess.js");

  io.on("connection", (socket) => {
    console.log(`Socket ${socket.id} connected`);

    socket.on("createGame", (player) => {
      const gameId = Math.random().toString(36).substring(2, 8);
      games[gameId] = { id: gameId, players: [], state: new Chess.Chess() };
      const game = games[gameId];
      game.players.push(player);
      socket.join(gameId)
      socket.emit("gameCreated", gameId);
      console.log(`Game ${gameId} created`);
    });

    socket.on("joinGame", (gameId, player) => {
      const game = games[gameId];
      if (!game) {
        socket.emit("errorMessage", "Game not found");
        return;
      }

      if (game.players.length >= 2) {
        socket.emit("errorMessage", "Game is already full");
        return;
      }

      game.players.push(player);
      socket.join(gameId);
      socket.emit("gameJoined", { gameId, color: game.players.length === 2 ? "w" : "b" });
      socket.to(gameId).emit("playerJoined", player);

      console.log(`Player ${player} joined game ${gameId}`);
      console.log(game.players.length);

      if (game.players.length === 2) {
        console.log("Game start")
        io.to(gameId).emit("startGame", "start");
      }
    });

    socket.on("makeMove", ({ gameId, move, player }) => {
      const game = games[gameId];
      if (!game) {
        socket.emit("errorMessage", "Game not found");
        return;
      }
    
      if (game.state.turn() !== player) {
        socket.emit("errorMessage", "It's not your turn");
        return;
      }
      const result = game.state.move(move);
      if (!result) {
        socket.emit("errorMessage", "Invalid move");
        return;
      }

      const fen = game.state.fen();
      io.to(gameId).emit("moveMade", { move, player, fen });
      console.log(typeof game.state)
      if (game.state.game_over()) {
        const gameResult = game.state.turn();
        const fen = game.state.fen();
        io.to(gameId).emit("gameOver", { result: gameResult, fen: fen });
      }
    });

    socket.on("disconnect", () => {
      console.log(`Socket ${socket.id} disconnected`);
    });
  });
}

handleChess(io);
function requireHTTPS(req, res, next) {
  if (!req.secure) {
    return res.redirect("https://" + req.get("host") + req.url);
  }
  next();
}

if (process.env.ENV === "prod") {
  app.use(requireHTTPS);
  app.enable("trust proxy");
}

server.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
});