package com.example.server.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name="mentors")
public class Mentor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="first_name")
    private String firstName;

    @Column(name="last_name")
    private String lastName;

    @Column(name="dob")
    private LocalDate dateOfBirth;

    @Column(name="email")
    private String email;

    @Column(name="contact_number")
    private String contactNumber;

    @Column(name="gender")
    private String gender;

    @Column(name="motivation")
    private String motivation;

    @Column(name="location")
    private String location;

    @Column(name="english_level")
    private ArrayList<String> englishLevel;

    @Column(name="languages_spoken")
    private ArrayList<String> languagesSpoken;

    @Column(name="availability")
    private ArrayList<String> availability;

    @JsonBackReference
    @OneToMany(mappedBy = "mentor", fetch = FetchType.LAZY)
    private List<Meeting> meetings;

    public Mentor(String firstName, String lastName, LocalDate dateOfBirth, String email, String contactNumber, String gender, String motivation, String location, ArrayList<String> englishLevel, ArrayList<String> languagesSpoken) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
        this.contactNumber = contactNumber;
        this.gender = gender;
        this.motivation = motivation;
        this.location = location;
        this.englishLevel = englishLevel;
        this.languagesSpoken = languagesSpoken;
        this.availability = new ArrayList<>();
        this.meetings = new ArrayList<>();
    }

    public Mentor() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getMotivation() {
        return motivation;
    }

    public void setMotivation(String motivation) {
        this.motivation = motivation;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public ArrayList<String> getEnglishLevel() {
        return englishLevel;
    }

    public void setEnglishLevel(ArrayList<String> englishLevel) {
        this.englishLevel = englishLevel;
    }

    public ArrayList<String> getLanguagesSpoken() {
        return languagesSpoken;
    }

    public void setLanguagesSpoken(ArrayList<String> languagesSpoken) {
        this.languagesSpoken = languagesSpoken;
    }

    public ArrayList<String> getAvailability() {
        return availability;
    }

    public void setAvailability(ArrayList<String> availability) {
        this.availability = availability;
    }

    public List<Meeting> getMeetings() {
        return meetings;
    }

    public void setMeetings(List<Meeting> meetings) {
        this.meetings = meetings;
    }

    public void addMeeting(Meeting meeting){
        this.meetings.add(meeting);
    }
}
