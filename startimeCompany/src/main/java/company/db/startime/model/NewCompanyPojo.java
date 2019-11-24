package company.db.startime.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table ( name = "NEWCOMPANY" )
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class NewCompanyPojo {
    @Id
    @Column ( name = "COMPANY_ID" )
    @GeneratedValue ( strategy = GenerationType.IDENTITY )
    private Long id;
    private String company_number;
    private String current_status;
    private String jurisdiction_code;
    private String name;
    private String retrieved_at;
    private Boolean register_flag_AD;
    private Boolean register_flag_CD;
    private Boolean register_flag_DK;
    private Boolean register_flag_HD;
    private Boolean register_flag_UT;
    private Boolean register_flag_VOE;
    private String native_company_number;
    @OneToOne ( targetEntity = AddressCompany.class,
            cascade = CascadeType.ALL )
    @JoinColumn ( name = "ADDRESS_ID" )
    private AddressCompany addressCompany;
    @ManyToMany ( cascade = CascadeType.ALL,
            fetch = FetchType.LAZY )
    @LazyCollection ( LazyCollectionOption.TRUE )
    @JoinTable ( name = "COMPANY_TO_OFFICER",
            joinColumns = {@JoinColumn ( name = "COMPANY_ID" )},
            inverseJoinColumns = {@JoinColumn ( name = "OFFICER_ID" )} )
    private List<Worker> officers = new ArrayList<> ();
    private String keywordsIndustry;
    private String catalog;
    private String activity;

    @ManyToMany ( cascade = {CascadeType.PERSIST, CascadeType.MERGE} )
    @Fetch ( value = FetchMode.SUBSELECT )
    @JoinTable ( name = "COMPANY_TO_ACTIVITY",
            joinColumns = {@JoinColumn ( name = "COMPANY_ID" )},
            inverseJoinColumns = {@JoinColumn ( name = "COMPANY_ACTIVITY" )} )
    private List<CompanyActivyty> companyActivyties = new ArrayList<> ();

    @OneToOne ( targetEntity = ContactCompany.class,
            cascade = CascadeType.ALL )
    @JoinColumn ( name = "CONTACT_ID" )
    private ContactCompany contactCompany;
}
