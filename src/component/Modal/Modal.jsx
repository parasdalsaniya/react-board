import { useEffect, useRef } from "react";
import "./Modal.scss";

const Modal = ({ openModal, closeModal, hideCloseButton, children }) => {
    const modalRef = useRef();

    useEffect(() => {
        const clickOutsideContent = (e) => {
            if (e.target === modalRef.current) closeModal();
        };
        window.addEventListener("click", clickOutsideContent);
        return () => {
            window.removeEventListener("click", clickOutsideContent);
        };
    }, [openModal, closeModal, hideCloseButton, children]);

    return (
        <div ref={modalRef} className={`modal ${openModal ? "active" : ""}`}>
            <div className="modal__content">
                {!hideCloseButton && (
                    <span onClick={closeModal} className="modal__close">
                        &times;
                    </span>
                )}
                {children}
            </div>
        </div>
    );
};

export default Modal;

export const ModalHeader = (props) => {
    return <div className="modal__header">{props.children}</div>;
};

export const ModalBody = (props) => {
    return <div className="modal__body">{props.children}</div>;
};

export const ModalFooter = (props) => {
    return <div className="modal__footer">{props.children}</div>;
};
