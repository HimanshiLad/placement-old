package com.example.demo.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.PlacementQuestionEntity;
import com.example.demo.repo.PlacementQuestionRepo;

@Service
public class PlacementQuestionService{
    @Autowired
    private PlacementQuestionRepo repository;

    public List<PlacementQuestionEntity> findByTopicId(Long topicId) {
        return repository.findByTopicId(topicId);
    }
     public PlacementQuestionEntity saveQuestion(PlacementQuestionEntity question) {
        return repository.save(question);
    }
}
