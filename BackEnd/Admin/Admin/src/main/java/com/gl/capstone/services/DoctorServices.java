package com.gl.capstone.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gl.capstone.entity.DoctorEntity;
import com.gl.capstone.repo.DoctorRepo;

// doctor entity opertions
@Service 
public class DoctorServices {

	@Autowired  
	DoctorRepo doctorRepo;
	
	public DoctorEntity addDoctor(DoctorEntity doctor) {

		return doctorRepo.save(doctor);

	}

	public List<DoctorEntity> getDoctor() {

		return doctorRepo.findAll();
	}
	
	public DoctorEntity updateDoctor(Integer id, DoctorEntity doctor) {

		DoctorEntity udoctor = doctorRepo.findById(id).get();

		udoctor.setDoctorName(doctor.getDoctorName());
		udoctor.setSpType(doctor.getSpType());
		udoctor.setRating(doctor.getRating());
		udoctor.setLocation(doctor.getLocation());
		udoctor.setPrice(doctor.getPrice());
		udoctor.setDate(doctor.getDate());
		udoctor.setTime(doctor.getTime());
		udoctor.setAdminName(doctor.getAdminName());

		return doctorRepo.save(udoctor);

	}
	

	public void deleteDoctor(Integer id) {
		
		doctorRepo.deleteById(id);

	}


	public DoctorEntity getDoctorbyId(Integer id) {

		return doctorRepo.findById(id).get();
	}
	
	public List<DoctorEntity> PriceSort() {
		
		return doctorRepo.PriceSort();
	}
	public List<DoctorEntity> HighRating() {
		
		return doctorRepo.HighRating();
	}

}
