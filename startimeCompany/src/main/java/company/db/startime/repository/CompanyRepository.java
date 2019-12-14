package company.db.startime.repository;

import company.db.startime.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {

    @Query ( value = "SELECT *\n" + "FROM COMPANY C\n" + "  LEFT JOIN ADDRESS_COMPANY AC on C.ADDRESS_ID = AC.ADDRESS_ID\n" + "WHERE AC.registeredoffice = 'berlin'limit 40;",
            nativeQuery = true )
    List<Company> findCompaniesByAddressCompany_Registrar(String city);


    Company findByName(String name);

    @Query ( value = "SELECT *FROM COMPANY C JOIN COMPANY_TO_ACTIVITY CTA on C.COMPANY_ID = CTA.COMP_ID LEFT JOIN COMPANY_ACTIVITY CA on CTA.ACTIV_ID = CA.ACTIVITY_ID where TYPEACTIVITY = (:activity) order by C.NAME limit 100",
            nativeQuery = true )
    List<Company> findCompanyByActivity(@Param ( "activity" ) String activity);


    @Query ( value = "SELECT *FROM COMPANY com WHERE com.name = (:name) ORDER BY com.name",
            nativeQuery = true )
    List<Company> findCompanyByNameContaining(@Param ( "name" ) String name);

    @Query ( value = "SELECT *\n" + "FROM COMPANY C\n" + "  " + "       JOIN COMPANY_TO_ACTIVITY CTA on C.COMPANY_ID = CTA.COMP_ID\n" + "   " + "      LEFT JOIN COMPANY_ACTIVITY CA on CTA.ACTIV_ID = CA.ACTIVITY_ID\n" + "   " + "      right join ADDRESS_COMPANY AC on C.ADDRESS_ID = AC.ADDRESS_ID\n" + "" + "where TYPEACTIVITY = (:activity)" + "" + "and registeredoffice =(:address) order by c.name ",
            nativeQuery = true )
    List<Company> findCompaniesByRegistered_addressAndActivity(@Param ( "address" ) String address,
            @Param ( "activity" ) String activity);


}
