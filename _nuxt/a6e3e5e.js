(window.webpackJsonp=window.webpackJsonp||[]).push([[0,5,6,7,9,10,18],{276:function(t,e,n){"use strict";n.r(e);var l={props:{language:{type:String,required:!0}}},r=n(33),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),t._v(" "),n("hr"),t._v(" "),n("footer",{staticClass:"py-5 bg-dark",staticStyle:{"padding-top":"1rem !important","padding-bottom":"2rem !important"}},[n("div",{staticClass:"container"},[n("p",{staticClass:"m-0 text-center",staticStyle:{"font-size":"calc(3px + 0.55rem + 0.35vw)"}},[t._v("Copyright © "),n("a",{attrs:{href:"https://polinetwork.github.io/"+t.language}},[t._v("PoliNetwork")])]),t._v(" "),n("div",{staticStyle:{width:"100%","text-align":"center","font-size":"calc(2px + 0.5rem + 0.3vw)","padding-top":"3px"}},[n("a",{attrs:{href:"/"+t.language+"/contatti/"}},["it"==t.language?n("span",[t._v("\n                        Contatti\n                    ")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("\n                        Contacts\n                    ")]):t._e()]),t._v("\n                 - \n                "),n("a",{attrs:{href:"/"+t.language+"/curiosita/"}},["it"==t.language?n("span",[t._v("\n                        Curiosità\n                    ")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("\n                        Curiosity\n                    ")]):t._e()])]),t._v(" "),n("p",{staticClass:"m-0 text-center",staticStyle:{"font-size":"calc(3px + 0.3rem + 0.2vw)",color:"#000000d9","padding-top":"10px"}},["it"==t.language?n("span",[t._v("Questo sito non è affiliato al Politecnico di Milano")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("This site is not affiliated with the Politecnico di Milano")]):t._e()])])])])}),[],!1,null,null,null);e.default=component.exports},277:function(t,e,n){"use strict";n.r(e);var l={props:{classParam:{type:String,default:""},styleParam:{type:String,default:""}}},r=n(33),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.classParam,style:t.styleParam},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},278:function(t,e,n){var content=n(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("894dc536",content,!0,{sourceMap:!1})},280:function(t,e,n){"use strict";n(278)},281:function(t,e,n){var l=n(64)(!1);l.push([t.i,"figure{margin-left:auto;margin-right:auto}.nameCandidatoFull{font-size:small}.nameDetto{font-size:calc(1px + .5rem + .3vw);color:#009ad7;font-style:italic}.candidatoCard{border:1px solid rgba(0,0,0,.1);border-radius:calc(1px + 1rem);padding:calc(1px + .3rem)}",""]),t.exports=l},282:function(t,e,n){"use strict";n.r(e);var l={props:{cand:{type:Object,default:null},urlLista:{type:String,default:null}}},r=(n(280),n(33)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"candidatoCard"},[n("a",{attrs:{href:t.urlLista}},[n("div",{staticClass:"candidatoSV",staticStyle:{"text-align":"center"}},[n("figure",{staticClass:"wow animated fadeInLeft animated",staticStyle:{visibility:"visible","animation-name":"fadeInLeft",width:"100%","margin-bottom":"calc(0.2rem)","margin-top":"calc(0.3rem)"}},[n("img",{staticClass:"border-img img-responsive center-block immagineCandidato",staticStyle:{width:"100%"},attrs:{src:t.cand.imgUrl}})]),t._v(" "),n("div",{staticClass:"imgcaption",staticStyle:{"text-align":"center"}},[n("strong",{staticClass:"nameCandidato"},[n("div",{staticStyle:{width:"100%"}},[n("span",{staticClass:"nameCandidatoFull"},[t._v(t._s(t.cand.name))])]),t._v(" "),n("div",{staticStyle:{width:"100%"}},[n("span",{staticClass:"nameDetto"},[t._v("\n                            "+t._s(t.cand.detto)+"\n                        ")])])])])])])])}),[],!1,null,null,null);e.default=component.exports},287:function(t,e,n){"use strict";n.r(e);var l={props:{imageUrl:{type:String,default:""},classParam:{type:String,default:""}}},r=n(33),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{class:t.classParam,attrs:{src:t.imageUrl}})])}),[],!1,null,null,null);e.default=component.exports},290:function(t,e,n){var content=n(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("12774050",content,!0,{sourceMap:!1})},291:function(t,e,n){"use strict";n.r(e);var l={props:{language:{type:String,default:"it",required:!0}},data:function(){return{items:[{id:1,name:"Svoltastudenti",image:"/img/svolta.png",link:"/2021/lista/svoltastudenti/",style:"background-color: #ff6600de;"},{id:2,name:"Lista Aperta",image:"/img/listaaperta.png",link:"/2021/lista/listaaperta/",style:"background-color: #f5dd00;"},{id:3,name:"La Terna Sinistrorsa",image:"/img/terna.png",link:"/2021/lista/ternasinistrorsa/",style:"background-color: #bf2027;"},{id:4,name:"Studenti Indipendenti",image:"/img/sip.png",link:"/2021/lista/studentiindipendenti/",style:"background-color: #0084bc;"}]}},mounted:function(){var t=this;this.$nextTick((function(){t.test()}))},methods:{test:function(){for(var t=0;t<1;t++){var ul=document.getElementById("listeContainer");if(null!=ul){for(var i=ul.children.length;i>=0;i--){t=Math.random()*i|0;var e=ul.children[t];null!=e&&(ul.appendChild(e),console.log(e))}ul.style.opacity="1"}}}}},r=n(33),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row text-center",staticStyle:{display:"flex",opacity:"0.5"},attrs:{id:"listeContainer"},on:{load:t.test}},t._l(t.items,(function(e){return n("LayoutFrame",{key:e.name,attrs:{"class-param":"col-lg-3 col-md-6 mb-4"}},[n("div",[n("a",{attrs:{href:"/"+t.language+e.link}},[n("figure",{staticClass:"cap-left",staticStyle:{width:"100%"}},[n("LayoutFrame",{attrs:{"class-param":"card h-100","style-param":e.style}},[n("div",{staticClass:"listTile",staticStyle:{width:"100%"}},[n("div",{staticClass:"containerImgList"},[n("LayoutXImage",{attrs:{"image-url":e.image,"class-param":"imageList"}})],1)])]),t._v(" "),n("figcaption",{staticClass:"h-100"},[n("br"),t._v(" "),n("h2",{staticClass:"titleListaFigcaption"},[t._v(t._s(e.name))])])],1)])])])})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LayoutXImage:n(287).default,LayoutFrame:n(277).default})},298:function(t,e,n){"use strict";n(290)},299:function(t,e,n){var l=n(64)(!1);l.push([t.i,"div.div-hr2[data-v-c79c6630]{width:100%}div.div-hr2[data-v-c79c6630],hr.hr2[data-v-c79c6630]{text-align:center;max-width:100%}hr.hr2[data-v-c79c6630]{padding:0;border-top:1px solid #545454;margin:calc(10px + 1rem + 1vh) auto;width:calc(1px + 85vw);color:#000}",""]),t.exports=l},302:function(t,e,n){"use strict";n.r(e);var l={props:{dataLista:{type:Object,default:null},language:{type:String,required:!0}}},r=(n(326),n(33)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("LayoutNavigationBar",{attrs:{language:t.language}}),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"intro white",staticStyle:{"text-align":"center"}},[n("div",{staticStyle:{width:"100%"}},[n("img",{staticStyle:{width:"calc(15px + 4vw + 5rem)",padding:"10px","text-align":"center"},attrs:{src:t.dataLista.imageUrl}})]),t._v(" "),n("div",{staticClass:"container2 wow animated fadeInUp"},[n("h2",{staticStyle:{color:"black","font-size":"calc(10px + 3vw + 0.5rem)"}},[t._v(t._s(this.dataLista.name))]),t._v(" "),n("div",{staticClass:"buttonContainerDiv"},[n("a",{staticClass:"buttonLista",attrs:{href:this.dataLista.mainWebsiteUrl}},[n("LayoutButton",["it"==t.language?n("span",[t._v(" Sito ufficiale 🌐 ")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v(" Official website 🌐 ")]):t._e()])],1),t._v(" "),n("a",{staticClass:"buttonLista",attrs:{href:this.dataLista.mainProgrammaUrl}},[n("LayoutButton",["it"==t.language?n("span",[t._v(" Programma elettorale - PDF🗳 ")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v(" Electoral program - PDF🗳 ")]):t._e()])],1),t._v(" "),n("a",{staticClass:"buttonLista",attrs:{href:this.dataLista.instagram}},[n("LayoutButton",["it"==t.language?n("span",[t._v(" Instagram 📷 ")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v(" Instagram 📷 ")]):t._e()])],1)]),t._v(" "),t._l(t.dataLista.desc,(function(e){return n("LayoutFrame",{key:e},[n("p",{staticClass:"office-place descrizioneLista",attrs:{id:"office-place"}},[t._v("\n                    "+t._s(e)+"\n                ")])])}))],2)]),t._v(" "),n("div",{staticClass:"section",attrs:{id:"our-info"}},[n("div",{staticClass:"container2",staticStyle:{"max-width":"100%",margin:"auto",width:"100%"}},[n("h2",{staticClass:"container2 programmaElettorale"},["it"==t.language?n("span",[t._v("Programma elettorale 📝")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("Electoral program 📝")]):t._e()]),t._v(" "),n("hr"),t._v(" "),n("h3",{staticStyle:{"text-align":"center","font-size":"calc(8px + 1.5vw + 0.2rem)","font-variant":"petite-caps","-webkit-text-stroke":"1px #0c013587","-webkit-text-fill-color":"black"}},[t._v("\n                "+t._s(t.dataLista.programmaSottotitolo)+"\n            ")]),t._v(" "),n("div",{staticStyle:{padding:"5px"}}),t._v(" "),n("div",{staticClass:"row container4"},t._l(t.dataLista.programma,(function(e){return n("LayoutFrame",{key:e.id,attrs:{"class-param":"col-sm-3 wow animated fadeInLeft","style-param":"min-width:calc(150px + 6rem + 2vw);display:flex;flex: 1 1 25%;padding:5px;max-width: 100%;"}},[n("div",{staticStyle:{border:"1px solid #0000003c",padding:"calc(3px + 0.5rem)",margin:"0px","border-radius":"calc(10px + 1rem)",width:"100%"}},[n("figure",[n("img",{staticClass:"z-hover img-responsive",staticStyle:{"max-width":"calc(100px + 2rem + 2vw + 2vh)",width:"100%",padding:"2px","border-radius":"calc(10px + 1rem)"},attrs:{src:e.url}})]),t._v(" "),n("h4",{staticStyle:{"padding-top":"3px","text-align":"center"}},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"function-text",staticStyle:{"text-align":"left",padding:"calc(0.5vw)","margin-bottom":"0.2rem"}},[t._v("\n                            "+t._s(e.desc)+"\n                        ")])])])})),1)])]),t._v(" "),n("LayoutHorizontalLine"),t._v(" "),n("div",{staticClass:"section members"},[n("div",{staticClass:"container2"},[n("h2",["it"==t.language?n("span",[t._v("Senato 💬")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("Senate 💬")]):t._e()]),t._v(" "),n("hr"),t._v(" "),n("p",{staticClass:"lead-creative-banner"},[t._v("\n                "+t._s(t.dataLista.senato.desc)+"\n            ")]),t._v(" "),n("div",{staticStyle:{display:"flex","flex-wrap":"wrap"},attrs:{id:"includedContentSenato"}},t._l(t.dataLista.senato.candidati,(function(t){return n("LayoutFrame",{key:t.id,attrs:{"class-param":"col-md-3 col-md-2","style-param":"display:flex;margin: auto;"}},[n("ListeCandidato",{attrs:{cand:t,"url-lista":""}})],1)})),1)])]),t._v(" "),n("LayoutHorizontalLine"),t._v(" "),n("div",{staticClass:"section members"},[n("div",{staticClass:"container2"},[n("h2",[t._v("CdA 💶")]),t._v(" "),n("hr"),t._v(" "),n("p",{staticClass:"lead-creative-banner"},[t._v("\n                "+t._s(t.dataLista.CdA.desc)+"\n            ")]),t._v(" "),n("div",{staticStyle:{display:"flex","flex-wrap":"wrap"},attrs:{id:"includedContentSenato"}},t._l(t.dataLista.CdA.candidati,(function(t){return n("LayoutFrame",{key:t.id,attrs:{"class-param":"col-md-3 col-md-2","style-param":"display:flex;margin: auto;"}},[n("ListeCandidato",{attrs:{cand:t,"url-lista":""}})],1)})),1)])]),t._v(" "),n("LayoutHorizontalLine"),t._v(" "),n("div",{staticClass:"section members",staticStyle:{"background-color":"white"}},[n("div",{staticClass:"container2"},[n("h2",["it"==t.language?n("span",[t._v("Scuole")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("Schools")]):t._e()]),t._v(" "),n("hr"),t._v(" "),n("p",{staticClass:"lead-creative-banner"},[t._v(t._s(t.dataLista.scuole.desc))]),t._v(" "),n("ul",{staticStyle:{"list-style":"none"}},[n("li",{staticClass:"liScuola"},[n("span",{staticClass:"titleScuole"},[t._v("AUIC 📐")]),t._v(" "),n("div",{staticClass:"spacerScuole"}),t._v(" "),n("div",{staticClass:"descrizioneScuola"},[t._v("\n                        "+t._s(t.dataLista.scuole.auic.desc)+"\n                    ")]),t._v(" "),n("div",{staticStyle:{display:"flex","flex-wrap":"wrap"},attrs:{id:"includedContentScuoleAUIC"}},t._l(t.dataLista.scuole.auic.candidati,(function(t){return n("LayoutFrame",{key:t.id,attrs:{"class-param":"col-md-3 col-md-2","style-param":"display:flex;margin: auto;"}},[n("ListeCandidato",{attrs:{cand:t,"url-lista":""}})],1)})),1)]),t._v(" "),n("li",{staticClass:"liScuola"},[n("span",{staticClass:"titleScuole"},[t._v("3I 🔧")]),t._v(" "),n("div",{staticClass:"spacerScuole"}),t._v(" "),n("div",{staticClass:"descrizioneScuola"},[t._v("\n                        "+t._s(t.dataLista.scuole.trei.desc)+"\n                    ")]),t._v(" "),n("div",{staticStyle:{display:"flex","flex-wrap":"wrap"},attrs:{id:"includedContentScuole3I"}},t._l(t.dataLista.scuole.trei.candidati,(function(t){return n("LayoutFrame",{key:t.id,attrs:{"class-param":"col-md-3 col-md-2","style-param":"display:flex;margin: auto;"}},[n("ListeCandidato",{attrs:{cand:t,"url-lista":""}})],1)})),1)]),t._v(" "),n("li",{staticClass:"liScuola"},[n("span",{staticClass:"titleScuole"},[t._v("ICAT 🚧")]),t._v(" "),n("div",{staticClass:"spacerScuole"}),t._v(" "),n("div",{staticClass:"descrizioneScuola"},[t._v("\n                        "+t._s(t.dataLista.scuole.icat.desc)+"\n                    ")]),t._v(" "),n("div",{staticStyle:{display:"flex","flex-wrap":"wrap"},attrs:{id:"includedContentScuoleICAT"}},t._l(t.dataLista.scuole.icat.candidati,(function(t){return n("LayoutFrame",{key:t.id,attrs:{"class-param":"col-md-3 col-md-2","style-param":"display:flex;margin: auto;"}},[n("ListeCandidato",{attrs:{cand:t,"url-lista":""}})],1)})),1)]),t._v(" "),n("li",{staticClass:"liScuola"},[n("span",{staticClass:"titleScuole"},[t._v("DESIGN ✏️")]),t._v(" "),n("div",{staticClass:"spacerScuole"}),t._v(" "),n("div",{staticClass:"descrizioneScuola"},[t._v("\n                        "+t._s(t.dataLista.scuole.design.desc)+"\n                    ")]),t._v(" "),n("div",{staticStyle:{display:"flex","flex-wrap":"wrap"},attrs:{id:"includedContentScuoleDESIGN"}},t._l(t.dataLista.scuole.design.candidati,(function(t){return n("LayoutFrame",{key:t.id,attrs:{"class-param":"col-md-3 col-md-2","style-param":"display:flex;margin: auto;"}},[n("ListeCandidato",{attrs:{cand:t,"url-lista":""}})],1)})),1)])])])]),t._v(" "),n("div",{staticStyle:{padding:"1.6rem"}}),t._v(" "),n("LayoutHorizontalLine"),t._v(" "),n("div",{staticStyle:{padding:"1.7rem"}}),t._v(" "),n("div",{staticClass:"container6"},[n("div",{staticClass:"container3"},[n("div",{staticClass:"lead container3",staticStyle:{"text-align":"center",width:"100%","padding-bottom":"1.5rem","font-size":"calc(1rem + 1vw)"}},["it"==t.language?n("span",[t._v("Visita anche le pagine dedicate alle altre liste")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("Also visit the pages dedicated to the other lists")]):t._e()]),t._v(" "),n("SubpagesQuadratiListe",{attrs:{language:t.language}})],1)]),t._v(" "),n("LayoutFooter",{attrs:{language:t.language}})],1)}),[],!1,null,"28ecf018",null);e.default=component.exports;installComponents(component,{LayoutNavigationBar:n(194).default,LayoutButton:n(195).default,LayoutFrame:n(277).default,LayoutHorizontalLine:n(303).default,ListeCandidato:n(282).default,SubpagesQuadratiListe:n(291).default,LayoutFooter:n(276).default})},303:function(t,e,n){"use strict";n.r(e);n(298);var l=n(33),component=Object(l.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"div-hr2"},[e("hr",{staticClass:"hr2"})])}],!1,null,"c79c6630",null);e.default=component.exports},312:function(t,e,n){var content=n(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("fb67eda2",content,!0,{sourceMap:!1})},326:function(t,e,n){"use strict";n(312)},327:function(t,e,n){var l=n(64)(!1);l.push([t.i,'img[src$=".gif"][data-v-28ecf018],img[src$=".png"][data-v-28ecf018]{image-rendering:-moz-crisp-edges;image-rendering:-o-crisp-edges;image-rendering:-webkit-optimize-contrast;-ms-interpolation-mode:nearest-neighbor}img[data-v-28ecf018]{border:0;vertical-align:middle}.office-place[data-v-28ecf018]{color:#4b4228;font:16px/1.5 "Novecento Sans Wide Medium",Helvetica,Arial,sans-serif;letter-spacing:.2em;margin:25px auto 0}.descrizioneLista[data-v-28ecf018]{font-size:calc(15px + .17vw + .08rem)}.carousel-inner>.item>a>img[data-v-28ecf018],.carousel-inner>.item>img[data-v-28ecf018],.img-responsive[data-v-28ecf018],.thumbnail>img[data-v-28ecf018],.thumbnail a>img[data-v-28ecf018]{display:block;width:100%\\9;max-width:90%;height:auto;margin-left:auto;margin-right:auto;margin-bottom:0}.imgcaption[data-v-28ecf018]{margin-bottom:calc(1.3rem + 3px)}figure[data-v-28ecf018]{margin-left:auto;margin-right:auto;margin-bottom:.2rem}.buttonContainerDiv[data-v-28ecf018]{width:100%;max-width:calc(20vw + 30rem + 100px);padding-top:1rem;flex-wrap:wrap}.buttonContainerDiv[data-v-28ecf018],.buttonLista[data-v-28ecf018]{display:flex;margin:auto;text-align:center;align-content:center;align-items:center;align-self:center}.buttonLista[data-v-28ecf018]{font-size:calc(.6rem + .5vw)}.programmaElettorale[data-v-28ecf018]{font-size:calc(10px + 1.5vw + .3rem);padding-top:4.5rem;text-align:left}',""]),t.exports=l}}]);