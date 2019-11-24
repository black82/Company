package company.db.startime.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table ( name = "CONTACT_COMPANY" )
public class ContactCompany {
    @Id
    @GeneratedValue ( strategy = GenerationType.IDENTITY )
    @Column ( name = "CONTACT_ID" )
    private Long id;
    private String telephone;
    private String fax;
    private String url;
    private String email;
    private String googleUri;
    @ElementCollection
    @CollectionTable ( name = "EMAILS",
            joinColumns = @JoinColumn ( name = "CONTACT_ID" ) )
    private Set<String> emails = new HashSet<> ();
    private String web2Url;
}
