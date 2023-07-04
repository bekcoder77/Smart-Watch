import React from "react";

function Cards({ store, mode, setmode }) {
  return (
    <div>
      <div className=" Cards flex flex-wrap  px-14 py-16 gap-6 justify-center">
        {store.map((item) => {
          return (
            <div className="main-card cursor-pointer w-[300px] h-[400px] gap-5 border-[2px] px-4 py-4  hover:scale-[1.06] duration-200 transition-transform ">
              <img className="pb-5 mx-auto o  w-[200px] h-[180px] object-contain " src={item.img} alt="" />
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
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
