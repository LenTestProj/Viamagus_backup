import React, { useEffect, useState } from "react";
import classes from "./PopupModal.module.css";

const Modal = ({ openModal, header, body, buttons }) => {
  const modalMainclasses = [
    classes.main,
    openModal ? classes.showModal : classes.hideModal,
  ];
  return (
    <div className={modalMainclasses.join(" ")}>
      <div className={classes.row}>
        <h2>{header}</h2>
        {/* <FontAwesomeIcon
          icon={faClose}
          className={classes.closeButton}
          onClick={onClose}
        /> */}
      </div>
      <div className={classes.row}>
        <h1>{body}</h1>
      </div>
      <div className={classes.row}>
        {buttons.map((button, i) => {
          return (
            <button
              className={classes.button}
              onClick={button.Click}
              key={i}
              style={{ ...button.styles }}
            >
              {button.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const PopupModal = ({ onClose, header, body, btns, itemToBeDeleted }) => {
  const [openModal, setOpenModal] = useState(true);
  const [buttons, setButtons] = useState(btns);

  useEffect(() => {
    setButtons((prev) =>
      prev.map((button) => {
        button.Click = () => {
          setOpenModal(false);
          const timer = setTimeout(() => {
            button.onClick(itemToBeDeleted);
            clearTimeout(timer);
          }, 1000);
        };
        return button;
      })
    );
  }, []);

  const closeModal = () => {
    setOpenModal(false);
    const timer = setTimeout(() => {
      onClose();
      clearTimeout(timer);
    }, 1000);
  };

  return (
    <div className={classes.overlay} onClick={closeModal}>
      <Modal
        openModal={openModal}
        header={header}
        body={body}
        buttons={buttons}
      />
    </div>
  );
};

export default PopupModal;
