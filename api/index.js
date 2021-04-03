import { createCanvas, registerFont } from "canvas";
import path from "path";

export default (req, res) => {
  registerFont(path.resolve("./public/Inter-Bold.ttf"), {
    family: "Inter",
  });

  const w = parseInt(req.query.w) <= 10000 ? parseInt(req.query.w) : 300;
  const h = parseInt(req.query.h) <= 10000 ? parseInt(req.query.h) : 300;

  const canvas = getCanvas(w, h, req.query.c, req.query.ct, req.query.t);

  res.setHeader("Content-Type", "image/png");
  res.status(200).send(canvas.toBuffer("image/png"));
};

export const getCanvas = (w = 300, h = 300, c = "fff", ct = "000", t) => {
  const canvas = createCanvas(w, h);
  draw(canvas, w, h, c, ct, t);

  return canvas;
};

export const draw = (canvas, w, h, c, ct, t) => {
  const context = canvas.getContext("2d");

  context.fillStyle = `#${c}`;
  context.fillRect(0, 0, w, h);

  const textContent = t || `${w} x ${h}`;

  const fontSize = w / 12;

  if (fontSize >= 10) {
    context.font = `bold ${fontSize}px Inter`;
    context.textAlign = "center";
    context.fillStyle = `#${ct}`;
    context.fillText(textContent, 0 + w / 2, h + fontSize / 2 - h / 2);
  }
};
