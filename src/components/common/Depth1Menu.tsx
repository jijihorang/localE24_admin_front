import React, {useState} from "react";
import Depth2Menu from "./Depth2Menu.tsx";

const ChevronDown = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
    </svg>
);

function Depth1Menu({mainName,subMenus,basicPath}) {

    const [isToggle,setIsToggle] = useState(false)

    const isToggleOpen = () => {
        setIsToggle(!isToggle)
    }

    const subMenuNames = {subMenus,basicPath}

    return (
        <li className="relative px-6 py-3">
            <button
                onClick={isToggleOpen}
                className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-neutral-800"
            >
                <span className="inline-flex items-center">
                    <span className="ml-4 text-blue-950">{mainName}</span>
                </span>
                <span
                    className={`transition-transform duration-200 ${isToggle ? 'transform rotate-180' : ''}`}>
                                <ChevronDown/>
                </span>
            </button>
            {isToggle && (<Depth2Menu {...subMenuNames}></Depth2Menu>)}
        </li>
    );
}

export default Depth1Menu;