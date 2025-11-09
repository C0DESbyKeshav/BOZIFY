package com.bozify.dao;

// Getter to get data from database and Setter to set data to database.
// No need of setters in this class.
public class Song {
	private String song_name;
	private String artist_name;
	private String artist_desc;
	
	// Constructor
    public Song(String song_name, String artist_name, String artist_desc) {
        this.song_name = song_name;
        this.artist_name = artist_name;
        this.artist_desc = artist_desc;
    }
    
    // Getters and Setters
	
	public String getSongName() {
		return song_name;
	}
	public void setSongName(String song_name) {
		this.song_name = song_name;
	}
	public String getArtistName() {
		return artist_name;
	}
	public void setArtistName(String artist_name) {
		this.artist_name = artist_name;
	}
	public String getArtistDesc() {
		return artist_desc;
	}
	public void setArtistDesc(String artist_desc) {
		this.artist_desc = artist_desc;
	}
}
