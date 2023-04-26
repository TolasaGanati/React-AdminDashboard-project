import React from 'react'
import './Widget.css'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
const Widget = ({type})=> {
  let data;
  // temporary
  const amount= 100;
  const diff = 20;
switch(type){
  case 'user':
    data = {
      title:'USERS',
      isMoney:false,
      link:'see all users',
      icon:<PersonOutlineOutlinedIcon className='icon' style={{
        color:'crimson',
        backgroundColor:"rgba(255,0,0,0.2)",
        borderRadius:"25%",

      }}/>
    }
    break;
    case 'order':
    data = {
      title:'ORDERS',
      isMoney:false,
      link:'VIEW all orders',
      icon:<AddShoppingCartOutlinedIcon className='icon'
      style={{
        color:'goldenrod',
        backgroundColor:"rgba(218,165,32,0.2)",

      }}
      />
    }
    break;
    case 'earning':
    data = {
      title:'EARNINGS',
      isMoney:true,
      link:'view net earnings',
      icon:<MonetizationOnOutlinedIcon className='icon'
      style={{
        color:'green',
        backgroundColor:"rgba(0,128,0,0.2)",
        

      }}
      />
    }
    break;
    case 'balance':
    data = {
      title:'BALANCE',
      isMoney:true,
      link:'view details',
      icon:<AccountBalanceWalletOutlinedIcon className='icon'
      style={{
        color:'purple',
        backgroundColor:"rgba(128,0,128 ,0.2)",
        

      }}
      />
    }
    break;
    default:
      break;
  
}



  return (
    <div className='widget'>
        <div className='left'>
            <span className='titles'>{data.title}</span>
            <span className='Counter'>{data.isMoney && '$'}{amount}</span>
            <span className='link'>{data.link}</span>

        </div>
        <div className='right'>
            <div className='percentage positive'>
              <KeyboardArrowUpOutlinedIcon/>
              {diff}%</div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget