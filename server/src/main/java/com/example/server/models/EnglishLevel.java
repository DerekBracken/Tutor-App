// TODO remove file
//package com.example.server.models;
//
//import com.fasterxml.jackson.annotation.JsonBackReference;
//
//import javax.persistence.*;
//import java.util.ArrayList;
//import java.util.List;
//
//@Entity
//@Table(name="englishLevels")
//public class EnglishLevel {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @Column(name="englishLevel")
//    private String englishLevel;
//
////    @JsonBackReference
//    @ManyToMany
//    @JoinTable(
//            name="englishLevels_mentors",
//            joinColumns = {@JoinColumn(name="mentor_id", nullable = false, updatable = false)},
//            inverseJoinColumns = {@JoinColumn(name="englishAvailability_id", nullable = false, updatable = false)}
//    )
//    private List<Mentor> mentors;
//
//    public EnglishLevel(String englishLevel) {
//        this.englishLevel = englishLevel;
//        this.mentors= new ArrayList<Mentor>();
//    }
//
//    public EnglishLevel() {
//    }
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public String getEnglishLevel() {
//        return englishLevel;
//    }
//
//    public void setEnglishLevel(String englishLevel) {
//        this.englishLevel = englishLevel;
//    }
//
//    public List<Mentor> getMentors() {
//        return mentors;
//    }
//
//    public void setMentors(List<Mentor> mentors) {
//        this.mentors = mentors;
//    }
//}
