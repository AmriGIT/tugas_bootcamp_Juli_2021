/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.backendems.ems.repository;

import com.backendems.ems.Entity.SuratKeluar;
import java.util.Optional;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author LENOVO
 */
public interface SKeluarRepository extends CrudRepository<SuratKeluar, Integer>{
    @Override
    @Cacheable(value = "getSKeluar")
    public Iterable<SuratKeluar> findAll();
    
    
    @Override
    @Cacheable(value = "getSuratKeluarById", key = "#id")
    public Optional<SuratKeluar> findById(Integer id);
    
    public SuratKeluar findByid(Integer id);
}
