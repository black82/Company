package company.db.startime.colectorcompanydate;

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;
import com.sun.jersey.api.client.config.ClientConfig;
import com.sun.jersey.api.client.config.DefaultClientConfig;
import com.sun.jersey.client.urlconnection.HTTPSProperties;
import company.db.startime.model.Company;
import company.db.startime.repository.CompanyRepository;
import lombok.Data;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.Point;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxBinary;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.ws.rs.core.MediaType;
import java.awt.*;
import java.io.*;
import java.net.URI;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@EnableTransactionManagement
@Data
@Component
public class SubstringToHtmlDataToCompany {
    @Autowired
    CompanyRepository companyRepository;

    public Company substringHtml(Company company, String url) {

        String html = conectionSeleniumTor(url);

        company.setHtml(html);
        companyRepository.saveAndFlush(company);
        String telephon="";
        String fax;
        String url1;
        String grown_out;
        String sic;
        String kapital;



            telephon = html.substring(html.indexOf("og:phone_number",1) + 26, html.indexOf("og:phone_number",1) + 40);
            company.setTelephone(validatorTelephoneFax(telephon));

            fax = html.substring(html.indexOf("og:fax_number",1) + 24, html.indexOf("og:fax_number",1) + 36);
            company.setFax(validatorTelephoneFax(fax));

            url1 = html.substring(html.lastIndexOf("contact-data-url") + 27, html.lastIndexOf("contact-data-url") + 127);

            company.setUrl(validatorUrl(url1));
            grown_out = html.substring(html.indexOf("WZ2008") + 43, html.indexOf("WZ2008")+140);

            company.setSector_of_activity(validatorGrownOut(grown_out));
            sic = html.substring(html.lastIndexOf("S.I.C") + 42, html.indexOf("S.I.C") + 120);
            company.setSic(validatorSic(sic));

            kapital = html.substring(html.indexOf("Kapital" ) + 44, html.indexOf("Kapital" ) + 58);

            company.setKapital(validatorKapital(kapital));
        companyRepository.saveAndFlush(company);

        return company;
    }

    private String validatorTelephoneFax(String string) {
        String substring = " ";
        if (string.length() > 3) {
            substring = string.substring(1, 2);

            try {
                Integer.parseInt(substring);
                if (string.contains(String.valueOf('"'))) {
                    String[] split = string.split(String.valueOf('"'));
                    return split[0];
                } else return string;
            } catch (NumberFormatException e) {
                return " ";
            }
        } else return "";
    }


    private String validatorUrl(String string) {
        if (string.length() > 4 && string.contains("www") || string.contains("/") || string.contains(".")) {
            if (string.contains("/schema.org")) return " ";
            String[] split = string.split(String.valueOf('"'));
            String stringUrl = split[0];
            try {
                URL url = new URL(stringUrl);
                url.toURI();
                return stringUrl;
            } catch (Exception exception) {
                return " ";
            }
        } else {
            return " ";
        }
    }


    private String validatorSic(String sic) {
        if (sic.contains("facebook")||sic.contains("/2008/fbml")) {
            return "";
        } else {
            String[] split = sic.split("<");
            return split[0];
        }
    }

    private String validatorKapital(String kapital) {
        if (kapital.contains("facebook")) {
            return "";
        }
        if (kapital.contains("EUR")) {
            String[] split = kapital.split("<");
            return split[0];
        } else return "";
    }

    private String validatorGrownOut(String string) {
        if (string.length() < 100 && string.length() > 0) {
            if (string.contains("2008/fbml"))return "";
            if (string.contains("<")){
                String[] split = string.split("<");
                return split[0];
            }
            if (string.contains(String.valueOf('"'))){
                String[] split = string.split(String.valueOf('"'));
                return split[0];
            }
            return string;
        }

        else return " ";
    }

    private synchronized String validatorToEmail(String email) {
        if (email.contains("@")) {
            String[] split = email.split(String.valueOf('"'));
            return split[0];
        } else return "";
    }

