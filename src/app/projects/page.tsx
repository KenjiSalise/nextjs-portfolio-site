import React from 'react'
import Navbar from '@/components/Navbar'
import Table from '@/components/ProjectTable'
import { promises as fs} from 'fs'

export default async function About() {
  
  const test = await fs.readFile(process.cwd()+'/public/test.json','utf8');
  const data = JSON.parse(test)
 

  
  console.log(data)
  return (
    <main>
      <title>Projects</title>
    <Navbar/>
    <div className='flex justify-center items-center'>
      <h1 className='text-[3rem]'>Projects</h1>
    </div>
      <Table/>
    </main>
  )
}
