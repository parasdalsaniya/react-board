import React, { useEffect, useRef, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalLoading } from "../../assets/Context/useLoader";
import { deleteCard } from "../../Services/Firebase";
import AddDashboardCardModal from "../AddDashboardCardModal/AddDashboardCardModal";
import ThreeDotMenu from "../ThreeDotMenu/ThreeDotMenu";
import "./DashboardCard.scss";

const DashboardCard = ({ card, reloadData, navigateTo }) => {
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const { setGlobalLoading } = useGlobalLoading();
    const navigate = useNavigate();

    const handleEdit = () => {
        setOpenEditModal(true);
    };
    const handleDelete = async () => {
        try {
            setGlobalLoading(true);
            await deleteCard(card.id);
            reloadData();
            handleClose();
        } catch (error) {
            console.log("Error in DashboardCard/handleDelete:\n", error);
        } finally {
            setGlobalLoading(false);
        }
    };
    const handleNavigate = () => {
        navigate(navigateTo);
    };

    const menu = [
        {
            name: "Edit",
            icon: <AiOutlineEdit />,
            onClick: handleEdit,
        },
        {
            name: "Delete",
            icon: <RiDeleteBin6Line />,
            onClick: handleDelete,
        },
    ];

    const handleClose = () => {
        setOpenMenu(false);
    };

    const menuRef = useRef();
    // useEffect(() => {
    //     const clickOutsideContent = (e) => {
    //         console.log('menuRef.current', menuRef.current)
    //         console.log('e.target', e.target)
    //         console.log('!menuRef.current.contains(e.target)', !menuRef.current.contains(e.target))
    //         if (menuRef.current && !menuRef.current.contains(e.target)) {
    //             setOpenMenu(false);
    //         }
    //     };
    //     window.addEventListener("click", clickOutsideContent);
    //     return () => {
    //         window.removeEventListener("click", clickOutsideContent);
    //     };
    // }, [menuRef]);

    return (
        <>
            <div className="dashboard-card">
                <div
                    className="color-box"
                    onClick={handleNavigate}
                    style={{ background: card.color }}
                />
                <div className="title" onClick={handleNavigate}>
                    <p>{card.title}</p>
                </div>
                <div className="menu" ref={menuRef}>
                    <ThreeDotMenu
                        menu={menu}
                        openMenu={openMenu}
                        setOpenMenu={setOpenMenu}
                        handleClose={handleClose}
                    />
                </div>
                <AddDashboardCardModal
                    card={card}
                    openModal={openEditModal}
                    closeModal={() => setOpenEditModal(false)}
                />
            </div>
        </>
    );
};

export default DashboardCard;
