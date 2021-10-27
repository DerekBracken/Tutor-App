package com.example.server.repositories;

import com.example.server.models.Mentee;
import com.example.server.models.Mentor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MentorRepository extends JpaRepository<Mentor, Long> {

    Mentor findByEmail(String email);

//    List<Mentor> findByOrderBySuitabilityScoreDesc(Long id);
}
