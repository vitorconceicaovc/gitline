import { Footer } from "../../components/Footer/Footer";
import './About.css'
import logo from '../../Assets/git_logo.png'

// import Swiper core and required modules
import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const data = [ 
    {
        step: 'A',
        image: logo,
        text: 'do this',
    },
    {
        step: 'B',
        image: logo,
        text: 'do this',
    },
    {
        step: 'C',
        image: logo,
        text: 'do this',
    }
]

export const About = () => {
    return (
        <section className="about" >
            
            <div className="info">
                <h1 className='title'>About GitLine</h1>
                <p className='resume' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto magni, 
                    
                </p>
            </div>
            <div className="image">
                
                <Swiper className="cards_container" 
                //Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
                >
                    {
                        data.map(({step, image, text}, index) => {
                            return (
                                <SwiperSlide key={index} className='cards'>
                                    <h1 className="card_step" >{step}</h1>
                                    <div className="card_image">
                                        <img src={image} alt="" />
                                    </div>
                                    <p className="card_text" >{text}</p>
                                    
                                </SwiperSlide>
                            )
                        }) 
                        
                    }

                </Swiper>

            </div>
        </section>
    );
}