import React from 'react'
import Data from '../../public/test.json'
import Link from 'next/link'


interface Item {
  name: string
  link: string
  image: string
  alt: string
  desc: string

}
interface DataType {
  data: Item[];
}

const ProjectTable = () => {
  const { data } = Data as DataType;

  return (
    <main>
      <div className="grid grid-cols-2 gap-8 justify-center mx-10 my-5">
        {data.map((item: Item, index) => (
          <Link href={item.link} key={index} className='
            rounded-md hover:rounded-3xl
            p-4
            bg-[#453A4C] hover:bg-[#3a2f2f]
            ring ring-[#362c3d]
            transition-all duration-150 ease-in-out
            shadow-2xl inset-shadow-[#453A4C] shadow-[#362c3d] hover:shadow-[#3a2f2f]
          '>
            <h1 className='text-[3rem]'>{item.name}</h1>
            <p className='text-[1rem]'>{item.desc}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}

export default ProjectTable