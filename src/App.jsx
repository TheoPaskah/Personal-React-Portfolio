import DataImage from './data';

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className='flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl'>
            <img src={DataImage.HeroImage} alt="HeroImage" className='w-10 rounded-md' />
            <q>
              Kode yang indah, lahir dari ketekunan.👌
            </q>
          </div>
          <h1 className='text-5xl/tight font-bold mb-6'>
            Hi, Saya Theo Stevanno Paskah
          </h1>
          <p className='text-base/loose mb-6 opacity-50'>
            Saya adalah mahasiswa Sistem Informasi yang memiliki ketertarikan pada pengembangan perangkat lunak dan teknologi. Saya senang membangun aplikasi berbasis web, memecahkan masalah teknis, serta mempelajari teknologi baru. Melalui berbagai proyek akademik, kegiatan organisasi, dan proyek pribadi, saya terus mengembangkan kemampuan dalam pemrograman, pengembangan web, dan problem solving. Saya terbuka untuk terus belajar, mengembangkan kemampuan, dan menciptakan solusi yang bermanfaat melalui teknologi.
          </p>
          <div className='flex items-center sm:gap-4 gap-2'>
            <a href="#" className='bg-violet-700 p-4 rounded-2xl hover:bg-violet-600'>
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a href="#" className='bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600'>
              Lihat Project <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className='w-[500px] md:ml-auto' />
      </div>
    </>
  );
}

export default App;
