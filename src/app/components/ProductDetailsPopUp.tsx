'use client';
import React, { useState } from 'react';

interface ProductDetailsPopUpProps {
    onClose: () => void; 
}


function ProductDetailsPopUp({ onClose }: ProductDetailsPopUpProps) {
    
  const [activeTab, setActiveTab] = useState('specifications');

  return (
    <div onClick={onClose} className='fixed inset-0 z-40 bg-black bg-opacity-60 flex justify-start transition-all transform ease-in-out duration-500'>
    <div className='rounded-full lg:right-[25%] right-[6%] top-6 lg:top-10 border absolute w-7 h-7 lg:w-12 lg:h-12 cursor-pointer flex justify-center items-center text-xs bg-white text-[#396571]'>✖</div>

    <div className='flex justify-center items-center mx-auto'>

      <div onClick={(event) => {
        event.stopPropagation();
      }} className='md:max-w-lg px-4 w-full mx-4 bg-white border overflow-hidden text-[#396571] border-[#396571] rounded-lg shadow-lg md:p-6 p-4'>
          {/* Tab Navigation */}
          <div className='flex border-b relative border-gray-200 mb-4 overflow-hidden'>
            <button
              onClick={() => setActiveTab('specifications')}
              className={`w-1/2 py-2 text-center text-base font-semibold ${
                activeTab === 'specifications'
                  ? 'text-[#38B557] border-b-2 border-[#38B557] transform transition-all ease-in-out duration-500'
                  : 'text-gray-500 border-b-2'
              }`}
            >
              Specifications
            </button>
            <button
              onClick={() => setActiveTab('warranty')}
              className={`w-1/2 py-2 text-center md:text-base text-sm font-semibold ${
                activeTab === 'warranty'
                  ? 'text-[#38B557] border-b-2 border-[#38B557] transform transition-all ease-in-out duration-500'
                  : 'text-gray-500 border-b-2'
              }`}
            >
              Warranties and Service
            </button>
          </div>

          {/* Content Section with fixed width and min-height */}
            <div className='min-h-[300px] transition-all duration-500 ease-in-out'>
              {/* Specifications Section */}
              {activeTab === 'specifications' && (
                <div className='w-full md:h-[500px] h-[440px] overflow-hidden hover:overflow-y-scroll scrollbar-thin'>
                  <h2 className='md:text-xl text-base font-semibold text-[#38B557] mb-2'>
                    Product details
                  </h2>
                  <div className='w-full mb-4 border md:text-base text-xs border-[#396571] rounded-lg'>
                    {/* Specifications details */}
                    <div className='grid grid-cols-2 border-b border-[#396571]'>
                      <div className='font-semibold md:p-4 p-2 border-r border-[#396571]'>
                        Solar Panel
                      </div>
                      <div className='md:p-4 p-2'>
                        Type: Monoperc Bifacial
                        <br />
                        Wattage: 545 Watts
                        <br />
                        Brand: Adani
                        <br />
                        Number: 9 nos
                      </div>
                    </div>
                    <div className='grid grid-cols-2 border-b border-[#396571]'>
                      <div className='font-semibold md:p-4 p-2 border-r border-[#396571]'>
                        Solar Inverter
                      </div>
                      <div className='md:p-4 p-2'>
                        Type: On-grid string inverter
                        <br />
                        Capacity: 3 kW
                        <br />
                        Brand: Growwatt
                        <br />
                        Phase: Single phase
                        <br />
                        Outdoor rating: IP65
                      </div>
                    </div>
                    <div className='grid grid-cols-2 border-b border-[#396571]'>
                      <div className='font-semibold md:p-4 p-2 border-r border-[#396571]'>
                        Structure
                      </div>
                      <div className='md:p-4 p-2'>
                        Type: Elevated structure
                        <br />
                        Height: 6ft-8ft
                        <br />
                        Material: HDGI
                        <br />
                        Thickness: 1.2 mm
                        <br />
                        Windspeed resilience: 120 kmph
                      </div>
                    </div>
                    <div className='grid grid-cols-2 border-b border-[#396571]'>
                      <div className='font-semibold md:p-4 p-2 border-r border-[#396571]'>
                        AC Cables
                      </div>
                      <div className='md:p-4 p-2'>
                        Brand: Polycab
                        <br />
                        Length: 20 m
                        <br />
                        Thickness: 4–6 sq mm
                      </div>
                    </div>
                    <div className='grid grid-cols-2 border-b border-[#396571]'>
                      <div className='font-semibold md:p-4 p-2 border-r border-[#396571]'>
                        DC Cables
                      </div>
                      <div className='md:p-4 p-2'>
                        Brand: Polycab
                        <br />
                        Length: 20 m
                        <br />
                        Thickness: 4–6 sq mm
                      </div>
                    </div>
                    <div className='grid grid-cols-2 border-b border-[#396571]'>
                      <div className='font-semibold md:p-4 p-2 border-r border-[#396571]'>
                        Lightning Arrestor
                      </div>
                      <div className='md:p-4 p-2'>Single-spike</div>
                    </div>
                    <div className='grid grid-cols-2 border-b border-[#396571]'>
                      <div className='font-semibold md:p-4 p-2 border-r border-[#396571]'>
                        Other Components
                      </div>
                      <div className='md:p-4 p-2'>
                        MC4 connectors, cable ties, conduits, SPDs, earthing
                        pits, ACDB, DCDB
                      </div>
                    </div>
                    <div className='grid grid-cols-2 border-b border-[#396571]'>
                      <div className='font-semibold md:p-4 p-2 border-r border-[#396571]'>
                        Other Accessories
                      </div>
                      <div className='md:p-4 p-2'>Walkway, ladder, sprinkler</div>
                    </div>
                    <div className='grid grid-cols-2 border-b border-[#396571]'>
                      <div className='font-semibold md:p-4 p-2 border-r border-[#396571]'>
                        Solar Meter
                      </div>
                      <div className='md:p-4 p-2 text-[#38B557]'>✅</div>
                    </div>
                    <div className='grid grid-cols-2 border-b border-[#396571]'>
                      <div className='font-semibold md:p-4 p-2 border-r border-[#396571]'>
                        Bi-directional Meter
                      </div>
                      <div className='md:p-4 p-2 text-red-500'>❌</div>
                    </div>
                    <div className='grid grid-cols-2 border-b border-[#396571]'>
                      <div className='font-semibold md:p-4 p-2 border-r border-[#396571]'>
                        Installation
                      </div>
                      <div className='md:p-4 p-2 text-[#38B557]'>✅</div>
                    </div>
                    <div className='grid grid-cols-2'>
                      <div className='font-semibold md:p-4 p-2 border-r border-[#396571]'>
                        Maintenance
                      </div>
                      <div className='md:p-4 p-2 text-[#38B557]'>✅</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Warranties and Service Section */}
              {activeTab === 'warranty' && (
                <div className='w-full md:h-[500px] h-[440px] overflow-hidden hover:overflow-y-scroll scrollbar-thin'>
                  <h2 className='md:text-xl text-base font-semibold text-[#38B557] mb-2 w-full'>
                    Warranties and Service
                  </h2>
                  <div className='flex flex-col gap-8 w-full'>
                    {/* Service details */}
                    <div className='border border-[#396571] rounded-lg w-full'>
                      <div className='border-b-[1px] border-[#396571] md:p-4 p-2 lg:text-xl text-base font-bold bg-[#D7F0DD] rounded-t-lg'>
                        Warranties
                      </div>
                      <div className='grid md:text-base text-xs'>
                        <div className='grid grid-cols-2 gap-4 border-b-[1px] border-[#396571]'>
                          <div className='font-semibold border-r-[1px] border-[#396571] md:p-4 p-2'>
                            Solar Panel
                          </div>
                          <div className='md:p-4 p-2'>
                            Performance warranty: 30 years
                            <br />
                            Product warranty: 12 years
                          </div>
                        </div>
                        <div className='grid grid-cols-2 gap-4 border-b-[1px] border-[#396571]'>
                          <div className='font-semibold border-r-[1px] border-[#396571] md:p-4 p-2'>
                            Inverter
                          </div>
                          <div className='md:p-4 p-2'>Product warranty: 7 years</div>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                          <div className='font-semibold border-r-[1px] border-[#396571] md:p-4 p-2'>
                            System
                          </div>
                          <div className='md:p-4 p-2'>
                            Workmanship warranty: 5 years
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='border md:text-base text-xs border-[#396571] rounded-lg w-full'>
                      <div className='border-b-[1px] border-[#396571] md:p-4 p-2 lg:text-xl text-base font-bold bg-[#D7F0DD] rounded-t-lg'>
                        Service
                      </div>
                      <div className='grid'>
                        <div className='grid grid-cols-2 gap-4 border-b-[1px] border-[#396571]'>
                          <div className='font-semibold border-r-[1px] border-[#396571] md:p-4 p-2'>
                            Annual maintenance (from seller)
                          </div>
                          <div className='md:p-4 p-2'>5 years</div>
                        </div>
                        <div className='grid grid-cols-2 gap-4 border-b-[1px] border-[#396571]'>
                          <div className='font-semibold border-r-[1px] border-[#396571] md:p-4 p-2'>
                            Inclusions:
                            <div className='pl-4'>Breakdown support</div>
                            <div className='pl-4'>Preventive maintenance</div>
                            <div className='pl-4'>Cleaning</div>
                          </div>
                          <div className='flex flex-col gap-2 md:p-4 p-2'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className='text-[#38B557]'>✅</span>
                            <span className='text-[#38B557]'>✅</span>
                            <span className='text-red-500'>❌</span>
                          </div>
                        </div>
                        <div className='grid grid-cols-2 gap-4 border-b-[1px] border-[#396571]'>
                          <div className='font-semibold border-r-[1px] border-[#396571] md:p-4 p-2'>
                            Annual maintenance (from Zircle)
                          </div>
                          <div className='md:p-4 p-2'>5 years</div>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                          <div className='font-semibold border-r-[1px] border-[#396571] md:p-4 p-2'>
                            Inclusions:
                            <div className='pl-4'>Breakdown support</div>
                            <div className='pl-4'>Preventive maintenance</div>
                            <div className='pl-4'>Cleaning</div>
                          </div>
                          <div className='flex flex-col gap-2 md:p-4 p-2'>
                          <span></span>
                            <span></span>
                            <span></span>
                            <span className='text-[#38B557]'>✅</span>
                            <span className='text-[#38B557]'>✅</span>
                            <span className='text-red-500'>❌</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
      </div>
    </div>
    </div>
  );
}

export default ProductDetailsPopUp;
