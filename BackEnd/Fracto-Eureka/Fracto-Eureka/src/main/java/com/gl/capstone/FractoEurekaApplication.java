package com.gl.capstone;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;
@EnableEurekaServer
@SpringBootApplication
//Main Eureka Application
public class FractoEurekaApplication {

	public static void main(String[] args) {
		SpringApplication.run(FractoEurekaApplication.class, args);
		
		System.out.println("Fracto Server Started");
	}

}


