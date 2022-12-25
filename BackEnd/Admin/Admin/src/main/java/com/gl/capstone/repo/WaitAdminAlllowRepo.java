package com.gl.capstone.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gl.capstone.entity.WaitAdminAllow;
@Repository   
public interface WaitAdminAlllowRepo extends JpaRepository<WaitAdminAllow,Integer>{

}
