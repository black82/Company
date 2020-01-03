package company.db.startime;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class StartimeApplication {

    public static void main(String[] args)  {
        //        PropertyConfigurator.configure ("log4j.properties");
        SpringApplication.run(StartimeApplication.class, args);
    }
}
