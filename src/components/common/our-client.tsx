"use client";

const OurClient = () => {
  return (
    <section className="py-[130px] px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block px-4 py-1 border border-primary text-white rounded-full text-sm mb-4">
          Our Client
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Trusted Industry Leader
        </h2>
        <div className="flex justify-center gap-6">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="w-52 h-52 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 text-lg"
              >
                234 × 234
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default OurClient;
