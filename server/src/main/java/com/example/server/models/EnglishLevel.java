package com.example.server.models;

import javax.persistence.*;

@Entity
@Table(name="englishLevels")
public class EnglishLevel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="englishLevel")
    private String englishLevel;

    public EnglishLevel(String englishLevel) {
        this.englishLevel = englishLevel;
    }

    public EnglishLevel() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEnglishLevel() {
        return englishLevel;
    }

    public void setEnglishLevel(String englishLevel) {
        this.englishLevel = englishLevel;
    }
}
