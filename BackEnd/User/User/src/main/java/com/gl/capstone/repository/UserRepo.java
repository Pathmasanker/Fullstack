package com.gl.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gl.capstone.entity.UserEntity;
@Repository    
public interface UserRepo extends JpaRepository<UserEntity, Integer>{

}
