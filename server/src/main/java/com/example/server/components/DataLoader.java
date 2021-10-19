//package com.example.server.components;
//
//import com.example.server.models.Mentee;
//import com.example.server.models.Mentor;
//import com.example.server.repositories.MeetingRepository;
//import com.example.server.repositories.MenteeRepository;
//import com.example.server.repositories.MentorRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.ApplicationArguments;
//import org.springframework.boot.ApplicationRunner;
//import org.springframework.stereotype.Component;
//
//import java.time.LocalDate;
//import java.util.ArrayList;
//
//@Component
//public class DataLoader implements ApplicationRunner {
//
//    @Autowired
//    MeetingRepository meetingRepository;
//
//    @Autowired
//    MentorRepository mentorRepository;
//
//    @Autowired
//    MenteeRepository menteeRepository;
//
//    private ArrayList<String> englishLevel;
//    private ArrayList<String> languagesSpoken;
//    private ArrayList<String> availability;
//    private LocalDate date;
//
//    public DataLoader (){
//        this.englishLevel = new ArrayList();
//        this.languagesSpoken = new ArrayList();
//        this.availability = new ArrayList();
//        this.date = LocalDate.of(1987, 9, 1);
//    }
//
//    public void run(ApplicationArguments args){
//
//        englishLevel.add("mid");
//        languagesSpoken.add("English");
//        availability.add("Saturday");
//
//        Mentee sean = new Mentee("Sean", "Hollywood", date, "seanh@gmail.com", "0857107119", "male", "Hi", "Edinburgh", "mid", languagesSpoken, availability);
//        menteeRepository.save(sean);
//
////        Mentee carl = new Mentee();
////        menteeRepository.save(carl);
////
////        Mentee pat = new Mentee();
////        menteeRepository.save(pat);
////
////        Mentee ciara = new Mentee();
////        menteeRepository.save(ciara);
////
////
//        Mentor john = new Mentor("John", "Flinn", date, "email", "09", "male", "want to help", "Dublin", englishLevel, languagesSpoken);
//        mentorRepository.save(john);
////
////        Mentor roosa = new Mentor();
////        mentorRepository.save(roosa);
////
////        Mentor hannah = new Mentor();
////        mentorRepository.save(hannah);
////
////        Mentor colin = new Mentor();
////        mentorRepository.save(colin);
//    }
//}
