/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.backendems.ems.Entity;

import com.backendems.ems.model.DAOUser;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 *
 * @author LENOVO
 */
@Entity
@Table(name = "t_keluar")
public class SuratKeluar {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column(name = "noagenda", nullable = false)
    private Integer noagenda;
    
    @Column(name = "nosurat", nullable = false)
    private String nosurat;
    
    @Column(name = "isi", nullable = false)
    private String isi;
    
    @Column(name = "tanggal", nullable = false)
    private Date tanggal;
    
    @Column(name = "keterangan", nullable = false)
    private String keterangan;
    
    @ManyToOne
    @JoinColumn(name = "id_user", nullable = false)
    private DAOUser user;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getNoagenda() {
        return noagenda;
    }

    public void setNoagenda(Integer noagenda) {
        this.noagenda = noagenda;
    }

    public String getNosurat() {
        return nosurat;
    }

    public void setNosurat(String nosurat) {
        this.nosurat = nosurat;
    }

    public String getIsi() {
        return isi;
    }

    public void setIsi(String isi) {
        this.isi = isi;
    }

    public Date getTanggal() {
        return tanggal;
    }

    public void setTanggal(Date tanggal) {
        this.tanggal = tanggal;
    }

    public String getKeterangan() {
        return keterangan;
    }

    public void setKeterangan(String keterangan) {
        this.keterangan = keterangan;
    }

    public DAOUser getUser() {
        return user;
    }

    public void setUser(DAOUser user) {
        this.user = user;
    }
}
