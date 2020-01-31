package company.db.startime.controler;

import company.db.startime.colectorcompanydate.Colector;
import company.db.startime.model.CompanyDTO;
import company.db.startime.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin ( origins = "*" )
@RestController
public class CompanyRestControler {
    @Autowired
    CompanyService companyService;
    @Autowired
    Colector colector;

    @GetMapping ( "get/{cyti}" )
    public ResponseEntity<List<CompanyDTO>> getByRegistr(@PathVariable String cyti)
        {
            return ResponseEntity.ok (companyService.getOllCompanyByCity (cyti));
        }

    @GetMapping ( "/get/{id}" )
    @CrossOrigin ( origins = "http://localhost:4200" )
    public ResponseEntity<CompanyDTO> getById(@PathVariable Long id)
        {
            return ResponseEntity
                    .ok ()
                    .body (companyService.getCompanyById (id));
        }

    @CrossOrigin ( origins = "http://localhost:4200" )
    @GetMapping ( "/get1000/{city}" )
    public ResponseEntity<List<CompanyDTO>> getFirst1000ByCity(@PathVariable String city)
        {
            return ResponseEntity
                    .ok ()
                    .body (companyService.getFirst1000ByRegister_Officer (city));

        }

    @GetMapping ( "get1000byofficer/{register_officer}" )
    public ResponseEntity<List<CompanyDTO>> getByRegisterOfficer(@PathVariable String register_officer)
        {
            return ResponseEntity
                    .ok ()
                    .body (companyService.getFirst1000ByRegister_Officer (register_officer));
        }

    @GetMapping ( "/getByName/{name}" )
    public ResponseEntity<CompanyDTO> findByCompany(@PathVariable String name)
        {
            return ResponseEntity
                    .ok ()
                    .body (companyService.findByNameCompany (name));
        }


    @CrossOrigin ( origins = "http://localhost:4200" )
    @GetMapping ( "/industry/{activity}" )
    public ResponseEntity<List<CompanyDTO>> findByActivity(@PathVariable String activity)
        {
            return ResponseEntity
                    .ok ()
                    .body (companyService.findByActivity (activity));
        }

    @CrossOrigin ( origins = "http://localhost:4200" )
    @GetMapping ( "/name/{name}" )
    public ResponseEntity<List<CompanyDTO>> serachByName(@PathVariable String name)
        {
            return ResponseEntity.ok (companyService.searcByNameCompany (name));
        }

    @CrossOrigin ( origins = "http://localhost:4200" )
    @GetMapping ( params = {"address", "activity"},
            value = "search/" )
    public ResponseEntity<List<CompanyDTO>> findBYAddressAndActivity(@Param ( "address" ) String address,
            @Param ( "activity" ) String activity)
        {
            return ResponseEntity
                    .ok ()
                    .body (companyService.searchBYActyvityAndAddress (activity, address));

        }
}

