// import React from "react";
// import bannerImg from "../assets/images/Header.png";
// import { Link } from "react-router";
// import { RiArrowUpSFill } from "react-icons/ri";

// const Banner = () => {
//   const text = "my promotion video watch ";

//   return (
//     <>
//       <section
//         id="banner"
//         style={{
//           background: `URL(${bannerImg})`,
//           backgroundRepeat: `no-repeat`,
//           backgroundSize: `cover`,
//         }}
//         className="pb-[100px]"
//       >
//         <div className="container">
//           <div id="banner-row" className="flex justify-between">
//             {/* ------------- left-side text */}
//             <div className="pt-[694px]">
//               <h2 className="text-[30px] font-bold font-inter text-[#fff]">
//                 Elliana Mary
//               </h2>
//               <p className="text-[16px] font-normal font-inter text-[#fff]">
//                 Professional Photographer
//               </p>
//             </div>

//             {/* -------------- middle-side text */}

//             <div>
//               <div className="pt-[48px] ml-[268px] pb-[76px]">
//                 <div className="w-[728px] pl-[200px] leading-[80px]">
//                   <span className="text-[96px] font-com font-medium text-[#fff]">
//                     Love to{" "}
//                   </span>
//                   <span className=" text-[96px] font-com font-medium text-[#fff]">
//                     <span className=" underline">capture</span> the{" "}
//                   </span>
//                   <span className="text-[96px] font-com font-medium text-[#fff]">
//                     best <span className=" underline">moments</span>
//                   </span>
//                 </div>
//                 <div className="w-[637px] pl-[200px]">
//                   <p className="text-[18px] font-dm  font-normal text-[#ffffff9a]">
//                     Distinctively re-engineer process-centric growth strategies
//                     without granular process improvements.
//                   </p>
//                 </div>
//               </div>

//               <div className="w-[470px] ml-[550px] h-[300px] bg-[#C4C4C4]">
//                 {/* <!-- From Uiverse.io by Giannasaurus -->  */}

//                 <button className="button">
//                   <p className="button__text flex">
//                     {text.split("").map((char, index) => (
//                       <span key={index} style={{ "--index": index }}>
//                         {char === " " ? "\u00A0" : char}
//                       </span>
//                     ))}
//                   </p>

//                   <div className="button__circle">
//                     {" "}
//                     <RiArrowUpSFill />{" "}
//                   </div>
//                 </button>
//               </div>
//             </div>

//             {/* ----------- right-side item */}
//             <div className="pt-[182px]">
//               <ul className="flex gap-[80px] flex-col items-center">
//                 <li className="text-[18px] writing-mode-vertical transform rotate-[-90deg] font-medium font-com text-[#fff] underline">
//                   <Link to={"/"}>Facebook</Link>
//                 </li>
//                 <li className="text-[18px] writing-mode-vertical transform rotate-[-90deg]  font-medium font-com text-[#fff] underline">
//                   <Link to={"/"}>Twitter</Link>
//                 </li>
//                 <li className="text-[18px] writing-mode-vertical transform rotate-[-90deg] font-medium font-com text-[#fff] underline">
//                   <Link to={"/"}>Instagram</Link>
//                 </li>
//                 <li className="text-[18px] writing-mode-vertical transform rotate-[-90deg] font-medium font-com text-[#fff] underline">
//                   <Link to={"/"}>Linkedin</Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Banner;


import React from "react";
import bannerImg from "../assets/images/Header.png";
import { Link } from "react-router";
import { RiArrowUpSFill } from "react-icons/ri";

const Banner = () => {
  const text = "my promotion video watch ";

  return (
    <>
      <section
        id="banner"
        style={{
          background: `URL(${bannerImg})`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
        }}
        className="pb-[100px]"
      >
        <div className="container">
          <div
            id="banner-row"
            className="flex justify-between 
            max-xl:flex-wrap 
            max-lg:flex-wrap 
            max-md:flex-col max-md:items-center max-md:text-center"
          >
            {/* ---------------- LEFT SIDE ---------------- */}
            <div className="pt-[694px] max-lg:pt-[350px] max-md:pt-[250px] max-sm:pt-[180px]">
              <h2 className="text-[30px] font-bold font-inter text-[#fff] max-sm:text-[22px]">
                Elliana Mary
              </h2>
              <p className="text-[16px] font-normal font-inter text-[#fff]">
                Professional Photographer
              </p>
            </div>

            {/* ---------------- MIDDLE SIDE ---------------- */}
            <div className="max-md:mt-[40px]">
              <div className="pt-[48px] ml-[268px] pb-[76px] max-xl:ml-[100px] max-lg:ml-[40px] max-md:ml-0">
                <div className="w-[728px] pl-[200px] leading-[80px] 
                  max-xl:pl-[100px] max-lg:pl-[20px]
                  max-md:w-[100%] max-md:leading-[50px] max-sm:leading-[40px]"
                >
                  <span className="text-[96px] font-com font-medium text-[#fff] max-lg:text-[60px] max-sm:text-[42px]">
                    Love to{" "}
                  </span>
                  <span className="text-[96px] font-com font-medium text-[#fff] max-lg:text-[60px] max-sm:text-[42px]">
                    <span className="underline">capture</span> the{" "}
                  </span>
                  <span className="text-[96px] font-com font-medium text-[#fff] max-lg:text-[60px] max-sm:text-[42px]">
                    best <span className="underline">moments</span>
                  </span>
                </div>

                <div className="w-[637px] pl-[200px] max-xl:pl-[100px] max-lg:pl-[20px] max-md:w-[90%] max-md:mx-auto">
                  <p className="text-[18px] font-dm font-normal text-[#ffffff9a] max-sm:text-[16px]">
                    Distinctively re-engineer process-centric growth strategies
                    without granular process improvements.
                  </p>
                </div>
              </div>

              {/* ---------------- BUTTON BOX ---------------- */}
              <div
                className="w-[470px] ml-[550px] h-[300px] bg-[#C4C4C4]
                max-xl:ml-[200px] 
                max-lg:ml-[20px]
                max-md:mx-auto max-md:w-[90%] max-sm:h-[240px]"
              >
                <button className="button">
                  <p className="button__text flex">
                    {text.split("").map((char, index) => (
                      <span key={index} style={{ "--index": index }}>
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </p>

                  <div className="button__circle">
                    <RiArrowUpSFill />
                  </div>
                </button>
              </div>
            </div>

            {/* ---------------- RIGHT SIDE SOCIALS ---------------- */}
            <div className="pt-[182px] max-lg:pt-[40px] max-md:pt-[30px]">
              <ul
                className="flex gap-[80px] flex-col items-center 
                max-md:flex-row max-md:gap-[20px] max-md:justify-center"
              >
                <li className="text-[18px] writing-mode-vertical transform rotate-[-90deg] font-medium font-com text-[#fff] underline max-md:rotate-0">
                  <Link to={"/"}>Facebook</Link>
                </li>
                <li className="text-[18px] writing-mode-vertical transform rotate-[-90deg] font-medium font-com text-[#fff] underline max-md:rotate-0">
                  <Link to={"/"}>Twitter</Link>
                </li>
                <li className="text-[18px] writing-mode-vertical transform rotate-[-90deg] font-medium font-com text-[#fff] underline max-md:rotate-0">
                  <Link to={"/"}>Instagram</Link>
                </li>
                <li className="text-[18px] writing-mode-vertical transform rotate-[-90deg] font-medium font-com text-[#fff] underline max-md:rotate-0">
                  <Link to={"/"}>Linkedin</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
