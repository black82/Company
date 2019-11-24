package company.db.startime.repository;

import company.db.startime.model.NewCompanyPojo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewCompanyPojoRepository extends JpaRepository<NewCompanyPojo, Long> {

}
