package company.db.startime.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;
import java.util.Set;

@Data
@Entity
@Table ( name = "company" )
@NoArgsConstructor
@AllArgsConstructor
public class Company implements Serializable {
    @Id
    @GeneratedValue ( strategy = GenerationType.SEQUENCE )
    private Long id;
    private String company_number;
    private String current_status;
    private String jurisdiction_code;
    private String name;
    private String registered_address;
    private String retrieved_at;
    private Boolean register_flag_AD;
    private Boolean register_flag_CD;
    private Boolean register_flag_DK;
    private Boolean register_flag_HD;
    private Boolean register_flag_UT;
    private Boolean register_flag_VOE;
    private String native_company_number;
    private String registeredoffice;
    private String registrar;
    private String register_art;
    private String register_nummer;
    private String former_registrar;
    private String register_flag_Status_information;
    private String telephone;
    private String fax;
    private String url;
    private String sector_of_activity;
    @OneToMany ( cascade = CascadeType.ALL )
    @LazyCollection ( LazyCollectionOption.FALSE )
    @JoinTable ( name = "COMPANY_OFFICER",
            joinColumns = {@JoinColumn ( name = "COMPANY_ID" )},
            inverseJoinColumns = {@JoinColumn ( name = "OFFICER_ID" )} )
    private List<Worker> officers;
    private String sic;
    private String kapital;
    private String email;
    private String web2Url;
    private String html;
    private String googleUri;
    private String googleEmail;
    @ElementCollection
    private Set<String> emails;
    private String keywordsIndustry;
    private String catalog;
    private String activity;

}
