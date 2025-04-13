import React, { useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";

const FlipBookFullScreen: React.FC = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Theo dõi khi resize màn hình
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden touch-pan-x bg-gray-100">
      <HTMLFlipBook
        width={dimensions.width}
        height={dimensions.height}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        className="shadow-xl"
        style={{ padding: 0 }}
        startPage={0}
        drawShadow={true}
        flippingTime={1000}
        usePortrait={true}
        startZIndex={1}
        autoSize={true}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={0}
        showPageCorners={true}
        disableFlipByClick={true}
      >
        <div className="page bg-white flex justify-center items-center text-3xl font-bold">
          Trang 1
        </div>
        <div className="page bg-pink-100 flex justify-center items-center text-3xl font-bold">
          Trang 2
        </div>
        <div className="page bg-green-100 flex justify-center items-center text-3xl font-bold">
          Trang 3
        </div>
        <div className="page bg-yellow-100 flex justify-center items-center text-3xl font-bold">
          Trang 4
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default FlipBookFullScreen;
