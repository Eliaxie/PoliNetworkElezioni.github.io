(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{250:function(t,e,n){var content=n(252);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("4d4e42e5",content,!0,{sourceMap:!1})},251:function(t,e,n){"use strict";n(250)},252:function(t,e,n){var c=n(49)(!1);c.push([t.i,'img[src$=".gif"][data-v-af0807b0],img[src$=".png"][data-v-af0807b0]{image-rendering:-moz-crisp-edges;image-rendering:-o-crisp-edges;image-rendering:-webkit-optimize-contrast;-ms-interpolation-mode:nearest-neighbor}img[data-v-af0807b0]{border:0;vertical-align:middle}.office-place[data-v-af0807b0]{color:#4b4228;font:16px/1.5 "Novecento Sans Wide Medium",Helvetica,Arial,sans-serif;letter-spacing:.2em;margin:25px auto 0}.descrizioneLista[data-v-af0807b0]{font-size:calc(15px + .17vw + .08rem)}.carousel-inner>.item>a>img[data-v-af0807b0],.carousel-inner>.item>img[data-v-af0807b0],.img-responsive[data-v-af0807b0],.thumbnail>img[data-v-af0807b0],.thumbnail a>img[data-v-af0807b0]{display:block;width:100%\\9;max-width:90%;height:auto;margin-left:auto;margin-right:auto;margin-bottom:0}.imgcaption[data-v-af0807b0]{margin-bottom:calc(1.3rem + 3px)}figure[data-v-af0807b0]{margin-left:auto;margin-right:auto;margin-bottom:.2rem}',""]),t.exports=c},258:function(t,e,n){"use strict";n.r(e);var c={props:{dataLista:{type:Object,default:null}}},l=(n(251),n(57)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NavigationBar"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"intro white",staticStyle:{"text-align":"center"}},[n("div",{staticStyle:{width:"100%"}},[n("img",{staticStyle:{width:"calc(15px + 4vw + 5rem)",padding:"10px","text-align":"center"},attrs:{src:t.dataLista.imageUrl}})]),t._v(" "),n("div",{staticClass:"container wow animated fadeInUp"},[n("h2",{staticStyle:{color:"black","font-size":"calc(10px + 3vw + 0.5rem)"}},[t._v(t._s(this.dataLista.name))]),t._v(" "),n("a",{attrs:{href:this.dataLista.mainWebsiteUrl}},[n("Button",[t._v("Sito ufficiale 🌐")])],1),t._v(" "),n("a",{attrs:{href:this.dataLista.mainProgrammaUrl}},[n("Button",[t._v("Programma elettorale - PDF Completo 🗳")])],1),t._v(" "),n("p",{staticClass:"office-place descrizioneLista",attrs:{id:"office-place"}},[t._v(t._s(this.dataLista.desc))])])]),t._v(" "),n("div",{staticClass:"section",attrs:{id:"our-info"}},[n("div",{staticClass:"container"},[n("h2",{staticStyle:{"font-size":"calc(9px + 2.5vw + 0.3rem)","padding-top":"2rem"}},[t._v("Programma elettorale")]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"row"},t._l(t.dataLista.programma,(function(e){return n("Frame",{key:e.id,attrs:{"class-param":"col-sm-6 wow animated fadeInLeft"}},[n("div",[n("figure",[n("img",{staticClass:"z-hover img-responsive",attrs:{src:e.url}})]),t._v(" "),n("h4",[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"function-text"},[t._v("\n                            "+t._s(e.desc)+"\n                             ")])])])})),1)])]),t._v(" "),n("HorizontalLine"),t._v(" "),n("div",{staticClass:"section members"},[n("div",{staticClass:"container"},[n("h2",[t._v("Senato")]),t._v(" "),n("hr"),t._v(" "),n("p",{staticClass:"lead-creative-banner"},[t._v("\n                "+t._s(t.dataLista.senato.desc)+"\n            ")]),t._v(" "),n("div",{staticStyle:{display:"flex","flex-wrap":"wrap"},attrs:{id:"includedContentSenato"}},t._l(t.dataLista.senato.candidati,(function(e){return n("Frame",{key:e.id,attrs:{"class-param":"col-md-3 col-md-2","style-param":"display:flex;"}},[n("a",{attrs:{href:"#"}},[n("div",{staticClass:"candidatoSV",staticStyle:{"text-align":"center"}},[n("figure",{staticClass:"wow animated fadeInLeft animated",staticStyle:{visibility:"visible","animation-name":"fadeInLeft",width:"100%"}},[n("img",{staticClass:"border-img img-responsive center-block immagineCandidato",staticStyle:{width:"100%"},attrs:{src:e.imgUrl}})]),t._v(" "),n("div",{staticClass:"imgcaption",staticStyle:{"text-align":"center"}},[n("strong",{staticClass:"nameCandidato"},[n("span",[t._v(t._s(e.name)+"  ")]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"name"},[t._v("\n                                        "+t._s(e.detto)+"\n                                    ")])])])])])])})),1)])]),t._v(" "),n("HorizontalLine"),t._v(" "),n("div",{staticClass:"section members",staticStyle:{"background-color":"white"}},[n("div",{staticClass:"container"},[n("h2",[t._v("CDA")]),t._v(" "),n("hr"),t._v(" "),n("p",{staticClass:"lead-creative-banner"},[t._v("\n                "+t._s(t.dataLista.cda.desc)+"\n            ")]),t._v(" "),n("div",{attrs:{id:"includedContentCda"}})])]),t._v(" "),n("HorizontalLine"),t._v(" "),n("div",{staticClass:"section members",staticStyle:{"background-color":"white"}},[n("div",{staticClass:"container"},[n("h2",[t._v("Scuole")]),t._v(" "),n("hr"),t._v(" "),n("p",{staticClass:"lead-creative-banner"},[t._v(t._s(t.dataLista.scuole.desc))]),t._v(" "),n("ul",[n("li",{staticClass:"liScuola"},[n("span",{staticClass:"titleScuole"},[t._v("AUIC:")]),t._v(" "),n("br",{staticClass:"spacerScuole"}),t._v("\n                "+t._s(t.dataLista.scuole.auic.desc)+"\n                "),n("div",{attrs:{id:"includedContentScuoleAUIC"}})]),t._v(" "),n("li",{staticClass:"liScuola"},[n("span",{staticClass:"titleScuole"},[t._v("3I:")]),t._v(" "),n("br",{staticClass:"spacerScuole"}),t._v("\n                "+t._s(t.dataLista.scuole.trei.desc)+"\n                "),n("div",{attrs:{id:"includedContentScuole3I"}})]),t._v(" "),n("li",{staticClass:"liScuola"},[n("span",{staticClass:"titleScuole"},[t._v("CAT:")]),t._v(" "),n("br",{staticClass:"spacerScuole"}),t._v("\n                "+t._s(t.dataLista.scuole.icat.desc)+"\n                "),n("div",{attrs:{id:"includedContentScuoleCAT"}})]),t._v(" "),n("li",{staticClass:"liScuola"},[n("span",{staticClass:"titleScuole"},[t._v("DESIGN:")]),t._v(" "),n("br",{staticClass:"spacerScuole"}),t._v("\n                "+t._s(t.dataLista.scuole.design.desc)+"\n                "),n("div",{attrs:{id:"includedContentScuoleDESIGN"}})])])])])],1)}),[],!1,null,"af0807b0",null);e.default=component.exports}}]);