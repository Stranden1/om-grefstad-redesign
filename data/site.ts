export const phones = {
  lokken: { label: "72 49 72 00", href: "tel:+4772497200" },
  surnadal: { label: "71 65 75 72", href: "tel:+4771657572" },
} as const;

export const emails = {
  lokken: { label: "kundeservice@omgrefstad.no", href: "mailto:kundeservice@omgrefstad.no" },
  surnadal: { label: "ribi.verksted@omgrefstad.no", href: "mailto:ribi.verksted@omgrefstad.no" },
} as const;

export const links = {
  booking: "https://booking.opel.no/bestilling?dealer=419",
  finn: "https://www.finn.no/pw/search/car-norway?orgId=1878849865",
  opel: "https://omgrefstad.opel.no",
  facebook: "https://www.facebook.com/omgrefstad/",
  mapsLokken: "https://maps.google.com/?q=Løkkenveien+Løkken+Verk",
  mapsSurnadal: "https://maps.google.com/?q=Øravegen+4,+6650+Surnadal",
} as const;

export const navigation = [
  { label: "Biler", menuLabel: "Biler", href: "/biler" },
  { label: "Verksted og EU-kontroll", menuLabel: "Verksted og EU-kontroll", href: "/verksted" },
  { label: "Surnadal", menuLabel: "Avdeling Surnadal", href: "/surnadal" },
  { label: "Om oss", menuLabel: "Om oss og historien", href: "/om-oss" },
  { label: "Kontakt", menuLabel: "Kontakt og åpningstider", href: "/kontakt" },
] as const;

export const sampleCars = [
  { name: "Opel Astra", meta: "Eksempel · 2018 · 76 500 km", price: "179 000 kr", image: "/images/astra-hvit.jpg", alt: "Hvit Opel Astra" },
  { name: "Opel Mokka", meta: "Eksempel · 2021 · 42 000 km", price: "289 000 kr", image: "/images/mokka-gronn.jpg", alt: "Grønn Opel Mokka" },
  { name: "Opel Mokka", meta: "Eksempel · [år] · [km]", price: "[pris]", image: "/images/mokka-hvit-bak.jpg", alt: "Hvit Opel Mokka sett bakfra" },
] as const;

export const history = [
  { year: "1936", text: "Bensinstasjon og sykkelverksted på Løkken Verk" },
  { year: "1969", text: "Bilsalget starter" },
  { year: "1977", text: "Opel-forhandler fra 1. desember", highlight: true },
  { year: "2003", text: "Subaru-forhandleren i Surnadal blir en del av O.M. Grefstad" },
] as const;

type Person = { name: string; role: string; phone?: { label: string; href: string } };

export const people: Person[] = [
  { name: "Terje Danielsen", role: "Daglig leder / salg", phone: { label: "917 94 981", href: "tel:+4791794981" } },
  { name: "Bjørn Atle Hilstad", role: "Verksmester", phone: { label: "480 37 902", href: "tel:+4748037902" } },
  { name: "Ola Resell", role: "Delesjef", phone: { label: "480 41 241", href: "tel:+4748041241" } },
  { name: "Bjørn Johny Holten", role: "Verksmester, Surnadal", phone: phones.surnadal },
  { name: "Jon Olav Holten", role: "Bilselger, Surnadal", phone: { label: "91 72 06 06", href: "tel:+4791720606" } },
  { name: "[Navn]", role: "[Rolle]" },
];

export const surnadalPeople: Person[] = [
  { name: "Bjørn Johny Holten", role: "Verksmester", phone: phones.surnadal },
  { name: "Jon Olav Holten", role: "Bilselger", phone: { label: "91 72 06 06", href: "tel:+4791720606" } },
  { name: "Espen Bredesen", role: "Bilmekaniker" },
  { name: "Even Meisal", role: "Bilmekaniker" },
];
