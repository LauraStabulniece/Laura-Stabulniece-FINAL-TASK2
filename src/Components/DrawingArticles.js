import { useState } from "react";

function DrawingArticles() {
    const [image, setImage] = useState('/images/drawingArticles/6.png')
    const images = [
        '/images/drawingArticles/1.png',
        '/images/drawingArticles/2.png',
        '/images/drawingArticles/3.png',
        '/images/drawingArticles/4.png',
        '/images/drawingArticles/5.png',
        '/images/drawingArticles/6.png',
    ];

    const imageElements = images.map((image, index) => {
        return (<div className="col-4" key={index} onMouseOver={() => setImage(image)}>
            <img src={image} className="w-100 mt-3" alt="drawingArticles" />
        </div>)
    })

    return (
        <div>
            <div className="row">
                <div className="col">
                    <img src={image} className="w-100" alt="drawingArticles" />
                </div>
            </div>
            <div className="row">
                {imageElements}
            </div>
        </div>

    )
}


export default DrawingArticles