/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.backendems.ems.repository;

import com.backendems.ems.Entity.Disposisi;
import java.util.Optional;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author LENOVO
 */
public interface DisposisiRespository extends CrudRepository<Disposisi, Integer>{
    @Override
    @Cacheable(value = "getDisposisi")
    public Iterable<Disposisi> findAll();
    
    @Override
    @Cacheable(value= "getDisposisiById", key = "#id")
    public Optional<Disposisi> findById(Integer id);
    
    public Disposisi findByid(Integer id);
}
