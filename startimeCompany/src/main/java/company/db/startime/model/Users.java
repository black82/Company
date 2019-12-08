package company.db.startime.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
@Table ( name = "USERS" )
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Users implements Serializable {

    @Id
    @Column ( name = "id" )
    @GeneratedValue ( strategy = GenerationType.AUTO )
    private Long id;

    @Column ( unique = true,
            name = "EMAIL_USER" )
    private String email;

    @Column ( name = "PASSWORD_USER" )
    private String password;

    @Column ( name = "FULLNAME_USERS" )
    private String fullname;

    @Column ( name = "ENABLED_USER" )
    private boolean enabled;

    @OneToMany ( cascade = CascadeType.ALL,
            orphanRemoval = true,
            fetch = FetchType.EAGER )
    private Set<Role> roles_users;
}
