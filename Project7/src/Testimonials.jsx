import React from "react";
import "./style.css";
import { useState } from "react";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life!",
      author: "Bob Johnson",
    },
    {
      quote: "Exceptional service and top-notch quality!",
      author: "Emily Clark",
    },
    {
      quote: "A must-have tool for every professional.",
      author: "Michael Thompson",
    },
    {
      quote: "Customer support was responsive and helpful.",
      author: "Samantha Lee",
    },
    {
      quote: "I was amazed by the performance and results.",
      author: "David Kim",
    },
    {
      quote: "Simple, efficient, and effective!",
      author: "Priya Sharma",
    },
    {
      quote: "Great value for the price. Highly satisfied!",
      author: "Carlos Martinez",
    },
    {
      quote: "User-friendly interface and smooth functionality.",
      author: "Nina Patel",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };
  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>

      <div className="testimonials-author">
        - {testimonials[currentIndex].author}
      </div>

      <div className="testimonials-nav">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}

export default Testimonials;
