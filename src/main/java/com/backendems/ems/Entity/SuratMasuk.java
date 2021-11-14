/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.backendems.ems.Entity;

import com.backendems.ems.model.DAOUser;
import java.util.Date;
import java.util.List;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 *
 * @author LENOVO
 */
@Entity
@Table(name = "t_masuk")
public class SuratMasuk {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "noagenda", nullable = false)
    private Integer noagenda;

    @Column(name = "nosurat", length = 255, nullable = false)
    private String nosurat;

    @Column(name = "asalsurat", length = 255, nullable = false)
    private String asalsurat;

    @Column(name = "isi", length = 255, nullable = false)
    private String isi;

    @Column(name = "tgl_terima", nullable = false)
    private Date tgl_terima;

    
    @ManyToOne
    @JoinColumn(name = "id_user", nullable = false)
    private DAOUser user;
    
    @OneToMany(mappedBy = "suratmasuk", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Disposisi> disposisi;

    public List<Disposisi> getDisposisi() {
        return disposisi;
    }

    public void setDisposisi(List<Disposisi> disposisi) {
        this.disposisi = disposisi;
    }


    

    @Column(name = "codesurat", nullable = false)
    private String codesurat;

    public String getCodesurat() {
        return codesurat;
    }

    public void setCodesurat(String codesurat) {
        this.codesurat = codesurat;
    }

    public String getUser() {
        return user.getUsername();
    }
    
    public long getIdUser() {
    return user.getId();
    }

    public void setUser(DAOUser user) {
        this.user = user;
    }

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

    public String getAsalsurat() {
        return asalsurat;
    }

    public void setAsalsurat(String asalsurat) {
        this.asalsurat = asalsurat;
    }

    public String getIsi() {
        return isi;
    }

    public void setIsi(String isi) {
        this.isi = isi;
    }

    public Date getTgl_terima() {
        return tgl_terima;
    }

    public void setTgl_terima(Date tgl_terima) {
        this.tgl_terima = tgl_terima;
    }
}
