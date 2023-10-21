import { useState } from "react";

import Modal from "./components/Modal";
import ImageSlider from "./components/ImageSlider";

import { images } from "./constants";

import "./index.css";

export default function App() {
  const [active, setActive] = useState(0);
  const [show, setShow] = useState(false);

  const handleClick = (i) => {
    setActive(i);
    setShow(true);
  };

  const onModalClose = () => {
    setShow(false);
  };

  const handleNext = () => {
    if (active < images.length - 1) {
      setActive(active + 1);
    }
  };

  const handlePrev = () => {
    if (active > 0) {
      setActive(active - 1);
    }
  };

  return (
    <div className="App">
      <div className="image-listing">
        {images.map((e, i) => (
          <div
            key={e.caption}
            className={i === active ? "active" : ""}
            onClick={() => handleClick(i)}
          >
            <img alt={e.caption} src={e.image_url} />
          </div>
        ))}
      </div>
      <Modal title="Lightbox" show={show} onClose={onModalClose}>
        <ImageSlider active={active} onNext={handleNext} onPrev={handlePrev} />
      </Modal>
    </div>
  );
}
