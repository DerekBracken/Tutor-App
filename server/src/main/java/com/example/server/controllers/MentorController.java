package com.example.server.controllers;

import com.example.server.models.Mentor;
import com.example.server.repositories.MentorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MentorController {

    @Autowired
    MentorRepository mentorRepository;

    @GetMapping(value = "/mentor")
    public ResponseEntity<Mentor> getMentor(){
        return new ResponseEntity (mentorRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping(value = "/mentor")
    public ResponseEntity<Mentor> postMentor(@RequestBody Mentor mentor){
        mentorRepository.save(mentor);
        return new ResponseEntity<>(mentor, HttpStatus.CREATED);
    }
}
