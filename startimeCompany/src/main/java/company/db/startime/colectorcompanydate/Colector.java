package company.db.startime.colectorcompanydate;

import company.db.startime.clientorchideaconection.Status;
import company.db.startime.model.*;
import company.db.startime.repository.CompanyActivityRepository;
import company.db.startime.repository.CompanyRepository;
import company.db.startime.repository.NewCompanyPojoRepository;
import company.db.startime.repository.OfficerRepository;
import company.db.startime.service.CompanyActivityList;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

import java.io.BufferedWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;
import java.util.stream.Collectors;

@Configuration
@Component
@PropertySource ( "classpath:templates/application-local.properties" )

public class Colector {
    @Autowired
    CompanyActivityList companyActivity;
    @Value ( "${midel}" )
    private String midel;
    @Value ( "${finish}" )
    private String finish;
    @Value ( "${start}" )
    private String start;
    @Value ( "${patchweb}" )
    private String patchweb;
    @Value ( "${patch.file.activity}" )
    private String patch2;
    private Path pathWEB = Paths.get ("/home/black82/Desktop/Company/startimeCompany/src/main/resources/web2.txt");
    @Autowired
    CompanyRepository companyRepository;
    @Autowired
    SubstringToHtmlDataToCompany substringToHtmlDataToCompany;
    @Autowired
    NewCompanyPojoRepository companyPojoRepository;
    private Path PATH_ACTIVITY = Paths.get ("/home/black82/Desktop/Company/startimeCompany/src/main/resources/activyty.txt");
    @Autowired
    OfficerRepository officerRepository;
    @Autowired
    CompanyActivityRepository companyActivityRepository;

