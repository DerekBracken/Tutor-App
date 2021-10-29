package com.example.server.repositories;

import com.example.server.models.Mentee;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface MenteeRepository extends JpaRepository<Mentee, Long> {

    Mentee findByEmail(String email);

    List<Mentee> findByMentor_id(Long id);
}
