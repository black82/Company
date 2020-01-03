create table ADDRESS_COMPANY
(
    ADDRESS_ID                       bigint auto_increment
        primary key,
    register_art                     varchar(255) null,
    register_flag_Status_information varchar(255) null,
    registered_address               varchar(255) null,
    registeredoffice                 varchar(255) null,
    registrar                        varchar(255) null
);

create table COMPANY_ACTIVITY
(
    ACTIVITY_ID  bigint auto_increment
        primary key,
    TYPEACTIVITY varchar(255) null
);

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
);

create table COMPANY
(
    COMPANY_ID              bigint auto_increment
        primary key,
    ACTYVITY_TEXT           varchar(255)   null,
    CATALOG_INDUSTRY_BRANCH varchar(200)   null,
    COMPANY_NUMBER          varchar(50)    not null,
    CURRENT_STATUS          varchar(20)    null,
    JURISDICTION_CODE       varchar(10)    null,
    KEY_WORD_INDUSTR        varchar(150)   null,
    NAME                    varchar(255)   null,
    NATIVE_COMPANY_NUMBER   varchar(100)   null,
    REGISTER_FLAG_AD        bit            null,
    REGISTER_FLAG_CD        bit            null,
    REGISTER_FLAG_DK        bit            null,
    REGISTER_FLAG_HD        bit            null,
    REGISTER_FLAG_UT        bit            null,
    REGISTER_FLAG_VOE       bit            null,
    RETRIEVED_AT            varchar(25)    null,
    ADDRESS_ID              bigint         null,
    CONTACT_ID              bigint         null,
    html                    varchar(20000) null,
    capital                 varchar(50)    null,
    sic                     varchar(255)   null,
    constraint FKj82ujdlsqm7nrallcve7ocdi8
        foreign key (ADDRESS_ID) references ADDRESS_COMPANY (ADDRESS_ID),
    constraint FKp50wtp5u1ojya9dlrdh36w9ps
        foreign key (CONTACT_ID) references CONTACT_COMPANY (CONTACT_ID)
);

create table COMPANY_TO_ACTIVITY
(
    COMP_ID  bigint not null,
    ACTIV_ID bigint not null,
    constraint COMPANY_TO_ACTIVITY_COMPANY_ACTIVITY__fk
        foreign key (ACTIV_ID) references COMPANY_ACTIVITY (ACTIVITY_ID)
            on update cascade on delete cascade,
    constraint FK8p5vaycrstkh5piobl2wfn04h
        foreign key (ACTIV_ID) references COMPANY_ACTIVITY (ACTIVITY_ID),
    constraint FKdjr9en98036d5pwcqnt2qe6em
        foreign key (COMP_ID) references COMPANY (COMPANY_ID),
    constraint FKq91f31p41c4ukohn9yandyec7
        foreign key (ACTIV_ID) references COMPANY_ACTIVITY (ACTIVITY_ID)
);

create table EMAILS
(
    CONTACT_ID bigint       not null,
    emails     varchar(255) null,
    constraint FKaw6p5g31hbjohdrpdcuekyi1p
        foreign key (CONTACT_ID) references CONTACT_COMPANY (CONTACT_ID)
);

create table NEWCOMPANY_OFICER
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
    charset = utf8mb4;

create table COMPANY_TO_OFFICER
(
    COMPANY_ID bigint not null,
    OFFICER_ID bigint not null,
    constraint FKj299yrjt3q2sxjf887qw1alwv
        foreign key (OFFICER_ID) references NEWCOMPANY_OFICER (id),
    constraint FKjah37sqk49yrwx6uj2k4b0lxq
        foreign key (COMPANY_ID) references COMPANY (COMPANY_ID)
);

create table OldCompany
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
    on OldCompany (activity);

create fulltext index company_catalog_index
    on OldCompany (catalog);

create fulltext index company_keywordsIndustry_index
    on OldCompany (keywordsIndustry);

create fulltext index company_sic_index
    on OldCompany (sic);

create table ROLE
(
    id         bigint       not null
        primary key,
    ROLES_USER varchar(255) null
);

create table TYPEACTIVITY
(
    TYPE varchar(255) null
);

create table USERS
(
    id             bigint       not null
        primary key,
    EMAIL_USER     varchar(255) null,
    ENABLED_USER   bit          null,
    FULLNAME_USERS varchar(255) null,
    PASSWORD_USER  varchar(255) null,
    constraint UK_dal8sqh0ylchleammsishb3jq
        unique (EMAIL_USER)
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
    constraint FKmscpa7am0i5udp283sgf5cd52
        foreign key (roles_users_id) references ROLE (id)
);

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
    type         varchar(255) null
)
    engine = MyISAM
    charset = utf8mb4;

