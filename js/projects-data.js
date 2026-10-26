// Original images from finars.si – full color originals
const PROJECTS = {
  "olimpijski-bazen": {
    id: "olimpijski-bazen",
    title: "Pokrit olimpijski bazen in wellness – Libija",
    year: "2013",
    authors: "Simon Škrbec u.d.i.a., Kristijan Čuk u.d.i.a.",
    location: "Libija",
    description: "Objekt je delno vkopan v teren in povezuje dva nivoja mesta – trg Revolucije in cesto 1. junija. Dostopi so možni z obeh nivojev, tako v objekt kot tudi na objekt; celotna streha je pohodna in kot taka ustvarja nov javen prostor. Programsko se objekt deli na mladinski center z večnamensko dvorano, studiem, vadnico in hotel s 24 ležišči. Oba programa povezuje upravni del v 1. etaži. Kvadratura objekta znaša 700 m²; število etaž: K+P+N.",
    images: [
      "https://finars.si/projekti/2013%207%20olimpijski%20bazen%20libija/01.jpg",
      "https://finars.si/projekti/2013%207%20olimpijski%20bazen%20libija/02.jpg",
      "https://finars.si/projekti/2013%207%20olimpijski%20bazen%20libija/03.jpg",
      "https://finars.si/projekti/2013%207%20olimpijski%20bazen%20libija/04.jpg",
      "https://finars.si/projekti/2013%207%20olimpijski%20bazen%20libija/05.jpg",
      "https://finars.si/projekti/2013%207%20olimpijski%20bazen%20libija/06.jpg",
      "https://finars.si/projekti/2013%207%20olimpijski%20bazen%20libija/07.jpg",
      "https://finars.si/projekti/2013%207%20olimpijski%20bazen%20libija/08.jpg",
      "https://finars.si/projekti/2013%207%20olimpijski%20bazen%20libija/09.jpg",
      "https://finars.si/projekti/2013%207%20olimpijski%20bazen%20libija/10.jpg"
    ]
  },
  "sola-trbovlje": {
    id: "sola-trbovlje",
    title: "Prenova Osnovne šole Revirski borci – Trbovlje",
    year: "2013",
    authors: "Irena Gorjup Gračner u.d.i.a., Kristijan Čuk u.d.i.a.",
    location: "Trbovlje",
    description: "Celovita prenova Osnovne šole Revirski borci v Trbovljah. Projekt vključuje modernizacijo prostorov, izboljšanje energetskih lastnosti in prilagoditev sodobnim pedagoškim potrebam, ob ohranjanju identitete objekta.",
    images: [
      "https://finars.si/projekti/2013%206%20sola%20trbovlje/01.jpg",
      "https://finars.si/projekti/2013%206%20sola%20trbovlje/02.jpg",
      "https://finars.si/projekti/2013%206%20sola%20trbovlje/03.jpg",
      "https://finars.si/projekti/2013%206%20sola%20trbovlje/04.jpg",
      "https://finars.si/projekti/2013%206%20sola%20trbovlje/05.jpg",
      "https://finars.si/projekti/2013%206%20sola%20trbovlje/06.jpg",
      "https://finars.si/projekti/2013%206%20sola%20trbovlje/07.jpg",
      "https://finars.si/projekti/2013%206%20sola%20trbovlje/08.jpg",
      "https://finars.si/projekti/2013%206%20sola%20trbovlje/09.jpg",
      "https://finars.si/projekti/2013%206%20sola%20trbovlje/10.jpg"
    ]
  },
  "urbana-dnevna-soba": {
    id: "urbana-dnevna-soba",
    title: "Urbana dnevna soba na deželi",
    year: "2011",
    authors: "Simon Škrbec u.d.i.a., Kristijan Čuk u.d.i.a.",
    location: "Slovenija",
    description: "Koncept urbane dnevne sobe, prenesene v podeželsko okolje. Sodobna bivalna arhitektura, ki združuje odprtost mestnega prostora z mirnostjo in povezanostjo z naravo.",
    images: [
      "https://finars.si/projekti/2011%208%20urbana%20dnevna%20soba/01.jpg",
      "https://finars.si/projekti/2011%208%20urbana%20dnevna%20soba/02.jpg",
      "https://finars.si/projekti/2011%208%20urbana%20dnevna%20soba/03.jpg",
      "https://finars.si/projekti/2011%208%20urbana%20dnevna%20soba/04.jpg",
      "https://finars.si/projekti/2011%208%20urbana%20dnevna%20soba/05.jpg",
      "https://finars.si/projekti/2011%208%20urbana%20dnevna%20soba/06.jpg"
    ]
  },
  "czs": {
    id: "czs",
    title: "CZS – Center za družbene dejavnosti",
    year: "2011",
    authors: "Kristijan Čuk u.d.i.a. in ekipa FIN ARS",
    location: "Slovenija",
    description: "Projekt centra za družbene dejavnosti – prostor srečevanja, kulture in skupnosti. Funkcionalna in odprta arhitektura, ki spodbuja interakcijo.",
    images: [
      "https://finars.si/projekti/2011%201%20czs/01.jpg",
      "https://finars.si/projekti/2011%201%20czs/02.jpg",
      "https://finars.si/projekti/2011%201%20czs/03.jpg",
      "https://finars.si/projekti/2011%201%20czs/04.jpg",
      "https://finars.si/projekti/2011%201%20czs/05.jpg"
    ]
  },
  "stanovanja-r": {
    id: "stanovanja-r",
    title: "Stanovanja R",
    year: "2011",
    authors: "Kristijan Čuk u.d.i.a. in ekipa",
    location: "Slovenija",
    description: "Stanovanjski projekt z jasno zasnovo tlorisov in sodobno arhitekturno govorico. Poudarek na kakovosti bivanja, svetlobi in povezanosti z okolico.",
    images: [
      "https://finars.si/projekti/2011%204%20stanovanja%20r/01.jpg",
      "https://finars.si/projekti/2011%204%20stanovanja%20r/02.jpg",
      "https://finars.si/projekti/2011%204%20stanovanja%20r/03.jpg",
      "https://finars.si/projekti/2011%204%20stanovanja%20r/04.jpg",
      "https://finars.si/projekti/2011%204%20stanovanja%20r/05.jpg"
    ]
  },
  "vrtec-kisovec": {
    id: "vrtec-kisovec",
    title: "Vrtec Kisovec",
    year: "2010",
    authors: "Ekipa FIN ARS",
    location: "Kisovec",
    description: "Sodobni vrtec, zasnovan z mislijo na najmlajše. Svetli, varni in spodbudni prostori, ki omogočajo igro, učenje in gibanje v naravnem okolju.",
    images: [
      "https://finars.si/projekti/2010%203%20vrtec%20kisovec/01.jpg",
      "https://finars.si/projekti/2010%203%20vrtec%20kisovec/02.jpg",
      "https://finars.si/projekti/2010%203%20vrtec%20kisovec/03.jpg",
      "https://finars.si/projekti/2010%203%20vrtec%20kisovec/04.jpg",
      "https://finars.si/projekti/2010%203%20vrtec%20kisovec/05.jpg"
    ]
  },
  "mercator-skofja-loka": {
    id: "mercator-skofja-loka",
    title: "Mercator Škofja Loka",
    year: "2010",
    authors: "Ekipa FIN ARS",
    location: "Škofja Loka",
    description: "Trgovski objekt Mercator v Škofji Loki. Jasna funkcionalna zasnova, dobro povezovanje s prometom in okolico ter sodoben arhitekturni izraz.",
    images: [
      "https://finars.si/projekti/2010%202%20mercator%20skofja%20loka/01.jpg",
      "https://finars.si/projekti/2010%202%20mercator%20skofja%20loka/02.jpg",
      "https://finars.si/projekti/2010%202%20mercator%20skofja%20loka/03.jpg",
      "https://finars.si/projekti/2010%202%20mercator%20skofja%20loka/04.jpg"
    ]
  },
  "spar-litija": {
    id: "spar-litija",
    title: "SPAR Litija",
    year: "2007",
    authors: "Ekipa FIN ARS",
    location: "Litija",
    description: "Trgovski center SPAR v Litiji. Ena od zgodnjih večjih realizacij biroja – jasna volumnost, funkcionalnost in prepoznavna arhitekturna podoba.",
    images: [
      "https://finars.si/projekti/2007%207%20spar%20litija/01.jpg",
      "https://finars.si/projekti/2007%207%20spar%20litija/02.jpg",
      "https://finars.si/projekti/2007%207%20spar%20litija/03.jpg",
      "https://finars.si/projekti/2007%207%20spar%20litija/04.jpg"
    ]
  },
  "blok-k3": {
    id: "blok-k3",
    title: "Blok K3",
    year: "2007",
    authors: "Ekipa FIN ARS",
    location: "Slovenija",
    description: "Stanovanjski blok K3 – večstanovanjski objekt z optimiziranimi tlorisi in jasno fasadno kompozicijo.",
    images: [
      "https://finars.si/projekti/2007%202%20blok%20k3/01.jpg",
      "https://finars.si/projekti/2007%202%20blok%20k3/02.jpg",
      "https://finars.si/projekti/2007%202%20blok%20k3/03.jpg",
      "https://finars.si/projekti/2007%202%20blok%20k3/04.jpg"
    ]
  },
  "stanovanjsko-naselje": {
    id: "stanovanjsko-naselje",
    title: "Stanovanjsko naselje Podčetrtek",
    year: "2013",
    authors: "Ekipa FIN ARS",
    location: "Podčetrtek",
    description: "Novo stanovanjsko naselje v Podčetrtku. Usklajena urbanistična in arhitekturna zasnova, ki ustvarja kakovostno bivalno okolje z zelenimi površinami in dobrimi povezavami.",
    images: [
      "https://finars.si/projekti/2013%202%20stanovanjsko%20naselje%20podcetrtek/01.jpg",
      "https://finars.si/projekti/2013%202%20stanovanjsko%20naselje%20podcetrtek/02.jpg",
      "https://finars.si/projekti/2013%202%20stanovanjsko%20naselje%20podcetrtek/03.jpg",
      "https://finars.si/projekti/2013%202%20stanovanjsko%20naselje%20podcetrtek/04.jpg",
      "https://finars.si/projekti/2013%202%20stanovanjsko%20naselje%20podcetrtek/05.jpg"
    ]
  },
  "avtohisa-s": {
    id: "avtohisa-s",
    title: "Avtohiša S",
    year: "2007",
    authors: "Ekipa FIN ARS",
    location: "Slovenija",
    description: "Avtohiša – objekt za prodajo in servis vozil. Funkcionalna zasnova z jasnimi prostori za razstavljanje, delavnico in administracijo.",
    images: [
      "https://finars.si/projekti/2007%206%20avtohisa%20s/01.jpg",
      "https://finars.si/projekti/2007%206%20avtohisa%20s/02.jpg",
      "https://finars.si/projekti/2007%206%20avtohisa%20s/03.jpg",
      "https://finars.si/projekti/2007%206%20avtohisa%20s/04.jpg"
    ]
  }
};
