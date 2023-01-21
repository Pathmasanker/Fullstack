package com.gl.capstone.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;


//Doctor pojo class
@Data
@Entity
@Table(name = "Doctor_Table")
public class DoctorEntity {


	public int getDoctorId() {
		return doctorId;
	}
	public void setDoctorId(int doctorId) {
		this.doctorId = doctorId;
	}
	public String getDoctorName() {
		return doctorName;
	}
	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
	}
	public String getDoctorImg() {
		return doctorImg;
	}
	public void setDoctorImg(String doctorImg) {
		this.doctorImg = doctorImg;
	}
	public String getSpType() {
		return spType;
	}
	public void setSpType(String spType) {
		this.spType = spType;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getRating() {
		return rating;
	}
	public void setRating(String rating) {
		this.rating = rating;
	}
	public String getAdminName() {
		return adminName;
	}
	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	private int doctorId;
	private String doctorName;
	private String doctorImg;
	private String spType;
	private double price;
	private String location;
	private String rating;
	private String adminName;
	private String date;
	private String time;

}
