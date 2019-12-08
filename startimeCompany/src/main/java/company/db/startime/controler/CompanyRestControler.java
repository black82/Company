package company.db.startime.controler;

import company.db.startime.model.Company;
import company.db.startime.model.CompanyDTO;
import company.db.startime.service.CompanyService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CompanyRestControler {
    @Autowired
    CompanyService companyService;

    @GetMapping ( "/{cyti}" )
    public ResponseEntity<List<CompanyDTO>> getByRegistr(@PathVariable String cyti) {
        return ResponseEntity.ok (companyService.getOllCompanyByCity (cyti));
    }

    @GetMapping ( "/get/{id}" )
    @CrossOrigin ( origins = "http://localhost:4200" )
    public CompanyDTO getById(@PathVariable Long id) {
        ModelMapper modelMapper = new ModelMapper ();
        Company companyById = companyService.getCompanyById (id);
        return modelMapper.map (companyById, CompanyDTO.class);
    }

    @CrossOrigin ( origins = "http://localhost:4200" )
    @GetMapping ( "/get1000/{city}" )
    public List<Company> getFirst1000ByCity(@PathVariable String city) {
        List<Company> first1000ByCity = companyService.getFirst1000ByRegister_Officer (city);
        System.out.println (first1000ByCity);
        return first1000ByCity;
    }

    @GetMapping ( "get1000byofficer/{register_officer}" )
    public List<Company> getByRegisterOfficer(@PathVariable String register_officer) {
        return companyService.getFirst1000ByRegister_Officer (register_officer);
    }

    @GetMapping ( "/getByName/{name}" )
    public Company findByCompany(@PathVariable String name) {
        return companyService.findByNameCompany (name);
    }


    //    @GetMapping ( "/officer/{id}" )
    //    public void colecter(@PathVariable Long id) {
    //        companyService.insertOfficerToCompany (id);
    //    }

    @CrossOrigin ( origins = "http://localhost:4200" )
    @GetMapping ( "/industry/{activity}" )
    public List<CompanyDTO> findByActivity(@PathVariable String activity) {
        return companyService.findByActivity (activity);
    }

    @CrossOrigin ( origins = "http://localhost:4200" )
    @GetMapping ( "/name/{name}" )
    public ResponseEntity serachByName(@PathVariable String name) {
        return ResponseEntity.ok (companyService.searcByNameCompany (name));
    }

    @GetMapping ( params = {"address", "activity"},
            value = "search/" )
    public ResponseEntity findBYAddressAndActivity(@Param ( "address" ) String address,
            @Param ( "activity" ) String activity) {
        return ResponseEntity.ok ().body (companyService.searchBYActyvityAndAddress (activity, address));

    }
}

