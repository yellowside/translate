(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var d=this||self;function e(a,v){a=a.split(".");var b=d;a[0]in b||"undefined"==typeof b.execScript||b.execScript("var "+a[0]);for(var c;a.length&&(c=a.shift());)a.length||void 0===v?b[c]&&b[c]!==Object.prototype[c]?b=b[c]:b=b[c]={}:b[c]=v};var f={0:"Prevedi",1:"Odustani",2:"Zatvori",3:function(a){return"Google je automatski preveo ovu stranicu na: "+a},4:function(a){return"Prevedeno na: "+a},5:"Pogre\u0161ka: Poslu\u017eitelj nije uspio dovr\u0161iti va\u0161 zahtjev. Poku\u0161ajte ponovo kasnije.",6:"Saznajte vi\u0161e",7:function(a){return"Pokre\u0107e "+a},8:"Prevoditelj",9:"Prijevod je u tijeku",10:function(a){return"Prevesti ovu stranicu na: "+(a+" pomo\u0107u Google Prevoditelja?")},11:function(a){return"Prika\u017ei stranicu na ovom jeziku: "+
a},12:"Prika\u017ei original",13:"Sadr\u017eaj ove lokalne datoteke bit \u0107e poslan Googleu na prijevod putem sigurne veze.",14:"Sadr\u017eaj ove sigurne stranice bit \u0107e poslan Googleu na prijevod putem sigurne veze.",15:"Sadr\u017eaj ove intranetske stranice bit \u0107e poslan Googleu na prijevod putem sigurne veze.",16:"Odaberite jezik",17:function(a){return"Isklju\u010di "+(a+" prijevod")},18:function(a){return"Isklju\u010di za: "+a},19:"Uvijek sakrij",20:"Izvorni tekst:",21:"Prilo\u017eite bolji prijevod",
22:"Dodaj",23:"Prevedi sve",24:"Obnovi sve",25:"Otka\u017ei sve",26:"Prevedi odjeljke na moj jezik",27:function(a){return"Prevedi sve na "+a},28:"Prika\u017ei izvorne jezike",29:"Opcije",30:"Isklju\u010di prijevode za ovu web-lokaciju",31:null,32:"Prika\u017ei alternativne prijevode",33:"Kliknite gornje rije\u010di za alternativne prijevode",34:"Upotrijebi",35:"Za promjenu rasporeda povucite tipkom Shift.",36:"Kliknite za alternativne prijevode",37:'Dr\u017eite pritisnutu tipku "Shift", kliknite i povucite rije\u010di iznad postoje\u0107ih da biste promijenili njihov redoslijed.',
38:"Zahvaljujemo vam \u0161to ste dodali svoj prijedlog prijevoda u Google Translate.",39:"Upravlja\u0458 prijevodom za ovu web-lokaciju",40:"Kliknite rije\u010d za alternativne prijevode ili dvaput kliknite za izravno ure\u0111ivanje",41:"Izvorni tekst",42:"Prevoditelj",43:"Prevedi",44:"Va\u0161 je ispravak poslan.",45:"Pogre\u0161ka: jezik web-stranice nije podr\u017ean.",46:"Widget za prevo\u0111enje jezika"};var g=window.google&&google.translate&&google.translate._const;
if(g){var h;a:{for(var k=[],l=[""],m=0;m<l.length;++m){var n=l[m].split(","),p=n[0];if(p){var q=Number(n[1]);if(!(!q||.1<q||0>q)){var r=Number(n[2]),t=new Date,u=1E4*t.getFullYear()+100*(t.getMonth()+1)+t.getDate();!r||r<u||k.push({version:p,ratio:q,a:r})}}}var w=0,x=window.location.href.match(/google\.translate\.element\.random=([\d\.]+)/),y=Number(x&&x[1])||Math.random();for(m=0;m<k.length;++m){var z=k[m];w+=z.ratio;if(1<=w)break;if(y<w){h=z.version;break a}}h="TE_20200210_00"}var A="/element/%s/e/js/element/element_main.js".replace("%s",
h);if("0"==h){var B=" element %s e js element element_main.js".split(" ");B[B.length-1]="main_hr.js";A=B.join("/").replace("%s",h)}if(g._cjlc)g._cjlc(g._pas+g._pah+A);else{var C=g._pas+g._pah+A,D=document.createElement("script");D.type="text/javascript";D.charset="UTF-8";D.src=translate.resourcesUrl+"/js/element_main.js";var E=document.getElementsByTagName("head")[0];E||(E=document.body.parentNode.appendChild(document.createElement("head")));E.appendChild(D)}e("google.translate.m",f);e("google.translate.v",h)};}).call(window)