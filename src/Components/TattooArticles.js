import { useState } from "react";

function TattooArticles() {
    const [image, setImage] = useState('/images/tattooArticles/5.png')
    const images = [
        '/images/tattooArticles/1.png',
        '/images/tattooArticles/2.png',
        '/images/tattooArticles/3.png',
        '/images/tattooArticles/4.png',
        '/images/tattooArticles/5.png',
        '/images/tattooArticles/6.png',
    ];

    const imageElements = images.map((image, index) => {
        return (<div className="col-4" key={index} onMouseOver={() => setImage(image)}>
            <img src={image} className="w-100 mt-3" alt="tattooArticles" />
        </div>)
    })

    return (
        <div>
            <div className="row">
                <div className="col">
                    <img src={image} className="w-100 rounded-3" alt="tattooArticles" />
                </div>
            </div>
            <div className="row">
                {imageElements}
            </div>
        </div>

    )
}


export default TattooArticles