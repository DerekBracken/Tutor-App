package com.example.server.models;

import java.util.ArrayList;

public class Preferences {

    private Mentee mentee;
    private ArrayList<Mentor> mentors;

    public Preferences(Mentee mentee, ArrayList<Mentor> mentors) {
        this.mentee = mentee;
        this.mentors = mentors;
    }

    public Mentee getMentee() {
        return mentee;
    }

    public void setMentee(Mentee mentee) {
        this.mentee = mentee;
    }

    public ArrayList<Mentor> getMentors() {
        return mentors;
    }

    public void setMentors(ArrayList<Mentor> mentors) {
        this.mentors = mentors;
    }

    public void locationScore(){
        for (Mentor mentor : mentors) {
            if (mentor.getLocation().equals(mentee.getLocation())) {
                mentor.increaseSuitabilityScore(mentee.getLocationWeighting());
            }
        }
    }

    public void teachingScore(){
    for (Mentor mentor : mentors){
        if (mentor.getTeachingLevel().contains(mentee.getEnglishLevel())){
            mentor.increaseSuitabilityScore(5);
        }
    }
    }

    public void languagesScore(){
    for (Mentor mentor : mentors){
        for (String language: mentee.getLanguagesSpoken()){
        if (mentor.getLanguagesSpoken().contains(language)){
            mentor.increaseSuitabilityScore(mentee.getLanguagesWeighting());
        }}
    }
    }

    public void genderScore(){
    for (Mentor mentor: mentors) {
        if (mentor.getGender().equals(mentee.getGenderPref()) || mentee.getGenderPref().equals("No preference")){
            mentor.increaseSuitabilityScore(mentee.getGenderWeight());
        }
    }
    }

    public void availabilityScore(){
    for (int i=0; i<mentee.getAvailability().size(); i++){
        for (Mentor mentor: mentors){
            if (mentor.getAvailability().contains(mentee.getAvailability().get(i))){
                mentor.increaseSuitabilityScore(5);
            }
        }
    }
    }

    public void getTotalScores(){
        locationScore();
        teachingScore();
        languagesScore();
        genderScore();
        availabilityScore();
    }

//    public void sortMentors(){
//        for (Mentor mentor: mentors){
//
//        }
//    }
}
