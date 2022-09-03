export type ModalCloseProps = {
  dataVideo:  { createdAt: string, description: string, thumbnail: string, id: string, url: string, title: string},
  modalDelete: boolean;
  closeModalDelete: () => void;
  pedirVideos: () => void;
  eliminarVideo: (videoID:string) => void;
}

export type ModalDescriptionProps = {
  dataVideo:  { createdAt: string, description: string, thumbnail: string, id: string, url: string, title: string},
  modalDescription:boolean,
  closeModalDescription: () => void,
}

export type ModalPlayVideosProps = {
  dataVideo: { createdAt: string, description: string, thumbnail: string, id: string, url: string, title: string},
  modalPlayVideo: boolean,
  closeModalPlayVideo: () => void,
}
