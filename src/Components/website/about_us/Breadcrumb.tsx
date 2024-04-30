// import React from "react";
// import { breadCrumb1, breadCrumb2 } from "@/src/Assets/about";
// import Image from "next/image";

// export default function Breadcrumb() {
//   return (
//     <section
//       className="w-full main-container flex flex-col-reverse md:flex-row items-center justify-between gap-6 my-12 "
//       style={{ backgroundImage: `url(${breadCrumb2.src})` }}
//     >
//       <div className="w-full flex flex-col items-start justify-start gap-6 ">
//         <p className="text-xl lg:text-5xl font-bold text-[#0E0067] logoWarper_one">
//           About Us
//         </p>
//         <p className="text-xl lg:text-1xl  font-semibold logoWarper_one">
//         We're your financial companion, built on cutting-edge technology. We offer a seamless experience for managing your money, from payments and investments to insurance. Take control of your financial future, one click at a time.
//         </p>
//       </div>
//       <div className="w-full flex items-center justify-end">
//         <Image
//           src={breadCrumb1.src}
//           alt=""
//           height={350}
//           width={350}
//           className="h-[35em] w-auto"
//         />
//       </div>
//     </section>
//   );
// }


import React from "react";
import { breadCrumb1, breadCrumb2 } from "@/src/Assets/about";
import Image from "next/image";

export default function Breadcrumb() {
  return (
    <section
      className="w-full main-container flex flex-col-reverse md:flex-row items-center justify-between gap-6 my-12 "
      style={{ backgroundImage: `url(${breadCrumb2.src})` }}
    >
      <div className="w-full flex flex-col items-start justify-start gap-6 ">
        <p className="text-xl lg:text-5xl font-bold text-[#0E0067] logoWarper_one">
          About Us
        </p>
        <p className="text-xl lg:text-1xl  font-semibold logoWarper_one">
          We&apos;re your financial companion, built on cutting-edge technology. We offer a seamless experience for managing your money, from payments and investments to insurance. Take control of your financial future, one click at a time.
        </p>
      </div>
      <div className="w-full flex items-center justify-end">
        <Image
          src={breadCrumb1.src}
          alt=""
          height={350}
          width={350}
          className="h-[35em] w-auto"
        />
      </div>
    </section>
  );
}
