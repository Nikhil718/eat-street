const Shimmer = () => {
  return (
    <>
      <div className=" mx-5 my-9 flex justify-center ">
        {Array(4)
          .fill("")
          .map((e, index) => (
            <div
              key={index}
              className="  mx-2 p-1 h-52 w-64 bg-gray-400 border rounded-md  max-w-sm animate-pulse flex  "
            ></div>
          ))}
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
    </>
  );
};

export default Shimmer;
