"use client"
import User from '@/components/cards/Avatar';
import Image from 'next/image';
import React, { ReactNode, useState } from 'react';
import { TextField } from '@mui/material';
import { ChatCircleDots } from '@phosphor-icons/react/dist/ssr/ChatCircleDots';
import { Users } from '@phosphor-icons/react/dist/ssr/Users';
import { Phone } from '@phosphor-icons/react/dist/ssr/Phone';
import { Gear } from '@phosphor-icons/react/dist/ssr/Gear';
interface LayoutProps {
  children: ReactNode;
}



export default function Layout({ children }: LayoutProps) {
  const [selected, setSelected] = useState(1);
  const tabs = [
    {
    id: 1,
    img:<ChatCircleDots color={selected == 1? "white" : ""} size={25} />
    },
    {
      id: 2,
      img:<Users color={selected == 2 ? "white" : ""}  size={25} />
    },
    {
      id: 3,
      img:<Phone color={selected == 3 ? "white" : ""}  size={25} />
    },
    {
      id:4,
      img:  <div className='hr' />
    },
    {
      id: 5,
      img:<Gear color={selected == 5 ? "white" : ""}  size={25} />
    },
]

  return (
    <div className='flex'>
      <div className='sidebar flex flex-col justify-between'>
        <div className='flex flex-col items-center gap-8'>
          <Image className='budgie mt-8 p-1 ' width={32} height={32} src="/sidebar/Budgie.png" alt="chat-circle" />
          {
            tabs?.map((val, index)=>{
              return(
                val?.id !== 4  ?  <button className={`${selected== val?.id ? "selected" : ""} tabs-width`} key={`${index}tabs`} onClick={() => setSelected(val.id)}>
                {val?.img}
              </button>  : <div>{val?.img}</div>
               
              )
            })
          }
          
         
         
        </div>
        <div>
          <User width={40} height={40} />
        </div>
      </div>
      {children}
    </div>
  )
}