package com.example.server.repositories;

import com.example.server.models.Meeting;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MeetingRepository extends JpaRepository<Meeting, Long> {

}
