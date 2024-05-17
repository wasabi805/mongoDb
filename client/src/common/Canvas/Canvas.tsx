import React, { useRef, useEffect } from "react";
const test = `https://cdn.marvel.com/u/prod/marvel/i/mg/6/70/603d5b82a7e65/clean.jpg`;
const Canvas = ({ b64Str, height, width }) => {
  const canvas = React.useRef(null);

  React.useEffect(() => {
    if (canvas.current && b64Str) {
      const ctx = canvas?.current?.getContext("2d");
      console.log("what is context", b64Str);

      const image = new Image();

      image.onload = function () {
        ctx.drawImage(image, 0, 0, 1000, 1000);
      };
      /*!important : setting the image.src has to wait for ctx draw to finish
        https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images
        "...If you try to call drawImage() before the image has finished loading, it won't do anything ."
        */
      image.src = b64Str;
    }
  }, [b64Str]);

  return <canvas ref={canvas} height={height} width={width}></canvas>;
};

export default Canvas;
