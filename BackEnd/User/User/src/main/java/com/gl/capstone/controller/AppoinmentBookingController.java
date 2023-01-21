package com.gl.capstone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gl.capstone.entity.AppoinmentBooking;
import com.gl.capstone.services.AppoinmentBookingServices;


//appoinmentbooking controller for appoinments operations
@RestController             
@RequestMapping("/booking") 

@CrossOrigin(origins="http://localhost:3000")  


public class AppoinmentBookingController {
	@Autowired   
	AppoinmentBookingServices appoinmentBookingServices;
	
	@PostMapping("/insert")    
	public String AddBooking(@RequestBody AppoinmentBooking booking)
	{
		appoinmentBookingServices.addBooking(booking);
		return "User Added Successfully";
	}
	
	
	@GetMapping("/bookings")  
	public List<AppoinmentBooking> getMyBookings()
	{
		return appoinmentBookingServices.getBookings();
	}
	
	
	@GetMapping("/bookings/{id}")  
	public AppoinmentBooking getMyBookingbyId(@PathVariable(value="id") int id)
	{
		return appoinmentBookingServices.getBookingbyId(id);
	}

	@DeleteMapping("/delete/{id}")   
	public String deleteBooking(@PathVariable (value="id") Integer id)
	{
		appoinmentBookingServices.deleteBooking(id);
		return "deleted successfully";
	}
	

}
