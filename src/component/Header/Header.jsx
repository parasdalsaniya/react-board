import React from "react";
import "./Header.scss";
import Fill13 from "../../assets/Fill13.png";
import Fill15 from "../../assets/Fill15.png";
import { CiSearch } from "react-icons/ci";
import { FiBookmark } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleBackNavigate = () => {
        navigate(-1);
    };

    return (
        <header>
            <div className="left">
                <IoIosArrowBack onClick={handleBackNavigate} />
                <div className="t-logo">
                    <img src={Fill13} alt="LOGO" />
                    <div>
                        <img src={Fill15} alt="LOGOT" />
                    </div>
                </div>
                <p>Places around the world</p>
            </div>
            <div className="right">
                <CiSearch />
                <hr />
                <FiBookmark />
            </div>
        </header>
    );
};

export default Header;
