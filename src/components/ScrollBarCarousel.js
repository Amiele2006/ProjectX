import React from "react";

const ScrollBarCarousel = ({items}) => {
    return(
        <div className="relative w-full max-w-4xl mx-auto">
            <div className="overflow-x-scroll flex scrollbar-hide space-x-4 pb-4 pt-14 pl-4">
                 {items?.map((item) => (
                   <div key={item.id} className="flex-shrink-0 w-64 carousel-style">
                     <img src={item.image} alt={`Slide ${item.header}`} className="w-full h-40 object-cover images" />
                     <h6 className="caption-header pt-6 bolder pl-2">{item.header}</h6>
                     <img src={item.captionimage} alt="text-image" className="pt-3 pl-2"/>
                   </div>
                 ))}
            </div>
        </div>
    )
}

export default ScrollBarCarousel ;