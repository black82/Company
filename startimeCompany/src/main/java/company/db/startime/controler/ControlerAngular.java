package company.db.startime.controler;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller

public class ControlerAngular {
    @RequestMapping ( value = "/home",
            method = RequestMethod.GET )
    public String getTestTemp() {
        return "resources/static/index.html";
    }
}
