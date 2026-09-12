import bannerImage from "../assets/banner-stack.png";
const Banner = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="flex items-center justify-between flex-col md:flex-row">
      <div className=" mt-20 text-center md:text-left">
        <h1 className="font-bold text-5xl py-10">
          Build Your Ideal
          <br />{" "}
          <span className="bg-linear-to-r from-[#FF5722] via-50% via-[#D81B7E] to-[#7C3AED] text-transparent bg-clip-text">
            Development Stack
          </span>
        </h1>
        <p>
          Explore frontend, backend, database, and tooling options,
          <br />
          compare them side by side, and put together the stack that fits your
          <br />
          next project.
        </p>
        <div className="flex gap-5 justify-center md:justify-start mt-10">
          <button className="bg-linear-to-r from-[#F97316] to-[#EC4899] text-white py-1 px-3 rounded ">
            Explore Technologies
          </button>
          <button className="border p-2 rounded ">
            Learn More
          </button>
        </div>
      </div>

      <div>
        <img src={bannerImage} alt="banner" className="mx-auto mt-10" />
      </div>
    </div>
    </div>
  );
};

export default Banner;
