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
        name: "Lista Aperta",
        mainWebsiteUrl: "https://www.readytobe-listaperta.com",
        mainProgrammaUrl:
          "https://www.polimi.it/fileadmin/user_upload/il_Politecnico/votazioni-studenti/Votazioni_2021/programmi-elettorali/Lista_Aperta.pdf",
        desc: [
          "Lista Aperta è un gruppo di studenti e amici che passa gran parte delle giornate in Università. Per questo ci interessa migliorare il posto in cui siamo, per permettere a tutti di vivere appieno l’esperienza universitaria, dagli spazi studio alla didattica nelle aule fino alle attività extracurricolari. ",
          "In questi giorni al Poli è cominciata la campagna elettorale: il nostro motto per queste elezioni è READY TO BE BACK TOGETHER! ",
          "Ready to be: noi ci siamo, siamo presenti e viviamo l’Università tutti i giorni, certi del valore di nuovi incontri, a lezione, nelle pause pranzo o nelle aule studio per studiare in compagnia. ",
          "Readytobeback: siamo pronti a tornare in Università, come prima ma più di prima!",
          "Readytobetogether: l’esperienza di uno studente all’interno del Politecnico non può essere in solitudine: per questo ci candidiamo insieme! Siamo 120 candidati, una squadra.",
        ],
        imageUrl: "/img/listaaperta.png",
        instagram: "https://www.instagram.com/poli_listaperta/",
        programmaSottotitolo: "READY TO BE BACK TOGETHER!",
        programma: [
          {
            id: 1,
            title: "Valorizziamo le lauree triennali",
            url: "/img/2021/programmi/listaaperta/1.jpg",
            desc: "Desideriamo valorizzare mediante proposte concrete le lauree triennali, che ad oggi sembrano essere una semplice preparazione per la magistrale. Per questo motivo, finché non ci sarà una reale valorizzazione della triennale, non bisogna alzare ulteriormente le medie d’accesso alla magistrale!",
          },
          {
            id: 2,
            title: "Registrazioni",
            url: "/img/2021/programmi/listaaperta/4.jpg",
            desc: "Le registrazioni sono un prezioso materiale didattico: lavoreremo affinché vengano sempre mantenute, coscienti del fatto che non potranno mai sostituire le vere lezioni live e in presenza.",
          },
          {
            id: 3,
            title: "Abbassiamo le tasse",
            url: "/img/2021/programmi/listaaperta/3.jpg",
            desc: "Lavoreremo insieme all’Ateneo per destinare investimenti al Diritto allo Studio in particolare per diminuire il contributo per le fasce medio-basse, anche grazie alla proposta di ulteriori esoneri per merito",
          },
          {
            id: 4,
            title: "Aumentiamo gli spazi studio",
            url: "/img/2021/programmi/listaaperta/2.jpg",
            desc: "È fondamentale per noi avere spazi di qualità in cui poter studiare: proponiamo di sfruttare le nuove tecnologie e forme di lavoro flessibili, per liberare uffici amministrativi e aumentare gli spazi studio.",
          },
        ],
        senato: {
          desc: "In Senato lavoreremo per garantire una didattica di qualità aperta a forme innovative per valorizzare le attitudini di ogni studente. Inoltre, è per noi un tema fondamentale incentivare l’internazionalizzazione sia al Politecnico sia con esperienze all’estero.",
          candidati: [
            {
              id: 1,
              imgUrl: "/img/2021/candidati/listaaperta/marta_ghidoli.jpg",
              name: "Ghidoli Marta",
              detto: "MARTA",
            },
            {
              id: 2,
              imgUrl: "/img/2021/candidati/listaaperta/alessandro_alladio.jpg",
              name: "Alladio Alessandro",
              detto: "LALO",
            },
            {
              id: 3,
              imgUrl: "/img/2021/candidati/listaaperta/andrea_mandelli.jpg",
              name: "Mandelli Andrea",
              detto: "ZAC",
            },
            {
              id: 4,
              imgUrl: "/img/2021/candidati/listaaperta/chiara_giardiello.jpg",
              name: "Giardiello Chiara Edda Maria",
              detto: "CHIARA",
            },
            {
              id: 5,
              imgUrl: "/img/2021/candidati/listaaperta/francesco_bugo.jpg",
              name: "Bugo Francesco Maria",
              detto: "BUGO",
            },
            {
              id: 6,
              imgUrl: "/img/2021/candidati/listaaperta/maria_zini.jpg",
              name: "Zini Maria",
              detto: "MERI",
            },
            {
              id: 7,
              imgUrl: "/img/2021/candidati/listaaperta/alessandro_maestri.jpg",
              name: "Maestri Alessandro",
              detto: "BOBBI",
            },
            {
              id: 8,
              imgUrl: "/img/2021/candidati/listaaperta/elisabetta_alberton.jpg",
              name: "Alberton Elisabetta",
              detto: "BETTA",
            },
          ],
        },
        CdA: {
          desc: "In CdA ci batteremo per il Diritto allo Studio: una battaglia decisiva per permettere a tutti gli studenti di poter vivere a pieno l’Università! Inoltre, ci impegneremo sempre per garantire i giusti finanziamenti per sviluppare i nostri campus sempre di più come luoghi di aggregazione e di qualità.",
          candidati: [
            {
              id: 1,
              imgUrl: "/img/2021/candidati/listaaperta/daniele_redaelli.jpg",
              name: "Radaelli Daniele",
              detto: "REDA",
            },
            {
              id: 2,
              imgUrl: "/img/2021/candidati/listaaperta/emanuela_dotti.jpg",
              name: "Dotti Emanuela",
              detto: "MANU",
            },
            {
              id: 3,
              imgUrl: "/img/2021/candidati/listaaperta/tommaso_sanese.jpg",
              name: "Sanese Tommaso",
              detto: "TOMMI",
            },
            {
              id: 4,
              imgUrl: "/img/2021/candidati/listaaperta/sofia_boni.jpg",
              name: "Boni Sofia",
              detto: "SOFI",
            },
          ],
        },
        scuole: {
          desc: "Lista Aperta si candida in tutti i corsi di studio: 120 candidati. Una squadra che lavora insieme in tutti i livelli della rappresentanza, dal CCS fino al Senato Accademico. In questo contesto, le scuole sono un anello fondamentale per poter raggiungere risultati concreti per migliorare la nostra Università e per creare una rete in cui condividere gli aspetti positivi, al servizio di tutti.",
          auic: {
            desc: "In scuola Auic lavoreremo su due pilastri: didattica e diritto allo studio. Per quanto riguarda la didattica, vorremmo dotare i docenti di strumenti tecnologici e digitali per aggiornare la didattica alle nuove forme che saranno decisive per noi studenti nel mondo del lavoro. Il Diritto allo Studio per gli studenti di Auic passa inevitabilmente dai costi che si devono sostenere per stampe e modelli: proponiamo un fondo e delle convenzioni per venire incontro, almeno in parte, a tutti gli studenti.",
            candidati: [
              {
                id: 1,
                imgUrl: "/img/2021/candidati/listaaperta/tommaso_sanese.jpg",
                name: "Sanese Tommaso",
                detto: "TOMMI",
              },
              {
                id: 2,
                imgUrl: "/img/2021/candidati/listaaperta/maria_zini.jpg",
                name: "Zini Maria",
                detto: "MERI",
              },
              {
                id: 3,
                imgUrl: "/img/2021/candidati/listaaperta/sara_galli.jpg",
                name: "Galli Sara",
                detto: "SARA",
              },
              {
                id: 4,
                imgUrl: "/img/2021/candidati/listaaperta/issa_tallawi.jpg",
                name: "Tallawi Issa",
                detto: "ISSA",
              },
              {
                id: 5,
                imgUrl:
                  "/img/2021/candidati/listaaperta/maria_veronica_cantale.jpg",
                name: "Cantale Maria Veronica",
                detto: "",
              },
              {
                id: 6,
                imgUrl:
                  "/img/2021/candidati/listaaperta/elisabetta_alberton.jpg",
                name: "Alberton Elisabetta",
                detto: "BETTA",
              },
              {
                id: 7,
                imgUrl: "/img/2021/candidati/listaaperta/elisabetta_taffa.png",
                name: "Taffa Elisabetta",
                detto: "ELI",
              },
              {
                id: 8,
                imgUrl: "/img/2021/candidati/listaaperta/marco_galbiati.jpg",
                name: "Galbiati Marco",
                detto: "CALI",
              },
              {
                id: 9,
                imgUrl: "/img/2021/candidati/listaaperta/marta_de_fre.jpg",
                name: "De fre Marta",
                detto: "MARTA",
              },
              {
                id: 10,
                imgUrl: "/img/2021/candidati/listaaperta/pietro_rabaioli.jpg",
                name: "Rabaioli Pietro",
                detto: "RABA",
              },
              {
                id: 11,
                imgUrl: "/img/2021/candidati/listaaperta/isaac_young.jpg",
                name: "Young Isaac Jason",
                detto: "ISAAC",
              },
              {
                id: 12,
                imgUrl: "/img/2021/candidati/listaaperta/marco_stringhetti.jpg",
                name: "Stringhetti Marco",
                detto: "STRINGO",
              },
              {
                id: 13,
                imgUrl: "/img/2021/candidati/listaaperta/sara_baldelli.jpg",
                name: "Baldelli Sara Micol",
                detto: "",
              },
            ],
          },
          trei: {
            desc: "Il nostro lavoro nella scuola 3I si concentrerà principalmente su 3 aspetti: valorizzare la laurea triennali, aumentare la qualità dell’esperienza didattica e costruire una didattica che tiene conto dell’esperienza digitale dell’emergenza Covid. Non si può pensare di rendere ancora più difficile l’ingresso in magistrale senza politiche di valorizzazione del percorso della laurea triennale, che sempre di più sta perdendo qualità nella didattica. Per aumentare la qualità della didattica crediamo che sia fondamentale aumentare la possibilità di personalizzare il proprio percorso di studi, a partire dalle lauree in discontinuità. Infine, ci teniamo a cogliere gli aspetti positivi del digitale, come le registrazioni, per migliorare la didattica innovativa.",
            candidati: [
              {
                id: 1,
                imgUrl:
                  "/img/2021/candidati/listaaperta/alessandro_alladio.jpg",
                name: "Alladio Alessandro",
                detto: "LALO",
              },
              {
                id: 2,
                imgUrl: "/img/2021/candidati/listaaperta/emanuela_dotti.jpg",
                name: "Dotti Emanuela",
                detto: "MANU",
              },
              {
                id: 3,
                imgUrl: "/img/2021/candidati/listaaperta/giovanni_cavassi.jpg",
                name: "Cavassi Giovanni",
                detto: "CAVA",
              },
              {
                id: 4,
                imgUrl:
                  "/img/2021/candidati/listaaperta/letizia_maria_perri.jpg",
                name: "Perri Letizia Maria",
                detto: "LETI",
              },
              {
                id: 5,
                imgUrl: "/img/2021/candidati/listaaperta/john_powell.jpg",
                name: "Powell John Edgar",
                detto: "JOHN.JE",
              },
              {
                id: 6,
                imgUrl:
                  "/img/2021/candidati/listaaperta/lorenzo_petullicchio.jpg",
                name: "Petullicchio Lorenzo",
                detto: "PETU",
              },
              {
                id: 7,
                imgUrl:
                  "/img/2021/candidati/listaaperta/francesca_castellotti.jpg",
                name: "Castellotti Francesca",
                detto: "FRANCI",
              },
              {
                id: 8,
                imgUrl: "/img/2021/candidati/listaaperta/matteo_crivellari.jpg",
                name: "Crivellari Matteo",
                detto: "CRIVE",
              },
              {
                id: 9,
                imgUrl: "/img/2021/candidati/listaaperta/gloria_lopiano.jpg",
                name: "Lopiano Gloria",
                detto: "",
              },
              {
                id: 10,
                imgUrl: "/img/2021/candidati/listaaperta/luca_mandelli.jpg",
                name: "Mandelli Luca",
                detto: "MANDO",
              },
              {
                id: 11,
                imgUrl:
                  "/img/2021/candidati/listaaperta/stefano_garavaglia.jpg",
                name: "Garavaglia Stefano",
                detto: "IZ",
              },
              {
                id: 12,
                imgUrl: "/img/2021/candidati/listaaperta/giuliano_gemmani.jpg",
                name: "Gemmnani Giuliano",
                detto: "GEMMA",
              },
              {
                id: 13,
                imgUrl: "/img/2021/candidati/listaaperta/marco_gandolla.jpg",
                name: "Gandolla Marco",
                detto: "QUAGLIA",
              },
              {
                id: 14,
                imgUrl:
                  "/img/2021/candidati/listaaperta/francesco_boldrini.jpg",
                name: "Boldrini Francesco",
                detto: "BOLD",
              },
              {
                id: 15,
                imgUrl: "/img/2021/candidati/listaaperta/marco_guerini.jpg",
                name: "Guerini Marco",
                detto: "GUERO",
              },
            ],
          },
          icat: {
            desc: "La scuola ICAT, visto il numero ridotto di studenti, deve investire risorse per aumentare la qualità della didattica: scaglioni più piccoli, più laboratori e esperienze personalizzate, fin dalla triennale. Inoltre, lavoreremo per aumentare le politiche di orientamente verso la magistrale e il mondo del lavoro, anche grazie all’introduzione di corsi professionalizzanti e tirocini.",
            candidati: [
              {
                id: 1,
                imgUrl: "/img/2021/candidati/listaaperta/andrea_mandelli.jpg",
                name: "Mandelli Andrea",
                detto: "ZAC",
              },
              {
                id: 2,
                imgUrl: "/img/2021/candidati/listaaperta/francesco_bugo.jpg",
                name: "Bugo Francesco Maria",
                detto: "BUGO",
              },
              {
                id: 3,
                imgUrl: "/img/2021/candidati/listaaperta/pietro_perego.jpg",
                name: "Perego Pietro",
                detto: "PIE",
              },
              {
                id: 4,
                imgUrl: "/img/2021/candidati/listaaperta/camilla_macchini.jpg",
                name: "Macchini Camilla",
                detto: "CAMI",
              },
              {
                id: 5,
                imgUrl:
                  "/img/2021/candidati/listaaperta/francesco_cannerozzi.jpg",
                name: "Cannerozzi Francesco",
                detto: "CANNE",
              },
              {
                id: 6,
                imgUrl: "/img/2021/candidati/listaaperta/davide_zini.jpg",
                name: "Zini Davide",
                detto: "ZINZAN",
              },
              {
                id: 7,
                imgUrl: "/img/2021/candidati/listaaperta/giovanni_abbenda.jpg",
                name: "Abbenda Giovanni",
                detto: "GIO",
              },
            ],
          },
          design: {
            desc: "Proponiamo di aumentare i rapporti con le aziende per garantire l’ibridazione dei quattro corsi di studio nei workshop. Vogliamo aumentare le interazioni con il Career Service durante le lezioni chiedendo di poter avere un Career Point all’interno del campus. Desideriamo revisionare gli obiettivi dei laboratori di elementi visivi per tutti i corsi di studio, così da aumentare le capacità di visual del progetto. Infine, proponiamo di aumentare le convenzioni con i musei: entrata gratuita per gli studenti del Politecnico alla Triennale, alla Fondazione Castiglioni e al Kartell museo. Inoltre chiediamo la possibilità di ottenere pass a fiere come il Salone del mobile. Per migliorare il nostro Campus, proponiamo una tensostruttura con tavoli e sedie cablati nei prati tra il B6 e il B8, e il cablaggio dei tavoli del pratone dietro al B1.",
            candidati: [
              {
                id: 1,
                imgUrl: "/img/2021/candidati/listaaperta/chiara_giardiello.jpg",
                name: "Giardiello Chiara Edda Maria",
                detto: "CHIARA",
              },
              {
                id: 2,
                imgUrl: "/img/2021/candidati/listaaperta/sofia_boni.jpg",
                name: "Boni Sofia",
                detto: "SOFI",
              },
              {
                id: 3,
                imgUrl:
                  "/img/2021/candidati/listaaperta/maddalena_milanesi.jpg",
                name: "Milanesi Maddalena",
                detto: "MADDA",
              },
              {
                id: 4,
                imgUrl: "/img/2021/candidati/listaaperta/lorenzo_bressan.jpg",
                name: "Bressan Lorenzo",
                detto: "BRACE",
              },
              {
                id: 5,
                imgUrl: "/img/2021/candidati/listaaperta/maria_sammarini.jpg",
                name: "Sammarini Maria",
                detto: "MERY",
              },
              {
                id: 6,
                imgUrl: "/img/2021/candidati/listaaperta/michele_dondi.jpg",
                name: "Dondi Michele",
                detto: "MIKE",
              },
              {
                id: 7,
                imgUrl: "/img/2021/candidati/listaaperta/luca_tassetto.jpg",
                name: "Tassetto Luca",
                detto: "TAX",
              },
              {
                id: 8,
                imgUrl:
                  "/img/2021/candidati/listaaperta/giacomo_maria_tomesani.jpg",
                name: "Tomesani Giacomo Maria",
                detto: "JACK",
              },
              {
                id: 9,
                imgUrl:
                  "/img/2021/candidati/listaaperta/caterina_maria_grillo.jpg",
                name: "Grillo Caterina Maria",
                detto: "CATE",
              },
              {
                id: 10,
                imgUrl:
                  "/img/2021/candidati/listaaperta/giovanni_clericetti.jpg",
                name: "Clericetti Giovanni",
                detto: "GIOCLE",
              },
              {
                id: 11,
                imgUrl: "/img/2021/candidati/listaaperta/michele_bruno.jpg",
                name: "Bruno Michele",
                detto: "MICHI",
              },
              {
                id: 12,
                imgUrl: "/img/2021/candidati/listaaperta/chiara_mazzeo.jpg",
                name: "Mazzeo Chiara",
                detto: "",
              },
              {
                id: 13,
                imgUrl: "/img/2021/candidati/listaaperta/giovanni_provesi.jpg",
                name: "Provesi Giovanni",
                detto: "GIO",
              },
              {
                id: 14,
                imgUrl: "/img/2021/candidati/listaaperta/chiara_anceschi.jpg",
                name: "Anceschi Chiara",
                detto: "CHIANCHI",
              },
            ],
          },
        },
      },
    };
  },
};
</script>
