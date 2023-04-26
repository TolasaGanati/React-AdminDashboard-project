import React from 'react'
import { useState } from 'react'
import './New.css'
import NavBar from '../../components/navbar/NavBar'
import SideBar from '../../components/sidebar/SideBar'

import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined'
const New = ({inputs,title})=> {

const [file, setFile] = useState("");

  return (
    <div className='new'>
      <SideBar/>
      <div className='newContainer'>
        <NavBar/>
        <div className='top_'>
          <h1>{title}</h1>
        </div>
        <div className='bottom_'>
        <div className='left_'>
          <img className='img_' src={file ? URL.createObjectURL(file): "https://plus.unsplash.com/premium_photo-1677337528356-ef42a9860a3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"} alt="" />
        </div>
        <div className='right_'>
          <form>
          <div className='formInput'>
              <label htmlFor='file'>Image:<DriveFolderUploadOutlinedIcon className='icon_'/></label>
              <input type="file" id='file' onChange={e=>setFile(e.target.files[0])} style={{display:'none'}}/>
            </div>

            {inputs.map(input=>(

              
              <div className='formInput' key={input.id}>
              <label>{input.label}</label>
              <input type = {input.type} placeholder={input.placeholder} />
            </div>
              ))}
          
            <button>Send</button>
          </form>
        </div>

        </div>
      </div>
    </div>
  )
}

export default New