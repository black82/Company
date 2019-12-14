package company.db.startime.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@Data
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
public class Company_To_Activity_KEY implements Serializable {
    @Column ( name = "COMP_ID" )
    private Long comp_id;
    @Column ( name = "ACTIV_ID" )
    private Long activ_id;

}
