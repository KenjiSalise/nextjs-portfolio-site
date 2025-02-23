import React from 'react'
import Data from '../../public/test.json'
import Image from 'next/image'
import iframe from 'react-iframe'


interface Item{
    name:string
    link:string
    image:string
    alt:string
}
interface DataType {
    data: Item[];
  }
  
const ProjectTable = () => {
    const { data } = Data as DataType;
    var basePath = "/public"
  return (
    <main>
        <div className='grid grid-cols-2 gap-10 justify-center flex mx-10 my-10'>
        {data.map((item:Item,i:number)=>(
          
           <div className='box-border h-fit width-10 rounded-lg px-5 bg-[#453A4C] ring-[#362c3d] shadow-[#362c3d] shadow-2xl inset-shadow-[#453A4C]'>
            <h1>{item.name}</h1>
           </div>
           
        ))}
        </div>
    </main>
  )
}

export default ProjectTable