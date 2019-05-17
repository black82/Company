package company.db.startime.repository;

import company.db.startime.model.Officer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OfficerRepository extends JpaRepository<Officer,Long> {

    List<Officer> findByNumer(String id);
}
