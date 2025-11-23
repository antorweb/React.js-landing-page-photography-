// import React from "react";
// import { Link } from "react-router";
// import { FaArrowRightLong } from "react-icons/fa6";

// const Blog = () => {
//   return (
//     <>
//       <section id="blog" className=" pb-[99px]">
//         <div className="container">
//           <div id="blog-row" className="">
//             <div className="flex justify-around items-center">
//               <div>
//                 <h2 className="text-[80px] font-medium font-com">
//                   Latest <span className="border-b-2">blog</span>
//                 </h2>
//               </div>
//               <div className="w-[150px] flex ">
//                 <Link className="w-[150px] text-[18px] font-medium font-inter text-red border-b-2 flex justify-between  items-center">
//                   View All Blog <FaArrowRightLong />
//                 </Link>
//               </div>
//             </div>
//             <div className="flex justify-center gap-[130px] items-center">
//               <div>
//                 {/* ---------------- details div */}
//                 <div className="w-[470px] my-[48px] h-[382px]">
//                   <div className="w-full h-[250px] bg-[#C4C4C4]"></div>
//                   <div className="flex gap-[24px] pt-[24px] pb-[8px]">
//                     <h2 className="text-[16px] font-normal font-inter text-main">
//                       .05 Feb, 2022
//                     </h2>
//                     <h2 className="text-[16px] font-normal font-inter text-main">
//                       .5 min
//                     </h2>
//                   </div>
//                   <div className="w-[381px]">
//                     <h2 className="text-[30px] font-bold font-com text-main leading-[36px]">
//                       Speech has never been free, and that’s good
//                     </h2>
//                   </div>
//                 </div>
//                 <div className="w-[470px] h-[382px]">
//                   <div className="w-full h-[250px] bg-[#C4C4C4]"></div>
//                   <div className="flex gap-[24px] pt-[24px] pb-[8px]">
//                     <h2 className="text-[16px] font-normal font-inter text-main">
//                       .05 Feb, 2022
//                     </h2>
//                     <h2 className="text-[16px] font-normal font-inter text-main">
//                       .5 min
//                     </h2>
//                   </div>
//                   <div className="w-[381px]">
//                     <h2 className="text-[30px] font-bold font-com text-main leading-[36px]">
//                       Speech has never been free, and that’s good
//                     </h2>
//                   </div>
//                 </div>
//               </div>

//               <div className="w-[570px] h-[632px]">
//                 <div className="w-full h-[480px] bg-[#C4C4C4]"></div>
//                 <div className="flex gap-[24px] pt-[24px] pb-[8px]">
//                   <h2 className="text-[16px] font-normal font-inter text-main">
//                     .05 Feb, 2022
//                   </h2>
//                   <h2 className="text-[16px] font-normal font-inter text-main">
//                     .5 min
//                   </h2>
//                 </div>
//                 <div className="w-[508px]">
//                   <h2 className="text-[40px] font-bold font-com text-main leading-[36px]">
//                     Speech has never been free, and that’s good
//                   </h2>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Blog;


import React from "react";
import { Link } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";

const Blog = () => {
  return (
    <>
      <section
        id="blog"
        className="pb-[60px] md:pb-[80px] lg:pb-[99px] px-4 lg:px-0"
      >
        <div className="container">
          <div id="blog-row">

            {/* --------- TOP TITLE + LINK --------- */}
            <div className="flex flex-col md:flex-row justify-between md:justify-around items-start md:items-center gap-6">
              <div>
                <h2 className="text-[40px] md:text-[60px] lg:text-[80px] font-medium font-com">
                  Latest <span className="border-b-2">blog</span>
                </h2>
              </div>

              <div className="w-fit md:w-[150px] flex">
                <Link className="w-fit md:w-[150px] text-[16px] md:text-[18px] font-medium font-inter text-red border-b-2 flex justify-between items-center gap-3">
                  View All Blog <FaArrowRightLong />
                </Link>
              </div>
            </div>

            {/* --------- BLOG GRID --------- */}
            <div className="
              flex flex-col lg:flex-row
              justify-center items-center
              gap-[40px] md:gap-[60px] lg:gap-[130px]
              mt-[40px] lg:mt-0
            ">

              {/* -------- LEFT SIDE (2 small blogs) -------- */}
              <div className="flex flex-col items-center lg:items-start">

                {/* ---- card 1 ---- */}
                <div className="
                  w-[320px] md:w-[420px] lg:w-[470px]
                  h-auto my-[30px] lg:my-[48px]
                ">
                  <div className="w-full h-[180px] md:h-[220px] lg:h-[250px] bg-[#C4C4C4]"></div>

                  <div className="flex gap-[16px] md:gap-[24px] pt-[16px] md:pt-[24px] pb-[6px]">
                    <h2 className="text-[14px] md:text-[16px] font-normal font-inter text-main">
                      .05 Feb, 2022
                    </h2>
                    <h2 className="text-[14px] md:text-[16px] font-normal font-inter text-main">
                      .5 min
                    </h2>
                  </div>

                  <div className="w-[280px] md:w-[350px] lg:w-[381px]">
                    <h2 className="text-[22px] md:text-[26px] lg:text-[30px] font-bold font-com text-main leading-[30px] md:leading-[32px] lg:leading-[36px]">
                      Speech has never been free, and that’s good
                    </h2>
                  </div>
                </div>

                {/* ---- card 2 ---- */}
                <div className="
                  w-[320px] md:w-[420px] lg:w-[470px]
                  h-auto
                ">
                  <div className="w-full h-[180px] md:h-[220px] lg:h-[250px] bg-[#C4C4C4]"></div>

                  <div className="flex gap-[16px] md:gap-[24px] pt-[16px] md:pt-[24px] pb-[6px]">
                    <h2 className="text-[14px] md:text-[16px] font-normal font-inter text-main">
                      .05 Feb, 2022
                    </h2>
                    <h2 className="text-[14px] md:text-[16px] font-normal font-inter text-main">
                      .5 min
                    </h2>
                  </div>

                  <div className="w-[280px] md:w-[350px] lg:w-[381px]">
                    <h2 className="text-[22px] md:text-[26px] lg:text-[30px] font-bold font-com text-main leading-[30px] md:leading-[32px] lg:leading-[36px]">
                      Speech has never been free, and that’s good
                    </h2>
                  </div>
                </div>
              </div>

              {/* -------- RIGHT SIDE (big blog) -------- */}
              <div className="
                w-[320px] md:w-[450px] lg:w-[570px]
                h-auto
              ">
                <div className="w-full h-[250px] md:h-[380px] lg:h-[480px] bg-[#C4C4C4]"></div>

                <div className="flex gap-[16px] md:gap-[24px] pt-[16px] md:pt-[24px] pb-[6px]">
                  <h2 className="text-[14px] md:text-[16px] font-normal font-inter text-main">
                    .05 Feb, 2022
                  </h2>
                  <h2 className="text-[14px] md:text-[16px] font-normal font-inter text-main">
                    .5 min
                  </h2>
                </div>

                <div className="w-[260px] md:w-[420px] lg:w-[508px]">
                  <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-bold font-com text-main leading-[32px] md:leading-[34px] lg:leading-[36px]">
                    Speech has never been free, and that’s good
                  </h2>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
