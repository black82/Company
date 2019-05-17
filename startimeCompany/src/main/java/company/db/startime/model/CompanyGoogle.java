package company.db.startime.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table( name = "company" )
@NoArgsConstructor
@AllArgsConstructor
public class CompanyGoogle implements Serializable {
    @Id
    @GeneratedValue( strategy = GenerationType.AUTO )
    private Long id;

    private String name;

    private String email;


    private String uriGoogle;

}
