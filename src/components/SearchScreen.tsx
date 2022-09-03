import { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { ModalClose } from "./ModalClose";
import { ModalDescription } from "./ModalDescription";
import { obtenerVideoID } from "../helpers/tools";

export const SearchScreen = () => {
  const YT_API_KEY = "AIzaSyBoUvv4Sq01EMutVj71rU_cImIdktrIYR8";

  // Data Videos
  const [videos, setVideos] = useState<any>([]);

  // Modal Delete
  const [modalDelete, setModalDelete] = useState(false);

  // Modal Description
  const [modalDescription, setModalDescription] = useState(false);

  const [selectedVideo, setSelectedVideo] = useState({
    createdAt: "",
    description: "",
    thumbnail: "",
    id: "",
    url: "",
    title: "",
  });

  const openModalDelete = () => {
    setModalDelete(true);
  };

  const closeModalDelete = () => {
    setModalDelete(false);
  };

  const closeModalDescription = () => {
    setModalDescription(false);
  };

  const pedirVideos = async () => {
    const responseGET = await fetch(
      `https://g9y6jtrkh6.execute-api.sa-east-1.amazonaws.com/videos`
    );
    const dataGET = await responseGET.json();

    let sortedDates = dataGET
      .map((video: any) => {
        return { ...video, createdAt: new Date(video.createdAt) };
      })
      .sort((a: any, b: any) => b.createdAt - a.createdAt);

    console.log(sortedDates);
    setVideos(sortedDates);
  };

  const eliminarVideo = async (videoID: string) => {
    const responseDEL = await fetch(
      `https://g9y6jtrkh6.execute-api.sa-east-1.amazonaws.com/videos/${videoID}`,
      { method: "DELETE" }
    );
  };

  useEffect(() => {
    pedirVideos();
  }, []);

  return (
    <>
      <div className="row bg-white">
        <div className="col-12">
          <div className="">
            <Formik
              initialValues={{ search: "" }}
              onSubmit={async (values) => {
                let searchVideoID = obtenerVideoID(values.search);
                const response = await fetch(
                  `https://www.googleapis.com/youtube/v3/videos?key=${YT_API_KEY}&part=snippet&id=${searchVideoID}&type=video`
                );

                const data = await response.json();
                if (typeof data != "object") return;
                if (!Array.isArray(data.items)) return;

                if (typeof data.items[0] === "object") {
                  try {
                    const body = {
                      thumbnail: data.items[0].snippet.thumbnails.default.url,
                      title: data.items[0].snippet.title,
                      description: data.items[0].snippet.description,
                      url: values.search,
                    };

                    const requestOptions = {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        Authorization:
                          "Client-ID wfzptP7LjMk5uptximqeBxS9b8PnvpcXVhenrXXwU04",
                      },
                      body: JSON.stringify(body),
                    };

                    fetch(
                      "https://g9y6jtrkh6.execute-api.sa-east-1.amazonaws.com/videos",
                      requestOptions
                    )
                      .then((response) => response.json())
                      .then((data) => pedirVideos());
                  } catch (e) {}
                }
              }}
            >
              <Form>
                <p className="fw-bold mb-2 mt-2 ">Añadir nuevo video</p>
                <div className="input-group mb-3">
                  <Field
                    name="search"
                    className="form-control p-2 rounded"
                    placeholder="Añadir"
                    autoComplete="off"
                  />
                  <button
                    type="submit"
                    className="btn btn-block btn-primary input-group-text w-25"
                  >
                    Añadir
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
          <div className="">
            <div className="row">
              {videos.map((video: any, index: string) => (
                <div
                  className="card col-4 border border-white position-relative"
                  key={index}
                >
                  <button
                    className="btn btn-lg  text-white position-absolute top-0 end-0 p-4"
                    onClick={() => {
                      console.log("enviar Id a la api de youtube");
                      setSelectedVideo(video);
                      openModalDelete();
                    }}
                  >
                    <div className="bi bi-x-square-fill   text-white  "></div>
                  </button>

                  <button
                    className="btn mb-4 p-0"
                    style={{ height: "250px", width: "100%" }}
                    onClick={() => {
                      setSelectedVideo(video);
                      setModalDescription(true);
                    }}
                  >
                    <img
                      src={video.thumbnail}
                      alt=""
                      style={{ height: "250px", width: "100%" }}
                      className="p-0"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Modal de Cierre */}
          <ModalClose
            modalDelete={modalDelete}
            closeModalDelete={closeModalDelete}
            dataVideo={selectedVideo}
            pedirVideos={pedirVideos}
            eliminarVideo={eliminarVideo}
          />

          {/* Modal de Descripción */}
          <ModalDescription
            modalDescription={modalDescription}
            dataVideo={selectedVideo}
            closeModalDescription={closeModalDescription}
          />
        </div>
      </div>
    </>
  );
};
