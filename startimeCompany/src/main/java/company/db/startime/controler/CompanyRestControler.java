package company.db.startime.controler;

import company.db.startime.colectorcompanydate.Colector;
import company.db.startime.colectorcompanydate.SubstringToHtmlDataToCompany;
import company.db.startime.model.Company;
import company.db.startime.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
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
        return companyService.getOllCompanyByCity(cyti);
    }

    @GetMapping( "/get/{id}" )
    public Company getById(@PathVariable Long id) {
        return companyService.getCompanyById(id);
    }

    @GetMapping( "/get1000/{city}" )
    public List <Company> getFirst1000ByCity(@PathVariable String city) {
        return companyService.getFirst1000ByCity(city);
    }

    @GetMapping( "get1000byofficer/{register_officer}" )
    public List <Company> getByRegisterOfficer(@PathVariable String register_officer) {
        return companyService.getFirst1000ByRegister_Officer(register_officer);
    }

    @GetMapping( "/getByName/{name}" )
    public Company findByCompany(@PathVariable String name) {
        return companyService.findByNameCompany(name);
    }

    @GetMapping( "/colect/{id}" )
    public String colect(@PathVariable Long id) {

        return colector.colectionDataCompany(id);
    }

    @GetMapping( "/of" )
    public void colecter() {
        companyService.insertOfficerToCompany();
    }

    @GetMapping( "/col/{id}" )
    public String colectstart(@PathVariable Long id) {

        return colector.startColector(id);
    }

    @GetMapping( "/google/{id}" )
    public void colectToGoogle(@PathVariable Long id) {
        substringToHtmlDataToCompany.iterateToGoogleSearch(id);
    }
//    @GetMapping("/tor/")
//    public String conectionTor(){
//        return substringToHtmlDataToCompany.conectionSeleniumTor();
//    }
}

