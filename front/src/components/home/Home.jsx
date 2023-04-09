import { React, useEffect, useState, useRef } from 'react';
import { extend, Canvas, useLoader, useThree, useFrame } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import * as THREE from 'three';
import { MeshBasicMaterial } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Color } from 'three';
import { FaBeer } from 'react-icons/fa';



extend({ MeshBasicMaterial });

function Model(props) {
    const modelRef = useRef();
    const { scene } = useGLTF("/chess.glb");
      return (
        <group ref={modelRef}>
            <primitive object={scene} />
        </group>
    );
}

var TokenUser = localStorage.getItem("token");

export default function Home() {
    return (

        <div className='h-screen w-full duration-100 items-center justify-center bg-gradient-to-r from-orange-100 to-orange-300 dark:bg-gradient-to-r dark:from-stone-700 dark:to-stone-800 '>
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 px-8 py-8 lg:py-48">

                { !TokenUser ? 

                <div className="md:flex md:flex-col md:justify-center">
                    <h2 className="text-black text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-center dark:text-white">
                        Dresorii de biti va invita la un sah!
                    </h2>

                    <p className="md:text-lg text-gray-900 text-center dark:text-white">Joaca acum sah puternic dezvoltat!</p>
                </div> 

                :

                <div className="actions mt-4 flex-col justify-center items-center" style={{textAlign: 'center'}}>
                    <div style={{ marginTop: '1cm' }}>
                        <a href="/chess"className="inline-block w-1/2 px-4 py-2 text-center bg-orange-100 dark:bg-white text-gray-800 rounded-lg shadow hover:bg-gray-100" style={{ fontSize: '1.2em', padding: '10px 40px' }}>
                        Play vs Computer
                        </a>
                    </div>
                    <div style={{ marginTop: '1cm' }}>
                        <a href='/online-chess' className="inline-block w-1/2 px-4 py-2 text-center bg-orange-100 dark:bg-white text-gray-800 rounded-lg shadow hover:bg-gray-100" style={{ fontSize: '1.2em', padding: '10px 40px' }}>
                        Play a Friend
                        </a>
                    </div>
                    <div style={{ marginTop: '1cm' }}>
                        <button className="w-1/2 px-4 py-2 text-center bg-orange-100 dark:bg-white text-gray-800 rounded-lg shadow hover:bg-gray-100" style={{ fontSize: '1.2em', padding: '10px 40px' }}>
                        Game Review
                        </button>
                    </div>
                </div>

                }

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