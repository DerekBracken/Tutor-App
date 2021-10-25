package com.example.server.controllers;

import com.example.server.models.Mentor;
import com.example.server.repositories.MentorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class MentorController {

    @Autowired
    MentorRepository mentorRepository;

    @GetMapping(value = "/mentors")
    public ResponseEntity<Mentor> getMentor(
            @RequestParam(value = "email", required = false) String email),
//            @RequestParam(value = "")
    {
        if (email != null){
            return new ResponseEntity (mentorRepository.findByEmail(email), HttpStatus.OK);
        }
        return new ResponseEntity (mentorRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping(value = "/mentors")
    public ResponseEntity<Mentor> postMentor(@RequestBody Mentor mentor){
        mentorRepository.save(mentor);
        return new ResponseEntity<>(mentor, HttpStatus.CREATED);
    }

}
