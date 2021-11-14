/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.backendems.ems.Entity;

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
@Table(name = "t_disposisi")
public class Disposisi {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column(name = "tujuan", length = 255, nullable = false)
    private String tujuan;
    
    @Column(name = "isidisposisi", length = 255, nullable = false)
    private String isidisposisi;
    
    @Column(name = "tgl_dispo",nullable = false)
    private Date tgl_dispo;
    
    @Column(name = "catatan", length = 255, nullable = false)
    private String catatan;
    
    @ManyToOne
    @JoinColumn(name = "id_masuk", nullable = false)
    private SuratMasuk suratmasuk;




    public void setSuratmasuk(SuratMasuk suratmasuk) {
        this.suratmasuk = suratmasuk;
    }

    

            
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTujuan() {
        return tujuan;
    }

    public void setTujuan(String tujuan) {
        this.tujuan = tujuan;
    }

    public String getIsidisposisi() {
        return isidisposisi;
    }

    public void setIsidisposisi(String isidisposisi) {
        this.isidisposisi = isidisposisi;
    }

    public Date getTgl_dispo() {
        return tgl_dispo;
    }

    public void setTgl_dispo(Date tgl_dispo) {
        this.tgl_dispo = tgl_dispo;
    }

    public String getCatatan() {
        return catatan;
    }

    public void setCatatan(String catatan) {
        this.catatan = catatan;
    }


    
}
