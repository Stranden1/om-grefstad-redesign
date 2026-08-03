export const dealership = {
  name: "O.M. Grefstad AS",
  displayName: "O.M. Grefstad",
  mainPhone: { label: "72 49 72 00", href: "tel:+4772497200" },
  mainEmail: {
    label: "kundeservice@omgrefstad.no",
    href: "mailto:kundeservice@omgrefstad.no",
  },
  facts: {
    established: "1936",
    carSales: "1969",
    opelDealer: "1977",
    opelDealerDate: "1. desember 1977",
    subaru: "2003",
  },
  links: {
    usedCars: "https://www.omgrefstad.no/?p=237",
    opelModels: "https://omgrefstad.opel.no/personbiler/",
    opelBuilder: "https://www.opel.no/tools/bygg-din-opel.html",
    opelCampaigns: "https://www.opel.no/tilbud/aktuelle-tilbud.html",
    opelTestDrive: "https://kontaktoss.opel.no/",
    opelWorkshop: "https://booking.opel.no/bestilling?dealer=419",
    currentSite: "https://www.omgrefstad.no/",
  },
  locations: [
    {
      id: "lokken",
      name: "Løkken Verk",
      phone: { label: "72 49 72 00", href: "tel:+4772497200" },
      email: {
        label: "kundeservice@omgrefstad.no",
        href: "mailto:kundeservice@omgrefstad.no",
      },
      address: "Løkkenveien 386, 7332 Løkken Verk",
      directions:
        "https://www.google.com/maps/search/?api=1&query=L%C3%B8kkenveien+386%2C+7332+L%C3%B8kken+Verk",
      note: "Adresse fra hovednettstedet. Opel-siden viser et annet gatenummer – må bekreftes før publisering.",
    },
    {
      id: "surnadal",
      name: "Surnadal",
      phone: { label: "71 65 75 72", href: "tel:+4771657572" },
      email: {
        label: "ribi.verksted@omgrefstad.no",
        href: "mailto:ribi.verksted@omgrefstad.no",
      },
      address: "Øravegen 4, 6650 Surnadal",
      directions:
        "https://www.google.com/maps/search/?api=1&query=%C3%98ravegen+4%2C+6650+Surnadal",
      note: "Avdeling ved ALTI-senteret i Surnadal.",
    },
  ],
} as const;

export const navigation = [
  { label: "Biler", href: "#biler" },
  { label: "Opel", href: "#opel" },
  { label: "Verksted", href: "#verksted" },
  { label: "Tjenester", href: "#tjenester" },
  { label: "Om oss", href: "#om-oss" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

export const sampleVehicles = [
  {
    model: "Opel Mokka",
    modelYear: "2021",
    mileage: "42 000 km",
    powertrain: "Bensin · Automat",
    price: "289 000 kr",
    image: "/images/opel-05.jpg",
    alt: "Grønn Opel Mokka fotografert på en rolig vei",
  },
  {
    model: "Opel Astra",
    modelYear: "2018",
    mileage: "76 500 km",
    powertrain: "Diesel · Manuell",
    price: "179 000 kr",
    image: "/images/opel-04.jpg",
    alt: "Hvit Opel Astra parkert i kveldssol",
  },
  {
    model: "Opel Corsa",
    modelYear: "2020",
    mileage: "38 200 km",
    powertrain: "Bensin · Automat",
    price: "209 000 kr",
    image: "/images/opel-02.jpg",
    alt: "Hvit Opel Corsa på en skogsvei",
  },
] as const;

export const services = [
  {
    name: "Bilsalg",
    description: "Nye Opel- og Subaru-modeller og et variert utvalg bruktbiler.",
  },
  {
    name: "Verksted og PKK",
    description: "Service, vedlikehold, reparasjoner og periodisk kjøretøykontroll.",
  },
  {
    name: "Dekk og dekkhotell",
    description: "Dekkskift, oppbevaring og vedlikehold gjennom sesongene.",
  },
  {
    name: "Karosseri og lakk",
    description: "Bilskadereparasjoner og lakkering ved avdelingen på Løkken Verk.",
  },
  {
    name: "Deler og tilbehør",
    description: "Delelager og hjelp til å skaffe riktige deler til bilen din.",
  },
  {
    name: "Ruter og bilpleie",
    description: "Ruteskift i Surnadal og vaskehall ved avdelingen på Løkken Verk.",
  },
] as const;

export const history = [
  { year: "1936", text: "Virksomheten starter på Løkken Verk." },
  { year: "1969", text: "O.M. Grefstad begynner med bilsalg." },
  { year: "1977", text: "Opel blir en del av historien 1. desember." },
  { year: "2003", text: "Subaru blir en del av virksomheten." },
] as const;

