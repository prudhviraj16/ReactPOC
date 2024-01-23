import Carousel from "react-bootstrap/Carousel";
import "./slider.css";
import { CarouselSlide } from "../../models/carousel";

export default function Slider({ slides }: { slides: CarouselSlide[] }) {
  return (
    <Carousel>
      {slides?.map((slide: CarouselSlide, index) => (
        <Carousel.Item interval={1000} key={index}>
          <img className="d-block w-100" src={slide.image} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
