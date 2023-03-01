const Shimmer = () => {
  return (
    <div data-testid="shimmer">
      <div className=" w-full  p-24 animate-pulse bg-gray-400 mb-3 ">
        <div className="w-80 h-8  rounded-lg bg-gray-100 mb-3"></div>
      </div>
      <div className="mt-7 p-5 m-4 ">
        <div className="flex flex-wrap justify-center  ">
          {Array(10)
            .fill("")
            .map((e, index) => (
              <div className=" animate-pulse w-56 h-80 p-2 m-5" key={index}>
                <div className="w-56 h-44 bg-gray-400 mb-3"></div>
                <div className="w-56 h-8 bg-gray-400 mb-3"></div>
                <div className="w-3/4 h-8 bg-gray-400 mb-3"></div>
                <div className="flex w-56 h-5 gap-2 justify-between">
                  <div className="w-1/4 bg-gray-400"></div>
                  <div className="w-1/4 bg-gray-400"></div>
                  <div className="w-1/4 bg-gray-400"></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
