package company.db.startime.repository;

import company.db.startime.model.Officer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface OfficerRepository extends JpaRepository<Officer, Long> {
    @Query ( value = "select *from officer_by_company o where o.numer=(:param)",
            nativeQuery = true )
    Officer findFirstByNumer(@Param ( "param" ) String param);

}
