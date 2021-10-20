package com.example.server.repositories;

import com.example.server.models.Availabilty;
import com.example.server.models.Mentee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AvailabilityRepository extends JpaRepository<Availabilty, Long> {
}
