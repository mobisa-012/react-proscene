import React, { useState, useRef } from "react";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy on all items. Items must be in their original condition with a receipt for a full refund.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping typically takes 3-5 business days for domestic orders and 7-14 business days for international orders.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes, our customer support team is available 24/7 via email and live chat to assist you with any questions.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          faq={faq}
          isActive={activeIndex === index}
          onClick={() => toggleFAQ(index)}
        />
      ))}
    </div>
  );
};

const FAQItem = ({ faq, isActive, onClick }) => {
  const contentRef = useRef(null);

  return (
    <div
      className="faq-item border border-gray-300 rounded-md mb-4 overflow-hidden"
      onClick={onClick}
    >
      <div className="faq-question flex justify-between items-center p-4 cursor-pointer bg-gray-100 hover:bg-gray-200">
        <span className="text-lg font-medium">{faq.question}</span>
        <button className="text-xl font-bold">{isActive ? "-" : "+"}</button>
      </div>
      <div
        ref={contentRef}
        className="faq-answer transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isActive
            ? `${contentRef.current?.scrollHeight}px`
            : "0px",
          opacity: isActive ? 1 : 0,
        }}
      >
        <div className="p-4 bg-white">
          <p className="text-gray-700">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
