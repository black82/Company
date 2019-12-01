//package company.db.startime.clientorchideaconection;
//
//
//import org.apache.http.client.methods.CloseableHttpResponse;
//import org.apache.http.client.methods.HttpGet;
//import org.apache.http.impl.client.CloseableHttpClient;
//import org.apache.http.util.EntityUtils;
//import org.springframework.stereotype.Service;
//
//import java.io.File;
//import java.io.IOException;
//import java.net.URI;
//
//
//@Service
//public class ClientOrhidea {
//
//
//    public Status conectionTorProxy(String url) {
//        Boolean status = null;
//        URI uri = URI.create (url);
//        HttpGet request = new HttpGet (uri);
//        String responseHtml = null;
//        try (CloseableHttpClient closeableHttpClient = HttpHelper.createClient ()) {
//            try (CloseableHttpResponse response = closeableHttpClient.execute (request)) {
//                responseHtml = EntityUtils.toString (response.getEntity ());
//                if (response.getStatusLine ().getStatusCode () != 200 && response
//                        .getStatusLine ()
//                        .getStatusCode () != 404) {
//                    Thread.sleep (15000);
//                    closeableHttpClient.close ();
//                    kilProces ("sudo service tor restart");
//                    Thread.sleep (5000);
//                    kilProces ("sudo service tor start");
//                    Thread.sleep (10000);
//                    closeableHttpClient.close ();
//                    status = false;
//                    throw new RuntimeException ("Connection error");
//                }
//                closeableHttpClient.close ();
//                status = true;
//                Thread.sleep (5000);
//                kilProces ("sudo service tor restart");
//                Thread.sleep (10000);
//                kilProces ("sudo service tor start");
//
//            } catch (InterruptedException e) {
//                e.printStackTrace ();
//            }
//
//        } catch (IOException e) {
//            e.printStackTrace ();
//        } finally {
//
//            return new Status (responseHtml, status);
//        }
//    }
//
//    public void kilProces(String comant) {
//        ProcessBuilder pbuilder = new ProcessBuilder ("bash", "-c", comant);
//        File err = new File ("err.txt");
//        try {
//            pbuilder.redirectError (err);
//            Process p = pbuilder.start ();
//        } catch (Exception e) {
//            e.printStackTrace ();
//        }
//    }
//}
//
//
//
