package company.db.startime.repository;

import company.db.startime.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {
    @Query ( value = "SELECT *from company com where com.registrar=(:city) order by com.name",
            nativeQuery = true )
    List<Company> findByRegistrar(@Param ( "city" ) String city);
    List<Company> findByRegisteredoffice(String registered_office);

    Company findByName(String name);

    @Query ( value = "SELECT *FROM company c WHERE c.activity LIKE (:activity) OR c.sic LIKE (:activity) OR c.catalog LIKE (:activity) order by c.name",
            nativeQuery = true )
    List<Company> findCompanyByActivity(@Param ( "activity" ) String activity);


    @Query ( value = "SELECT *FROM company com WHERE com.name like (:name) ORDER BY com.name",
            nativeQuery = true )
    List<Company> findCompanyByNameContaining(@Param ( "name" ) String name);

    @Query ( value = "SELECT  *FROM company c WHERE c.registered_address=(:address) AND c.activity LIKE (:activity) OR c.sic LIKE (:activity) OR c.catalog LIKE (:activity) order by c.name ",
            nativeQuery = true )
    List<Company> findCompaniesByRegistered_addressAndActivity(@Param ( "address" ) String address,
            @Param ( "activity" ) String activity);


}
