// TODO remove file
//package com.example.server.controllers;
//
//import com.example.server.models.EnglishLevel;
//import com.example.server.repositories.EnglishLevelRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//public class EnglishLevelController {
//
//    @Autowired
//    EnglishLevelRepository englishLevelRepository;
//
//    @GetMapping(value = "/englishLevel/mentors/{id}")
//    public ResponseEntity<EnglishLevel> getEnglishLevels(@PathVariable Long id){
//        return new ResponseEntity(englishLevelRepository.findByMentors_id(id), HttpStatus.OK);
//    }
//}
