package company.db.startime.service;


import company.db.startime.model.CompanyDTO;
import company.db.startime.repository.CompanyActivityRepository;
import company.db.startime.repository.CompanyRepository;
import company.db.startime.repository.OfficerRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class CompanyServiceImpl implements CompanyService {
    private final CompanyRepository companyRepository;
    private final OfficerRepository officerRepository;
    private ModelMapper modelMapper = new ModelMapper ();
    @Autowired
    CompanyActivityRepository companyActivityRepository;

    @Autowired
    public CompanyServiceImpl(CompanyRepository companyRepository,
            OfficerRepository officerRepository)
        {
            this.companyRepository = companyRepository;
            this.officerRepository = officerRepository;
        }

    @Autowired
    CompanyActivityList companyActivityList;

    public List<CompanyDTO> getOllCompanyByCity(String city)
        {

            return companyRepository
                    .findCompaniesByAddressCompany_Registrar (city)
                    .stream ()
                    .map (company -> modelMapper.map (company, CompanyDTO.class))
                    .collect (Collectors.toList ());
        }

    public CompanyDTO getCompanyById(Long id)
        {
            //        copactiv ();
            return modelMapper.map (companyRepository.getOne (id), CompanyDTO.class);
        }

    public void copactiv()
        {
            companyActivityList = new CompanyActivityList ();


            for (int i = 5304874; i < 11000000; i++)
                {
                    companyRepository.deleteById (Long.valueOf (i));
                }
        }

    public List<CompanyDTO> getFirst1000ByCity(String city)
        {

            return companyRepository
                    .findCompaniesByAddressCompany_Registrar (city)
                    .stream ()
                    .map (company -> modelMapper.map (company, CompanyDTO.class))
                    .collect (Collectors.toList ());
        }

    @Override
    public List<CompanyDTO> getFirst1000ByRegister_Officer(String register_officer)
        {
            return companyRepository
                    .findCompaniesByAddressCompany_Registrar (register_officer)
                    .stream ()
                    .map (companyDto -> modelMapper.map (companyDto, CompanyDTO.class))
                    .collect (Collectors.toList ());
        }


    public CompanyDTO findByNameCompany(String name)
        {

            return modelMapper.map (companyRepository.findByName (name), CompanyDTO.class);
        }


    public List<CompanyDTO> findByActivity(String activity)
        {
            return companyRepository
                    .findCompanyByActivity (activity)
                    .stream ()
                    .map (company -> modelMapper.map (company, CompanyDTO.class))
                    .collect (Collectors.toList ());
        }

    public List<CompanyDTO> searcByNameCompany(String name)
        {
            return companyRepository
                    .findCompanyByNameContaining ("%" + name + "%")
                    .stream ()
                    .map (a -> modelMapper.map (a, CompanyDTO.class))
                    .collect (Collectors.toList ());
        }

    public List<CompanyDTO> searchBYActyvityAndAddress(String activity,
            String address)
        {
            return companyRepository
                    .findCompaniesByRegistered_addressAndActivity (address, activity)
                    .stream ()
                    .map (company -> modelMapper.map (company, CompanyDTO.class))
                    .collect (Collectors.toList ());
        }
}

