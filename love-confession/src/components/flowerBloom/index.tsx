import { useEffect, useRef, useState } from "react";
import "./styles.scss";

const WeddingInvitation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [letterPulled, setLetterPulled] = useState(false);
  const [letterExpanded, setLetterExpanded] = useState(false);
  const [invitationVisible, setInvitationVisible] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src =
      "https://images.unsplash.com/photo-1586771107445-d3ca5fd5c11a?auto=format&fit=crop&w=1920&q=80";
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
  }, []);

  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  const handleEnvelopeClick = () => {
    setEnvelopeOpened(true);
    setTimeout(() => {
      setLetterPulled(true);
      setTimeout(() => {
        setLetterExpanded(true);
        setInvitationVisible(true);
      }, 500);
    }, 2000);
  };

  return (
    <div className="letter-wrapper ">
      <canvas ref={canvasRef} id="canvas" />
      <div className={`envelope ${letterExpanded ? "hidden" : ""}`}>
        <div
          className={`envelope-front ${envelopeOpened ? "open" : ""} ${
            letterPulled ? "zIndex" : ""
          }`}
          onClick={handleEnvelopeClick}
        >
          <div className="cover-letter">a</div>
          <div className="envelope-flap"></div>
          <div className="envelope-text">Thiệp Mời Cưới</div>
          <div
            className={`letter ${letterPulled ? "pulled" : ""} ${
              letterExpanded ? "expanded" : ""
            }`}
          >
            <div
              className={`invitation ${invitationVisible ? "visible" : ""}`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingInvitation;
