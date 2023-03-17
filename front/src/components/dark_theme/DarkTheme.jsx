import { useEffect, useState } from 'react'

function DarkTheme() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
    );
    const element = document.documentElement
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const options = [
        {
            icon: "sunny",
            text: "light"
        },
        {
            icon: "moon",
            text: "dark"
        },
        {
            icon: "desktop-outline",
            text: "system"
        }
    ]
    
    function onWindowMatch() {
        if (localStorage.theme === 'dark' ||
            (!("theme" in localStorage) && darkQuery.matches)) {
            element.classList.add("dark");
        }
        else {
            element.classList.remove("dark");
        }
    }
    onWindowMatch();
    
    useEffect(() => {
        switch (theme) {
            case 'dark':
                element.classList.add('dark')
                localStorage.setItem('theme', 'dark')
                break;
            case 'light':
                element.classList.remove('dark')
                localStorage.setItem('theme', 'light')
                break
            default:
                localStorage.removeItem('theme')
                onWindowMatch()
                break;
        }
    }, [theme])
    
    darkQuery.addEventListener("change", (e) => {
        if (!("theme" in localStorage)) {
            if (e.matches) {
                element.classList.add("dark")
            }
            else {
                element.classList.remove("dark");
            }
        }
    })

    return (
        <div className=' top-5 right-10 duration-100 dark:bg-slate-800 bg-white rounded z-100'>
            {
                options?.map(opt => (
                    <button key={opt.text}
                        onClick={() => setTheme(opt.text)}
                        className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${theme === opt.text && "text-sky-600"}`}>
                        <ion-icon name={opt.icon}></ion-icon>
                    </button>))
            }
        </div>
    )
}

export default DarkTheme;