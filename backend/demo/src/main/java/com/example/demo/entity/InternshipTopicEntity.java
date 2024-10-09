package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "internship_topics")
public class InternshipTopicEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;
  
    @Column(name = "category")
    private String category;

    @Column(name = "company_id")
    private int companyId;

    public InternshipTopicEntity() {}

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) { // Fixed setter for category
        this.category = category;
    }

    public int getCompanyId() {
        return companyId;
    }

    public void setCompanyId(int companyId) { // Fixed setter for companyId
        this.companyId = companyId;
    }

    // Constructor
    public InternshipTopicEntity(String name, String category, int companyId) { // Corrected constructor
        this.name = name;
        this.category = category;
        this.companyId = companyId;
    }

}
