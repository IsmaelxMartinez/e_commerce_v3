import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick"; // Import React Slick
import "../styles/style.css"; // Make sure to include your styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  // Slick Carousel settings
  const settings = {
    dots: true, // Show dots at the bottom
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Speed of autoplay
    arrows: true, // Show arrows for navigation
  };

  console.log("Rendering Slider");

  return (
    <main>
      <div className="opening-text">
        <p>Here at Sports Plus we strive to offer the best sports equipment!</p>
      </div>
      {/* React Slick Carousel */}
      <Slider {...settings} className="carousel">
        <div className="products outdoor-home">
          <Link to="/products?category=outdoor">
            <img src="/home-page-pics/category-1.png" alt="Outdoor Equipment" />
          </Link>
        </div>
        <div className="products indoor-home">
          <Link to="/products?category=indoor">
            <img src="/home-page-pics/category-2.jpeg" alt="Indoor Equipment" />
          </Link>
        </div>
        <div className="products professional-home">
          <Link to="/products?category=professional">
            <img
              src="/home-page-pics/category-3.jpeg"
              alt="Professional Gear"
            />
          </Link>
        </div>
        <div className="products other-home">
          <Link to="/products?category=accessory">
            <img src="/home-page-pics/category-4.jpeg" alt="Accessories" />
          </Link>
        </div>
      </Slider>
    </main>
  );
}

export default Home;
