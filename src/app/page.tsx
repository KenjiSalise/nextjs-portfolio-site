'use client';
import Image from "next/image";
import Navbar from "../components/Navbar";
import Anya from "../../public/kenji.png";
import Link from 'next/link'
import Facebook from '../../public/Facebook_logo_(square).png'
import Github from "../../public/github-mark-white.png"
import Discord from "../../public/Discord.svg"
import Sui from "../../public/07pmskirfnr71.jpg"
import Iframe from 'react-iframe'


export default function Home() {

  const handleCopy1stEmail = async () => {
    try {
    // Copy text to clipboard
      await navigator.clipboard.writeText("kenjimsalise@gmail.com"); 
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };
  return (
    <main>
      <title>Home</title>
      <link rel="icon" type="image/x-icon" href="../favicon.ico" />

      <div className="content-center">
      <Navbar />
      </div>
      <div className="h-[3rem]"></div>
      <div className="flex justify-center items center">
        <div className="box-border md:w-[30rem] md:h-fit lg:w-[50rem] lg:h-fit ring-[4px] py-10 rounded-lg px-5 bg-[#453A4C] ring-[#362c3d] shadow-[#362c3d] shadow-2xl inset-shadow-[#453A4C] " >
          <div className="flex lg:w-[50rem] gap-12 pb-5 md:gap-12">
            <div className="relative md:size-40 size-20">
            <Image src={Anya} sizes="100vw"
            style={{borderRadius: '100%',
            objectFit: 'cover'}} fill priority alt="Kenji"/>
            </div>
            <div className=" flex content-center my-10 inset-0 text-[#4D3E3E] transition-all ease-in-out duration-150 hover:text-[#FEEAE1] hover:bg-[#4D3E3E] bg-[#FEEAE1] md:size-50 w-2/3 h-20 ring-[#D8D7DE] ring-4 rounded-lg ">
              <h1 className="lg:text-[39px]  text-[20px] py-4 px-10">Hello! Nice to meet you!</h1>
            </div>
          </div>
            <p className="text-[#FEEAE1] inline">I am Kenji Sebastian M. Salise, a student at the Ateneo de Davao University currently undertaking the undergraduate course: Bachelor of Science in Information Technology. You can contact me via email at </p>
            <button onClick={handleCopy1stEmail}><p className="underline hover:text-[#729FD7] transition duration-150 inline">kenjimsalise@gmail.com</p></button>
           .
           <div className='my-10 py-5 h-fit ring-[#D8D7DE] ring-4 px-5 rounded-lg bg-[#FEEAE1] text-[#4D3E3E]'>
            <Image src={Sui} className="float-right size-[200px] ring-4 ring-[#D8D7DE] rounded-sm" alt='hololive'/>
            <h1 className="text-[40px] font-bold" >Hobbies (趣味)</h1>
            <p className='text-[20px] '>- Listening to Hoshimachi Suisei (星街すいせい) 
            <br/>- Learning Japanese 
            <br/>- Reading Manga/Manwha
            <br/>- Watching Japanese Dramas and Anime
            <br/>- Writing/Reading Japanese
            <br/>- Code in C++/Python/Java in my spare time
            </p>
            <div className='content-center items-center text-[3rem] font-bold'>
              <p>Spotify Recommendations</p>
              
            <Iframe className='rounded-xl' url="https://open.spotify.com/embed/playlist/4QRVJZbxwP8OixuGyUMpmW?utm_source=generator" width="50%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"/>
            
            </div>
            
            </div>




            <div className="w-full flex  items-center justify-center gap-11 pt-10">
              <button> 
                <Link href='https://github.com/KenjiSalise'>
              <div className="bg-[#729FD7] hover:bg-[#4D3E3E] transition-all ease-in-out duration-150 py-2 px-10 rounded-lg flex gap-1">
              <div className='size-6'>
                <Image src={Github} alt='Github'/>
                </div>
                Gitub
              </div>
              </Link>
              </button>
              <button>
              <Link href='https://www.facebook.com/kenjisebastian.salise/'>
              <div className="bg-[#729FD7] hover:bg-[#4D3E3E] transition-all ease-in-out duration-150 py-2 px-10 rounded-lg flex gap-1">
              <div className='size-6'>
                <Image src={Facebook} alt='Meta'/>
                </div>
                Facebook
              </div>
              </Link>
              </button>
              <button>
              <Link href='https://discord.gg/qN3HpxBDWM'>
              <div className="bg-[#729FD7] hover:bg-[#4D3E3E] transition-all ease-in-out duration-150 py-2 px-10 rounded-lg flex gap-1">
              <div className='size-6 flex'>
                <Image src={Discord} alt='Clyde'/>
                </div>
                Discord Server
              </div>
              </Link>
              </button>
            </div>
        </div>
      </div>
    </main>
  );
}
