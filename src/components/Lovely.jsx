// import React from "react";
// import { Link } from "react-router";
// import { HiOutlineArrowNarrowRight } from "react-icons/hi";

// const Lovely = () => {
//   return (
//     <>
//       <section id="Lovely" className="py-[150px]">
//         <div className="container">
//           <div id="lovely-row">
//             <div className="flex justify-between items-center">
//               <div className="w-[500px] ">
//                 <h2 className="text-[80px] leading-[70px] font-medium font-com text-main">
//                   Lovely <span className=" underline">words</span>{" "}
//                   <span>from my clients</span>{" "}
//                 </h2>
//               </div>
//               <Link className="w-[184px] flex  justify-between text-[18px] font-semibold font-inter text-red items-center border-b-1">
//                 View All Reviews <HiOutlineArrowNarrowRight />
//               </Link>
//             </div>
//             <div className="flex justify-center gap-[170px] items-center">
//               <div className="w-[370px] h-[450px] bg-[#C4C4C4] mt-[48px]"></div>
//               <div className="w-[500px]">
//                 <h2 className="text-[24px] font-medium font-dm text-main">
//                   Jenifer Lofez{" "}
//                   <p className="font-normal text-[#0b01099f]">
//                     "is Just an awesome photografer and great person Even if
//                     ifis your first photosession, don't worry, Kaya wIl calm you
//                     down, give a lot of helpful tips ans suggestions She is so
//                     calm and attentive, My entire family was impressed by her
//                     and photographs.
//                   </p>
//                 </h2>
//                 <div>
//                   <h2 className="text-[24px] font-semibold font-inter text-main pt-[40px]">
//                     -Jason & Guidry
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

// export default Lovely;


import React from "react";
import { Link } from "react-router";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Lovely = () => {
  return (
    <>
      <section
        id="Lovely"
        className="py-[80px] md:py-[120px] lg:py-[150px]"
      >
        <div className="container">
          <div id="lovely-row">
            
            {/* -------- Top Heading + Button -------- */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 px-4 lg:px-0">
              <div className="w-full md:w-[500px]">
                <h2 className="text-[36px] leading-[40px] md:text-[60px] md:leading-[55px] lg:text-[80px] lg:leading-[70px] font-medium font-com text-main">
                  Lovely <span className="underline">words</span>{" "}
                  <span>from my clients</span>
                </h2>
              </div>

              <Link className="w-fit md:w-[184px] flex justify-between items-center text-[16px] md:text-[18px] font-semibold font-inter text-red border-b">
                View All Reviews <HiOutlineArrowNarrowRight />
              </Link>
            </div>

            {/* -------- Main Content (Image + Text) -------- */}
            <div className="flex flex-col lg:flex-row justify-center items-center gap-[40px] md:gap-[80px] lg:gap-[170px] mt-[48px] px-4 lg:px-0">

              {/* Image */}
              <div className="
                w-[250px] h-[300px]
                md:w-[300px] md:h-[380px]
                lg:w-[370px] lg:h-[450px]
                bg-[#C4C4C4]
              "></div>

              {/* Text */}
              <div className="w-full md:w-[500px]">
                <h2 className="text-[20px] md:text-[22px] lg:text-[24px] font-medium font-dm text-main">
                  Jenifer Lofez
                </h2>

                <p className="mt-2 text-[16px] md:text-[18px] lg:text-[20px] font-normal text-[#0b01099f]">
                  "is Just an awesome photografer and great person. Even if it's
                  your first photosession, don't worry, Kaya will calm you
                  down, give a lot of helpful tips and suggestions. She is so
                  calm and attentive. My entire family was impressed by her and
                  the photographs."
                </p>

                <h2 className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold font-inter text-main pt-[30px] md:pt-[40px]">
                  -Jason & Guidry
                </h2>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Lovely;
