"use strict";(self.webpackChunkheroes_app=self.webpackChunkheroes_app||[]).push([[905],{1905:(f,l,e)=>{e.r(l),e.d(l,{AuthModule:()=>d});var c=e(8583),s=e(4655),o=e(7716),u=e(6518),a=e(4929),p=e(1095);const m=[{path:"",children:[{path:"login",component:(()=>{class t{constructor(n,i){this.router=n,this.authService=i}login(){this.authService.login().subscribe(n=>{console.log(n),n.id&&this.router.navigate(["./heroes"])})}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(s.F0),o.Y36(u.e))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-login"]],decls:4,vars:0,consts:[["cols","1"],["mat-raised-button","","color","primary",3,"click"]],template:function(n,i){1&n&&(o.TgZ(0,"mat-grid-list",0),o.TgZ(1,"mat-grid-list"),o.TgZ(2,"button",1),o.NdJ("click",function(){return i.login()}),o._uU(3,"Ingresar"),o.qZA(),o.qZA(),o.qZA())},directives:[a.Il,p.lW],encapsulation:2}),t})()},{path:"registro",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-register"]],decls:2,vars:0,template:function(n,i){1&n&&(o.TgZ(0,"p"),o._uU(1,"register works!"),o.qZA())},encapsulation:2}),t})()},{path:"**",redirectTo:"login"}]}];let g=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[s.Bz.forChild(m)],s.Bz]}),t})();var h=e(898);let d=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[c.ez,g,h.q]]}),t})()}}]);