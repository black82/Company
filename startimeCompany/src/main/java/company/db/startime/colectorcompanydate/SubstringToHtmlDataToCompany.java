package company.db.startime.colectorcompanydate;

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;
import com.sun.jersey.api.client.config.ClientConfig;
import com.sun.jersey.api.client.config.DefaultClientConfig;
import com.sun.jersey.client.urlconnection.HTTPSProperties;
import company.db.startime.clientorchideaconection.ClientOrhidea;
import company.db.startime.model.Company;
import company.db.startime.repository.CompanyRepository;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.*;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.ws.rs.core.MediaType;
import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.net.URL;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


@Component

public class SubstringToHtmlDataToCompany {
    private final Path pathGogle = Paths.get ("classpath:src/main/resources/emaigetbyuri.txt");
    @Autowired
    CompanyRepository companyRepository;
    @Autowired
    Colector colector;
    @Autowired
    ClientOrhidea orhidea;


    // Cut to html cod interest value  and set to company
    public Company substringHtml(Company company,
            String url) {
        String html = connectionSeleniumTor (url);
        company.setHtml (html);
        companyRepository.save (company);
        String telephon = "";
        String fax = "";
        String url1 = "";
        String grown_out = "";
        String sic = "";
        String kapital = "";
        if (html.contains ("og:phone_number")) {
            telephon = html.substring (html.indexOf ("og:phone_number", 1) + 26, html.indexOf ("og:phone_number", 1) + 40);
        }
        if (html.contains ("og:fax_number")) {
            fax = html.substring (html.indexOf ("og:fax_number", 1) + 24, html.indexOf ("og:fax_number", 1) + 36);
        }
        if (html.contains ("contact-data-url")) {
            url1 = html.substring (html.lastIndexOf ("contact-data-url") + 27, html.lastIndexOf ("contact-data-url") + 127);
        }
        if (html.contains ("WZ2008")) {
            grown_out = html.substring (html.indexOf ("WZ2008") + 43, html.indexOf ("WZ2008") + 140);
        }
        if (html.contains ("S.I.C")) {
            sic = html.substring (html.lastIndexOf ("S.I.C") + 42, html.indexOf ("S.I.C") + 120);
        }
        if (html.contains ("Kapital")) {
            kapital = html.substring (html.indexOf ("Kapital") + 44, html.indexOf ("Kapital") + 58);
        }
        company = setComapanyValuie (telephon, fax, url1, grown_out, sic, kapital, company);
        companyRepository.save (company);
        colector.cutCatalogByIndustri (company, html);

        return company;
    }

    private Company setComapanyValuie(String telephon,
            String fax,
            String url1,
            String grown_out,
            String sic,
            String kapital,
            Company company) {
        company.setSic (validatorSic (sic));
        company.setKapital (validatorKapital (kapital));
        company.setSector_of_activity (validatorGrownOut (grown_out));
        company.setUrl (validatorUrl (url1));
        company.setFax (validatorTelephoneFax (fax));
        company.setTelephone (validatorTelephoneFax (telephon));
        return company;
    }

    //Validator by telephone and fax
    private String validatorTelephoneFax(String string) {
        String substring = " ";
        if (string.length () > 3) {
            substring = string.substring (1, 2);
            try {
                Integer.parseInt (substring);
                if (string.contains (String.valueOf ('"'))) {
                    String[] split = string.split (String.valueOf ('"'));
                    return split[0];
                }
                else { return string; }
            } catch (NumberFormatException e) {
                return " ";
            }
        }
        else { return ""; }
    }

    // Validator by URL
    private String validatorUrl(String string) {
        if (string.length () > 4 && string.contains ("www") || string.contains ("/") || string.contains (".")) {
            if (string.contains ("/schema.org")) return " ";
            String[] split = string.split (String.valueOf ('"'));
            String stringUrl = split[0];
            try {
                URL url = new URL (stringUrl);
                url.toURI ();
                return stringUrl;
            } catch (Exception exception) {
                return " ";
            }
        }
        else {
            return " ";
        }
    }

    // validator by sic
    private String validatorSic(String sic) {
        if (sic.contains ("facebook") || sic.contains ("/2008/fbml")) {
            return "";
        }
        else {
            String[] split = sic.split ("<");
            return split[0];
        }
    }

    //Validator by Kapital company
    private String validatorKapital(String kapital) {
        if (kapital.contains ("facebook")) {
            return "";
        }
        if (kapital.contains ("EUR")) {
            String[] split = kapital.split ("<");
            return split[0];
        }
        else { return ""; }
    }

    // Validator by Grown Out
    private String validatorGrownOut(String string) {
        if (string.length () < 100 && string.length () > 0) {
            if (string.contains ("2008/fbml")) return "";
            if (string.contains ("<")) {
                String[] split = string.split ("<");
                return split[0];
            }
            if (string.contains (String.valueOf ('"'))) {
                String[] split = string.split (String.valueOf ('"'));
                return split[0];
            }
            return string;
        }
        else { return " "; }
    }

