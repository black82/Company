package company.db.startime.repository;

import company.db.startime.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {
    List<Company> findByRegistrar(String city);

    List<Company> findDistinctFirstByRegistrar(String city);

    List<Company> findByRegisteredoffice(String registered_office);

    Company findByName(String name);


    List<Company> findCompaniesByKeywordsIndustryContaining(String keywords);

    List<Company> findCompaniesByActivityContaining(String activity);

    List<Company> findCompaniesByCatalogContaining(String Catalog);

    List<Company> findCompaniesBySicContaining(String sector_activity);

    List<Company> findCompanyByNameContaining(String name);

    @Query ( value = "SELECT  *FROM company c WHERE c.registered_address=(:address) AND c.activity LIKE (:activity) OR c.sic LIKE (:activity) OR c.catalog LIKE (:activity) ",
            nativeQuery = true )
    List<Company> findCompaniesByRegistered_addressAndActivity(@Param ( "address" ) String address,
            @Param ( "activity" ) String activity);
    //List<Company> findCompaniesByActivityContainingAndregistered_addressOrderByActivity(String activity,String address);

}
