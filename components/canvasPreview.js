import { useEffect, useRef, useState } from "react";

export default function CanvasPreview({ options = {} }) {
  const canvasRef = useRef(null);

  const { w, h, c, ct, t } = options;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.fillStyle = `#${c}`;
    context.fillRect(0, 0, w, h);

    const text = t || `${w} x ${h}`;

    const fontSize = w / 12;

    if (fontSize >= 10) {
      context.font = `bold ${fontSize}px Inter`;
      context.textAlign = "center";
      context.fillStyle = `#${ct}`;
      context.fillText(text, w / 2, h / 2 + fontSize / 2);
    }
  }, [options]);

  return <canvas ref={canvasRef} width={w} height={h} />;
}
