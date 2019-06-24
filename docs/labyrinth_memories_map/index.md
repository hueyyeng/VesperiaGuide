# Labyrinth of Memories Map

<link rel="stylesheet" type="text/css" href="mermaid.css">
<script src="mermaid.min.js"></script>
<script>mermaid.initialize({startOnLoad:true});</script>

<div class="mermaid">
    graph BT
        style PAY fill:#f4ce42,stroke:#C70039,stroke-width:2px,stroke-dasharray:5,5
    ZRE("Zaphias Roadway Entrance") -->|West|MWE["Manor of the Wicked Exterior"]
    ZRE-->|East|SR["Shaikos Ruins"]
    MWE-->|South|WAK["Weasand Aer Krene"]
    WAK-->|West|HLC["Heliord Labor Camp"]
    WAK-->|North|BS["Baction Shrine (Rhybgaro)"]
    HLC-->|West|WE["Weasand Exit"]
    WE-->|Eeast|ZC["Zaphias Castle (Yeager)"]
    BS-->|South|SOKE["South of Kogorh Exit"]
    SOKE-->|South|GSI["Ghost Ship Interior"]
    GSI-->|Upstairs|ZC
    SR-->|South|TC["Tarqaron Cavern"]
    TC-->|South|BS
    SR-->|North|TE["Tarqaron Entry"]
    TE-->|Northwest|ZF["Zaude Foyer (Gattuso)"]
    ZF-->|Northwest|MTS["Mt.Temza Summit"]
    MTS-->|Northwest|GSI
    ZF-->|Northeast|CBE["Caer Bocram Exterior"]
    TE-->|Northeast|ZS["Zaphias Sewer"]
    ZC-->|West|BB["Baction Bridge"]
    BB-->|South|SD["Shaikos Depths (Goliath)"]
    ZC-->|East|MTC["Mt. Temza Crater"]
    ZC-.->EXIT1(("First Exit"))
    SD-->|North|RS["Ragou's Ship (Erungar)"]
    SD-->|East|ZAK["Zophier Aer Krene"]
    ZAK-->|North|RS
    RS-->|West|TSW["Tarqaron Steps West (Breaker)"]
    MTC-->|South|ET["Egothor Thicket"]
    MTC-->|North|EH["Ehmead Hill (Barbos)"]
    ET-->|Northwest|DS["Dahngrest Square"]
    ET-->|South|EC["Erealumen Cavern"]
    DS-->|West|TSW
    DS-->|South|QW["Quoi Woods"]
    TSW-->|Upstairs|SS["Shaikos Surface (Gusios)"]
    QW-->|Northwest|SS
    SS-->|West|KM["Keiv Moc (Estellise)"]
    KM-->|Northwest|ZA["Zaude Amphitheater"]
    ZA-->|South|GSC["Ghost Ship Cabin (Poseidon)"]
    GSC-->|West|HC["Heracles Control (Chimera)"]
    HC-->|East|AKT["Aer Krene, Tolbyccia (Green Menace)"]
    AKT-->|North|GR["Ghasfarost Roof (Pterobronc)"]
    GR-->|Southwest|TR["Tarqaron Reliquary (Alexei)"]
    KM-->|Northeast|RM["Ragou's Mansion (Cursed Wanderer)"]
    RM-->|West|ZI["Zaphias Infested (Gigalarva)"]
    ZI-->|East|HE["Heracles Exterior (Nan, Tison and Clint)"]
    HE-->|South|TR
    TR-.->EXITFINAL(("Final Exit"))
    TR-->PAY>"PAY 15 FAKE GALD"]
    PAY-->TG("Tarqaron Garden (Traitor)")
    MTS-->|Southwest|ZN["Zaphias Noble (Schwann)"]
    MTS-->|South|MWH["Manor of the Wicked Hallway"]
    CBE-->|South|MWH
    MWH-->|West|ZN
    ZS-->|North|CBE
    ZS-->|South|MWH
    ZS-->|Northeast|ZN
    ZN-.->EXIT1
    ZN-->|North|TCAT["Tarqaron Cathedral"]
    ZN-->|South|BF["Baction Foyer (Belius)"]
    TCAT-->|West|EH
    EH-->|West|EC
    EH-->|Southeast|GI["Ghasfarost Interior"]
    EC-->|West|TF["The Fiertia (Adecor/Baccos"]
    TF-->|East|QW
    QW-->|Southwest|ER["Egothor Riverside (Khroma)"]
    QW-->TSE["Tarqaron Steps East (Breaker)"]
    BF-->|South|HI["Heracles Interior"]
    HI-->|Southwest|GI
    HI-->|Northeast|MY["Modern Yormgen"]
    GI-->|South|TF
    MY-->|South|TSE
    TSE-->|East|ER
    ER-->|East|TROOF["Tarqaron Roofs (Flynn)"]
    TROOF-->|West|RC["Relewiese Canyon (Pteropus)"]
    RC-->|North|GSD["Ghost Ship Deck (Zagi)"]
    GSD-->|West|SDA["Sword Dancer Area (Don)"]
    SDA-->|Southwest|ZSS["Zaphias Sword Stair (Duke)"]
    ZSS-->PAY
    ZSS-.->EXITFINAL
    TG-.->EXITFINAL
    TROOF-->H["Halure (Fenrir)"]
    H-->|South|ZD["Zaude Door (Griffon)"]
    ZD-->|North|RSPRING["Relewiese Spring (Brucis)"]
    RSPRING-->|East|ES["Erealumen Spring (Medusa)"]
    ES-->|Southeast|DSEWER["Dahngrest Sewers (Bloody Beak)"]
    DSEWER-->|Southeast|ZSS
</div>