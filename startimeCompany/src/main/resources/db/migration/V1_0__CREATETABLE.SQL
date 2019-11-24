create table ADDRESS_COMPANY
(
    ADDRESS_ID                       bigint auto_increment
        primary key,
    register_art                     varchar(255) null,
    register_flag_Status_information varchar(255) null,
    registered_address               varchar(255) null,
    registeredoffice                 varchar(255) null,
    registrar                        varchar(255) null
)
    engine = MyISAM;

create table COMPANY_ACTIVITY
(
    ACTIVITY_ID  bigint auto_increment
        primary key,
    typeActivity varchar(255) null
)
    engine = MyISAM;

create table COMPANY_OFFICER
(
    COMPANY_ID bigint not null,
    OFFICER_ID bigint not null,
    constraint UK_ilrquimqa0inig2f8ffp9upjt
        unique (OFFICER_ID)
)
    engine = MyISAM;

create index FKgq0ltqrqxoogauibwfnl0av30
    on COMPANY_OFFICER (COMPANY_ID);

create table COMPANY_TO_ACTIVITY
(
    COMPANY_ID       bigint not null,
    COMPANY_ACTIVITY bigint not null
)
    engine = MyISAM;

create index FK8k3bfrysm9fw9bohg805sfkbh
    on COMPANY_TO_ACTIVITY (COMPANY_ID);

create index FK8p5vaycrstkh5piobl2wfn04h
    on COMPANY_TO_ACTIVITY (COMPANY_ACTIVITY);

create table COMPANY_TO_OFFICER
(
    COMPANY_ID bigint not null,
    OFFICER_ID bigint not null
)
    engine = MyISAM;

create index FK9vsmyfpp2ud8stmkefom1s62d
    on COMPANY_TO_OFFICER (COMPANY_ID);

create index FKj299yrjt3q2sxjf887qw1alwv
    on COMPANY_TO_OFFICER (OFFICER_ID);

create table CONTACT_COMPANY
(
    CONTACT_ID bigint auto_increment
        primary key,
    email      varchar(255) null,
    fax        varchar(255) null,
    googleUri  varchar(255) null,
    telephone  varchar(255) null,
    url        varchar(255) null,
    web2Url    varchar(255) null
)
    engine = MyISAM;

create table Company_emails
(
    Company_id bigint       not null,
    emails     varchar(255) null
)
    engine = MyISAM;

create index FK4hfy32bxahfdq487c1h9f9vqp
    on Company_emails (Company_id);

create table EMAILS
(
    CONTACT_ID bigint       not null,
    emails     varchar(255) null
)
    engine = MyISAM;

create index FKaw6p5g31hbjohdrpdcuekyi1p
    on EMAILS (CONTACT_ID);

create table NEWCOMPANY
(
    COMPANY_ID            bigint auto_increment
        primary key,
    activity              varchar(255) null,
    catalog               varchar(255) null,
    company_number        varchar(255) null,
    current_status        varchar(255) null,
    jurisdiction_code     varchar(255) null,
    keywordsIndustry      varchar(255) null,
    name                  varchar(255) null,
    native_company_number varchar(255) null,
    register_flag_AD      bit          null,
    register_flag_CD      bit          null,
    register_flag_DK      bit          null,
    register_flag_HD      bit          null,
    register_flag_UT      bit          null,
    register_flag_VOE     bit          null,
    retrieved_at          varchar(255) null,
    ADDRESS_ID            bigint       null,
    CONTACT_ID            bigint       null
)
    engine = MyISAM;

create index FKghn15yktlhp64ux9joadvtaul
    on NEWCOMPANY (ADDRESS_ID);

create index FKslyy5hlkevmha0ia5opfeha91
    on NEWCOMPANY (CONTACT_ID);

create table NEWCOMPANY_OFICER
(
    OFFICER_ID   bigint auto_increment
        primary key,
    city         varchar(255) null,
    dismissed    int          null,
    end_date     varchar(255) null,
    firstname    varchar(255) null,
    flag         varchar(255) null,
    lastname     varchar(255) null,
    maidenname   varchar(255) null,
    name         varchar(255) null,
    numer        varchar(255) null,
    position     varchar(255) null,
    reference_no int          null,
    start_date   varchar(255) null,
    title        varchar(255) null,
    type         varchar(255) null
)
    engine = MyISAM;

create table USERS
(
    id            bigint auto_increment
        primary key,
    email_USER    varchar(255) null,
    enabled_USER  bit          null,
    fulname_USERS varchar(255) null,
    pasword_USER  varchar(255) null,
    constraint UK_a73u9vt6rg6se9t7vdxgeyyyy
        unique (email_USER)
);

