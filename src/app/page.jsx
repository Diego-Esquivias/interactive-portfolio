import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>

    {/* Main Content */}
    <br />

    <div className="marquee font-bold">
      <div className="marquee__inner " aria-hidden="true">
        <span>Welcome To My Portfolio • </span>
        <span>Welcome To My Portfolio • </span>
        <span>Welcome To My Portfolio • </span>
        <span>Welcome To My Portfolio • </span>
      </div>
    </div>

    <div className="marquee font-bold">
      <div className="marquee__innerv2 text-[#D8B4A6]" aria-hidden="true">
        <span>Future Software Engineer • </span>
        <span>Future Software Engineer • </span>
        <span>Future Software Engineer • </span>
        <span>Future Software Engineer • </span>
      </div>
    </div>
      
    <hr className='border-gray-800 mt-10 mb-15' />

      {/* Place for the image Scroll thing */}
      <div className="w-3/4 mx-auto mt-5" data-aos="flip-up" data-aos-duration="2000">
        <Image
        src={"https://res.cloudinary.com/dom4vyzw7/image/upload/v1746477503/IMG_4638_jindgz.jpg"}
        alt="placeholder Image"
        width={350}
        height={350}
        className="m-auto rounded-2xl border-2 border-[#6D696A]"
        />
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-10 items-center justify-items-center mt-10" data-aos="zoom-in-left" data-aos-duration="2000">
        <div className="text-center w-3/4">
          <h1 className="text-5xl font-extrabold text-[#D8B4A6]">About Me</h1>
          <div className="text-xl font-bold text-center p-5 rounded-2xl mt-10 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-v1-move shadow-v1">
            <p>Hi, I'm Diego, a passionate web developer with a focus on creating intuitive and dynamic user experiences. I specialize in front-end development, working with modern tools like React, JavaScript, Tailwind, and CSS to build responsive, user-friendly websites.</p>
            <br />
            <p>What excites me the most is using my skills to solve real-world problems and bring ideas to life through code. When I'm not working on web projects, you can find me playing video games, reading comics, or spending time with people I love.</p>
            <br />
            <p>Want to know more about me?  <span className="text-[#D8B4A6] hover:underline hover:font-bold"><Link href={'/about'}>Click Here!</Link></span></p>
          </div>
        </div>

        <div data-aos="flip-left" data-aos-duration="2000">
          <Image
          src={"https://res.cloudinary.com/dom4vyzw7/image/upload/v1746828569/IMG_4643_z9ijlb.jpg"}
          alt="placeholder Image"
          width={400}
          height={400}
          className="m-auto rounded-2xl border-2 border-[#6D696A]"
          />
        </div>

        {/* Education Section */}
        <div data-aos="flip-right" data-aos-duration="2000">
          <Image
          src={"https://res.cloudinary.com/dom4vyzw7/image/upload/v1746826580/IMG_4835_qovvyc_c_crop_w_3024_h_2500_gjkh4s.png"}
          alt="placeholder Image"
          width={650}
          height={650}
          className="m-auto rounded-2xl border-2 border-[#6D696A]"
          />
        </div>

        <div className="text-center w-3/4" data-aos="zoom-in-left" data-aos-duration="2000">
          <h1 className="text-5xl font-extrabold text-[#D8B4A6]">Education</h1>
          <div className="text-xl font-bold text-center p-5 rounded-2xl mt-10 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-v1-move shadow-v1">
            <p>I spent four years at Sunnyslope High School, where I gained valuable knowledge and skills that will support my future academic and career goals. During my time there, I explored subjects that sparked my interest, including AP Computer Science Principles, AP Precalculus, and various coding-related courses.
            </ p>
            <br />
            <p>
            While at Sunnyslope, I learned about the West-MEC program, which helps students prepare for careers in their fields of interest. I chose to enroll in the coding program, where I developed both technical and professional skills essential for a career in software development. Through this program, I gained hands-on experience with multiple programming languages and technologies, including Python, JavaScript, HTML, CSS, Next.js, and React.</p>
            <br />
            <p>Overall, I highly recommend the West-MEC program to high school students who are looking to get a head start on their careers and gain real-world experience before graduation.</p>
          </div>
        </div>

      </div>
    </>
  );
}
