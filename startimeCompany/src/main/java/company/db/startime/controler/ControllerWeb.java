package company.db.startime.controler;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;


@Controller
public class ControllerWeb {
    @CrossOrigin ( origins = "http://localhost:4200" )
    @GetMapping ( value = {"/home", "/web/company/id", "/web/company/city", "/web/company/industry", "/web/error", "/web/company/login", "/web/company/register", "/web/company/city&&branch", "/web/company/log", "/web/company/collectedweb"} )
    public ModelAndView getTestTemp()
        {
            return new ModelAndView ("index");
        }

    @CrossOrigin ( origins = "http://localhost:4200" )
    @GetMapping ( value = "/api/logs" )
    public ModelAndView logsWeb()
        {
            return new ModelAndView ("log");
        }
}
