(this["webpackJsonptrew-brew"]=this["webpackJsonptrew-brew"]||[]).push([[0],{22:function(e,t,a){e.exports=a(37)},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),i=(a(27),a(5)),o=a(6),s=a(8),u=a(7),m=a(9),d=(a(28),a(29),function(e){return r.a.createElement("button",{className:"toggle-button",onClick:e.click},r.a.createElement("div",{className:"toggle-button-line"}),r.a.createElement("div",{className:"toggle-button-line"}),r.a.createElement("div",{className:"toggle-button-line"}))}),p=a(3),E=function(e){return r.a.createElement("header",{className:"toolbar"},r.a.createElement("nav",{className:"toolbar-nav"},r.a.createElement("div",{className:"toolbar-toggle-button"},r.a.createElement(d,{click:e.drawerClickHandler})),r.a.createElement("div",{className:"toolbar-logo"},r.a.createElement("a",{href:"/"},"Trew Brew")),r.a.createElement("div",{className:"spacer"}),r.a.createElement("div",{className:"toolbar-nav-items"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.b,{to:"/BeerProfiles"},"Beer Profiles")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/Ingredients"},"Ingredients List")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/RecipeBuilder"},"Recipe Builder")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/RecipeCards"},"Recipe Cards"))))))},b=(a(35),function(e){var t=["side-drawer"];return e.show&&(t=["side-drawer open"]),r.a.createElement("nav",{className:t},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.b,{to:"/BeerProfiles"},"Beer Profiles")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/Ingredients"},"Ingredients List")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/RecipeBuilder"},"Recipe Builder")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/RecipeCards"},"Recipe Cards"))))}),h=(a(36),function(e){return r.a.createElement("div",{className:"backdrop",onClick:e.click})}),f=a(11),g=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Beer Profiles List"),r.a.createElement("p",null,"This will be the page to view, edit, and add new beer profiles to help guage your recipes."),r.a.createElement("h3",null,"Work in Progress"))}}]),t}(n.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Ingredients List"),r.a.createElement("p",null,"This will be the page to view, edit, or add new ingredients to your list for future use."),r.a.createElement("h3",null,"Work in Progress"))}}]),t}(n.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Recipe Builder"),r.a.createElement("p",null,"This will be the page to create your new beer recipes."),r.a.createElement("h3",null,"Work in Progress"))}}]),t}(n.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Recipe Cards"),r.a.createElement("p",null,"This will be the page to view and print out your recipe cards."),r.a.createElement("h3",null,"Work in Progress"))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={sideDrawerOpen:!1},a.drawerToggleClickHandler=function(){a.setState((function(e){return{sideDrawerOpen:!e.sideDrawerOpen}}))},a.backdropClickHandler=function(){a.setState({sideDrawerOpen:!1})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e;return this.state.sideDrawerOpen&&(e=r.a.createElement(h,{click:this.backdropClickHandler})),r.a.createElement(p.a,null,r.a.createElement("div",{className:"app",style:{height:"100%"}},r.a.createElement(E,{drawerClickHandler:this.drawerToggleClickHandler}),r.a.createElement(b,{show:this.state.sideDrawerOpen}),e,r.a.createElement("main",{style:{marginTop:"64px"}},r.a.createElement(f.a,{path:"/BeerProfiles",component:g}),r.a.createElement(f.a,{path:"/Ingredients",component:w}),r.a.createElement(f.a,{path:"/RecipeBuilder",component:v}),r.a.createElement(f.a,{path:"/RecipeCards",component:O}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.a817dece.chunk.js.map