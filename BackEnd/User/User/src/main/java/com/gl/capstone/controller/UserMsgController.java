package com.gl.capstone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gl.capstone.entity.UserMessages;
import com.gl.capstone.services.UserMsgService;



//usermsg controller for message crud operation
@RestController 
@RequestMapping("/umessage") 
@CrossOrigin(origins = "http://localhost:3000") 

public class UserMsgController {

	@Autowired 
	UserMsgService userMsgService;

	@PostMapping("/insert") 
	public String AddMsg(@RequestBody UserMessages msg) {
		userMsgService.addMessages(msg);
		return "Message Added Successfully";
	}

	@GetMapping("/messages") 
	public List<UserMessages> getMsgs() {
		return userMsgService.getMessages();
	}

	@GetMapping("/messages/{id}") 
	public UserMessages getMsgbyId(@PathVariable(value = "id") Integer id) 
	{
		return userMsgService.getMessagebyId(id);
	}

}
