import React from 'react'
import '../components/Categories.css'
import { CategoryItems } from '../Data'
const Categories = () => {
  return (
    <div className='CategoriesContainer'>
        <div className='CategoriesWrapper'>
            {
                CategoryItems.map((item)=>(
                    <div key={item.id}  className="CategoryType">
                        <img src={item.image} alt={item.title} />
                        <div className='CategoriesInfoContainer'>
                            <h1>{item.title}</h1>
                            <button>SHOP NOW</button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Categories