package company.db.startime.controler;

import company.db.startime.colectorcompanydate.Colector;
import company.db.startime.colectorcompanydate.SubstringToHtmlDataToCompany;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminController {
    @Autowired
    Colector colector;
    @Autowired
    SubstringToHtmlDataToCompany substringToHtmlDataToCompany;

    @GetMapping ( "/col/{id}" )
    public Boolean colectstart(@PathVariable Long id) {
        return colector.startColector (id);
    }

    @GetMapping ( "/google/{id}" )
    public void colectToGoogle(@PathVariable Long id) {
        substringToHtmlDataToCompany.iterateToGoogleSearch (id);
    }

    @GetMapping ( "/activity/{id}" )
    public void activitiCompanyToHtml(@PathVariable Long id) {
        colector.interactToCatalogCutToDataBase (id);
    }

    @GetMapping ( "new/{id}" )
    public String companyrefactoring(@PathVariable Long id) {
        colector.constructnewCompany (id);
        return "FINIS REFACTORYNG";
    }

}
