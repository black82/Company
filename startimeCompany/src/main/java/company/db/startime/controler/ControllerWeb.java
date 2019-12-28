package company.db.startime.controler;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
public class ControllerWeb {
    @RequestMapping ( value = "/home",
            method = RequestMethod.GET )
    public String getTestTemp() {
        return "resources/static/index.html";
    }

    @CrossOrigin ( origins = "http://localhost:4200" )
    @RequestMapping ( value = "/api/logs" )
    public String logsWeb() {
        return "log";
    }
}
