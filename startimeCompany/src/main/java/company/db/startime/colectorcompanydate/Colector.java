package company.db.startime.colectorcompanydate;

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;
import company.db.startime.model.Company;
import company.db.startime.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.BufferedWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Component
public class Colector {

    @Autowired
    CompanyRepository companyRepository;
    @Autowired
    SubstringToHtmlDataToCompany substringToHtmlDataToCompany;

    public String startColector(Long id) {
        Client client = Client.create();

        for (; id < 10000000; id++) {
            WebResource webResource = client.resource("http://localhost:8081/colect/" + id);
            ClientResponse response = webResource.get(ClientResponse.class);

        }
        return "gotova";
    }
    public String colectionDataCompany(Long id) {

        Company one = companyRepository.getOne(id);
        String url = "https://web2.cylex.de/s?q=" + changeSpais(one.getName()) + "&c=&z=&p=1&dst=" + changeSpais(one.getRegisteredoffice()) + "&sUrl=&cUrl=";
        if (one.getRegisteredoffice().equals("Berlin")) {
            if (one.getCurrent_status().equals("currently registered")) {
                secondUrlToCompany(url, one);
            }
        }
        return "finis";
    }

    private String changeSpais(String string) {
        if(string.contains(String.valueOf('"'))) {
            String s = string.replaceAll(String.valueOf('"'), "");
            return s.replaceAll(" ", "%20").trim();
        }
        return string.replaceAll(" ", "%20").trim();
    }

    private void secondUrlToCompany(String url, Company companies) {
        String htmlFirstPage;
//        try {
//            Thread.sleep(40000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
//        Client client = Client.create();
//        System.setProperty("java.net.useSystemProxies", "true");
//        System.setProperty("https.protocols", "TLSv1,TLSv1.1,TLSv1.2");
//        WebResource webResource = client.resource(url);
//        ClientResponse response = webResource.get(ClientResponse.class);
        Path path = Paths.get("C:\\Users\\Tel-Ran\\Documents\\Git\\startimeCompany\\src\\main\\resources\\web2.txt");
if (companies.getRegisteredoffice().equals("Berlin")) {
    try (BufferedWriter writer = Files.newBufferedWriter(path)) {
        writer.write(companies.getId() + " ");
    } catch (IOException ex) {
        ex.printStackTrace();
    }
}
//        if (response.getStatus() == 200) {
//            htmlFirstPage = webResource.get(String.class);
//        } else throw new RuntimeException("" + response.getStatus());
        htmlFirstPage=substringToHtmlDataToCompany.conectionSeleniumTor(url);

        String urlToCompanyPage = cutUrlToHtml(htmlFirstPage);

        coletAndSaveDate(companies, urlToCompanyPage);
    }

    private String cutUrlToHtml(String html) {
        String h4 = html.substring(html.indexOf("block bold h4"), html.indexOf("LM-LIST-CLICKS"));
        return h4.substring(h4.indexOf("=") + 2, h4.indexOf("onclick") - 2);
    }

    private String coletAndSaveDate(Company company, String html) {
        Company company1 = substringToHtmlDataToCompany.substringHtml(company, html);
        company1.setEmail(substringToHtmlDataToCompany.colectMailToWebSite(company1.getUrl()));
        company1.setWeb2Url(html);
        companyRepository.save(company1);

        return company1.getUrl();
    }
}
