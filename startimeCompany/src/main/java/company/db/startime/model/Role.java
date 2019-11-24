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
@Table ( name = "user_role" )
public class Role implements Serializable {
    @Id

    @GeneratedValue ( strategy = GenerationType.IDENTITY )
    private Long id;
    @Column ( name = "ROLESUSER" )
    private String roleUser;

}
