package com.example.server.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.*;
import java.sql.Time;
import java.util.Date;

@Entity
@Table(name="meetings")
public class Meeting {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="date")
    private String date;

    @Column(name="time")
    private String time;

    @Column(name="notes")
    private String notes;

    @Column(name="meeting_link")
    private String meetingLink;

    @JsonIgnoreProperties({"meeting"})
    @ManyToOne
    @JoinColumn(name= "mentor_id", nullable = false)
    private Mentor mentor;

    @JsonIgnoreProperties({"meeting"})
    @ManyToOne
    @JoinColumn(name= "mentee_id", nullable = false)
    private Mentee mentee;

    public Meeting(String date, String time, String notes, String meetingLink, Mentor mentor, Mentee mentee) {
        this.date = date;
        this.time = time;
        this.notes = notes;
        this.meetingLink = meetingLink;
        this.mentor = mentor;
        this.mentee = mentee;
    }

    public Meeting() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public String getMeetingLink() {
        return meetingLink;
    }

    public void setMeetingLink(String meetingLink) {
        this.meetingLink = meetingLink;
    }

    public Mentor getMentor() {
        return mentor;
    }

    public void setMentor(Mentor mentor) {
        this.mentor = mentor;
    }

    public Mentee getMentee() {
        return mentee;
    }

    public void setMentee(Mentee mentee) {
        this.mentee = mentee;
    }
}
