const Hometown = () => {
  return (
    <div id="hometown" className="w-full h-full relative z-0 bg-[#0a192f]">
      <section className="max-h-screen">
        <div className="text-center p-10 py-10 pt-[100px]">
          <h2 className="text-5xl py-2 text-[#0A98FC] font-medium md:text-6xl">
            Magetan
          </h2>
          <h3 className="text-2xl text-[#0A55F2] py-2 md:text-3xl">Hometown</h3>
          <p className="text-md py-5 leading-8 text-[#5386F4] text-justify max-w-xl mx-auto md:text-xl">
            Magetan is a small hilly town on the eastern slope of the 3265-metre
            Mount Lawu or Gunung Lawu in Indonesian, near the Central Javanese
            border.
          </p>
        </div>
      </section>
      <section className="min-h-screen">
        <div className="grid grid-cols-3 grid-flow-row gap-4 place-items-center">
          <div>
            <img src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2023/04/09/1754430204.jpg" alt="placeholder" />
          </div>
          <div>
            <img src="https://awsimages.detik.net.id/community/media/visual/2022/05/15/telaga-sarangan_169.jpeg?w=600&q=90" />
          </div>
          <div>
            <img src="https://editor.id/wp-content/uploads/2020/10/Asyiknya-Menikmati-Destinasi-Wisata-di-Magetan-Jawa-Timur.jpg" />
          </div>
          <div>
            <img src="https://asset.kompas.com/crops/zlWKHgASjC3GJiYrIUNmZ37CnoY=/196x20:910x496/750x500/data/photo/2023/01/05/63b63ba7a7aca.jpg" />
          </div>
          <div>
            <img src="https://madiunrent.com/wp-content/uploads/2020/11/welcome-magetan-e1604808940989.jpeg" />
          </div>
          <div>
            <img src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/radarmadiun/2023/04/F_Masjid-Bani-Solan.jpg" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hometown;
