package company.db.startime.service;

import company.db.startime.model.Company;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CompanyService {
    public List<Company> getOllCompanyByCity(String city);

    Company getCompanyById(Long id);

    List<Company> getFirst1000ByCity(String city);

    List<Company> getFirst1000ByRegister_Officer(String register_officer);

    Company findByNameCompany(String name);

    void insertOfficerToCompany();

}
