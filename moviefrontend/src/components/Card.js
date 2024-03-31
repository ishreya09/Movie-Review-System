import React from 'react';

const Card = (props) => {
    return (
        <div className="card" style={{ width: "30rem" }}>
                <div className="card-body">
            <a href={"http://localhost:3000/movie/" + props.id} className="">
                    <h4>{props.title} </h4>
                    id : {props.id}
            </a>
                    <h5 className="card-text"></h5>
                    <p className="card-text"  >Release Year: {props.releaseYear} </p>
                    <p className="card-text"  >Genre: {props.genre} </p>
                    <p className="card-text"  >Directed by: {props.director} </p>
                    <p className="card-text"  >Rating: {props.averageRating} </p>
                    <p className="card-text">Rated by {props.totalNumberOfRating} people </p>
                    <a  href={"http://localhost:3000/movie/" + props.id} className="btn btn-primary">Review Movie</a>
                </div>
        </div>
    );
};

export default Card;
