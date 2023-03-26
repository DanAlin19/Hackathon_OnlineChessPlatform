import { React, useEffect, useState, useRef } from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";
import DarkTheme from './dark_theme/DarkTheme';

export default function Game() {

    const { unityProvider } = useUnityContext({
        loaderUrl: "Build/build.loader.js",
        dataUrl: "Build/webgl.data",
        frameworkUrl: "Build/build.framework.js",
        codeUrl: "Build/build.wasm",
    });

    return (
        <div className='w-screen h-screen space-y-52 md:space-y-14 items-center justify-start flex-col flex bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-600 '>
            <div className='flex flex-row md:w-3/4 w-11/12 mt-8'>
                <a href="/" className='left-0 w-1/4'>Home</a>
                <p className='w-1/2 font-bold text-center'>404 - Page not found<br/><p>You can go to homepage, or play a game</p></p>
                <div className='w-1/4 flex justify-end'>
                    <DarkTheme />
                </div>
            </div>
            <div className='aspect-[17/9] w-3/4 shadow-xl'>
                <Unity unityProvider={unityProvider} className='w-full h-full' />
            </div>
        </div>
    );
}
