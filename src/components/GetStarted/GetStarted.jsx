import getStarted from "../../assets/get-started-pic.svg";
const GetStarted = () => {
  return (
    <>
      <section className="get-started p-4 bg-blue-600 text-white rounded-sm md:w-[40%] mx-[5%] mt-4 flex flex-col items-center">
        <div>
          <img src={getStarted} alt="" className="w-48 h-48" />
        </div>
        <h2 className="mb-8 text-3xl font-semibold">
          Get Started with koinX for FREE
        </h2>
        <p className="mb-6 md:w-[75%] w-[100%]">
          With our range of features that you can equip for free, KoinX allows
          us to be more educated and aware of our tax reports
        </p>
        <button className="px-4 py-2 text-xl font-bold text-black bg-white rounded-md">
          Get Started For Free{" "}
          <i className="mt-[3px] fa-solid fa-arrow-right ml-2"></i>
        </button>
      </section>
    </>
  );
};
export default GetStarted;
