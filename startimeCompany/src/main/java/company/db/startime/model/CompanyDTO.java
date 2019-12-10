package company.db.startime.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CompanyDTO {
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

    private AddressCompany addressCompany;

    private List<Officer> officers = new ArrayList<> ();

    private String keywordsIndustry;

    private String catalog;

    private String activity;

    private List<CompanyActivyty> companyActivyties = new ArrayList<> ();

    private ContactCompany contactCompany;

    private String capital;
    private String sic;
}
