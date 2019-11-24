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

    @GeneratedValue ( strategy = GenerationType.IDENTITY )
    private Long id;
    @Column ( unique = true,
            name = "email_USER" )
    private String email;
    @Column ( name = "pasword_USER" )
    private String password;
    @Column ( name = "fulname_USERS" )
    private String fullname;
    @Column ( name = "enabled_USER" )
    private boolean enabled;
    @OneToMany ( cascade = CascadeType.ALL,
            orphanRemoval = true,
            fetch = FetchType.LAZY )
    private Set<Role> roles_users;
}
