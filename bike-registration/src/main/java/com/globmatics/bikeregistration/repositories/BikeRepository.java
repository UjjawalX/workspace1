package com.globmatics.bikeregistration.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.globmatics.bikeregistration.model.Bike;



public interface BikeRepository extends JpaRepository<Bike, Long>{
	
}
