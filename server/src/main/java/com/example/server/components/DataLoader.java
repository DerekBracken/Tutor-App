package com.example.server.components;

import com.example.server.models.Meeting;
import com.example.server.models.Mentee;
import com.example.server.models.Mentor;
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

    private ArrayList<String> englishLevel;
    private ArrayList<String> languagesSpoken;
    private ArrayList<String> availability;
    private LocalDate date1;
    private LocalDate date2;
    private LocalDate date3;
    private LocalDate date4;

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
        availability.add("Saturday");

        //Mentees
        Mentee sean = new Mentee("Sean", "Hollywood", date1, "seanh@gmail.com", "0857107119", "male", "Hi", "Edinburgh", "mid", languagesSpoken, availability);
        menteeRepository.save(sean);

        Mentee maggie = new Mentee("Maggie", "Pent",date2, "m.pen@hotmail.com", "07987 654 343", "female", "I like cats","Edinburgh", "low", languagesSpoken, availability);
        menteeRepository.save(maggie);

        Mentee kelly = new Mentee("Kelly", "Kapour", date3, "k.capour@hotmail.com", "098989 65678","female", "I'm really smart you guys", "Dundee", "high", languagesSpoken, availability);
        menteeRepository.save(kelly);

        Mentee dwight = new Mentee("Dwight", "Shrute", date4, "dksmaster@hotmail.com", "0131 09083735", "male", "Getting told 'Don't me an idiot' changed my life", "Glasgow", "high", languagesSpoken, availability);
        menteeRepository.save(dwight);

        Mentee daryl = new Mentee("Daryl", "Foula", date3, "daryl@gmail.com", "09908083735", "male", "I'm a mystery of a person", "Glasgow", "low", languagesSpoken, availability);
        menteeRepository.save(daryl);

        Mentee pam = new Mentee("Pam", "Halpert", date1, "pammy@aol.com", "097283735", "female", "I don't care what they say about me, I just want to eat.", "Edinburgh", "med", languagesSpoken, availability);
        menteeRepository.save(pam);

        Mentee michael = new Mentee("Michael", "Scarn", date1, "mscarn@hotmail.com", "0987973735", "male", "I love inside jokes. I hope to be a part of one someday.", "Glasgow", "low", languagesSpoken, availability);
        menteeRepository.save(michael);

//      //Mentors
        Mentor johnny = new Mentor("John", "Flinn", date1, "email", "09", "male", "want to help", "Dublin", englishLevel, languagesSpoken);
        mentorRepository.save(johnny);

        Mentor roosa = new Mentor("Roose", );
        mentorRepository.save(roosa);

        Mentor hannah = new Mentor();
        mentorRepository.save(hannah);

        Mentor colin = new Mentor();
        mentorRepository.save(colin);

        //Date and time
        Date meeting1date = new Date(2021-02-01);
        Date meeting2date = new Date(2021-05-02);
        Date meeting3date = new Date(2021-03-04);
        Date meeting4date = new Date(2021-01-01);

        Time meeting1time = new Time(09-30-00-00);
        Time meeting2time = new Time(17-30-00-00);
        Time meeting3time = new Time(19-00-00-00);
        Time meeting4time = new Time(13-30-00-00);

        //Time
        Meeting meeting1 = new Meeting(meeting1date, meeting1time, "these are notes", "www", johnny, sean);
        meetingRepository.save(meeting1);

        Meeting meeting2 = new Meeting(meeting2date, meeting2time, "these are notes", "www", maggie, roosa);
        meetingRepository.save(meeting1);

        
    }
}