    private String validatorToEmail(String email) {
        if (email.contains ("@")) {
            String[] split = email.split (String.valueOf ('"'));
            return split[0];
        }
        else { return ""; }
    }

    //Connection by webPages use com.sun.jersey.api.client.Client
    public String connection(String url) {
        System.setProperty ("https.protocols", "TLSv1,TLSv1.1,TLSv1.2");
        HostnameVerifier hostnameVerifier = HttpsURLConnection.getDefaultHostnameVerifier ();
        ClientConfig config = new DefaultClientConfig ();
        SSLContext ctx = null;
        try {
            ctx = SSLContext.getInstance ("TLS");
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace ();
        }
        try {
            ctx.init (null, null, null);
        } catch (KeyManagementException e) {
            e.printStackTrace ();
        }
        config
                .getProperties ()
                .put (HTTPSProperties.PROPERTY_HTTPS_PROPERTIES, new HTTPSProperties (hostnameVerifier, ctx));
        config.getProperties ().put (ClientConfig.PROPERTY_FOLLOW_REDIRECTS, true);
        Client client = Client.create (config);
        client.setFollowRedirects (true);
        client.getProperties ().put (ClientConfig.PROPERTY_FOLLOW_REDIRECTS, true);
        WebResource webResource = client.resource (url.trim ());
        String html;
        ClientResponse response = webResource
                .accept (MediaType.TEXT_HTML_TYPE)
                .header ("user-agent", "")
                .get (ClientResponse.class);
        if (response.getStatus () == 300 || response.getStatus () == 301 || response.getStatus () == 302) {
            URI uri = response.getLocation ();
            webResource = client.resource (uri);
            response = webResource.accept (MediaType.TEXT_HTML_TYPE).get (ClientResponse.class);
        }
        if (response.getStatus () >= 200 || response.getStatus () <= 300) {
            html = webResource.get (String.class);
        }
        else { throw new RuntimeException (" Error by connection:" + response.getStatus ()); }
        return html;
    }

    //check wep Pages company to contain tag mailto
    public String colectMailToWebSite(String url) {
        if (url.contains (String.valueOf ('"'))) {
            String[] split = url.split (String.valueOf ('"'));
            url = split[0];
        }
        String url1 = validatorUrl (url);
        String html = connection (url1);
        try {
            return validatorToEmail (html.substring (html.indexOf ("mailto") + 7, html.indexOf ("mailto") + 50));
        } catch (StringIndexOutOfBoundsException e) {
            return " ";
        }
    }

    // Search to google fry case to catch company email&url
    public void searchToGoogleCompanyWebPagesAndEmail(Company company) {
        String registered_address = " ";
        String urlToGoogle = " ";
        if (company.getRegistered_address () != null) {
            registered_address = company.getRegistered_address ();
        }
        else {
            if (company.getRegistrar () != null && !company.getRegistrar ().isEmpty ()) {
                registered_address = company.getRegistrar ();
            }
        }

        if (!registered_address.equals (" ")) {
            urlToGoogle = colectToGoogle (company.getName (), registered_address, company.getId ());

            if (urlToGoogle.equals (" ") && company.getRegistrar () != null && !company
                    .getRegistrar ()
                    .isEmpty () && !registered_address.equals (company.getRegistrar ())) {
                registered_address = company.getRegistrar ();
                urlToGoogle = colectToGoogle (company.getName (), company.getRegistrar (), company.getId ());
            }
            if (urlToGoogle.equals (" ") && !registered_address.equals (company.getRegisteredoffice ()) && company.getRegisteredoffice () != null) {
                urlToGoogle = colectToGoogle (company.getName (), company.getRegisteredoffice (), company.getId ());
            }
        }
        searchEmailsToGoogleLinkAndSetEmailsToCompanyPojo (urlToGoogle, company);

    }

    private void searchEmailsToGoogleLinkAndSetEmailsToCompanyPojo(String urlToGoogle,
            Company company) {
        if (!urlToGoogle.equals (" ")) {
            company.setGoogleUri (urlToGoogle);
            Set<String> emailsToUri = getEmailsToUri (urlToGoogle);
            if (emailsToUri.size () != 0) {
                if (company.getEmails ().isEmpty ()) company.setEmails (emailsToUri);
            }
            companyRepository.save (company);
        }
    }

    // Used Web Driver  search to google web pages company with (name and address)
    public String colectToGoogle(String registered_address,
            String nameCompany,
            Long id) {
        System.setProperty ("java.net.preferIPv4Stack", "true");
        System.setProperty ("webdriver.chrome.driver", "C:\\Users\\black82\\Downloads\\chromedriver.exe");
        WebDriver driver = new ChromeDriver ();
        driver.get ("http://www.google.com");
        driver.findElement (By.name ("q")).sendKeys (nameCompany + " " + registered_address + Keys.ENTER);
        String datentime = driver.getPageSource ();
        driver.close ();
        String substring = datentime.substring (datentime.indexOf ("\"QqG1Sd\"") + 36, datentime.indexOf ("\"QqG1Sd\"") + 150);
        String[] split = substring.split (String.valueOf ('"'));
        String[] split1 = split[0].split (String.valueOf ('"'));
        String url = validatorUrl (split1[0]);
        colector.writeToFileCompanyId (id, pathGogle);
        driver.quit ();
        return url;
    }

