import Head from 'next/head';
import Link from 'next/link';
import { BsFillMoonStarsFill } from 'react-icons/bs';
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
import deved from "../public/photo.jpg";
import design from "../public/design.png";
import code from "../public/code.png";
import databases from "../public/databases.png";
import { useState } from 'react';
import Typewriter from 'typewriter-effect';

export default function Home() 
{
  const[darkMode,setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark":""}>
      <Head>
        <title>Rahul Portfolio</title>     
      </Head>

      <main className='" bg-white px-10 m:px-20 lg:px-40 dark:bg-gray-900'>
        <section className="min-h-screen" >
          <nav className='py-5 mb-6 flex justify-between'>
            <h1 className='text-xl font-VT323 lg:text-3xl text-black dark:text-white'>Developed By Rahul</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='text-black cursor-pointer text-l  lg:text-xl dark:text-white'/>
              </li>
              <li>
                <a href="#" className=' bg-gradient-to-r from-cyan-400 dark:from-cyan-800 to-teal-800 dark:to-teal-400 text-white px-2 py-1 rounded-md ml-8 lg:px-4 lg:py-2'>Resume</a>
              </li>
            </ul>
          </nav>
          <div className=' text-center p-10 '>
            <h2 className='font-burtons text-5xl py-2 text-teal-800 dark:text-teal-400 font-medium md:text-6xl '>
              Rahul A B
            </h2>
            <div className=" font-VT323 text-3xl py-2 md:text-3xl text-black dark:text-white">
              <Typewriter 
                onInit={(typewriter) =>{
                  typewriter.typeString("I'm a ")
                  .typeString( "Programmer")
                  .pauseFor(2000)
                  .deleteChars(10)
                  .typeString("Developer")
                  .pauseFor(2000)
                  .deleteChars(9)
                  .typeString("Designer")
                  .pauseFor(2000)
                  .deleteChars(8)
                  .start()
                }}
              options={{
                autoStart: true,
                loop: true,
              }}
              />
            </div>
            <p className='font-Dancing text-3xl py-3 leading-8 text-gray-800 md:text-4xl max-w-lg mx-auto dark:text-white' >
            Freelancer providing services for programming and design content
            needs. Join me down below and let's get cracking!
            </p>
          </div>
          <div>
            <p className='text-3xl flex justify-center font-burtons gap-8 text-teal-800 dark:text-teal-400 py-3'>Connect with me</p>
            <div className='text-3xl flex justify-center gap-4 text-gray-600 py-2 lg:gap-8 lg:text-4xl'>   
              <Link href='https://www.facebook.com/rahul.bushi/'>
                <AiFillFacebook />
              </Link>
              <Link href='https://www.instagram.com/kl.rab_3490/'>
                <AiFillInstagram />
              </Link>
              <Link href='https://twitter.com/klrab_3490_'>
                <AiFillTwitterCircle />
              </Link>
              <Link href='https://github.com/klrab3490'>
                <AiFillGithub />
              </Link>
              <Link href='https://t.me/klrab_3490'>
                <FaTelegramPlane />
              </Link>
              <Link href='https://wa.me/7994542331?text=Hi'>
                <AiOutlineWhatsApp />
              </Link>
              <Link href='https://www.linkedin.com/in/rahul-a-b-0044b1232/'>
                <AiFillLinkedin />
              </Link>
              <Link href='https://discordapp.com/users/kl.rab_3490#8475'>
                <FaDiscord/>
              </Link>
            </div>
          </div>
          <div className='relative mx-auto rounded-full w-60 h-60 mt-5 overflow-hidden lg:h-100 lg:w-100'>
            <Image src={deved} /> 
          </div>
        </section>

        <section className='mt-2'>
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
              <h3 className='text-lg font-medium pt-8 pb-2 text-teal-800 dark:text-teal-400'>Beautiful Designs</h3>
              <p className='py-2 text-black dark:text-white'>
                Creative elegant designs suited for your needs following core design theory.
              </p>
              <h3 className='text-teal-600 dark:text-teal-400 py-4'>Design Tools I Use:</h3>
              <p className='text-gray-800 py-1 dark:text-white'>Photoshop</p>
              <p className='text-gray-800 py-1 dark:text-white'>Illustrator</p>
            </div>
            <div className="text-center mx-auto shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700 flex-1 dark:text-white">
              <Image className='mx-auto' src={code} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2 text-teal-800 dark:text-teal-400'>Coding Language</h3>
              <p className='py-2 text-black dark:text-white'>
                The languages that I am knowlegable in is as follows.
              </p>
              <h3 className='text-teal-600 dark:text-teal-400 py-4'>Languages I Use Are:</h3>
              <p className='text-gray-800 py-1 dark:text-white'>HTML</p>
              <p className='text-gray-800 py-1 dark:text-white'>C++</p>
              <p className='text-gray-800 py-1 dark:text-white'>Java</p>
              <p className='text-gray-800 py-1 dark:text-white'>Python</p>
            </div>
            <div className="text-center mx-auto shadow-lg p-10 rounded-xl my-10 text-teal-800 dark:bg-gray-700 flex-1 dark:text-white">
              <Image className='mx-auto' src={databases} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-teal-400'>Databases </h3>
              <p className='py-2 text-black dark:text-white'>
                The Databases that I am knowlegable in is as follows.
              </p>
              <h3 className='text-teal-600 dark:text-teal-400 py-4'>Databases I Use Are:</h3>
              <p className='text-gray-800 py-1 dark:text-white'>MySQL</p>
              <p className='text-gray-800 py-1 dark:text-white'>MongoDB</p>
            </div>
          </div>
        </section>
        <footer className="text-gray-600 body-font">
          <div className=' justify-end h-10'>
            <div className=' text-xl flex justify-end gap-4 text-gray-600  lg:gap-3'>   
              <Link href='https://www.facebook.com/rahul.bushi/'>
                <AiFillFacebook />
              </Link>
              <Link href='https://www.instagram.com/kl.rab_3490/'>
                <AiFillInstagram />
              </Link>
              <Link href='https://twitter.com/klrab_3490_'>
                <AiFillTwitterCircle />
              </Link>
              <Link href='https://github.com/klrab3490'>
                <AiFillGithub />
              </Link>
              <Link href='https://t.me/klrab_3490'>
                <FaTelegramPlane />
              </Link>
              <Link href='https://wa.me/7994542331?text=Hi'>
                <AiOutlineWhatsApp />
              </Link>
              <Link href='https://www.linkedin.com/in/rahul-a-b-0044b1232/'>
                <AiFillLinkedin />
              </Link>
              <Link href='https://discordapp.com/users/kl.rab_3490#8475'>
                <FaDiscord/>
              </Link>
              <div>
                <br />
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
