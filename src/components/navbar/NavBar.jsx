import React from 'react'
import './NavBar.css'
import ph from './myphoto.jpg'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
const NavBar = ()=> {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type="text" placeholder='search...' />
          <SearchOutlinedIcon/>
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageOutlinedIcon/>
            English
          </div>
          <div className='item'>
            < DarkModeOutlinedIcon/>
          </div>
          <div className='item'>
          <FullscreenExitOutlinedIcon/>
          </div>
          <div className='item'>
            <NotificationsNoneOutlinedIcon/>
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <ChatBubbleOutlineOutlinedIcon/>
            <div className='counter'>2</div>
          </div>
          <div className='item'>
            <ChecklistOutlinedIcon/>
          </div>
          <div className='avatar'>
            <img src={ph}
            alt='pho'
            className='avatar'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar