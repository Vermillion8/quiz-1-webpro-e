import { Carousel, Typography } from "@material-tailwind/react";

const Food = () => {
  return (
    <div id="food" className="w-full h-full relative z-0 bg-[#0a192f]">
      <section className="max-h-screen">
        <div className="text-center p-10 py-10 pt-[100px]">
          <h2 className="text-5xl py-2 text-[#0A98FC] font-medium md:text-6xl">
            Local Foods
          </h2>
          <h3 className="text-2xl text-[#0A55F2] py-2 md:text-3xl">
            Gordan Ramsay Approved
            <br />
            (not really)
          </h3>
        </div>
      </section>
      <section className="min-h-screen">
        <div className="max-w-5xl grid place-items-center mx-auto">
          <Carousel className="rounded-xl" transition={{duration: 1}} autoplay={true} autoplayDelay={2500} loop={true}>
            <div className="relative h-full w-full">
              <img
                src="https://bappelitbang.ngawikab.go.id/wp-content/uploads/2022/11/Tahu-Tepo-Khas-Ngawi-1-1024x780.jpg"
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
                <div className="w-3/4 text-center md:w-2/4">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                  >
                    Tepo Tahu
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                  >
                    Tofu is a traditional food consisting of the basic ingredients of tepo or a kind of lontong, tofu, and various other additional ingredients. At first glance, this culinary dish is similar to lontong tofu or kupat tofu, but the taste is different.
                  </Typography>
                </div>
              </div>
            </div>
            <div className="relative h-full w-full">
              <img
                src="https://parboaboa.com/data/foto_berita/makanan-magetan.webp"
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full items-center bg-black/50">
                <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                  >
                    Pecel Pincuk
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                  >
                    Pecel rice served on pincuk banana leaves. Pecel is a mixture of cassava leaves, cucumber, Chinese petai, bean sprouts and basil sprinkled with peanut sauce on top.
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

export default Food;
