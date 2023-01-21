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

import com.gl.capstone.entity.AdminEntity;
import com.gl.capstone.services.AdminServices;


//admin controller for CRUD
@RestController
@RequestMapping("/admin")  
@CrossOrigin(origins="http://localhost:3000")   
public class AdminController {
	
	@Autowired  
	AdminServices adminServices;
	
	@PostMapping("/insert") 
	public String AddAdmin(@RequestBody AdminEntity admin)
	{
		adminServices.addAdmin(admin);
		return "admin Added Successfully";
	}
	@GetMapping("/admins") 
	public List<AdminEntity> getAdmin()
	{
		return adminServices.getAdmin();
	}
	@PutMapping("/update/{id}")   
	public String updateAdmin(@PathVariable (value="id") Integer id,@RequestBody AdminEntity admin)
	{
		adminServices.updateAdmin(id,admin);
		return "updated successfully";
	}
	@DeleteMapping("/delete/{id}") 
	public String deleteAdmin(@PathVariable (value="id") Integer id)
	{
		adminServices.deleteAdmin(id);
		return "deleted successfully";
	}
	

}
