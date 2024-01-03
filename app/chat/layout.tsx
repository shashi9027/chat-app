import User from '@/components/avatar';
import Image from 'next/image';
import React, { ReactNode } from 'react';
import { TextField } from '@mui/material';
interface LayoutProps {
    children: ReactNode;
  }

export default function Layout({children}:LayoutProps){
    return(
        <div className='flex'>
            <div className='sidebar flex flex-col justify-between'>
            <div className='flex flex-col items-center'>
            <Image className='budgie mt-8 p-1 '  width={32} height={32}   src="/sidebar/Budgie.png" alt="chat-circle"/>
            <Image className='mt-8'  width={20} height={20}   src="/icons/ChatCircleText.png" alt="chat-circle"/>
            <Image className='mt-8'  width={20} height={30}   src="/icons/Users.png" alt="users"/>
            <Image className='mt-8' width={20} height={20}   src="/icons/Phone.png" alt="users"/>
            <div className='hr mt-8 '/>
            <Image className='mt-8'  width={20} height={20}   src="/icons/Gear.png" alt="users"/>
            </div>
            <div>
              <User width={40} height={40} />
            </div>
            <div>
           
            </div>
            </div>
            {children}
        </div>
    )
}