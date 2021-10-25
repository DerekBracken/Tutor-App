package com.example.server.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.*;
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

    @ElementCollection
    @CollectionTable(name="teaching_level_mentors", joinColumns=@JoinColumn(name = "mentor_id"))
    @Column(name="teaching_level")
    private List<String> teachingLevel;

    @ElementCollection
    @CollectionTable(name="languages_spoken_mentors", joinColumns=@JoinColumn(name = "mentor_id"))
    @Column(name="languages_spoken")
    private List<String> languagesSpoken;

    @ElementCollection
    @CollectionTable(name="availabilities_mentors", joinColumns=@JoinColumn(name = "mentor_id"))
    @Column(name="availabilities")
    private List<String> availability;

    @JsonIgnoreProperties({"mentor", "mentee"})
    @OneToMany(mappedBy = "mentor", fetch = FetchType.LAZY)
    private List<Meeting> meetings;

    @JsonIgnoreProperties({"mentors"})
    @OneToMany(mappedBy = "mentor", fetch = FetchType.LAZY)
    private List<Mentee> mentees;

    private String type;

    private int suitabilityScore;

    public Mentor(String firstName, String lastName, String dateOfBirth, String email, String contactNumber, String gender, String motivation, String location, List<String> teachingLevel, List<String> languagesSpoken, List<String> availability) {
        this.type = "mentor";
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
        this.contactNumber = contactNumber;
        this.gender = gender;
        this.motivation = motivation;
        this.location = location;
        this.teachingLevel = teachingLevel;
        this.languagesSpoken = languagesSpoken;
        this.availability = availability;
        this.meetings = new ArrayList<>();
        this.mentees = new ArrayList<>();
    }

    public Mentor() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
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

    public List<String> getTeachingLevel() {
        return teachingLevel;
    }

    public void setEnglishLevel(List<String> teachingLevel) {
        this.teachingLevel = teachingLevel;
    }
    public void addEnglishLevel(String teachingLevel){
        this.teachingLevel.add(teachingLevel);
    }

    public List<String> getLanguagesSpoken() {
        return languagesSpoken;
    }

    public void setLanguagesSpoken(List<String> languagesSpoken) {
        this.languagesSpoken = languagesSpoken;
    }

    public List<String> getAvailability() {
        return availability;
    }

    public void setAvailability(List<String> availability) {
        this.availability = availability;
    }

    public void addAvailability(String availabilty){
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

    public List<Mentee> getMentees() {
        return mentees;
    }

    public void setMentees(List<Mentee> mentees) {
        this.mentees = mentees;
    }

    public void addMentee(Mentee mentee) {
        this.mentees.add(mentee);
    }

    public int getSuitabilityScore() {
        return suitabilityScore;
    }

    public void increaseSuitabilityScore(int value) {
        this.suitabilityScore += value;
    }
}
