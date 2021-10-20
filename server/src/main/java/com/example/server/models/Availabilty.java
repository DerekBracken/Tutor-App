package com.example.server.models;

import javax.persistence.*;

@Entity
@Table(name="availabilities")
public class Availabilty {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY);
    private Long id;

    @ManyToMany
    @JoinColumn(name="mentor_id")
    private String time;

    

}
