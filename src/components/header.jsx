import React from 'react'
import { supabase } from '../supabase/client';
import { RiArrowDownSLine, RiNotification3Line } from 'react-icons/ri'
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import "@szhsin/react-menu/dist/theme-dark.css";
import '@szhsin/react-menu/dist/transitions/slide.css';
import { useAppStore } from '../zustand/AppStore';

const Header = () => {
  const currentUser = useAppStore((state)=>state.currentUser);
  const logout = () => {
    
    supabase.auth.signOut();

  }

  return (
    <header className='h-[7vh] md:h-[10vh] border-b border-secondary-100 p-8 flex items-center justify-end'>
      <nav className='flex items-center gap-2'>
        <Menu arrow theming='dark' 
        align='end'
        menuButton={
          <MenuButton className='relative hover:bg-soft bg-secondary-100 p-2 rounded-lg transition-colors'>
          <RiNotification3Line />
          <span className='absolute -top-0.5 right-0 box-content bg-primary py-0.5 px-[5px] text-[8px] text-invert rounded-full font-bold'>2</span>
        </MenuButton>
        }
        > 
          <MenuItem>Notificacion 1</MenuItem>
          <MenuItem>Notificacion 2</MenuItem>
        </Menu>
        
        <Menu arrow theming='dark'
          align='end'
          menuButton={
            <MenuButton className='flex items-center gap-x-2 hover:bg-secondary-100 py-2 px-4 rounded-lg transition-colors'>
              <img src="https://previews.123rf.com/images/kritchanut/kritchanut1405/kritchanut140500070/28162537-hombre-foto-de-perfil-silueta-avatar-en-c%C3%ADrculo-icono-de-vectores.jpg"
                className='w-6 h-6 object-cover rounded-full' />
              <span >
                {currentUser?.email}
              </span>
              <RiArrowDownSLine />
            </MenuButton>
          } transition>
          <MenuItem>Perfil</MenuItem>
          <MenuItem onClick={logout}>Salir</MenuItem>
        </Menu>
      </nav>
    </header>
  )
}

export default Header