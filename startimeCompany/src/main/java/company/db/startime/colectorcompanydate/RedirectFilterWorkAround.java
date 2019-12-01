//package company.db.startime.colectorcompanydate;
//
//import javax.ws.rs.client.ClientRequestContext;
//import javax.ws.rs.client.ClientResponseContext;
//import javax.ws.rs.client.ClientResponseFilter;
//import javax.ws.rs.core.Response;
//import java.io.IOException;
//import java.io.InputStream;
//
//appender.console.layout.pattern = [%-5level] %d{yyyy-MM-dd HH:mm:ss.SSS} [%t] %c{1} - %msg%n
//
//
//        appender.file.layout.pattern=[%-5level] %d{yyyy-MM-dd HH:mm:ss.SSS} [%t] %c{1} - %msg%n
//
//        # Rotate log file
//
//        appender.rolling.filePattern = logs/$${date:yyyy-MM}/app-%d{MM-dd-yyyy}-%i.log.gz
////public class RedirectFilterWorkAround implements ClientResponseFilter {
//    @Override
//    public void filter(ClientRequestContext requestContext, ClientResponseContext responseContext) throws IOException {
//        if (responseContext.getStatusInfo().getFamily() != Response.Status.Family.REDIRECTION)
//            return;
//
//        Response resp = requestContext.getClient().target(responseContext.getLocation()).request().method(requestContext.getMethod());
//
//        responseContext.setEntityStream((InputStream) resp.getEntity());
//        responseContext.setStatusInfo(resp.getStatusInfo());
//        responseContext.setStatus(resp.getStatus());
//    }
//
//    /* /*   System.setProperty ("webdriver.gecko.driver", "/home/black82/Downloads/geckodriver");
//        String torPath = "/home/black82/Downloads/tor-browser-linux64-8.5.5_ru/tor-browser_ru/Browser/start-tor-browser";
//        String profilePath = "/home/black82/Downloads/tor-browser-linux64-8.5 (1).5_ru/tor-browser_ru/Browser/TorBrowser/Data/Browser/profile.default/";
//        FirefoxProfile profile = new FirefoxProfile (new File (profilePath));
//        profile.setPreference ("network.proxy.type", 1);
//        profile.setPreference ("network.proxy.socks", "127.0.0.1");
//        profile.setPreference ("network.proxy.socks_port", 9050);
//        profile.setPreference ("network.proxy.socks_version", 5);
//       profile.setPreference ("places.history.enabled", false);
//       profile.setPreference ("privacy.clearOnShutdown.offlineApps", true);
//       profile.setPreference ("privacy.clearOnShutdown.passwords", true);
//
//       profile.setPreference ("privacy.sanitize.sanitizeOnShutdown", true);
//      // profile.setPreference ("signon.rememberSignons", false );
//      //  profile.setPreference ("network.http.sendRefererHeader", 0 );
//
//
//        profile.setPreference ("network.cookie.lifetimePolicy", 2);
//       // profile.setPreference ("network.dns.disablePrefetch",true);
//        //profile.setPreference("webdriver.load.strategy", unstable);
//        profile.setAcceptUntrustedCertificates (true);
//       profile.setPreference ("driver.privatebrowsing.autostart", true);
//        FirefoxBinary binary = new FirefoxBinary (new File (torPath));
//        try {
//            binary.startProfile (profile, new File (profilePath), "");
//        } catch (IOException e) {
//            e.printStackTrace ();
//        }
//        FirefoxOptions options = new FirefoxOptions ().setBinary (binary);
//            WebDriver driver = new FirefoxDriver (options);
//
//        String conectionStatus =ceskConectionStatus (driver, url);
//            if (!conectionStatus.equals (" ")) {
//                driver.quit ();
//
//                return conectionStatus;
//
//            }
//            else {
//                driver.quit ();
//
//                connectionSeleniumTor (url);
//                return "null";
//            }
//
//
//
//
//
//
//
//
//
//             @SuppressWarnings ( value = "ceskConectionStatus" )
//    private String ceskConectionStatus(WebDriver driver,
//            String url) {
//
//         String res = " ";
//         driver.get (url);
//         res = driver.getPageSource ();
//         if (!res.equals (" ")) {
//             return res;
//         }
//         else {
//             try {
//                 Thread.sleep (500000);
//             } catch (InterruptedException e) {
//
//                 e.printStackTrace ();
//             }
//             return res;
//         }
//    }
//
//    //Kill Firefox(Tor) process
//    private void killFirefox() {
//        Runtime rt = Runtime.getRuntime ();
//
//        try {
//            rt.exec ("taskkill /F /IM firefox.exe");
//            while (processIsRunning ("firefox.exe")) {
//                Thread.sleep (100);
//            }
//        } catch (Exception e) {
//            e.printStackTrace ();
//        }
//    }
//
//    //check if is process active
//    private boolean processIsRunning(String process) {
//        boolean processIsRunning = false;
//        String line;
//        try {
//            Process proc = Runtime.getRuntime ().exec ("wmic.exe");
//            BufferedReader input = new BufferedReader (new InputStreamReader (proc.getInputStream ()));
//            OutputStreamWriter oStream = new OutputStreamWriter (proc.getOutputStream ());
//            oStream.write ("process where name='" + process + "'");
//            oStream.flush ();
//            oStream.close ();
//            while ((line = input.readLine ()) != null) {
//                if (line.toLowerCase ().contains ("caption")) {
//                    processIsRunning = true;
//                    break;
//                }
//            }
//            input.close ();
//        } catch (IOException e) {
//            e.printStackTrace ();
//        }
//
//        return processIsRunning;
//    }
//
//    // get process to Systemm Runtime
//    private void killGeckoDriver_IEDriverserver() {
//        try {
//            Runtime.getRuntime ().exec ("taskkill /F /IM geckodriver.exe /T");
//        } catch (IOException e) {
//            e.printStackTrace ();
//        }
//    }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//     */
//
//
//}
