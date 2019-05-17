package company.db.startime.repository;

import company.db.startime.model.CompanyGoogle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompanyGoogleRepository extends JpaRepository<CompanyGoogle, Long> {
//    List<CompanyGoogle> findByRegistrar(String city);
//
//    List<CompanyGoogle> findFirst1000ByRegistrar(String city);
//
//    List<CompanyGoogle> findFirst1000ByRegisteredoffice(String registered_office );
//
//    CompanyGoogle findByName(String name);
}
