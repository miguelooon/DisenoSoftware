import React from 'react'
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {ProductsSwipe} from '../../Data/ProductsSwipe'
import "./Sli.scss"

function Sli () {
    return (
        <div className="appcambio">
        
    
          <div className="container">
            
            <div className="swiperContainer">
              
              <Swiper
                modules={[Pagination, Autoplay]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false
                }}
                pagination={{
                  el: ".pagination",
                  clickable: true,
                }}
                slidesPerView={4}
                breakpoints={{
                  "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 25,
                  },
                  "@0.50": {
                    slidesPerView: 1.25,
                    spaceBetween: 25,
                  },
                  "@1.00": {
                    slidesPerView: 2,
                    spaceBetween: 25,
                  },
                  "@1.25": {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                  },
                  "@1.50": {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  "@1.75": {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },

                }}
              >
                {ProductsSwipe.map((product) => (
                  <SwiperSlide key={product.id}>
                    

                    <div className="card">
                      
                        <img src={product.img} alt={product.name} />
                    </div>

                    
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="pagination" />
          </div>
        </div>
      );
    }
    

export default Sli