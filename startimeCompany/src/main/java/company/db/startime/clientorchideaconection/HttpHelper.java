package company.db.startime.clientorchideaconection;

import org.apache.http.HttpHost;
import org.apache.http.config.Registry;
import org.apache.http.config.RegistryBuilder;
import org.apache.http.conn.socket.ConnectionSocketFactory;
import org.apache.http.conn.socket.PlainConnectionSocketFactory;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;
import org.apache.http.protocol.HttpContext;
import org.apache.http.protocol.HttpCoreContext;
import org.apache.http.ssl.SSLContexts;

import javax.net.ssl.SSLContext;
import java.io.IOException;
import java.net.*;
//Deprecate

public final class HttpHelper {
    public static CloseableHttpClient createClient() {
        Registry<ConnectionSocketFactory> reg = RegistryBuilder.<ConnectionSocketFactory>create ()
                .register ("http", ProxySelectorPlainConnectionSocketFactory.INSTANCE)
                .register ("https", new ProxySelectorSSLConnectionSocketFactory (SSLContexts.createSystemDefault ()))
                .build ();
        PoolingHttpClientConnectionManager cm = new PoolingHttpClientConnectionManager (reg);
        HttpHost proxy = new HttpHost ("127.0.0.1", 8118, "http");
        return HttpClients.custom ().setConnectionManager (cm).setProxy (proxy).build ();
    }

    private static Socket createSocket(HttpContext context) {
        HttpHost httpTargetHost = (HttpHost) context.getAttribute (HttpCoreContext.HTTP_TARGET_HOST);
        URI uri = URI.create (httpTargetHost.toURI ());
        Proxy proxy = ProxySelector.getDefault ().select (uri).iterator ().next ();
        return new Socket (proxy);
    }

    private enum ProxySelectorPlainConnectionSocketFactory implements ConnectionSocketFactory {
        INSTANCE;

        @Override
        public Socket createSocket(HttpContext context) {
            return HttpHelper.createSocket (context);
        }

        @Override
        public Socket connectSocket(int connectTimeout,
                Socket sock,
                HttpHost host,
                InetSocketAddress remoteAddress,
                InetSocketAddress localAddress,
                HttpContext context) throws IOException {
            return PlainConnectionSocketFactory.INSTANCE.connectSocket (connectTimeout, sock, host, remoteAddress, localAddress, context);
        }
    }

    private static final class ProxySelectorSSLConnectionSocketFactory extends SSLConnectionSocketFactory {
        ProxySelectorSSLConnectionSocketFactory(SSLContext sslContext) {
            super (sslContext);
        }

        @Override
        public Socket createSocket(HttpContext context) {
            return HttpHelper.createSocket (context);
        }
    }

}