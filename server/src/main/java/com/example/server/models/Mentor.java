package com.example.server.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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
    private String dateOfBirth;

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
//
//    @JsonBackReference(value="english-levels-mentors")
    @JsonIgnoreProperties("mentors")
    @ManyToMany
    @JoinTable(
        name="englishLevels_mentors",
        joinColumns = {@JoinColumn(name="englishAvailability_id", nullable = false, updatable = false)},
        inverseJoinColumns = {@JoinColumn(name="mentor_id", nullable = false, updatable = false)}
    )
    private List<EnglishLevel> englishLevel;

//    @Column(name="languages_spoken")
//    private ArrayList<String> languagesSpoken;
    @ElementCollection
    @CollectionTable(name="languages_spoken_mentors", joinColumns=@JoinColumn(name = "mentor_id"))
    @Column(name="languages_spoken")
    private List<String> languagesSpoken;

//    @JsonBackReference(value="availabilities-mentors")
    @JsonIgnoreProperties({"mentors", "mentees"})
    @ManyToMany
    @JoinTable(
            name = "availabilities_mentors",
            joinColumns = {@JoinColumn(name="availability_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name="mentor_id", nullable = false, updatable = false)}
    )
    private List<Availabilty> availability;

//    @JsonBackReference(value="mentor")
    @JsonIgnoreProperties({"mentor", "mentee"})
    @OneToMany(mappedBy = "mentor", fetch = FetchType.LAZY)
    private List<Meeting> meetings;

    public Mentor(String firstName, String lastName, String dateOfBirth, String email, String contactNumber, String gender, String motivation, String location, List<String> languagesSpoken) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
        this.contactNumber = contactNumber;
        this.gender = gender;
        this.motivation = motivation;
        this.location = location;
        this.englishLevel = new ArrayList<EnglishLevel>();
        this.languagesSpoken = languagesSpoken;
        this.availability = new ArrayList<Availabilty>();  // add as argument
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

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
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

    public List<EnglishLevel> getEnglishLevel() {
        return englishLevel;
    }

    public void setEnglishLevel(List<EnglishLevel> englishLevel) {
        this.englishLevel = englishLevel;
    }
    public void addEnglishLevel(EnglishLevel englishLevel){
        this.englishLevel.add(englishLevel);
    }

    public List<String> getLanguagesSpoken() {
        return languagesSpoken;
    }

    public void setLanguagesSpoken(List<String> languagesSpoken) {
        this.languagesSpoken = languagesSpoken;
    }

    public List<Availabilty> getAvailability() {
        return availability;
    }

    public void setAvailability(List<Availabilty> availability) {
        this.availability = availability;
    }

    public void addAvailability(Availabilty availabilty){
        this.availability.add(availabilty);
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
