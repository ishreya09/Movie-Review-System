import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getCookie from './getcookie';

function MovieDetail() {
    const [movie, setMovie] = useState([]);
    const [rating, setRating] = useState(0.0);
    const [review, setReview] = useState('');
    const [userID, setUserID] = useState(0);
    const [movieID, setMovieID] = useState(0);
    const [averageRating, setAvgRating] = useState(0.0)
    const [reviewList, setreviewList] = useState([]);

    const handleRatingSubmit = (e) => {
        e.preventDefault();
        // logic for Updating Rating
        if (rating < 0 && rating > 5) {
            alert("Rating can only be between 0 and 5");
            return;
        }
        axios.get("http://localhost:4000/movie/updateRating/" + movieID + "/" + rating)
            .then(response => {
                console.log(response.data)
                window.location = window.location.href
            })
            .catch(error => {
                // Log the error for debugging
                console.log('Error:', error);
            });
    }
    const handleReviewSubmit = (e) => {
        e.preventDefault();
        // logic for Adding review
        // replace space by %20
        const r = review.replace(/ /g, "%20");
        console.log(r);
        axios.get("http://localhost:4000/review/add/" + movieID + "/" + userID + "/" + r)
            .then(response => {
                console.log(response.data)
                window.location = window.location.href
            })
            .catch(error => {
                // Log the error for debugging
                console.log('Error:', error);
            });
    }

    useEffect(() => {
        const userID = getCookie('userID')
        if (userID === "null" || userID === null) {
            window.location.href = '/login';
            return;
        }
        setUserID(Number(userID));

        const currentURL = window.location.href
        const id = currentURL.split('/')[4];
        setMovieID(id);

        axios.get("http://localhost:4000/movie/get/" + id)
            .then((res) => {
                setMovie(res.data);
                setAvgRating(res.data.averageRating.toFixed(1))
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });

        axios.get("http://localhost:4000/review/get/movie/" + id)
            .then((result) => {
                setreviewList(result.data)
                console.log(result.data)
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col" style={{ textAlign: 'left' }}>
                    <h2>{movie.title}</h2>
                    <p>Genre: {movie.genre}</p>
                    <p>Director: {movie.director}</p>
                    <p>Release Year: {movie.releaseYear}</p>
                    <p>Average Rating: {averageRating}</p>
                    <p>Total Number of Ratings: {movie.totalNumberOfRating}</p>
                </div>
                <div className='col'>
                    {/* Rating form */}
                    <form onSubmit={handleRatingSubmit}>
                        <label htmlFor="rating" className="form-label">Rating</label>
                        <input
                            type="number"
                            id="rating"
                            className="form-control"
                            value={rating}
                            onChange={(event) => setRating(event.target.value)}
                            min="0"
                            max="5"
                            step="0.1"
                            required
                        />
                        <button type="submit" className="btn btn-primary w-100">Add Rating</button>



                    </form>
                </div>

                <div className="col">
                    {/* Review form */}
                    <form onSubmit={handleReviewSubmit}>
                        <label htmlFor="reviewText" className="form-label">Review Text</label>
                        <textarea
                            id="reviewText"
                            className="form-control"
                            rows={5}
                            value={review}
                            onChange={(event) => setReview(event.target.value)}
                            required
                        ></textarea>

                        <button type="submit" className="btn btn-primary w-100">Add Review</button>


                    </form>
                </div>
            </div>
            <div className='row' style={{ textAlign: 'left' }}>
                <h2 className='text-primary'>Reviews </h2>
                {

                    reviewList.map((review) => (
                        <div className='card' key={review.id}>
                            <h5>{review.user.name}</h5>
                            <div className='card-body'>
                                {review.review}
                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    );
}

export default MovieDetail;
