package com.example.server.controllers;

import com.example.server.models.Mentee;
import com.example.server.repositories.MenteeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class MenteeController {

    @Autowired
    MenteeRepository menteeRepository;

    @GetMapping(value = "/mentees")
    public ResponseEntity<Mentee> getMentee(
            @RequestParam(value = "email", required = false) String email,
            @RequestParam(value = "mentor_id", required = false) Long id){
        if (email != null){
            return new ResponseEntity (menteeRepository.findByEmail(email), HttpStatus.OK);
        } else if (id != null){
            return new ResponseEntity (menteeRepository.findByMentor_id(id), HttpStatus.OK);
        }
        return new ResponseEntity (menteeRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping(value = "/mentees")
    public ResponseEntity<Mentee> postMentee(@RequestBody Mentee mentee){
        menteeRepository.save(mentee);
        return new ResponseEntity<>(mentee, HttpStatus.CREATED);
    }

    @PutMapping(value = "/mentees/{email}")
    public ResponseEntity<Mentee> updateMentee(@RequestBody Mentee mentee){
        menteeRepository.save(mentee);
        return new ResponseEntity<>(mentee, HttpStatus.OK);
    }

}

//     @PatchMapping(value = "/raids/{id}")
//    public ResponseEntity<Raid> updateRaid(@RequestBody Raid raid){
//        raidRepository.save(raid);
//        return new ResponseEntity<>(raid, HttpStatus.OK);
//    }

