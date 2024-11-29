import React from 'react';

// Components
import ScrollBarCarousel from "./ScrollBarCarousel";

// Assetss
import Caption_Image from "../assets/images/Caption-image.png";
import Image1 from "../assets/images/Image-1.png";
import Image2 from "../assets/images/Image-2.png";
import Image3 from "../assets/images/Image-3.png";
import Image4 from "../assets/images/Image-4.png";

function Carousel(){

      const items = [
        {
            id:1,
            image:Image1,
            header:"Project Spotlight: Our Idea to Prototype Journey ",
            captionimage:Caption_Image,
        },
        {
            id:2,
            image:Image2,
            header:"How to Scale Your Project into a Startup?",
            captionimage:Caption_Image,
        },
        {
            id:3,
            image:Image3,
            header:"The Power of Collaboration in Tech",
            captionimage:Caption_Image,
        },
        {
            id:4,
            image:Image4,
            header:"The Power of Collaboration in Tech",
            captionimage:Caption_Image,
        }
        // Add more items as needed
      ];

    return(
        <div className='lg:pl-0'>
            <ScrollBarCarousel items={items} />
        </div>
    )
}

export default Carousel;