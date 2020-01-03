package company.db.startime.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table ( name = "COMPANY_ACTIVITY" )
@EqualsAndHashCode
public class CompanyActivyty implements Serializable, Cloneable {
    @Id
    @GeneratedValue ( strategy = GenerationType.IDENTITY )
    @Column ( name = "ACTIVITY_ID" )
    Long activityID;
    @Column ( name = "TYPEACTIVITY" )
    String typeActivity;

    @JsonIgnore
    @ManyToMany ( cascade = {CascadeType.PERSIST, CascadeType.MERGE},
            mappedBy = "companyActivyties" )
    private List<Company> newCompanyPoj = new ArrayList<> ();

}
