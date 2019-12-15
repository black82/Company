package company.db.startime.model;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class CustomListDeserializer extends StdDeserializer<List<CompanyToActivity>> {

    public CustomListDeserializer() {
        this (null);
    }

    public CustomListDeserializer(Class<?> vc) {
        super (vc);
    }

    @Override
    public List<CompanyToActivity> deserialize(JsonParser jsonparser,
            DeserializationContext context) throws IOException {

        return new ArrayList<> ();
    }
}