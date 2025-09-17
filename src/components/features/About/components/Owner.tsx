import React from "react";
import CldImage from "../../home/components/Cld-Image";

const Owner = () => {
  return (
    <div className=" py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="flex">
              <h2 className="text-4xl lg:text-5xl font-light text-[#51301F] leading-tight">
                The Mind Behind The Excellence
              </h2>
            </div>
            <p className="text-[#22120a]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              sunt quasi blanditiis veniam aperiam possimus sequi sint, esse
              illum in. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sit doloribus veniam, deserunt similique repellendus rem ratione
              iste aliquid delectus perspiciatis? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Sapiente autem debitis quia deserunt
              unde possimus a quae expedita, eum quisquam dolores cupiditate
              libero perspiciatis facere eveniet id odio saepe nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptatibus, recusandae veniam quaerat, vel, ut quam soluta aliquam ratione a nemo ducimus. Error unde reprehenderit iusto culpa nemo consequuntur provident, placeat amet eveniet, non magnam exercitationem id velit? Repudiandae ipsa nobis consectetur iste incidunt ipsum dolor hic sequi, quidem itaque laborum voluptatum quam temporibus quas voluptas, praesentium beatae facilis dicta.
            </p>

              <div className="max-w-5xl gap-16 flex">
                <div className="flex flex-col max-w-3xl">
                  <p className="text-sm lg:text-2xl text-[#51301F] uppercase tracking-wider font-medium">
                    Yaseen Mahsud
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm lg:text-2xl text-[#51301F] uppercase tracking-wider font-medium">
                    CEO: J7GROUP
                  </p>
                </div>
              </div>
            </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <CldImage
                src="Yaseen_xyiu5m"
                alt="abc"
                className="w-full h-full object-cover"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Owner;
