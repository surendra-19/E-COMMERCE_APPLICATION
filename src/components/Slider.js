import React, { useState }  from 'react'
import '../components/Slider.css'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SliderItems } from '../Data';



const Slider = ({slides}) => {
    const [slide,setSlide] = useState(0)
    const length = slides.length

    const previousSlide = ()=>{
        setSlide(slide===0 ? length-1:slide-1)
    }
    const nextSlide = ()=>{
        setSlide(slide === length-1 ? 0 : slide+1 )
    }
  return (
    <div className='SliderContainer'>
        <div className='arrowLeft' >
            <ArrowLeftIcon onClick={previousSlide} />
        </div>
        <div className='SliderWrapper'>
            {
                SliderItems.map((item,index)=>(
                    <div key={index} className={index===slide?'slideActive':'slides'}>
                        {
                            index===slide && 
                                <div className={item.class}>
                                    <div className='SliderImageContainer'>
                                        <img src={item.image} alt={item.text} />
                                    </div>
                                    <div className='SliderInfoContainer'>
                                        <h1>{item.title}</h1>   
                                        <p>{item.description}</p>
                                        <button>SHOP NOW</button>
                                    </div>
                                </div>
                        }
                    </div>
            ))}
        </div>
        <div className='arrowRight'>
            <ArrowRightIcon onClick={nextSlide} />
        </div>
    </div>

  )
}



export default Slider