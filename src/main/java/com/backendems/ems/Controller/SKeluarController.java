/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.backendems.ems.Controller;

import com.backendems.ems.Entity.SuratKeluar;
import com.backendems.ems.Entity.SuratMasuk;
import com.backendems.ems.model.DAOUser;
import com.backendems.ems.repository.SKeluarRepository;
import com.backendems.ems.repository.UserRepository;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author LENOVO
 */
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class SKeluarController {

    @Autowired
    private SKeluarRepository skeluarrepository;

    @Autowired
    private UserRepository userrespository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/getkeluar")
    public ResponseEntity<List<SuratKeluar>> getSKeluars() {
        Iterable<SuratKeluar> suratkeluars = skeluarrepository.findAll();
        List<SuratKeluar> suratkeluarList = new ArrayList<>();
        for (SuratKeluar suratkeluar : suratkeluars) {
            suratkeluarList.add(suratkeluar);
        }
        return ResponseEntity.ok(suratkeluarList);
    }

    @PostMapping("/keluar/")
    public ResponseEntity<String> saveSuratKeluar(@RequestBody SuratKeluar suratkeluar,
            Principal principal) {
        String userName = principal.getName();
        DAOUser user = userrespository.getUserByUsername(userName);
        suratkeluar.setUser(user);
        skeluarrepository.save(suratkeluar);
        return ResponseEntity.ok("Success");
    }

    @DeleteMapping("/keluar/{id}")
    public ResponseEntity<String> deleteKeluarById(
            @PathVariable(name = "id") Integer id, Principal principal) {
        String userName = principal.getName();
        DAOUser user = userrespository.getUserByUsername(userName);
        if (user != null) {
            SuratKeluar suratkeluar = skeluarrepository.findById(id).get();
            if (suratkeluar != null
                    && suratkeluar.getUser() != null //                    && suratmasuk.getIdUser() == user.getId()
                    ) {
                skeluarrepository.deleteById(id);
                return ResponseEntity.ok("Success Deleted " + suratkeluar.getIsi());
            }
        }
        return ResponseEntity.badRequest().body("Invalid Parameter");
    }

    @GetMapping("/keluar/{id}")
    public ResponseEntity<SuratKeluar> getSuratkeluarById(
            @PathVariable(name = "id") Integer id) {
        Optional<SuratKeluar> optionalsuratKeluar = skeluarrepository.findById(id);
        if (!optionalsuratKeluar.isEmpty()) {
            return ResponseEntity.ok(optionalsuratKeluar.get());
        }
        return ResponseEntity.badRequest().body(null);
    }

    @PutMapping("/keluar/")
    public ResponseEntity<?> updateKeluar(@RequestBody SuratKeluar suratkeluar,
            Principal principal) {
        String userName = principal.getName();
        DAOUser user = userrespository.getUserByUsername(userName);
        if (user != null) {
            Optional<SuratKeluar> optionalSuratKeluar = skeluarrepository.findById(suratkeluar.getId());

            if (!optionalSuratKeluar.isEmpty()) {
                SuratKeluar sk = optionalSuratKeluar.get();
                if (sk != null && sk.getUser() != null && user.getId() == sk.getUser().getId()) {
                    sk.setIsi(suratkeluar.getIsi());
                    sk.setNoagenda(suratkeluar.getNoagenda());
                    sk.setNosurat(suratkeluar.getNosurat());
                    sk.setTanggal(suratkeluar.getTanggal());
                    suratkeluar.setUser(user);
                    return ResponseEntity.ok(skeluarrepository.save(sk));
                }
            }
        }
        return ResponseEntity.badRequest().body("Invalid Update");
    }
}
