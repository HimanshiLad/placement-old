package com.example.demo.entity;

import jakarta.persistence.Column;

// import org.springframework.data.annotation.Id;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "companies")

public class companyInfoEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

	@Column(name = "name")
    private String name;

    @Column(name = "category")
    private String category;

    @Column(name = "description")
    private String description;

    // @OneToMany(mappedBy = "company", fetch = FetchType.LAZY)
    // @JsonManagedReference 
    // private List<InternshipTopicEntity> topics;

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
    public String getCategory() {
        return category;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setcategory(String category) {
        this.category = category;
    }
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    // public List<InternshipTopicEntity> getTopics() {
    //     return topics;
    // }

    // public void setTopics(List<InternshipTopicEntity> topics) {
    //     this.topics = topics;
    // }
}
