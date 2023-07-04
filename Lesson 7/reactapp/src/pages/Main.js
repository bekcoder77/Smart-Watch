import React from 'react'
import {FaArrowRight} from "react-icons/fa"


function Main() {
  return (
    <div>
         <div className="containerDiv">
        <div>
          <div className=" title font-bold m-auto py-14">
            <h1 className="text-[42px] font-medium text-center">
              Explore by Categories.
            </h1>
            <h5 className="text-[16px] font-normal py-4 w-[35%] m-auto text-center max-[510px]:w-[80%]">
              We provide many categories, choose a category according to your
              expertise to make it easier to find a job.
            </h5>
          </div>
          <div className="grid grid-cols-2 max-[510px]:grid-cols-1  place-items-center gap-14 mx-24  max-[510px]:mx-2 ">
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
            <h1 className="font-medium text-5xl w-[50%] py-8 text-center mx-auto max-[510px]:w-[80%]">
              Cross-border ordering has never been easier
            </h1>
          </div>

          <div className="fl-cards py-10 flex flex-wrap gap-20 justify-center px-16">
            <div className="card cursor-pointer text-center w-[250px] h-[300px] bg-[#FFF3EA] py-10 hover:translate-y-[-20px] transition-all ease-in-out">
              {/* <img  src="./assets/ii.png" alt=""> */}
              <img className="m-auto mb-2" src="./assets/ii.png" alt="" />

              <h2 className="mt-3 mb-3 text-3xl font-medium">Start Plan</h2>
              <p className="text-[#667085] px-7">Choose any of our packages</p>
            </div>
            <div className="card cursor-pointer text-center w-[250px] h-[300px] bg-[#FDE2E4] py-10  hover:translate-y-[-20px] transition-all ease-in-out">
              <img className="m-auto mb-2" src="./assets/ii.png" alt="" />

              <h2 className="mt-3 mb-3 text-3xl font-medium">Connect </h2>
              <p className="text-[#667085] px-7">Choose any of our packages</p>
            </div>
            <div className="card text-center cursor-pointer w-[250px] h-[300px] bg-[#DBECE5] py-10  hover:translate-y-[-20px] transition-all ease-in-out">
              <img className="m-auto mb-2" src="./assets/ii.png" alt="" />

              <h2 className="mt-3 mb-3 text-3xl font-medium">Match </h2>
              <p className="text-[#667085] px-7">Choose any of our packages</p>
            </div>
            <div className="card cursor-pointer text-center w-[250px] h-[300px] bg-[#DBECE5] py-10  hover:translate-y-[-20px] transition-all ease-in-out">
              <img className="m-auto mb-2" src="./assets/ii.png" alt="" />

              <h2 className="mt-3 mb-3 text-3xl font-medium">Complete </h2>
              <p className="text-[#667085] px-7">Choose any of our packages</p>
            </div>
            <div className="card cursor-pointer text-center w-[250px] h-[300px] bg-[#D1ECFD] py-10  hover:translate-y-[-20px] transition-all ease-in-out">
              <img className="m-auto mb-2" src="./assets/ii.png" alt="" />

              <h2 className="mt-3 mb-3 text-3xl font-medium">Review </h2>
              <p className="text-[#667085] px-7">Choose any of our packages</p>
            </div>
            <div className="card cursor-pointer text-center w-[250px] h-[300px] bg-[#D1ECFD] py-10  hover:translate-y-[-20px] transition-all ease-in-out">
              <img className="m-auto mb-2" src="./assets/ii.png" alt="" />

              <h2 className="mt-3 mb-3 text-3xl font-medium">Review </h2>
              <p className="text-[#667085] px-7">Choose any of our packages</p>
            </div>
          </div>
          <div className="main-end relative  w-full h-[400px] bg-[#006D77] text-white py-28 px-16 rounded-2xl max-[510px]:hidden ">
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
          <div className="relative max-[510px]:hidden">
            <img
              className="absolute right-5 bottom-[-80px]  transition-all ease-in-out  "
              src="./assets/absolimg.png"
              alt=""
            />
          </div>
          <div className="relative max-[510px]:hidden">
            <img
              className="absolute bottom-10 right-80 w-[350px] h-[250px] "
              src="./assets/marko.png"
              alt=""
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Main