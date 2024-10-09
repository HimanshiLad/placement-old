package com.example.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.PlacementTopicEntity;
public interface PlacementTopicRepo extends JpaRepository<PlacementTopicEntity, Long> {

    List<PlacementTopicEntity> findByCompanyId(Long companyId);

}