import Modal from "react-modal";
import { CustomStylesModals } from "../helpers/CustomStylesModals";
import { ModalPlayVideosProps } from "../interfaces/ModalsProps";
import { obtenerVideoID } from "../helpers/tools";

export const ModalPlayVideo = ({
  dataVideo,
  modalPlayVideo,
  closeModalPlayVideo,
}: ModalPlayVideosProps) => {

  return (
    <Modal
      isOpen={modalPlayVideo}
      onRequestClose={closeModalPlayVideo}
      style={CustomStylesModals}
      className={"modal-content w-50 text-left"}
      contentLabel=""
    >
      <div className="modal-header">
        <button
          type="button"
          className="btn-close"
          onClick={closeModalPlayVideo}
        ></button>
      </div>
      <div className="modal-body">
        <iframe
          width="100%"
          height="400"
          src={`https://www.youtube.com/embed/${obtenerVideoID(dataVideo.url)}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </Modal>
  );
};
