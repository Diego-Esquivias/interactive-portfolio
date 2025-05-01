import React from 'react'
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
    {/* <div className="marquee font-bold">
      <div className="marquee__inner " aria-hidden="true">
        <span>My Work • </span>
        <span>My Work • </span>
        <span>My Work • </span>
        <span>My Work • </span>
        <span>My Work • </span>
        <span>My Work • </span>
      </div>
    </div> */}

    <div className="text-center">
      <span>
      Past Projects • Past Projects • Past Projects • 
      </span>
    </div>

    <br />
    <hr />
    <br />

    {/* Section Main Version */}
    <div className='w-full grid grid-cols-2 grid-rows-1 justify-items-center'>
      <Link href={'https://diego-esquivias.github.io/Calculator-Assignment/'} target='_blank' className='grid justify-items-stretch'>
        <Image
        src={"https://res.cloudinary.com/dom4vyzw7/image/upload/v1746131397/calculator_ltfujq.png"}
        alt="placeholder Image"
        width={400}
        height={400}
        className="m-auto rounded-2xl shadow-glow transform transition-all duration-300 ease-in-out hover:shadow-glow-move hover:scale-105"
        />
      </Link>
      <div className='grid justify-items-start'>
        <h1 className='text-5xl font-bold text-[#D8B4A6]'>Calculator</h1>
        <hr className='border-3 border-red w-1/2 rounded-full my-2'/>
        <h2 className='text-2xl text-[#D8B4A6]'>Deployed on Apr 22, 2024</h2>

        <div className='text-2xl bg-black p-5 w-3/4 rounded-2xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-v1-move shadow-v1 mt-35'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nostrum exercitationem assumenda, illum est atque omnis asperiores inventore. Repellat earum ullam consectetur vero, sunt voluptatum magni accusantium expedita a esse doloremque 
        </div>
      </div>
    </div>

    <br />
    <br />

    {/* Section Secondary Version */}
    <div className='w-full bg-[#D8B4A6] grid grid-cols-2 grid-rows-1 place-items-center py-5 my-10'>
      <div className='grid justify-items-end'>
        <h1 className='text-5xl font-bold text-black mt-10'>Memory Card Game</h1>
        <hr className='border-3 border-red w-2/3 rounded-full my-2'/>
        <h2 className='text-2xl text-black'>Published on Dec 13, 2024</h2>

        <div className='text-2xl bg-black p-5 w-3/4 rounded-2xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-v2-move shadow-v2 mt-35 mb-10'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nostrum exercitationem assumenda, illum est atque omnis asperiores inventore. Repellat earum ullam consectetur vero, sunt voluptatum magni accusantium expedita a esse doloremque 
        </div>
      </div>

      <Link href={'https://desqui-memory-game.netlify.app/'} target='_blank' className='grid justify-items-stretch'>
        <Image
        src={"https://res.cloudinary.com/dom4vyzw7/image/upload/v1746132598/memorygame_td8xu2.png"}
        alt="placeholder Image"
        width={500}
        height={500}
        className="m-auto rounded-2xl shadow-glowv2 transform transition-all duration-300 ease-in-out hover:shadow-glowv2-move hover:scale-105"
        />
      </Link>
    </div>

    {/* ---------------------------------------------------------------------------------------------------------------- */}

    {/* Section Main Version */}
    <div className='w-full grid grid-cols-2 grid-rows-1 justify-items-center py-5'>
      <Link href={'https://desqui-tic-tac-toe.netlify.app/'} target='_blank' className='grid justify-items-stretch'>
        <Image
        src={"https://res.cloudinary.com/dom4vyzw7/image/upload/v1746132836/tictactoe_nhprgy.png"}
        alt="placeholder Image"
        width={400}
        height={400}
        className="m-auto rounded-2xl shadow-glow transform transition-all duration-300 ease-in-out hover:shadow-glow-move hover:scale-105"
        />
      </Link>
      <div className='grid justify-items-start'>
        <h1 className='text-5xl font-bold text-[#D8B4A6]'>Tic-Tac-Toe Game</h1>
        <hr className='border-3 border-red w-3/5 rounded-full my-2'/>
        <h2 className='text-2xl text-[#D8B4A6]'>Published on Dec 13, 2024.</h2>

        <div className='text-2xl bg-black p-5 w-3/4 rounded-2xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-v1-move shadow-v1 mt-35'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nostrum exercitationem assumenda, illum est atque omnis asperiores inventore. Repellat earum ullam consectetur vero, sunt voluptatum magni accusantium expedita a esse doloremque 
        </div>
      </div>
    </div>

    <br />
    <br />

    {/* Section Secondary Version */}
    <div className='w-full bg-[#D8B4A6] grid grid-cols-2 grid-rows-1 place-items-center py-5 my-10'>
      <div className='grid justify-items-end'>
        <h1 className='text-5xl font-bold text-black mt-10'>Food Quiz Game</h1>
        <hr className='border-3 border-red w-3/5 rounded-full my-2'/>
        <h2 className='text-2xl text-black'>Published on Dec 11, 2024</h2>

        <div className='text-2xl bg-black p-5 w-3/4 rounded-2xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-v2-move shadow-v2 mt-35 mb-10'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nostrum exercitationem assumenda, illum est atque omnis asperiores inventore. Repellat earum ullam consectetur vero, sunt voluptatum magni accusantium expedita a esse doloremque 
        </div>
      </div>

      <Link href={'https://desqui-food-quiz.netlify.app/'} target='_blank' className='grid justify-items-stretch'>
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
      <Link href={'https://invisible-maze-game.netlify.app/'} target='_blank' className='grid justify-items-stretch'>
        <Image
        src={"https://res.cloudinary.com/dom4vyzw7/image/upload/v1746133865/mazegame_rod3fy.png"}
        alt="placeholder Image"
        width={500}
        height={500}
        className="m-auto rounded-2xl shadow-glow transform transition-all duration-300 ease-in-out hover:shadow-glow-move hover:scale-105"
        />
      </Link>
      <div className='grid justify-items-start'>
        <h1 className='text-5xl font-bold text-[#D8B4A6]'>Maze Game</h1>
        <hr className='border-3 border-red w-1/2 rounded-full my-2'/>
        <h2 className='text-2xl text-[#D8B4A6]'>Published on Dec 13, 2024.</h2>

        <div className='text-2xl bg-black p-5 w-3/4 rounded-2xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-v1-move shadow-v1 mt-35'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nostrum exercitationem assumenda, illum est atque omnis asperiores inventore. Repellat earum ullam consectetur vero, sunt voluptatum magni accusantium expedita a esse doloremque 
        </div>
      </div>
    </div>
    </>
  )
}

export default page