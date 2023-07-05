import React from "react";
function Header() {
  return (
    <div>
      <header>
        <div className="navbar flex justify-between w-full py-7 px-24">
          <div className="logo">
            <img src="./assets/logo.png" alt="" />
          </div>
          <div className="links flex justify-between font-semibold list-none gap-7 px-4 max-md:hidden ">
            <li className=" transition-all .5s ease-linear text-[#006D77] text-[17px] hover:text-[#006D77]    hover:translate-y-[-4px]">
              <a href="#">Home</a>
            </li>
            <li className=" transition-all .5s ease-linear hover:text-[#006D77]    hover:translate-y-[-4px]">
              <a href="#">About</a>
            </li>
            <li className=" transition-all .5s ease-linear hover:text-[#006D77]    hover:translate-y-[-4px]">
              <a href="#">Company</a>
            </li>
            <li className=" transition-all .5s ease-linear hover:text-[#006D77]    hover:translate-y-[-4px]">
              <a href="#">Pages</a>
            </li>
            <li className=" transition-all .5s ease-linear hover:text-[#006D77]    hover:translate-y-[-4px]">
              <a href="#">Blog</a>
            </li>
            <li className=" transition-all .5s ease-linear hover:text-[#006D77]    hover:translate-y-[-4px]">
              <a href="#">Shop</a>
            </li>
          </div>
          <div className="right">
            {" "}
            <button className="btn py-2 px-4 rounded-3xl text-white bg-[#101828] transition-all .5s ease-linear hover:bg-[#233a68]">
              Get Started
            </button>
          </div>
        </div>

        <div className="container_div ">
          <div className=" max-[447px]:flex-wrap max-[768px]:flex-wrap flex justify-center  py-24 pl-24 max-[768px]:px-2 max-[447px]:px-2  ">
            <div className="header-info lg:w-[60%] lg:text-left sm:text-center md:text-center max-[510px]:text-center">
              <h3 className=" text-[#98A2B3] text-2xl mb-5 font-bold">
                Exclusive Smart Watch
              </h3>
              <h1 className="text-[#101828] font-bold text-5xl  py-3 mb-5 sm:w-[90%] md:w-[90%]  lg:w-[70%] ">
                Let go of the Challenge See yourself better{" "}
              </h1>

              <p className="sm:w-[90%] md:w-[90%]  lg:w-[60%] mb-5 ">
                Connect your conversations with the tools and services that you
                use to get the job done. With over 1,500 apps and a robust API
              </p>
              <div className="h-btn flex items-center gap-4">
                <div className="right py-3">
                  {" "}
                  <button className="btn py-2 px-7 rounded-xl  text-white bg-[#101828] transition-all .5s ease-linear hover:bg-[#233a68]  ">
                    Get Started →
                  </button>
                </div>
                <span>How it works→</span>
              </div>
              <div className="img-1 flex gap-40 py-5 items-center max-[768px]:gap-3 max-[447px]:flex-wrap max-[447px]:justify-center max-[768px]:flex-wrap max-[768px]:justify-center  max-[447px]:gap-3">
                <div className="img  flex  gap-3 items-center">
                  <img src="./assets/img1.png" alt="" />

                  <p>
                    {" "}
                    <b className="text-3xl">12k+ </b>{" "}
                    <span className="text-[#969696] text-xl">
                      Projects done
                    </span>
                  </p>
                </div>
                <div className="img flex items-center gap-2">
                  <img
                    className="w-[80px] h-[80px]"
                    src="./assets/img1.png"
                    alt=""
                  />

                  <p>
                    {" "}
                    <b className="text-3xl">68k+ </b>{" "}
                    <span className="text-[#969696] text-xl">
                      Projects done
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="header-img  w-[50%]">
              <div className="picture relative">
                <img
                  className=" mx-14 lg:w-[320px] lg:h-[350px] md:w-[250px] md:h-[280px] sm:w-[300px] sm:h-[350px] "
                  src="./assets/imgright.png"
                  alt=""
                />
                <img
                  className="absolute max-[447px]:hidden  bottom-[-50px] right-[140px] z-40 max-[510px]:bottom-[-100px] "
                  src="./assets/marko.png"
                  alt=""
                />
                <span className="w-[50px] h-[50px] bg-[#FFDDD2] block rounded-full absolute top-0 lg:flex sm:hidden md:hidden max-[510px]:hidden">
                  {" "}
                </span>
                <span className="w-[40px] h-[40px] bg-[#FFDDD2] block rounded-full absolute bottom-20  lg:flex sm:hidden md:hidden max-[510px]:hidden">
                  {" "}
                </span>
                <span className="block absolute top-[-20px] right-[180px] w-[30px] h-[30px] bg-[#BEE1E6D9] rounded-full lg:flex sm:hidden md:hidden max-[510px]:hidden"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="header-cards flex justify-around px-24 py-12 gap-3 max-[510px]:gap-20 max-[447px]:flex-wrap max-[768px]:flex-wrap">
          <div className="h-card1  flex max-[510px]:flex-col  items-center border-[2px] gap-5 px-4 py-3 ">
            <img
              className="object-contain w-[200px] "
              src="./assets/tele.png"
              alt=""
            />
            <div className="fl-el  ">
              <p className="font-normal pb-4">
                4K TV Game Mini Arcade Rocker Console 32GB/64GB
                <p className="text-[#006D77] font-[700] py-2">$36.80</p>
              </p>
            </div>
          </div>
          <div className="h-card1  flex max-[510px]:flex-col items-center  border-[2px] gap-5 px-4 py-3 ">
            <img
              className="object-contain w-[150px] "
              src="./assets/nn1.png"
              alt=""
            />
            <div className="fl-el  ">
              <p className="font-normal pb-4">
                4K TV Game Mini Arcade Rocker Console 32GB/64GB
                <p className="text-[#006D77] font-[700] py-2">$36.80</p>
              </p>
            </div>
          </div>
          <div className="h-card1  flex max-[510px]:flex-col  items-center border-[2px] gap-5 px-4 py-3 ">
            <img
              className="object-contain w-[150px] "
              src="./assets/nn2.png"
              alt=""
            />
            <div className="fl-el  ">
              <p className="font-normal pb-4">
                4K TV Game Mini Arcade Rocker Console 32GB/64GB
                <p className="text-[#006D77] font-[700] py-2">$36.80</p>
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="main-title text-center text-5xl font-medium py-16 max-[510px]:text-4xl">
        <h1>
          Featured Products <br />
          For Pre-Order
        </h1>
      </div>
    </div>
  );
}

export default Header;
