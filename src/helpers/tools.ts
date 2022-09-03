export const obtenerVideoID = (searchString: string) => {
    if (typeof searchString != "string") return "";

    let videoID;
    let searchStringUndercase = searchString.toLowerCase();

    if (searchStringUndercase.includes("youtu.be/")) {
      videoID = searchString.split("/").at(-1);
    } else if (searchStringUndercase.includes("youtube.com/watch?v=")) {
      videoID = searchString.split("=").at(-1);
    } else {
      videoID = "";
    }
    return videoID;
  };