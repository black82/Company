//package company.db.startime.model;
//
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.EqualsAndHashCode;
//import lombok.NoArgsConstructor;
//
//import javax.persistence.*;
//
//@Table ( name = "COMPANY_TO_ACTIVITY" )
//@Entity
//@Data
//@EqualsAndHashCode
//@AllArgsConstructor
//@NoArgsConstructor
//public class CompanyToActivity {
//
//    @EmbeddedId
//    Company_To_Activity_KEY id;
//
//    @ManyToOne
//    @MapsId ( "COMP_ID" )
//    @JoinColumn ( name = "COMP_ID" )
//
//    Company company;
//
//    @ManyToOne
//    @MapsId ( "ACTIV_ID" )
//    @JoinColumn ( name = "ACTIV_ID" )
//
//    CompanyActivyty companyActivyty;
//}
