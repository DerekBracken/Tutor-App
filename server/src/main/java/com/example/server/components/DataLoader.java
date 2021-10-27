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
    private ArrayList<String> englishLevel2;
    private ArrayList<String> englishLevel3;
    private ArrayList<String> englishLevel4;
    private ArrayList<String> englishLevel5;
    private ArrayList<String> englishLevel6;
    private ArrayList<String> languagesSpoken;
    private ArrayList<String> languagesSpoken2;
    private ArrayList<String> languagesSpoken3;
    private ArrayList<String> availability;
    private ArrayList<String> availability2;
    private ArrayList<String> availability3;
    private ArrayList<String> availability4;
    private ArrayList<String> availability5;
    private ArrayList<String> availability6;
//    private String date1;
//    private String date2;
//    private String date3;
//    private String date4;

    //MP: I'M NOT SURE WHY WE HAVE TWO DATA LOADERS? LINE 20 AND LINE 40?
    public DataLoader (){
        //NEED TO FLESH OUT LANGUAGES SPOKEN AND ENGLISH LEVEL TO ADD THINGS TO IT
        this.englishLevel = new ArrayList();
        this.englishLevel2 = new ArrayList();
        this.englishLevel3 = new ArrayList();
        this.englishLevel4 = new ArrayList();
        this.englishLevel5 = new ArrayList();
        this.englishLevel6 = new ArrayList();
        this.languagesSpoken = new ArrayList();
        this.languagesSpoken2 = new ArrayList();
        this.languagesSpoken3 = new ArrayList();
        this.availability = new ArrayList();
        this.availability2 = new ArrayList();
        this.availability3 = new ArrayList();
        this.availability4 = new ArrayList();
        this.availability5 = new ArrayList();
        this.availability6 = new ArrayList();
    }

    public void run(ApplicationArguments args){
        languagesSpoken.add("English");
        languagesSpoken.add("Polish");
        languagesSpoken.add("Bulgarian");

        languagesSpoken2.add("English");
        languagesSpoken2.add("French");
        languagesSpoken2.add("German");

        languagesSpoken3.add("English");
        languagesSpoken3.add("Spanish");
        languagesSpoken3.add("Polish");

        availability.add("Monday-Friday Daytime");
        availability.add("Weekend Daytime");
        availability.add("Weekend Evening");

        availability2.add("Monday-Friday Evening");
        availability2.add("Weekend Daytime");

        availability3.add("Monday-Friday Daytime");
        availability3.add("Weekend Evening");

        availability4.add("Weekend Daytime");
        availability4.add("Weekend Evening");

        availability5.add("Monday-Friday Daytime");
        availability5.add("Weekend Daytime");

        availability6.add("Monday-Friday Daytime");
        availability6.add("Monday-Friday Evening");

        englishLevel.add("Beginner");
        englishLevel.add("Elementary");
        englishLevel.add("Pre-Intermediate");
        englishLevel.add("Intermediate");
        englishLevel.add("Upper-Intermediate");
        englishLevel.add("Advanced");

        englishLevel2.add("Beginner");
        englishLevel2.add("Elementary");
        englishLevel2.add("Upper-Intermediate");

        englishLevel3.add("Beginner");
        englishLevel3.add("Elementary");

        englishLevel4.add("Beginner");
        englishLevel4.add("Elementary");
        englishLevel4.add("Pre-Intermediate");
        englishLevel4.add("Intermediate");

        englishLevel5.add("Beginner");
        englishLevel5.add("Elementary");
        englishLevel5.add("Pre-Intermediate");
        englishLevel5.add("Intermediate");

        englishLevel6.add("Intermediate");
        englishLevel6.add("Upper-Intermediate");
        englishLevel6.add("Advanced");



        //Saving Instances of MENTEES

        Mentee duncan = new Mentee("duncan", "Hollywood", "010101", "dsoutter@hotmail.co.uk", "0857107119", "male", "Hi", "Edinburgh", "Beginner", languagesSpoken, availability);
        menteeRepository.save(duncan);
      
        Mentee derek = new Mentee("Derek", "Bracken", "01-09-1987", "derekbracken@gmail.com", "07951357317", "male", "Want to learn", "Edinburgh", "Beginner", languagesSpoken, availability);
        menteeRepository.save(derek);

        Mentee sean = new Mentee("Sean", "Hollywood", "010101", "sofiaakbar@hotmail.co.uk", "0857107119", "male", "Hi", "Edinburgh", "Beginner", languagesSpoken, availability);

        menteeRepository.save(sean);

        Mentee maggie = new Mentee("Maggie", "Pent", "090908", "m.pen@hotmail.com", "07987 654 343", "female", "I like cats","Edinburgh", "Pre-Intermediate", languagesSpoken, availability);
        menteeRepository.save(maggie);

        Mentee kelly = new Mentee("Kelly", "Kapour", "09097", "k.capour@hotmail.com", "098989 65678","female", "I'm really smart you guys", "Dundee", "Advanced", languagesSpoken, availability);
        menteeRepository.save(kelly);

        Mentee dwight = new Mentee("Dwight", "Shrute", "98780", "dksmaster@hotmail.com", "0131 09083735", "male", "Getting told 'Don't me an idiot' changed my life", "Intermediate", "Pre-Intermediate", languagesSpoken, availability);
        menteeRepository.save(dwight);

        Mentee daryl = new Mentee("Daryl", "Foula", "98796", "daryl@gmail.com", "099080 83735", "male", "I'm a mystery of a person", "Glasgow", "Upper-Intermediate", languagesSpoken, availability);
        menteeRepository.save(daryl);

        Mentee pam = new Mentee("Pam", "Halpert", "8787", "pammy@aol.com", "09728 3735", "female", "I don't care what they say about me, I just want to eat.", "Edinburgh", "Upper-Intermediate", languagesSpoken, availability);
        menteeRepository.save(pam);

        Mentee michael = new Mentee("Michael", "Scarn", "09098", "mscarn@hotmail.com", "098797 3735", "male", "I love inside jokes. I hope to be a part of one someday.", "Glasgow", "Beginner", languagesSpoken, availability);
        menteeRepository.save(michael);

        //Saving instances of MENTORS
        Mentor kat = new Mentor("Kathryn", "McVitie", "1987-06-01", "kathrynmcvitie@yahoo.co.uk", "085148 8103", "female", "I want to help people improve their English skills.", "Edinburgh", englishLevel, languagesSpoken, availability);
        mentorRepository.save(kat);

        Mentor johnny = new Mentor("John", "Johnson", "1984-06-01", "johny@gmail.com", "0098 989 89", "male", "I want to share my language skills with others.", "Dundee", englishLevel2, languagesSpoken2, availability2);
        mentorRepository.save(johnny);

        Mentor roosa = new Mentor("Roosa", "Roserry", "1983-06-01", "roosa@gmail.com", "0892384 792", "female", "I enjoy teaching people.", "Edinburgh", englishLevel3, languagesSpoken3, availability3);
        mentorRepository.save(roosa);

        Mentor hannah = new Mentor("Hannah", "Hannerson", "1981-06-01", "hanna@gmail.com", "08873 6478", "female", "I like helping people and get a good feeling from doing it.", "Glasgow", englishLevel4, languagesSpoken, availability4);
        mentorRepository.save(hannah);

        Mentor colin = new Mentor( "Colin", "Colington", "1989-06-01", "colin@teach.com","01826 3543 947", "male", "Good opportunity to meet new people", "Inverness", englishLevel5, languagesSpoken2, availability5);
        mentorRepository.save(colin);

        Mentor duncanM = new Mentor("Duncan", "SoutterMentor", "1993-01-04", "duncan.soutter@gmail.com", "0921323 988", "male", "To teach people to learn English and help them get a job.", "Aberdeen", englishLevel6, languagesSpoken3, availability6);
        mentorRepository.save(duncanM);

        Mentor dirk = new Mentor("Dirk", "Birkenstock", "1950-03-01", "dirkbirk@yahoo.co.uk", "0851 488 103", "male", "I am looking for a new challenge and think I can make a difference", "Stirling", englishLevel, languagesSpoken, availability);
        mentorRepository.save(dirk);

        Mentor sally = new Mentor("Sally", "Rally", "1930-03-01", "sallyrally@gmail.com", "0098 98 989", "female", "For a new fun challenge and to see the smiles on peoples faces learning English.", "Edinburgh", englishLevel2, languagesSpoken2, availability2);
        mentorRepository.save(sally);

        Mentor helen = new Mentor("Helen", "Melon", "1960-09-10", "helenmelon@gmail.com", "08923 847 92", "female", "I am not overly sure but got told to do it by a friend...", "Edinburgh", englishLevel3, languagesSpoken3, availability3);
        mentorRepository.save(helen);

        Mentor george = new Mentor("Georgie", "Porgie", "2000-06-07", "georgiepor@gmail.com", "0889 736 478", "male", "I like helping people and get a good feeling from doing it.", "Glasgow", englishLevel4, languagesSpoken, availability4);
        mentorRepository.save(george);

        Mentor humpty = new Mentor( "Humpty", "Dumpty", "1980-03-01", "humptydump@teach.com","01826 3543 94", "female", "Through the use of nursery rhymes I want to teach some people English.", "Dundee", englishLevel5, languagesSpoken2, availability5);
        mentorRepository.save(humpty);

        Mentor shrek = new Mentor("Shrek", "Ogre", "1998-03-04", "shrekogre@gmail.com", "0921 3237 732", "male", "To make some new friends, no one likes Ogres...", "Edinburgh", englishLevel6, languagesSpoken3, availability6);
        mentorRepository.save(shrek);

        //        Date and time - THESE DON"T WORK
        String meeting1date = "2021-02-01";
        String meeting2date = "2021-05-02";
        String meeting3date = "2021-06-04";
        String meeting4date = "2021-07-09";
        String meeting5date = "2021-08-11";
        String meeting6date = "2021-9-10";
//
        String meeting1time = "09:30";
        String meeting2time = "17:30";
        String meeting3time = "19:00";
        String meeting4time = "13:30";

        //MEETINGS - NEED NEW DATE AND TIME INSTANCES TO CONFIRM IT WORKS
        Meeting meeting1 = new Meeting(meeting1date, meeting1time, " Notes: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum fermentum orci, a fringilla lorem vulputate sit amet. Aliquam consequat vitae purus nec mattis.  ", "www", johnny, sean);
        meetingRepository.save(meeting1);

        Meeting meeting2 = new Meeting(meeting2date, meeting2time, "Notes: Aliquam non lectus nec velit dapibus volutpat. Suspendisse vitae est a quam efficitur fringilla id non lacus.", "www", roosa, maggie);
        meetingRepository.save(meeting2);

        Meeting meeting3 = new Meeting(meeting3date, meeting3time, "Notes: Aliquam non tempor erat. Orci varius natoque penatibus.", "www",  colin, kelly);
        meetingRepository.save(meeting3);

        Meeting meeting4 = new Meeting(meeting4date, meeting4time, "Notes: Vivamus vel egestas ligula, vel feugiat libero. ", "www", hannah, michael);
        meetingRepository.save(meeting4);

        Meeting meeting5 = new Meeting(meeting1date, meeting1time, "Notes: Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", "https://github.com/", duncanM, dwight);
        meetingRepository.save(meeting5);

        Meeting meeting6 = new Meeting(meeting2date, meeting2time, "Notes: Aliquam non tempor erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", "https://github.com/", duncanM, dwight);
        meetingRepository.save(meeting6);

        Meeting meeting7 = new Meeting(meeting3date, meeting3time, "Notes:Nulla a dignissim lectus. Sed gravida iaculis malesuada. Fusce ullamcorper consectetur quam, vel pulvinar diam sagittis at. Sed ac dui quis lacus imperdiet tincidunt. ", "https://github.com/",  duncanM, daryl);
        meetingRepository.save(meeting7);

        Meeting meeting8 = new Meeting(meeting4date, meeting4time, "Notes: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum fermentum orci, a fringilla lorem vulputate sit amet. Aliquam consequat vitae purus nec mattis. ", "https://github.com/", duncanM, maggie);
        meetingRepository.save(meeting8);

        Meeting meeting9 = new Meeting(meeting5date, meeting3time, "Notes: Nulla a dignissim lectus. Sed gravida iaculis malesuada. Fusce ullamcorper consectetur quam, vel pulvinar diam sagittis at. Sed ac dui quis lacus imperdiet tincidunt. ", "https://github.com/", duncanM, dwight);
        meetingRepository.save(meeting9);

        Meeting meeting10 = new Meeting(meeting6date, meeting4time, "Notes: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum fermentum orci, a fringilla lorem vulputate sit amet. Aliquam consequat vitae purus nec mattis. ", "https://github.com/", duncanM, maggie);
        meetingRepository.save(meeting10);

        dwight.setMentor(duncanM);
        pam.setMentor(johnny);
        daryl.setMentor(duncanM);
        kelly.setMentor(hannah);
        maggie.setMentor(duncanM);

        menteeRepository.save(dwight);
        menteeRepository.save(pam);
        menteeRepository.save(daryl);
        menteeRepository.save(kelly);
        menteeRepository.save(maggie);
        mentorRepository.save(duncanM);

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
