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

import com.gl.capstone.entity.UserEntity;
import com.gl.capstone.services.UserServices;



//user controller for CRUD
@RestController  

@RequestMapping("/user")   

@CrossOrigin(origins="http://localhost:3000")   


public class UserController {
	
	@Autowired  
	UserServices userServices;
	
	@PostMapping("/insert")   
	public String AddUser(@RequestBody UserEntity user)
	{
		userServices.addUser(user);
		return "User Added Successfully";
	}
	@GetMapping("/users")    
	public List<UserEntity> getUsers()
	{
		return userServices.getUsers();
	}
	@PutMapping("/update/{id}")  
	public String updateUser(@PathVariable (value="id") Integer id,@RequestBody UserEntity user)
	{
		userServices.updateUser(id,user);
		return "updated successfully";
	}
	@DeleteMapping("/delete/{id}")    
	public String deleteUser(@PathVariable (value="id") Integer id)
	{
		userServices.deleteUser(id);
		return "deleted successfully";
	}
	

}