    public synchronized String conection(String url) {
        System.setProperty("https.protocols", "TLSv1,TLSv1.1,TLSv1.2");
        HostnameVerifier hostnameVerifier = HttpsURLConnection.getDefaultHostnameVerifier();
        ClientConfig config = new DefaultClientConfig();
        SSLContext ctx = null;
        try {
            ctx = SSLContext.getInstance("TLS");
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        try {
            ctx.init(null, null, null);
        } catch (KeyManagementException e) {
            e.printStackTrace();
        }
        config.getProperties().put(HTTPSProperties.PROPERTY_HTTPS_PROPERTIES, new HTTPSProperties(hostnameVerifier, ctx));
        config.getProperties().put(ClientConfig.PROPERTY_FOLLOW_REDIRECTS, true);
        Client client = Client.create(config);
        client.setFollowRedirects(true);

        client.getProperties().put(ClientConfig.PROPERTY_FOLLOW_REDIRECTS, true);

        WebResource webResource = client.resource(url.trim());


        String html;

        ClientResponse response = webResource.accept(MediaType.TEXT_HTML_TYPE).header("user-agent", "").get(ClientResponse.class);
        if (response.getStatus() == 300 || response.getStatus() == 301 || response.getStatus() == 302) {
            URI uri = response.getLocation();
            webResource = client.resource(uri);
            response = webResource.accept(MediaType.TEXT_HTML_TYPE).get(ClientResponse.class);
        }

        if (response.getStatus() >= 200 || response.getStatus() <= 300) {
            html = webResource.get(String.class);

        } else throw new RuntimeException("" + response.getStatus());

        return html;
    }

    public synchronized String colectMailToWebSite(String url) {
        if (url.contains(String.valueOf('"'))) {
            String[] split = url.split(String.valueOf('"'));
            url = split[0];
        }

        String url1 = validatorUrl(url);
        String html = conection(url1);
        try {
            return validatorToEmail(html.substring(html.indexOf("mailto") + 7, html.indexOf("mailto") + 50));
        } catch (StringIndexOutOfBoundsException e) {
            return "1";
        }
    }

    public void colectToGoogle(Company one) {
        Path path = Paths.get("C:\\Users\\Tel-Ran\\Documents\\Git\\startimeCompany\\src\\main\\resources\\emaigetbyuri.txt");
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\Tel-Ran\\Downloads\\chromedriver_win32\\chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().window().setPosition(new Point(-2000, 0));
        driver.get("http://www.google.com");
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        String registered_address;
        if (one.getRegistered_address() != null) {
            registered_address = one.getRegistered_address();
        } else registered_address = one.getRegistrar();
        driver.findElement(By.name("q")).sendKeys(one.getName() + " " + registered_address + Keys.ENTER);
        String datentime = driver.getPageSource();
        driver.close();
        String substring = datentime.substring(datentime.indexOf("\"QqG1Sd\"") + 36, datentime.indexOf("\"QqG1Sd\"") + 150);
        System.out.println(substring);
        String[] split = substring.split(String.valueOf('"'));

        String[] split1 = split[0].split(String.valueOf('"'));
        String url = validatorUrl(split1[0]);
        one.setGoogleUri(url);
        companyRepository.saveAndFlush(one);
        try (BufferedWriter writer = Files.newBufferedWriter(path)) {
            writer.write(one.getId() + " ");
        } catch (IOException ex) {
            ex.printStackTrace();
        }
        if (url.equals(" ")) {
            colectToGoogle2(one);
        } else {
            getEmailsToUri(one);
            companyRepository.saveAndFlush(one);
        }

    }


    public void colectToGoogle2(Company one) {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\Tel-Ran\\Downloads\\chromedriver_win32\\chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().window().setPosition(new Point(-3000, 0));
        driver.get("http://www.google.com");
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        driver.findElement(By.name("q")).sendKeys(one.getName()+" "+one.getRegisteredoffice() + Keys.ENTER);
        String datentime = driver.getPageSource();
        driver.close();
        String substring = datentime.substring(datentime.indexOf("\"QqG1Sd\"") + 36, datentime.indexOf("\"QqG1Sd\"") + 150);
        System.out.println(substring);
        String[] split = substring.split(String.valueOf('"'));

        String[] split1 = split[0].split(String.valueOf('"'));
        String url = validatorUrl(split1[0]);
        one.setGoogleUri(url);
        if (!url.equals(" ")) getEmailsToUri(one);
        companyRepository.saveAndFlush(one);


    }


    public void iterateToGoogleSearch(Long id) {

        for (; id < 6000000; id++) {

            try {
                Company one = companyRepository.getOne(id);
                if (one.getRegisteredoffice().equals("Berlin")) {
                    if (one.getCurrent_status().equals("currently registered")) {

                        colectToGoogle(one);

                    }
                    }

            } catch (Exception e) {

            } finally {
             //   iterateToGoogleSearch(id + 1);
            }

        }
    }

    public void getEmailsToUri(Company one) {
        Pattern p = Pattern.compile("\\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}\\b", Pattern.CASE_INSENSITIVE);


        System.setProperty("webdriver.chrome.driver", "C:\\Users\\Tel-Ran\\Downloads\\chromedriver_win32\\chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().window().setPosition(new Point(-2000, 0));
        driver.get(one.getGoogleUri());

        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        String input = driver.getPageSource();
        driver.close();
        Matcher matcher = p.matcher(input);
        Set <String> emails = new HashSet <String>();
        if (input.contains("mailto")) {
            String mailto = validatorToEmail(input.substring(input.indexOf("mailto") + 7, input.indexOf("mailto") + 50));
            if (!(mailto.equals(" "))) emails.add(mailto);
        }

        while (matcher.find()) {
            if (!matcher.group().contains(".jpg") && !matcher.group().contains(".png") && !matcher.group().contains(".css") && !matcher.group().contains(".jpeg") && !matcher.group().contains(".js") && !matcher.group().contains(".gif") && !matcher.group().contains(".png")) {
                emails.add(matcher.group());

            }
        }
        one.getEmails().removeAll(Collections.emptySet());
        one.setEmails(emails);
        companyRepository.save(one);

    }

    public String conectionSeleniumTor(String url) {


        System.setProperty("webdriver.gecko.driver", "C:\\SeleniumGecko\\geckodriver.exe");
        String torPath =
                "C:\\Users\\Tel-Ran\\Desktop\\Tor Browser\\Browser\\firefox.exe";
        String profilePath =
                "C:\\Users\\Tel-Ran\\Desktop\\Tor Browser\\Browser\\TorBrowser\\Data\\Browser\\profile.default";
        FirefoxProfile torProfile = new FirefoxProfile(new File(profilePath));
        FirefoxBinary binary = new FirefoxBinary(new File(torPath));
        torProfile.setPreference("webdriver.load.strategy", "unstable");
        try
        {
            binary.startProfile(torProfile, new File(profilePath), "");
        }
        catch (IOException e)
        {
            e.printStackTrace();
        }
//
        FirefoxOptions options = new FirefoxOptions()
                .setBinary(new FirefoxBinary(new File(torPath)));

        WebDriver driver = new FirefoxDriver( options);
        driver.get(url);

        driver.manage().window().setPosition(new Point(-2000, 0));
        String html=driver.getPageSource();
        driver.close();
       killFirefox();
        return html;
    }
    private void killFirefox() {
        Runtime rt = Runtime.getRuntime();

        try {
            rt.exec("taskkill /F /IM firefox.exe");
            while (processIsRunning("firefox.exe")) {
                Thread.sleep(100);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private boolean processIsRunning(String process) {
        boolean processIsRunning = false;
        String line;
        try {
            Process proc = Runtime.getRuntime().exec("wmic.exe");
            BufferedReader input = new BufferedReader(new InputStreamReader(proc.getInputStream()));
            OutputStreamWriter oStream = new OutputStreamWriter(proc.getOutputStream());
            oStream.write("process where name='" + process + "'");
            oStream.flush();
            oStream.close();
            while ((line = input.readLine()) != null) {
                if (line.toLowerCase().contains("caption")) {
                    processIsRunning = true;
                    break;
                }
            }
            input.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return processIsRunning;
    }
}




