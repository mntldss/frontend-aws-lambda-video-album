export   const eliminarVideo = async (videoID: string) => {
    const responseDEL = await fetch(
      `https://g9y6jtrkh6.execute-api.sa-east-1.amazonaws.com/videos/${videoID}`,
      { method: "DELETE" }
    );
  };
  