import React from 'react';

function DiamondSection() {
    return (
        <div className="relative bg-[#16213d] flex flex-col items-center justify-center overflow-hidden p-20">
        {/* Top Row */}
        <div className="flex justify-center mb-6 transform -translate-y-12 relative lg:relative lg:bottom-[-5em]">
          <div class="relative w-80 h-96 bg-cover bg-center rounded-lg shadow-lg overflow-hidden innerCardImage top-row"  style={{border:' 1px solid rgba(59,55,230,.9)'}}>
            <div class="absolute bottom-0 left-0 w-[90%] m-4 bg-white bg-opacity-90 transition-all duration-300 ease-in-out h-16 hover:h-48 rounded-lg overflow-hidden" style={{backgroundColor:' rgba(59,55,230,.9)'}}>
              <div class="flex items-center justify-center h-16 text-xl font-bold text-white" >
                Hospitality Management
              </div>

              <div class="p-4 text-center">
                <p class="text-white text-sm mb-4">
                  Next-Gen property management software
                </p>
                <button class="px-4 py-2 bg-white text-black text-sm rounded-lg shadow hover:bg-white-600 transition duration-300">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Middle Row */}
        <div className="flex justify-between w-full mx-auto mb-6 middlerow">
          <div class="relative w-80 h-96 bg-cover bg-center rounded-lg shadow-lg overflow-hidden innerCardImage"  style={{border:'1px solid rgba(85,187,249,.9)'}}>
            <div class="absolute bottom-0 left-0 w-[90%] m-4 bg-opacity-90 transition-all duration-300 ease-in-out h-48 md:h-16 md:hover:h-48 rounded-lg overflow-hidden" style={{backgroundColor:'rgba(85,187,249,.9)'}}>
              <div class="flex items-center justify-center h-16 text-xl font-bold text-white">
                PHP
              </div>

              <div class="p-4 text-center">
                <p class="text-white text-sm mb-4">
                  PHP is the best language I know.
                </p>
                <button class="px-4 py-2 bg-white text-black text-sm rounded-lg shadow hover:bg-black-600 transition duration-300">
                  Read More
                </button>
              </div>
            </div>
        </div>

        <div className="relative group w-80 h-80 flex justify-center items-center">
          <h3 class="shape-h3">We shape around your business</h3>
        </div>

        <div class="relative w-80 h-96 bg-cover bg-center rounded-lg shadow-lg overflow-hidden innerCardImage"  style={{border:'1px solid rgba(161,66,255,.9)'}}>
        <div class="absolute bottom-0 left-0 w-[90%] m-4 bg-white bg-opacity-90 transition-all duration-300 ease-in-out h-48 md:h-16 md:hover:h-48 rounded-lg overflow-hidden" style={{backgroundColor:' rgba(161,66,255,.9)'}}>
          <div class="flex items-center justify-center h-16 text-xl font-bold text-white">
            PHP
          </div>

          <div class="p-4 text-center">
            <p class="text-white text-sm mb-4">
              PHP is the best language I know.
            </p>
            <button class="px-4 py-2 bg-white text-black text-sm rounded-lg shadow hover:bg-white-600 transition duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* Bottom Row */}
        <div className="flex justify-center transform translate-y-0 relative lg:relative lg:bottom-32">
        <div class="relative w-80 h-96 bg-cover bg-center rounded-lg shadow-lg overflow-hidden innerCardImage" style={{border:' 1px solid rgba(255,115,105,.9)'}}>
        <div class="absolute bottom-0 left-0 w-[90%] m-4 bg-white bg-opacity-90 transition-all duration-300 ease-in-out h-48 md:h-16 md:hover:h-48 rounded-lg overflow-hidden" style={{backgroundColor:' rgba(255,115,105,.9)'}}>
          <div class="flex items-center justify-center h-16 text-xl font-bold text-white">
            PHP
          </div>

          <div class="p-4 text-center">
            <p class="text-white text-sm mb-4">
              PHP is the best language I know.
            </p>
            <button class="px-4 py-2 bg-white text-black text-sm rounded-lg shadow hover:bg-white-600 transition duration-300">
              Read More
            </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
}

export default DiamondSection