import { useParams } from "react-router-dom";
import { useGetByIdQuery } from "../../api/weddingApi";
import Template1 from "../../template/template1";
import Template2 from "../../template/template2";
import Template3 from "../../template/template3";
import Template4 from "../../template/template4";
import Template5 from "../../template/template5";
import Template6 from "../../template/template6";
import Template7 from "../../template/template7";
import Template8 from "../../template/template8";
import Template9 from "../../template/template9";
import Template10 from "../../template/template10";
import Loading from "../../components/loading";
import { useEffect, useState } from "react";

function preloadImages(urls: string[]): Promise<void> {
  return new Promise((resolve) => {
    let loaded = 0;
    urls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loaded++;
        if (loaded === urls.length) {
          resolve();
        }
      };
      img.onerror = () => {
        loaded++; // vẫn tiếp tục nếu có lỗi
        if (loaded === urls.length) {
          resolve();
        }
      };
    });
  });
}

const WeddingCard = () => {
  const { path } = useParams();
  const { data: weddingCard, isLoading, isError } = useGetByIdQuery(path!);

  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  useEffect(() => {
    preloadImages(weddingCard?.images ?? []).then(() => {
      setAllImagesLoaded(true);
    });
  }, []);

  if (allImagesLoaded || isLoading) return <Loading />;
  if (isError) return <div>Error</div>;
  switch (weddingCard?.template) {
    case "template1":
      return <Template1 {...weddingCard} />;
    case "template2":
      return <Template2 {...weddingCard} />;
    case "template3":
      return <Template3 {...weddingCard} />;
    case "template4":
      return <Template4 />;
    case "template5":
      return <Template5 />;
    case "template6":
      return <Template6 />;
    case "template7":
      return <Template7 />;
    case "template8":
      return <Template8 />;
    case "template9":
      return <Template9 />;
    case "template10":
      return <Template10 {...weddingCard} />;
  }
  return <div>Page not found!</div>;
};

export default WeddingCard;
