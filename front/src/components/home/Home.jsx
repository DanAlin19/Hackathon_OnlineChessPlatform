import { React, useEffect, useState, useRef } from 'react';
import { extend, Canvas, useLoader, useThree, useFrame } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import * as THREE from 'three';
import { MeshBasicMaterial } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Color } from 'three';

extend({ MeshBasicMaterial });

function Model(props) {
    const modelRef = useRef();
    const { scene } = useGLTF("/chess.glb");
    // let customcol = 0x4800FF;
    // if (localStorage.getItem("theme") === "dark")
    //     customcol = 0x00AFFF;
    // const [color, setColor] = useState(0x006FFF);
    // const newMaterial = new THREE.MeshStandardMaterial({ color: color });
    // useEffect(() => {
    //     scene.traverse((node) => {
    //         if (node instanceof THREE.Mesh) {
    //             node.material = newMaterial;
    //         }
    //     });
    // }, [color]);

      return (
        <group ref={modelRef}>
            <primitive object={scene} />
        </group>
    );

    // const {nodes} = useLoader(GLTFLoader, '/planet.glb');
}

// const Glow = ({ color, intensity, ...props }) => {
//   const { gl, scene, camera, size } = useThree();
//   const composer = useRef();
//   useEffect(() => void composer.current.setSize(size.width, size.height), [size]);
//   useFrame(({ gl, scene, camera }) => {
//     gl.autoClear = false;
//     gl.render(scene, camera);
//     composer.current.render();
//   }, 1);
//   return (
//     <>
//       <EffectComposer ref={composer} args={[gl]}>
//         <Bloom luminanceThreshold={0} luminanceSmoothing={0.4} height={100} intensity={intensity} />
//         <Noise opacity={0.01} />
//       </EffectComposer>
//       <spotLight color={color} intensity={intensity} position={[0, 0, 500]} />
//     </>
//   );
// };

export default function Home() {
    return (

        <div className='h-screen w-full duration-100 items-center justify-center bg-gradient-to-r from-orange-200 to-orange-300 dark:bg-gradient-to-r dark:from-stone-700 dark:to-stone-800 '>
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 px-8 py-8 lg:py-48">

                <div className="md:flex md:flex-col md:justify-center">
                    <h2 className="text-black text-2xl md:text-4xl lg:text-6xl font-bold mb-4 text-center dark:text-white">
                        Whoa Responsive!
                    </h2>

                    <p className="md:text-lg text-gray-900 text-center dark:text-white">Responsive can be done using Tailwind!</p>
                </div>
                <div className="">
                    <div className="w-full h-80">
                        <Canvas dpr={[1, 2]} style={{ position: 'relative', touchAction: 'none' }} camera={{ fov: 35, zoom: .8 }}>
                            <PresentationControls speed={1.5} global zoom={1} polar={[-0.1, Math.PI / 4]}>
                                <Stage environment={null}>
                                    <Model></Model>
                                    {/* <Glow color={new THREE.Color('#f6ff00')} intensity={1} /> */}
                                </Stage>
                            </PresentationControls>
                        </Canvas>
                    </div>
                </div>

            </div>
        </div>
    );
}
