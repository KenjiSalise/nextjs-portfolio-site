import React from 'react'
import Link from 'next/link'

function Item({ link, text }: { link: string, text: string }) {

  return (
    <li>
        <Link href={link}>
      <button
      className='hover:bg-[#4D3E3E] transition duration-150 ease-in-out hover:text-white px-7 py-1 bg-[#D8D7DE] text-[#444155] rounded-lg'>
          {text}
      </button>
        </Link>
    </li>
  )
}

type ItemProps = Record<string, string>;
function Items({ items }: { items: ItemProps }) {
  const thing = Object
    .entries(items)                                 
    .map(
      ([link, text], index) => <Item key={index} link={link} text={text} />
    );
  return (
    <ul className="flex items-center justify-around ">
      
      {thing}
    </ul>
  );
}

function Navbar() {
  
  return (
    <main>
      <div className="bg-inherit h-10"></div>
        <div  className="w-full flex justify-center items-center">

        <div className='bg-[#729FD7] text-[#ffffff] text-inline h-10 content-center w-3/4 rounded-lg'>
        <Items items={{
          "/": "Home",
          "/projects": "Projects",
          "/collaborations": "Collaborations",
        }} />
      </div>
        </div>
       
    </main>
  );
}

export default Navbar