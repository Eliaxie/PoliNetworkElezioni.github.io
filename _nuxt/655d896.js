(window.webpackJsonp=window.webpackJsonp||[]).push([[23,2,3,7,9,10,12],{250:function(t,e,l){"use strict";l.r(e);l(253);var n=l(57),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"btn-container"},[l("button",{staticClass:"btn"},[t._t("default")],2)])}),[],!1,null,"7c0ace45",null);e.default=component.exports;installComponents(component,{Button:l(250).default})},251:function(t,e,l){var content=l(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(50).default)("efca395e",content,!0,{sourceMap:!1})},253:function(t,e,l){"use strict";l(251)},254:function(t,e,l){var n=l(49)(!1);n.push([t.i,".btn-container[data-v-7c0ace45]{padding:.5rem}.btn[data-v-7c0ace45]{color:#fff;font-size:1.1em;padding:1rem;letter-spacing:.08em;background-color:rgba(3,7,30,.78824);color:#fcfbf9;transition:all .3s;display:inline-block;font-weight:400;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;line-height:1.5;border-radius:.55rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}button[data-v-7c0ace45]{border:none;outline:none}button[data-v-7c0ace45],html input[type=button][data-v-7c0ace45],input[type=reset][data-v-7c0ace45],input[type=submit][data-v-7c0ace45]{-webkit-appearance:button;cursor:pointer}button[data-v-7c0ace45]{overflow:visible}",""]),t.exports=n},255:function(t,e,l){"use strict";l.r(e);var n=l(57),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top"},[l("div",{staticClass:"container"},[l("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[l("img",{staticStyle:{width:"calc(20px + 0.1rem)"},attrs:{src:"/img/icon.png"}}),l("span",[t._v(" PoliNetwork")])]),t._v(" "),l("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[l("span",{staticClass:"navbar-toggler-icon"})]),t._v(" "),l("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[l("ul",{staticClass:"navbar-nav ml-auto"},[l("li",{staticClass:"nav-item active"},[l("a",{staticClass:"nav-link",attrs:{href:"/"}},[t._v("Home\n\t\t\t\t\t\t"),l("span",{staticClass:"sr-only"},[t._v("(current)")])])]),t._v(" "),l("li",{staticClass:"nav-item"},[l("a",{staticClass:"nav-link",attrs:{href:"/senatocda/"}},[t._v("Senato & CdA")])]),t._v(" "),l("li",{staticClass:"nav-item"},[l("a",{staticClass:"nav-link",attrs:{href:"/scuole/"}},[t._v("Scuole")])]),t._v(" "),l("li",{staticClass:"nav-item"},[l("a",{staticClass:"nav-link",attrs:{href:"/ccsScuole/"}},[t._v("CCS")])]),t._v(" "),l("li",{staticClass:"nav-item"},[l("a",{staticClass:"nav-link",attrs:{href:"/contatti/"}},[t._v("Contatti")])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:l(250).default})},256:function(t,e,l){var content=l(259);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(50).default)("749dcd68",content,!0,{sourceMap:!1})},257:function(t,e,l){"use strict";l.r(e);var n={props:{classParam:{type:String,default:""},styleParam:{type:String,default:""}}},r=l(57),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.classParam,style:t.styleParam},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},258:function(t,e,l){"use strict";l(256)},259:function(t,e,l){var n=l(49)(!1);n.push([t.i,"figure{margin-left:auto;margin-right:auto}.nameCandidatoFull{font-size:small}.nameDetto{font-size:calc(1px + .5rem + .3vw);color:#009ad7;font-style:italic}.candidatoCard{border:1px solid rgba(0,0,0,.1);border-radius:calc(1px + 1rem);padding:calc(1px + .3rem)}",""]),t.exports=n},260:function(t,e,l){"use strict";l.r(e);var n={props:{cand:{type:Object,default:null},urlLista:{type:String,default:null}}},r=(l(258),l(57)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"candidatoCard"},[l("a",{attrs:{href:t.urlLista}},[l("div",{staticClass:"candidatoSV",staticStyle:{"text-align":"center"}},[l("figure",{staticClass:"wow animated fadeInLeft animated",staticStyle:{visibility:"visible","animation-name":"fadeInLeft",width:"100%","margin-bottom":"calc(0.2rem)","margin-top":"calc(0.3rem)"}},[l("img",{staticClass:"border-img img-responsive center-block immagineCandidato",staticStyle:{width:"100%"},attrs:{src:t.cand.imgUrl}})]),t._v(" "),l("div",{staticClass:"imgcaption",staticStyle:{"text-align":"center"}},[l("strong",{staticClass:"nameCandidato"},[l("div",{staticStyle:{width:"100%"}},[l("span",{staticClass:"nameCandidatoFull"},[t._v(t._s(t.cand.name))])]),t._v(" "),l("div",{staticStyle:{width:"100%"}},[l("span",{staticClass:"nameDetto"},[t._v("\n                            "+t._s(t.cand.detto)+"\n                        ")])])])])])])])}),[],!1,null,null,null);e.default=component.exports},261:function(t,e,l){var content=l(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(50).default)("3426da24",content,!0,{sourceMap:!1})},262:function(t,e,l){var content=l(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(50).default)("943f6e46",content,!0,{sourceMap:!1})},264:function(t,e,l){"use strict";l(261)},265:function(t,e,l){var n=l(49)(!1);n.push([t.i,"div.div-hr2[data-v-17c550bb]{width:100%}div.div-hr2[data-v-17c550bb],hr.hr2[data-v-17c550bb]{text-align:center;max-width:100%}hr.hr2[data-v-17c550bb]{padding:0;border-top:1px solid #545454;margin:calc(10px + 1rem + 1vh) auto;width:calc(1px + 85vw);color:#000}",""]),t.exports=n},267:function(t,e,l){"use strict";l.r(e);l(264);var n=l(57),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"div-hr2"},[e("hr",{staticClass:"hr2"})])}],!1,null,"17c550bb",null);e.default=component.exports},268:function(t,e,l){"use strict";l(262)},269:function(t,e,l){var n=l(49)(!1);n.push([t.i,'img[src$=".gif"][data-v-aa7b4c1c],img[src$=".png"][data-v-aa7b4c1c]{image-rendering:-moz-crisp-edges;image-rendering:-o-crisp-edges;image-rendering:-webkit-optimize-contrast;-ms-interpolation-mode:nearest-neighbor}img[data-v-aa7b4c1c]{border:0;vertical-align:middle}.office-place[data-v-aa7b4c1c]{color:#4b4228;font:16px/1.5 "Novecento Sans Wide Medium",Helvetica,Arial,sans-serif;letter-spacing:.2em;margin:25px auto 0}.descrizioneLista[data-v-aa7b4c1c]{font-size:calc(15px + .17vw + .08rem)}.carousel-inner>.item>a>img[data-v-aa7b4c1c],.carousel-inner>.item>img[data-v-aa7b4c1c],.img-responsive[data-v-aa7b4c1c],.thumbnail>img[data-v-aa7b4c1c],.thumbnail a>img[data-v-aa7b4c1c]{display:block;width:100%\\9;max-width:90%;height:auto;margin-left:auto;margin-right:auto;margin-bottom:0}.imgcaption[data-v-aa7b4c1c]{margin-bottom:calc(1.3rem + 3px)}figure[data-v-aa7b4c1c]{margin-left:auto;margin-right:auto;margin-bottom:.2rem}',""]),t.exports=n},270:function(t,e,l){"use strict";l.r(e);var n={props:{dataLista:{type:Object,default:null}}},r=(l(268),l(57)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("NavigationBar"),t._v(" "),l("br"),t._v(" "),l("br"),t._v(" "),l("div",{staticClass:"intro white",staticStyle:{"text-align":"center"}},[l("div",{staticStyle:{width:"100%"}},[l("img",{staticStyle:{width:"calc(15px + 4vw + 5rem)",padding:"10px","text-align":"center"},attrs:{src:t.dataLista.imageUrl}})]),t._v(" "),l("div",{staticClass:"container wow animated fadeInUp"},[l("h2",{staticStyle:{color:"black","font-size":"calc(10px + 3vw + 0.5rem)"}},[t._v(t._s(this.dataLista.name))]),t._v(" "),l("a",{attrs:{href:this.dataLista.mainWebsiteUrl}},[l("Button",[t._v("Sito ufficiale 🌐")])],1),t._v(" "),l("a",{attrs:{href:this.dataLista.mainProgrammaUrl}},[l("Button",[t._v("Programma elettorale - PDF Completo 🗳")])],1),t._v(" "),l("p",{staticClass:"office-place descrizioneLista",attrs:{id:"office-place"}},[t._v(t._s(this.dataLista.desc))])])]),t._v(" "),l("div",{staticClass:"section",attrs:{id:"our-info"}},[l("div",{staticClass:"container"},[l("h2",{staticStyle:{"font-size":"calc(9px + 2.5vw + 0.3rem)","padding-top":"2rem"}},[t._v("Programma elettorale")]),t._v(" "),l("hr"),t._v(" "),l("h3",{staticStyle:{"text-align":"center","font-size":"calc(8px + 1.5vw + 0.2rem)","font-variant":"petite-caps","-webkit-text-stroke":"1px #0c013587","-webkit-text-fill-color":"black"}},[t._v(t._s(t.dataLista.programmaSottotitolo))]),t._v(" "),l("div",{staticStyle:{padding:"5px"}}),t._v(" "),l("div",{staticClass:"row"},t._l(t.dataLista.programma,(function(e){return l("Frame",{key:e.id,attrs:{"class-param":"col-sm-3 wow animated fadeInLeft","style-param":"margin:auto;"}},[l("div",[l("figure",[l("img",{staticClass:"z-hover img-responsive",attrs:{src:e.url}})]),t._v(" "),l("h4",[t._v(t._s(e.title))]),t._v(" "),l("p",{staticClass:"function-text"},[t._v("\n                            "+t._s(e.desc)+"\n                             ")])])])})),1)])]),t._v(" "),l("HorizontalLine"),t._v(" "),l("div",{staticClass:"section members"},[l("div",{staticClass:"container"},[l("h2",[t._v("Senato")]),t._v(" "),l("hr"),t._v(" "),l("p",{staticClass:"lead-creative-banner"},[t._v("\n                "+t._s(t.dataLista.senato.desc)+"\n            ")]),t._v(" "),l("div",{staticStyle:{display:"flex","flex-wrap":"wrap"},attrs:{id:"includedContentSenato"}},t._l(t.dataLista.senato.candidati,(function(t){return l("Frame",{key:t.id,attrs:{"class-param":"col-md-3 col-md-2","style-param":"display:flex;margin: auto;"}},[l("Candidato",{attrs:{cand:t,"url-lista":""}})],1)})),1)])]),t._v(" "),l("HorizontalLine"),t._v(" "),l("div",{staticClass:"section members"},[l("div",{staticClass:"container"},[l("h2",[t._v("CDA")]),t._v(" "),l("hr"),t._v(" "),l("p",{staticClass:"lead-creative-banner"},[t._v("\n                "+t._s(t.dataLista.cda.desc)+"\n            ")]),t._v(" "),l("div",{staticStyle:{display:"flex","flex-wrap":"wrap"},attrs:{id:"includedContentSenato"}},t._l(t.dataLista.cda.candidati,(function(t){return l("Frame",{key:t.id,attrs:{"class-param":"col-md-3 col-md-2","style-param":"display:flex;margin: auto;"}},[l("Candidato",{attrs:{cand:t,"url-lista":""}})],1)})),1)])]),t._v(" "),l("HorizontalLine"),t._v(" "),l("div",{staticClass:"section members",staticStyle:{"background-color":"white"}},[l("div",{staticClass:"container"},[l("h2",[t._v("Scuole")]),t._v(" "),l("hr"),t._v(" "),l("p",{staticClass:"lead-creative-banner"},[t._v(t._s(t.dataLista.scuole.desc))]),t._v(" "),l("ul",{staticStyle:{"list-style":"none"}},[l("li",{staticClass:"liScuola"},[l("span",{staticClass:"titleScuole"},[t._v("AUIC")]),t._v(" "),l("div",{staticClass:"spacerScuole"}),t._v(" "),l("div",{staticClass:"descrizioneScuola"},[t._v("\n                     "+t._s(t.dataLista.scuole.auic.desc)+"\n                ")]),t._v(" "),l("div",{staticStyle:{display:"flex","flex-wrap":"wrap"},attrs:{id:"includedContentScuoleAUIC"}},t._l(t.dataLista.scuole.auic.candidati,(function(t){return l("Frame",{key:t.id,attrs:{"class-param":"col-md-3 col-md-2","style-param":"display:flex;margin: auto;"}},[l("Candidato",{attrs:{cand:t,"url-lista":""}})],1)})),1)]),t._v(" "),l("li",{staticClass:"liScuola"},[l("span",{staticClass:"titleScuole"},[t._v("3I")]),t._v(" "),l("div",{staticClass:"spacerScuole"}),t._v(" "),l("div",{staticClass:"descrizioneScuola"},[t._v("\n                "+t._s(t.dataLista.scuole.trei.desc)+"\n                      ")]),t._v(" "),l("div",{staticStyle:{display:"flex","flex-wrap":"wrap"},attrs:{id:"includedContentScuole3I"}},t._l(t.dataLista.scuole.trei.candidati,(function(t){return l("Frame",{key:t.id,attrs:{"class-param":"col-md-3 col-md-2","style-param":"display:flex;margin: auto;"}},[l("Candidato",{attrs:{cand:t,"url-lista":""}})],1)})),1)]),t._v(" "),l("li",{staticClass:"liScuola"},[l("span",{staticClass:"titleScuole"},[t._v("ICAT")]),t._v(" "),l("div",{staticClass:"spacerScuole"}),t._v(" "),l("div",{staticClass:"descrizioneScuola"},[t._v("\n                "+t._s(t.dataLista.scuole.icat.desc)+"\n                     ")]),t._v(" "),l("div",{staticStyle:{display:"flex","flex-wrap":"wrap"},attrs:{id:"includedContentScuoleICAT"}},t._l(t.dataLista.scuole.icat.candidati,(function(t){return l("Frame",{key:t.id,attrs:{"class-param":"col-md-3 col-md-2","style-param":"display:flex;margin: auto;"}},[l("Candidato",{attrs:{cand:t,"url-lista":""}})],1)})),1)]),t._v(" "),l("li",{staticClass:"liScuola"},[l("span",{staticClass:"titleScuole"},[t._v("DESIGN")]),t._v(" "),l("div",{staticClass:"spacerScuole"}),t._v(" "),l("div",{staticClass:"descrizioneScuola"},[t._v("\n                "+t._s(t.dataLista.scuole.design.desc)+"\n                         ")]),t._v(" "),l("div",{staticStyle:{display:"flex","flex-wrap":"wrap"},attrs:{id:"includedContentScuoleDESIGN"}},t._l(t.dataLista.scuole.design.candidati,(function(t){return l("Frame",{key:t.id,attrs:{"class-param":"col-md-3 col-md-2","style-param":"display:flex;margin: auto;"}},[l("Candidato",{attrs:{cand:t,"url-lista":""}})],1)})),1)])])])])],1)}),[],!1,null,"aa7b4c1c",null);e.default=component.exports;installComponents(component,{NavigationBar:l(255).default,Button:l(250).default,Frame:l(257).default,HorizontalLine:l(267).default,Candidato:l(260).default})},285:function(t,e,l){"use strict";l.r(e);var n={data:function(){return{items:{name:"ListaAperta",mainWebsiteUrl:"https://www.readytobe-listaperta.com",mainProgrammaUrl:"https://www.polimi.it/fileadmin/user_upload/il_Politecnico/votazioni-studenti/Votazioni_2021/programmi-elettorali/Lista_Aperta.pdf",desc:"metti-descrizione",imageUrl:"/img/listaaperta.png",programmaSottotitolo:"Inserisci sottotitolo...",programma:[{id:1,title:"Titolo1",url:"/img/listaaperta.png",desc:"Descrizione 1"},{id:2,title:"Titolo2",url:"/img/listaaperta.png",desc:"Descrizione 2"}],senato:{desc:"In Senato lavoreremo per garantire una didattica di qualità aperta a forme innovative per valorizzare le attitudini di ogni studente. Inoltre, è per noi un tema fondamentale incentivare l’internazionalizzazione sia al Politecnico sia con esperienze all’estero.",candidati:[{id:1,imgUrl:"/img/candidati/listaaperta/marta_ghidoli.jpg",name:"Ghidoli Marta",detto:"MARTA"},{id:2,imgUrl:"/img/candidati/listaaperta/alessandro_alladio.jpg",name:"Alladio Alessandro",detto:"LALO"},{id:3,imgUrl:"/img/candidati/listaaperta/andrea_mandelli.jpg",name:"Mandelli Andrea",detto:"ZAC"},{id:4,imgUrl:"/img/candidati/listaaperta/chiara_giardiello.jpg",name:"Giardiello Chiara Edda Maria",detto:"CHIARA"},{id:5,imgUrl:"/img/candidati/listaaperta/francesco_bugo.jpg",name:"Bugo Francesco Maria",detto:"BUGO"},{id:6,imgUrl:"/img/candidati/listaaperta/maria_zini.jpg",name:"Zini Maria",detto:"MERI"},{id:7,imgUrl:"/img/candidati/listaaperta/alessandro_maestri.jpg",name:"Maestri Alessandro",detto:"BOBBI"},{id:8,imgUrl:"/img/candidati/listaaperta/elisabetta_alberton.jpg",name:"Alberton Elisabetta",detto:"BETTA"}]},cda:{desc:"In CdA ci batteremo per il Diritto allo Studio: una battaglia decisiva per permettere a tutti gli studenti di poter vivere a pieno l’università! Inoltre, ci impegneremo sempre per garantire i giusti finanziamenti per sviluppare i nostri campus sempre di più come luoghi di aggregazione e di qualità.",candidati:[{id:1,imgUrl:"/img/candidati/listaaperta/daniele_redaelli.jpg",name:"Radaelli Daniele",detto:"REDA"},{id:2,imgUrl:"/img/candidati/listaaperta/emanuela_dotti.jpg",name:"Dotti Emanuela",detto:"MANU"},{id:3,imgUrl:"/img/candidati/listaaperta/tommaso_sanese.jpg",name:"Sanese Tommaso",detto:"TOMMI"},{id:4,imgUrl:"/img/candidati/listaaperta/sofia_boni.jpg",name:"Boni Sofia",detto:"SOFI"}]},scuole:{desc:"La nostra idea di scuola ecc...",auic:{desc:"La scuola auic...",candidati:[{id:1,imgUrl:"/img/candidati/listaaperta/tommaso_sanese.jpg",name:"Sanese Tommaso",detto:"TOMMI"},{id:2,imgUrl:"/img/candidati/listaaperta/maria_zini.jpg",name:"Zini Maria",detto:"MERI"},{id:3,imgUrl:"/img/candidati/listaaperta/sara_galli.jpg",name:"Galli Sara",detto:"SARA"},{id:4,imgUrl:"/img/candidati/listaaperta/issa_tallawi.jpg",name:"Tallawi Issa",detto:"ISSA"},{id:5,imgUrl:"/img/candidati/listaaperta/veronica_cantale.jpg",name:"Cantale Maria Veronica",detto:""},{id:6,imgUrl:"/img/candidati/listaaperta/elisabetta_alberton.jpg",name:"Alberton Elisabetta",detto:"BETTA"},{id:7,imgUrl:"/img/candidati/listaaperta/elisabetta_taffa.jpg",name:"Taffa Elisabetta",detto:"ELI"},{id:8,imgUrl:"/img/candidati/listaaperta/marco_galbiati.jpg",name:"Galbiati Marco",detto:"CALI"},{id:9,imgUrl:"/img/candidati/listaaperta/marta_defre.jpg",name:"De fre Marta",detto:"MARTA"},{id:10,imgUrl:"/img/candidati/listaaperta/pietro_rabaioli.jpg",name:"Rabaioli Pietro",detto:"RABA"},{id:11,imgUrl:"/img/candidati/listaaperta/isaac_young.jpg",name:"Young Isaac Jason",detto:"ISAAC"},{id:12,imgUrl:"/img/candidati/listaaperta/marco_stringhetti.jpg",name:"Stringhetti Marco",detto:"STRINGO"},{id:13,imgUrl:"/img/candidati/listaaperta/sara_baldelli.jpg",name:"Baldelli Sara Micol",detto:""}]},trei:{desc:"La scuola 3i...",candidati:[{id:1,imgUrl:"/img/candidati/listaaperta/alessandro_alladio.jpg",name:"Alladio Alessandro",detto:"LALO"},{id:2,imgUrl:"/img/candidati/listaaperta/emanuela_dotti.jpg",name:"Dotti Emanuela",detto:"MANU"},{id:3,imgUrl:"/img/candidati/listaaperta/giovanni_cavassi.jpg",name:"Cavassi Giovanni",detto:"CAVA"},{id:4,imgUrl:"/img/candidati/listaaperta/letizia_perri.jpg",name:"Perri Letizia Maria",detto:"LETI"},{id:5,imgUrl:"/img/candidati/listaaperta/john_powell.jpg",name:"Powell John Edgar",detto:"JOHN.JE"},{id:6,imgUrl:"/img/candidati/listaaperta/lorenzo_petulicchio.jpg",name:"Petulicchio Lorenzo",detto:"PETU"},{id:7,imgUrl:"/img/candidati/listaaperta/francesca_castellotti.jpg",name:"Castellotti Francesca",detto:"FRANCI"},{id:8,imgUrl:"/img/candidati/listaaperta/matteo_crivellari.jpg",name:"Crivellari Matteo",detto:"CRIVE"},{id:9,imgUrl:"/img/candidati/listaaperta/gloria_lopiano.jpg",name:"Lopiano Gloria",detto:""},{id:10,imgUrl:"/img/candidati/listaaperta/luca_mandelli.jpg",name:"Mandelli Luca",detto:"MANDO"},{id:11,imgUrl:"/img/candidati/listaaperta/stefano_garavaglia.jpg",name:"Garavaglia Stefano",detto:"IZ"},{id:12,imgUrl:"/img/candidati/listaaperta/giuliano_gemmani.jpg",name:"Gemmnani Giuliano",detto:"GEMMA"},{id:13,imgUrl:"/img/candidati/listaaperta/marco_gandolla.jpg",name:"Gandolla Marco",detto:"QUAGLIA"},{id:14,imgUrl:"/img/candidati/listaaperta/francesco_boldrini.jpg",name:"Boldrini Francesco",detto:"BOLD"},{id:15,imgUrl:"/img/candidati/listaaperta/marco_guerini.jpg",name:"Guerini Marco",detto:"GUERO"}]},icat:{desc:"La scuola icat...",candidati:[{id:1,imgUrl:"/img/candidati/listaaperta/andrea_mandelli.jpg",name:"Mandelli Andrea",detto:"ZAC"},{id:2,imgUrl:"/img/candidati/listaaperta/francesco_bugo.jpg",name:"Bugo Francesco Maria",detto:"BUGO"},{id:3,imgUrl:"/img/candidati/listaaperta/pietro_perego.jpg",name:"Perego Pietro",detto:"PIE"},{id:4,imgUrl:"/img/candidati/listaaperta/camilla_macchini.jpg",name:"Macchini Camilla",detto:"CAMI"},{id:5,imgUrl:"/img/candidati/listaaperta/franscesco_cannerozzi.jpg",name:"Cannerozzi Francesco",detto:"CANNE"},{id:6,imgUrl:"/img/candidati/listaaperta/davide_zini.jpg",name:"Zini Davide",detto:"ZINZAN"},{id:7,imgUrl:"/img/candidati/listaaperta/giovanni_abbenda.jpg",name:"Abbenda Giovanni",detto:"GIO"}]},design:{desc:"La scuola design...",candidati:[{id:1,imgUrl:"/img/candidati/listaaperta/chiara_giardiello.jpg",name:"Giardiello Chiara Edda Maria",detto:"CHIARA"},{id:2,imgUrl:"/img/candidati/listaaperta/sofia_boni.jpg",name:"Boni Sofia",detto:"SOFI"},{id:3,imgUrl:"/img/candidati/listaaperta/maddalena_milanesi.jpg",name:"Milanesi Maddalena",detto:"MADDA"},{id:4,imgUrl:"/img/candidati/listaaperta/lorenzo_bressan.jpg",name:"Bressan Lorenzo",detto:"BRACE"},{id:5,imgUrl:"/img/candidati/listaaperta/maria_sammarini.jpg",name:"Sammarini Maria",detto:"MERY"},{id:6,imgUrl:"/img/candidati/listaaperta/michele_dondi.jpg",name:"Dondi Michele",detto:"MIKE"},{id:7,imgUrl:"/img/candidati/listaaperta/luca_tassetto.jpg",name:"Tassetto Luca",detto:"TAX"},{id:8,imgUrl:"/img/candidati/listaaperta/giacomo_tomesani.jpg",name:"Tomesani Giacomo Maria",detto:"JACK"},{id:9,imgUrl:"/img/candidati/listaaperta/caterina_grillo.jpg",name:"Grillo Caterina Maria",detto:"CATE"},{id:10,imgUrl:"/img/candidati/listaaperta/giovanni_clericetti.jpg",name:"Clericetti Giovanni",detto:"GIOCLE"},{id:11,imgUrl:"/img/candidati/listaaperta/michele_bruno.jpg",name:"Bruno Michele",detto:"MICHI"},{id:12,imgUrl:"/img/candidati/listaaperta/chiara_mazzeo.jpg",name:"Mazzeo Chiara",detto:""},{id:13,imgUrl:"/img/candidati/listaaperta/giovanni_provesi.jpg",name:"Provesi Giovanni",detto:"GIO"},{id:14,imgUrl:"/img/candidati/listaaperta/chiara_anceschi.jpg",name:"Anceschi Chiara",detto:"CHIANCHI"}]}}}}}},r=l(57),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("ListaDettaglio",{attrs:{"data-lista":t.items}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ListaDettaglio:l(270).default})}}]);