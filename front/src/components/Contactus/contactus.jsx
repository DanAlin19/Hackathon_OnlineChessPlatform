import React, { useState } from "react";
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
      color: theme.palette.action.disabled,
    },
  }));
  
  const customIcons = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon color="error" />,
      label: 'Very Dissatisfied',
    },
    2: {
      icon: <SentimentDissatisfiedIcon color="error" />,
      label: 'Dissatisfied',
    },
    3: {
      icon: <SentimentSatisfiedIcon color="warning" />,
      label: 'Neutral',
    },
    4: {
      icon: <SentimentSatisfiedAltIcon color="success" />,
      label: 'Satisfied',
    },
    5: {
      icon: <SentimentVerySatisfiedIcon color="success" />,
      label: 'Very Satisfied',
    },
  };

  function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }
  
  IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
  };

const Contactus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(2);

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Message: ", message);
    console.log("Rating: ", rating);

    fetch('/api/ratings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rating }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Rating sent successfully:', data);
      })
      .catch((error) => {
        console.error('Error sending rating:', error);
      });
    /** 
     *! De aici se trimit datele la server
    */
  };

  return (
    <div className="flex flex-col md:flex-row pb-10 flex-wrap items-center md:pt-12 justify-center bg-gradient-to-r
            from-blue-100 to-blue-300 dark:bg-gradient-to-r dark:from-slate-600 dark:to-gray-900 duration-1000">
      <div className="w-full md:w-2/5 p-8 text-center">
        <h2 className="text-3xl md:text-left font-bold mb-4 dark:text-white">Let's chat</h2>
        <h2 className="text-3xl md:text-left font-bold mb-4 dark:text-white">Tell us about your experience.</h2>
      </div>
      <form
        className="md:w-2/5 w-11/12 bg-white shadow-md rounded-lg p-8"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
        <div className="mb-4">
          {/* <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label> */}
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none
                focus:shadow-outline focus:border-2 focus:border-blue-500"
            id="name"
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          {/* <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label> */}
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none 
                focus:shadow-outline focus:border-2 focus:border-blue-500"
            id="email"
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          {/* <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
            Message
          </label> */}
         <textarea
            className="appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none 
                focus:shadow-outline focus:border-2 focus:border-blue-500"
            id="message"
            placeholder="Message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-3" htmlFor="message">
            Rate your experience on our website!
          </label>
         <StyledRating
            name="highlight-selected-only"
            defaultValue={2}
            IconContainerComponent={IconContainer}
            getLabelText={(value) => customIcons[value].label}
            highlightSelectedOnly
         />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-gradient-to-r from-blue-300 to-blue-500 dark:bg-gradient-to-r dark:from-slate-600
                dark:to-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contactus;
