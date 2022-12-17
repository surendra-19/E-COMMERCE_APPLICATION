import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='NewsLetterContainer'>
        <h1 className='NewsTitle'>News Letter</h1>
        <p className='NewsDescription'>Get timely updates from your favourite products</p>
        <div className='NewsInfo'>
            <input placeholder='Your mail address' />
            <button><SendIcon/></button>
        </div>
    </div>
  )
}

export default NewsLetter