const HeroSection = () => {
    return (
      <section  className="max-w-[1200px]  mx-auto">
        <div className=" py-16 w-full ">
          <div className="md:flex md:items-center">
            <div className="md:w-1/2 md:pr-10">
              <div className=" text-black">
                <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl mb-6">
                  Join Our Online  <span>Assignment Race</span> and grow your <span className="text-7xl text-blue-500">Knowledge</span>
                </h1>
                
                <a href="#" className=" bg-blue-500  hover:bg-blue-700 py-3 px-6 rounded-full text-lg md:text-xl lg:text-2xl text-white   ">Join Now</a>
              </div>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <img
                src="https://i.ibb.co/2YjpSSL/8841981.jpg"
                alt="assignments"
                className="transition-transform overflow-hidden 
                rounded-xl 
                object-cover transform hover:scale-105 mx-auto md:ml-auto w-full md:w-10/12 lg:w-9/12"
              />
            </div>
          </div>

        </div>
      </section>
    );
  };
  
  export default HeroSection;
  