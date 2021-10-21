package com.example.server.repositories;

import com.example.server.models.EnglishLevel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EnglishLevelRepository extends JpaRepository<EnglishLevel, Long> {

    List<EnglishLevel> findByMentors_id(Long id);
}
