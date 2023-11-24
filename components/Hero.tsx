

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-200">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-purple-900 mb-4">
          Connect with <span className="text-aqua-100">dreams</span> deeper
        </h1>
        <p className="text-xl text-black-800 mb-8">
          We help you interpret your dreams and their significance
        </p>
        <div className="space-x-4">
          <button className="bg-aqua-100 hover:bg-aqua-200 text-white font-regular py-2 px-4 rounded">
            Get Started
          </button>
          <button className="bg-transparent hover:bg-purple-100 text-purple-900 font-regular py-2 px-4 border border-purple-900 rounded">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
