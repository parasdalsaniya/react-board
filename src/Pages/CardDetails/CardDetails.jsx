import React, { useState } from "react";
import Header from "../../component/Header/Header";
import { AiOutlinePlus } from "react-icons/ai"
import "./CardDetails.scss"
import AddPost from "../../component/AddPostModal/AddPost";
import { useParams } from "react-router-dom";
const CardDetails = () => {
    const [showModal, setShowModal] = useState(true)
    const { cardId } = useParams();

    return (
        <>
            <Header />
            <div className="card-detail-container">
                <header>
                    <h1>Your posts</h1>
                <button
                    className="create-btn"
                    onClick={() => setShowModal(true)}
                >
                    <div>
                        <AiOutlinePlus size={16} />
                        Creat new post
                    </div>
                </button>
                </header>
            </div>
            <AddPost
                cardId={cardId}
                openModal={showModal}
                closeModal={() => setShowModal(false)}
            />
        </>
    );
};

export default CardDetails;
