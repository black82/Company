package company.db.startime.controler;

import company.db.startime.colectorcompanydate.Colector;
import company.db.startime.colectorcompanydate.SubstringToHtmlDataToCompany;
import company.db.startime.model.Company;
import company.db.startime.model.CompanyDTO;
import company.db.startime.service.CompanyService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CompanyRestControler {
    @Autowired
    CompanyService companyService;
    @Autowired
    Colector colector;
    @Autowired
    SubstringToHtmlDataToCompany substringToHtmlDataToCompany;

    @GetMapping( "/{cyti}" )
    public List <Company> getByRegistr(@PathVariable String cyti) {
        return companyService.getOllCompanyByCity (cyti);
    }

    @GetMapping( "/get/{id}" )
    @CrossOrigin ( origins = "http://localhost:4200" )
    public CompanyDTO getById(@PathVariable Long id) {
        ModelMapper modelMapper = new ModelMapper ();
        Company companyById = companyService.getCompanyById (id);
        return modelMapper.map (companyById, CompanyDTO.class);
    }

    @CrossOrigin ( origins = "http://localhost:4200" )
    @GetMapping( "/get1000/{city}" )
    public List <Company> getFirst1000ByCity(@PathVariable String city) {
        List<Company> first1000ByCity = companyService.getFirst1000ByRegister_Officer (city);
        System.out.println (first1000ByCity);
        return first1000ByCity;
    }

    @GetMapping( "get1000byofficer/{register_officer}" )
    public List <Company> getByRegisterOfficer(@PathVariable String register_officer) {
        return companyService.getFirst1000ByRegister_Officer (register_officer);
    }

    @GetMapping( "/getByName/{name}" )
    public Company findByCompany(@PathVariable String name) {
        return companyService.findByNameCompany (name);
    }


    @GetMapping ( "/officer/{id}" )
    public void colecter(@PathVariable Long id) {
        companyService.insertOfficerToCompany (id);
    }

    @GetMapping( "/col/{id}" )
    public Boolean colectstart(@PathVariable Long id) {
        return colector.startColector (id);
    }

    @GetMapping( "/google/{id}" )
    public void colectToGoogle(@PathVariable Long id) {
        substringToHtmlDataToCompany.iterateToGoogleSearch (id);
    }

    @GetMapping ( "/activity/{id}" )
    public void activitiCompanyToHtml(@PathVariable Long id) {
        colector.interactToCatalogCutToDataBase (id);
    }

    @CrossOrigin ( origins = "http://localhost:4200" )
    @GetMapping ( "/industry/{activity}" )
    public List<CompanyDTO> findByActivity(@PathVariable String activity) {
        return companyService.findByActivity (activity);
    }

    @CrossOrigin ( origins = "http://localhost:4200" )
    @GetMapping ( "/name/{name}" )
    public List<CompanyDTO> serachByName(@PathVariable String name) {
        return companyService.searcByNameCompany (name);
    }

    @GetMapping ( "new/{id}" )
    public String companyrefactoring(@PathVariable Long id) {
        colector.constructnewCompany (id);
        return "FINIS REFACTORYNG";
    }
}

