import React from 'react'
import {ProductItems} from '../Data'
import '../components/Products.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareIcon from '@mui/icons-material/Share';
const Products = () => {
  return (
    <div className='ProductContainer'>
     {
        ProductItems.map((item)=>(
          <div key={item.id} className='ProductWrapper'>
            <div className='ProductImageContainer'>
              <div className='span'></div>
              {/* <img className={item.title} src={item.image} alt={item.title} /> */}
            </div>
            <div className='ProductIcons'>
              <ShoppingCartOutlinedIcon className='cartIcon'/>
              <FavoriteBorderOutlinedIcon className='heartIcon' />
              <ShareIcon className='shareIcon'/>
            </div>
          </div>
        ))
     }
    </div>
  )
}

export default Products