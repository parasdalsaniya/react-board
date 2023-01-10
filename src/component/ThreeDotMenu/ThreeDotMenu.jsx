import React, { useEffect, useRef, useState } from "react";
import { RiMore2Line } from "react-icons/ri";
import "./ThreeDotMenu.scss";

const ThreeDotMenu = ({ openMenu, setOpenMenu, menu}) => {
    // const [openMenu, setOpenMenu] = useState(false);

    // const menuRef = useRef();

    // useEffect(() => {
    //     console.log('props')
    //     const clickOutsideContent = (e) => {
    //         // console.log("eeeeeee", { e: e.target, ref: menuRef.current });
    //         console.log('menuRef.current', menuRef.current)
    //         console.log('e.target', e.target)
    //         console.log('!menuRef.current.contains(e.target)', !menuRef.current.contains(e.target)) 
    //         // console.log('!menuRef.current.contains(e.target)', menuRef.current.contains(e.target))
    //         if (menuRef.current && !menuRef.current.contains(e.target)) {
    //             // setOpenMenu(false);
    //         }
    //         // if (e.target !== menuRef.current) {
    //         //     setOpenMenu(false);
    //         // }
    //     };
    //     window.addEventListener("click", clickOutsideContent);
    //     return () => {
    //         window.removeEventListener("click", clickOutsideContent);
    //     };
    // }, [menuRef]);

    return (
        <>
            <RiMore2Line
                className="pointer"
                onClick={() => setOpenMenu(!openMenu)}
            />
                <div className="three-dot-container" >
            {openMenu && (
                    <ul>
                        {menu.map((m, i) => (
                            <li key={i} className="pointer" onClick={m.onClick}>
                                {m.icon}
                                {m.name}
                            </li>
                        ))}
                    </ul>
            )}
                </div>
        </>
    );
};

export default ThreeDotMenu;
