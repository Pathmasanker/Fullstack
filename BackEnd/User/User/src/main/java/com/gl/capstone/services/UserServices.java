package com.gl.capstone.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gl.capstone.entity.UserEntity;
import com.gl.capstone.repository.UserRepo;

@Service 
//user entity operations
public class UserServices {
	@Autowired  
	UserRepo userRepo;

	
	public UserEntity addUser(UserEntity user) {

		return userRepo.save(user);

	}
	

	public List<UserEntity> getUsers() {

		return userRepo.findAll();
	}

	public UserEntity updateUser(Integer id, UserEntity user) {
		UserEntity uuser = userRepo.findById(id).get();

		uuser.setUserName(user.getUserName());
		uuser.setUserEmail(user.getUserEmail());
		uuser.setUserPhone(user.getUserPhone());
		uuser.setUserPassword(user.getUserPassword());

		return userRepo.save(uuser);

	}

	public void deleteUser(Integer id) {
		userRepo.deleteById(id);

	}

}
