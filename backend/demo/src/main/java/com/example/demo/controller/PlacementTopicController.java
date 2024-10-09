package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.PlacementTopicEntity;
import com.example.demo.services.PlacementTopicService;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class PlacementTopicController {
    @Autowired
    private PlacementTopicService service;

    @GetMapping("/topics/{companyId}/Placement")
    public List<PlacementTopicEntity> findByCompanyId(@PathVariable Long companyId) {
        return service.findByCompanyId(companyId);
    }
    @PostMapping("/add-PlacementTopic")
    public ResponseEntity<PlacementTopicEntity> addPlacementTopic(@RequestBody PlacementTopicEntity topic) {
        PlacementTopicEntity newTopic = service.saveTopic(topic);
        return ResponseEntity.ok(newTopic);
    }

}