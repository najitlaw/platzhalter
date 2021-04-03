import { useEffect, useRef } from "react";
import { draw } from "../api";

const CanvasPreview = ({ options = {} }) => {
  const canvasRef = useRef(null);

  const { w, h, c, ct, t } = options;

  useEffect(() => {
    const canvas = canvasRef.current;
    draw(canvas, w, h, c, ct, t);
  }, [options]);

  return <canvas ref={canvasRef} width={w} height={h} />;
};

export default CanvasPreview;
