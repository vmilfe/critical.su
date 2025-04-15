import { useState } from "react";

import animation from "../../styles/animation.module.css"


const programmingLanguages = [
    {
        name: "python",
        url: "/svg/dev/python.svg",
        level: "middle+"
    }, 
    {
        name: "js",
        url: "/svg/dev/js.svg",
        level: "middle"
    },
    {
        name: "ts",
        url: "/svg/dev/ts.svg",
        level: "basic"
    },
    {
        name: "c++",
        url: "/svg/dev/cpp.svg",
        level: "junior"
    }
]

const myFrameworks = [
    {
        name: "fastapi",
        url: "/svg/dev/fastapi.svg"
    },
    {
        name: "astro",
        url: "/svg/dev/astro.svg"
    }, 
    {
        name: "react.js",
        url: "/svg/dev/react.svg"
    },
    {
        name: "express.js",
        url: "/svg/dev/base.svg"
    }
]


function skillsModal() {
    return (
        <div className="flex flex-col py-4 px-36">
            <div className="text-center text-2xl font-semibold">
                <p>my programming languages</p>
            </div>
            <div className="text-lg/4">
                <p className="">i mess with the following programming languages:</p>
                <ul className="flex flex-row justify-center gap-5 mt-4">
                    {programmingLanguages.map((item) => (
                        <li className="flex gap-1 text-white">
                            <img className="mb-1" src={item.url} width="15" height="15" ></img>
                            <div className="flex gap-1">
                                <p>{item.name}</p>
                                {item.level && (
                                    <p className="text-gray-300 text-sm mt-1">{item.level}</p>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="text-center text-2xl font-semibold mt-3">
                <p>technologies</p>
            </div>
            <div className="text-lg/4">
                <p>i work with these frameworks and libraries:</p>
                <ul className="flex flex-col justify-center ml-4 gap-1 mt-4">
                    {myFrameworks.map((item) => (
                        <li className="flex gap-1 text-white">
                            <img className="mt-0.5" src={item.url} width="15" height="15" ></img>
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>
                <p></p>
            </div>

            <div className="text-center text-2xl font-semibold mt-3">
                <p>info</p>
            </div>  
             
            <div className="text-lg/4">
                <p>
                    i use docker and k8s, database - postgresql/mongo, use redis. 
                </p>
                <p>
                    python library: playwright, httpx, aiogram v2/v3, pyrogram, sqlalchemy, peewee, asyncio
                </p>
            </div>
        </div>
    );
}


export default function InfoButton() {
    const [activeInfo, setClicked] = useState(false);

    return (
        <div className="absolute bottom-10 mb-5 right-0 left-0 mx-56 ">
            <div className="bg-background ">
                {activeInfo && skillsModal()}
            </div>
            
            <div className={`${activeInfo ? "bg-background" : ""}`}>
                <button
                    className={`flex text-2xl px-4 ${
                        activeInfo ? `bg-backgroundHover hover:bg-background` : 'hover:bg-backgroundHover bg-background'
                    }`}
                    onClick={() => setClicked(!activeInfo)}
                > 
                    <p>my skills info</p>
                    
                    <div className="pl-16 max">
                        <img className={`${
                            activeInfo ? animation.buttonReverse : animation.buttonReverseBack
                        }`} src="/svg/switcher.svg" alt="icon" width="30" height="30" />
                    </div>
                </button>
            </div>
        </div>
    );
}
