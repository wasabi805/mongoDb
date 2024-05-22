import React, { useRef, useEffect } from "react";
const test = `https://cdn.marvel.com/u/prod/marvel/i/mg/6/70/603d5b82a7e65/clean.jpg`;
const Canvas = ({ b64Str, height, width, className, shape, style }) => {
  const canvas = React.useRef(null);

  const image = new Image();

  const handleCircleAvatar = async ({ canvas, b64Str, shape }) => {
    console.log("what was loaded", { canvas, b64Str, shape });

    if (canvas.current && b64Str && shape === "circle") {
      const ctx = canvas?.current?.getContext("2d");
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.current.width, canvas.current.height);

      const circle = {
        x: canvas.current.width / 2,
        y: canvas.current.height / 2,
        radius: 50,
        // radius: 70,
      };

      ctx.beginPath();
      ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.clip();

      image.onload = function () {
        ctx.drawImage(image, 0, 0, width, height);
      };
      /*!important : setting the image.src has to wait for ctx draw to finish
            https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images
            "...If you try to call drawImage() before the image has finished loading, it won't do anything ."
            */

      image.src = b64Str;
    }
  };

  const handleSqaureAvatar = ({ canvas, b64Str, shape }) => {
    if (canvas.current && b64Str && shape === "square") {
      const ctx = canvas?.current?.getContext("2d");
      const hRatio = canvas.current.width / image.width;
      const vRatio = canvas.current.height / image.height;
      const ratio = Math.min(hRatio, vRatio);
      console.log("what is the ratio", ratio);
      const centerShift_x = (canvas.current.width - image.width * ratio) / 2;
      const centerShift_y = (canvas.current.height - image.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
      ctx.drawImage(
        image,
        0,
        0,
        image.width,
        image.height,
        centerShift_x,
        centerShift_y,
        image.width * ratio,
        image.height * ratio,
      );
      image.onload = function () {
        ctx.drawImage(image, 0, 0, width, height);
      };
      /*!important : setting the image.src has to wait for ctx draw to finish
        https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images
        "...If you try to call drawImage() before the image has finished loading, it won't do anything ."
        */
      image.src = b64Str;
      canvas.current;

      console.log(canvas.current.id, "canvas.current ");
    }
  };

  React.useEffect(() => {
    handleCircleAvatar({ canvas, b64Str, shape });
    handleSqaureAvatar({ canvas, b64Str, shape });
    /*circular image*/
    /** square image */
  }, [canvas, b64Str, shape]);

  return (
    <canvas
      ref={canvas}
      className={className && className}
      height={height}
      width={width}
      style={{ ...(style && style) }}
    ></canvas>
  );
};

export default Canvas;
