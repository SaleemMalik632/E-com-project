import React, { useState, useEffect } from 'react';

function ImageGallery() {
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/getImages')
            .then(response => response.json())
            .then(data => setImageUrls(data))
            .catch(error => console.error('Error fetching image URLs:', error));
    }, []);

    return (
        <div>
            <h1>Image Gallery</h1>
            <div className="image-container">
                {imageUrls.map((imageUrl, index) => (
                    <img key={index} src={`http://localhost:8000/${imageUrl}`} alt={`Image ${index}`} />
                ))}
            </div>
        </div>
    );
}

export default ImageGallery; 
