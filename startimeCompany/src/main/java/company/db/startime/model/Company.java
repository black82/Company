package company.db.startime.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;
import javax.transaction.Transactional;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table ( name = "COMPANY" )
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Transactional
public class Company implements Serializable, Cloneable {
    @Id
    @Column ( name = "COMPANY_ID" )
    @GeneratedValue ( strategy = GenerationType.IDENTITY )
    private Long id;
    @Column ( name = "COMPANY_NUMBER",
            length = 50 )
    private String company_number;
    @Column ( name = "CURRENT_STATUS",
            length = 20 )
    private String current_status;
    @Column ( name = "JURISDICTION_CODE",
            length = 10 )
    private String jurisdiction_code;
    @Column ( name = "NAME" )
    private String name;
    @Column ( name = "RETRIEVED_AT",
            length = 25 )
    private String retrieved_at;
    @Column ( name = "REGISTER_FLAG_AD" )
    private Boolean register_flag_AD;
    @Column ( name = "REGISTER_FLAG_CD" )

    private Boolean register_flag_CD;
    @Column ( name = "REGISTER_FLAG_DK" )
    private Boolean register_flag_DK;
    @Column ( name = "REGISTER_FLAG_HD" )
    private Boolean register_flag_HD;
    @Column ( name = "REGISTER_FLAG_UT" )
    private Boolean register_flag_UT;
    @Column ( name = "REGISTER_FLAG_VOE" )
    private Boolean register_flag_VOE;
    @Column ( name = "NATIVE_COMPANY_NUMBER",
            length = 100 )
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

    private List<Officer> officers = new ArrayList<> ();
    @Column ( name = "KEY_WORD_INDUSTR",
            length = 150 )
    private String keywordsIndustry;
    @Column ( name = "CATALOG_INDUSTRY_BRANCH",
            length = 200 )
    private String catalog;
    @Column ( name = "ACTYVITY_TEXT" )
    private String activity;

    @OneToMany ( mappedBy = "company" )
    private List<CompanyToActivity> company = new ArrayList<> ();

    @OneToOne ( targetEntity = ContactCompany.class,
            cascade = CascadeType.ALL )
    @JoinColumn ( name = "CONTACT_ID" )

    private ContactCompany contactCompany;
    @Column ( length = 20000 )
    private String html;
    private String capital;
    private String sic;
}
