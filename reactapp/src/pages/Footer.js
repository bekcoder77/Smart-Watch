import React from "react";

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer pt-40 pb-10 px-20">
          <div className="footer-start flex justify-between mb-10 max-[447px]:flex- max-[768px]:flex-wrap">
            {/* <div className="logo"><img src="./images/logo.png" alt=""></div> */}
            <div>
              <img src="./assets/logo.png" alt="" />
            </div>
            <div className="btn flex items-center">
              {" "}
              <p> Ready to get started? </p>
              <button className="rounded-3xl mx-5 px-7 py-2 bg-[#101828] text-white transition-all .5s ease-linear hover:bg-[#233a68] ">
                Create an Account →
              </button>
            </div>
          </div>

          <p className="w-full h-[2px] bg-[#D6D8DD] "></p>
        </div>
        <div className="footer-links flex justify-between max-[447px]:hidden max-[777px]:hidden gap-10 px-20  py-5">
          <div className="f-link">
            <h1 className="font-semibold pb-5">Contact</h1>
            <div className="dsjif pb-3 text-[#969696]">
              <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
              <p>(239) 555-0108</p>
              <p>contact@agon.com</p>
            </div>
            <p className="icon cursor-pointer"></p>
          </div>
          <div className="f-link">
            <h1 className="font-semibold pb-5">Contact</h1>
            <div className="aedfyg text-[#969696]">
              <h1>About Us</h1>
              <p>About V2</p>
              <p>About V2</p>
              <p>About V2</p>
            </div>
          </div>
          <div className="f-link">
            <h1 className="font-semibold pb-5">Contact</h1>
            <div className="etxt text-[#969696]">
              <p>Our Blog</p>
              <p>Our Blog</p>
              <p>Our Blog</p>
              <p>Our Blog</p>
            </div>
          </div>
          <div className="f-link">
            <h1 className="font-semibold pb-5">Contact</h1>
            <div className="text text-[#969696]">
              <p>FAQ V2</p>
              <p>FAQ V2</p>
              <p>FAQ V2</p>
              <p>FAQ V2</p>
            </div>
          </div>
          <div className="f-link ">
            <h1 className="font-semibold pb-5">Contact</h1>
            <div className="text text-[#969696]">
              <p>Shop</p>
              <p>Shop V2</p>
              <p>Pricing V1</p>
              <p>Pricing V1</p>
            </div>
          </div>
        </div>

        {/* <p className="w-[1220px] ml-20 h-[2px] bg-[#D6D8DD] px-20"></p> */}

        <div className="footer-end flex justify-between px-20 py-10 text-[#969696]">
          <p>
            ©Agon Official 2023{" "}
            <span className="ml-2 font-medium">by Khalimov Otabek</span>{" "}
          </p>
          <p>Privacy policy Cookies Terms of service</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
