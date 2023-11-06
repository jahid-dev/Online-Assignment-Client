

const HeroSection = () => {
  return (
    <section className="max-w-[1200px] mx-auto py-16 px-4 md:px-0">
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10">
            <div className="text-black">
              <h1 className="font-semibold text-2xl md:text-4xl lg:text-5xl mb-6">
                Join Our Online Group Study with Friends and Boost Your Knowledge Together!
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-8">
                Collaborate, learn, and grow together in our interactive online study platform.
              </p>
              <a href="#" className="bg-blue-500 hover:bg-blue-700 py-3 px-6 rounded-full text-lg md:text-xl lg:text-2xl text-white">
                Join Now
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src="https://i.ibb.co/WKT5SFN/image.png"
              alt="study group"
              className="rounded-xl object-cover w-full hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
