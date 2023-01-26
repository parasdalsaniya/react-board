import React, { useState } from "react";
import Modal, { ModalBody } from "../Modal/Modal";
import { CiImageOn } from "react-icons/ci";
import "./AddPost.scss";
import { addNewPost } from "../../Services/Firebase";
import { useGlobalLoading } from "../../assets/Context/useLoader";

const AddPost = ({ openModal, handleClose, cardId }) => {
    const [subject, setSubject] = useState();
    const [description, setDescription] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const { setGlobalLoading } = useGlobalLoading();

    const handleSubmit = async () => {
        try {
            console.log('dssssssssssssssssssss');
            setLoading(true);
            const data = {
                card: cardId,
                subject,
                description,
                likes: [],
                bookmarks: []
            };
            await addNewPost(data);
            console.log('ENDDDDDDDDDDDDDDD');
        } catch (error) {
            setLoading(false);
            setError("Something went wrong", error);
        } finally {
            setGlobalLoading(false);
        }
    };
    return (
        <Modal openModal={openModal} closeModal={handleClose}>
            <ModalBody>
                <div className={"add-post-card-modal"}>
                    <h3>Create a post</h3>
                    <p>Write something for your post</p>
                    <div className="input-label">
                        <label htmlFor="subject">Subject</label>
                        <input
                            id="subject"
                            className=""
                            value={subject}
                            placeholder="Places around the world"
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>
                    <div className="upload-file">
                        <label htmlFor="upload-file">
                            <CiImageOn />
                            Add your image
                        </label>
                        <input type="file" id="upload-file" />
                    </div>
                    <div className="input-label">
                        <label htmlFor="description">
                            What’s on your mind?{" "}
                        </label>
                        <textarea
                            id="description"
                            value={description}
                            placeholder="Type here"
                            onChange={(e) => setDescription(e.target.value)}
                        />
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

export default AddPost;
