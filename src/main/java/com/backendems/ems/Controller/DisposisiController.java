/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.backendems.ems.Controller;

import com.backendems.ems.Entity.Disposisi;
import com.backendems.ems.repository.DisposisiRespository;
import com.backendems.ems.repository.UserRepository;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author LENOVO
 */
@RestController
@CrossOrigin("*")
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class DisposisiController {
    @Autowired
    private UserRepository userResRepository;
    
    @Autowired
    private DisposisiRespository disposisiRepository;
    
    @GetMapping("/getdisposisi")
    public ResponseEntity<List<Disposisi>> getDisposisi(){
    Iterable<Disposisi> disposisis = disposisiRepository.findAll();
    List<Disposisi> disposisiList = new ArrayList<>();
    for(Disposisi disposisi : disposisis){
    disposisiList.add(disposisi);
    }
    return ResponseEntity.ok(disposisiList);
    }
            
            
            
            
    @GetMapping("/tracking/id")
    public ResponseEntity<Disposisi>getDisposisiById(
    @PathVariable(name = "id") Integer id){
        Optional<Disposisi>optionalDisposisi = disposisiRepository.findById(id);
        if(!optionalDisposisi.isEmpty()){
        return ResponseEntity.ok(optionalDisposisi.get());
        }
        return ResponseEntity.badRequest().body(null);
    }
    
    @PostMapping("/disposisi/")
    public ResponseEntity<String> saveDisposisi(@RequestBody Disposisi disposisi){
        disposisiRepository.save(disposisi);
        return ResponseEntity.ok("Success");
    }
    
    
    
}
