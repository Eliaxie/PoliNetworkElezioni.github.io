(window.webpackJsonp=window.webpackJsonp||[]).push([[52,4,5,9,10,11],{207:function(t,e,n){"use strict";n.r(e);var r={props:{language:{type:String,required:!0}}},l=n(19),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),t._v(" "),n("hr"),t._v(" "),n("footer",{staticClass:"py-5 bg-dark",staticStyle:{"padding-top":"1rem !important","padding-bottom":"2rem !important"}},[n("div",{staticClass:"container"},[n("p",{staticClass:"m-0 text-center",staticStyle:{"font-size":"calc(3px + 0.55rem + 0.35vw)"}},[t._v("Copyright © "),n("a",{attrs:{href:"https://polinetwork.github.io/"+t.language}},[t._v("PoliNetwork")])]),t._v(" "),n("div",{staticStyle:{width:"100%","text-align":"center","font-size":"calc(2px + 0.5rem + 0.3vw)","padding-top":"3px"}},[n("a",{attrs:{href:"/"+t.language+"/contatti/"}},["it"==t.language?n("span",[t._v("\n                                Contatti\n                          ")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("\nContacts\n                          ")]):t._e()]),t._v("\n            - \n                    "),n("a",{attrs:{href:"/"+t.language+"/curiosita/"}},["it"==t.language?n("span",[t._v("\n                                           Curiosità\n                          ")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("\nCuriosity\n                          ")]):t._e()])]),t._v(" "),n("p",{staticClass:"m-0 text-center",staticStyle:{"font-size":"calc(3px + 0.3rem + 0.2vw)",color:"#000000d9","padding-top":"10px"}},["it"==t.language?n("span",[t._v("Questo sito non è affiliato al Politecnico di Milano")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("This site is not affiliated with the Politecnico di Milano")]):t._e()])])])])}),[],!1,null,null,null);e.default=component.exports},208:function(t,e,n){"use strict";n.r(e);var r={props:{classParam:{type:String,default:""},styleParam:{type:String,default:""}}},l=n(19),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.classParam,style:t.styleParam},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},209:function(t,e,n){var content=n(212);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("894dc536",content,!0,{sourceMap:!1})},210:function(t,e,n){var content=n(215);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("ad7dac6e",content,!0,{sourceMap:!1})},211:function(t,e,n){"use strict";n(209)},212:function(t,e,n){var r=n(36)(!1);r.push([t.i,"figure{margin-left:auto;margin-right:auto}.nameCandidatoFull{font-size:small}.nameDetto{font-size:calc(1px + .5rem + .3vw);color:#009ad7;font-style:italic}.candidatoCard{border:1px solid rgba(0,0,0,.1);border-radius:calc(1px + 1rem);padding:calc(1px + .3rem)}",""]),t.exports=r},213:function(t,e,n){"use strict";n.r(e);var r={props:{cand:{type:Object,default:null},urlLista:{type:String,default:null}}},l=(n(211),n(19)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"candidatoCard"},[n("a",{attrs:{href:t.urlLista}},[n("div",{staticClass:"candidatoSV",staticStyle:{"text-align":"center"}},[n("figure",{staticClass:"wow animated fadeInLeft animated",staticStyle:{visibility:"visible","animation-name":"fadeInLeft",width:"100%","margin-bottom":"calc(0.2rem)","margin-top":"calc(0.3rem)"}},[n("img",{staticClass:"border-img img-responsive center-block immagineCandidato",staticStyle:{width:"100%"},attrs:{src:t.cand.imgUrl}})]),t._v(" "),n("div",{staticClass:"imgcaption",staticStyle:{"text-align":"center"}},[n("strong",{staticClass:"nameCandidato"},[n("div",{staticStyle:{width:"100%"}},[n("span",{staticClass:"nameCandidatoFull"},[t._v(t._s(t.cand.name))])]),t._v(" "),n("div",{staticStyle:{width:"100%"}},[n("span",{staticClass:"nameDetto"},[t._v("\n                            "+t._s(t.cand.detto)+"\n                        ")])])])])])])])}),[],!1,null,null,null);e.default=component.exports},214:function(t,e,n){"use strict";n(210)},215:function(t,e,n){var r=n(36)(!1);r.push([t.i,".descrizioneFrameSenatoCdA{margin:auto;width:100%;max-width:calc(70px + 15rem + 40vw);padding-left:calc(1vw + 1px + .07rem);padding-right:calc(1vw + 1px + .07rem);padding-bottom:calc(.3rem + 6px)}",""]),t.exports=r},216:function(t,e,n){"use strict";n.r(e);var r={props:{item:{type:Object,default:null}}},l=(n(214),n(19)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{width:"100%"}},[n("h2",[t._v(t._s(t.item.name))])]),t._v(" "),n("div",{staticClass:"descrizioneFrameSenatoCdA"},[n("span",{staticStyle:{"font-size":"calc(1px + 1rem)",color:"black",padding:"calc(1px + 1vw)"}},[t._v("\n            "+t._s(t.item.desc)+"\n        ")])]),t._v(" "),n("div",{staticStyle:{display:"flex","flex-wrap":"wrap"}},t._l(t.item.candidati,(function(e){return n("LayoutFrame",{key:e.id,attrs:{"class-param":"col-md-6","style-param":"margin:auto;"}},[n("div",[n("ListeCandidato",{attrs:{cand:e,"url-lista":t.item.linkLista}})],1)])})),1),t._v(" "),n("div",{staticStyle:{padding:"10px"}},[t._v("\n         \n    ")])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ListeCandidato:n(213).default,LayoutFrame:n(208).default})},217:function(t,e,n){"use strict";n.r(e);var r={props:{liste:{type:Array,default:null},organiConfronto:{type:Array,default:null},language:{type:String,default:"it",required:!0}},mounted:function(){var t=this;this.$nextTick((function(){t.test2()}))},methods:{test2:function(){for(var t=0;t<5;t++){var ul=document.getElementById("listeContainer2");if(null!=ul){for(var i=ul.children.length;i>=0;i--)ul.appendChild(ul.children[Math.random()*i|0]);ul.style.opacity="1"}}}}},l=n(19),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("LayoutNavigationBar",{attrs:{language:t.language}}),t._v(" "),n("div",{staticClass:"container2",staticStyle:{width:"100%","max-width":"100%",margin:"0px"}},[n("div",{staticClass:"container7"},[n("header",{staticClass:"jumbotron my-4 testoCentrale",staticStyle:{border:"none"}},[n("div",{staticStyle:{margin:"auto"}},[n("div",{staticStyle:{"text-align":"center"}},[n("h2",["it"==t.language?n("span",[t._v("Elezioni rappresentanti degli studenti")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("Election of student representatives")]):t._e()]),t._v(" "),n("br"),t._v(" "),t._l(t.organiConfronto,(function(e){return n("LayoutFrame",{key:e.id},[n("div",[n("h4",[t._v(t._s(e.name))]),t._v(" "),n("p",{staticClass:"lead"}),n("blockquote",[t._v("\n                                            "+t._s(e.desc)+"\n                                        ")]),t._v(" "),n("p")])])}))],2)])])]),t._v(" "),n("div",{staticClass:"row text-center",staticStyle:{display:"flex","flex-wrap":"wrap",opacity:"0.5"},attrs:{id:"listeContainer2"},on:{load:t.test2}},t._l(t.liste,(function(e){return n("LayoutFrame",{key:e.id,attrs:{"class-param":"col-md-3","style-param":"max-width: 100%;flex: 1 4 25%;min-width:calc(150px + 9rem + 3vw)"}},[n("a",{attrs:{href:e.linkLista}},[n("div",{staticClass:"card"},[n("div",{staticClass:"listTile",staticStyle:{width:"100%"}},[n("div",{staticClass:"cap-left",staticStyle:{width:"100%",display:"block",padding:"0px"}},[n("div",{staticStyle:{width:"100%"}},[n("img",{staticClass:"imageList",staticStyle:{width:"100%","max-width":"100%"},attrs:{src:e.imageUrlHorizontal}})]),t._v(" "),n("div",{staticStyle:{"padding-top":"10px"}},[n("div",{staticClass:"candidateTable",staticStyle:{"list-style":"none","padding-left":"0px"}},t._l(e.organi,(function(t){return n("LayoutFrame",{key:t.name},[n("ListeFrameSenatoCdA",{attrs:{item:t}})],1)})),1)])])])])])])})),1)]),t._v(" "),n("LayoutFooter",{attrs:{language:t.language}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LayoutNavigationBar:n(154).default,LayoutFrame:n(208).default,ListeFrameSenatoCdA:n(216).default,LayoutFooter:n(207).default})},278:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{organiConfronto:[{id:1,name:"AUIC",desc:"Nella scuola AUIC sono eletti 5 rappresentanti degli studenti in Giunta della scuola."}],liste:[{id:1,name:"Svoltastudenti",imageUrlHorizontal:"/img/logo-svolta_hor.png",linkLista:"/lista/svoltastudenti/",organi:[{name:"AUIC",desc:"Incontri, eventi culturali e convenzioni: Rendere il Politecnico stesso teatro di incontri ed eventi integrati e inerenti al percorso didattico. Verso il mondo del lavoro: introdurre supporto istituzionale alla creazione del portfolio. Implementare corsi su software di disegno, modellazione e applicazione della metodologia BIM: Implementare l’insegnamento di programmi nei primi anni del corso di studi. Inserimento laboratori annuali: 3 mesi non sono sufficienti per portare avanti progetti all’altezza.",candidati:[{id:1,imgUrl:"/img/candidati/svoltastudenti/elena_picchetti.jpg",name:"Picchetti Elena",detto:""},{id:2,imgUrl:"/img/candidati/svoltastudenti/davide_diceglie_auic.jpg",name:"Di Ceglie Davide",detto:"REFLASH"},{id:3,imgUrl:"/img/candidati/svoltastudenti/ian_fernandez.jpg",name:"Fernàndez Nava Ian Anthony Alloxis",detto:"IANF"},{id:4,imgUrl:"/img/candidati/svoltastudenti/giacomo_schiavone_auic.jpg",name:"Schiavone Giacomo",detto:"GIACK"},{id:5,imgUrl:"/img/candidati/svoltastudenti/dalila_melotti.jpg",name:"Melotti Dalila",detto:"DIDI"}]}]},{id:2,name:"Lista aperta",imageUrlHorizontal:"/img/logo-listaaperta_hor.png",linkLista:"/lista/listaaperta/",organi:[{name:"AUIC",desc:"In scuola Auic lavoreremo su due pilastri: didattica e diritto allo studio. Per quanto riguarda la didattica, vorremmo dotare i docenti di strumenti tecnologici e digitali per aggiornare la didattica alle nuove forme che saranno decisive per noi studenti nel mondo del lavoro. Il Diritto allo Studio per gli studenti di Auic passa inevitabilmente dai costi che si devono sostenere per stampe e modelli: proponiamo un fondo e delle convenzioni per venire incontro, almeno in parte, a tutti gli studenti.",candidati:[{id:1,imgUrl:"/img/candidati/listaaperta/tommaso_sanese.jpg",name:"Sanese Tommaso",detto:"TOMMI"},{id:2,imgUrl:"/img/candidati/listaaperta/maria_zini.jpg",name:"Zini Maria",detto:"MERI"},{id:3,imgUrl:"/img/candidati/listaaperta/sara_galli.jpg",name:"Galli Sara",detto:"SARA"},{id:4,imgUrl:"/img/candidati/listaaperta/issa_tallawi.jpg",name:"Tallawi Issa",detto:"ISSA"},{id:5,imgUrl:"/img/candidati/listaaperta/maria_veronica_cantale.jpg",name:"Cantale Maria Veronica",detto:""},{id:6,imgUrl:"/img/candidati/listaaperta/elisabetta_alberton.jpg",name:"Alberton Elisabetta",detto:"BETTA"},{id:7,imgUrl:"/img/candidati/listaaperta/elisabetta_taffa.png",name:"Taffa Elisabetta",detto:"ELI"},{id:8,imgUrl:"/img/candidati/listaaperta/marco_galbiati.jpg",name:"Galbiati Marco",detto:"CALI"},{id:9,imgUrl:"/img/candidati/listaaperta/marta_de_fre.jpg",name:"De fre Marta",detto:"MARTA"},{id:10,imgUrl:"/img/candidati/listaaperta/pietro_rabaioli.jpg",name:"Rabaioli Pietro",detto:"RABA"},{id:11,imgUrl:"/img/candidati/listaaperta/isaac_young.jpg",name:"Young Isaac Jason",detto:"ISAAC"},{id:12,imgUrl:"/img/candidati/listaaperta/marco_stringhetti.jpg",name:"Stringhetti Marco",detto:"STRINGO"},{id:13,imgUrl:"/img/candidati/listaaperta/sara_baldelli.jpg",name:"Baldelli Sara Micol",detto:""}]}]},{id:3,name:"Terna sinistrorsa",imageUrlHorizontal:"/img/logo-terna_hor.png",linkLista:"/lista/ternasinistrorsa/",organi:[{name:"AUIC",desc:"Tutti abbiamo diritto agli stessi strumenti per la progettazione per questo richiediamo un accesso digitale alla bibliografia e un maggior numero di software gratuiti come Sketch-up pro e Lumion. Ci impegneremo anche per ridurre ulteriori costi a carico di noi studentз richiedendo la strumentazione adatta per poter svolgere revisioni in digitale. Ogni studentə vale più della sua media per questo proponiamo di essere valutati equamente per gli accessi sis ai laboratori che alle magistrali",candidati:[{id:1,imgUrl:"/img/candidati/ternasinistrorsa/chiara_nardelli.png",name:"Nardelli Chiara",detto:""},{id:2,imgUrl:"/img/candidati/ternasinistrorsa/letizia_guido.png",name:"Guido Letizia",detto:""}]}]},{id:4,name:"Studenti indipendenti",imageUrlHorizontal:"/img/logo-sip_hor.png",linkLista:"/lista/studentiindipendenti/",organi:[{name:"AUIC",desc:"Chiediamo che siano implementati più corsi di software per la rappresentazione digitale per garantire una preparazione a 360 gradi. Vogliamo che ci sia una maggiore coordinazione delle consegne tra le diverse classi di laboratori per evitare la dispersione all'interno dei corsi. E' necessario istituire un fondo per il materiale didattico e garantire revisioni a distanza per assicurare a tuttз la partecipazione attiva alle lezioni e ai laboratori. Crediamo infine che si possa accettare massimo una revisione a settimana per evitare di avere periodi di eccessivo stress e sovrapposizioni.",candidati:[{id:1,imgUrl:"/img/candidati/studentiindipendenti/tommasopaolo_bertolini.PNG",name:"Bertolini Tommasopaolo",detto:"TOMMI"},{id:2,imgUrl:"/img/candidati/studentiindipendenti/debora_maurelli.PNG",name:"Maurelli Debora",detto:""},{id:3,imgUrl:"/img/candidati/studentiindipendenti/giulia_cantatore.PNG",name:"Cantatore Giulia",detto:""},{id:4,imgUrl:"/img/candidati/studentiindipendenti/emily_lawrence.PNG",name:"Lawrence Emily",detto:""},{id:5,imgUrl:"/img/candidati/studentiindipendenti/gloria_maria_crisogianni.PNG",name:"Crisogianni Gloria Maria",detto:""},{id:6,imgUrl:"/img/candidati/studentiindipendenti/maria_nicole_deluca.PNG",name:"Deluca Maria Nicole",detto:""},{id:7,imgUrl:"/img/candidati/studentiindipendenti/luca_francioli.PNG",name:"Francioli Luca",detto:""},{id:8,imgUrl:"/img/candidati/studentiindipendenti/miranda_valeria_margarita_gonzalez.PNG",name:"Gonzàlez Miranda Valeria Margarita",detto:""},{id:9,imgUrl:"/img/candidati/studentiindipendenti/gabriele_haardt.PNG",name:"Haardt Gabriele",detto:""},{id:10,imgUrl:"/img/candidati/studentiindipendenti/ilaria_masciarelli.PNG",name:"Masciarelli Ilaria",detto:""},{id:11,imgUrl:"/img/candidati/studentiindipendenti/chiara_berti.PNG",name:"Berti Chiara",detto:""},{id:12,imgUrl:"/img/candidati/studentiindipendenti/pietro_buongiorno.PNG",name:"Buongiorno Pietro",detto:""}]}]}]}}},l=n(19),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ListeConfrontoListe",{attrs:{liste:t.liste,"organi-confronto":t.organiConfronto,language:"it"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ListeConfrontoListe:n(217).default})}}]);