import React from 'react'
import '../components/Navbar.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import { Badge } from '@mui/material';  
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='NavbarContainer'>
      <div className='Wrapper'>
        <div className='left'>
          <Link to='/'><h1 title='Logo'>SURENDRA</h1></Link>
        </div>
        <div className='center'>
          <div className='searchContainer'>
            <input />
            <SearchOutlinedIcon style={{color:'gray',fontSize:20,flex:"2"}}/>
          </div>
        </div>
        <div className='right'>
          <span className='Language'>ENG</span>
          <div className='MenuItem'>
            <Link to='/register' title='register' >Register</Link>
          </div>
          <div className='MenuItem'>
            <Link to='/login' title='login' >Login</Link>
          </div>
          <div className='Watchlist' >
            <Link to='/watchlist' title='watchlist' >Watchlist<BookmarkAddOutlinedIcon className='WatchlistIcon'/></Link>
          </div>
          <div className='MenuItem' title='cart items'>
            <Badge badgeContent={0} color="primary" >
              <ShoppingCartOutlinedIcon className='Shopping' />
            </Badge>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Navbar