const IframeMap = ({ src }: { src: string }) => {
  return (
    <div className="w-full h-[300px]">
      <iframe
        title="Google Map"
        className="w-full h-full"
        src={src}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default IframeMap;
