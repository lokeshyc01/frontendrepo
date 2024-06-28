import React from "react";
import Card from "./Card";
function Tours({tours,removeTour}){
    return(
        <div>
            <div><h2>Plan with Lokesh</h2></div>
            <div>
                {
                    tours.map(trip =>{
                        return <Card  {...trip} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    )
}

export default Tours;