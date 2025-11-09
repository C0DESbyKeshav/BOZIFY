package com.bozify.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.bozify.util.DBUtil;
import com.bozify.util.QueryUtil;

public class SongDaoImpl implements SongDao{
//	public List<Song> getAllSongs() {
//		List<Song> songs = new ArrayList<>();
//		
//		String query = (String) QueryUtil.GET_SONG_DETAILS;
//		
//		try {
//			Connection connection = DBUtil.getConnection();
//			Statement stmt = connection.createStatement();
//            ResultSet rs = stmt.executeQuery(query);
//            
//            while (rs.next()) {
//                Song song = new Song(
//                    rs.getString("song_name"),
//                    rs.getString("artist_name"),
//                    rs.getString("artist_description")
//                    );
//                songs.add(song);
//            }
//
//            rs.close();
//            stmt.close();
//            connection.close();
//			
//		}catch(SQLException e){
//			e.printStackTrace();
//		}		
//
//		return songs;
//	}

	
	public String getAllSongs() {
		StringBuilder allSongs = new StringBuilder();

		try {
		    Connection connection = DBUtil.getConnection();
		    String query = "SELECT * FROM songs";
		    Statement stmt = connection.createStatement();
		    ResultSet rs = stmt.executeQuery(query);

		    while (rs.next()) {
		        allSongs.append(rs.getString("song_name"))
		                .append(" - ")
		                .append(rs.getString("artist_name"))
		                .append(" - ")
		                .append(rs.getString("artist_description"))
		                .append("\n");
		    }

		    rs.close();
		    stmt.close();
		    connection.close();

		} catch (SQLException e) {
		    e.printStackTrace();
		}

		System.out.println(allSongs.toString());
		
		return allSongs.toString();

	}

	
	
	
//	@Override
//	public List<Song> getAllSongs(Song song) {
//		// TODO Auto-generated method stub
//		return null;
//	}
}
