import myImage from "../assets/images/25766436-2423-48DF-B001-3E358DE81496.jpg"

const Profile = () => {
  return (
    <div id="profile" className="w-full h-screen relative z-0 bg-[#0a192f]">
      <section className="min-h-screen">
        <div className="text-center p-10 py-10 pt-[100px]">
          <h2 className="text-5xl py-2 text-[#0A98FC] font-medium md:text-6xl">
            Thalent Athalla Razzaq
          </h2>
          <h3 className="text-2xl text-[#0A55F2] py-2 md:text-3xl">
            Full Stack Developer
          </h3>
          <p className="text-md py-5 leading-8 text-[#5386F4] text-justify max-w-xl mx-auto md:text-xl">
            Hi! My friends call me 'Thal' or 'Lent' most of the time and I enjoy sleeping as much as fried rice. I was born on the 5th of January 2003 in Magetan, East Java. I don't have a dream job because why would I dream of work.
          </p>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-5 md:h-96 md:w-96">
            <img className="w-full h-full object-cover" src={myImage} alt="profile" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
