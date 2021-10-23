//package com.example.server.models;
//
//import com.fasterxml.jackson.annotation.JsonBackReference;
//
//import javax.persistence.*;
//import java.util.ArrayList;
//import java.util.List;
//
//@Entity
//@Table(name="availabilities")
//public class Availabilty {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @Column(name="availability")
//    private String availability;
//
////    @JsonBackReference(value = "availabilties-mentors")
//    @ManyToMany
//    @JoinTable(
//            name = "availabilities_mentors",
//            joinColumns = {@JoinColumn(name="mentor_id", nullable = false, updatable = false)},
//            inverseJoinColumns = {@JoinColumn(name="availability_id", nullable = false, updatable = false)}
//    )
//    private List<Mentor> mentors;
//
////    @JsonBackReference(value = "availabilties-mentees")
//    @ManyToMany
//    @JoinTable(
//            name= "availabilities_mentees",
//            joinColumns = {@JoinColumn(name="mentee_id", nullable = false, updatable = false)},
//            inverseJoinColumns = {@JoinColumn(name="availability_id", nullable = false, updatable = false)}
//    )
//    private List<Mentee> mentees;
//
//    public Availabilty(String availability) {
//        this.availability = availability;
//        this.mentors = new ArrayList<Mentor>();
//        this.mentees = new ArrayList<Mentee>();
//    }
//
//    public Availabilty() {
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
//    public String getAvailability() {
//        return availability;
//    }
//
//    public void setAvailability(String availability) {
//        this.availability = availability;
//    }
//
//    public List<Mentor> getMentors() {
//        return mentors;
//    }
//
//    public void setMentors(List<Mentor> mentors) {
//        this.mentors = mentors;
//    }
//
//    public List<Mentee> getMentees() {
//        return mentees;
//    }
//
//    public void setMentees(List<Mentee> mentees) {
//        this.mentees = mentees;
//    }
//}
