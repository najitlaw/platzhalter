import { createCanvas, registerFont } from "canvas";
import path from "path";

registerFont(path.resolve("./public/Inter-Bold.ttf"), {
  family: "Inter",
});

export default (req, res) => {
  const width = parseInt(req.query.w) || 300;
  const height = parseInt(req.query.h) || 300;

  const bgColor = req.query.c || "fff";
  const fgColor = req.query.ct || "000";

  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");

  const grd = context.createLinearGradient(0, 0, width, 0);
  grd.addColorStop(0, `#${bgColor}`);
  grd.addColorStop(1, "white");

  // context.fillStyle = `#${bgColor}`;
  context.fillStyle = grd;
  context.fillRect(0, 0, width, height);

  const text = req.query.t || "platzhalter";

  context.font = "bold 21pt Inter";
  context.textAlign = "center";
  context.fillStyle = `#${fgColor}`;
  context.fillText(text, 0 + width / 2, height - height / 2);

  const buffer = canvas.toBuffer("image/png");

  res.setHeader("Content-Type", "image/png");

  res.status(200).send(buffer);
};
