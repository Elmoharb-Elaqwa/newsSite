import React from 'react'
import './MartyrsUser.css'
import img1 from '../../assests/IMG_20240404_160628_144.jpg'
import img2 from '../../assests/IMG_20240404_160623_080.jpg'
import img3 from '../../assests/img3.jpg'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",}}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",}}
        onClick={onClick}
      />
    );
  }

export default function MartyrsUser() {

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows:true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
      };

  return (
    <>
    <section className="martyrs">
    <div className="container py-2">
        <div className="header position-relative py-5">
            <h3 className=' text-danger'>الشهداء</h3>
        </div>
        <div className="row gy-3 mb-4" >
            <div className="col-md-3">
                <div className="image mb-2">
                    <img src={img1} alt="image" className=' w-100 rounded-3' />
                </div>
                <p>الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبرالخبر الخبر الخبر....
                    <Link className='nav-link d-inline-block mx-1 px-3 rounded-3'>المزيد</Link>
                </p>
            </div>
            <div className="col-md-3">
                <div className="image mb-2">
                    <img src={img1} alt="image" className=' w-100 rounded-3' />
                </div>
                <p>الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبرالخبر الخبر الخبر....
                    <Link className='nav-link d-inline-block mx-1 px-3 rounded-3'>المزيد</Link>
                </p>
            </div>
            <div className="col-md-3">
                <div className="image mb-2">
                    <img src={img1} alt="image" className=' w-100 rounded-3' />
                </div>
                <p>الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبرالخبر الخبر الخبر....
                    <Link className='nav-link d-inline-block mx-1 px-3 rounded-3'>المزيد</Link>
                </p>
            </div>
            <div className="col-md-3">
                <div className="image mb-2">
                    <img src={img1} alt="image" className=' w-100 rounded-3' />
                </div>
                <p>الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبرالخبر الخبر الخبر....
                    <Link className='nav-link d-inline-block mx-1 px-3 rounded-3'>المزيد</Link>
                </p>
            </div>

            <div className="col-md-3">
                <div className="image mb-2">
                    <img src={img2} alt="image" className=' w-100 rounded-3' />
                </div>
                <p>الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبرالخبر الخبر الخبر....
                    <Link className='nav-link d-inline-block mx-1 px-3 rounded-3'>المزيد</Link>
                </p>
            </div>
            <div className="col-md-3">
                <div className="image mb-2">
                    <img src={img2} alt="image" className=' w-100 rounded-3' />
                </div>
                <p>الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبرالخبر الخبر الخبر....
                    <Link className='nav-link d-inline-block mx-1 px-3 rounded-3'>المزيد</Link>
                </p>
            </div>
            <div className="col-md-3">
                <div className="image mb-2">
                    <img src={img2} alt="image" className=' w-100 rounded-3' />
                </div>
                <p>الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبرالخبر الخبر الخبر....
                    <Link className='nav-link d-inline-block mx-1 px-3 rounded-3'>المزيد</Link>
                </p>
            </div>
            <div className="col-md-3">
                <div className="image mb-2">
                    <img src={img2} alt="image" className=' w-100 rounded-3' />
                </div>
                <p>الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبرالخبر الخبر الخبر....
                    <Link className='nav-link d-inline-block mx-1 px-3 rounded-3'>المزيد</Link>
                </p>
            </div>
        </div>
        <div className="slider-container px-4 position-relative">
        <Slider {...settings}>
            <div className="slide mx-2">
            <div className="image mb-2 mx-2 ">
                    <img src={img3} alt="image" className=' w-100 rounded-circle' />
                </div>
                <p  className='px-2'>الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبرالخبر الخبر الخبر
                    <Link className='nav-link d-inline-block mx-1 px-3 rounded-3'>المزيد</Link>
                </p>
            </div>
            <div className="slide mx-2">
            <div className="image mb-2 mx-2">
                    <img src={img3} alt="image" className=' w-100 rounded-circle' />
                </div>
                <p  className='px-2'>الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبرالخبر الخبر الخبر....
                    <Link className='nav-link d-inline-block mx-1 px-3 rounded-3'>المزيد</Link>
                </p>
            </div>
            <div className="slide mx-2">
            <div className="image mb-2 mx-2">
                    <img src={img3} alt="image" className=' w-100 rounded-circle' />
                </div>
                <p className='px-2'>الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبرالخبر الخبر الخبر....
                    <Link className='nav-link d-inline-block mx-1 px-3 rounded-3'>المزيد</Link>
                </p>
            </div>
        </Slider>


        </div>
        
        

    </div>
    </section>
    
    </>
  ) 
}
