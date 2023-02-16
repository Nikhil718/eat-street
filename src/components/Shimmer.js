const Shimmer = () => {
  return (
    <div className=" px-11 my-9 mx-16 flex flex-wrap ">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className=" my-7 mx-7 px-8 h-64 w-48 bg-gray-200 border border-blue-300 shadow rounded-md p-4 max-w-sm animate-pulse flex space-x-4 "
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
