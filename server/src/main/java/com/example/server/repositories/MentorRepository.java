package com.example.server.repositories;

import com.example.server.models.Mentor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MentorRepository extends JpaRepository<Mentor, Long> {

    Mentor findByEmail(String email);

}
