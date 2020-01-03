package company.db.startime.controler;

import company.db.startime.colectorcompanydate.Colector;
import company.db.startime.colectorcompanydate.SubstringToHtmlDataToCompany;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin ( origins = "http://localhost:4200" )
@RestController
@RequestMapping ( value = "/api/" )
public class AdminController {
    @Autowired
    Colector colector;
    @Autowired
    SubstringToHtmlDataToCompany substringToHtmlDataToCompany;


    @GetMapping ( "collweb/{id}" )
    public ResponseEntity colectstart(@PathVariable Long id)
        {
        colector.restartCollectweb ();
            return ResponseEntity
                    .status (HttpStatus.OK)
                    .body (colector.startColector (id));
    }

    @GetMapping ( "/google/{id}" )
    public void colectToGoogle(@PathVariable Long id) {
        substringToHtmlDataToCompany.iterateToGoogleSearch (id);
    }

    @GetMapping ( "/activity/{id}" )
    public void activitiCompanyToHtml(@PathVariable Long id) {
        colector.interactToCatalogCutToDataBase (id);
    }

    @GetMapping ( "stopcollectweb" )
    public ResponseEntity<Boolean> stopeCllectServer()
        {
            return ResponseEntity
                    .ok ()
                    .body (colector.stopCollectServer ());
    }
}
