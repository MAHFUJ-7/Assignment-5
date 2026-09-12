import logo from "../assets/Background+Shadow.png";
const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between gap-20 px-10 py-10">
        <div>
          <div className="flex gap-2 items-center font-bold mb-5 mt-10 ">
            <img src={logo} alt="Logo" className="" />
            <h2>
              Dev <span className="text-pink-500">Stack</span>
            </h2>
          </div>
          <p className="text-[#64748B]">
            Curated tools, technologies, and resources for developers building
            <br />
            modern software.
          </p>
          <div>
            <ul className="flex gap-8 text-[#475569] mt-5">
              <a href="#">Github</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </ul>
          </div>
        </div>
        <div className="flex gap-20 mt-5">
          <div>
            <h1 className="text-[#334155] font-bold">PRODUCT</h1>
            <ul className="flex flex-col gap-3 text-[#475569] mt-5">
              <a href="#">Home</a>
              <a href="#">Technologies</a>
              <a href="#">Projects</a>
            </ul>
          </div>
          <div>
            <h1 className="text-[#334155] font-bold">COMPANY</h1>
            <ul className="flex flex-col gap-3 text-[#475569] mt-5">
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">Careers</a>
            </ul>
          </div>
          <div>
            <h1 className="text-[#334155] font-bold">LEGAL</h1>
            <ul className="flex flex-col   gap-3 text-[#475569] mt-5">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between"></div>
      <div className="flex justify-between items-center border-t border-[#E2E8F0] px-10 py-1 pb-2">
        <div className="text-[#94A3B8] mt-5">
          <p>© 2026 Dev Stack. All rights reserved.</p>
        </div>
        <ul className="flex gap-5 text-[#94A3B8] mt-5 pl-5 ">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
