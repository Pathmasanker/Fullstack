package com.gl.capstone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gl.capstone.entity.DoctorEntity;
import com.gl.capstone.services.DoctorServices;
//doctor controller for doctor CRUD
@RestController 
@RequestMapping("/doctor") 
@CrossOrigin(origins="http://localhost:3000") 

public class DoctorController {
	@Autowired  
	DoctorServices doctorServices;
	
	@PostMapping("/insert") 
	public String addVehicle(@RequestBody DoctorEntity doctor)
	{
		doctorServices.addDoctor(doctor);
		return "Doctor Added Successfully";
	}
	@GetMapping("/doctors") 
	public List<DoctorEntity> getDoctor()
	{
		return doctorServices.getDoctor();
	}
	@GetMapping("/doctors/{id}") 
	public DoctorEntity getVehiclebyId(@PathVariable (value="id") Integer id)
	{
		return doctorServices.getDoctorbyId(id);
	}
	@PutMapping("/update/{id}")  
	public String updateVehicle(@PathVariable (value="id") Integer id,@RequestBody DoctorEntity doctor)
	{
		doctorServices.updateDoctor(id,doctor);
		return "updated successfully";
	}
	@DeleteMapping("/delete/{id}") 
	public String deleteVehicle(@PathVariable (value="id") Integer id)
	{
		doctorServices.deleteDoctor(id);
		return "deleted successfully";
	}
	
	@GetMapping("/sort")      
	public List<DoctorEntity> SortPrice()
	{
		return doctorServices.PriceSort();
	}
	
	@GetMapping("/Hrating")     
	public List<DoctorEntity> HighRating()
	{
		return doctorServices.HighRating();
	}
	

}
