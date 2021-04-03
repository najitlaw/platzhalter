import { createCanvas, registerFont } from "canvas";
import path from "path";

registerFont(path.resolve("./public/Inter-Bold.ttf"), {
  family: "Inter",
});

export default (req, res) => {
  const width = parseInt(req.query.w) <= 10000 ? parseInt(req.query.w) : 300;
  const height = parseInt(req.query.h) <= 10000 ? parseInt(req.query.h) : 300;

  const bgColor = req.query.c || "fff";
  const fgColor = req.query.ct || "000";

  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");

  context.fillStyle = `#${bgColor}`;

  const text = req.query.t || `${width} x ${height}`;

  const fontSize = width / 12;

  if (fontSize >= 10) {
    context.font = `bold ${fontSize}px Inter`;
    context.textAlign = "center";
    context.fillStyle = `#${fgColor}`;
    context.fillText(text, 0 + width / 2, height + fontSize / 2 - height / 2);
  }

  res.setHeader("Content-Type", "image/png");
  res.status(200).send(canvas.toBuffer("image/png"));
};
