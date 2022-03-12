import { useState } from "react";
import { Link } from "react-router-dom";

function MorePaintingsArticle() {
    const [image, setImage] = useState('/images/article/5.png')
    const images = [
        '/images/article/1.png',
        '/images/article/2.png',
        '/images/article/3.png',
        '/images/article/4.png',
        '/images/article/5.png',
        '/images/article/6.png',
    ];

    const imageElements = images.map((image, index) => {
        return (<div className="col-4" key={index} onMouseOver={() => setImage(image)}>
            <img src={image} className="w-100 mt-3" alt="articles"/>
        </div>)
    })

    return (
        <div className="row">
            <div className="col-4">
                <div className="row">
                    <div className="col">
                        <img src={image} className="w-100 rounded-3" alt="articles" />
                    </div>
                </div>
                <div className="row">
                    {imageElements}
                </div>
            </div>
            <div className="col-8">
                <p style={{backgroundColor: "white", fontSize: "36px", marginTop: "75px", textAlign: "justify", padding: "15px"}} >“ Don't think about making art, just get it done. Let everyone else decide if it's good or bad, whether they love it or hate it. While they are deciding, make even more art. ”</p>
                <p className="text-muted" style={{ fontSize: "25px", textAlign: "center", backgroundColor: "white" }}>-Andy Warhol</p>
                <Link to="/" />
            </div>
        </div>
    )
}


export default MorePaintingsArticle