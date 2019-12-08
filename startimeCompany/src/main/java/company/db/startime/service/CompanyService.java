package company.db.startime.service;

import company.db.startime.model.Company;
import company.db.startime.model.CompanyDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CompanyService {

    List<CompanyDTO> getOllCompanyByCity(String city);

    Company getCompanyById(Long id);

    List<CompanyDTO> getFirst1000ByCity(String city);

    List<Company> getFirst1000ByRegister_Officer(String register_officer);

    Company findByNameCompany(String name);

    List<CompanyDTO> findByActivity(String activity);

    List<CompanyDTO> searcByNameCompany(String name);

    List<CompanyDTO> searchBYActyvityAndAddress(String activity,
            String address);
}
