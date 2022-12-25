package com.gl.capstone.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gl.capstone.entity.AdminMsgs;
import com.gl.capstone.repo.AdminMsgRepo;
// admin meassage opertions
@Service 
public class AdminMsgService {
	
	@Autowired  
	AdminMsgRepo adminMsgRepo;
	
	
	
	public AdminMsgs addMessages(AdminMsgs msg)
	{
			return adminMsgRepo.save(msg);
	}
	
	public List<AdminMsgs> getMessages() {
		
		return adminMsgRepo.findAll();
	}
	
	public AdminMsgs getMessagebyId(int id) {
		
		return adminMsgRepo.findById(id).get();
	}

}
