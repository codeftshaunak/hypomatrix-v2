export default function TrustedCompanySection() {
  return (
    <section className="container text-white py-16 flex flex-col md:flex-row items-center justify-between">
      {/* Left Side Content */}
      <div className="max-w-lg text-center md:text-left">
        <p className="text-sm text-white flex items-center gap-2">
          Company <span className="h-[1px] w-12 bg-gray-400"></span>
        </p>
        <h2 className="text-heading-2 font-bold mt-2">Trusted Our Company</h2>
        <p className="mt-4 text-gray-300 font-semibold"></p>
        <p className="text-gray-400">
          <span className="text-white font-semibold">
            We are a digital Creative agency
          </span>{" "}
          with 25 years of experience, specializing in delivering cutting-edge{" "}
        </p>
      </div>

      {/* Right Side - Logo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="border border-gray-400 w-[200px] flex justify-center items-center h-[100px]">
          <p className="text-gray-400 hover:text-white cursor-pointer">
            CoFoundersLab
          </p>
        </div>
        <div className="border border-gray-400 w-[200px] flex justify-center items-center h-[100px]">
          <p className="text-gray-400 hover:text-white cursor-pointer">
            CoFoundersLab
          </p>{" "}
        </div>
        <div className="border border-gray-400 w-[200px] flex justify-center items-center h-[100px]">
          <p className="text-gray-400 hover:text-white cursor-pointer">
            CoFoundersLab
          </p>{" "}
        </div>
        <div className="border border-gray-400 w-[200px] flex justify-center items-center h-[100px]">
          <p className="text-gray-400 hover:text-white cursor-pointer">
            CoFoundersLab
          </p>{" "}
        </div>
        <div className="border border-gray-400 w-[200px] flex justify-center items-center h-[100px]">
          <p className="text-gray-400 hover:text-white cursor-pointer">
            CoFoundersLab
          </p>{" "}
        </div>
        <div className="border border-gray-400 w-[200px] flex justify-center items-center h-[100px]">
          <p className="text-gray-400 hover:text-white cursor-pointer">
            CoFoundersLab
          </p>{" "}
        </div>
      </div>
    </section>
  );
}
