package company.db.startime.repository;

import company.db.startime.model.CompanyActivyty;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CompanyActivityRepository extends JpaRepository<CompanyActivyty, Long> {
    Optional<CompanyActivyty> findByTypeActivity(String activityType);
}
