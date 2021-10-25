package com.example.server.components;

import com.example.server.models.*;
import com.example.server.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.sql.Time;
import java.util.Date;
import java.time.LocalDate;
import java.util.ArrayList;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    MeetingRepository meetingRepository;

    @Autowired
    MentorRepository mentorRepository;

    @Autowired
    MenteeRepository menteeRepository;

//    @Autowired
//    AvailabilityRepository availabilityRepository;

//    @Autowired
//    EnglishLevelRepository englishLevelRepository;

    private ArrayList<String> englishLevel;
    private ArrayList<String> languagesSpoken;
    private ArrayList<String> availability;
//    private String date1;
//    private String date2;
//    private String date3;
//    private String date4;

    //MP: I'M NOT SURE WHY WE HAVE TWO DATA LOADERS? LINE 20 AND LINE 40?
    public DataLoader (){
        //NEED TO FLESH OUT LANGUAGES SPOKEN AND ENGLISH LEVEL TO ADD THINGS TO IT
        this.englishLevel = new ArrayList();
        this.languagesSpoken = new ArrayList();
        this.availability = new ArrayList();
    }

    public void run(ApplicationArguments args){
        languagesSpoken.add("English");
        languagesSpoken.add("Polish");
        languagesSpoken.add("Bulgarian");
        availability.add("Monday-Friday Daytime");
        availability.add("Weekend Daytime");
        availability.add("Weekend Evening");
        englishLevel.add("Beginner");
        englishLevel.add("Elementary");
        englishLevel.add("Pre-Intermediate");
        englishLevel.add("Intermediate");

        //Saving Instances of MENTEES

        Mentee duncan = new Mentee("duncan", "Hollywood", "010101", "dsoutter@hotmail.co.uk", "0857107119", "male", "Hi", "Edinburgh", "Beginner", languagesSpoken, availability);
        menteeRepository.save(duncan);
      
        Mentee derek = new Mentee("Derek", "Bracken", "01-09-1987", "derekbracken@gmail.com", "07951357317", "male", "Want to learn", "Edinburgh", "Beginner", languagesSpoken, availability);
        menteeRepository.save(derek);

        Mentee sean = new Mentee("Sean", "Hollywood", "010101", "seanh@gmail.com", "0857107119", "male", "Hi", "Edinburgh", "Beginner", languagesSpoken, availability);

        menteeRepository.save(sean);

        Mentee maggie = new Mentee("Maggie", "Pent", "090908", "m.pen@hotmail.com", "07987 654 343", "female", "I like cats","Edinburgh", "Pre-Intermediate", languagesSpoken, availability);
        menteeRepository.save(maggie);

        Mentee kelly = new Mentee("Kelly", "Kapour", "09097", "k.capour@hotmail.com", "098989 65678","female", "I'm really smart you guys", "Dundee", "Advanced", languagesSpoken, availability);
        menteeRepository.save(kelly);

        Mentee dwight = new Mentee("Dwight", "Shrute", "98780", "dksmaster@hotmail.com", "0131 09083735", "male", "Getting told 'Don't me an idiot' changed my life", "Intermediate", "high", languagesSpoken, availability);
        menteeRepository.save(dwight);

        Mentee daryl = new Mentee("Daryl", "Foula", "98796", "daryl@gmail.com", "09908083735", "male", "I'm a mystery of a person", "Glasgow", "Upper-Intermediate", languagesSpoken, availability);
        menteeRepository.save(daryl);

        Mentee pam = new Mentee("Pam", "Halpert", "8787", "pammy@aol.com", "097283735", "female", "I don't care what they say about me, I just want to eat.", "Edinburgh", "Upper-Intermediate", languagesSpoken, availability);
        menteeRepository.save(pam);

        Mentee michael = new Mentee("Michael", "Scarn", "09098", "mscarn@hotmail.com", "0987973735", "male", "I love inside jokes. I hope to be a part of one someday.", "Glasgow", "Beginner", languagesSpoken, availability);
        menteeRepository.save(michael);

        //Saving instances of MENTORS
        Mentor kat = new Mentor("Kathryn", "McVitie", "1987-06-01", "kathrynmcvitie@yahoo.co.uk", "0851488103", "female", "want to help", "Edinburgh", englishLevel, languagesSpoken, availability);
        mentorRepository.save(kat);

        Mentor johnny = new Mentor("John", "Johnson", "9090", "johny@gmail.com", "009898989", "male", "want to help", "Edinburgh", englishLevel, languagesSpoken, availability);
        mentorRepository.save(johnny);

        Mentor roosa = new Mentor("Roosa", "Roserry", "111", "roosa@gmail.com", "0892384792", "female", "I enjoy teaching", "Edinbrugh", englishLevel, languagesSpoken, availability);
        mentorRepository.save(roosa);

        Mentor hannah = new Mentor("Hannah", "Hannerson", "2767", "hanna@gmail.com", "088736478", "female", "I like helping people", "Glasgow", englishLevel, languagesSpoken, availability);
        mentorRepository.save(hannah);

        Mentor colin = new Mentor( "Colin", "Colington", "65765", "colin@teach.com","018263543947", "male", "Good opertunity to meet new people", "Dundee", englishLevel, languagesSpoken, availability);
        mentorRepository.save(colin);

//        Date and time - THESE DON"T WORK
        String meeting1date = "2021-2-1";
        String meeting2date = "2021-5-2";
        String meeting3date = "2021-3-4";
        String meeting4date = "2021-1-1";
//
        String meeting1time = "9:30";
        String meeting2time = "17:30";
        String meeting3time = "19:00";
        String meeting4time = "13:30";

        //MEETINGS - NEED NEW DATE AND TIME INSTANCES TO CONFIRM IT WORKS
        Meeting meeting1 = new Meeting(meeting1date, meeting1time, "these are notes", "www", johnny, sean);
        meetingRepository.save(meeting1);

        Meeting meeting2 = new Meeting(meeting2date, meeting2time, "these are notes", "www", roosa, maggie);
        meetingRepository.save(meeting2);

        Meeting meeting3 = new Meeting(meeting3date, meeting3time, "these are notes", "www",  colin, kelly);
        meetingRepository.save(meeting3);

        Meeting meeting4 = new Meeting(meeting4date, meeting4time, "these are notes", "www", hannah, michael);
        meetingRepository.save(meeting4);

        dwight.setMentor(johnny);
        pam.setMentor(johnny);
        daryl.setMentor(johnny);
        kelly.setMentor(hannah);
        maggie.setMentor(colin);

        menteeRepository.save(dwight);
        menteeRepository.save(pam);
        menteeRepository.save(daryl);
        menteeRepository.save(kelly);
        menteeRepository.save(maggie);
        //Saving Instances of AVAILABILITY
//        Availabilty one = new Availabilty("Monday-Friday Daytime");
//        availability.add(one);
//        availabilityRepository.save(one);
//
//        Availabilty two = new Availabilty("Monday-Friday Evening");
//        availability.add(two);
//        availabilityRepository.save(two);
//
//        Availabilty three = new Availabilty("Weekend Daytime");
//        availability.add(three);
//        availabilityRepository.save(three);
//
//        Availabilty four = new Availabilty("Weekend Evening");
//        availability.add(four);
//        availabilityRepository.save(four);

        //Saving Instances of ENGLISH LEVEL //Beginner, Elementary, Pre-Intermediate, Intermediate, Upper-Intermediate, Advanced
//        EnglishLevel beginner = new EnglishLevel("Beginner");
//        englishLevel.add(beginner);
//        englishLevelRepository.save(beginner);
//
//        EnglishLevel elementary = new EnglishLevel("Elementary");
//        englishLevel.add(elementary);
//        englishLevelRepository.save(elementary);
//
//        EnglishLevel preIntermediate = new EnglishLevel("Pre-Intermediate");
//        englishLevel.add(preIntermediate);
//        englishLevelRepository.save(preIntermediate);
//
//        EnglishLevel intermediate = new EnglishLevel("Intermediate");
//        englishLevel.add(intermediate);
//        englishLevelRepository.save(intermediate);
//
//        EnglishLevel upperIntermediate = new EnglishLevel("Upper-Intermediate");
//        englishLevel.add(upperIntermediate);
//        englishLevelRepository.save(upperIntermediate);
//
//        EnglishLevel advanced = new EnglishLevel("Advanced");
//        englishLevel.add(advanced);
//        englishLevelRepository.save(advanced);

        //Saving mentor's ENGLISH LEVEL
//        johnny.addEnglishLevel(beginner);
//        roosa.addEnglishLevel(beginner);
//        roosa.addEnglishLevel(intermediate);
//        roosa.addEnglishLevel(preIntermediate);
//        roosa.addEnglishLevel(advanced);
//        hannah.addEnglishLevel(intermediate);
//        hannah.addEnglishLevel(upperIntermediate);
//        hannah.addEnglishLevel(advanced);
//        colin.addEnglishLevel(beginner);
//        colin.addEnglishLevel(elementary);
//        colin.addEnglishLevel(preIntermediate);
//        colin.addEnglishLevel(intermediate);
//        colin.addEnglishLevel(upperIntermediate);
//        colin.addEnglishLevel(advanced);

        //Saving Mentor's AVAILABILITY
//        johnny.addAvailability(one);
//        johnny.addAvailability(two);
//        johnny.addAvailability(three);
//        mentorRepository.save(johnny);
//        roosa.addAvailability(four);
//        roosa.addAvailability(one);
//        mentorRepository.save(roosa);
//        hannah.addAvailability(three);
//        hannah.addAvailability(one);
//        hannah.addAvailability(two);
//        mentorRepository.save(hannah);
//        colin.addAvailability(one);
//        mentorRepository.save(colin);

//        //Saving Mentee's Availability
//        sean.addAvailability(one);
//        menteeRepository.save(sean);
//        maggie.addAvailability(two);
//        maggie.addAvailability(three);
//        maggie.addAvailability(four);
//        menteeRepository.save(maggie);
//        kelly.addAvailability(four);
//        menteeRepository.save(kelly);
//        dwight.addAvailability(one);
//        dwight.addAvailability(two);
//        dwight.addAvailability(three);
//        dwight.addAvailability(four);
//        menteeRepository.save(dwight);
//        pam.addAvailability(two);
//        pam.addAvailability(one);
//        menteeRepository.save(pam);
//        michael.addAvailability(one);
//        michael.addAvailability(four);
//        menteeRepository.save(michael);
    }
}
