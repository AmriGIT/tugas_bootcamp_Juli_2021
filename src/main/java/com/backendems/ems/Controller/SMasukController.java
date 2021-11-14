package com.backendems.ems.Controller;

import com.backendems.ems.Entity.SuratKeluar;
import com.backendems.ems.Entity.SuratMasuk;
import com.backendems.ems.model.DAOUser;
import com.backendems.ems.repository.SMasukRepository;
import com.backendems.ems.repository.UserRepository;
import java.util.ArrayList;
import java.util.List;
import java.security.Principal;
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

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class SMasukController {

    @Autowired
    private SMasukRepository smasukRepository;

    @Autowired
    private UserRepository userRespository;

    @GetMapping("/getmasuk")
    public ResponseEntity<List<SuratMasuk>> getSMasuks() {
        Iterable<SuratMasuk> suratmasuks = smasukRepository.findAll();
        List<SuratMasuk> suratmasukList = new ArrayList<>();
        for (SuratMasuk suratmasuk : suratmasuks) {
            suratmasukList.add(suratmasuk);
        }
        return ResponseEntity.ok(suratmasukList);
    }

    @PostMapping("/masuk/")
    public ResponseEntity<String> saveSuratMasuk(@RequestBody SuratMasuk suratmasuk,
            Principal principal) {
        //Dummy before n login
        String userName = principal.getName();
        DAOUser daoUser = userRespository.getUserByUsername(userName);
        suratmasuk.setUser(daoUser);
        smasukRepository.save(suratmasuk);
        return ResponseEntity.ok("Success");
    }
    
    @GetMapping("/masuk/id/{id}")
    public ResponseEntity<SuratMasuk>getSuratmasukById(
    @PathVariable(name = "id") Integer id){
    Optional<SuratMasuk>optionalsuratMasuk = smasukRepository.findById(id);
    if(!optionalsuratMasuk.isEmpty()){
    return ResponseEntity.ok(optionalsuratMasuk.get());
    }
    return ResponseEntity.badRequest().body(null);
    }

    @GetMapping("/masuk/{code}")
    public ResponseEntity<SuratMasuk> getSuratMasukByCodeSurat(
            @PathVariable(name = "code") String code) {
        Optional<SuratMasuk> optionalsuratMasuk = smasukRepository.findByCodesurat(code);
        if (!optionalsuratMasuk.isEmpty()) {
            return ResponseEntity.ok(optionalsuratMasuk.get());
        }
        return ResponseEntity.badRequest().body(null);
    }

    @PutMapping("/masuk")
    public ResponseEntity<?> updateSuratmasuk(@RequestBody SuratMasuk suratmasuk,
            Principal principal) {

        String userName = principal.getName();
        DAOUser user = userRespository.getUserByUsername(userName);
        if (user != null) {
            Optional<SuratMasuk> optionalSuratmasuk = smasukRepository.findById(suratmasuk.getId());

            if (!optionalSuratmasuk.isEmpty()) {
                SuratMasuk sm = optionalSuratmasuk.get();
                if (sm != null
                        && sm.getUser() != null
                        && user.getId() == sm.getIdUser()) {

                    sm.setAsalsurat(suratmasuk.getAsalsurat());
                    sm.setIsi(suratmasuk.getIsi());
                    sm.setNosurat(suratmasuk.getNosurat());
                    suratmasuk.setUser(user);
                    return ResponseEntity.ok(smasukRepository.save(sm));

                }
            }
        }
        return ResponseEntity.badRequest()
                .body("Invalid Parameter or Surat Masuk is not Allow to Update with User");
    }

    @DeleteMapping("/masuk/{id}")
    public ResponseEntity<String> deleteMasukById(
            @PathVariable(name = "id") Integer id, Principal principal) {
        String userName = principal.getName();
        DAOUser user = userRespository.getUserByUsername(userName);
        if (user != null) {
            SuratMasuk suratmasuk = smasukRepository.findById(id).get();
            if (suratmasuk != null 
                    && suratmasuk.getUser() != null 
//                    && suratmasuk.getIdUser() == user.getId()
                    ) {
                smasukRepository.deleteById(id);
                return ResponseEntity.ok("Success Deleted "+ suratmasuk.getIsi());
            }
        }
        return ResponseEntity.badRequest().body("Invalid Parameter");
    }
    

}
