package company.db.startime.service;

import company.db.startime.model.CompanyDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CompanyService {

    List<CompanyDTO> getOllCompanyByCity(String city);

    CompanyDTO getCompanyById(Long id);

    List<CompanyDTO> getFirst1000ByCity(String city);

    List<CompanyDTO> getFirst1000ByRegister_Officer(String register_officer);

    CompanyDTO findByNameCompany(String name);

    List<CompanyDTO> findByActivity(String activity);

    List<CompanyDTO> searcByNameCompany(String name);

    List<CompanyDTO> searchBYActyvityAndAddress(String activity,
            String address);
}
