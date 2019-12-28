package company.db.startime.colectorcompanydate;

import company.db.startime.model.Company;
import company.db.startime.repository.CompanyRepository;
import company.db.startime.service.CompanyActivityList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

import java.io.BufferedWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;


@Component
@PropertySource ( "classpath:application-local.properties" )
public class Colector {
    @Autowired
    private CompanyActivityList companyActivity;
    @Autowired
    private CompanyRepository companyRepository;
    @Autowired
    private SubstringToHtmlDataToCompany substringToHtmlDataToCompany;


    private Boolean stopeCollect = false;

    public Boolean startColector(Long id) {
        for (; id < 10000000; id++) {
            if (this.stopeCollect) {return true;}
            Optional<Company> one1 = companyRepository.findById (id);
            Company one;
            if (one1.isPresent ()) {
                one = one1.get ();
                String s = Optional.ofNullable (one.getAddressCompany ().getRegisteredoffice ()).orElse ("");
                if (!s.isEmpty ()) {
                    if (one.getAddressCompany ().getRegisteredoffice ().equals ("Berlin")) {
                        if (one.getCurrent_status ().equals ("currently registered")) {
                            try {
                                colectionDataCompany (one);

                            } catch (Exception e) {
                                e.printStackTrace ();
                            }
                        }
                    }
                }
            }
        }
        return true;
    }

    @Value ( "${url.collector.midel}" )
    private String midel;

    private String changeSpaisToUrl(String string) {
        if (string.contains (String.valueOf ('"'))) {
            String s = string.replaceAll (String.valueOf ('"'), "");
            return s.replaceAll (" ", "%20").trim ();
        }
        return string.replaceAll (" ", "%20").trim ();
    }

    private Path PATH_ACTIVITY = Paths.get ("activyty.txt");

    private String cutUrlToHtml(String html) {
        if (html.contains ("LM-LIST-CLICKS")) {
            String urlToCompanyInfo = html.substring (html.indexOf ("block bold h4"), html.indexOf ("LM-LIST-CLICKS"));
            return urlToCompanyInfo.substring (urlToCompanyInfo.indexOf ("=") + 2, urlToCompanyInfo.indexOf ("onclick") - 2);
        }
        else { return " "; }
    }

    private void coletAndSaveDate(Company company,
            String html) {
        company = substringToHtmlDataToCompany.substringHtml (company, html);
        company.getContactCompany ().setEmail (substringToHtmlDataToCompany.colectMailToWebSite (company
                                                                                                         .getContactCompany ()
                                                                                                         .getUrl ()));
        company.getContactCompany ().setWeb2Url (html);
        companyRepository.save (company);
    }

    public void interactToCatalogCutToDataBase(Long id) {
        for (; id < 6000000; id++) {
            Optional<Company> byId = companyRepository.findById (id);
            if (byId.isPresent ()) {
                Company company = byId.get ();
                String html = company.getHtml ();
                if (html != null && !html.equals (" ")) cutCatalogByIndustri (company, html);
            }
        }
    }

    @Value ( "${url.collector.finish}" )
    private String finish;
    @Value ( "${start}" )
    private String start;
    private Path path = Paths.get ("webcollect.txt");

    private void secondUrlToCompany(String url,
            Company companies) {
        String htmlFirstPage;

        writeToFileCompanyId (companies.getId (), path);

        htmlFirstPage = substringToHtmlDataToCompany.connectionSeleniumTor (url);
        String urlToCompanyPage = cutUrlToHtml (htmlFirstPage);
        if (!urlToCompanyPage.equals (" ")) {
            coletAndSaveDate (companies, urlToCompanyPage);
        }
    }

    private void colectionDataCompany(Company one) {
        String land = null;
        if (one.getAddressCompany ().getRegisteredoffice () != null) {
            land = one.getAddressCompany ().getRegisteredoffice ().toLowerCase ();
        }
        String land1 = one.getAddressCompany ().getRegisteredoffice ();
        if (land == null) land = one.getAddressCompany ().getRegisteredoffice ();
        String url = start + changeSpaisToUrl (one.getName ()) + midel + land + finish + land1;
        secondUrlToCompany (url, one);
    }

    void cutCatalogByIndustri(Company company,
            String html) {

        if (html.contains ("text-sub visible-xxs")) {
            company.setCatalog (html.substring (html.indexOf ("text-sub visible-xxs") + 22, html.indexOf ("</small><div class=\"row\"")));
        }
        if (html.contains ("Tätigkeit")) {
            String activity = html.substring (html.indexOf ("Tätigkeit") + 45, html.indexOf ("Tätigkeit") + 300);
            String[] split1 = activity.split ("<");
            company.setActivity (split1[0]);
        }
        if (html.contains ("truncated-200")) {
            String keyWords1 = html.substring (html.indexOf ("truncated-200") + 15, html.indexOf ("truncated-200") + 150);
            String[] split = keyWords1.split ("<");
            company.setKeywordsIndustry (split[0]);
        }
        companyRepository.saveAndFlush (company);
        writeToFileCompanyId (company.getId (), PATH_ACTIVITY);
    }

    synchronized void writeToFileCompanyId(Long id,
            Path patch) {
        try (BufferedWriter writer = Files.newBufferedWriter (patch)) {
            writer.write (id + " ");
        } catch (IOException ex) {
            ex.printStackTrace ();
        }
    }

    public Boolean stopCollectServer() {
        stopeCollect = true;
        return true;
    }

    public void restartCollectweb() {
        if (stopeCollect) {
            stopeCollect = false;
        }

    }
}




