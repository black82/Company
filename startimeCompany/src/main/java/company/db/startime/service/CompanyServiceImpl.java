package company.db.startime.service;

import company.db.startime.model.Company;
import company.db.startime.model.CompanyDTO;
import company.db.startime.model.Officer;
import company.db.startime.model.Worker;
import company.db.startime.repository.CompanyRepository;
import company.db.startime.repository.OfficerRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Component
public class CompanyServiceImpl implements CompanyService {
    private final CompanyRepository companyRepository;
    private final OfficerRepository officerRepository;
    private ModelMapper modelMapper = new ModelMapper ();

    @Autowired
    public CompanyServiceImpl(CompanyRepository companyRepository,
            OfficerRepository officerRepository) {
        this.companyRepository = companyRepository;
        this.officerRepository = officerRepository;
    }

    public List<Company> getOllCompanyByCity(String city) {
        List<Company> companies = new ArrayList<> ();
        companies.add (companyRepository.getOne (1L));
        companies.add (companyRepository.getOne (2L));
        companies.add (companyRepository.getOne (3L));
        companies.add (companyRepository.getOne (4L));
        companies.add (companyRepository.getOne (6L));
        companies.add (companyRepository.getOne (7L));
        return companies;
    }

    public Company getCompanyById(Long id) {
        return companyRepository.getOne (id);
    }

    public List<CompanyDTO> getFirst1000ByCity(String city) {
        List<Company> companies = new ArrayList<> ();
        companies.add (companyRepository.getOne (1L));
        companies.add (companyRepository.getOne (2L));
        companies.add (companyRepository.getOne (3L));
        companies.add (companyRepository.getOne (4L));
        companies.add (companyRepository.getOne (6L));
        companies.add (companyRepository.getOne (7L));
        return companies.stream ().map (a -> modelMapper.map (a, CompanyDTO.class)).collect (Collectors.toList ());
    }

    public List<Company> getFirst1000ByRegister_Officer(String register_officer) {
        return companyRepository.findByRegisteredoffice (register_officer);
    }

    public Company findByNameCompany(String name) {
        return companyRepository.findByName (name);
    }

    public void insertOfficerToCompany(Long id) {

        ModelMapper modelMapper = new ModelMapper ();
        for (; id < 100000000; id++) {
            Company company = companyRepository.getOne (id);
            List<Officer> byCompany_id = officerRepository.findByNumer (company.getCompany_number ());
            if (byCompany_id != null) {
                List<Worker> officerByCompanies = byCompany_id
                        .stream ()
                        .map (a -> modelMapper.map (a, Worker.class))
                        .collect (Collectors.toList ());
                company.setOfficers (officerByCompanies);
                companyRepository.save (company);

            }

        }

    }

    public List<CompanyDTO> findByActivity(String activity) {
        ModelMapper modelMapper = new ModelMapper ();
        List<Company> containing = companyRepository.findCompaniesByActivityContaining (activity);
        List<Company> keywordsIndustryContaining = companyRepository.findCompaniesByKeywordsIndustryContaining (activity);
        List<Company> sector_activity = companyRepository.findCompaniesBySicContaining (activity);
        List<Company> catalog = companyRepository.findCompaniesByCatalogContaining (activity);
        Set<Company> companyDTOS = new HashSet<> ();
        companyDTOS.addAll (keywordsIndustryContaining);
        companyDTOS.addAll (catalog);
        companyDTOS.addAll (containing);
        companyDTOS.addAll (sector_activity);
        return companyDTOS.stream ().map (a -> modelMapper.map (a, CompanyDTO.class)).collect (Collectors.toList ());
    }

    public List<CompanyDTO> searcByNameCompany(String name) {
        return companyRepository
                .findCompanyByNameContaining (name)
                .stream ()
                .map (a -> modelMapper.map (a, CompanyDTO.class))
                .collect (Collectors.toList ());
    }

    public List<CompanyDTO> searchBYActyvityAndAddress(String actyvity,
            String address) {
        return companyRepository
                .findCompaniesByRegistered_addressAndActivity (address, "%" + actyvity + "%")
                .stream ()
                .map (company -> modelMapper.map (company, CompanyDTO.class))
                .collect (Collectors.toList ());
    }
}

