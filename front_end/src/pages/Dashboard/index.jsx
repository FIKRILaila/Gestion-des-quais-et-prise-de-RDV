import React, {useState} from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import {AllQuays} from '../../components'
export function Dashboard() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
      <div className='w-screen h-[80px] z-10 bg-zinc-200 drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
          <div className='flex items-center'>
            <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>Tanger Med.</h1>
          </div>
          <div className='md:hidden mr-4' onClick={handleClick}>
              {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
          </div>
        </div>

        <AllQuays/>

      </div>
    );
}




