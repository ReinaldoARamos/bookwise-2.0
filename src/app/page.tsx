'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Sidebar } from './components/sidebar/sidebar'


export default function Home() {
  
  return (
   <div className='flex'>
      <Sidebar />
      <div className='pt-20 ml-48'>fala tu</div>
   </div>
)}
