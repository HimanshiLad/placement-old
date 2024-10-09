package com.example.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.InternshipTopicEntity;
public interface InternshipTopicRepo extends JpaRepository<InternshipTopicEntity, Long> {

    //@Query("SELECT t FROM InternshipTopicEntity t WHERE t.company_id = :companyId")
    List<InternshipTopicEntity> findByCompanyId(Long companyId);

}