    //Iterate to new Search email and web page by google
    public void iterateToGoogleSearch(Long id) {
        for (; id < 6000000; id++) {
            Optional<Company> optionalCompany = companyRepository.findById (id);
            if (optionalCompany.isPresent ()) {
                Company one = optionalCompany.get ();
                String s = Optional.ofNullable (one.getRegisteredoffice ()).orElse ("");
                if (!s.isEmpty ()) {
                    if (one.getRegisteredoffice ().equals ("Berlin")) {
                        if (one.getCurrent_status ().equals ("currently registered")) {
                            try {
                                searchToGoogleCompanyWebPagesAndEmail (one);
                            } catch (Exception e) {
                                e.printStackTrace ();
                            }
                        }
                    }
                }
            }
        }
    }

    //get email to webPages to receded URL used Pattern matcher and scan all input String
    private Set<String> getEmailsToUri(String urlToGoogle) {
        System.setProperty ("java.net.preferIPv4Stack", "true");
        Pattern p = Pattern.compile ("\\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}\\b", Pattern.CASE_INSENSITIVE);
        System.setProperty ("webdriver.chrome.driver", "C:\\Users\\black82\\Downloads\\chromedriver.exe");
        WebDriver driver = new ChromeDriver ();
        driver.get (urlToGoogle);
        String inputHTMLToWebDrive;
        try {
            inputHTMLToWebDrive = driver.getPageSource ();
        } catch (Exception e) {
            driver.switchTo ().alert ().accept ();
            inputHTMLToWebDrive = driver.getPageSource ();
        }
        driver.close ();
        Matcher matcher = p.matcher (inputHTMLToWebDrive);
        Set<String> emails = new HashSet<> ();
        if (inputHTMLToWebDrive.contains ("mailto")) {
            String mailto = validatorToEmail (inputHTMLToWebDrive.substring (inputHTMLToWebDrive.indexOf ("mailto") + 7, inputHTMLToWebDrive
                    .indexOf ("mailto") + 50));
            if (!(mailto.equals (" "))) emails.add (mailto);
        }
        while (matcher.find ()) {
            if (!matcher.group ().contains (".jpg") && !matcher.group ().contains (".png") && !matcher
                    .group ()
                    .contains (".css") && !matcher.group ().contains (".jpeg") && !matcher
                    .group ()
                    .contains (".js") && !matcher.group ().contains (".gif") && !matcher.group ().contains (".png")) {
                emails.add (matcher.group ());
            }
        }

        driver.quit ();
        return emails;

    }

    //Connection Selenium Tor
    public String connectionSeleniumTor(String url) {
        System.setProperty ("webdriver.gecko.driver", "/home/black/Загрузки/geckodriver-v0.26.0-linux64/geckodriver");
        WebDriver driver;
        FirefoxProfile profile = setingFirefoxProfil ();
        DesiredCapabilities cap = new DesiredCapabilities ();
        FirefoxBinary firefoxBinary = new FirefoxBinary ();
        GeckoDriverService service = new GeckoDriverService.Builder (firefoxBinary)
                .usingDriverExecutable (new File ("/home/black/Загрузки/geckodriver-v0.26.0-linux64/geckodriver"))
                .usingAnyFreePort ()
                .build ();
        try {
            service.start ();
        } catch (IOException e) {
            e.printStackTrace ();
        }

        FirefoxOptions options = new FirefoxOptions (cap).setBinary (firefoxBinary).setProfile (profile);

        driver = new FirefoxDriver (options);
        try {
            driver.get (url);
            return driver.getPageSource ();
        } finally {
            driver.quit ();
            if (service.isRunning ()) {
                service.stop ();
            }
        }

    }

    public FirefoxProfile setingFirefoxProfil() {
        FirefoxProfile ff_prof = new FirefoxProfile ();

        ff_prof.setPreference ("places.history.enabled", false);
        ff_prof.setPreference ("privacy.clearOnShutdown.offlineApps", true);
        ff_prof.setPreference ("privacy.clearOnShutdown.passwords", true);
        ff_prof.setPreference ("privacy.clearOnShutdown.siteSettings", true);
        ff_prof.setPreference ("privacy.sanitize.sanitizeOnShutdown", true);
        ff_prof.setPreference ("signon.rememberSignons", false);
        ff_prof.setPreference ("network.cookie.lifetimePolicy", 2);
        ff_prof.setPreference ("network.dns.disablePrefetch", true);
        ff_prof.setPreference ("network.http.sendRefererHeader", 0);
        ff_prof.setPreference ("network.proxy.type", 1);
        ff_prof.setPreference ("network.proxy.socks_version", 5);
        ff_prof.setPreference ("network.proxy.socks", "127.0.0.1");
        ff_prof.setPreference ("network.proxy.socks_port", 9050);
        ff_prof.setPreference ("network.proxy.socks_remote_dns", true);
        ff_prof.setPreference ("permissions.default.image", 2);

        return ff_prof;
    }
}




