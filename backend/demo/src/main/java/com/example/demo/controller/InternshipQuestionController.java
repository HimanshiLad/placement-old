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

import com.example.demo.entity.InternshipQuestionEntity;
import com.example.demo.services.InternshipQuestionService;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class InternshipQuestionController {
    @Autowired
    private InternshipQuestionService service;

    @GetMapping("/questions/{topicId}")
    public List<InternshipQuestionEntity> findByTopicId(@PathVariable Long topicId) {
        return service.findByTopicId(topicId);
    }
    @PostMapping("/add-question")
    public ResponseEntity<InternshipQuestionEntity> addQuestion(@RequestBody InternshipQuestionEntity question) {
        InternshipQuestionEntity newquestion = service.saveQuestion(question);
        return ResponseEntity.ok(newquestion);
    }

}
