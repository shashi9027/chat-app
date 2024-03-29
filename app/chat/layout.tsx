"use client"
import Avatar from '@/components/cards/Avatar';
import Image from 'next/image';
import React, { ReactNode, useState } from 'react';
import { ChatCircleDots } from '@phosphor-icons/react/dist/ssr/ChatCircleDots';
import { Users } from '@phosphor-icons/react/dist/ssr/Users';
import { User } from '@phosphor-icons/react/dist/ssr/User';
import { Phone } from '@phosphor-icons/react/dist/ssr/Phone';
import { Gear } from '@phosphor-icons/react/dist/ssr/Gear';
import { SignOut } from '@phosphor-icons/react/dist/ssr/SignOut';
import { Menu, MenuItem, Stack } from '@mui/material';
import UserAvatar from '@/components/cards/Avatar';
interface LayoutProps {
  children: ReactNode;
}

const Profile_Menu = [
  {
    title: "Profile",
    icon: <User size={20} />
  },
  {
    title: "Settings",
    icon: <Gear size={20}  />
  },
  {
    title: "Logout",
    icon: <SignOut size={20}  />
  }
]



export default function Layout({ children }: LayoutProps) {
  const [selected, setSelected] = useState(1);
  const tabs = [
    {
      id: 1,
      img: <ChatCircleDots color={selected == 1 ? "white" : ""} size={25} />
    },
    {
      id: 2,
      img: <Users color={selected == 2 ? "white" : ""} size={25} />
    },
    {
      id: 3,
      img: <Phone color={selected == 3 ? "white" : ""} size={25} />
    },
    {
      id: 4,
      img: <div className='hr' />
    },
    {
      id: 5,
      img: <Gear color={selected == 5 ? "white" : ""} size={25} />
    },
  ]

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='flex'>
      <div className='sidebar flex flex-col justify-between'>
        <div className='flex flex-col items-center gap-8'>
          <Image className='budgie mt-8 p-1 ' width={32} height={32} src="/sidebar/Budgie.png" alt="chat-circle" />
          {
            tabs?.map((val, index) => {
              return (
                val?.id !== 4 ? <button className={`${selected == val?.id ? "selected" : ""} tabs-width`} key={`${index}tabs`} onClick={() => setSelected(val.id)}>
                  {val?.img}
                </button> : <div>{val?.img}</div>

              )
            })
          }
        </div>
        <div>
          <button id="basic-button" aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={(e) => handleClick(e)}>
            <UserAvatar width={40} height={40} />
          </button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={() => handleClose()}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            anchorOrigin={{
              vertical: "bottom", horizontal: "right"
            }}
            transformOrigin={{ vertical: "bottom", horizontal: "left" }}
          >
            <Stack spacing={1} px={1}>
              {Profile_Menu?.map((val: any, index: number) => {
                return (
                  <MenuItem key={index} onClick={(e) => handleClick(e)} ><Stack sx={{ width: 100 }} alignItems="center" justifyContent={"space-between"} direction="row" ><span>{val.title}</span>{val.icon}</Stack></MenuItem>
                )
              })}
            </Stack>
          </Menu>
        </div>
      </div>
      {children}
    </div>
  )
}