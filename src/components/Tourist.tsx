import { Carousel, Typography } from "@material-tailwind/react";

const Tourist = () => {
  return (
    <div id="food" className="w-full h-full relative z-0 bg-[#0a192f]">
      <section className="max-h-screen">
        <div className="text-center p-10 py-10 pt-[100px]">
          <h2 className="text-5xl py-2 text-[#0A98FC] font-medium md:text-6xl">
            Tourist Attractions
          </h2>
          <h3 className="text-2xl text-[#0A55F2] py-2 md:text-3xl">
            not that much though
          </h3>
        </div>
      </section>
      <section className="min-h-screen">
        <div className="max-w-5xl grid place-items-center mx-auto">
          <Carousel
            className="rounded-xl"
            transition={{ duration: 1 }}
            autoplay={true}
            autoplayDelay={2500}
            loop={true}
          >
            <div className="relative h-full w-full">
              <img
                src="https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2023/06/01/eb784b0d-5b64-4196-886e-251e613e76f8-609875139.jpeg"
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/25">
                <div className="w-3/4 md:w-2/4">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl align-text-bottom"
                  >
                    Telaga Sarangan
                  </Typography>
                </div>
              </div>
            </div>
            <div className="relative h-full w-full">
              <img
                src="https://pagaralampos.disway.id/upload/11fe530be31e9d22272e691039e40c07.jpg"
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                  >
                    Gunung Lawu
                  </Typography>
                </div>
              </div>
            </div>
            <div className="relative h-full w-full">
              <img
                src="https://solo.co.id/wp-content/uploads/2020/01/Air-Terjun-Grojokan-Sewu.jpg"
                alt="image 3"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                  >
                    Grojogan Sewu Waterfall
                  </Typography>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default Tourist;
