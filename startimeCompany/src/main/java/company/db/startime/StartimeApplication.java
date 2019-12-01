package company.db.startime;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class StartimeApplication {

    public static void main(String[] args)  {
        System.setProperty ("-DLog4jContextSelector", "org.apache.logging.log4j.core.async.AsyncLoggerContextSelector");
        SpringApplication.run(StartimeApplication.class, args);



    }
}
