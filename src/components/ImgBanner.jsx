// import React from "react";
// import imgLogo from "../assets/images/imgLogo.png";
// import imgLogo1 from "../assets/images/imgLogo2.png";
// import imgLogo2 from "../assets/images/imgLogo2.png";
// import imgLogo3 from "../assets/images/imgLogo3.png";
// import imgLogo4 from "../assets/images/imgLogo4.png";
// import imgLogo5 from "../assets/images/imgLogo5.png";
// import imgLogo6 from "../assets/images/imgLogo6.png";
// import imgLogo7 from "../assets/images/imgLogo7.png";
// import imgLogo8 from "../assets/images/imgLogo8.png";
// import { Link } from "react-router";

// const ImgBanner = () => {
//   return (
//     <>
//       <section id="ImgBanner" className="pt-[120px]">
//         <div className="container">
//           <div id="ImgBanner-row" className="flex justify-center">
//             <div>
//               <ul className="w-[1170px] flex flex-wrap justify-center items-center">
//                 <li>
//                   <Link to={"/"}>
//                     <img src={imgLogo} alt="img-logo" />
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to={"/"}>
//                     <img src={imgLogo1} alt="img-logo" />
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to={"/"}>
//                     <img src={imgLogo2} alt="img-logo" />
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to={"/"}>
//                     <img src={imgLogo3} alt="img-logo" />
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to={"/"}>
//                     <img src={imgLogo4} alt="img-logo" />
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to={"/"}>
//                     <img src={imgLogo5} alt="img-logo" />
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to={"/"}>
//                     <img src={imgLogo6} alt="img-logo" />
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to={"/"}>
//                     <img src={imgLogo7} alt="img-logo" />
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ImgBanner;


import React from "react";
import imgLogo from "../assets/images/imgLogo.png";
import imgLogo1 from "../assets/images/imgLogo2.png";
import imgLogo2 from "../assets/images/imgLogo2.png";
import imgLogo3 from "../assets/images/imgLogo3.png";
import imgLogo4 from "../assets/images/imgLogo4.png";
import imgLogo5 from "../assets/images/imgLogo5.png";
import imgLogo6 from "../assets/images/imgLogo6.png";
import imgLogo7 from "../assets/images/imgLogo7.png";
import { Link } from "react-router";

const ImgBanner = () => {
  return (
    <>
      <section id="ImgBanner" className="pt-[120px]">
        <div className="container">
          <div id="ImgBanner-row" className="flex justify-center px-4 md:px-0">
            <div>
              <ul className="w-full md:w-[1170px] flex flex-wrap justify-center items-center gap-6 md:gap-10">
                
                <li>
                  <Link to={"/"}>
                    <img src={imgLogo} alt="img-logo" className="w-[90px] md:w-auto" />
                  </Link>
                </li>

                <li>
                  <Link to={"/"}>
                    <img src={imgLogo1} alt="img-logo" className="w-[90px] md:w-auto" />
                  </Link>
                </li>

                <li>
                  <Link to={"/"}>
                    <img src={imgLogo2} alt="img-logo" className="w-[90px] md:w-auto" />
                  </Link>
                </li>

                <li>
                  <Link to={"/"}>
                    <img src={imgLogo3} alt="img-logo" className="w-[90px] md:w-auto" />
                  </Link>
                </li>

                <li>
                  <Link to={"/"}>
                    <img src={imgLogo4} alt="img-logo" className="w-[90px] md:w-auto" />
                  </Link>
                </li>

                <li>
                  <Link to={"/"}>
                    <img src={imgLogo5} alt="img-logo" className="w-[90px] md:w-auto" />
                  </Link>
                </li>

                <li>
                  <Link to={"/"}>
                    <img src={imgLogo6} alt="img-logo" className="w-[90px] md:w-auto" />
                  </Link>
                </li>

                <li>
                  <Link to={"/"}>
                    <img src={imgLogo7} alt="img-logo" className="w-[90px] md:w-auto" />
                  </Link>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImgBanner;
