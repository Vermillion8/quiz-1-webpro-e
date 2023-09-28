import { Typography } from "@material-tailwind/react";
import { Reveal } from "./utils/Reveal";

const Homepage = () => {
  return (
    <div id="home" className="w-full h-screen relative z-10 bg-[#0a192f]">
      <div className="items-center justify-center w-screen h-screen flex">
        <Reveal>
          <Typography
            as="a"
            variant="h1"
            className="text-center text-[100px] text-[#0A98FC] transition-colors"
          >
            Thalent's Portofolio
          </Typography>
        </Reveal>
      </div>
    </div>
  );
};

export default Homepage;
