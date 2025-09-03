import React from "react";

const InputLo = () => {
  return (
    <div className="py-16 bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="text-3xl md:text-5xl font-light text-gray-900 leading-tight mb-12">
          Discover what{" "}
          <span className="font-semibold text-black">Inputlo</span>
          <br />
          can do for you, for free
        </h1>

        {/* CTA Button */}
        <div className="mt-12">
          <button className="bg-[#F6C957] hover:bg-[#F6C957]/80 text-black px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 cs">
            Start Building Forms—its&apos; free
          </button>
        </div>

        {/* Optional subtitle */}
        <p className="text-gray-600 text-lg mt-8 max-w-2xl mx-auto">
          Create beautiful, responsive forms in minutes. No coding required.
        </p>
      </div>
    </div>
  );
};

export default InputLo;
