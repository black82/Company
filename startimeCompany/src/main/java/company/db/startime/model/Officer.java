package company.db.startime.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "officer")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Officer implements Serializable {
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
