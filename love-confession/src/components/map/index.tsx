const IframeMap = () => {
  return (
    <div className="w-full h-[300px]">
      <iframe
        title="Google Map"
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.502451207251!2d106.65843011533474!3d10.771734692324776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752edfc7f59c1f%3A0xc35b0c35dfbfc65d!2zQ2FvIMSR4bqzbmcgWHXDom4gTMOq!5e0!3m2!1svi!2s!4v1617156887369!5m2!1svi!2s"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default IframeMap;
