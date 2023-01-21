package com.gl.capstone.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gl.capstone.entity.UserMessages;
import com.gl.capstone.repository.UserMsgRepo;


// user message operations
@Service 
public class UserMsgService {
	
	@Autowired  
	UserMsgRepo userMsgRepo;
	
	
	
	public UserMessages addMessages(UserMessages msg)
	{
			return userMsgRepo.save(msg);
	}


	public List<UserMessages> getMessages() {
		
		return userMsgRepo.findAll();
	}
	
	
	public UserMessages getMessagebyId(int id) {
		
		return userMsgRepo.findById(id).get();
	}

}
