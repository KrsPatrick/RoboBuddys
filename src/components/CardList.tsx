import React from "react";
// @ts-ignore
import Card from "./Card.tsx";
// @ts-ignore
import { robots } from "./robots.tsx";

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
//   }

const CardList = ({filteredRobots}): JSX.Element => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    if (user.name.toLocaleLowerCase().includes(filteredRobots)) {
                        return (<Card key={i} id={user.id} name={user.name} email={user.email}/>
                        )
                     }
                    return console.log("hi"); 
                    }
                )
            }
        </div> 
    )
}
   

export default CardList;