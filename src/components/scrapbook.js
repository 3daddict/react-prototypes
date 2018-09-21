import React from 'react';
import './scrapbook.css';
import ImageData from './image_data'
import ScrapbookImage from './scrapbook_images'

export default () => {
    const images = ImageData.map((img, index) => {
        return <ScrapbookImage key={index} about={img} />
    });

    return (
        <div className="scrapbook-container">
            {images}
        </div>
    )
}