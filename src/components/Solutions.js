import React from "react";

const SolutionsLayout = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Enter a world of solutions, designed 
          for your business
        </h2>
        <p className="mt-4 text-lg text-gray-500 leading-relaxed text-center pt-3">
          Cutting-edge cloud-based business management solutions to amplify operational efficiency, <br/>
          uncover new opportunities, stay agile in the rapidly changing market, and outperform competitors.
        </p>
      </div>

      <div className="mt-12 grid sm:grid-cols-3 lg:grid-cols-5 mx-52 pb-5 pt-5 w-auto">
        {/* AI */}
        <div className="mx-4 border border-[#3c39eb] rounded-3xl p-6 text-center shadow-sm hover:shadow-lg">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
              <span className="text-2xl font-bold">AvI</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-blue-700">AV integration</h3>
          <p className="mt-2 text-sm text-gray-600">
            Accelerate your organization’s growth with an agile, scalable, and intuitive platform.
          </p>
        </div>

        {/* IT */}
        <div className="mx-4 border border-[#a042ff] rounded-3xl p-6 text-center shadow-sm hover:shadow-lg">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
              <span className="text-2xl font-bold">IT</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-purple-700">Interactive Technology</h3>
          <p className="mt-2 text-sm text-gray-600">
            True Omnichannel, All-in-One Retail Management Solution.
          </p>
        </div>

        {/* DM */}
        <div className="mx-4 border border-[#00d2fb] rounded-3xl  p-6 text-center shadow-sm hover:shadow-lg">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600">
              <span className="text-2xl font-bold">DM</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-cyan-700">Digital Media</h3>
          <p className="mt-2 text-sm text-gray-600">
            Next-Gen Property Management Software.
          </p>
        </div>

        {/* CS */}
        <div className="mx-4 border border-[#ff6663] rounded-3xl  p-6 text-center shadow-sm hover:shadow-lg">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
              <span className="text-2xl font-bold">CS</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-red-700">Collaboration Solutions</h3>
          <p className="mt-2 text-sm text-gray-600">
            Ace pedagogical management with Proscene SMIS.
          </p>
        </div>
        {/* AS */}
        <div className="mx-4 border border-[#13185e] rounded-3xl  p-6 text-center shadow-sm hover:shadow-lg">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
              <span className="text-2xl font-bold">AS</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold #16213D">Automation Solutions</h3>
          <p className="mt-2 text-sm text-gray-600">
            Ace pedagogical management with Proscene SMIS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolutionsLayout;
