package com.gl.capstone.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gl.capstone.entity.AdminEntity;
@Repository 
public interface AdminRepo  extends JpaRepository<AdminEntity,Integer>{

}
