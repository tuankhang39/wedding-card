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

const WeddingCard = () => {
  const { path } = useParams();
  const { data: weddingCard, isLoading, isError } = useGetByIdQuery(path!);
  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;
  switch (weddingCard?.template) {
    case "template1":
      return <Template1 {...weddingCard} />;
    case "template2":
      return <Template2 {...weddingCard} />;
    case "template3":
      return <Template3 {...weddingCard} />;
    case "template4":
      return <Template4 {...weddingCard} />;
    case "template5":
      return <Template5 {...weddingCard} />;
    case "template6":
      return <Template6 {...weddingCard} />;
    case "template7":
      return <Template7 {...weddingCard} />;
    case "template8":
      return <Template8 {...weddingCard} />;
    case "template9":
      return <Template9 {...weddingCard} />;
    case "template10":
      return <Template10 {...weddingCard} />;
  }
  return <div>Page not found!</div>;
};

export default WeddingCard;
