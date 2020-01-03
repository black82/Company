package company.db.startime.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@AllArgsConstructor
@Data
@NoArgsConstructor
@EqualsAndHashCode
public class AuthBody implements Serializable, Cloneable {
    private String email;
    private String password;
}
