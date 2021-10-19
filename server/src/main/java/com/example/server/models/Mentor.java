package com.example.server.models;

import javax.persistence.*;
import java.util.Date;
import java.util.List;


@Entity
@Table(name="Mentor")
public class Mentor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="first_name")
    private String firstName;

    @Column(name="last_name")
    private String lastName;

    @Column(name="dob")
    private Date dateOfBirth;

    @Column(name="email")
    private String email;

    @Column(name="contact_number")
    private String contactNumber;

    @Column(name="gender")
    private String gender;

    @Column(name="mentoring_reason")
    private String mentoringReason;

    @Column(name="location")
    private String location;

    @Column(name="english_level")
    private String englishLevel;

    @Column(name="languages_spoken")
    private List<String> languagesSpoken;

    @Column(name="availability")
    private List<String> availability;

    public Mentor(String firstName, String lastName, Date dateOfBirth, String email, String contactNumber, String gender, String mentoringReason, String location, String englishLevel, List<String> languagesSpoken, List<String> availability) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
        this.contactNumber = contactNumber;
        this.gender = gender;
        this.mentoringReason = mentoringReason;
        this.location = location;
        this.englishLevel = englishLevel;
        this.languagesSpoken = languagesSpoken;
        this.availability = availability;
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

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
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

    public String getMentoringReason() {
        return mentoringReason;
    }

    public void setMentoringReason(String mentoringReason) {
        this.mentoringReason = mentoringReason;
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

    public void setLanguagesSpoken(List<String> languagesSpoken) {
        this.languagesSpoken = languagesSpoken;
    }

    public List<String> getAvailability() {
        return availability;
    }

    public void setAvailability(List<String> availability) {
        this.availability = availability;
    }
}
