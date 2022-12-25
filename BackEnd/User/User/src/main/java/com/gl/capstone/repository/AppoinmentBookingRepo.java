package com.gl.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gl.capstone.entity.AppoinmentBooking;
@Repository 
public interface AppoinmentBookingRepo extends JpaRepository<AppoinmentBooking, Integer>{

}
