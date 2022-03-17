import React, {useState,useContext} from 'react';
import { MenuIcon, XIcon, LogoutIcon } from '@heroicons/react/outline';
import {AllQuays} from '../../components'
import { AuthContext } from "../../store/AuthContext";
import {useNavigate } from "react-router-dom";

export function Dashboard() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const navigate = useNavigate();
    const { auth, setAuth } = useContext(AuthContext);
    const LogOut = () => {
      localStorage.removeItem('token')
      setAuth({ loggedIn: false });
      navigate("/", {
        replace: true,
      });
    }
    return (
      <div className='w-screen  h-[80px] z-10 bg-zinc-200 drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
          <div className='flex items-center'>
            <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>Tanger Med.</h1>
          </div>
          <div className='hidden md:flex pr-4'>
          <button className='px-4 py-3 flex' onClick = {LogOut}><LogoutIcon className='w-5 mr-2'/>Logout</button>
        </div>
          <div className='md:hidden mr-4' onClick={handleClick}>
              {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
          </div>
        </div>
        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <div className='flex flex-col my-4'>
          {!auth.loggedIn ? (<><button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
              <button className='px-8 py-3'>Sign Up</button></>) : (<button className='px-4 py-3 flex' onClick = {LogOut}><LogoutIcon className='w-5 mr-2'/>Logout</button>) }
          </div>
        </ul>
        {/* <AddQuay/> */}
        <AllQuays/>
      </div>
    );
}




