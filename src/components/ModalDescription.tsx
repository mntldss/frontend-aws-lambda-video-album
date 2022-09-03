import { useState } from "react";
import Modal from "react-modal";
import { CustomStylesModals } from "../helpers/CustomStylesModals";
import { ModalDescriptionProps } from "../interfaces/ModalsProps";
import { ModalPlayVideo } from "./ModalPlayVideo";

export const ModalDescription = ({
  dataVideo,
  modalDescription,
  closeModalDescription,
}: ModalDescriptionProps) => {
  const [modalPlayVideo, setModalPlayVideo] = useState(false);

  const closeModalPlayVideo = () => {
    setModalPlayVideo(false);
  };

  return (
    <>
      <Modal
        isOpen={modalDescription}
        onRequestClose={closeModalDescription}
        style={CustomStylesModals}
        className={"modal-content w-50 text-left"}
        contentLabel=""
      >
        <div className="modal-header">
          <button
            type="button"
            className="btn-close"
            onClick={closeModalDescription}
          ></button>
        </div>
        <div className="modal-body">
          <div className="d-flex p-2 m-2">
            <div className="card col-4 border border-white position-relative">
              <button
                className="btn mb-4 p-0"
                style={{ height: "250px", width: "100%" }}
                onClick={() => {
                  setModalPlayVideo(true);
                  closeModalDescription();
                }}
              >
                <img
                  src={dataVideo.thumbnail}
                  alt={dataVideo.title}
                  style={{ height: "250px", width: "100%" }}
                  className="p-0"
                />
              </button>
            </div>

            <div className="col-8 ml-3 px-5">
              <h5>{dataVideo.title}</h5>
              <p>{dataVideo.description}</p>
            </div>
          </div>
        </div>
      </Modal>
      <ModalPlayVideo
        modalPlayVideo={modalPlayVideo}
        closeModalPlayVideo={closeModalPlayVideo}
        dataVideo={dataVideo}
      />
    </>
  );
};
