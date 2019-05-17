package company.db.startime.repository;

import company.db.startime.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {
    List<Company> findByRegistrar(String city);

    List<Company> findFirst1000ByRegistrar(String city);

    List<Company> findFirst1000ByRegisteredoffice(String registered_office );

    Company findByName(String name);
}
