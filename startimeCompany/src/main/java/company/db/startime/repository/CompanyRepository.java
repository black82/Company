package company.db.startime.repository;

import company.db.startime.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {

    @Query ( value = "SELECT * from NEWCOMPANY c join ADDRESS_COMPANY AC on c.ADDRESS_ID = AC.ADDRESS_ID and AC.registeredoffice= (:city) order by c.name LIMIT 10",
            nativeQuery = true )
    List<Company> findByRegistrar(@Param ( "city" ) String city);



    Company findByName(String name);

    @Query ( value = "SELECT * FROM NEWCOMPANY C left outer join COMPANY_TO_ACTIVITY CTA on C.COMPANY_ID = CTA.COMPANY_ID AND CTA.COMPANY_ACTIVITY=(:activity) order by C.NAME",
            nativeQuery = true )
    List<Company> findCompanyByActivity(@Param ( "activity" ) String activity);


    @Query ( value = "SELECT *FROM company com WHERE com.name like (:name) ORDER BY com.name",
            nativeQuery = true )
    List<Company> findCompanyByNameContaining(@Param ( "name" ) String name);

    @Query ( value = "SELECT *FROM NEWCOMPANY C left outer join COMPANY_TO_ACTIVITY CTA on C.COMPANY_ID = CTA.COMPANY_ID AND CTA.COMPANY_ACTIVITY = (:activity) left outer join ADDRESS_COMPANY AC on C.ADDRESS_ID = AC.ADDRESS_ID AND AC.registrar = (:address) order by c.name ",
            nativeQuery = true )
    List<Company> findCompaniesByRegistered_addressAndActivity(@Param ( "address" ) String address,
            @Param ( "activity" ) String activity);


}
