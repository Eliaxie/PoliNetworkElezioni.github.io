<template>
  <div>
    <ListeListaDettaglio :data-lista="items" :language="$i18n.locale" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: {
        name: "Svoltastudenti",
        mainWebsiteUrl: "https://elezioni2021.svoltastudenti.it",
        mainProgrammaUrl:
          "https://www.polimi.it/fileadmin/user_upload/il_Politecnico/votazioni-studenti/Votazioni_2021/programmi-elettorali/Svoltastudenti.pdf",
        desc: [
          "Nata nel 2008 per rendere partecipi tutti gli studenti nei processi formativi e decisionali dell’Ateneo che tutti i giorni viviamo. Opportunità, idee e rappresentanti del tutto svincolati dai partiti: siamo apartitici, laici e multiculturali.",
        ],
        imageUrl: "/img/svolta.png",
        instagram: "https://www.instagram.com/svoltastudenti/",
        programmaSottotitolo: "StudentsMakePolimi",
        programma: [
          {
            id: 1,
            title: "DIDATTICA PIU' A MISURA DI STUDENTE",
            url: "/img/2021/programmi/svoltastudenti/1.jpg",
            desc: "Vogliamo ampliare la scelta delle tesi di laurea, inserendo la possibilità di condividerle con altri corsi di studio, realizzare una piattaforma online che faciliti le collaborazioni tra studenti, costituire reti di aiuto tra studenti per la mobilità internazionale, istituire un questionario post esame per la valutazione delle modalità di somministrazione, e creare programmi di mobilità ultra breve.",
          },
          {
            id: 2,
            title: "RIDUZIONE DEI COSTI E SOSTEGNI ECONOMICI",
            url: "/img/2021/programmi/svoltastudenti/2.jpg",
            desc: "Continueremo a lottare perché sia mantenuta la politica di IDONEI = BENEFICIARI, per garantire agevolazioni per studenti che svolgono attività complementari (sport, lavoro), abbassare il prezzo dei menù nelle mense e ampliare convenzioni per studenti per eventi, fiere e teatri",
          },
          {
            id: 3,
            title: "PARI OPPORTUNITA'",
            url: "/img/2021/programmi/svoltastudenti/4.jpg",
            desc: "Chiederemo l'inserimento di insegnamenti in materia di Diversity & Inclusion in tutti i corsi di laurea, e ci faremo promotori del rilancio dello sportello psicologico e del servizio POLIPSI, implementando anche l'azione peer-to-peer. ",
          },
          {
            id: 4,
            title: "CAMPUS LIFE E AMBIENTE",
            url: "/img/2021/programmi/svoltastudenti/3.jpg",
            desc: "Vogliamo rendere il Politecnico la prima Università italiana totalmente Carbon Neutral entro il 2040, impegnare l'ateneo nell'implementazione dell'Agenda 2030 dell'ONU e nei rispettivi Sustainable Development Goals, e sviluppare un'impronta etica e umanistica in tutti i corsi di laurea.",
          },
        ],
        senato: {
          desc: "In Senato per noi è fondamentale portare avanti idee a misura di studente, in modo slegato da influenze partitiche e confessionali. Portiamo avanti il dialogo con le istituzioni richiedendo mutuo rispetto, in modo da portare le scelte di ateneo sempre più a favore degli studenti.",
          candidati: [
            {
              id: 1,
              imgUrl: "/img/2021/candidati/svoltastudenti/marco_cesaro.jpg",
              name: "Cesaro Marco",
              detto: "SOMMELIER",
            },
            {
              id: 2,
              imgUrl: "/img/2021/candidati/svoltastudenti/lorenzo_ghettini.jpg",
              name: "Ghettini Lorenzo",
              detto: "LO SPEAKER",
            },
            {
              id: 3,
              imgUrl: "/img/2021/candidati/svoltastudenti/davide_diceglie.jpg",
              name: "Di Ceglie Davide",
              detto: "REFLASH",
            },
            {
              id: 4,
              imgUrl: "/img/2021/candidati/svoltastudenti/matteo_reda.jpg",
              name: "Reda Matteo",
              detto: "",
            },
            {
              id: 5,
              imgUrl: "/img/2021/candidati/svoltastudenti/alessia_bove.jpg",
              name: "Bove Alessia",
              detto: "ALESSIA",
            },
            {
              id: 6,
              imgUrl: "/img/2021/candidati/svoltastudenti/lorenzo_macovei.jpg",
              name: "Macovei Lorenzo",
              detto: "MACOSSS",
            },
            {
              id: 7,
              imgUrl: "/img/2021/candidati/svoltastudenti/elena_zannotti.jpg",
              name: "Zannotti Elena",
              detto: "ELLE",
            },
            {
              id: 8,
              imgUrl: "/img/2021/candidati/svoltastudenti/klaudio_luku.jpg",
              name: "Luku Klaudio",
              detto: "KLAUDIO CON LA K",
            },
          ],
        },
        CdA: {
          desc: "Ci battiamo ogni anno per mantenere la politica di IDONEI = BENEFICIARI, e in CdA vogliamo continuare a lavorare per diminuire i gap tra studenti di fasce diverse, per far sì che le opportunità coi bandi aumentino sempre di più e per tutelare gli studenti più deboli e le loro famiglie.",
          candidati: [
            {
              id: 1,
              imgUrl: "/img/2021/candidati/svoltastudenti/antonino_sgroi.jpg",
              name: "Sgroi Antonino",
              detto: "LILLO",
            },
            {
              id: 2,
              imgUrl: "/img/2021/candidati/svoltastudenti/eva_parenti.jpg",
              name: "Parenti Eva",
              detto: "EVA",
            },
            {
              id: 3,
              imgUrl:
                "/img/2021/candidati/svoltastudenti/giacomo_schiavone.jpg",
              name: "Schiavone Giacomo",
              detto: "GIACK",
            },
            {
              id: 4,
              imgUrl: "/img/2021/candidati/svoltastudenti/lorenzo_dionigi.jpg",
              name: "Dionigi Lorenzo",
              detto: "",
            },
          ],
        },
        scuole: {
          desc: "Nelle scuole ci battiamo perché la distribuzione dei CFU sia sempre più uniforme, perché gli esami siano unificati, annullando così le differenze per scaglione, e per fare in modo di creare più scelta all'interno dei corsi. Inoltre, vogliamo che si crei una rete studentesca importante, di peer tutoring e condivisione di progetti, e cerchiamo di aumentare sempre di più le opportunità laboratoriali, per un Politecnico più tecnico.",
          auic: {
            desc: "Incontri, eventi culturali e convenzioni: Rendere il Politecnico stesso teatro di incontri ed eventi integrati e inerenti al percorso didattico. Verso il mondo del lavoro: introdurre supporto istituzionale alla creazione del portfolio. Implementare corsi su software di disegno, modellazione e applicazione della metodologia BIM: Implementare l’insegnamento di programmi nei primi anni del corso di studi. Inserimento laboratori annuali: 3 mesi non sono sufficienti per portare avanti progetti all’altezza.",
            candidati: [
              {
                id: 1,
                imgUrl:
                  "/img/2021/candidati/svoltastudenti/elena_picchetti.jpg",
                name: "Picchetti Elena",
                detto: "",
              },
              {
                id: 2,
                imgUrl:
                  "/img/2021/candidati/svoltastudenti/davide_diceglie_auic.jpg",
                name: "Di Ceglie Davide",
                detto: "REFLASH",
              },
              {
                id: 3,
                imgUrl: "/img/2021/candidati/svoltastudenti/ian_fernandez.jpg",
                name: "Fernàndez Nava Ian Anthony Alloxis",
                detto: "IANF",
              },
              {
                id: 4,
                imgUrl:
                  "/img/2021/candidati/svoltastudenti/giacomo_schiavone_auic.jpg",
                name: "Schiavone Giacomo",
                detto: "GIACK",
              },
              {
                id: 5,
                imgUrl: "/img/2021/candidati/svoltastudenti/dalila_melotti.jpg",
                name: "Melotti Dalila",
                detto: "DIDI",
              },
            ],
          },
          trei: {
            desc: "Creare di rete di Ambassadors con lo scopo di avvicinare le ragazze al mondo ingegneristico. Aumentare l’attività laboratoriale nei corsi a scelta in magistrale: questi corsi sono già interdipartimentali e la contaminazione sarebbe facilmente implementabile. Inserire l’bbligo di caricare una versione corretta del tema d’esame e garantire la possibilità di accedere ai temi d’esami degli anni precedenti e simulazioni, attraverso un archivio centralizzato. Introdurre un nuovo appello d’esame: introdurre un appello totale in concomitanza della seconda prova parziale.",
            candidati: [
              {
                id: 1,
                imgUrl: "/img/2021/candidati/svoltastudenti/marsona_panci.jpg",
                name: "Panci Marsona",
                detto: "MARS",
              },
              {
                id: 2,
                imgUrl: "/img/2021/candidati/svoltastudenti/raif_muhammad.jpg",
                name: "Muhammad Raif",
                detto: "RAIF",
              },
              {
                id: 3,
                imgUrl:
                  "/img/2021/candidati/svoltastudenti/mercedes_alazraki.jpg",
                name: "Alazraki Mercedes",
                detto: "MERCY AMG",
              },
              {
                id: 4,
                imgUrl: "/img/2021/candidati/svoltastudenti/eric_diluca.jpg",
                name: "Di Luca Eric Alexandro",
                detto: "CARLO CRACCO",
              },
              {
                id: 5,
                imgUrl:
                  "/img/2021/candidati/svoltastudenti/yousef_elgohary.jpg",
                name: "Elgohary Yousef",
                detto: "YOUS",
              },
              {
                id: 6,
                imgUrl: "/img/2021/candidati/svoltastudenti/lorenzo_lione.jpg",
                name: "Lione Lorenzo",
                detto: "LYON",
              },
              {
                id: 7,
                imgUrl:
                  "/img/2021/candidati/svoltastudenti/filiberto_canino.jpg",
                name: "Canino Filiberto",
                detto: "FIL",
              },
              {
                id: 8,
                imgUrl:
                  "/img/2021/candidati/svoltastudenti/martina_legnani.jpg",
                name: "Legnani Martina",
                detto: "LEGNA",
              },
              {
                id: 9,
                imgUrl: "/img/2021/candidati/svoltastudenti/simone_rapella.jpg",
                name: "Rapella Simone",
                detto: "MOMO",
              },
              {
                id: 10,
                imgUrl:
                  "/img/2021/candidati/svoltastudenti/mattia_marinoni.jpg",
                name: "Marinoni Mattia",
                detto: "TIA",
              },
              {
                id: 11,
                imgUrl: "/img/2021/candidati/svoltastudenti/anuar_mancini.jpg",
                name: "Mancini Anuar",
                detto: "DOPPIO MALTO",
              },
              {
                id: 12,
                imgUrl:
                  "/img/2021/candidati/svoltastudenti/alessandro_baserga.jpg",
                name: "Baserga Alessandro",
                detto: "BASE",
              },
              {
                id: 13,
                imgUrl: "/img/2021/candidati/svoltastudenti/alessio_rocca.jpg",
                name: "Rocca Alessio",
                detto: "IL PRESIDENTE",
              },
            ],
          },
          icat: {
            desc: "PEER TUTORING: Incentivare e approfondire l’utilizzo del peer tutoring. Nuovi collegamenti con il mondo professionale: organizzare visite in cantiere, visite in azienda e colloqui “face to face” con professionisti del settore. FISICA 1+ FISICA 2A: Spezzare l’esame annuale in due moduli, per permettere agli studenti di sostenere i due esami distaccati tra loro/ in anni accademici diversi. LABS: introduzione di laboratori ed esperienze in aula nei corsi triennali al fine di dare un riscontro pratico alla teoria.",
            candidati: [
              {
                id: 1,
                imgUrl:
                  "/img/2021/candidati/svoltastudenti/eleonora_pietrobelli.jpg",
                name: "Pietrobelli Eleonora",
                detto: "",
              },
              {
                id: 2,
                imgUrl:
                  "/img/2021/candidati/svoltastudenti/antonino_sgroi_icat.jpg",
                name: "Sgroi Antonino",
                detto: "LILLO",
              },
              {
                id: 3,
                imgUrl:
                  "/img/2021/candidati/svoltastudenti/fabrizio_murillo.jpg",
                name: "Murillo Fabrizio Roldos Jose",
                detto: "",
              },
              {
                id: 4,
                imgUrl: "/img/2021/candidati/svoltastudenti/henry_andrade.jpg",
                name: "Andrade Henry",
                detto: "",
              },
              {
                id: 5,
                imgUrl:
                  "/img/2021/candidati/svoltastudenti/elena_zannotti_icat.jpg",
                name: "Zannotti Elena",
                detto: "ELLE",
              },
            ],
          },
          design: {
            desc: "Creare spazi per lo scambio di materiali avanzati dai progetti. Implementare l’omologazione dei software usati nei corsi, aggiornandoli a ciò che ora viene richiesto dal mondo del lavoro e creazione di una libreria di Mooc/video tutorial sull’utilizzo dei vari software. Introdurre più workshop e passion in action in collaborazione tra i diversi indirizzi. Inserire la possibilità di poter scegliere lo scaglione nei corsi di laboratorio che presentano differenze nei progetti.",
            candidati: [
              {
                id: 1,
                imgUrl: "/img/2021/candidati/svoltastudenti/marco_tintori.jpg",
                name: "Tintori Marco",
                detto: "TINTO",
              },
              {
                id: 2,
                imgUrl: "/img/2021/candidati/svoltastudenti/giulia_daleo.jpg",
                name: "D'Aleo Giulia",
                detto: "GIUS",
              },
              {
                id: 3,
                imgUrl:
                  "/img/2021/candidati/svoltastudenti/vittorio_perobelli.jpg",
                name: "Perobelli Vittorio",
                detto: "PERO",
              },
              {
                id: 4,
                imgUrl:
                  "/img/2021/candidati/svoltastudenti/eva_parenti_design.jpg",
                name: "Parenti Eva",
                detto: "EVA",
              },
            ],
          },
        },
      },
    };
  },
};
</script>
