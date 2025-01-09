import React from "react";

function ChooseYourFocus () {
  const cards = [
    {
      title: "Digitalize brick-and-mortar store experience",
      description:
        "Adopt advanced and feature-rich mobile POS solutions to elevate customer experience and secure in-store operational efficiency",
      icon: "📱",
    },
    {
      title: "Harmonize omnichannel commerce",
      description:
        "Deliver a truly unified experience across all sales channels through a single, centralized commerce solution",
      icon: "🔗",
    },
    {
      title: "Simplify and unify end-to-end retail operations",
      description:
        "Improve front-to-back retail operations, across all locations and sales channels with Priority’s single ERP and Retail Management Solution",
      icon: "⚙️",
    },
  ];

  return (
    <div className="bg-white py-4 place-content-center">
      <h2 className="text-center text-2xl font-bold pb-5 text-[#081129] mb-8">
        Choose your focus with a modular approach:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg shadow-[#b2c6f8] rounded-lg p-8 mr-32 ml-32 text-center place-content-center"
          >
            <div className="text-5xl mb-4 text-purple-500">{card.icon}</div>
            <h3 className="text-lg py-5 font-semibold text-gray-800 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseYourFocus ;
