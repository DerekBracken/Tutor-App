package com.example.server.controllers;

import com.example.server.models.Availabilty;
import com.example.server.repositories.AvailabilityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AvailabilityController {

    @Autowired
    AvailabilityRepository availabilityRepository;

    @GetMapping(value = "/availability/mentors/{id}")
    public ResponseEntity<Availabilty> getMentorAvailabilities(@PathVariable Long id){
        return new ResponseEntity(availabilityRepository.findByMentors_id(id), HttpStatus.OK);
    }

    @GetMapping(value = "/availability/mentees/{id}")
    public ResponseEntity<Availabilty> getMenteeAvailabilities(@PathVariable Long id){
        return new ResponseEntity(availabilityRepository.findByMentees_id(id), HttpStatus.OK);
    }
}
