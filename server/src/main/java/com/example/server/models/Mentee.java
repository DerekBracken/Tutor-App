package com.example.server.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="mentees")
public class Mentee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "type")
    private String type;

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

    @Column(name="about_me")
    private String aboutMe;

    @Column(name="location")
    private String location;

    @Column(name="english_level")
    private String englishLevel;

    @ElementCollection
    @CollectionTable(name="languages_spoken_mentee", joinColumns=@JoinColumn(name = "mentee_id"))
    @Column(name="languages_spoken")
    private List<String> languagesSpoken;

    @ElementCollection
    @CollectionTable(name="availabilities_mentees", joinColumns=@JoinColumn(name = "mentee_id"))
    @Column(name="availabilities")
    private List<String> availability;

    @JsonIgnoreProperties({"mentee", "mentor"})
    @OneToMany(mappedBy = "mentee", fetch = FetchType.LAZY)
    private List<Meeting> meetings;

    @JsonIgnoreProperties({"mentees"})
    @ManyToOne
    @JoinColumn(name = "mentor_id")
    private Mentor mentor;



    private int locationWeighting;
    private int languagesWeighting;
    private String genderPref;
    private int genderWeight;

    public Mentee(String firstName, String lastName, String dateOfBirth, String email, String contactNumber, String gender, String aboutMe, String location, String englishLevel, ArrayList<String> languagesSpoken, ArrayList<String> availability) {
        this.type = "Mentee";
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
        this.contactNumber = contactNumber;
        this.gender = gender;
        this.aboutMe = aboutMe;
        this.location = location;
        this.englishLevel = englishLevel;
        this.languagesSpoken = languagesSpoken;
        this.availability = availability;
        this.meetings = new ArrayList<>();
    }

    public Mentee() {
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

    public String getAboutMe() {
        return aboutMe;
    }

    public void setAboutMe(String aboutMe) {
        this.aboutMe = aboutMe;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getEnglishLevel() {
        return englishLevel;
    }

    public void setEnglishLevel(String englishLevel) {
        this.englishLevel = englishLevel;
    }

    public List<String> getLanguagesSpoken() {
        return languagesSpoken;
    }

    public void setLanguagesSpoken(ArrayList<String> languagesSpoken) {
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

    public Mentor getMentor() {
        return mentor;
    }

    public void setMentor(Mentor mentor) {
        this.mentor = mentor;
    }

//    below are the properties for matchmaking

    public int getLocationWeighting() {
        return locationWeighting;
    }

    public void setLocationWeighting(int locationWeighting) {
        this.locationWeighting = locationWeighting;
    }

    public int getLanguagesWeighting() {
        return languagesWeighting;
    }

    public void setLanguagesWeighting(int languagesWeighting) {
        this.languagesWeighting = languagesWeighting;
    }

    public String getGenderPref() {
        return genderPref;
    }

    public void setGenderPref(String genderPref) {
        this.genderPref = genderPref;
    }

    public int getGenderWeight() {
        return genderWeight;
    }

    public void setGenderWeight(int genderWeight) {
        this.genderWeight = genderWeight;
    }
}
