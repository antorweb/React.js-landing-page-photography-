// import React from "react";

// const Discover = () => {
//   return (
//     <>
//       <section id="discover" className="my-[150px]">
//         <div className="container">
//           <div id="discover-row " className="">
//             <div className="flex justify-center">
//               <div className="w-[467px]  text-center leading-[70px]">
//                 <h2 className="text-[80px] font-medium font-com  text-main">
//                   Discover my <span className=" italic">featured</span>{" "}
//                   <span className=" italic  border-b-2">works</span>
//                 </h2>
//               </div>
//             </div>
//             <div className="mt-[48px] flex justify-center gap-[48px]">
//               <button className="text-[18px] font-normal hover:font-semibold font-inter text-main">
//                 All
//               </button>
//               <button className="text-[18px] font-normal hover:font-semibold font-inter text-main">
//                 Maternity
//               </button>
//               <button className="text-[18px] font-normal hover:font-semibold font-inter text-main">
//                 Portrait
//               </button>
//               <button className="text-[18px] font-normal hover:font-semibold font-inter text-main">
//                 Travel
//               </button>
//               <button className="text-[18px] font-normal hover:font-semibold font-inter text-main">
//                 Weeding
//               </button>
//               <button className="text-[18px] font-normal hover:font-semibold font-inter text-main">
//                 Others
//               </button>
//             </div>
//             <div className="flex justify-center">
//               <div className="w-[300px] h-[350px] mt-[176px] mr-[35px] bg-[#C4C4C4]">
//                 <p className="text-[20px] font-medium font-ow text-main">
//                   Headshot
//                 </p>
//               </div>
//               <div className="w-[350px] h-[400px]  mt-[64px] mr-[70px] bg-[#C4C4C4]">
//                 <p className="text-[20px] font-medium font-ow text-main">
//                   Maternity
//                 </p>
//               </div>
//               <div className="w-[300px] h-[300px] mt-[226px] mr-[35px] bg-[#C4C4C4]">
//                 <p className="text-[20px] font-medium font-ow text-main">
//                   Weeding
//                 </p>
//               </div>
//               <div className="w-[300px] h-[400px] mt-[92px] bg-[#C4C4C4]">
//                 <p className="text-[20px] font-medium font-ow text-main">
//                   Portrait
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Discover;


import React from "react";

const Discover = () => {
  return (
    <>
      <section
        id="discover"
        className="my-[80px] md:my-[120px] lg:my-[150px]"
      >
        <div className="container">
          <div id="discover-row">

            {/* -------- Heading -------- */}
            <div className="flex justify-center px-4">
              <div className="w-full md:w-[467px] text-center leading-[40px] md:leading-[60px] lg:leading-[70px]">
                <h2 className="text-[36px] md:text-[60px] lg:text-[80px] font-medium font-com text-main">
                  Discover my <span className="italic">featured</span>{" "}
                  <span className="italic border-b-2">works</span>
                </h2>
              </div>
            </div>

            {/* -------- Buttons -------- */}
            <div className="mt-[32px] lg:mt-[48px] flex flex-wrap justify-center gap-[20px] lg:gap-[48px] px-4">
              <button className="text-[16px] lg:text-[18px] font-normal hover:font-semibold font-inter text-main">
                All
              </button>
              <button className="text-[16px] lg:text-[18px] font-normal hover:font-semibold font-inter text-main">
                Maternity
              </button>
              <button className="text-[16px] lg:text-[18px] font-normal hover:font-semibold font-inter text-main">
                Portrait
              </button>
              <button className="text-[16px] lg:text-[18px] font-normal hover:font-semibold font-inter text-main">
                Travel
              </button>
              <button className="text-[16px] lg:text-[18px] font-normal hover:font-semibold font-inter text-main">
                Weeding
              </button>
              <button className="text-[16px] lg:text-[18px] font-normal hover:font-semibold font-inter text-main">
                Others
              </button>
            </div>

            {/* -------- Image Boxes -------- */}
            <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-center gap-[20px] lg:gap-0 mt-[60px] lg:mt-[0] px-4">

              {/* Box 1 */}
              <div className="
                w-[160px] h-[200px]
                md:w-[220px] md:h-[260px]
                lg:w-[300px] lg:h-[350px]
                mt-[20px] lg:mt-[176px] lg:mr-[35px]
                bg-[#C4C4C4] flex items-center justify-center
              ">
                <p className="text-[16px] lg:text-[20px] font-medium font-ow text-main">
                  Headshot
                </p>
              </div>

              {/* Box 2 */}
              <div className="
                w-[180px] h-[240px]
                md:w-[260px] md:h-[300px]
                lg:w-[350px] lg:h-[400px]
                mt-[20px] lg:mt-[64px] lg:mr-[70px]
                bg-[#C4C4C4] flex items-center justify-center
              ">
                <p className="text-[16px] lg:text-[20px] font-medium font-ow text-main">
                  Maternity
                </p>
              </div>

              {/* Box 3 */}
              <div className="
                w-[160px] h-[200px]
                md:w-[220px] md:h-[260px]
                lg:w-[300px] lg:h-[300px]
                mt-[20px] lg:mt-[226px] lg:mr-[35px]
                bg-[#C4C4C4] flex items-center justify-center
              ">
                <p className="text-[16px] lg:text-[20px] font-medium font-ow text-main">
                  Weeding
                </p>
              </div>

              {/* Box 4 */}
              <div className="
                w-[160px] h-[220px]
                md:w-[220px] md:h-[280px]
                lg:w-[300px] lg:h-[400px]
                mt-[20px] lg:mt-[92px]
                bg-[#C4C4C4] flex items-center justify-center
              ">
                <p className="text-[16px] lg:text-[20px] font-medium font-ow text-main">
                  Portrait
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Discover;
