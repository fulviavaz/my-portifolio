import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
      <nav className='bg-slate-950'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='flex items-center justify-between h-16'>
                  <div className='flex items-center'>
                      <div className='flex-shrink-0'>
                          <Link href='/' className='text-white'>Logo</Link>                        
                      </div>                      
                  </div>  
                  <div className='hidden sm:block'>
                      <div className='ml-4 flex items-center space-x-4'>
                          <Link href='/' className='text-white'>About</Link>
                          <Link href='/about' className='text-white'>Projects</Link>
                          <Link href='/contact' className='text-white'>Work Experience</Link> 
                          <Link href='/contact' className='text-white'>Contact</Link>
                      </div>
                  </div>
              </div>              
          </div>          
    </nav>
  )
}
