package com.gl.capstone.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gl.capstone.entity.WaitAdminAllow;
import com.gl.capstone.repo.WaitAdminAlllowRepo;
// waiting admin allow appoinments
@Service  

public class WaitAdminAllowServices {

	@Autowired 
	WaitAdminAlllowRepo waitAdminAlllowRepo;
	

	public WaitAdminAllow addDoctor(WaitAdminAllow task) {

		return waitAdminAlllowRepo.save(task);
	}
	
	public List<WaitAdminAllow> getDoctor() {

		return waitAdminAlllowRepo.findAll();
	}
	
	public void deleteDoctor(Integer id) {

		waitAdminAlllowRepo.deleteById(id);

	}
	
	public WaitAdminAllow getDoctorById(Integer id) {
		
		return waitAdminAlllowRepo.findById(id).get();
	}

}
