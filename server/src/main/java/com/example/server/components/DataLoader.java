package com.example.server.components;

import com.example.server.models.Availabilty;
import com.example.server.models.Meeting;
import com.example.server.models.Mentee;
import com.example.server.models.Mentor;
import com.example.server.repositories.AvailbilityRepository;
import com.example.server.repositories.MeetingRepository;
import com.example.server.repositories.MenteeRepository;
import com.example.server.repositories.MentorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.sql.Time;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    MeetingRepository meetingRepository;

    @Autowired
    MentorRepository mentorRepository;

    @Autowired
    MenteeRepository menteeRepository;

    @Autowired
    AvailbilityRepository availbilityRepository;

    private ArrayList<String> englishLevel;
    private ArrayList<String> languagesSpoken;
    private ArrayList<Availabilty> availability;
    private LocalDate date1;
    private LocalDate date2;
    private LocalDate date3;
    private LocalDate date4;

    //MP: I'M NOT SURE WHY WE HAVE TWO DATA LOADERS? LINE 20 AND LINE 40?
    public DataLoader (){
        //NEED TO FLESH OUT LANGUAGES SPOKEN AND ENGLISH LEVEL TO ADD THINGS TO IT
        this.englishLevel = new ArrayList();
        this.languagesSpoken = new ArrayList();
        this.availability = new ArrayList();
        this.date1 = LocalDate.of(1987, 9, 1);
        this.date2 = LocalDate.of(2005, 5, 1);
        this.date3 = LocalDate.of(1992, 9, 1);
        this.date4 = LocalDate.of(1964, 9, 1);
    }

    public void run(ApplicationArguments args){

        englishLevel.add("mid");
        languagesSpoken.add("English");

        //Availability add
        Availabilty one = new Availabilty("Monday-Friday Daytime");
        availbilityRepository.save(one);
        availability.add(one);

        Availabilty two = new Availabilty("Monday-Friday Evening");
        availbilityRepository.save(two);
        availability.add(two);

        Availabilty three = new Availabilty("Weekend Daytime");
        availbilityRepository.save(three);
        availability.add(three);

        Availabilty four = new Availabilty("Weekend Evening");
        availbilityRepository.save(four);
        availability.add(four);


        //Mentees
//        Mentee sean = new Mentee("Sean", "Hollywood", date1, "seanh@gmail.com", "0857107119", "male", "Hi", "Edinburgh", "mid", languagesSpoken, "availability");
//        menteeRepository.save(sean);
//
//        Mentee maggie = new Mentee("Maggie", "Pent",date2, "m.pen@hotmail.com", "07987 654 343", "female", "I like cats","Edinburgh", "low", languagesSpoken, "availability");
//        menteeRepository.save(maggie);
//
//        Mentee kelly = new Mentee("Kelly", "Kapour", date3, "k.capour@hotmail.com", "098989 65678","female", "I'm really smart you guys", "Dundee", "high", languagesSpoken, availability);
//        menteeRepository.save(kelly);
//
//        Mentee dwight = new Mentee("Dwight", "Shrute", date4, "dksmaster@hotmail.com", "0131 09083735", "male", "Getting told 'Don't me an idiot' changed my life", "Glasgow", "high", languagesSpoken, availability);
//        menteeRepository.save(dwight);
//
//        Mentee daryl = new Mentee("Daryl", "Foula", date3, "daryl@gmail.com", "09908083735", "male", "I'm a mystery of a person", "Glasgow", "low", languagesSpoken, availability);
//        menteeRepository.save(daryl);
//
//        Mentee pam = new Mentee("Pam", "Halpert", date1, "pammy@aol.com", "097283735", "female", "I don't care what they say about me, I just want to eat.", "Edinburgh", "med", languagesSpoken, availability);
//        menteeRepository.save(pam);
//
//        Mentee michael = new Mentee("Michael", "Scarn", date1, "mscarn@hotmail.com", "0987973735", "male", "I love inside jokes. I hope to be a part of one someday.", "Glasgow", "low", languagesSpoken, availability);
//        menteeRepository.save(michael);

//      //Mentors
        Mentor johnny = new Mentor("John", "Flinn", date1, "johny@gmail.com", "009898989", "male", "want to help", "Edinburgh", englishLevel, languagesSpoken);
        mentorRepository.save(johnny);
        johnny.addAvailability(one);
        johnny.addAvailability(two);
        johnny.addAvailability(three);

        Mentor roosa = new Mentor("Roosa", "Roserry", date3, "roosa@gmail.com", "0892384792", "female", "I enjoy teaching", "Edinbrugh", englishLevel,  languagesSpoken);
        mentorRepository.save(roosa);
        roosa.addAvailability(four);
        roosa.addAvailability(one);

        Mentor hannah = new Mentor("Hannah", "Hannerson", date1, "hanna@gmail.com", "088736478", "female", "I like helping people", "Glasgow", englishLevel, languagesSpoken);
        mentorRepository.save(hannah);
        hannah.addAvailability(three);
        hannah.addAvailability(one);
        hannah.addAvailability(two);

        Mentor colin = new Mentor( "Colin", "Colington", date2, "colin@teach.com","018263543947", "male", "Good opertunity to meet new people", "Dundee", englishLevel, languagesSpoken);
        mentorRepository.save(colin);
        colin.addAvailability(one);

        //Date and time
        Date meeting1date = new Date(2021-2-1);
        Date meeting2date = new Date(2021-5-2);
        Date meeting3date = new Date(2021-3-4);
        Date meeting4date = new Date(2021-1-1);

        Time meeting1time = new Time(9-30);
        Time meeting2time = new Time(17-30);
        Time meeting3time = new Time(19);
        Time meeting4time = new Time(13-30);

        //Time
//        Meeting meeting1 = new Meeting(meeting1date, meeting1time, "these are notes", "www", johnny, sean);
//        meetingRepository.save(meeting1);
//
//        Meeting meeting2 = new Meeting(meeting2date, meeting2time, "these are notes", "www", roosa, maggie);
//        meetingRepository.save(meeting2);
//
//        Meeting meeting3 = new Meeting(meeting3date, meeting3time, "these are notes", "www",  colin, kelly);
//        meetingRepository.save(meeting3);
//
//        Meeting meeting4 = new Meeting(meeting4date, meeting4time, "these are notes", "www", hannah, michael);
//        meetingRepository.save(meeting4);

    }
}
