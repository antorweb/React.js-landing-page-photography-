// import React from "react";
// import banerframe from "../assets/images/banner-fame.png";

// const Many = () => {
//   return (
//     <>
//       <section id="many" className="pt-[150px]">
//         <div className="container">
//           <div
//             id="many_row "
//             className="flex justify-center gap-[60px] items-center"
//           >
//             <div className=" relative">
//               <div className="">
//                 <h2 className="w-[314px] absolute top-[-184px] left-[-212px]  leading-[62px] text-[80px] font-medium font-com text-main">
//                   Got many{" "}
//                   <span>
//                     valuable <span className="underline">awards</span>
//                   </span>
//                 </h2>
//               </div>
//             </div>

//             <div>
//               <img src={banerframe} alt="banner-fame" />
//             </div>
//             <div className="">
//               <div className=" leading-[40px]">
//                 <p className="text-[20px] font-normal hover:font-bold  font-dm  text-main hover:text-[#EF0101]">
//                   2021 - The Artist Award
//                 </p>
//                 <p className="text-[20px] font-normal hover:font-bold  font-dm  text-main hover:text-[#EF0101]">
//                   2020 - MKEL/Best Prir
//                 </p>
//                 <p className="text-[20px] font-normal hover:font-bold  font-dm  text-main hover:text-[#EF0101]">
//                   2019 - Portrait Award
//                 </p>
//                 <p className="text-[20px] font-normal hover:font-bold  font-dm  text-main hover:text-[#EF0101]">
//                   2018 - Berlin Talent
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Many;


import React from "react";
import banerframe from "../assets/images/banner-fame.png";

const Many = () => {
  return (
    <>
      <section id="many" className="pt-[150px]">
        <div className="container">
          <div
            id="many_row"
            className="flex flex-col md:flex-row justify-center gap-[30px] md:gap-[60px] items-center text-center md:text-left"
          >
            <div className="relative">
              <div>
                <h2 className="w-full md:w-[314px] 
                  static md:absolute 
                  md:top-[-184px] md:left-[-212px] 
                  px-4 md:px-0 
                  leading-[40px] md:leading-[62px] 
                  text-[32px] md:text-[80px] 
                  font-medium font-com text-main"
                >
                  Got many{" "}
                  <span>
                    valuable <span className="underline">awards</span>
                  </span>
                </h2>
              </div>
            </div>

            <div className="w-full flex justify-center">
              <img
                src={banerframe}
                alt="banner-fame"
                className="w-[280px] md:w-auto"
              />
            </div>

            <div className="mt-[30px] md:mt-0 px-4 md:px-0">
              <div className="leading-[30px] md:leading-[40px]">
                <p className="text-[16px] md:text-[20px] font-normal hover:font-bold font-dm text-main hover:text-[#EF0101]">
                  2021 - The Artist Award
                </p>
                <p className="text-[16px] md:text-[20px] font-normal hover:font-bold font-dm text-main hover:text-[#EF0101]">
                  2020 - MKEL/Best Prir
                </p>
                <p className="text-[16px] md:text-[20px] font-normal hover:font-bold font-dm text-main hover:text-[#EF0101]">
                  2019 - Portrait Award
                </p>
                <p className="text-[16px] md:text-[20px] font-normal hover:font-bold font-dm text-main hover:text-[#EF0101]">
                  2018 - Berlin Talent
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Many;
