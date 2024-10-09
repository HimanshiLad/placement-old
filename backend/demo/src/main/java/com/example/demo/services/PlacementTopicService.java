package com.example.demo.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.PlacementTopicEntity;
import com.example.demo.repo.PlacementTopicRepo;

@Service
public class PlacementTopicService {
    @Autowired
    private PlacementTopicRepo repository;

    public List<PlacementTopicEntity> findByCompanyId(Long companyId) {
        return repository.findByCompanyId(companyId);
    }
     public PlacementTopicEntity saveTopic(PlacementTopicEntity topic) {
        return repository.save(topic);
    }
}

