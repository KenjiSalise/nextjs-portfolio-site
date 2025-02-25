import React from 'react'
import Data from '../../public/test.json'
import Link from 'next/link'


interface Item{
    name:string
    link:string
    image:string
    alt:string
    desc:string

}
interface DataType {
    data: Item[];
  }
  
const ProjectTable = () => {
    const { data } = Data as DataType;
  
  return (
    <main>
        <div className='grid grid-cols-2 gap-10 justify-center flex mx-10 my-5'>
        {data.map((item:Item, index)=>(
          <Link key={index} href={item.link}>
           <div className='box-border h-[10rem] transition-all duration-150 ease-in-out hover:shadow-[#3a2f2f] hover:bg-[#3a2f2f] width-10 rounded-lg px-5 bg-[#453A4C] ring-[#362c3d] shadow-[#362c3d] shadow-2xl inset-shadow-[#453A4C]'>
            <h1 className='text-[3rem]'>{item.name}</h1>
            <p className='text-[1rem]'>{item.desc}</p>
           </div>
           </Link>
        ))}
        </div>
    </main>
  )
}

export default ProjectTable