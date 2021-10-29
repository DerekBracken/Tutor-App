package com.example.server.controllers;

import com.example.server.models.Meeting;
import com.example.server.repositories.MeetingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MeetingController {

    @Autowired
    MeetingRepository meetingRepository;

    @GetMapping(value = "/meetings")
    public ResponseEntity<Meeting> getMeetings(){
        return new ResponseEntity(meetingRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping(value = "/meetings")
    public ResponseEntity<Meeting> postMeeting(@RequestBody Meeting meeting){
        meetingRepository.save(meeting);
        return new ResponseEntity<>(meeting, HttpStatus.CREATED);
    }
}
