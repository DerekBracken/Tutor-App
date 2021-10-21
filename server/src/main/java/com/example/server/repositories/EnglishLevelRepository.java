package com.example.server.repositories;

import com.example.server.models.EnglishLevel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EnglishLevelRepository extends JpaRepository<EnglishLevel, Long> {
}
