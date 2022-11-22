import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { 
  AiFillGithub,
  AiOutlineWhatsApp,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram } from "react-icons/ai";
import {
  FaTelegramPlane,
  FaDiscord} from "react-icons/fa";
import Image from 'next/image';
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import databases from "../public/databases.png";
import { useState } from 'react';

export default function Home() 
{
  const[darkMode,setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark":""}>
      <Head>
        <title>Rahul Portfolio</title>
      </Head>

      <main className='" bg-white px-10 m:px-20 lg:px-40 dark:bg-gray-900'>
        <section className="min-h-screen" >
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-vt323 lg:text-3xl dark:text-white'>Developed By Rahul</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=' cursor-pointer text-l  lg:text-xl dark:text-white'/>
              </li>
              <li>
                <a href="#" className=' bg-gradient-to-r from-cyan-400 dark:from-cyan-800 to-teal-800 dark:to-teal-400 text-white px-2 py-1 rounded-md ml-8 lg:px-4 lg:py-2'>Resume</a>
              </li>
            </ul>
          </nav>
          <div className=' text-center p-10 '>
            <h2 className=' text-5xl py-2 text-teal-800 dark:text-teal-400 font-medium md:text-6xl '>
              Rahul A B
            </h2>
            <h3 className=' text-2xl py-2 md:text-3xl dark:text-white'>
              Developer and Designer
            </h3>
            <p className=' text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white' >
            Freelancer providing services for programming and design content
            needs. Join me down below and let's get cracking!
            </p>
          </div>
          <div>
            <p className='text-3xl flex justify-center font-burtons gap-8 text-teal-800 dark:text-teal-400 py-3'>Connect with me</p>
            <div className='text-3xl flex justify-center gap-4 text-gray-600 py-2 lg:gap-8 lg:text-4xl'>  
              <a href='https://www.facebook.com/rahul.bushi/'>
                <AiFillFacebook />
              </a>
              <a href='https://www.instagram.com/kl.rab_3490/'>
                <AiFillInstagram />
              </a>
              <a href='https://twitter.com/klrab_3490_'>
                <AiFillTwitterCircle />
              </a>
              <a href='https://github.com/klrab3490'>
                <AiFillGithub />
              </a>
              <a href='https://t.me/klrab_3490'>
                <FaTelegramPlane />
              </a>
              <a href='https://wa.me/7994542331?text=Hi'>
                <AiOutlineWhatsApp />
              </a>
              <a href='https://www.linkedin.com/in/rahul-a-b-0044b1232/'>
                <AiFillLinkedin />
              </a>
              <a href='https://discordapp.com/users/kl.rab_3490#8475'>
                <FaDiscord/>
              </a>
            </div>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-800 dark:from-teal-400 to-slate-200 rounded-full w-80 h-80 mt-20 overflow-hidden lg:h-100 lg:w-100'>
            <Image src={deved} layout="fill" objectFit="cover"/> 
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-2xl py-1 lg:text-3xl dark:text-teal-400 text-teal-800'>Services That I Offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
              Since the beginning of my journey as a freelander 
              developer, I've done remote work for people
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className="text-center mx-auto shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700 dark:text-white flex-1">
              <Image className='mx-auto' src={design} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-teal-400'>Beautiful Designs</h3>
              <p className='py-2'>
                Creative elegant designs suited for your needs following core design theory.
              </p>
              <h3 className='text-teal-600 dark:text-teal-400 py-4'>Design Tools I Use:</h3>
              <p className='text-gray-800 py-1 dark:text-white'>Photoshop</p>
              <p className='text-gray-800 py-1 dark:text-white'>Illustrator</p>
            </div>
            <div className="text-center mx-auto shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700 flex-1 dark:text-white">
              <Image className='mx-auto' src={code} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-teal-400'>Coding Language</h3>
              <p className='py-2'>
                The languages that I am knowlegable in is as follows.
              </p>
              <h3 className='text-teal-600 dark:text-teal-400 py-4'>Languages I Use Are:</h3>
              <p className='text-gray-800 py-1 dark:text-white'>HTML</p>
              <p className='text-gray-800 py-1 dark:text-white'>C++</p>
              <p className='text-gray-800 py-1 dark:text-white'>Java</p>
              <p className='text-gray-800 py-1 dark:text-white'>Python</p>
            </div>
            <div className="text-center mx-auto shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700 flex-1 dark:text-white">
              <Image className='mx-auto' src={databases} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-teal-400'>Databases </h3>
              <p className='py-2'>
                The Databases that I am knowlegable in is as follows.
              </p>
              <h3 className='text-teal-600 dark:text-teal-400 py-4'>Databases I Use Are:</h3>
              <p className='text-gray-800 py-1 dark:text-white'>MySQL</p>
            </div>
          </div>
        </section>


        
      </main>
    </div>
  );
}
