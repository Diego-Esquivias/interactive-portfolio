import React from 'react'
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
    <div className="marquee font-bold">
      <div className="marquee__inner " aria-hidden="true">
        <span>My Work • </span>
        <span>My Work • </span>
        <span>My Work • </span>
        <span>My Work • </span>
        <span>My Work • </span>
        <span>My Work • </span>
      </div>
    </div>

    <div className="marquee font-bold">
      <div className="marquee__innerv2 text-[#D8B4A6]" aria-hidden="true">
        <span>Past Projects • </span>
        <span>Past Projects • </span>
        <span>Past Projects • </span>
        <span>Past Projects • </span>
        <span>Past Projects • </span>
        <span>Past Projects • </span>
      </div>
    </div>

    <hr className='border-gray-800 mt-10 mb-15' />

    {/* Section Main Version */}
    <div className='w-full grid grid-cols-2 grid-rows-1 justify-items-center'>
      <Link href={'https://diego-esquivias.github.io/Calculator-Assignment/'} target='_blank' className='grid justify-items-stretch' data-aos="flip-right" data-aos-duration="2000">
        <Image
        src={"https://res.cloudinary.com/dom4vyzw7/image/upload/v1746131397/calculator_ltfujq.png"}
        alt="placeholder Image"
        width={500}
        height={500}
        className="m-auto rounded-2xl shadow-glow transform transition-all duration-300 ease-in-out hover:shadow-glow-move hover:scale-105"
        />
      </Link>
      <div className='grid justify-items-start'>
        <div data-aos="fade-left" data-aos-duration="2000">
          <h1 className='text-5xl font-extrabold text-[#D8B4A6]'>Calculator</h1>
          <hr className='border-3 rounded-full my-2'/>
          <h2 className='text-2xl text-[#D8B4A6]'>Deployed on Apr 22, 2024</h2>
        </div>
        
        <div data-aos="zoom-in" data-aos-duration="2000">
          <div className='text-2xl bg-black p-5 w-3/4 rounded-2xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-v1-move shadow-v1 mt-35 font-bold'>
            I developed this calculator website during my first year at West-MEC. The project was primarily built using JavaScript and HTML, with CSS used to create a realistic calculator interface. Through this experience, I gained valuable skills in string manipulation and deepened my understanding of the JavaScript Math library to ensure accurate and reliable calculations.
          </div>
        </div>
      </div>
    </div>

    <br />
    <br />

    {/* Section Secondary Version */}
    <div className='w-full bg-[#D8B4A6] grid grid-cols-2 grid-rows-1 place-items-center py-5 my-10'>
      <div className='grid justify-items-end'>
        <div className='text-right' data-aos="fade-right" data-aos-duration="2000">
          <h1 className='text-5xl font-extrabold text-black mt-10'>Memory Card Game</h1>
          <hr className='border-3 rounded-full my-2'/>
          <h2 className='text-2xl text-black'>Published on Dec 13, 2024</h2>
        </div>

        <div className='grid justify-items-end' data-aos="zoom-in" data-aos-duration="2000">
          <div className='text-2xl bg-black p-5 w-3/4 rounded-2xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-v2-move shadow-v2 mt-35 mb-10 font-bold'>
            I created this game during my first year at West-MEC, and it's one of my favorites because of how fun and addictive it is. It used more HTML than JavaScript, as I had to repeat divs to display 30 cards. I learned how to build a timer, check for matching cards, and flip them back if they don't match. I also made sure only two cards could be flipped at a time, keeping the game smooth and bug-free. Overall, it was a fun project that taught me a lot about DOM logic and user interaction. 
          </div>
        </div>
      </div>

      <Link href={'https://desqui-memory-game.netlify.app/'} target='_blank' className='grid justify-items-stretch' data-aos="flip-left" data-aos-duration="2000">
        <Image
        src={"https://res.cloudinary.com/dom4vyzw7/image/upload/v1746132598/memorygame_td8xu2.png"}
        alt="placeholder Image"
        width={600}
        height={600}
        className="m-auto rounded-2xl shadow-glowv2 transform transition-all duration-300 ease-in-out hover:shadow-glowv2-move hover:scale-105"
        />
      </Link>
    </div>

    {/* ---------------------------------------------------------------------------------------------------------------- */}

    {/* Section Main Version */}
    <div className='w-full grid grid-cols-2 grid-rows-1 justify-items-center py-5'>
      <Link href={'https://desqui-tic-tac-toe.netlify.app/'} target='_blank' className='grid justify-items-stretch' data-aos="flip-right" data-aos-duration="2000">
        <Image
        src={"https://res.cloudinary.com/dom4vyzw7/image/upload/v1746132836/tictactoe_nhprgy.png"}
        alt="placeholder Image"
        width={400}
        height={400}
        className="m-auto rounded-2xl shadow-glow transform transition-all duration-300 ease-in-out hover:shadow-glow-move hover:scale-105"
        />
      </Link>
      <div className='grid justify-items-start'>
        <div data-aos="fade-left" data-aos-duration="2000">
          <h1 className='text-5xl font-extrabold text-[#D8B4A6]'>Tic-Tac-Toe Game</h1>
          <hr className='border-3 rounded-full my-2'/>
          <h2 className='text-2xl text-[#D8B4A6]'>Published on Dec 13, 2024.</h2>
        </div>

        <div data-aos="zoom-in" data-aos-duration="2000">
          <div className='text-2xl bg-black p-5 w-3/4 rounded-2xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-v1-move shadow-v1 mt-35 font-bold'>
            This also another javascript project I did that during my 1st year of West-MEC. I made functions that revoled around checking 
          </div>
        </div>
      </div>
    </div>

    <br />
    <br />

    {/* Section Secondary Version */}
    <div className='w-full bg-[#D8B4A6] grid grid-cols-2 grid-rows-1 place-items-center py-5 my-10'>
      <div className='grid justify-items-end'>
        <div className='text-right' data-aos="fade-right" data-aos-duration="2000">
          <h1 className='text-5xl font-extrabold text-black mt-10'>Food Quiz Game</h1>
          <hr className='border-3 rounded-full my-2'/>
          <h2 className='text-2xl text-black'>Published on Dec 11, 2024</h2>
        </div>

        <div className='grid justify-items-end' data-aos="zoom-in" data-aos-duration="2000">
          <div className='text-2xl bg-black p-5 w-3/4 rounded-2xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-v2-move shadow-v2 mt-35 mb-10 font-bold'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nostrum exercitationem assumenda, illum est atque omnis asperiores inventore. Repellat earum ullam consectetur vero, sunt voluptatum magni accusantium expedita a esse doloremque 
          </div>
        </div>
      </div>

      <Link href={'https://desqui-food-quiz.netlify.app/'} target='_blank' className='grid justify-items-stretch' data-aos="flip-left" data-aos-duration="2000">
        <Image
        src={"https://res.cloudinary.com/dom4vyzw7/image/upload/v1746132992/quizgame_fbbvbt.png"}
        alt="placeholder Image"
        width={600}
        height={600}
        className="m-auto rounded-2xl shadow-glowv2 transform transition-all duration-300 ease-in-out hover:shadow-glowv2-move hover:scale-105"
        />
      </Link>
    </div>

    <br />
    <br />

    {/* Section Main Version */}
    <div className='w-full grid grid-cols-2 grid-rows-1 justify-items-center'>
      <Link href={'https://invisible-maze-game.netlify.app/'} target='_blank' className='grid justify-items-stretch' data-aos="flip-right" data-aos-duration="2000">
        <Image
        src={"https://res.cloudinary.com/dom4vyzw7/image/upload/v1746133865/mazegame_rod3fy.png"}
        alt="placeholder Image"
        width={500}
        height={500}
        className="m-auto rounded-2xl shadow-glow transform transition-all duration-300 ease-in-out hover:shadow-glow-move hover:scale-105"
        />
      </Link>
      <div className='grid justify-items-start'>
        <div data-aos="fade-left" data-aos-duration="2000">
          <h1 className='text-5xl font-extrabold text-[#D8B4A6]'>Maze Game</h1>
          <hr className='border-3 rounded-full my-2'/>
          <h2 className='text-2xl text-[#D8B4A6]'>Published on Dec 13, 2024.</h2>
        </div>

        <div data-aos="zoom-in" data-aos-duration="2000">
          <div className='text-2xl bg-black p-5 w-3/4 rounded-2xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-v1-move shadow-v1 mt-35 font-bold'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nostrum exercitationem assumenda, illum est atque omnis asperiores inventore. Repellat earum ullam consectetur vero, sunt voluptatum magni accusantium expedita a esse doloremque 
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default page