package company.db.startime.service;

import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class CompanyActivityList {

    public List<String> getActivity() {
        List<String> activity = Arrays.asList ("Molkereiprodukte", "Käseladen", " Milchverarbeitung", " Lebensmittelmärkte", " Herstellung von Würzmitteln und Saucen", " Import", " Ernährung", " Molkerei", "PC Service", "Fernseher", " Radio", "Getränkemarkt", " Tabakwaren Einzelhandel", "Immobilienmakler", "Fahrzeugteile und Zubehör", " Hersteller", " Winden", " Flaschenzug", " Flaschenzüge", " Flugzeugteile und Zubehör", " Flaschenzüge und Winden Hersteller", "Betriebe", " Dienstleistungsunternehmen und Organisationen", "Kfz Zubehör", " Motorradzubehör", " Motorradteile", " Kfz Teile", " Autoersatzteile", "Paper", " Papier", " export", " Sonderposten", " Stocklots", " Etikettenpapier", " Label Papers", " Auerbach Trading", "Hersteller", " Produktion", " fabrikant", " Softwarehaus", " EDV Beratung", " EDV Dienstleistungen", "Sportverein", " Beschäftigungsgesellschaft", " Qualifizierungen", " Sportorganisation", "Kita", "Restaurant", "Wirtschaftsberatung", "Spedition", " Autowerkstatt", " Autohandel", " Reifenservice", " Kfz Werkstatt", " Bosch Autoteile", "griechisches Restaurant", "Installateur", " Messe", " Multimedia", " Ausstellung", " Arbeit", " Pavillion", " Hong Kong", "Bauingenieur", " Hoch und Tiefbau", "Schönheitssalon", " Kosmetik", " Kosmetikstudio", " Kosmetik und Körperpflege Dienstleistung", " Schönheitspflege", " Hautpflege", " Körperpflege", " Wellne", "Competence CallCenter ", "Steuerberater", " Steuerberatende Berufe", " Treuhänder", " Treuhand", " Steuererklärung", " Finanzdienstleister", " Steuer", " Treuhändler", "Bau und Spezialbauunternehmen", "Schleifwerkzeuge", " Werkzeuge", " Schleifmaschinen", " Industriewerkzeuge", " Poliersysteme", " Faservliesprodukte", "Architekt", " Bauplanung und Baudienstleistung", "Fahrschule", " autoFahrschule", " Fahrlehrerausbildung", " Führerscheinkosten", " Verkehrsrecht", "Beteiligungsgesellschaft", "Vermögensverwaltung", "Managementberatung", " Energiegewinnung", " Energieversorgung und Wasserwirtschaft", "Service", "Kaufhaus", "Finanzberatung", " Honorarberater", " Rechtsanwalt", " Versicherungsrecht", " Kanzlei", " Vermögensberatung", " Anlageberater", " Finanzplan", " Versicherung", "Pflegeheim", "Pharmaunternehmen", " Medizinische", "Getränke", " Getränkemarkt", " Getränkehandel", " Wein", " Weingut", " Weinladen", " Kellerei", " Winzerhof", " Weinhandel", " Einzelhandel", " Vertrieb", " Geschäfte", "Asia Shop", " Betriebe", "Ingenieurbüro", " Engineering Services", " Facility Management", "Interior Design", " Project Management", " Construction Management", "jobs", "investor relations", "Urlaub", " Reisebüro", " Reisecenter", " TUI", "Softwarehaus", "Bücher", " Ex und Import", " Tonträger und Zeitungen Großhandel", "Sparkasse", " Kredit", " Banken", " Volksbank", " Sparkassen und Volksbanken", " Geld", " Festgeld", " Zinsen", " Bankhaus", " Sparkonto", " Banking", " Private Banking", "Pflegedienst", " Privater Pflegedienst", " Krankenpflege", " Krankendienste und Pflegedienste", " Polnische Pflegekräfte", " 24 Stunden Häusliche Pfle", "Fördertechnik", " Lagertechnik", " Flurförderzeuge", " Transportgeräte Hersteller", " Vermietung", " Toyota", " Kehrmaschinen", " Reinigungstechnik", " Gabelst", "EDV Dienstleistungen", "Stromerzeuger", "Möbel", " Raumausstatter", " antike Möbel", " Polsterei", " Raumdesigner", " Polsterer", " Kettelservice", " Rattanmöbel", " Bodenbeläge", " Gestaltung", " Dekoratio", "Malerbetriebe", "Dachdecker", " Dach", " Dachbegrünung", " Flachdach", " Ziegeldach", " Solardach", " Foliendach", " Klempner", " Solar", "Database Publishing", " Crossmedia Publishing", " VDP", " Web To Print", " Web2print", "Buchhaltung", " Technische Betriebe", "Vertrieb", " Bauelemente", " Baustoffe", " Bauinstallationen Großhandel", "Kunststoff", " Chemikalien", " Pflanzenschutzmittel", " Feinchemikalien", " Basf Se", "Softwareentwicklung", "Logistik", " Beteiligungsgesellschaft", " presse", " holding", " Verpackungen", " Öffentlichkeitsarbeit", " Pharma", " Geschäftsprozesse", " Presseinformation", "Bistro", " Cocktails", " Kneipen", " Getränke", " Restaurant", " Biergarten", " Disko", " Kotti", "Klima und Lüftungsinstallateure", "Immobilien", " wohnungssuche", " Wohnungsverwaltung", " Wohnungsgesellschaft", " wohnen", " ratgeber", " vermieter", " Ballungsgebiete", " Mieterportal", "Spielhalle", "Planungsbüro", "Wissenschaft/Forschung", "Holz und Holzwaren Großhandel", "Marketing", "Unternehmensberatung", " CONSULTING", " Beratung", " Reisen", " Projektmanagement", " Touristik", " business", " Flugreisen", " China", " Travel", " Indien", " Visum", " Handelsvertreter", "Musikschule", " Akademien", " Hochschule", " Kunstschule", " Musik", " Bildung", " Veranstaltungen", " Lehrer", " Bildungsstätte", " Veranstaltungsorganisationen", "Auskunftei", "Immobilienmakler und Immobilienbüros", " Maschinen", " Anlagen und Apparate Großhandel", "Stiftung", " Hauskrankenpflege", " berlin", " ambulant", " Sozialstation", " Wedding", " Reinickendorf", " Häusliche", "Tierfutter", "Immobilienverwaltung", "Filmproduktion", "holding", " Baudienstleistungen", " Sonstiges", "Gesundheitsdienst", "Finanzdienstleister", "Tattooentfernung", " Laserbehandlung", " Permanent Make Up Entfernung", " Probebehandlung", " Cover Up Vorbereitung", "Druckerei", "Wohnbau", "Reinigung", "Elektrotechnik", " Elektronik und EDV Hersteller", " Verkehrspsychologen", " nicht als psychologische ", "Psychotherapeuten nach dem Psychotherap", " sukzessive erweitert soda", "Journalisten", " Reportagen", " Journalistenbüro", " Interview", " Handelsblatt", " Magazingeschichten", "Autowerkstatt", " Autoreparatur", " Unfallinstandsetzung", " Klimaservice", " Fahrzeugwerkstatt", " Auto Reparaturwerkstätten und Einze", "sozial", "Schreinerei", " Metallbau", " Schlosserei", " Edelstahlverarbeitung", " Geländerbau", " Türenbau", " Gitter", " Kunstschmiede", " Michael", "Druckindustrie Hersteller", " Druckfarben Hersteller", "Girozentrale", "Computer", " Computerladen", " Software", " Apotheke", " Bürobedarf", " Pharmazie", " Pflegedienst", "Verkauf", " kopieren", " Girokonto", " Kreditkarte", " Kreditinstitute", " Genossenschaftsbank", " Geldanlage", " Versicherungen und Fina", "Werbe und Marketingunternehmen", " Lufthansa", " Buchhaltung", "Elektroanlagenbau", " Alkoholfreie Getränke", " Mineralwasser", " Limonaden", " Getränke Hersteller", " Limonaden Hersteller", " mineralquellen", " Ei", "Raumausstatter", "Autovermietung", " Autoverleih und Taxiunternehmen", "Verwaltung Ämter", "Werbeagentur", " Telekommunikation", " Datenbanken-Anbieter", "Elektroinstallation", " Schaltschrank", " Elektro", " Steuerung", " Elektroprüfung", "Elektronik und EDV Einzelhandel", " Phono und Video Einzelhandel", " Fernseher", " Unterhaltungselektronik", " HiFi", " HiFi Geräte", " DVD Spieler", " Laut", "Familienberatung", " Betreutes Einzelwohnen", " Ambulante Erziehungshilfe", "Umzüge", " Umzugsunternehmen", " Möbeleinlagerung", " Küchenmontage", " Entrümpelung", " Möbelmontage", "Kosmetikbedarf", "Bücherverlag", "Optik und Medizintechnik Großhandel", " Feinmechanik", " Vertrieb Ex und Import", " Betriebsführung", " Managementdienste", "ambulanter Pflegedienst", " Ambulante soziale Dienste", " Bauingenieur", " Ingenieurbüro für Bauwesen", " Bauunternehmen", " Service", "gemüseladen", "Hotel", " Immobilienmakler", " Immobilienmakler und Immobilienbüros", " Gebäude", " Grundstück", "Anlageberater", " Anlagenberater", "Versicherung", "Hochbau", " Abbrucharbeiten", " Massivbau", " umbau", " Instandsetzung", " Erweiterungsbauten", " Raumbildenden Ausbauten", "Treppenbau", " Fahrstuhlwartung", "Metall und Metallwaren Großhandel", "Dienstleistungen", " Logistik", " Promotion", " Disposition", " Logistikdienstleister", " Regalservice", " Warenauszeichnung", " Regaleinrichtung", " Werbeagentur", "Hausverwaltung", " Haus und Vermögensverwaltung", " Immobilienmakler und Immobilienmanager", " grundstücks und wohnungswesen", " Hoch und", "Unser Leistungsspektrum", "Bauunternehmen", " Bauträger", " Wohnbau", " Musterhaus", " Komplettbau", " Wohnungsgenossenschaft", " Zimmerei", " Elektroanlagen", " Schaltanlagenbau", " Instabus", " Industrieanlagen", " Blitzschutzanlagen", " Gebäudeleittechnik", " Energieoptim", "Klimatechnik", " Lüftungstechnik", " Gebäudemanagement", " Gartenlandschaftsbau", " Saubere Immobilien", "Gebäudereinigung", " Glasreinigung", " Büroreinigung", " Haushaltsauflösung", " Bauendreinigung", " Haushaltshilfe", "Ferienhaus", " Hotel", " Motel", "Insolvenzverwalter", " Fachanwalt", " Rechtsanwalt Dresden", "Ob Pkw oder Nutzfahrzeug", " als autorisierter", "Fliesenleger", " bodenfliesen", " wandfliesen", " badfliesen", " Fliesen", " Fliesenmarkt", " Küchen Fliesen", "Juwelier", " Trauringe", " Verlobungsringe", " Eheringe", " Freundschaftsringe", "Reifen", " Alufelgen", " Auswuchten", " Reifeneinlagerung", " Reifendiscount", " Billige Reifen", " Reifenreparatur", " Felgenreparatur", "Nichtelektrisch", " Transformatoren", "Landmaschinen", " Landtechnik", " Maschinenbau", " Baumaschinen", " Ersatzteile", " Importeure", " Industriebedarf und Betriebseinrichtungen Groß", "Pflanzenbau", "Ämter und Behörden", " Straßenmeisterei", " Amt", " Behörde", " Bauaufsicht", " Verwaltung", " Straßen", "Autohaus", " Auto", " BMW", " Audi", " Mercedes", " KFZ Handel", " Ford", " Opel", " PEUGEOT", " RENAULT", "Fiat", " skoda", " Seat", " Gebrauchtwagenhändler", "VW", "Chevrolet", "Photo", " Events", " Entertainment", " Communication", " Environment", "Flexible Leitungen für Energieführungsketten", " Servoleitungen", " Steuerleitungen", " Elektronikleitungen", " Leitungen für Photovoltaik Anwendun", "Verpackungen", " Druckfarbe", " Fahrzeug", " Fahrzeugteile und Zubehör Großhandel", "Kurierdienst", " Expressdienst", " Transporter", "Wasserinstallateure und Spenglereien", " Klima und Lüftungsinstallateure", " Energiegewinnung Dienstleistungen", " Private Stromerzeugung", "Landwirtschaftliche Genossenschaft", " Tierzucht und Tierhaltung", " Tierzucht", " Tierhaltung", " Vieh", " Schafe", "Auto", " Fahrzeugeinzelhändler mit Werkstätten", " handeln", " Werkstatt", "Fahrrad", " Bike", " Mountainbike", " Zweirad", " Fahrradladen", " Fahrradangebote", " Bike Center", " Fahrradbeleuchtung", " Little John Bikes", " Fahrradzubehör", "Senioren Residenz", "Weber", " WEBEN", " Herrenbekleidung", " Glas", " Textil", " Keramik", " Industrie und Produktion", " Porzellan", " Keramik und Porze", " Keramikwaren", " Keramikwaren Hersteller", " Keramikherstellung", " Lase", "Maschinenbau", " Apparatebau", " Medizintechnikhersteller", " Anlagen und Apparatebau", " Maschinenhandel", " Elektrizitätserzeugung", "Anlagen und Apparatebau", " Maschinenfabrik", " Großhandel", " Anlagen", " EDV", " Computer", " Apparate", " Anlagen und Ap", " Objektschutz", " Personenschutz", " Werkschutz", " Empfangsdienst", " Alarmaufschaltung", " Werttransporte", " Kaufhausdetekti", "Landwirtschaftliche Produkte", " Landwirtschaftliche Produkte Großhandel", " kaufen", "Friseur", " Strähnen", " Kinderhaarschnitt", " Damenhaarschnitte", " Painting", "Reitstall", "Unterhaltung", " Spielothek", " Schreibwarenladen", " Ingenieurbüros für Wasser und Abwasser", " Planungsbüro", " Planung", " Architekt", " Bauart", " Architektenkammer", "Glas", " Keramik und Porzellan Hersteller", " Sicherheitsglas", " Glasverarbeitung und Veredelung", " Sonnenschutzglas", " Schallschutzglas", " Duschsyst", "Heizung", " Klimaanlagen", " Klimatechnik", " Klimaanlageninstallateure", " Kältetechnik", " Klimaanlageninstallateur", " Lüftungsanlagen", " Klimageräte", " Isolierarbeiten", " Spezialbau", " Isolierbau", " Mauerwerksinstandsetzung", " Bautenschutz", " Spezialtiefbau", " schutz", " Isolierungen", " Ingenieure und Planungsbüros", " Statiker", " Ingenieurbüros für Tragwerksplanung", " Reparaturwerkstätten und Einzelhändler", " Autoteilehersteller", "Motoren und Motorenteile Hersteller", " Motoren Reparaturwerkstatt", " Prüfstand", " Oldtimer", "Arbeitsvermittlung", " Unterhaltsreinigung", " Grundreinigung", " Reinigungsservice", " Rahmenreinigung", " Glasfassadenre", " Tiefbau", " Hochbau", " Schlüsselfertig Bauen", " Trockenbau", " Abbruch", " Bauen im Bestand", " Auditing", " Coaching", " Training", " Grundstücksmakler", " Testing", " Home Deutsch", " Mystery Shopping", " Tüv Hessen", "Fruchtsaft", " Bauunternehmen und Bauhandwerk", " Party", " Eisen und Metall Hersteller", " Eisen und Metall Handwerk", "landesbank", "Sozialberatungsstelle", " Erziehungsberatungsstelle", " Institute für Pädagogik", "Bäckerei", "Imagefilm", " Employer Branding", " Businessfotografie", " Videoproduktion", " Personalmarketing", " Storytelling", " Testimonials", " Saarländer", " Recruitin", "Steuerungstechnik", " Schaltanlagen", " Gesch", "Werkzeugbau", " Vorrichtungen", " Messtechnik", " Prüftechnik", " Kleinmaschinen", " Pharmaunternehmen", " Chemisch Pharmazeutische Erzeugnisse", " Pharmazeutische Erzeugnisse", " Pharmazeutische", " Chemisch-Pha", "Gemüse", " Obst", "Verkaufsförderung", " Event Marketing", " Marketing", " Bekleidung", " shop", " Geschenkartikel", " Accessoires", "Unser Leistungsumfang erstreckt sich von der Planung bis zur Ausführung von Klein- und Großanlagen. Unsere Firma", " die SHS", " Imbiss", " Fast Food Restaurant", " Tabakwaren", " Veranstaltungso", " Anstreicher", " Lackiererei", " Autolackiererei", " Lackpflege", " Lackschaden", "Vereine", " Hessen", " und", " Katzen", " Pfälzer", " Lampertheim", " Rassekatzen", " Bürstadt", " Kurpfalz", " oder", " Biblis", " And", " Katzenverein", " Rhei", " Rohrleitungsbau", " Stahlbau", " Stahl und", "Anhänger", " Arbeitsbühnen", " Steiger", " Stampfer", " Anhängerbühnen", " Scherenarbeitsbühnen", " Scherenbühne", " Hubbühnen", " Teleskopbühnen", " Haulotte", " Ge", "Lebensmittelmärkte", "Schule", " Gesundheit", " Sport", " Schmerztherapie", " Jugendliche", " gesundheitsberatung", " Sportschule", " Kampfsportschule", " Selbstverteidigung", " Kampfk", "Ingenieure und Planungsbüros", "Energiegewinnung", "Buehler &amp; Sell Elektromotoren KG Autorisierter Danfoss Systempartner", "Onlineshop", " Programmierung von Internetpräsentationen", " Entwicklung von Internetpräsentationen", " Erstellung Internetseite", " Betreuung von", " Software Einzelhandel", " Commerce Anbieter", " produkte", " System", " Programmierer", " visual", "Verlag", " Zeitschriftenverlag", " Kunstverlag", " Film", " Video", " Bilder", " Foto", " Museum", " Künstler", " Galerie", " DVD", " Anzeigen", "Gerüstbauer und Gerüstverleiher", " Gerüst", " Gerüstverleih", " Rollgerüst", " Arbeitsgerüste", " Schutzgerüste", " Fassadengerüst", " Fahrg", "Verwaltung", "Integrierte Lösungen für Personalmarketing und Rekrutierung Strategieberatung Personalmarketing und Rekrutierungs Strategien", " Konzeptio", "Bürobedarf", " IDE", " Geha", " Schulbedarf", " Tinte", " Rapid", " Pelikan", " Leitz", " Rotring", " Tesa", " Uhu", " Herma", " Zweckform", " Durable", " Elba", " Philips", " Stühle", " Digitaldruck", " Druckindustrie Hersteller", " Etiketten", " Geschäftsdrucke", " Druckdienstleistungen", " Flyer", " Briefpapier", " Broschüre", "Vermögensverwaltungen und Gesellschaf", "Apotheke", " Baugenossenschaft", " Genossenschaft", "Geld anlegen", " Geld sparen", " Baubetreuung", " Baupläne", " Bauüberwachung", " Gebäudeplanung", " Privatkredit", " Modernisierungskredit", " Autokredit", " Kreditvermittlung", " Baufinanzierung", " Immobilien", " Versicherung von A bis Z", "Geschlossene Fonds", " Schiffsbeteiligungen", " Medienfonds", " Schiffsfonds", " Hedgefonds", " finanz und anlageberater", " Fonds", " finanzplanung", " Finanz", "Anlage und Vermögensberater", "Dentallabor", " Mietwohnungen", " Eigenheim", " HAUS", " mieten", "Rechtsanwalt", " Rechtsberatung", " Zivilrecht", " Pachtrecht", " Arbeitsrecht", " Erbringung von wirtschaftlichen Dienstleist", "Veranstalter", " Selbstverteidigungsschule", " Vermietung der Eventlocation", " Chemie", " Chemie Vertrieb", "Fleischhandel", "Werbebanner", " Sonnenschirme", " Barhocker", " Prospektständer", " Faltwände", " Faltdisplay", " Bannerdisplay", " Media Display", "Landschaftsbau", " Baumpflege", " Teichbau", " Rollrasen", " Terrassenbau", " Landschaftsgestaltung", " Baumfällarbeiten", " Gabionen", " Poolbau", " Gartenbau", " Z", " ITIL", " Prince2", " COBIT", "Reiseunternehmen und Verkehrsbetriebe", "Plastische Chirurgie", " Schönheitschirurgie", " brustvergrößerung", " Klinik für plastische Chirurgie", " Schamlippenverkleinerung", "Für Entdecker! Hier bei", "Bodenleger", " Fußbodentechnik", " Trittschall", " Hohlraumboden", " Unterboden", " Elektroinstallation", " Lüftung", " Doppelboden", " Bodenheizu", "Energiegewinnung Dienstleistungen", " Vermessungsbüro", " Ingenieurvermessung", " Bauvermessung", " Photogrammetrie", " Büro", " Gutachten", " Versicherungsschu", "German Association for Business Cooperation GmbH", "Jahresabschlussprüfung", " Jahresabschlusserstellung", " Ifrs", " HGB", " Us Gaap", " Nachfolgeberater", " Unternehmensberatung", " Business Plan", " Turnaroun", " Tagungshotel", " Hochzeit", " Kongress", " Hochzeitsmesse", "Steuer und Unternehmensberatung", " Wirtschaft", " Finanzinstitut", " Altersvorsorge", "Elektronik und EDV Hersteller", " Elektrotechnik", "Banken", " Privatbanken", "Gebrauchtwagen", " Autoglas", " Autowerkstatt Autohändler", " Autozubehör", " Autoteile", " Inspe", "personalservice", " Archivierung", " Digitalisierung", " Festplattenvernichtung", " Aktenrettung", "Brandmeldeanlagen", " Sicherheitssysteme", " Sicherheitstechnik", " Schließtechnik", " Alarmanlagenbau", "Commerzbank", "Treuhändler", "Möbel und Haushaltsgegenstände Einzelhandel", " Möbel und Haushaltsgegenstände Gesamt", " Küchenmöbel Einzelhandel", " Möbelmarkt", " Fachhandel fü", "BSL", "Asphaltbau", " Steuerberater", " Notar", " Hardware", " Taxe", " Toxikologie", " Kommissio", " Projektentwicklung", " Wohlfühlarchitektur", " Gesundheitsimmobilien Entwicklung", " Gesundheitsimmobilien Planung", "wohnungsverkauf", " Wohnungsvermietung", " Grundstücksvermietung", " Grundstücksverwaltung", " Immobilienverwertung", "Elektroinstallateure", " Engineering", " Energieversorgungsunternehmen", "Zeitarbeit", "Gartenbau", " Garten", " Landschaftsbau", " Gartengestaltung", " Galabau", " Wege", " Steinarbeiten", " Rasenarbeiten", " Gartenbau Landschaftsbau", "Golfclub", " Driving Range", "Bauelemente", " Bau und Heimwerkermärkte", "EDV", " Mobilfunknetz", " Elektronikfertigung", " Router", " Telekommunikationsanbieter", " Prozessoren", " Rekorder", " Record", "Hardware", " EDV-Geräte Kundendienste", " Grafikkarten", " Scsi", " PPC", "Amiga", " Powerpc", " EDV Geräte", " PCB", "Schweißen", " technik", " schienen", " Weichen", " Schweissungen", " Schienentechnik", " Schweiuå En", " Schweiuå Ung", " Unternehmen", " Übersetzungsbüro", " Übersetzer", " Fremdsprachen", "Wir führen nur die neuesten Fahrzeuge mit Ausstattungen", " die das Fahren angenehm machen", " reinigen und pflegen unsere Autos im eigenen H", " Elektrotechnische Apparate", " Großhandel mit Foto und Optischen Erzeugnissen", " Bestandteile und Artikel", "Baudienstleistungen", "Baustoffe", " Spedition", " Güterverkehr", " Werkstoff", " Baustoffhandel", " Bauteile", "Rohrleitungstiefbau", " Rohrleger", " Fachpersonal Rohrleitungs und Anlagenbau", " Kraftfahrer BR", "Schlüsseldienst", " Schlüsselnotdienst", " Sicherheitsunternehmen", " aufsperrdienst", " Tresore", " Schließzylinder", " Profilzylind", "Zimmerei", "Krankenhaus", " Ärzte", " Heilpraktiker", " Medizin", " Fachärzte", " Wellness", " Prävention", " Operation", " Sozialdienst", " Druckindustrie", " Druckplatten", " Reproduktionsmaterial", " Druckereibedarf", " Fo", "Reiniger", " Spezialreiniger", " Chemische Reinigungsmittel Hersteller", " Chemische Reinigungsmittel", " Chemische Pflegemittel Hersteller", " Chemis", " Wasserinstallateure und Spenglereien", " Installateure", " Heizungsinstallateure und Heizungsbauunternehmen", " Sanitär", " Bads", "Chemisch Pharmazeutische Erzeugnisse", " Arzneimittelhersteller", " Chemisch-Pharmazeutische Erzeugnisse Großhandel", " He", "Investment", "Drehteile", " Dreherei", " Präzisionsdrehteile", " Heizung", " Sanitärinstallateur", " Heizungstechnik", " kundendienst", " PKW", " Druck", " Treppen", " Wa", "KFZ Meister", " Nutzfahrzeugwerkstatt", " LKW Werkstatt", " LKW Reparatur", " LKW Inspektionen", " LKW Umrüstung", " Fachbuchverlag", " Buchverlag", "Zahnarzt", " Psychologe", " Kinesiologie", " Allergie", " Stres", "Brötchen", " Bäckereitechnik", " Backtechnik", "Büromöbelhändler", "Kunst und Mineralstoffe", " Kunststoff", " Kunststoffwaren", " Default Metall und Metallwaren Großhandel", " Werkzeugbau", " Metallwaren Einzelhandel", " Metallwaren Großhandel", " Metallrohprodukte", " Werkzeu", "chemische Reinigung", "Anlagenbau", " Maschinenteile", " Anlagen Hersteller", " Maschinen und Apparatebau", " Anlagenvertrieb", " Maschinenteil", "Reisebüro", " Reiseunternehmen und Verkehrsbetriebe", "IT", " Park", "Ärzte", " Darmerkrankungen", " Vorsorge und Rehabilitationskliniken", " Magenerkrankung", " Krankenhaus", " Rehaklinik", " Gleichgewicht", " Lebenskraft", " ge", "Management", " Qualitätsmanagement", " Kosmetikbedarf", " WISSEN", " Prozessmanagement", " Wissensmanagement", " Human Resources", " GMP", " GLP", " Klin", "Stuckateur", " WDVS", " Wärmedämmverbundsystem", " Malerbetriebe", " Stukkateurhandwerk", " Architekturbüro für Hochbau", " Buchführung", " Büroservice", " Buchhaltungsbüro", " Aktenvernichtung", " Büroarbeit", " Buchführungshelfer", "Metzgerei", " Genussmittel und Getränke Großhandel", " Nahrung", " Immobilienvermittlung", " Bauwirtschaft", " Wohnimmobilien", " Wohnanlage", " Schlüsselfertig Bau", "Schlosserei", " Geländer", " Metallverarbeitung", " Balkone", " Balkongeländer", " Zaunanlagen", " Balkonanlagen", " Aluminiumverarbe", "Theater", " Stimmen", " Kultur", " Unterhaltung und Öffentliche Einrichtungen", " touristische Dienstleistungen", " Kong", "Touristeninformation", "Güterverkehr", " Nah und Ferntransportunternehmen", " Versand", " Güter", " Expedition", "Schildergeschäft", " Textildruckerei", " Stempel", " Schilder und Buchstaben Vertrieb", " Schilder", " Beschriftungen", " Werbetechnik", " Fahrzeugbeschrift", " Heizungsbau", " Heizun", "Altmetall", " Entsorgung", " Schrott", " Sperrmüll", " Holz", " Container", " Abfall", " Aushub", " Grünabfall", "Chemisches Labor", " Labor", "Parfum", " Druckvorstufe", " Prepress", " Proof", " Litho", " CTP", " Filmbelichtung", " Andruck", " Akzidenzen", " Computer To Plat", " Laborbedarf", " Fittings", " Laborgeräte", " Industriebedarf", " Pumpen", " Probenehmer", " Probennehmer", " Abfüllgeräte", " Probena", "Weingut", " Weinkellerei", " Weinhaus", " Weinhandlungen", " Lebensmittel", " Supermarkt", "Schiffsausrüstung", " Aviation", " Technologieunternehmen", " Aviation Service", " Dornier Airshows", " Dornier Bus Travel", " Klempnereien und Installationsgeschäfte", " Badsanierung", " Fußbodenheizung", " Lüftungsanlagenbau", " Heizkörper", " Heizungsinsta", "Genussmittel und Getränke Großhandel", " Warengenossenschaft", " Verpackungsmaschinen Hersteller", " Werkzeugmaschinen", " Verpackungsmasch", "Sportbekleidung", " Taschen", " Arbeitskleidung", " Teamwear", " Online Shop für Textilien", " Outdoor Textilien", " Veredelbare Textilien", " Workwear für", "Im Alltag gehen häufig gesundheitserhaltende oder verbessernde Maßnahmen für Körper und Geist verloren. Durch Hektik", " familiäre und ber", "Erotikshops", " Schuhe", " Onlineshop", " Damenschuhe", " Schuhgeschäft", " Bekleidungsgeschäfte", " Erotikartikel", " Sexshops", " Erotikspielzeug", "Hydraulik", " Hebezeuge", " Ingenieurbüro Maschinenbau", " Geothermie", " Internet", "Heiztechnik", " BHKW", " Blockheizkraftwerk", " Senertec", " Wärmeerzeuger", " Brennerei", " Ölbrenner", " Gas", "techni", " Werbe und Marketingunternehmen", "Metallbau", "Schlosserei und Schweißerei", "Ingenieurtechnik", " Schütt", "Spengler", "Vermietung", " Vermittlung und Vermietung Dienstleistung", " Medikamente", " Vitamine", " Apotheken und Medizintechnik", " Reiseapotheke", " Tabletten", " Internetapotheke", " Hausapotheke", " Apo", "Filter", "Absauganlagen", "Lufttechnik", "Schallschutz", "Luftfilter", " Ventilatoren", " Feuerwehr", " Sichtschutz", " Absaugschlauch", " Afw", " Brennschneidti", " Heizungsanlagen Hersteller", " Klimaanlagen Hersteller", "Marktforschung", " Marktforschungsinstitut", " Markt und Meinungsforschung", " Meinungsforschung", " Strategische B", " Computerzubehör", " Windows", " Datensicherung", " WAN", " Wireless", " Citrix", " Administrator", " Verschlüsselung", " Te", "Campingplatz", "Entsorgung", " Recycling", " Containerdienst", " Abfallbeseitigung", " Abfallentsorgung", " Städtereinigung", " Wertstoff", " Mülld", "Optiker", " Elektrotechnische und Elektronische Anlagen", " Elektrotechnische und Elektronische Anlagen Großhandel", " Kalibrierung", " Kalibrierla", "Reiki", " Energiearbeit", " Alternative Therapiemethoden", " Heiler", " Reiki-Therapeut", " Geistiges Heilen", " SELBSTHEILUNG", " Geistheiler", " Reiki Semina", "Bus", " Omnibus", " Gruppenfahrten", " Reisebusunternehmen", " Busanmietung", " Reisedienst", " Gelegenheitsverkehr", " Vereinsfahrten", " Reiseservice", " Busdie", " anlagentechnik", " Allg Dienstleistungen", " techniker", " Management", " Softwareentwicklung", " Medizintechnik", " Immobilienfinanzierung", " finanzierungsberater", " hausfinanzierung", " Sparkasse", " Kr", "Nahrungsmittel Hersteller", " Hülsenfrüchte", " Getreide", " Tiefkühlprodukte", " Lebensmittelhersteller", " Trockenprodukte", " Nährmittelhersteller", "Software", "Industrie und Produktion", " Landmaschinen Großhandel", " Landmaschinen und Geräte Einzelhandel und Werkstätten", " Gartengeräte und Landgeräte Großhandel", "Lebenshilfe", " Wohnstätten", " Hilfe", " Lebenshilfe für Menschen mit Behinderung", "fräsen", " schleifen", " Gebrauchsgegenstände", " Schneidstempel", " Herstell", " Dienstleistungs Unternehmen", " Schnit", "Unsere - Trotzenburg - ist bekannt für Ihre ausgezeichnete deutsche Küche", " Altenburg", " Lohne", " Ostthüringen", " Efh Elsholz Steuerberatungsge", " Erdarbeiten", " Wegebau", " Straßenbau", " ERDBEWEGUNGSARBEITEN", " Baufirma", " Ingenieurbüro", " Planu", "Audi", " Turbolader", " jobs", " Automotive", " Automobilzulieferer", " Icsi", "Montagebau", " Montieren", " Anlagenbau", " beschichten", " Fertigung", " Strahlen", " Getränkeindustrie", " Zerspanen", " Neubauer", " Errich", "Motorradhändler", " Vogtland", " Aufbereitung-Instandsetzung Auerbach", " Jawa und CZ Motorräder", " Oldtimer-Oldtimerteile", "Solaranlagen", " Solarenergie", " Solarechnik", "Altenheim", " ambulanter Pflegedienst", " Seniorenheim", " Heim", " Altenwohnheim", " Seniorenresidenz", " Verhinderungspflege", " Wohnen im A", "Fahrzeugbau", " Anhängerbau", " Autoanhänger Hersteller", " Nutzfahrzeuge", " Pannendienst", " Fahrgestell", " Auflieger", " Ersatzt", " Zimmer", " Übernachtung", " Hotels und Gasthöfe", " übernachten", " Vierbettzimmer", " Bikerfreundlich", " Motorradfreundlich", " Essen", " Doppelzimmer", "Fahrzeugteile und -Zubehör Hersteller", "Die Thomas Kind GmbH bietet Regalsysteme", " Trennwandsysteme", " Arbeitsplatzsysteme", " PVC Bodenfliesen tk flex", " Schranksysteme und", "Recycling", " Altmaterial Großhandel", " Abfallwirtschaft", " Baustoffrecycling", " Abfallverwertung", " Kreislaufwirtschaft", " Restmüll", " Bauab", "Hoch und Tiefbau", "Kunststofftechnik", " Schiffsausrüstung", " Zahnlabor", " Zahntechnisches Labor", " Gesundheit und Schönheit", "bedachungen", " Fassaden", "Ob Bürogebäude oder komplexe Industrieanlage - wir erstellen übergreifende Planungs- und Ausführungskonzepte für mehr Energieeffizienz.", "Vermittlung", " Zeitarbeit", " Personalvermittlung", " personalservice", " Personalleasing", " Leiharbeit", " Arbeitskräfte", " Personalpla", " Wellnesshotel", " Suiten", " Seehotel", " Biohotel", " Wellness Oase", " speisen", " Massage", " Tagung", "Altersvorsorge", " Krankenversicherung", " Unfallversicherung", " haftpflichtversicherung", " Autoversicherung", " berufsunfähigkeitsversicherung", " Rec", "Musik", " Theater", " Konzerthäuser", " Puppentheater", " Schauspielhaus", " Schauspieler", " Kleinkunstbühne", " Kulturelle Einrichtungen", " Konzerte", " Ballet", " Kurzzeitpflege", " Behandlungspflege", " Ambulante Dienste", " Altenpflege", " sozial", " betreut", "Autohandel", " Kfz reparatur", " Inspektion", " Aufbereitung", " Kraftfahrzeugtechnikerhandwerk", " Scheibenglasrepa", " PROJEKTIERUNG", " Gartenpflege", " Gartenarbeiten", " Natursteinpflaster", " Zaunbau", " Pflasterbau", "Aluminium", " Oberflächenhärtung", " Induktivhärten", " Metallveredelung", " Oberflächenveredelung und Oberflächenhärt", " Zeitungs und Zeitschriftenverlage", " Zeitungsverlag", " Tageszeitungsverlage", " Dienstleistungsunternehmen und Organisatione", " Ingenieurbüro für Bautechnische Gesamtplanung", " Club", " Ökologisch Orientierte Unternehmen", " Natursteinarbeiten", " Geomantie", " Japangarten", "Immobilienvermietung", " Immobilienverpachtung", " Vermietung der Senioreneinrichtungen", " Gemeinnützige Bauträgergesellschaften", " Wohngebiet", " Gästewohnung", " Gewerberäume", " Steuerbüro", " Be", "Leder und Lederwaren Vertrieb", " Koffer und Taschen Hersteller", " Lederwaren", " Koffer", " Leder und Lederwaren Hersteller", " Mode Access", "Entrümpelung", " Wohnungsauflösung", " Mainz", " Wiesbaden", "Gärtnerei", "Beteiligungsverwaltung", " Technischwissensch", " Reinigung", " Baureinigung", " Gebäudedienstleistungen", " Außenreinigung", " Hotelreinigung", " Hotelservice", " Küchenreinigung", " Hous", "Metallwaren", " Metallbearbeitung", "Spezialbau", " Managementberatung", "Fitnessstudio", " Innenarchitekt", " Dienstleistungsunternehmen und Organ", " Präzisionswerkzeuge Großhandel", " Präzisionswerkzeugbau", "Straßenbau", " Straßen und Wegebauunternehmen", " Fräs", " Straßenbau Dienstleistungsagentur", " Straßenbau Serviceagentur", " Straßenbau Serviceunter", "Kurklinik", " Krankenwagen", " Spital", " Urlaub", " erholung", " Fitness", " Beauty", "Bestattungen", "Distribution", " DIGITAL", " Vod", " Video On Demand", "Lebensmittel", " Feinkost", " Feinkostgeschäft", "Öl", " Pesto", " Essige und Speiseöle Einzelhandel", "Altenpflege", " Humanitäre Hilfe", " Wohlfahrtsverbände", " Wohlfahrtspflege", " Altenheim", " Hilfsorganisation", " Soziale Arbeit", "Schilder und Buchstaben Vertrieb", " Schilderladen", " Kunststoff und Gummi Hersteller", " Schriften und Reklamemaler", " Kunststofffolien", "Chemie", " Kunststoffe und Mineralstoffe Hersteller", "Kulturverein", "Autolackiererei", " KFZ Lackierereien und Beschriftungen", " Lackieren von Kraftwagen", "Gas", " Mineralöl", " Kohle", "Brandschutzberater", " Brandmeldeanlagen Hersteller");

        return activity;
    }


}