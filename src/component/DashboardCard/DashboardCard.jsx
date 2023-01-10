import React, { useEffect, useRef, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { deleteCard } from "../../Services/Firebase";
import AddDashboardCardModal from "../AddDashboardCardModal/AddDashboardCardModal";
import ThreeDotMenu from "../ThreeDotMenu/ThreeDotMenu";
import "./DashboardCard.scss";

const DashboardCard = ({ card, reloadData }) => {
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const handleEdit = () => {
        setOpenEditModal(true);
    };
    const handleDelete = async () => {
        try {
            await deleteCard(card.id);
            reloadData();
            handleClose();
        } catch (error) {
            console.log("Error in DashboardCard/handleDelete:\n", error);
        }
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
                <div className="color-box" style={{ background: card.color }} />
                <div className="title">
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
