package com.example.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.companyInfoEntity;
public interface companyInfoRepo extends JpaRepository<companyInfoEntity, Long> {
    List<companyInfoEntity> findByCategory(String category);

    companyInfoEntity getCompanyById(Long companyId);

}