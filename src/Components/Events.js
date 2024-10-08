import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import EventVideoOne from "../asset/event/videoone.mp4"
import EventOne from "../asset/event/eventmainone.webp"
import EventTwo from "../asset/event/eventmaintwo.webp"
import EventThree from "../asset/event/eventmainthree.webp"
import EventFour from "../asset/event/event4.webp"
import EventFive from "../asset/event/event5.webp"
import EventSix from "../asset/event/event6.webp"
import EventSeven from "../asset/event/event7.webp"
import EventEight from "../asset/event/event8.webp"
import EventNine from "../asset/event/event9.webp"
import EventTen from "../asset/event/event10.webp"
import EventEleven from "../asset/event/event11.webp"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
import PlaceholderImage from "../asset/placeholder.png"
import Lightbox from 'yet-another-react-lightbox';
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { FaRegImages } from "react-icons/fa6";
import { eventData } from './GalleryData';
const Event = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className='lg:mx-16 mx-4 pt-12 pb-12  '>
         <div>
        <div className='flex items-center justify-between' >
        <h3 className='font-[NeueBold] text-[1.4rem] lg:text-[2.8rem]' >Events</h3>
        
        </div>
        <div className='grid   lg:grid-cols-7 mt-2 lg:mt-6  gap-2 lg:gap-[12px] grid-cols-1 ' >
      
      <div className='col-span-4 relative  ' >
        
      <picture className=''>
          <source srcSet={EventOne} type="image/webp" />
         {/* Fallback for browsers that do not support WebP */}
          <source srcSet={EventOne} type="image/jpeg" /> 
          <LazyLoadImage src={EventOne}
width="100%" 
 className='rounded-lg mb-[5px]'
  PlaceholderSrc={PlaceholderImage}
  effect="blur"
/>

      </picture>
      
      <div className='absolute top-[5%] col-span-3  right-[3%] lg:top-[5%] lg:right-[3%]  z-[109]' >
      

      <Lightbox
        open={open}
        plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
        close={() => setOpen(false)}
        slides={eventData}
      />
       <button className='bg-white text-[0.6rem] lg:text-[0.9rem] flex items-center justify-center gap-3 font-[NeueMedium] rounded-lg px-3 lg:px-4 py-2 lg:py-3' type="button" onClick={() => setOpen(true)}>
      <FaRegImages className='lg:text-[1.4rem] text-[1rem] '  />  See all photos
      </button>
         </div>
      </div>
     
    
      <div className='col-span-3' >
      <picture className=''>
          <source srcSet={EventTwo} type="image/webp" />
         {/* Fallback for browsers that do not support WebP */}
          <source srcSet={EventTwo} type="image/jpeg" /> 
          <LazyLoadImage src={EventTwo}
width="100%" 
 className='rounded-lg mb-[5px]'
  PlaceholderSrc={PlaceholderImage}
  effect="blur"
/>

      </picture>
      <picture>
          <source srcSet={EventThree} type="image/webp" />
         {/* Fallback for browsers that do not support WebP */}
          <source srcSet={EventThree} type="image/jpeg" /> 
          <LazyLoadImage src={EventThree}
 width="100%" 
 className='rounded-lg '
  PlaceholderSrc={PlaceholderImage}
  effect="blur"
/>

      </picture>
      
      </div>
     
     
    </div>
        </div>
    </div>
  )
}

export default Event