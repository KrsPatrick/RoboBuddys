import React from "react";
import Card from "./Card";
import { robots } from "./robots";

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
//   }

const CardList = ({filteredRobots}) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    if (user.name.toLocaleLowerCase().includes(filteredRobots)) {
                        return (<Card key={i} id={user.id} name={user.name} email={user.email}/>
                        )
                     } 
                    }
                )
            }
        </div> 
    )
}
   

export default CardList;