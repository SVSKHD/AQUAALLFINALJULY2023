import Carousel from "react-bootstrap/Carousel";

const AquaCarousel = (images) => {
  return (
    <Carousel>
      {images.map((r, i) => (
        <Carousel.Item>
          <img className="d-block w-100" src={r.image} alt="First slide" />
          <Carousel.Caption>
            <h3>{r.title}</h3>
            <p>{r.subtitle}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default AquaCarousel;
