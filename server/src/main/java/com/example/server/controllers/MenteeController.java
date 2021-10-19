package com.example.server.controllers;

import com.example.server.models.Mentee;
import com.example.server.repositories.MenteeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MenteeController {

    @Autowired
    MenteeRepository menteeRepository;

    @GetMapping(value = "/mentee")
    public ResponseEntity<Mentee> getMentee(){
        return new ResponseEntity (menteeRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping(value = "/mentee")
    public ResponseEntity<Mentee> postMentee(@RequestBody Mentee mentee){
        menteeRepository.save(mentee);
        return new ResponseEntity<>(mentee, HttpStatus.CREATED);
    }

}
