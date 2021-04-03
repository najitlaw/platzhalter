import { createCanvas, registerFont } from "canvas";
import path from "path";

registerFont(path.resolve("./public/Inter-Bold.ttf"), {
  family: "Inter",
});

export default (req, res) => {
  const width = parseInt(req.query.w) <= 10000 ? parseInt(req.query.w) : 300;
  const height = parseInt(req.query.h) <= 10000 ? parseInt(req.query.h) : 300;

  const canvas = getCanvas(
    width,
    height,
    req.query.c,
    req.query.ct,
    req.query.t
  );

  res.setHeader("Content-Type", "image/png");
  res.status(200).send(canvas.toBuffer("image/png"));
};

export const getCanvas = (
  width = 300,
  height = 300,
  backgroundColor = "fff",
  textColor = "000",
  text
) => {
  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");

  context.fillStyle = `#${backgroundColor}`;
  context.fillRect(0, 0, width, height);

  const textContent = text || `${width} x ${height}`;

  const fontSize = width / 12;

  if (fontSize >= 10) {
    context.font = `bold ${fontSize}px Inter`;
    context.textAlign = "center";
    context.fillStyle = `#${textColor}`;
    context.fillText(
      textContent,
      0 + width / 2,
      height + fontSize / 2 - height / 2
    );
  }

  return canvas;
};
