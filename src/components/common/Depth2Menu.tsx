import {Link} from "react-router-dom";
import React from "react";

function Depth2Menu({subMenus, basicPath}) {
    const menuLis = subMenus.map( (menuName,idx) => {

        const fullPath = basicPath + menuName.toPath
        return (
            <li
                className="px-2 py-1 transition-colors duration-150 hover:text-txt-grey rounded"
                key={idx}
            >
                <Link className="w-full block" to={fullPath}>{menuName.name}</Link>
            </li>
        )
    })


    return (
        <ul className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium rounded-md bg-gray-200">
            {menuLis}
        </ul>
    );
}

export default Depth2Menu;