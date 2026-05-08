import React from "react";
import NewsLetter from "../home/NewsLetter";
import Reveal from "../../animation/Reveal";

const About = () => {
  return (
    <section className="py-28 pb-5">
      <div className="container max-w-7xl px-4 mx-auto ">
        {/* hero / banner */}
        <Reveal>
          <div className=" text-center mb-20">
            <h1 className=" text-4xl font-semibold ">About Us</h1>
            <p className=" mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              natus! Qui molestias, perferendis dolore sequi consequuntur
              praesentium animi dolor voluptatum.
            </p>
          </div>
        </Reveal>

        {/* mission vision */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20">
            {/* text */}
            <div>
              <h2 className=" text-3xl font-semibold mb-4">Our Mission</h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                hic neque est doloribus perferendis debitis saepe magnam
                exerciit beatae architecto natus soluta similiquevoluptatem
                nulla totam voluptatum qui sint?
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic id
                unde deleniti dolore voluptatem fugiat nemo est soluta possimus
                atque. m. Dolorum exercitationem sapiente omnis provident
                nesciunt aliquid explicabo rem.
              </p>
            </div>
            {/* img */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Mission"
                className="w-full md:h-96 rounded-lg shadow-lg hover:scale-95 transition-all duration-200"
              />
            </div>
          </div>
        </Reveal>

        {/* vission */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20">
            {/* text */}
            <div className="order-1 md:order-2">
              <h2 className=" text-3xl font-semibold mb-4">Our Vission</h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                hic neque est doloribus perferendis debitis saepe magnam
                exerciit beatae architecto natus soluta similiquevoluptatem
                nulla totam voluptatum qui sint?
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic id
                unde deleniti dolore voluptatem fugiat nemo est soluta possimus
                atque. m. Dolorum exercitationem sapiente omnis provident
                nesciunt aliquid explicabo rem.
              </p>
            </div>
            {/* img */}
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1545935950-b7a28791ad7a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Mission"
                className="w-full md:h-96 rounded-lg shadow-lg hover:scale-95 transition-all duration-200"
              />
            </div>
          </div>
        </Reveal>

        {/* team section */}
        <Reveal>
          <div>
            <h2 className="text-center text-3xl font-semibold mb-12">
              Meet Our Team
            </h2>
            {/* peoples cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white px-6 rounded-lg shadow-lg text-center hover:scale-95 transition-all duration-200 cursor-pointer">
                <img
                  src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="person-1"
                  className=" w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className=" text-xl text-gray-700">Elijabeth</h3>
                <h3 className=" text-gray-700">Team Leader</h3>
              </div>

              <div className="bg-white px-6 rounded-lg shadow-lg text-center hover:scale-95 transition-all duration-200 cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="person-1"
                  className=" w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className=" text-xl text-gray-700">Hamilton Shane</h3>
                <h3 className=" text-gray-700">CEO</h3>
              </div>

              <div className="bg-white px-6 rounded-lg shadow-lg text-center hover:scale-95 transition-all duration-200 cursor-pointer">
                <img
                  src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="person-1"
                  className=" w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className=" text-xl text-gray-700">Wolsen Cruise</h3>
                <h3 className=" text-gray-700">Manager</h3>
              </div>

              <div className="bg-white px-6 rounded-lg shadow-lg text-center hover:scale-95 transition-all duration-200 cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="person-1"
                  className=" w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className=" text-xl text-gray-700">Hovskey</h3>
                <h3 className=" text-gray-700">Hassleblad</h3>
              </div>
            </div>
          </div>
        </Reveal>

        {/* newsletter */}
        <NewsLetter />
      </div>
    </section>
  );
};

export default About;
