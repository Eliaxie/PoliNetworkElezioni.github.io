(window.webpackJsonp=window.webpackJsonp||[]).push([[0,4,5,6,8,9,15],{101:function(t,e,n){"use strict";n.r(e);var l={props:{dataLista:{type:Object,default:null},language:{type:String,required:!0}}},r=(n(129),n(8)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("LayoutNavigationBar",{attrs:{language:t.language}}),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"intro white",staticStyle:{"text-align":"center"}},[e("div",{staticStyle:{width:"100%"}},[e("img",{staticStyle:{width:"calc(15px + 4vw + 5rem)",padding:"10px","text-align":"center"},attrs:{src:t.dataLista.imageUrl}})]),t._v(" "),e("div",{staticClass:"container2 wow animated fadeInUp"},[e("h2",{staticStyle:{color:"black","font-size":"calc(10px + 3vw + 0.5rem)"}},[t._v("\n        "+t._s(this.dataLista.name)+"\n      ")]),t._v(" "),e("div",{staticClass:"buttonContainerDiv"},[e("a",{staticClass:"buttonLista",attrs:{href:this.dataLista.mainWebsiteUrl}},[e("LayoutButton",["it"==t.language?e("span",[t._v(" Sito ufficiale 🌐 ")]):t._e(),t._v(" "),"en"==t.language?e("span",[t._v(" Official website 🌐 ")]):t._e()])],1),t._v(" "),e("a",{staticClass:"buttonLista",attrs:{href:this.dataLista.mainProgrammaUrl}},[e("LayoutButton",["it"==t.language?e("span",[t._v(" Programma elettorale - PDF🗳 ")]):t._e(),t._v(" "),"en"==t.language?e("span",[t._v(" Electoral program - PDF🗳 ")]):t._e()])],1),t._v(" "),e("a",{staticClass:"buttonLista",attrs:{href:this.dataLista.instagram}},[e("LayoutButton",["it"==t.language?e("span",[t._v(" Instagram 📷 ")]):t._e(),t._v(" "),"en"==t.language?e("span",[t._v(" Instagram 📷 ")]):t._e()])],1)]),t._v(" "),t._l(t.dataLista.desc,(function(n){return e("LayoutFrame",{key:n},[e("p",{staticClass:"office-place descrizioneLista",attrs:{id:"office-place"}},[t._v("\n          "+t._s(n)+"\n        ")])])}))],2)]),t._v(" "),e("div",{staticClass:"section",attrs:{id:"our-info"}},[e("div",{staticClass:"container2",staticStyle:{"max-width":"100%",margin:"auto",width:"100%"}},[e("h2",{staticClass:"container2 programmaElettorale"},["it"==t.language?e("span",[t._v("Programma elettorale 📝")]):t._e(),t._v(" "),"en"==t.language?e("span",[t._v("Electoral program 📝")]):t._e()]),t._v(" "),e("hr"),t._v(" "),e("h3",{staticStyle:{"text-align":"center","font-size":"calc(8px + 1.5vw + 0.2rem)","font-variant":"petite-caps","-webkit-text-stroke":"1px #0c013587","-webkit-text-fill-color":"black"}},[t._v("\n        "+t._s(t.dataLista.programmaSottotitolo)+"\n      ")]),t._v(" "),e("div",{staticStyle:{padding:"5px"}}),t._v(" "),e("div",{staticClass:"row container4"},t._l(t.dataLista.programma,(function(n){return e("LayoutFrame",{key:n.id,attrs:{"class-param":"col-sm-3 wow animated fadeInLeft","style-param":"min-width:calc(150px + 6rem + 2vw);display:flex;flex: 1 1 25%;padding:5px;max-width: 100%;"}},[e("div",{staticStyle:{border:"1px solid #0000003c",padding:"calc(3px + 0.5rem)",margin:"0px","border-radius":"calc(10px + 1rem)",width:"100%"}},[e("figure",[e("img",{staticClass:"z-hover img-responsive",staticStyle:{"max-width":"calc(100px + 2rem + 2vw + 2vh)",width:"100%",padding:"2px","border-radius":"calc(10px + 1rem)"},attrs:{src:n.url}})]),t._v(" "),e("h4",{staticStyle:{"padding-top":"3px","text-align":"center"}},[t._v("\n              "+t._s(n.title)+"\n            ")]),t._v(" "),e("p",{staticClass:"function-text",staticStyle:{"text-align":"left",padding:"calc(0.5vw)","margin-bottom":"0.2rem"}},[t._v("\n              "+t._s(n.desc)+"\n            ")])])])})),1)])]),t._v(" "),e("LayoutHorizontalLine"),t._v(" "),e("div",{staticClass:"section members"},[e("div",{staticClass:"container2"},[e("h2",["it"==t.language?e("span",[t._v("Senato 💬")]):t._e(),t._v(" "),"en"==t.language?e("span",[t._v("Senate 💬")]):t._e()]),t._v(" "),e("hr"),t._v(" "),e("p",{staticClass:"lead-creative-banner"},[t._v("\n        "+t._s(t.dataLista.senato.desc)+"\n      ")]),t._v(" "),e("div",{staticStyle:{display:"flex","flex-wrap":"wrap"},attrs:{id:"includedContentSenato"}},t._l(t.dataLista.senato.candidati,(function(t){return e("LayoutFrame",{key:t.id,attrs:{"class-param":"col-md-3 col-md-2","style-param":"display:flex;margin: auto;"}},[e("ListeCandidato",{attrs:{cand:t,"url-lista":""}})],1)})),1)])]),t._v(" "),e("LayoutHorizontalLine"),t._v(" "),e("div",{staticClass:"section members"},[e("div",{staticClass:"container2"},[e("h2",[t._v("CdA 💶")]),t._v(" "),e("hr"),t._v(" "),e("p",{staticClass:"lead-creative-banner"},[t._v("\n        "+t._s(t.dataLista.CdA.desc)+"\n      ")]),t._v(" "),e("div",{staticStyle:{display:"flex","flex-wrap":"wrap"},attrs:{id:"includedContentSenato"}},t._l(t.dataLista.CdA.candidati,(function(t){return e("LayoutFrame",{key:t.id,attrs:{"class-param":"col-md-3 col-md-2","style-param":"display:flex;margin: auto;"}},[e("ListeCandidato",{attrs:{cand:t,"url-lista":""}})],1)})),1)])]),t._v(" "),e("LayoutHorizontalLine"),t._v(" "),e("div",{staticClass:"section members",staticStyle:{"background-color":"white"}},[e("div",{staticClass:"container2"},[e("h2",["it"==t.language?e("span",[t._v("Scuole")]):t._e(),t._v(" "),"en"==t.language?e("span",[t._v("Schools")]):t._e()]),t._v(" "),e("hr"),t._v(" "),e("p",{staticClass:"lead-creative-banner"},[t._v(t._s(t.dataLista.scuole.desc))]),t._v(" "),e("ul",{staticStyle:{"list-style":"none"}},[e("li",{staticClass:"liScuola"},[e("span",{staticClass:"titleScuole"},[t._v("AUIC 📐")]),t._v(" "),e("div",{staticClass:"spacerScuole"}),t._v(" "),e("div",{staticClass:"descrizioneScuola"},[t._v("\n            "+t._s(t.dataLista.scuole.auic.desc)+"\n          ")]),t._v(" "),e("div",{staticStyle:{display:"flex","flex-wrap":"wrap"},attrs:{id:"includedContentScuoleAUIC"}},t._l(t.dataLista.scuole.auic.candidati,(function(t){return e("LayoutFrame",{key:t.id,attrs:{"class-param":"col-md-3 col-md-2","style-param":"display:flex;margin: auto;"}},[e("ListeCandidato",{attrs:{cand:t,"url-lista":""}})],1)})),1)]),t._v(" "),e("li",{staticClass:"liScuola"},[e("span",{staticClass:"titleScuole"},[t._v("3I 🔧")]),t._v(" "),e("div",{staticClass:"spacerScuole"}),t._v(" "),e("div",{staticClass:"descrizioneScuola"},[t._v("\n            "+t._s(t.dataLista.scuole.trei.desc)+"\n          ")]),t._v(" "),e("div",{staticStyle:{display:"flex","flex-wrap":"wrap"},attrs:{id:"includedContentScuole3I"}},t._l(t.dataLista.scuole.trei.candidati,(function(t){return e("LayoutFrame",{key:t.id,attrs:{"class-param":"col-md-3 col-md-2","style-param":"display:flex;margin: auto;"}},[e("ListeCandidato",{attrs:{cand:t,"url-lista":""}})],1)})),1)]),t._v(" "),e("li",{staticClass:"liScuola"},[e("span",{staticClass:"titleScuole"},[t._v("ICAT 🚧")]),t._v(" "),e("div",{staticClass:"spacerScuole"}),t._v(" "),e("div",{staticClass:"descrizioneScuola"},[t._v("\n            "+t._s(t.dataLista.scuole.icat.desc)+"\n          ")]),t._v(" "),e("div",{staticStyle:{display:"flex","flex-wrap":"wrap"},attrs:{id:"includedContentScuoleICAT"}},t._l(t.dataLista.scuole.icat.candidati,(function(t){return e("LayoutFrame",{key:t.id,attrs:{"class-param":"col-md-3 col-md-2","style-param":"display:flex;margin: auto;"}},[e("ListeCandidato",{attrs:{cand:t,"url-lista":""}})],1)})),1)]),t._v(" "),e("li",{staticClass:"liScuola"},[e("span",{staticClass:"titleScuole"},[t._v("DESIGN ✏️")]),t._v(" "),e("div",{staticClass:"spacerScuole"}),t._v(" "),e("div",{staticClass:"descrizioneScuola"},[t._v("\n            "+t._s(t.dataLista.scuole.design.desc)+"\n          ")]),t._v(" "),e("div",{staticStyle:{display:"flex","flex-wrap":"wrap"},attrs:{id:"includedContentScuoleDESIGN"}},t._l(t.dataLista.scuole.design.candidati,(function(t){return e("LayoutFrame",{key:t.id,attrs:{"class-param":"col-md-3 col-md-2","style-param":"display:flex;margin: auto;"}},[e("ListeCandidato",{attrs:{cand:t,"url-lista":""}})],1)})),1)])])])]),t._v(" "),e("div",{staticStyle:{padding:"1.6rem"}}),t._v(" "),e("LayoutHorizontalLine"),t._v(" "),e("div",{staticStyle:{padding:"1.7rem"}}),t._v(" "),e("div",{staticClass:"container6"},[e("div",{staticClass:"container3"},[e("div",{staticClass:"lead container3",staticStyle:{"text-align":"center",width:"100%","padding-bottom":"1.5rem","font-size":"calc(1rem + 1vw)"}},["it"==t.language?e("span",[t._v("Visita anche le pagine dedicate alle altre liste")]):t._e(),t._v(" "),"en"==t.language?e("span",[t._v("Also visit the pages dedicated to the other lists")]):t._e()]),t._v(" "),e("SubpagesQuadratiListe",{attrs:{language:t.language,"lista-esclusa":this.dataLista}})],1)]),t._v(" "),e("LayoutFooter",{attrs:{language:t.language}})],1)}),[],!1,null,"a84d8dd4",null);e.default=component.exports;installComponents(component,{LayoutNavigationBar:n(44).default,LayoutButton:n(45).default,LayoutFrame:n(76).default,LayoutHorizontalLine:n(102).default,ListeCandidato:n(82).default,SubpagesQuadratiListe:n(92).default,LayoutFooter:n(75).default})},102:function(t,e,n){"use strict";n.r(e);n(98);var l=n(8),component=Object(l.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"div-hr2"},[t("hr",{staticClass:"hr2"})])}],!1,null,"5cb60b2a",null);e.default=component.exports},114:function(t,e,n){var content=n(130);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("41e67920",content,!0,{sourceMap:!1})},129:function(t,e,n){"use strict";n(114)},130:function(t,e,n){var l=n(11)(!1);l.push([t.i,'img[src$=".gif"][data-v-a84d8dd4],img[src$=".png"][data-v-a84d8dd4]{image-rendering:-moz-crisp-edges;image-rendering:-o-crisp-edges;image-rendering:-webkit-optimize-contrast;-ms-interpolation-mode:nearest-neighbor}img[data-v-a84d8dd4]{border:0;vertical-align:middle}.office-place[data-v-a84d8dd4]{color:#4b4228;font:16px/1.5 "Novecento Sans Wide Medium",Helvetica,Arial,sans-serif;letter-spacing:.2em;margin:25px auto 0}.descrizioneLista[data-v-a84d8dd4]{font-size:calc(15px + .17vw + .08rem)}.carousel-inner>.item>a>img[data-v-a84d8dd4],.carousel-inner>.item>img[data-v-a84d8dd4],.img-responsive[data-v-a84d8dd4],.thumbnail>img[data-v-a84d8dd4],.thumbnail a>img[data-v-a84d8dd4]{display:block;width:100%\\9;max-width:90%;height:auto;margin-left:auto;margin-right:auto;margin-bottom:0}.imgcaption[data-v-a84d8dd4]{margin-bottom:calc(1.3rem + 3px)}figure[data-v-a84d8dd4]{margin-left:auto;margin-right:auto;margin-bottom:.2rem}.buttonContainerDiv[data-v-a84d8dd4]{width:100%;max-width:calc(20vw + 30rem + 100px);padding-top:1rem;flex-wrap:wrap}.buttonContainerDiv[data-v-a84d8dd4],.buttonLista[data-v-a84d8dd4]{display:flex;margin:auto;text-align:center;align-content:center;align-items:center;align-self:center}.buttonLista[data-v-a84d8dd4]{font-size:calc(.6rem + .5vw)}.programmaElettorale[data-v-a84d8dd4]{font-size:calc(10px + 1.5vw + .3rem);padding-top:4.5rem;text-align:left}',""]),t.exports=l},75:function(t,e,n){"use strict";n.r(e);var l={props:{language:{type:String,required:!0}}},r=n(8),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("br"),t._v(" "),e("hr"),t._v(" "),e("footer",{staticClass:"py-5 bg-dark",staticStyle:{"padding-top":"1rem !important","padding-bottom":"2rem !important"}},[e("div",{staticClass:"container"},[e("p",{staticClass:"m-0 text-center",staticStyle:{"font-size":"calc(3px + 0.55rem + 0.35vw)"}},[t._v("\n        Copyright ©\n        "),e("a",{attrs:{href:"https://polinetwork.org/"+t.language}},[t._v("PoliNetwork")])]),t._v(" "),e("div",{staticStyle:{width:"100%","text-align":"center","font-size":"calc(2px + 0.5rem + 0.3vw)","padding-top":"3px"}},[e("a",{attrs:{href:"/"+t.language+"/contatti/"}},[e("span",[t._v(t._s(t.$t("Contatti")))])]),t._v("\n         - \n        "),e("a",{attrs:{href:"/"+t.language+"/curiosita/"}},[e("span",[t._v(t._s(t.$t("Curiosità")))])])]),t._v(" "),e("p",{staticClass:"m-0 text-center",staticStyle:{"font-size":"calc(3px + 0.3rem + 0.2vw)",color:"#000000d9","padding-top":"10px"}},[e("span",[t._v(t._s(t.$t("Questo sito non è affiliato al Politecnico di Milano")))])])])])])}),[],!1,null,null,null);e.default=component.exports},76:function(t,e,n){"use strict";n.r(e);var l={props:{classParam:{type:String,default:""},styleParam:{type:String,default:""}}},r=n(8),component=Object(r.a)(l,(function(){var t=this;return(0,t._self._c)("div",{class:t.classParam,style:t.styleParam},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},77:function(t,e,n){var content=n(81);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("43ef80ee",content,!0,{sourceMap:!1})},80:function(t,e,n){"use strict";n(77)},81:function(t,e,n){var l=n(11)(!1);l.push([t.i,"figure{margin-left:auto;margin-right:auto}.animated{visibility:visible;animation-name:fadeInLeft;width:100%;margin-bottom:.2rem;margin-top:.3rem}.nameCandidatoFull{font-size:medium}.nameDetto{font-size:small;color:#009ad7;font-style:italic}.text{font-size:8pt;color:#000}.candidatoCard{border:1px solid rgba(0,0,0,.1);border-radius:calc(1px + 1rem);padding:calc(1px + .3rem);margin-bottom:10px;height:35vh}",""]),t.exports=l},82:function(t,e,n){"use strict";n.r(e);var l={props:{cand:{type:Object,default:null},urlLista:{type:String,default:null}}},r=(n(80),n(8)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"candidatoCard",style:t.$device.isMobile?"height: 50vh !important;":""},[e("a",{attrs:{href:t.urlLista}},[e("div",{staticClass:"candidatoSV",staticStyle:{"text-align":"center"}},[e("figure",{staticClass:"wow animated fadeInLeft"},[e("img",{staticClass:"border-img img-responsive center-block immagineCandidato",staticStyle:{width:"100%"},attrs:{src:null==t.cand.imgUrl?"https://ui-avatars.com/api/?name="+t.cand.name.split(" ").join("+")+"&size=512":t.cand.imgUrl}})]),t._v(" "),e("div",{staticClass:"imgcaption",staticStyle:{"text-align":"center"}},[e("strong",{staticClass:"nameCandidato"},[e("div",{staticStyle:{width:"100%"}},[e("span",{staticClass:"nameCandidatoFull"},[t._v(t._s(t.cand.name))])]),t._v(" "),t.cand.detto?e("div",{staticStyle:{width:"100%"}},[e("span",{staticClass:"text"},[t._v("\n              "+t._s(null==t.cand.detto?"":t.$t("Alternative valide sulla scheda:"))+"\n            ")]),t._v(" "),e("br"),t._v(" "),e("span",{staticClass:"nameDetto"},[t._v("\n              "+t._s(t.cand.detto)+"\n            ")])]):t._e()])])])])])}),[],!1,null,null,null);e.default=component.exports},90:function(t,e,n){var content=n(99);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("4941810d",content,!0,{sourceMap:!1})},91:function(t,e,n){"use strict";n.r(e);var l={props:{imageUrl:{type:String,default:""},classParam:{type:String,default:""}}},r=n(8),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("img",{class:t.classParam,attrs:{src:t.imageUrl}})])}),[],!1,null,null,null);e.default=component.exports},92:function(t,e,n){"use strict";n.r(e);var l={props:{language:{type:String,default:"it",required:!0},listaEsclusa:{type:Object,default:null,required:!1}},data:function(){return{items:[{id:1,name:"Svoltastudenti",image:"/img/svolta.png",link:"/2021/lista/svoltastudenti/",style:"background-color: #ff6600de;"},{id:2,name:"Lista Aperta",image:"/img/listaaperta.png",link:"/2021/lista/listaaperta/",style:"background-color: #f5dd00;"},{id:3,name:"La Terna Sinistrorsa",image:"/img/terna.png",link:"/2021/lista/ternasinistrorsa/",style:"background-color: #bf2027;"},{id:4,name:"Studenti Indipendenti",image:"/img/sip.png",link:"/2021/lista/studentiindipendenti/",style:"background-color: #0084bc;"}]}},mounted:function(){var t=this;this.$nextTick((function(){t.test()}))},methods:{test:function(){for(var t=0;t<1;t++){var ul=document.getElementById("listeContainer");if(null!=ul){for(var i=ul.children.length;i>=0;i--){t=Math.random()*i|0;var e=ul.children[t];null!=e&&(ul.appendChild(e),console.log(e))}ul.style.opacity="1"}}}}},r=n(8),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row text-center",staticStyle:{display:"flex",opacity:"0.5"},attrs:{id:"listeContainer"},on:{load:t.test}},t._l(t.items.filter((function(e){return null==t.listaEsclusa||e.name!=t.listaEsclusa.name})),(function(n){return e("LayoutFrame",{key:n.name,attrs:{"class-param":"col-lg-3 col-md-6 mb-4"}},[e("div",[e("a",{attrs:{href:"/"+t.language+n.link}},[e("figure",{staticClass:"cap-left",staticStyle:{width:"100%"}},[e("LayoutFrame",{attrs:{"class-param":"card h-100","style-param":n.style}},[e("div",{staticClass:"listTile",staticStyle:{width:"100%"}},[e("div",{staticClass:"containerImgList"},[e("LayoutXImage",{attrs:{"image-url":n.image,"class-param":"imageList"}})],1)])]),t._v(" "),e("figcaption",{staticClass:"h-100"},[e("br"),t._v(" "),e("h2",{staticClass:"titleListaFigcaption"},[t._v(t._s(n.name))])])],1)])])])})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LayoutXImage:n(91).default,LayoutFrame:n(76).default})},98:function(t,e,n){"use strict";n(90)},99:function(t,e,n){var l=n(11)(!1);l.push([t.i,"div.div-hr2[data-v-5cb60b2a]{width:100%}div.div-hr2[data-v-5cb60b2a],hr.hr2[data-v-5cb60b2a]{text-align:center;max-width:100%}hr.hr2[data-v-5cb60b2a]{padding:0;border-top:1px solid #545454;margin:calc(10px + 1rem + 1vh) auto;width:calc(1px + 85vw);color:#000}",""]),t.exports=l}}]);