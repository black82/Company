package company.db.startime.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table ( name = "NEWCOMPANY_OFICER" )
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class Officer implements Serializable, Cloneable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String position;
    private String start_date;
    private String type;
    private String numer;
    private String city;
    private String firstname;
    private String flag;
    private String lastname;
    private String title;
    private Integer dismissed;
    private String end_date;
    private String maidenname;
    private Integer reference_no;
}
