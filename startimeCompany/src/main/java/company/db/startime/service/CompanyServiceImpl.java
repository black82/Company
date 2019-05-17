package company.db.startime.service;

import company.db.startime.model.Company;
import company.db.startime.model.Officer;
import company.db.startime.model.Rabotnik;
import company.db.startime.repository.CompanyRepository;
import company.db.startime.repository.OfficerRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class CompanyServiceImpl implements CompanyService {
    @Autowired
    CompanyRepository companyRepository;
    @Autowired
    OfficerRepository officerRepository;


    public List<Company> getOllCompanyByCity(String city) {
        return companyRepository.findByRegistrar(city);
    }

    public Company getCompanyById(Long id) {
        return companyRepository.getOne(id);
    }

    public List<Company>getFirst1000ByCity(String city){
        return companyRepository.findFirst1000ByRegistrar(city);
    }

    public List<Company> getFirst1000ByRegister_Officer(String register_officer){
        return companyRepository.findFirst1000ByRegisteredoffice(register_officer);
    }
    public Company findByNameCompany(String name){
        return companyRepository.findByName(name);
    }
    public void insertOfficerToCompany(){
       int id;
        ModelMapper modelMapper = new ModelMapper();
        for (id=4438;id<100000000;id++){
            Company company=companyRepository.getOne((long) id);
            List<Officer> byCompany_id = officerRepository.findByNumer(company.getCompany_number());
            if (byCompany_id!=null){
                List<Rabotnik>officerByCompanies=
                        byCompany_id
                                .stream()
                                .map(a->modelMapper.map(a, Rabotnik.class))
                                .collect(Collectors.toList());
                company.setOfficers(officerByCompanies);
                companyRepository.save(company);

            }

        }

    }

}
