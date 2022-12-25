package com.gl.capstone.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gl.capstone.entity.AdminMsgs;
@Repository 
public interface AdminMsgRepo extends JpaRepository<AdminMsgs,Integer>{

}
