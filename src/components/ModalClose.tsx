import Modal from "react-modal";
import { CustomStylesModals } from "../helpers/CustomStylesModals";
import { ModalCloseProps } from "../interfaces/ModalsProps";

export const ModalClose = ({
  modalDelete,
  closeModalDelete,
  dataVideo,
  pedirVideos,
  eliminarVideo,
}: ModalCloseProps) => {
  return (
    <Modal
      isOpen={modalDelete}
      onRequestClose={closeModalDelete}
      style={CustomStylesModals}
      className={"modal-content w-25 text-left"}
      contentLabel=""
    >
      <div className="modal-header">
        <button
          type="button"
          className="btn-close"
          onClick={closeModalDelete}
        ></button>
      </div>
      <div className="modal-body">
        <h6 className="pl-4">Seguro que quiere eliminar este video?</h6>
      </div>
      <div className="modal-footer">
        <button
          className="btn btn-outline-primary btn-md "
          onClick={closeModalDelete}
        >
          Cancelar
        </button>
        <button
          className="btn btn-primary btn-md "
          onClick={async () => {
            await eliminarVideo(dataVideo.id);
            await pedirVideos();
            closeModalDelete();
          }}
        >
          Eliminar
        </button>
      </div>
    </Modal>
  );
};
