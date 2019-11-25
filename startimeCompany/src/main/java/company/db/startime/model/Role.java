package company.db.startime.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@AllArgsConstructor
@Data
@NoArgsConstructor
@Table ( name = "ROLE" )
public class Role implements Serializable {
    @Id

    @GeneratedValue ( strategy = GenerationType.AUTO )
    private Long id;
    @Column ( name = "ROLES_USER" )
    private String roleUser;

}
