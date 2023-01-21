package com.gl.capstone.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gl.capstone.entity.AppoinmentBooking;
import com.gl.capstone.repository.AppoinmentBookingRepo;
@Service 
// appoinments booking operations
public class AppoinmentBookingServices {
	
	@Autowired   
	AppoinmentBookingRepo appoinmentBookingRepo;


	
	public AppoinmentBooking addBooking(AppoinmentBooking booking) {

		return appoinmentBookingRepo.save(booking);

	}

	public List<AppoinmentBooking> getBookings() {

		return appoinmentBookingRepo.findAll();
	}
	
	
	public AppoinmentBooking getBookingbyId(int id) {

		return appoinmentBookingRepo.findById(id).get();
	}



	public void deleteBooking(Integer id) {
		appoinmentBookingRepo.deleteById(id);

	}

}


