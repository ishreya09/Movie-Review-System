package com.pes1ug21cs574.movie.Model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String title;
    private int releaseYear;
    private String genre;
    private String director;
    private double averageRating;
    private int totalNumberOfRating;
    

    Movie(){
        totalNumberOfRating=0;
        averageRating=0;
    }

    // getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getReleaseYear() {
        return releaseYear;
    }

    public void setReleaseYear(int releaseYear) {
        this.releaseYear = releaseYear;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public double getAverageRating() {
        return averageRating;
    }

    public void setAverageRating(double Rating) {
        this.averageRating = this.averageRating* this.totalNumberOfRating + Rating;
        this.averageRating = this.averageRating/(this.totalNumberOfRating+1);
        this.totalNumberOfRating = this.totalNumberOfRating+1;
    }

    public int getTotalNumberOfRating() {
        return totalNumberOfRating;
    }
    public void setTotalNumberOfRating(int totalNumberOfRating) {
        this.totalNumberOfRating = this.totalNumberOfRating+1;
    }
}
