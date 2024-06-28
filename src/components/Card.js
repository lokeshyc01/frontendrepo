import { useState } from "react";

function Card({id,name,price,image,info,removeTour}){
    let description = `${info.substring(0,200)}...`
    const [readmore,setReadMore] = useState(false);
    function readmoreHandler(){
        setReadMore(!readmore);
    }
    return(
        <div className="card">
            <img src={image} className="image"/>
            <div className="tour-details">
                <h4 className="tour-price">{price}</h4>
                <h4 className="tour-name">{name}</h4>
            </div>
            <div className="description">
                {description}
                <span className="read-more" onClick={readmoreHandler}>
                    {readmore ? `show less` : `show more`}
                </span>
            </div>

            <button className="btn-red" onClick={() => (removeTour(id))}>
                Not Interested
            </button>
        </div>
    )
}

export default Card;