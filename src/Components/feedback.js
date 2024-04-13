import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, right: "-40px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, left: "-40px" }}
      onClick={onClick}
    />
  );
}

function Feedback({ feedbackData }) {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    fade: true,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const { image, testimonials } = feedbackData;

  return (
    <section className="flex flex-col items-center py-12">
      <div className="w-4/5 flex-col md:flex-row flex items-center rounded-xl bg-[rgba(176,146,106,0.7)] p-8">
        <div className="flex flex-col justify-center text-center md:text-start md:gap-4 text-white md:w-1/2">
          <h1 className="text-xl md:text-4xl">Our Clients</h1>
          <h1 className="text-2xl md:text-5xl">Why Startups Love FusionX</h1>
        </div>
        <div className="bg-[rgba(250,231,201,1)] w-full md:w-1/2 mt-8 md:m-0 px-14 py-8 rounded-xl text-center md:text-start">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <h1 className="text-md md:text-2xl md:underline">
                  {testimonial.quote}
                </h1>
                <p className="text-lg my-8 hidden md:block">
                  {testimonial.content}
                </p>
                <div className="flex flex-col md:flex-row items-center gap-8 mt-4 md:m-0">
                  <img
                    src={image[index]}
                    alt={testimonial.author}
                    className="rounded-full"
                  />
                  <p className="text-sm">{testimonial.author}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
