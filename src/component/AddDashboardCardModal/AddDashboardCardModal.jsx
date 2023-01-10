import React, { useState } from "react";
import { addNewCard, editCard } from "../../Services/Firebase";
import Modal, { ModalBody } from "../Model/Modal";
import "./AddDashboardCard.scss";

const AddDashboardCardModal = ({ card, openModal, closeModal }) => {
    const [title, setTitle] = useState(card ? card.title : "");
    const [selectedColor, setSelectedColor] = useState(card ? card.color : "");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleAddDashboardCard = async () => {
        try {
            setLoading(true);
            await addNewCard({ title, color: selectedColor });
            setLoading(false);
            closeModal(false);
        } catch (error) {
            setLoading(false);
            setError("Something went wrong");
        }
    };

    const handleEditDashboardCard = async () => {
        try {
            setLoading(true);
            await editCard(card.id, { title, color: selectedColor });
            setLoading(false);
            closeModal(false);
        } catch (error) {
            setLoading(false);
            setError("Something went wrong");
        }
    };

    const handleSubmit = () => {
        if (card) handleEditDashboardCard();
        else handleAddDashboardCard();
    };

    const handleClose = () => {
        if (loading) return;
        closeModal(false);
    };
    const colors = ["#A7F0F9", "#C5C5FC", "#FFAEC0", "#FFCC66"];
    return (
        <Modal openModal={openModal} closeModal={handleClose}>
            <ModalBody>
                <div className={"add-dashboard-card-modal"}>
                    <h3>Add a name for your board</h3>
                    <input
                        className="input-title"
                        value={title}
                        placeholder="Places around the world"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <h3>Select post color</h3>
                    <p>Here are some templates to help you get started</p>
                    <div className="color-circle-container">
                        {colors.map((c, i) => (
                            <div
                                key={i}
                                className="color-circle"
                                style={{
                                    background: c,
                                    border:
                                        selectedColor === c &&
                                        `1.5px solid #23856D`,
                                }}
                                onClick={() => setSelectedColor(c)}
                            />
                        ))}
                    </div>
                    <div className="confirm-button">
                        <button className="button" onClick={handleSubmit}>
                            {loading ? "Loading..." : "Submit"}
                        </button>
                    </div>
                </div>
            </ModalBody>
        </Modal>
    );
};

export default AddDashboardCardModal;
