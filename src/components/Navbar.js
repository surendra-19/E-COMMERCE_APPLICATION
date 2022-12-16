import React from 'react'
import '../components/Navbar.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Badge } from '@mui/material';  
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='NavbarContainer'>
      <div className='Wrapper'>
        <div className='left'>
          <Link to='/'><h1>SURENDRA</h1></Link>
        </div>
        <div className='center'>
          <div className='searchContainer'>
            <input />
            <SearchOutlinedIcon style={{color:'gray',fontSize:20}}/>
          </div>
        </div>
        <div className='right'>
          <span className='Language'>ENG</span>
          <div className='MenuItem'>
            <Link to='/register' >Register</Link>
          </div>
          <div className='MenuItem'>
            <Link to='./login' >Login</Link>
          </div>
          <div className='MenuItem'>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon/>
            </Badge>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Navbar