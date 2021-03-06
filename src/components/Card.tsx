import React from "react";


const Card = ({name, email, id}: {name: string, email: string, id: number}):JSX.Element => {
    return (
        <div className="tc bg-lightest-blue dib br4 pa3 ma3 grow bw2 shadow-5">
            <img alt="Profile Pictures" src={`https://robohash.org/${id}?size=300x300`} />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
        </div>
    );
}

export default Card;