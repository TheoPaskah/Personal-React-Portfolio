import DataImage from './data';
import {listTools, listProyek} from './data';

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className='animate__animated animate__fadeInUp animate__delay-3s'>
          <div className='flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl'>
            <img src={DataImage.HeroImage} alt="HeroImage" className='w-10 rounded-md' loading='lazy' />
            <q>
              All big things come from small beginnings.
            </q>
          </div>
          <h1 className='text-5xl/tight font-bold mb-6'>
            Hello there! I'am Theo Stevanno Paskah
          </h1>
          <p className='text-base/loose mb-6 opacity-50'>
            I'm an Information Systems student who enjoys problem-solving, experimenting, and learning new technologies. I have experience with SQL, Figma, programming, and web development through academic, work, and personal projects. I'm interested in pursuing a career as a Data Analyst or System Analyst while continuing to grow my technical and analytical skills.
          </p>
          <div className='flex items-center sm:gap-4 gap-2'>
            <a href="#" className='bg-violet-700 p-4 rounded-2xl hover:bg-violet-600'>
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a href="#project" className='bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600'>
              See Project <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className='w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s rounded-md' loading='lazy' />
      </div>

      {/* About */}
      <div className="about mt-32 py-10" id='about'>
        <div className='xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <img src={DataImage.HeroImage} alt="Image" className='w-12 rounded-mb mb-10 sm:hidden' />
          <p className='text-base/loose mb-10'>
            I'm an Information Systems student with a strong interest in technology, problem-solving, and analytical thinking. I enjoy understanding how things work, breaking down problems, and exploring different approaches to find practical solutions. For me, learning technology is not just about using tools, but also about understanding how they can be applied to solve real problems.

            Through academic projects, work experience, and personal projects, I've had the opportunity to work with programming, SQL, Figma, and web development. These experiences have helped me develop both my technical and analytical skills while teaching me to approach problems from different perspectives.

            I'm naturally curious and enjoy experimenting with new ideas and technologies. In the future, I'm interested in pursuing a career as a Data Analyst or System Analyst, while continuing to strengthen my programming and technical skills. I'm always looking for opportunities to learn, build, and turn ideas into practical solutions.
          </p>
          <div className='flex items-center justify-between'>
            <img src={DataImage.HeroImage} alt="Image" className='w-12 rounded-md sm:block hidden' loading='lazy' />
            <div className='flex items-center gap-6'>
              <div>
                <h1 className='text-4xl mb-1'>
                  45<span className='text-violet-500'>+</span>
                </h1>
                <p>
                  Proyek selesai
                </p>
              </div>
              <div>
                <h1 className='text-4xl mb-1'>
                  4 <span className='text-violet-500'>+</span>
                </h1>
                <p>
                  Tahun Pengalaman
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1 className='4-xl/snug font-bold mb-4' data-aos="fade-up" data-aos-duration="1000">
            Tools Used
          </h1>
          <p className='xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 text-base/loose text-white/50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
            Here are some of the tools and technologies I use to build projects, solve problems, and bring ideas into practical solutions.
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">

            {listTools.map((tool) => (
              <div className='flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:border-zinc-800  group' key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
                <img src={tool.gambar} alt="Tools Image" className='w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900' loading='lazy'/>
                <div>
                  <h4 className='font-bold'>
                    {tool.nama}
                  </h4>
                  <p className='opacity-50'>
                    {tool.ket}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
      {/* About */}

      {/* Project */}
      <div className="project mt-32 py-10" id='project'>
        <h1 className='text-center text-4xl font-bold mb-2'>
          Project
        </h1>
        <p className='text-base/loose text-center text-white/50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
          A collection of projects I've worked on through academic assignments, work experience, and personal projects. Each project has given me an opportunity to solve problems, explore new technologies, and turn ideas into practical solutions while continuously improving my skills.
        </p>
        <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listProyek.map(proyek => (
              <div key={proyek.id} className='p-4 bg-zinc-800 rounded-md' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
                <img src={proyek.gambar} alt="Project Image" loading='lazy' />
                <div>
                  <h1 className='text-2xl font-bold my-4'>
                    {proyek.nama}
                  </h1>
                  <p className='text-base/loose mb-4'>
                    {proyek.desk}
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {proyek.tools.map((tool, index) =>(
                      <p className='py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold' key={index}>
                        {tool}
                      </p>
                    ))}
                  </div>
                  <div className='mt-8 text-center'>
                    <a href="#" className='bg-violet-700 p-3 rounded-lg block border border-zinc-600'>
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* Project */}

      {/* Contact */}
      <div className="contact mt-32 sm:p-10 p-0" id='contact'>
        <h1 className='text-4xl mb-2 font-bold text-center mb-10 opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          Contact
        </h1>
        <p className='text-base/loose text-center mb-10 opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
          Let's connect.
        </p>
        <form action="https://formsubmit.co/theostevanopaskah@gmail.com" method="POST" className='bg-zinc-800 p-10  sm:w-fit w-full mx-0 rounded-md mx-auto' autoComplete='off' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='font-semibold'>
                Fullname
              </label>
              <input type="text" name='nama' placeholder='Enter Fullname...' className='border border-zinc-500 p-2 rounded-md' required />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='font-semibold'>
                Email
              </label>
              <input type="email" name='email' placeholder='Enter Email...' className='border border-zinc-500 p-2 rounded-md' required />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="pesan" className='font-semibold'>
                Message
              </label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" className='border border-zinc-500 p-2 rounded-md' placeholder='Message...' required></textarea>
            </div>
            <div className='text-center'>
              <button type='submit' className='bg-violet-700 p-3 rounded-lg w-full cursor-pointer block border border-zinc-600 hover:bg-violet-600'>
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* Contact */}
    </>
  );
}

export default App;
