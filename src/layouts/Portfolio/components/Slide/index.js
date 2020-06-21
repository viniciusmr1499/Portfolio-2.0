import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export default function Slide({ images }) {
    const [figures, setFigures] = useState({
        original: '', thumbnail: ''
    });

    const photos = [
        {

            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];


    return (
        <>
            <ImageGallery items={photos}
                showFullscreenButton={true}
                showThumbnails={true}
                showNav={true}
                autoPlay={true}
                slideDuration={450}
                slideInterval={2500}
            />
        </>

    );
}
