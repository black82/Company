package company.db.startime.repository;

import company.db.startime.model.CompanyActivyty;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyActivityRepository extends JpaRepository<CompanyActivyty, Long> {

}
