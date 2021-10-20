package com.example.server.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
@Table(name="availabilities")
public class Availabilty {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonBackReference
    @ManyToMany
    @JoinTable(
            name = "avalabilities_mentors",
            joinColumns = {@JoinColumn(name="mentor_id", nullable = false,updatable = false)},
            inverseJoinColumns = {@JoinColumn(name="availability_id", nullable = false,updatable = false)}
    )
    private String availability;

    public Availabilty(String availability) {
        this.availability = availability;
    }

    public Availabilty() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAvailability() {
        return availability;
    }

    public void setAvailability(String availability) {
        this.availability = availability;
    }
}