create table company
(
    id                               bigint auto_increment
        primary key,
    company_number                   varchar(255) null,
    current_status                   varchar(255) null,
    former_registrar                 varchar(255) null,
    jurisdiction_code                varchar(255) null,
    name                             varchar(255) null,
    native_company_number            varchar(255) null,
    register_art                     varchar(255) null,
    register_flag_AD                 tinyint(1)   null,
    register_flag_CD                 tinyint(1)   null,
    register_flag_DK                 tinyint(1)   null,
    register_flag_HD                 tinyint(1)   null,
    register_flag_Note               varchar(255) null,
    register_flag_Status_information varchar(255) null,
    register_flag_UT                 tinyint(1)   null,
    register_flag_VOE                tinyint(1)   null,
    register_nummer                  varchar(255) null,
    registered_address               varchar(255) null,
    registeredoffice                 varchar(255) null,
    registrar                        varchar(255) null,
    retrieved_at                     varchar(255) null,
    telephone                        varchar(13)  null,
    fax                              varchar(20)  null,
    url                              varchar(100) null,
    sector_of_activity               varchar(255) null,
    sic                              varchar(120) null,
    email                            varchar(255) null,
    kapital                          varchar(255) null,
    web2Url                          varchar(255) null,
    html                             longtext     null,
    googleEmail                      varchar(255) null,
    googleUri                        varchar(255) null,
    uriGoogle                        varchar(255) null,
    activity                         varchar(255) null,
    catalog                          varchar(255) null,
    keywordsIndustry                 varchar(255) null,
    google_email                     varchar(255) null
)
    engine = MyISAM
    charset = utf8mb4;

create fulltext index company_activity_index
    on company (activity);

create fulltext index company_catalog_index
    on company (catalog);

create fulltext index company_keywordsIndustry_index
    on company (keywordsIndustry);

create fulltext index company_sic_index
    on company (sic);

create table company_emails
(
    Company_id bigint       not null,
    emails     varchar(255) null
)
    engine = MyISAM
    charset = utf8mb4;

create index FKemogu94nmhuvur4mvf0nqeqae
    on company_emails (Company_id);

create table company_officer
(
    COMPANY_ID bigint not null,
    OFFICER_ID bigint not null,
    constraint UK_ilrquimqa0inig2f8ffp9upjt
        unique (OFFICER_ID)
)
    engine = MyISAM
    charset = utf8mb4;

create index company_officer_COMPANY_ID_index
    on company_officer (COMPANY_ID);

create table flyway_schema_history
(
    installed_rank int                                 not null
        primary key,
    version        varchar(50)                         null,
    description    varchar(200)                        not null,
    type           varchar(20)                         not null,
    script         varchar(1000)                       not null,
    checksum       int                                 null,
    installed_by   varchar(100)                        not null,
    installed_on   timestamp default CURRENT_TIMESTAMP not null,
    execution_time int                                 not null,
    success        tinyint(1)                          not null
)
    charset = utf8mb4;

create index flyway_schema_history_s_idx
    on flyway_schema_history (success);

create table hibernate_sequence
(
    next_val bigint null
)
    engine = MyISAM;

create table name
(
    id           bigint auto_increment
        primary key,
    company_id   varchar(255) null,
    company_name varchar(255) null
)
    engine = MyISAM
    charset = utf8mb4;

create table officer
(
    id           bigint auto_increment
        primary key,
    city         varchar(255) null,
    numer        varchar(255) null,
    dismissed    int          null,
    end_date     varchar(255) null,
    firstname    varchar(255) null,
    flag         varchar(255) null,
    lastname     varchar(255) null,
    maidenname   varchar(255) null,
    name         varchar(255) null,
    position     varchar(255) null,
    reference_no int          null,
    start_date   varchar(255) null,
    title        varchar(255) null,
    type         varchar(255) null
)
    engine = MyISAM
    charset = utf8mb4;

create table officer_by_company
(
    id           bigint auto_increment
        primary key,
    city         varchar(255) null,
    numer        varchar(255) null,
    dismissed    int          null,
    end_date     varchar(255) null,
    firstname    varchar(255) null,
    flag         varchar(255) null,
    lastname     varchar(255) null,
    maidenname   varchar(255) null,
    name         varchar(255) null,
    position     varchar(255) null,
    reference_no int          null,
    start_date   varchar(255) null,
    title        varchar(255) null,
    type         varchar(255) null,
    OFFICER_ID   bigint       not null
)
    engine = MyISAM
    charset = utf8mb4;

create table user_role
(
    id        bigint auto_increment
        primary key,
    ROLESUSER varchar(255) null
);

create table USERS_roles_users
(
    Users_id       bigint not null,
    roles_users_id bigint not null,
    primary key (Users_id, roles_users_id),
    constraint UK_cjdt3d7j33xp2tvxj1xef74ls
        unique (roles_users_id),
    constraint FK6j2yfnf2dsxhnwya7a8agei13
        foreign key (Users_id) references USERS (id),
    constraint FKwxe2x04hmb39oesdwne187id
        foreign key (roles_users_id) references user_role (id)
);