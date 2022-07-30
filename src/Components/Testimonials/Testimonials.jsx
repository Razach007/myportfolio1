import React from 'react';
import "./Testimonials.css";
import {Swiper, SwiperSlide} from 'swiper/react';
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import {Pagination} from "swiper";
import "swiper/css/pagination";
import "swiper/css";


const Testimonials = () => {
    const clients = [
      {  
        img : profilePic1,
        review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam quam nostrum cumque autem quae omnis, suscipit exercitationem at error aliquid voluptates blanditiis sequi est repellat culpa. Qui, numquam nostrum!" 
        
        },
        {  
            img : profilePic2,
            review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam quam nostrum cumque autem quae omnis, suscipit exercitationem at error aliquid voluptates blanditiis sequi est repellat culpa. Qui, numquam nostrum!" 
            
            },
            {  
            img : profilePic3,
            review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Provident aliquam quam nostrum cumque autem quae omnis, suscipit exercitationem at error aliquid voluptates blanditiis sequi est repellat culpa. Qui, numquam nostrum!" 
                
            },
            {  
            img : profilePic4,               
             review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam quam nostrum cumque autem quae omnis, suscipit exercitationem at error aliquid voluptates blanditiis sequi est repellat culpa. Qui, numquam nostrum!" 
                    
            },

    ]


  return (
    <div className='t-wrapper' id='Testimonials'>
        <div className="t-heading">
            <span>Clients Always Get</span>
            <span>Exceptional Work</span>
            <span>For me....</span>

            <div className='blur t-blur' style={{background: "var (--purple)"}}></div>
            <div className='blur t-blur2' style={{background: "var (--skyblue)"}}></div>


        </div>
{/* Slider */}
        <Swiper
        modules={{Pagination}}
        slidesPerView={1}

        >

            {clients.map((client, index) =>{
            return(
                <SwiperSlide key={index}>
                <div className='testimonial'>
                    <img src={client.img} alt=""/>
                    <span>{client.review}</span>
                </div>
                </SwiperSlide>
            )
            })}
            

        </Swiper>


    </div>
  );
}

export default Testimonials