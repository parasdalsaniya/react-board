import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.png";
import { AiOutlinePlus } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import AddDashboardCardModal from "../AddDashboardCardModal/AddDashboardCardModal";

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <navbar>
            <div className="left">
                <img src={logo} alt="LOGO" />
            </div>
            <div className="right">
                <div className="search-bar">
                    <CiSearch />
                    <input type="text" placeholder="Search.." />
                </div>
                <button
                    className="create-btn"
                    onClick={() => setShowModal(true)}
                >
                    <div>
                        <AiOutlinePlus size={16} />
                        Creat new board
                    </div>
                </button>
            </div>
            <AddDashboardCardModal
                openModal={showModal}
                closeModal={() => setShowModal(false)}
            />
        </navbar>
    );
};

export default Navbar;
