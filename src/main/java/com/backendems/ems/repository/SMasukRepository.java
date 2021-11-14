/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.backendems.ems.repository;

import com.backendems.ems.Entity.SuratMasuk;
import java.util.Optional;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author LENOVO
 */
public interface SMasukRepository extends CrudRepository<SuratMasuk, Integer> {

    @Override
    @Cacheable(value = "getSMasuks")
    public Iterable<SuratMasuk> findAll();

    @Cacheable(value = "getSuratMasukByCodesurat", key = "#code")
    public Optional<SuratMasuk> findByCodesurat(String code);

    @Override
    @Cacheable(value = "getSuratMasukById", key = "#id")
    public Optional<SuratMasuk> findById(Integer id);

    public SuratMasuk findByid(Integer id);
}
