# O.M. Grefstad – redesignprototype

Dette er en frittstående, moderne redesignprototype for O.M. Grefstad AS. Den er ikke koblet til produksjonsnettstedet og skal ikke publiseres over dagens løsning uten en egen innholds-, fakta- og rettighetsgjennomgang.

## Retning

Prototypen gjør de tre viktigste brukerreisene synlige med en gang: biler til salgs, nye Opel og verksted. Uttrykket er skandinavisk og redaksjonelt med kraftig typografi, tydelige rektangulære flater, varm off-white, koksgrå og en begrenset Opel-inspirert gulfarge.

Opel får en tydelig historisk og kommersiell rolle, men O.M. Grefstad forblir hovedavsender. Subaru, bruktbil, verksted og øvrige tjenester er derfor fortsatt en integrert del av helheten.

## Informasjonsarkitektur

Dagens hovednettsted samler en bred forside med introduksjon, merker, tjenester, historie, ansatte, kontaktskjema og avdelingsinformasjon. Surnadal har en egen avdelingsside, og bruktbillageret vises via en ekstern/innrammet løsning. Den separate Opel-forhandlersiden prioriterer Opel-modeller, bygg bil, kampanjer, service og kontakthandlinger.

Den nye forsiden følger denne rekkefølgen:

1. Handlingsorientert topp og hero
2. Opel-historie
3. Bruktbiler / lagerinngang
4. Nye Opel og offisielle Opel-reiser
5. Tjenester
6. Verksted
7. Selskapshistorie
8. Avdelinger og kontakt

## Kjør lokalt

```bash
npm install
npm run dev
```

Åpne deretter adressen som vises i terminalen. Produksjonsbygg kan kontrolleres med `npm run build`.

## Struktur

- `app/` – side, metadata og globale designvariabler
- `components/` – gjenbrukbare topp-, bunn- og bilkortkomponenter
- `data/site.ts` – sentral kilde for kontaktdata, avdelinger, lenker og innhold
- `public/images/` – prototypebilder som skal kunne byttes ut
- `docs/` – merke- og innholdsnotater

## Kilder og verifiserte fakta

Fakta er hentet fra det offentlige hovednettstedet, Surnadal-siden og den offisielle Opel-forhandlersiden:

- Virksomheten startet på Løkken Verk i 1936.
- Bilsalg startet i 1969.
- Opel ble forhandlermerke 1. desember 1977.
- Subaru ble en del av virksomheten i 2003.
- O.M. Grefstad har avdelinger på Løkken Verk og i Surnadal.
- Offentlig beskrevne tjenester omfatter bilsalg, verksted, PKK, deler, dekk/dekkhotell, karosseri/lakk, vaskehall på Løkken Verk og ruteskift i Surnadal.

Kilder: [omgrefstad.no](https://www.omgrefstad.no/), [Surnadal](https://www.omgrefstad.no/surnadal/) og [offisiell Opel-forhandlerside](https://omgrefstad.opel.no/).

## Må bekreftes før produksjon

- **Adressekonflikt på Løkken Verk:** hovednettstedet viser `Løkkenveien 386`, mens Opel-forhandlersiden viser `Løkkenveien 175`. Prototypen viser hovednettstedets adresse med en tydelig merknad. Riktig gateadresse må avklares.
- Åpningstider må bekreftes og lagres i den sentrale datamodellen.
- Ansattnavn, direkte telefonnumre og e-postadresser bør verifiseres på nytt.
- Reelle lagerdata må kobles til dagens eller en fremtidig lagerkilde. Bilkortene i prototypen er tydelig merket demo.
- Alle endelige Opel-kampanje-, modell- og prisopplysninger bør ligge hos Opel og lenkes til fremfor å dupliseres.

## Bilder og rettigheter

Bil- og verkstedbildene er prototypebilder fra Unsplash og er merket som illustrasjons-/prototypefoto der det er relevant. De bør erstattes med godkjente bilder av de faktiske avdelingene, de ansatte og lokalt tilgjengelige biler. `public/og.png` er et KI-generert sosialt delingsbilde laget spesielt for prototypen.

