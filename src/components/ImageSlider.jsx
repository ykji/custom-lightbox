import { images } from "../constants";

const ImageSlider = ({ active, onNext, onPrev }) => {
  return (
    <div className="image-slider-wrapper">
      <div className="image-slides">
        {images.map((e, i) => (
          <Slides {...e} key={e.caption} active={i === active} />
        ))}
      </div>
      <div className="image-slider-navigation">
        <span className="image-navigation next" onClick={onNext}>
          &gt;
        </span>
        <span className="image-navigation prev" onClick={onPrev}>
          &lt;
        </span>
      </div>
    </div>
  );
};

const Slides = ({ image_url, caption, active }) => {
  return (
    <div className={`image-slide`}>
      <img src={image_url} alt={caption} className={active ? "active" : ""} />
    </div>
  );
};

export default ImageSlider;
