package company.db.startime.repository;

import company.db.startime.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {

    @Query ( value = "SELECT *\n" + "FROM COMPANY C\n" + "         LEFT JOIN ADDRESS_COMPANY AC on C.ADDRESS_ID = AC.ADDRESS_ID\n" + "         left join COMPANY_TO_OFFICER CTO on C.COMPANY_ID = CTO.COMPANY_ID\n" + "         left join NEWCOMPANY_OFICER N on CTO.OFFICER_ID = N.id\n" + "         left join COMPANY_TO_ACTIVITY CTA on C.COMPANY_ID = CTA.COMP_ID\n" + "         left join COMPANY_ACTIVITY CA on CTA.ACTIV_ID = CA.ACTIVITY_ID\n" + "WHERE AC.register_flag_Status_information = (:city) \n" + "limit 40",
            nativeQuery = true )
    List<Company> findCompaniesByAddressCompany_Registrar(String city);


    Company findByName(String name);

    @Query ( value = "SELECT *\n" + "FROM COMPANY C\n" + "         LEFT JOIN COMPANY_TO_ACTIVITY CTA on C.COMPANY_ID = CTA.COMP_ID\n" + "         LEFT JOIN COMPANY_ACTIVITY CA on CTA.ACTIV_ID = CA.ACTIVITY_ID\n" + "         LEFT JOIN ADDRESS_COMPANY AC on C.ADDRESS_ID = AC.ADDRESS_ID\n" + "         LEFT JOIN CONTACT_COMPANY co on C.CONTACT_ID = co.CONTACT_ID\n" + "         LEFT JOIN EMAILS on co.CONTACT_ID = EMAILS.CONTACT_ID\n" + "         LEFT JOIN COMPANY_TO_OFFICER CTO on C.COMPANY_ID = CTO.COMPANY_ID\n" + "         LEFT JOIN NEWCOMPANY_OFICER N on CTO.OFFICER_ID = N.id\n" + "where TYPEACTIVITY = (:activity)\n" + "LIMIT 50;",
            nativeQuery = true )
    List<Company> findCompanyByActivity(@Param ( "activity" ) String activity);


    @Query ( value = "SELECT *FROM COMPANY com WHERE com.name = (:name) ORDER BY com.name",
            nativeQuery = true )
    List<Company> findCompanyByNameContaining(@Param ( "name" ) String name);

    @Query ( value = "SELECT *\n" + "FROM COMPANY c\n" + "         JOIN COMPANY_TO_ACTIVITY CTA on c.COMPANY_ID = CTA.COMP_ID\n" + "         JOIN COMPANY_ACTIVITY CA on CTA.ACTIV_ID = CA.ACTIVITY_ID\n" + "         JOIN ADDRESS_COMPANY AC on c.ADDRESS_ID = AC.ADDRESS_ID\n" + "         join COMPANY_TO_OFFICER CTO on c.COMPANY_ID = CTO.COMPANY_ID\n" + "         left join CONTACT_COMPANY CC on c.CONTACT_ID = CC.CONTACT_ID\n" + "WHERE registeredoffice = (:address)\n" + "  AND CA.TYPEACTIVITY = (:activity) LIMIT 40;",
            nativeQuery = true )
    List<Company> findCompaniesByRegistered_addressAndActivity(@Param ( "address" ) String address,
            @Param ( "activity" ) String activity);


}
