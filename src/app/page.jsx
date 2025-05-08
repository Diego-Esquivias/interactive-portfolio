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
          <div className="text-xl text-center p-5 rounded-2xl mt-10 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-v1-move shadow-v1">
            <p>Hi, I'm Diego, a passionate web developer with a focus on creating intuitive and dynamic user experiences. I specialize in front-end development, working with modern tools like React, JavaScript, Tailwind, and CSS to build responsive, user-friendly websites.</p>
            <br />
            <p>What excites me the most is using my skills to solve real-world problems and bring ideas to life through code. When I'm not working on web projects, you can find me playing video games, reading comics, or spending time with people I love.</p>
            <br />
            <p>Want to know more about me?  <span className="text-[#D8B4A6] hover:underline hover:font-bold"><Link href={'/about'}>Click Here!</Link></span></p>
          </div>
        </div>

        <div data-aos="flip-left" data-aos-duration="2000">
          <Image
          src={"https://res.cloudinary.com/dom4vyzw7/image/upload/v1745530659/second_black_suit_spider-man_1990_14_art_by_todd_mcfarlane_and_gregory_wright_zrqgwk.jpg"}
          alt="placeholder Image"
          width={450}
          height={450}
          className="m-auto rounded-2xl border-2 border-[#6D696A]"
          />
        </div>

        {/* Education Section */}
        <div data-aos="flip-right" data-aos-duration="2000">
          <Image
          src={"https://res.cloudinary.com/dom4vyzw7/image/upload/v1746478136/difference-between-continuing-education-and-professional-development_small_nzdoh6.jpg"}
          alt="placeholder Image"
          width={650}
          height={650}
          className="m-auto rounded-2xl border-2 border-[#6D696A]"
          />
        </div>

        <div className="text-center w-3/4" data-aos="zoom-in-left" data-aos-duration="2000">
          <h1 className="text-5xl font-extrabold text-[#D8B4A6]">Education</h1>
          <div className="text-xl text-center p-5 rounded-2xl mt-10 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-v1-move shadow-v1">
            <p>I spent 4 years at Sunnyslope Highschool gaining crucial knowledge that will help me in my future. I took many classes in areas that interested during my highschool life such as Ap Computer Science Principles, Ap Precalc, and coding. 
            </ p>
            <br />
            <p>
            During my time at Sunnyslope, I was told about West-MEC and how it prepared students for careers they wanted to pursue after highschool so I decided to take their coding program. During my time at West-MEC I was taught many professional and technical skills that will help me when finding a job in the coding area along with knowledge in various programming languages such as python, javascript, html, css, next js, react, and much much. Overall, I would highly recommend this program to other highschool students looking to get a head start in life after school.</p>
          </div>
        </div>

      </div>
    </>
  );
}
