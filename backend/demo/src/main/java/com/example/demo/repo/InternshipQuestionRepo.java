package com.example.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.InternshipQuestionEntity;
public interface InternshipQuestionRepo extends JpaRepository<InternshipQuestionEntity, Long> {

    List<InternshipQuestionEntity> findByTopicId(Long topicId);

}