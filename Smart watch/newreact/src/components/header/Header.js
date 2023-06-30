import React, { useState } from "react";
import "./Header.css";
import {FaArrowRight} from "react-icons/fa"

function Header() {
  return (
    <div>
      <header>
        <div className="navbar flex justify-between w-full py-7 px-24">
          <div className="logo">
            <img src="./assets/logo.png" alt="" />
          </div>
          <div className="links flex justify-between font-semibold list-none gap-7 px-4 max-md:hidden ">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Company</a>
            </li>
            <li>
              <a href="">Pages</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Shop</a>
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
          <div className=" max-[447px]:flex-wrap max-[768px]:flex-wrap flex gap-32 py-28 px-24 max-[768px]:px-2 max-[447px]:px-2 ">
            <div className="header-info ">
              <h3 className=" text-[#98A2B3] text-2xl mb-10">
                Exclusive Smart Watch
              </h3>
              <h1 className="text-[#101828] font-medium text-3xl w-[550px] max-[447px]:w-[300px]  max-[768px]:text-left max-[768px]:text-2xl max-[768px]:w-[70%] py-3 mb-5 ">
                Let go of the Challenge See yourself better{" "}
              </h1>

              <p className="w-[500px] py-2">
                Connect your conversations with the tools and services that you
                use to get the job done. With over 1,500 apps and a robust API
              </p>
              <div className="h-btn flex items-center gap-4">
                <div className="right py-3">
                  {" "}
                  <button className="btn py-2 px-7 rounded-2xl text-white bg-[#101828] transition-all .5s ease-linear hover:bg-[#233a68] ">
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

            <div className="header-img relative   ">
            <div className="picture">
            <img
                className=" mx-14 w-[300px] h-[300px]"
                src="./assets/imgright.png"
                alt=""
              />
            </div>
              <img
                className="absolute max-[447px]:hidden  bottom-12 right-[-80px] z-40"
                src="./assets/marko.png"
                alt=""
              />
              <span className="w-[50px] h-[50px] bg-[#FFDDD2] block rounded-full absolute bottom-72 right-[450px] max-[447px]:hidden max-[768px]:hidden">
                {" "}
              </span>
              <span className="w-[30px] h-[30px] bg-[#FFDDD2] block rounded-full absolute bottom-32 right-[300px] max-[447px]:hidden max-[768px]:hidden">
                {" "}
              </span>
              <span className="block absolute top-[-20px] right-[-50px] w-[30px] h-[30px] bg-[#BEE1E6D9] rounded-full max-[447px]:hidden max-[768px]:hidden"></span>
            </div>
          </div>
        </div>

        <div className="header-cards flex justify-around px-24 py-12 gap-3 max-[447px]:flex-wrap max-[768px]:flex-wrap">
          <div className="h-card1 flex gap-5 border-[2px] h-28 px-4 py-3 ">
            <img src="./assets/tele.png" alt="" />
            <div className="fl-el">
              <p className="font-normal pb-4">
                4K TV Game Mini Arcade Rocker Console 32GB/64GB
              </p>
              <span className="text-[#006D77] font-[700] py-2">$36.80</span>
            </div>
          </div>
          <div className="h-card1 flex gap-5 border-[2px] h-28 px-4 py-3 ">
            <img src="./assets/nn1.png" alt="" />

            <div className="">
              <p className="font-normal pb-4">
                4K TV Game Mini Arcade Rocker Console 32GB/64GB
              </p>
              <span className="text-[#006D77] font-[700] py-2">$35.80</span>
            </div>
          </div>
          <div className="h-card1 flex gap-5 border-[2px] h-28 px-4 py-3 ">
            <img src="./assets/nn2.png" alt="" />

            <div className="">
              <p className="font-normal pb-4">
                4K TV Game Mini Arcade Rocker Console 32GB/64GB
              </p>
              <span className="text-[#006D77] font-[700] py-2">$29.80</span>
            </div>
          </div>
        </div>

      </header>
      <div className="main-title text-center text-5xl font-medium py-16">
        <h1>
          Featured Products <br />
          For Pre-Order
        </h1>
      </div>
      <div className="containerDiv">
        <div>
          <div className="main-cards flex flex-wrap px-14 py-16 gap-6 justify-between">
            <div className="main-card w-[300px] h-[400px] gap-5 border-[2px] px-4 py-4  hover:scale-[1.06] duration-200 transition-transform">
              <img className="pb-5 mx-auto" src="./assets/a2.png" alt="" />
              <h4 className="text-[#576071] py-3 ">Sony</h4>

              <h2>4K TV Game Mini Arcade Rocker Console 32GB/64GB</h2>
              <p className="text-yellow-400 text-3xl">★★★☆</p>
              <div className="f-el flex justify-between items-center py-5">
                <p className="text-[#006D77] font-bold ">$32.80</p>

                <button className="px-6 py-2 bg-[#BEE1E6] rounded-2xl transition-all ease-in-out  hover:bg-[#76bac4] hover:text-white ">
                  Add +
                </button>
              </div>
            </div>

            <div className="main-card w-[300px] h-[400px]  border-[2px] px-4 py-4  hover:scale-[1.06] duration-200 transition-transform">
              <img className="pb-5 mx-auto" src="./assets/n1.png" alt="" />

              <h4 className="text-[#576071] py-3">Sony</h4>

              <h2>4K TV Game Mini Arcade Rocker Console 32GB/64GB</h2>
              <p className="text-yellow-400 text-3xl">★★★☆</p>
              <div className="f-el flex justify-between items-center py-5">
                <p className="text-[#006D77] font-bold ">$49.80</p>

                <button className="px-6 py-2 bg-[#BEE1E6] rounded-2xl  transition-all ease-in-out  hover:bg-[#76bac4] hover:text-white">
                  Add +
                </button>
              </div>
            </div>

            <div className="main-card w-[300px] h-[400px]  border-[2px] px-4 py-4  hover:scale-[1.06] duration-200 transition-transform">
              {/* <img className="pb-5 px-10" src="./images/n2.png" alt=""> */}
              <img className="pb-5 mx-10" src="./assets/n2.png" alt="" />

              <h4 className="text-[#576071] py-4">Sony</h4>

              <h2>4K TV Game Mini Arcade Rocker Console 32GB/64GB</h2>
              <p className="text-yellow-400 text-3xl">★★★☆</p>
              <div className="f-el flex justify-between items-center py-5">
                <p className="text-[#006D77] font-bold ">$34.80</p>

                <button className="px-6 py-2 bg-[#BEE1E6] rounded-2xl  transition-all ease-in-out  hover:bg-[#76bac4] hover:text-white">
                  Add +
                </button>
              </div>
            </div>

            <div className="main-card w-[300px] h-[400px]  border-[2px] px-4 py-4  hover:scale-[1.06] duration-200 transition-transform">
              <img className="pb-5 mx-auto" src="./assets/n3.png" alt="" />

              <h4 className="text-[#576071] py-5">Sony</h4>

              <h2>4K TV Game Mini Arcade Rocker Console 32GB/64GB</h2>
              <p className="text-yellow-400 text-3xl">★★★☆</p>
              <div className="f-el flex justify-between items-center py-5">
                <p className="text-[#006D77] font-bold ">$51.80</p>

                <button className="px-6 py-2 bg-[#BEE1E6] rounded-2xl  transition-all ease-in-out  hover:bg-[#76bac4] hover:text-white">
                  Add +
                </button>
              </div>
            </div>

            <div className="main-card w-[300px] h-[400px]  border-[2px] px-4 py-4  hover:scale-[1.06] duration-200 transition-transform">
              <img className="pb-5 mx-auto" src="./assets/a1.png" alt="" />
              <h4 className="text-[#576071] py-3">Sony</h4>

              <h2>4K TV Game Mini Arcade Rocker Console 32GB/64GB</h2>
              <p className="text-yellow-400 text-3xl">★★★☆</p>
              <div className="f-el flex justify-between items-center py-5">
                <p className="text-[#006D77] font-bold ">$47.80</p>

                <button className="px-6 py-2 bg-[#BEE1E6] rounded-2xl  transition-all ease-in-out  hover:bg-[#76bac4] hover:text-white">
                  Add +
                </button>
              </div>
            </div>
            <div className="main-card w-[300px] h-[400px]  border-[2px] px-4 py-4  hover:scale-[1.06] duration-200 transition-transform">
              {/* <img className="pb-5 mx-auto" src="./images/a 2.png" alt=""> */}
              <img className="pb-5 mx-auto" src="./assets/n3.png" alt="" />

              <h4 className="text-[#576071] py-5">Sony</h4>

              <h2>4K TV Game Mini Arcade Rocker Console 32GB/64GB</h2>
              <p className="text-yellow-400 text-3xl">★★★☆</p>
              <div className="f-el flex justify-between items-center py-5">
                <p className="text-[#006D77] font-bold ">$42.80</p>

                <button className="px-6 py-2 bg-[#BEE1E6] rounded-2xl  transition-all ease-in-out  hover:bg-[#76bac4] hover:text-white">
                  Add +
                </button>
              </div>
            </div>
            <div className="main-card w-[300px] h-[400px]  border-[2px] px-4 py-4  hover:scale-[1.06] duration-200 transition-transform">
              {/* <img className="pb-5 mx-auto" src="./images/a 3.png" alt=""> */}
              <img className="pb-5 mx-auto" src="./assets/a3.png" alt="" />

              <h4 className="text-[#576071] py-3">Sony</h4>

              <h2>4K TV Game Mini Arcade Rocker Console 32GB/64GB</h2>
              <p className="text-yellow-400 text-3xl">★★★☆</p>
              <div className="f-el flex justify-between items-center py-5">
                <p className="text-[#006D77] font-bold ">$46.80</p>

                <button className="px-6 py-2 bg-[#BEE1E6] rounded-2xl transition-all ease-in-out  hover:bg-[#76bac4] hover:text-white">
                  Add +
                </button>
              </div>
            </div>
            <div className="main-card w-[300px] h-[400px]  border-[2px] px-4 py-4  hover:scale-[1.06] duration-200 transition-transform">
              {/* <img className="pb-5mx-auto" src="./images/n4.png" alt=""> */}
              <img className="pb-5 mx-auto" src="./assets/n4.png" alt="" />

              <h4 className="text-[#576071] py-5">Sony</h4>

              <h2>4K TV Game Mini Arcade Rocker Console 32GB/64GB</h2>
              <p className="text-yellow-400 text-3xl">★★★☆</p>
              <div className="f-el flex justify-between items-center py-5">
                <p className="text-[#006D77] font-bold ">$54.80</p>

                <button className="px-6 py-2 bg-[#BEE1E6] rounded-2xl  transition-all ease-in-out  hover:bg-[#76bac4] hover:text-white">
                  Add +
                </button>
              </div>
            </div>
            <div className="main-card w-[300px] h-[400px]  border-[2px] px-4 py-4  hover:scale-[1.06] duration-200 transition-transform">
              {/* <img className="pb-5 mx-auto" src="./images/n5.png" alt=""> */}
              <img className="pb-5 mx-auto" src="./assets/n5.png" alt="" />

              <h4 className="text-[#576071] py-5">Sony</h4>

              <h2>4K TV Game Mini Arcade Rocker Console 32GB/64GB</h2>
              <p className="text-yellow-400 text-3xl">★★★☆</p>
              <div className="f-el flex justify-between items-center py-5">
                <p className="text-[#006D77] font-bold ">$42.80</p>

                <button className="px-6 py-2 bg-[#BEE1E6] rounded-2xl transition-all ease-in-out  hover:bg-[#76bac4] hover:text-white">
                  Add +
                </button>
              </div>
            </div>
            <div className="main-card w-[300px] h-[400px]  border-[2px] px-4 py-4  hover:scale-[1.06] duration-200 transition-transform">
              {/* <img className="pb-5 mx-auto" src="./images/n6.png" alt=""> */}
              <img className="pb-5 mx-auto" src="./assets/n6.png" alt="" />

              <h4 className="text-[#576071] py-3">Sony</h4>

              <h2>4K TV Game Mini Arcade Rocker Console 32GB/64GB</h2>
              <p className="text-yellow-400 text-3xl">★★★☆</p>
              <div className="f-el flex justify-between items-center py-5">
                <p className="text-[#006D77] font-bold ">$31.80</p>

                <button className="px-6 py-2 bg-[#BEE1E6] rounded-2xl  transition-all ease-in-out  hover:bg-[#76bac4] hover:text-white">
                  Add +
                </button>
              </div>
            </div>
            <div className="main-card w-[300px] h-[400px]  border-[2px] px-4 py-4  hover:scale-[1.06] duration-200 transition-transform">
              {/* <img className="pb-5 mx-auto" src="./images/n7.png" alt=""> */}
              <img className="pb-5 mx-auto" src="./assets/n7.png" alt="" />

              <h4 className="text-[#576071] py-8">Sony</h4>

              <h2>4K TV Game Mini Arcade Rocker Console 32GB/64GB</h2>
              <p className="text-yellow-400 text-3xl">★★★☆</p>
              <div className="f-el flex justify-between items-center py-5">
                <p className="text-[#006D77] font-bold ">$41.80</p>

                <button className="px-6 py-2 bg-[#BEE1E6] rounded-2xl  transition-all ease-in-out  hover:bg-[#76bac4] hover:text-white">
                  Add +
                </button>
              </div>
            </div>
            <div className="main-card w-[300px] h-[400px]  border-[2px] px-4 py-4  hover:scale-[1.06] duration-200 transition-transform">
              {/* <img className="pb-5 mx-auto" src="./images/n8.png" alt=""> */}
              <img className="pb-5 mx-auto" src="./assets/n8.png" alt="" />

              <h4 className="text-[#576071] py-7">Sony</h4>

              <h2>4K TV Game Mini Arcade Rocker Console 32GB/64GB</h2>
              <p className="text-yellow-400 text-3xl">★★★☆</p>
              <div className="f-el flex justify-between items-center py-5">
                <p className="text-[#006D77] font-bold ">$59.80</p>

                <button className="px-6 py-2 bg-[#BEE1E6] rounded-2xl transition-all ease-in-out  hover:bg-[#76bac4] hover:text-white">
                  Add +
                </button>
              </div>
            </div>
          </div>
          <div className="title font-bold m-auto py-14">
            <h1 className="text-[42px] font-medium text-center">
              Explore by Categories.
            </h1>
            <h5 className="text-[16px] font-normal py-4 w-[500px] m-auto text-center">
              We provide many categories, choose a category according to your
              expertise to make it easier to find a job.
            </h5>
          </div>
          <div className="grid grid-cols-2  place-items-center gap-14 mx-6">
            <div className="border-2 px-6 pt-5 pb-4 rounded-md w-full">
              <h1 className="text-[#323A4B] text-[30px] font-semibold">
                Popular Categories
              </h1>
              <div className=" flex justify-between my-2 border-b-2 items-center pb-4">
                <p className=" text-[#667085] text-base font-normal">
                  Computer - Laaptop
                </p>
                <p className="w-10 h-10  font-bold rounded-full bg-[#E4E7EC] text-center text-cyan-700 inline-flex items-center justify-center">
                  10
                </p>
              </div>
              <div className=" flex justify-between my-2 border-b-2 items-center pb-4">
                <p className=" text-[#667085] text-base font-normal">
                  Smart phone & Tablets
                </p>
                <p className=" w-10 h-10  font-bold rounded-full bg-[#E4E7EC] text-center text-cyan-700 inline-flex items-center justify-center">
                  12
                </p>
              </div>
              <div className="flex justify-between my-2 border-b-2 items-center pb-4">
                <p className="text-[#667085] text-base font-normal">
                  Smart phone & Tablets
                </p>
                <p className="w-10 h-10  font-bold rounded-full bg-[#E4E7EC] text-center text-cyan-700 inline-flex items-center justify-center">
                  14
                </p>
              </div>
              <div className=" flex justify-between my-2  items-center pb-4">
                <p className=" text-[#667085] text-base font-normal">
                  Halth & Beauty
                </p>
                <p className="  w-10 h-10  font-bold rounded-full bg-[#E4E7EC] text-center text-cyan-700 inline-flex items-center justify-center">
                  8
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 ">
              <div className="border-2 flex gap-5 items-center py-7 px-4 rounded-md">
                <p className="w-10 h-10 flex  items-center justify-center bg-cyan-400 rounded-full ">
                  <i className="fa-solid fa-display "></i>
                </p>
                <p className=" text-sm font-semibold">
                  Computer for Designer, Art
                </p>
              </div>
              <div className="border-2 flex gap-5 items-center justify-center py-7 px-4 rounded-md">
                <p className="text-sm font-semibold">
                  Computer for Designer, Art
                </p>
              </div>
              <div className="border-2 flex gap-5 items-center py-7 px-4 rounded-md">
                <p className="w-10 h-10 flex  items-center justify-center bg-cyan-400 rounded-full ">
                  <i className="fa-solid fa-laptop"></i>
                </p>
                <p className="text-sm font-semibold">
                  Laptop for office, students
                </p>
              </div>
              <div className="border-2 flex gap-5 items-center py-7 px-4 rounded-md">
                <p className="w-10 h-10 flex  items-center justify-center bg-cyan-400 rounded-full ">
                  <i className="fa-solid fa-book"></i>
                </p>
                <p className="text-sm font-semibold">Software, card, book</p>
              </div>
              <div className="border-2 flex gap-5 items-center py-7 px-4 rounded-md">
                <p className="w-10 h-10 flex  items-center justify-center bg-cyan-400 rounded-full ">
                  <i className="fa-solid fa-rocket"></i>
                </p>
                <p className="text-sm font-semibold">Explore More</p>
              </div>
            </div>
          </div>
          <div className="title">
            <button className="px-5 py-3 mt-8 bg-[#f6e9df] text-[#E29578] rounded-lg mx-auto flex">
              How It Work ?
            </button>
          </div>
          <div>
            {" "}
            <h1 className="font-medium text-5xl w-[600px] py-8 text-center mx-auto">
              Cross-border ordering has never been easier
            </h1>
          </div>

          <div className="fl-cards py-10 flex flex-wrap gap-20 justify-center px-16">
            <div className="card text-center w-[250px] h-[300px] bg-[#FFF3EA] py-10 hover:translate-y-[-20px] transition-all ease-in-out">
              {/* <img  src="./assets/ii.png" alt=""> */}
              <img className="m-auto mb-2" src="./assets/ii.png" alt="" />

              <h2 className="mt-3 mb-3 text-3xl font-medium">Start Plan</h2>
              <p className="text-[#667085] px-7">Choose any of our packages</p>
            </div>
            <div className="card text-center w-[250px] h-[300px] bg-[#FDE2E4] py-10  hover:translate-y-[-20px] transition-all ease-in-out">
              <img className="m-auto mb-2" src="./assets/ii.png" alt="" />

              <h2 className="mt-3 mb-3 text-3xl font-medium">Connect </h2>
              <p className="text-[#667085] px-7">Choose any of our packages</p>
            </div>
            <div className="card text-center w-[250px] h-[300px] bg-[#DBECE5] py-10  hover:translate-y-[-20px] transition-all ease-in-out">
              <img className="m-auto mb-2" src="./assets/ii.png" alt="" />

              <h2 className="mt-3 mb-3 text-3xl font-medium">Match </h2>
              <p className="text-[#667085] px-7">Choose any of our packages</p>
            </div>
            <div className="card text-center w-[250px] h-[300px] bg-[#DBECE5] py-10  hover:translate-y-[-20px] transition-all ease-in-out">
              <img className="m-auto mb-2" src="./assets/ii.png" alt="" />

              <h2 className="mt-3 mb-3 text-3xl font-medium">Complete </h2>
              <p className="text-[#667085] px-7">Choose any of our packages</p>
            </div>
            <div className="card text-center w-[250px] h-[300px] bg-[#D1ECFD] py-10  hover:translate-y-[-20px] transition-all ease-in-out">
              <img className="m-auto mb-2" src="./assets/ii.png" alt="" />

              <h2 className="mt-3 mb-3 text-3xl font-medium">Review </h2>
              <p className="text-[#667085] px-7">Choose any of our packages</p>
            </div>
            <div className="card text-center w-[250px] h-[300px] bg-[#D1ECFD] py-10  hover:translate-y-[-20px] transition-all ease-in-out">
              <img className="m-auto mb-2" src="./assets/ii.png" alt="" />

              <h2 className="mt-3 mb-3 text-3xl font-medium">Review </h2>
              <p className="text-[#667085] px-7">Choose any of our packages</p>
            </div>
          </div>
          <div className="main-end relative  w-full h-[400px] bg-[#006D77] text-white py-28 px-16 rounded-2xl ">
            <h1 className="text-3xl ">Subscribe our newsletter</h1>
            <p className="font-normal w-[400px]  ">
              By clicking the button, you are agreeing with our Term &
              Conditions
            </p>

            <input
              className="px-10  py-3 mt-4 rounded-3xl"
              type="email"
              placeholder="Enter you mail..."
            />
            {/* <i className=" fa-solid fa-arrow-right absolute left-64 bg-[#006D77] text-white bottom-36 px-3 py-3 rounded-full"></i> */}
        <i className="absolute left-64 bg-[#006D77] text-white bottom-36 px-3 py-3 rounded-full">  {< FaArrowRight/>}</i>

          </div>
          <div className="relative">
            <img
              className="absolute right-5 bottom-[-80px]  transition-all ease-in-out  "
              src="./assets/absolimg.png"
              alt=""
            />
          </div>
          <div className="relative">
            <img
              className="absolute bottom-10 right-80 w-[350px] h-[250px] "
              src="./assets/marko.png"
              alt=""
            />
          </div>

          <footer>
            <div className="footer pt-40 pb-10 px-20">
              <div className="footer-start flex justify-between mb-10 max-[447px]:flex- max-[768px]:flex-wrap">
                {/* <div className="logo"><img src="./images/logo.png" alt=""></div> */}
                <div>
                <img src="./assets/logo.png" alt="" />

                </div>
                <div className="btn flex items-center">
                  {" "}
                   <p>   Ready to get started?{" "}</p>
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
              <p>©Agon Official 2022</p>
              <p>Privacy policy Cookies Terms of service</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Header;
