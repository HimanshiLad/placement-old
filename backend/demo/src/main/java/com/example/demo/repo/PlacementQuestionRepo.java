package com.example.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.PlacementQuestionEntity;
public interface PlacementQuestionRepo extends JpaRepository<PlacementQuestionEntity, Long> {

    List<PlacementQuestionEntity> findByTopicId(Long topicId);

}