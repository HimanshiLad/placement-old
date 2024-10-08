package com.example.demo.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.InternshipTopicEntity;
import com.example.demo.repo.InternshipTopicRepo;

@Service
public class InternshipTopicService {
    @Autowired
    private InternshipTopicRepo repository;

    public List<InternshipTopicEntity> findByCompanyId(Long companyId) {
        return repository.findByCompanyId(companyId);
    }
     public InternshipTopicEntity saveTopic(InternshipTopicEntity topic) {
        return repository.save(topic);
    }
}

