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

import com.gl.capstone.entity.WaitAdminAllow;
import com.gl.capstone.services.WaitAdminAllowServices;


//waiting admin allow controller for allow the appoinments
@RestController  
@RequestMapping("/approve") 
@CrossOrigin(origins="http://localhost:3000") 
public class WaitAdminAllowController {
	
	@Autowired  
	WaitAdminAllowServices waitAdminAllowServices;
	
	
	@PostMapping("/insert") 
	public String addVehicle(@RequestBody WaitAdminAllow task)
	{
		waitAdminAllowServices.addDoctor(task);
		return "Doctor Added Successfully";
	}
	@GetMapping("/doctors") 
	public List<WaitAdminAllow> getVehicles()
	{
		return waitAdminAllowServices.getDoctor();
	}
	@GetMapping("/doctors/{id}")  
	public WaitAdminAllow getVehiclebyId(@PathVariable(value="id") Integer id)
	{
		return waitAdminAllowServices.getDoctorById(id);
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteVehicle(@PathVariable (value="id") Integer id)
	{
		waitAdminAllowServices.deleteDoctor(id);
		return "deleted successfully";
	}

}
