package company.db.startime.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.transaction.Transactional;
import java.io.Serializable;

@Transactional
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table ( name = "ADDRESS_COMPANY" )
public class AddressCompany implements Serializable {
    @Id
    @GeneratedValue ( strategy = GenerationType.IDENTITY )
    @Column ( name = "ADDRESS_ID" )
    private Long id;
    private String registered_address;
    private String registeredoffice;
    private String registrar;
    private String register_art;
    private String register_flag_Status_information;
}
