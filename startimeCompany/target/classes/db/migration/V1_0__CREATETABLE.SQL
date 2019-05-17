create table if not exists company
(
   id                      bigint auto_increment
        primary key,
    _registerNummerSuffix            varchar(255) null,
    company_number                   varchar(255) null,
    current_status                   varchar(255) null,
    former_registrar                 varchar(255) null,
    jurisdiction_code                varchar(255) null,
    name                             varchar(255) null,
    native_company_number            varchar(255) null,
    register_art                     varchar(255) null,
    register_flag_                   varchar(255) null,
    register_flag_AD                 int          null,
    register_flag_CD                 int          null,
    register_flag_DK                 int          null,
    register_flag_HD                 int          null,
    register_flag_Note               varchar(255) null,
    register_flag_Status_information varchar(255) null,
    register_flag_UT                 int          null,
    register_flag_VOE                int          null,
    register_nummer                  varchar(255) null,
    registered_address               varchar(255) null,
    registeredoffice                varchar(255) null,
    registrar                        varchar(255) null,
    retrieved_at                     varchar(255) null
)
    engine = MyISAM;


create table if not exists flyway_schema_history
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
);



create table if not exists name
(
    id      bigint auto_increment
        primary key,
    company_id   varchar(255) null,
    company_name varchar(255) null
)
    engine = MyISAM;

create table if not exists officer
(
    id   bigint auto_increment
        primary key,
    city         varchar(255) null,
    company_id   varchar(255) null,
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
    engine = MyISAM;

