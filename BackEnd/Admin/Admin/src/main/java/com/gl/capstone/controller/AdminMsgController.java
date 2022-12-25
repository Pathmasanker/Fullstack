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


import com.gl.capstone.entity.AdminMsgs;
import com.gl.capstone.services.AdminMsgService;
//adminmsg controller for message operations
@RestController 
@RequestMapping("/omessage") 
@CrossOrigin(origins="http://localhost:3000") 

public class AdminMsgController {
	
	@Autowired 
	AdminMsgService adminMsgService;
	
	@PostMapping("/insert") 
	public String AddMsg(@RequestBody AdminMsgs msg)
	{
		adminMsgService.addMessages(msg);
		return "Message Added Successfully";
	}
	@GetMapping("/messages") 
	public List<AdminMsgs> getMsgs()
	{
		return adminMsgService.getMessages();
	}
	@GetMapping("/messages/{id}") 
	public AdminMsgs getMsgbyId(@PathVariable(value="id") Integer id)
	{
		return adminMsgService.getMessagebyId(id);
	}

}
