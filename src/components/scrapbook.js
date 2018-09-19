import React from 'react';
import './scrapbook.css';
import ImageData from './image_data'
import ScrapbookImages from './scrapbook_images'

export default () => {

    return (
        <div className="scrapbook-container">
            <ScrapbookImages about={ImageData[0]}/>
        </div>
    )
}