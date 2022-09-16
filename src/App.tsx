import { useRef, useCallback, useState, useEffect } from "react";
import SignatureCanvas from "react-signature-canvas";
import "./styles.css";

export default function App() {
  const padRef = useRef(null);
  const [canvas, setCanvas] = useState<string | undefined>(undefined);
  const [canvasVisibility, setCanvasVisibility] = useState(false);

  const clearSignatureCanvas = useCallback(() => {
    padRef?.current?.clear();
    setCanvas(undefined);
    setCanvasVisibility(false);
  }, []);

  const handleGetCanvas = useCallback(() => {
    const canvas = padRef?.current?.toDataURL();

    setCanvas(canvas);
    setCanvasVisibility(true);
  }, []);

  return (
    <div className="App">
      <SignatureCanvas
        ref={padRef}
        canvasProps={{
          width: 500,
          height: 200
        }}
      />

      <hr />

      {canvasVisibility && <img src={canvas} alt="signature" />}

      <button onClick={clearSignatureCanvas}>clear</button>
      <button onClick={handleGetCanvas}>save</button>
    </div>
  );
}
