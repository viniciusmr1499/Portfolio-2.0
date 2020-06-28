import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export default function Slide({ images }) {
    const [figures, setFigures] = useState(images);

    return (
        <div className="test">
            <ImageGallery items={figures}
                showFullscreenButton={true}
                showThumbnails={true}
                showNav={true}
                autoPlay={true}
                slideDuration={450}
                slideInterval={2500}
            />
        </div>

    );
}
