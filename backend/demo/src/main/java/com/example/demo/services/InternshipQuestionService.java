package com.example.demo.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.InternshipQuestionEntity;
import com.example.demo.repo.InternshipQuestionRepo;

@Service
public class InternshipQuestionService{
    @Autowired
    private InternshipQuestionRepo repository;

    public List<InternshipQuestionEntity> findByTopicId(Long topicId) {
        return repository.findByTopicId(topicId);
    }
     public InternshipQuestionEntity saveQuestion(InternshipQuestionEntity question) {
        return repository.save(question);
    }
}
