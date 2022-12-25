package com.gl.capstone.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gl.capstone.entity.AdminEntity;
import com.gl.capstone.repo.AdminRepo;

//admin entity operatios
@Service  
public class AdminServices {
	@Autowired 
	AdminRepo adminRepo;
	
	public AdminEntity addAdmin(AdminEntity admin)
	{
		
			return adminRepo.save(admin);
	
		
	}
	
	public List<AdminEntity> getAdmin() {
		
		return adminRepo.findAll();
	}
	
	public AdminEntity updateAdmin(Integer id, AdminEntity admin) {
		AdminEntity uadmin=adminRepo.findById(id).get();
		
		uadmin.setAdminName(admin.getAdminName());
		uadmin.setAdminEmail(admin.getAdminEmail());
		uadmin.setAdminPhone(admin.getAdminPhone());
		uadmin.setAdminPassword(admin.getAdminPassword());
		
		return adminRepo.save(uadmin);
		
		
	}
	
	public void deleteAdmin(Integer id) {
		adminRepo.deleteById(id);
		
	}


}