    public Boolean startColector(Long id) {
        for (; id < 10000000; id++) {
            Optional<Company> one1 = companyRepository.findById (id);
            Company one;
            if (one1.isPresent ()) {
                one = one1.get ();
                String s = Optional.ofNullable (one.getRegisteredoffice ()).orElse ("");
                if (!s.isEmpty ()) {
                    if (one.getRegisteredoffice ().equals ("Berlin")) {
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

    public void colectionDataCompany(Company one) {
        String land = null;
        if (one.getRegisteredoffice () != null) {
            land = one.getRegisteredoffice ().toLowerCase ();
        }
        String land1 = one.getRegisteredoffice ();
        if (land == null) land = one.getRegistrar ();
        String url = start + changeSpaisToUrl (one.getName ()) + midel + land + finish + land1;
        secondUrlToCompany (url, one);
    }

    private String changeSpaisToUrl(String string) {
        if (string.contains (String.valueOf ('"'))) {
            String s = string.replaceAll (String.valueOf ('"'), "");
            return s.replaceAll (" ", "%20").trim ();
        }
        return string.replaceAll (" ", "%20").trim ();
    }

    private void secondUrlToCompany(String url,
            Company companies) {
        String htmlFirstPage;
        if (companies.getRegisteredoffice ().equals ("Berlin")) {
            writeToFileCompanyId (companies.getId (), pathWEB);
        }
        Status status = substringToHtmlDataToCompany.connectionSeleniumTor (url);
        htmlFirstPage = substringToHtmlDataToCompany.ceskStausconectium (status, url);
        String urlToCompanyPage = cutUrlToHtml (htmlFirstPage);
        if (!urlToCompanyPage.equals (" ")) {
            coletAndSaveDate (companies, urlToCompanyPage);
        }
    }

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
        company.setEmail (substringToHtmlDataToCompany.colectMailToWebSite (company.getUrl ()));
        company.setWeb2Url (html);
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

    public void cutCatalogByIndustri(Company company,
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

    public synchronized void writeToFileCompanyId(Long id,
            Path patch) {
        try (BufferedWriter writer = Files.newBufferedWriter (patch)) {
            writer.write (id + " ");
        } catch (IOException ex) {
            ex.printStackTrace ();
        }
    }

    public void constructnewCompany(Long id) {
        for (; id < 6000000; id++) {
            Optional<Company> optionalCompany = companyRepository.findById (id);
            if (optionalCompany.isPresent ()) {
                Company old = optionalCompany.get ();
                if (!old.getCurrent_status ().equals ("removed")) construct (old);
            }

        }
    }

    public Set<String> savetEmails(Company company) {
        Set<String> set = company.getEmails ();
        return new HashSet<> (set);

    }

    public void construct(Company company) {
        //List<Worker> workers = constructWorker (company);
        Set<String> set = company.getEmails ();
        NewCompanyPojo companyPojo = new NewCompanyPojo ();
        List<CompanyActivyty> companyActivyties = create (company, companyPojo);

        ContactCompany contactCompany = new ContactCompany ();
        AddressCompany addressCompany = new AddressCompany ();
        addressCompany.setRegister_art (company.getRegister_art ());
        addressCompany.setRegister_flag_Status_information (company.getRegister_flag_Status_information ());
        addressCompany.setRegistered_address (company.getRegistered_address ());
        addressCompany.setRegisteredoffice (company.getRegisteredoffice ());
        addressCompany.setRegistrar (company.getRegistrar ());
        contactCompany.setEmail (company.getEmail ());
        contactCompany.setFax (company.getFax ());
        contactCompany.setGoogleUri (company.getGoogleUri ());
        contactCompany.setTelephone (company.getTelephone ());
        contactCompany.setWeb2Url (company.getWeb2Url ());
        contactCompany.setUrl (company.getUrl ());

        companyPojo.setCatalog (company.getCatalog ());
        companyPojo.setCompany_number (company.getCompany_number ());
        companyPojo.setCurrent_status (company.getCurrent_status ());
        companyPojo.setJurisdiction_code (company.getJurisdiction_code ());
        companyPojo.setActivity (company.getActivity ());
        companyPojo.setKeywordsIndustry (company.getKeywordsIndustry ());
        companyPojo.setRegister_flag_AD (company.getRegister_flag_AD ());
        companyPojo.setNative_company_number (company.getNative_company_number ());
        companyPojo.setCatalog (company.getCatalog ());
        companyPojo.setName (company.getName ());
        companyPojoRepository.save (companyPojo);
        // if (!workers.isEmpty ()) companyPojo.setOfficers (workers);
        companyPojo.setRetrieved_at (company.getRetrieved_at ());
        companyPojo.setContactCompany (contactCompany);
        companyPojo.setAddressCompany (addressCompany);
        companyPojo.setCompanyActivyties (companyActivyties);
        companyPojo.getContactCompany ().getEmails ().addAll (set);
        companyPojoRepository.save (companyPojo);

    }

    public List<Worker> constructWorker(Company company) {
        ModelMapper modelMapper = new ModelMapper ();
        List<Officer> byCompany_id = officerRepository.findByNumer (company.getCompany_number ());
        if (byCompany_id != null) {
            List<Worker> officerByCompanies = byCompany_id
                    .stream ()
                    .map (a -> modelMapper.map (a, Worker.class))
                    .collect (Collectors.toList ());
            return officerByCompanies;
        }
        return null;
    }

    public List<CompanyActivyty> create(Company company,
            NewCompanyPojo companyPojo) {
        List<CompanyActivyty> activyties = new ArrayList<> ();
        activyties.addAll (split (company.getKeywordsIndustry (), companyPojo));
        activyties.addAll (split (company.getActivity (), companyPojo));
        activyties.addAll (split (company.getCatalog (), companyPojo));
        activyties.addAll (split (company.getSic (), companyPojo));
        activyties.addAll (split (company.getSector_of_activity (), companyPojo));
        return activyties.stream ().distinct ().collect (Collectors.toList ());
    }

    public Set<CompanyActivyty> split(String activiti,
            NewCompanyPojo companyPojo) {
        List<String> activity = companyActivity.getActivity ();
        Set<CompanyActivyty> activyties = new HashSet<> ();
        for (String str : activity) {
            str = str.trim ();
            if (activiti != null && activiti.contains (str) && str.length () > 2 && !str.equals ("und")) {
                Optional<CompanyActivyty> byTypeActivity = companyActivityRepository.findByTypeActivity (str);
                CompanyActivyty companyActivyty;
                if (byTypeActivity.isPresent ()) {
                    companyActivyty = byTypeActivity.get ();
                }
                else {
                    companyActivyty = new CompanyActivyty ();

                    companyActivyty.setTypeActivity (str);
                    companyActivyty.getNewCompanyPoj ().add (companyPojo);
                }

                activyties.add (companyActivyty);
            }
        }
        return activyties;

    }

}




