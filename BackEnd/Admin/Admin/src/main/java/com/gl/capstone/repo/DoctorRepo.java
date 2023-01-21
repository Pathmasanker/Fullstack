package com.gl.capstone.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.gl.capstone.entity.DoctorEntity;



public interface DoctorRepo extends JpaRepository<DoctorEntity,Integer>{
	
	
	
	@Query("From DoctorEntity ORDER BY price ASC")
	public List<DoctorEntity> PriceSort();
	
	@Query("From DoctorEntity ORDER BY rating DESC")
	public List<DoctorEntity> HighRating();

}
