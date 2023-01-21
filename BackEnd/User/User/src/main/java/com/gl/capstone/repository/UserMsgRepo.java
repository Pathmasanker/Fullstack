package com.gl.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.gl.capstone.entity.UserMessages;
@Repository 
public interface UserMsgRepo extends JpaRepository<UserMessages	, Integer>{

}
