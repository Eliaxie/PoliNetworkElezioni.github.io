(window.webpackJsonp=window.webpackJsonp||[]).push([[38,5,6,10,11,12,14],{207:function(t,e,n){"use strict";n.r(e);var o={props:{language:{type:String,required:!0}}},r=n(19),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),t._v(" "),n("hr"),t._v(" "),n("footer",{staticClass:"py-5 bg-dark",staticStyle:{"padding-top":"1rem !important","padding-bottom":"2rem !important"}},[n("div",{staticClass:"container"},[n("p",{staticClass:"m-0 text-center",staticStyle:{"font-size":"calc(3px + 0.55rem + 0.35vw)"}},[t._v("Copyright © "),n("a",{attrs:{href:"https://polinetwork.github.io/"+t.language}},[t._v("PoliNetwork")])]),t._v(" "),n("div",{staticStyle:{width:"100%","text-align":"center","font-size":"calc(2px + 0.5rem + 0.3vw)","padding-top":"3px"}},[n("a",{attrs:{href:"/"+t.language+"/contatti/"}},["it"==t.language?n("span",[t._v("\n                                Contatti\n                          ")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("\nContacts\n                          ")]):t._e()]),t._v("\n            - \n                    "),n("a",{attrs:{href:"/"+t.language+"/curiosita/"}},["it"==t.language?n("span",[t._v("\n                                           Curiosità\n                          ")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("\nCuriosity\n                          ")]):t._e()])]),t._v(" "),n("p",{staticClass:"m-0 text-center",staticStyle:{"font-size":"calc(3px + 0.3rem + 0.2vw)",color:"#000000d9","padding-top":"10px"}},["it"==t.language?n("span",[t._v("Questo sito non è affiliato al Politecnico di Milano")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("This site is not affiliated with the Politecnico di Milano")]):t._e()])])])])}),[],!1,null,null,null);e.default=component.exports},208:function(t,e,n){"use strict";n.r(e);var o={props:{classParam:{type:String,default:""},styleParam:{type:String,default:""}}},r=n(19),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.classParam,style:t.styleParam},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},209:function(t,e,n){var content=n(212);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("894dc536",content,!0,{sourceMap:!1})},210:function(t,e,n){var content=n(215);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("ad7dac6e",content,!0,{sourceMap:!1})},211:function(t,e,n){"use strict";n(209)},212:function(t,e,n){var o=n(36)(!1);o.push([t.i,"figure{margin-left:auto;margin-right:auto}.nameCandidatoFull{font-size:small}.nameDetto{font-size:calc(1px + .5rem + .3vw);color:#009ad7;font-style:italic}.candidatoCard{border:1px solid rgba(0,0,0,.1);border-radius:calc(1px + 1rem);padding:calc(1px + .3rem)}",""]),t.exports=o},213:function(t,e,n){"use strict";n.r(e);var o={props:{cand:{type:Object,default:null},urlLista:{type:String,default:null}}},r=(n(211),n(19)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"candidatoCard"},[n("a",{attrs:{href:t.urlLista}},[n("div",{staticClass:"candidatoSV",staticStyle:{"text-align":"center"}},[n("figure",{staticClass:"wow animated fadeInLeft animated",staticStyle:{visibility:"visible","animation-name":"fadeInLeft",width:"100%","margin-bottom":"calc(0.2rem)","margin-top":"calc(0.3rem)"}},[n("img",{staticClass:"border-img img-responsive center-block immagineCandidato",staticStyle:{width:"100%"},attrs:{src:t.cand.imgUrl}})]),t._v(" "),n("div",{staticClass:"imgcaption",staticStyle:{"text-align":"center"}},[n("strong",{staticClass:"nameCandidato"},[n("div",{staticStyle:{width:"100%"}},[n("span",{staticClass:"nameCandidatoFull"},[t._v(t._s(t.cand.name))])]),t._v(" "),n("div",{staticStyle:{width:"100%"}},[n("span",{staticClass:"nameDetto"},[t._v("\n                            "+t._s(t.cand.detto)+"\n                        ")])])])])])])])}),[],!1,null,null,null);e.default=component.exports},214:function(t,e,n){"use strict";n(210)},215:function(t,e,n){var o=n(36)(!1);o.push([t.i,".descrizioneFrameSenatoCdA{margin:auto;width:100%;max-width:calc(70px + 15rem + 40vw);padding-left:calc(1vw + 1px + .07rem);padding-right:calc(1vw + 1px + .07rem);padding-bottom:calc(.3rem + 6px)}",""]),t.exports=o},216:function(t,e,n){"use strict";n.r(e);var o={props:{item:{type:Object,default:null}}},r=(n(214),n(19)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{width:"100%"}},[n("h2",[t._v(t._s(t.item.name))])]),t._v(" "),n("div",{staticClass:"descrizioneFrameSenatoCdA"},[n("span",{staticStyle:{"font-size":"calc(1px + 1rem)",color:"black",padding:"calc(1px + 1vw)"}},[t._v("\n            "+t._s(t.item.desc)+"\n        ")])]),t._v(" "),n("div",{staticStyle:{display:"flex","flex-wrap":"wrap"}},t._l(t.item.candidati,(function(e){return n("LayoutFrame",{key:e.id,attrs:{"class-param":"col-md-6","style-param":"margin:auto;"}},[n("div",[n("ListeCandidato",{attrs:{cand:e,"url-lista":t.item.linkLista}})],1)])})),1),t._v(" "),n("div",{staticStyle:{padding:"10px"}},[t._v("\n         \n    ")])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ListeCandidato:n(213).default,LayoutFrame:n(208).default})},217:function(t,e,n){"use strict";n.r(e);var o={props:{liste:{type:Array,default:null},organiConfronto:{type:Array,default:null},language:{type:String,default:"it",required:!0}},mounted:function(){var t=this;this.$nextTick((function(){t.test2()}))},methods:{test2:function(){for(var t=0;t<5;t++){var ul=document.getElementById("listeContainer2");if(null!=ul){for(var i=ul.children.length;i>=0;i--)ul.appendChild(ul.children[Math.random()*i|0]);ul.style.opacity="1"}}}}},r=n(19),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("LayoutNavigationBar",{attrs:{language:t.language}}),t._v(" "),n("div",{staticClass:"container2",staticStyle:{width:"100%","max-width":"100%",margin:"0px"}},[n("div",{staticClass:"container7"},[n("header",{staticClass:"jumbotron my-4 testoCentrale",staticStyle:{border:"none"}},[n("div",{staticStyle:{margin:"auto"}},[n("div",{staticStyle:{"text-align":"center"}},[n("h2",["it"==t.language?n("span",[t._v("Elezioni rappresentanti degli studenti")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("Election of student representatives")]):t._e()]),t._v(" "),n("br"),t._v(" "),t._l(t.organiConfronto,(function(e){return n("LayoutFrame",{key:e.id},[n("div",[n("h4",[t._v(t._s(e.name))]),t._v(" "),n("p",{staticClass:"lead"}),n("blockquote",[t._v("\n                                            "+t._s(e.desc)+"\n                                        ")]),t._v(" "),n("p")])])}))],2)])])]),t._v(" "),n("div",{staticClass:"row text-center",staticStyle:{display:"flex","flex-wrap":"wrap",opacity:"0.5"},attrs:{id:"listeContainer2"},on:{load:t.test2}},t._l(t.liste,(function(e){return n("LayoutFrame",{key:e.id,attrs:{"class-param":"col-md-3","style-param":"max-width: 100%;flex: 1 4 25%;min-width:calc(150px + 9rem + 3vw)"}},[n("a",{attrs:{href:"/"+t.language+e.linkLista}},[n("div",{staticClass:"card"},[n("div",{staticClass:"listTile",staticStyle:{width:"100%"}},[n("div",{staticClass:"cap-left",staticStyle:{width:"100%",display:"block",padding:"0px"}},[n("div",{staticStyle:{width:"100%"}},[n("img",{staticClass:"imageList",staticStyle:{width:"100%","max-width":"100%"},attrs:{src:e.imageUrlHorizontal}})]),t._v(" "),n("div",{staticStyle:{"padding-top":"10px"}},[n("div",{staticClass:"candidateTable",staticStyle:{"list-style":"none","padding-left":"0px"}},t._l(e.organi,(function(t){return n("LayoutFrame",{key:t.name},[n("ListeFrameSenatoCdA",{attrs:{item:t}})],1)})),1)])])])])])])})),1)]),t._v(" "),n("LayoutFooter",{attrs:{language:t.language}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LayoutNavigationBar:n(154).default,LayoutFrame:n(208).default,ListeFrameSenatoCdA:n(216).default,LayoutFooter:n(207).default})},238:function(t,e,n){"use strict";n.r(e);var o={props:{language:{type:String,default:"it",required:!0},organiConfronto:{type:Array,required:!0},liste:{type:Array,required:!0}}},r=n(19),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ListeConfrontoListe",{attrs:{liste:t.liste,"organi-confronto":t.organiConfronto,language:t.language}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ListeConfrontoListe:n(217).default})},263:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{organiConfronto:[{id:1,name:"Senate",desc:"THE SENATE GUIDES AND PROGRAMS THE DEVELOPMENT OF THE UNIVERSITY, WITH PARTICULAR REGARD TO TEACHING AND RESEARCH, AND SUPERVISES THE OVERALL FUNCTIONING OF THE INSTITUTION."},{id:2,name:"Board of Directors",desc:"THE BOARD OF DIRECTORS DEFINES THE LONG-TERM ECONOMIC PLANNING BASED ON THE PROPOSALS AND OPINIONS OF THE ACADEMIC SENATE."}],liste:[{id:1,name:"Svoltastudenti",imageUrlHorizontal:"/img/logo-svolta_hor.png",linkLista:"/lista/svoltastudenti/",organi:[{name:"Senate",desc:"In the Senate it is essential for us to carry forward student-friendly ideas, in a way that is unrelated to party and confessional influences. We carry on the dialogue with the institutions requesting mutual respect, in order to bring the choices of the university more and more in favor of the students. ",candidati:[{id:1,imgUrl:"/img/candidati/svoltastudenti/marco_cesaro.jpg",name:"Cesaro Marco",detto:"SOMMELIER"},{id:2,imgUrl:"/img/candidati/svoltastudenti/lorenzo_ghettini.jpg",name:"Ghettini Lorenzo",detto:"LO SPEAKER"},{id:3,imgUrl:"/img/candidati/svoltastudenti/davide_diceglie.jpg",name:"Di Ceglie Davide",detto:"REFLASH"},{id:4,imgUrl:"/img/candidati/svoltastudenti/matteo_reda.jpg",name:"Reda Matteo",detto:""},{id:5,imgUrl:"/img/candidati/svoltastudenti/alessia_bove.jpg",name:"Bove Alessia",detto:"ALESSIA"},{id:6,imgUrl:"/img/candidati/svoltastudenti/lorenzo_macovei.jpg",name:"Macovei Lorenzo",detto:"MACOSSS"},{id:7,imgUrl:"/img/candidati/svoltastudenti/elena_zannotti.jpg",name:"Zannotti Elena",detto:"ELLE"},{id:8,imgUrl:"/img/candidati/svoltastudenti/klaudio_luku.jpg",name:"Luku Klaudio",detto:"KLAUDIO CON LA K"}]},{name:"CdA",desc:"We strive every year to maintain the policy of SUITABLE = BENEFICIARIES, and in the Board of Directors we want to continue working to reduce the gaps between students of different groups, to ensure that the opportunities with tenders increase more and more and to protect students the weakest and their families. ",candidati:[{id:1,imgUrl:"/img/candidati/svoltastudenti/antonino_sgroi.jpg",name:"Sgroi Antonino",detto:"LILLO"},{id:2,imgUrl:"/img/candidati/svoltastudenti/eva_parenti.jpg",name:"Parenti Eva",detto:"EVA"},{id:3,imgUrl:"/img/candidati/svoltastudenti/giacomo_schiavone.jpg",name:"Schiavone Giacomo",detto:"GIACK"},{id:4,imgUrl:"/img/candidati/svoltastudenti/lorenzo_dionigi.jpg",name:"Dionigi Lorenzo",detto:""}]}]},{id:2,name:"Lista aperta",imageUrlHorizontal:"/img/logo-listaaperta_hor.png",linkLista:"/lista/listaaperta/",organi:[{name:"Senate",desc:"In the Senate we will work to ensure quality teaching open to innovative forms to enhance the attitudes of each student. In addition, it is a fundamental issue for us to encourage internationalization both at the Polytechnic and with experiences abroad.",candidati:[{id:1,imgUrl:"/img/candidati/listaaperta/marta_ghidoli.jpg",name:"Ghidoli Marta",detto:"MARTA"},{id:2,imgUrl:"/img/candidati/listaaperta/alessandro_alladio.jpg",name:"Alladio Alessandro",detto:"LALO"},{id:3,imgUrl:"/img/candidati/listaaperta/andrea_mandelli.jpg",name:"Mandelli Andrea",detto:"ZAC"},{id:4,imgUrl:"/img/candidati/listaaperta/chiara_giardiello.jpg",name:"Giardiello Chiara Edda Maria",detto:"CHIARA"},{id:5,imgUrl:"/img/candidati/listaaperta/francesco_bugo.jpg",name:"Bugo Francesco Maria",detto:"BUGO"},{id:6,imgUrl:"/img/candidati/listaaperta/maria_zini.jpg",name:"Zini Maria",detto:"MERI"},{id:7,imgUrl:"/img/candidati/listaaperta/alessandro_maestri.jpg",name:"Maestri Alessandro",detto:"BOBBI"},{id:8,imgUrl:"/img/candidati/listaaperta/elisabetta_alberton.jpg",name:"Alberton Elisabetta",detto:"BETTA"}]},{name:"CdA",desc:"In the Board of Directors we will fight for the Right to Education: a decisive battle to allow all students to be able to fully experience the university! Furthermore, we will always strive to guarantee the right funding to develop our campuses more and more like places of meeting and quality. ",candidati:[{id:1,imgUrl:"/img/candidati/listaaperta/daniele_redaelli.jpg",name:"Radaelli Daniele",detto:"REDA"},{id:2,imgUrl:"/img/candidati/listaaperta/emanuela_dotti.jpg",name:"Dotti Emanuela",detto:"MANU"},{id:3,imgUrl:"/img/candidati/listaaperta/tommaso_sanese.jpg",name:"Sanese Tommaso",detto:"TOMMI"},{id:4,imgUrl:"/img/candidati/listaaperta/sofia_boni.jpg",name:"Boni Sofia",detto:"SOFI"}]}]},{id:3,name:"Terna sinistrorsa",imageUrlHorizontal:"/img/logo-terna_hor.png",linkLista:"/lista/ternasinistrorsa/",organi:[{name:"Senate",desc:"Those who study are not just a number: We are more than the grades we get, so access to master's degrees should not be limited only to our average. The right to education must be guaranteed and extended to all people who have it need, for this we propose the raising of the total NO TAX area to at least 30 thousand euros of ISEE and a progressive and continuous taxation that eliminates the current division into bands. We ask for a Polytechnic that is more accessible architecturally and economically, with canteens at lower prices and free sanitary pads in the bathrooms. A Polytechnic that pays attention to sustainability and disabilities. ",candidati:[{id:1,imgUrl:"/img/candidati/ternasinistrorsa/ada_bacigalupo.png",name:"Bacigalupo Ada",detto:""}]},{name:"CdA",desc:"Free universities are built from below! Taxation fairer: truly continuous and progressive. We want to raise the maximum threshold of ISEE for the reduction of the contribution so that the taxation is fairer even for those who are above the current We will fight, inside and outside the university, for more state funds in order to always reduce the burden on students and bring the total NO TAX AREA to € 30,000 of ISEE. ",candidati:[{id:1,imgUrl:"/img/candidati/ternasinistrorsa/davide_luzzini.png",name:"Luzzini Davide",detto:""}]}]},{id:4,name:"Studenti indipendenti",imageUrlHorizontal:"/img/logo-sip_hor.png",linkLista:"/lista/studentiindipendenti/",organi:[{name:"Senate",desc:"For us in the Senate it is important to discuss political decisions, really opening up the possibility of bringing the issues of the student without the filter of compromise in order to dialogue with the other university members having a clear opinion of everyone.",candidati:[{id:1,imgUrl:"/img/candidati/studentiindipendenti/jonathan_wolff_sen.PNG",name:"Wolff Jonathan",detto:"JONNY"},{id:2,imgUrl:"/img/candidati/studentiindipendenti/andrea_iodice.PNG",name:"Iodice Andrea",detto:""},{id:3,imgUrl:"/img/candidati/studentiindipendenti/maria_nicole_deluca_sen.PNG",name:"Deluca Maria Nicole",detto:""},{id:4,imgUrl:"/img/candidati/studentiindipendenti/milagros_magaz.PNG",name:"Magaz Milagros",detto:"MILI"},{id:5,imgUrl:"/img/candidati/studentiindipendenti/marco_zamboni_sen.PNG",name:"Zamboni Marco",detto:"ZAMBO"},{id:6,imgUrl:"/img/candidati/studentiindipendenti/edoardo_marcucci_sen.PNG",name:"Marcucci Edoardo",detto:""},{id:7,imgUrl:"/img/candidati/studentiindipendenti/mario_spiniello_sen.PNG",name:"Spiniello Mario",detto:""},{id:8,imgUrl:"/img/candidati/studentiindipendenti/davide_stramare_sen.PNG",name:"Stramare Davide",detto:"DADO"}]},{name:"CdA",desc:"We want to increase the management of funds, turning it towards making the Politecnico an avant-garde university in terms of liveability in the spaces, support and protection of study paths and to guarantee everyone, regardless of academic career, the possibility of doing dignified and valid path. ",candidati:[{id:1,imgUrl:"/img/candidati/studentiindipendenti/gloria_maria_crisogianni_cda.PNG",name:"Crisogianni Gloria Maria",detto:""},{id:2,imgUrl:"/img/candidati/studentiindipendenti/anita_clara_notarianni.PNG",name:"Notarianni Anita Clara",detto:""},{id:3,imgUrl:"/img/candidati/studentiindipendenti/chiara_arrigoni_cda.PNG",name:"Arrigoni Chiara",detto:""},{id:4,imgUrl:"/img/candidati/studentiindipendenti/gaia_carbone_cda.PNG",name:"Carbone Gaia",detto:""}]}]}]}}},r=n(19),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("PagesSenatoCda",{attrs:{language:"en","organi-confronto":t.organiConfronto,liste:t.liste}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PagesSenatoCda:n(238).default})}}]);