(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],p=0,u=[];p<o.length;p++)r=o[p],s[r]&&u.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(u.length)u.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/battle-cards/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("c21b"),s=a.n(n);s.a},"03de":function(t,e,a){},"09c4":function(t,e,a){},"0b7e":function(t,e,a){},1577:function(t,e,a){},2750:function(t,e,a){},2967:function(t,e,a){t.exports=a.p+"img/deck1.cd4ee759.png"},"347f":function(t,e,a){"use strict";var n=a("1577"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[t._v("Game")]),t._v("|\n    "),a("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),a("router-view")],1)},i=[],r=(a("034f"),a("2877")),o={},c=Object(r["a"])(o,s,i,!1,null,null,null);c.options.__file="App.vue";var l=c.exports,d=a("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home container"},[n("div",{staticClass:"game-initiate row"},[n("div",{staticClass:"col-md-12 flex"},[t._m(0),n("div",{staticClass:"mt-5 pt-5"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.startGame(e)}}},[n("div",{staticClass:"form-group"},[t._m(1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.gameConfig.playerName,expression:"gameConfig.playerName"}],staticClass:"form-control-lg",attrs:{type:"text",name:"player-name",placeholder:"Enter Player Name"},domProps:{value:t.gameConfig.playerName},on:{input:function(e){e.target.composing||t.$set(t.gameConfig,"playerName",e.target.value)}}}),t._v(" \n            "),t._m(2),n("select",{directives:[{name:"model",rawName:"v-model",value:t.gameConfig.opponents,expression:"gameConfig.opponents"}],staticClass:"form-control-lg",attrs:{name:"opponents"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.gameConfig,"opponents",e.target.multiple?a:a[0])}}},[n("option",{attrs:{value:"1"}},[t._v("1")]),n("option",{attrs:{value:"2"}},[t._v("2")]),n("option",{attrs:{value:"3"}},[t._v("3")]),n("option",{attrs:{value:"4"}},[t._v("4")])]),n("br")]),n("label",{attrs:{for:"deck"}},[n("h4",{staticClass:"text-primary mt-5 mb-3"},[t._v("Choose your card deck:")]),n("div",{staticClass:"check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.gameConfig.set,expression:"gameConfig.set"}],staticClass:"form-control-lg",attrs:{type:"radio",name:"deck",value:"1"},domProps:{checked:t._q(t.gameConfig.set,"1")},on:{change:function(e){t.$set(t.gameConfig,"set","1")}}}),n("img",{attrs:{src:a("2967"),height:"125",alt:""}})]),n("div",{staticClass:"check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.gameConfig.set,expression:"gameConfig.set"}],staticClass:"form-control-lg ml-5",attrs:{type:"radio",name:"deck",value:"2"},domProps:{checked:t._q(t.gameConfig.set,"2")},on:{change:function(e){t.$set(t.gameConfig,"set","2")}}}),n("img",{attrs:{src:a("6531"),height:"125",alt:""}})]),n("div",{staticClass:"check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.gameConfig.set,expression:"gameConfig.set"}],staticClass:"form-control-lg ml-5",attrs:{type:"radio",name:"deck",value:"3"},domProps:{checked:t._q(t.gameConfig.set,"3")},on:{change:function(e){t.$set(t.gameConfig,"set","3")}}}),n("img",{attrs:{src:a("a595"),height:"125",alt:""}}),t._v(" \n            ")]),n("div",{staticClass:"check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.gameConfig.set,expression:"gameConfig.set"}],staticClass:"form-control-lg ml-5",attrs:{type:"radio",name:"deck",value:"4"},domProps:{checked:t._q(t.gameConfig.set,"4")},on:{change:function(e){t.$set(t.gameConfig,"set","4")}}}),n("img",{attrs:{src:a("d066"),height:"125",alt:""}}),n("br")])]),n("br"),n("button",{staticClass:"btn btn-success btn-lg mt-5 text-primary",attrs:{type:"submit"}},[t._v("START GAME")])])])])])])},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-5 pb-5 mt-5 pt-5"},[n("h2",{staticClass:"text-success title"},[t._v("BATTLE "),n("img",{staticClass:"logo",attrs:{src:a("cf05"),height:"250px",alt:"Vue Logo"}}),t._v("UE")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"player-name"}},[a("h4",{staticClass:"text-primary"},[t._v("Name:   ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"opponents"}},[a("h4",{staticClass:"text-primary"},[t._v("   Select Number of opponents:   ")])])}],m={name:"game",data:function(){return{gameConfig:{playerName:"",opponents:0,set:0}}},methods:{startGame:function(t){this.$store.dispatch("startGame",this.gameConfig)}},computed:{}},v=m,f=(a("347f"),Object(r["a"])(v,p,u,!1,null,"b28ae7ea",null));f.options.__file="Game.vue";var h=f.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 offset-md-3"},[n("h1",{staticClass:"text-primary"},[t._v("About Battle "),n("img",{staticClass:"logo",attrs:{src:a("cf05"),height:"100px",alt:"Vue Logo"}}),t._v("ue")]),n("p",{staticClass:"text-success details"},[t._v('This is a simple card game built by the Boise Codeworks faculty. To start, just enter\n        your name and select the number of opponents you wish to battle. You may fight up to 4 opponents at a time. You\n        may also choose from one of four card decks with different graphics. Once you submit your choices the game begins.\n        If you are battling more than one opponent, simply select the button of the adversary which you want to attack.\n        Adversary cards are dealt face down and revealed once they have been attacked. To commence an attack, select an\n        opponent card, then select one of your cards and click on the "FIGHT!" button. The two cards simulatenously attack\n        each other. The cards have health, attack and defense levels printed on them. Any incoming attack in excess of\n        a card\'s defense value will decrement its health. Once a card reaches zero health, it is considered dead and removed\n        from the game. Each player is dealt tens cards to start the game. The last player with cards remaining is the winner.')]),n("p",{staticClass:"text-primary details"},[t._v("This game was built during Week 6 of the Boise Codeworks Full-Stack Immersive Course.\n        The purpose was to gain experience using Vue.js as a front-end framework. The application utilizes an API built\n        by the Boise Codeworks faculty and hosted on Heroku. Graphics are downloaded from Robohash.org")])])])])}],b={},_=b,y=(a("e76e"),Object(r["a"])(_,g,C,!1,null,null,null));y.options.__file="About.vue";var k=y.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.activeGame.id?a("div",{staticClass:"active-game container"},[a("Opponents"),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-8 mb-5 mt-5 directive pt-2 pb-2"},[1==this.activeGame.over&&"Cats Game"==this.activeGame.winner?a("h1",{staticClass:"text-success"},[t._v("We'll call\n        it a draw then!")]):t._e(),1==this.activeGame.over&&"Cats Game"!==this.activeGame.winner?a("h1",{staticClass:"text-success"},[t._v(t._s(this.activeGame.winner.name)+"\n        reigns supreme!")]):t._e(),1==this.activeGame.over?a("button",{staticClass:"btn btn-lg btn-primary",on:{click:t.resetGame}},[t._v("Play Again")]):t._e(),0==this.activeGame.over&&this.playerCardId&&this.opponentCardId?a("button",{staticClass:"btn btn-lg btn-success",on:{click:t.battle}},[t._v("FIGHT!")]):t._e(),0!=this.activeGame.over||this.playerCardId&&this.opponentCardId?t._e():a("p",{staticClass:"text-success"},[t._v("Select\n        cards for battle")])])]),a("Player")],1):t._e()},O=[],I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"opponents row"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"mb-3"},t._l(t.opponents,function(e){return t.opponents.length>1&&!e.dead?n("button",{key:e.id,staticClass:"btn btn-primary",on:{click:function(a){t.setActiveOpponent(e)}}},[t._v(t._s(e.name))]):t._e()})),n("div",{staticClass:"hand row justify-content-around"},t._l(t.activeOpponent.hand,function(e){return t.activeOpponent.id?n("div",{key:e.id,staticClass:"col-md-2"},[n("div",{staticClass:"card mb-3",class:t.setBorder(e.id),attrs:{id:e.id},on:{click:function(a){t.setActiveCard(e.id)}}},[e.visible?n("h5",{staticClass:"card-header"},[t._v(t._s(e.name))]):t._e(),e.visible?n("img",{staticStyle:{height:"140px",width:"100%",display:"block"},attrs:{src:e.img,alt:"Card image"}}):t._e(),e.visible?t._e():n("img",{staticStyle:{height:"auto",width:"100%",display:"block"},attrs:{src:a("f9b5"),alt:"Card image"}}),e.visible?n("ul",{staticClass:"list-group list-group-flush"},[n("li",{staticClass:"list-group-item"},[t._v("Attack: "+t._s(e.attack))]),n("li",{staticClass:"list-group-item"},[t._v("Defense: "+t._s(e.defense))]),n("li",{staticClass:"list-group-item"},[t._v("Health: "+t._s(e.health))])]):t._e()])]):t._e()}))]),n("div",{staticClass:"col-md-12 top-border"},[t.activeOpponent.id?n("h3",{staticClass:"text-primary"},[t._v(t._s(t.activeOpponent.name)+"    Cards Remaining: "+t._s(t.activeOpponent.remainingCards+t.activeOpponent.hand.length))]):t._e(),t.activeOpponent.id?t._e():n("h3",{staticClass:"text-primary"},[t._v("Select an opponent to attack")])])])},x=[],G={name:"Opponents",props:["activeGame"],data:function(){return{}},methods:{setBorder:function(t){if(t==this.activeCardId)return"active-card"},setActiveCard:function(t){this.$store.dispatch("setOpponentCardId",t)},setActiveOpponent:function(t){this.$store.dispatch("setActiveOpponent",t)}},computed:{activeOpponent:function(){return this.$store.state.activeOpponent},activeCardId:function(){return this.$store.state.opponentCardId},opponents:function(){return this.$store.state.game.players.slice(1)}}},$=G,A=(a("d4eb"),Object(r["a"])($,I,x,!1,null,"bcfea62e",null));A.options.__file="Opponents.vue";var P=A.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"player row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"bottom-border mb-2"},[a("h3",{staticClass:"text-primary"},[t._v(t._s(t.player.name)+"    Cards Remaining: "+t._s(t.player.remainingCards+t.player.hand.length))])]),a("div",{staticClass:"hand row justify-content-around"},t._l(t.player.hand,function(e){return a("div",{key:e.id,staticClass:"col-md-2"},[a("div",{staticClass:"card mb-3",class:t.setBorder(e.id),attrs:{id:e.id},on:{click:function(a){t.setActiveCard(e.id)}}},[a("h5",{staticClass:" card-header "},[t._v(t._s(e.name))]),a("img",{staticStyle:{height:"140px",width:"100%",display:"block"},attrs:{src:e.img,alt:"Card image "}}),a("ul",{staticClass:"list-group list-group-flush "},[a("li",{staticClass:"list-group-item "},[t._v("Attack: "+t._s(e.attack))]),a("li",{staticClass:"list-group-item "},[t._v("Defense: "+t._s(e.defense))]),a("li",{staticClass:"list-group-item "},[t._v("Health: "+t._s(e.health))])])])])}))])])},T=[],E={name:"Player",data:function(){return{}},methods:{setBorder:function(t){if(t==this.activeCardId)return"active-card"},setActiveCard:function(t){this.$store.dispatch("setPlayerCardId",t)}},computed:{player:function(){return this.$store.state.game.players[0]},activeCardId:function(){return this.$store.state.playerCardId}}},N=E,S=(a("bb03"),Object(r["a"])(N,j,T,!1,null,"4222f7fb",null));S.options.__file="Player.vue";var B=S.exports,H={name:"activeGame",mounted:function(){var t=this.$route.params.gameId;this.activeGame.id||this.$store.dispatch("getGame",t)},data:function(){return{}},components:{Player:B,Opponents:P},methods:{battle:function(){var t={playerId:this.activeGame.players[0].id,playerCardId:this.playerCardId,opponentId:this.activeGame.players[1].id,opponentCardId:this.opponentCardId},e=this.activeGame.id;this.$store.dispatch("battle",{gameId:e,attack:t})},resetGame:function(){this.$store.dispatch("resetGame",this.activeGame.id)}},computed:{activeGame:function(){return this.$store.state.game},playerCardId:function(){return this.$store.state.playerCardId},opponentCardId:function(){return this.$store.state.opponentCardId},activeOpponent:function(){return this.$store.state.activeOpponent}}},M=H,R=(a("66da"),Object(r["a"])(M,w,O,!1,null,null,null));R.options.__file="ActiveGame.vue";var q=R.exports;n["a"].use(d["a"]);var L=new d["a"]({routes:[{path:"/",name:"game",component:h},{path:"/about",name:"about",component:k},{path:"/game/:gameId",name:"activeGame",component:q}]}),D=(a("7514"),a("2f62")),F=a("bc3a"),V=a.n(F);n["a"].use(D["a"]);var z=V.a.create({baseURL:"https://inspire-server.herokuapp.com/cards",timeout:3e3}),J=new D["a"].Store({state:{game:{},playerCardId:"",opponentCardId:"",activeOpponent:{}},mutations:{setGame:function(t,e){t.game=e,console.log(e),t.activeOpponent.id&&(t.activeOpponent=e.players.find(function(e){return e.id==t.activeOpponent.id})),1==t.game.opponents&&(t.activeOpponent=t.game.players[1]),L.push({name:"activeGame",params:{gameId:e.id}})},setActiveOpponent:function(t,e){t.activeOpponent=e},setPlayerCardId:function(t,e){t.playerCardId=e},setOpponentCardId:function(t,e){t.opponentCardId=e},resetCards:function(t){t.opponentCardId="",t.playerCardId=""},resetGame:function(t){t.opponentCardId="",t.playerCardId="",t.activeOpponent={},t.game={},L.push({name:"game"})}},actions:{startGame:function(t,e){var a=t.commit;t.dispatch;z.post("",e).then(function(t){a("setGame",t.data)}).catch(function(t){return console.error(t.message)})},getGame:function(t,e){var a=t.commit;t.dispatch;z.get("/"+e).then(function(t){a("setGame",t.data.data),a("resetCards")}).catch(function(t){return console.error(t.message)})},setActiveOpponent:function(t,e){var a=t.commit;t.dispatch;a("setActiveOpponent",e)},setPlayerCardId:function(t,e){var a=t.commit;t.dispatch;a("setPlayerCardId",e)},setOpponentCardId:function(t,e){var a=t.commit;t.dispatch;a("setOpponentCardId",e)},battle:function(t,e){t.commit;var a=t.dispatch;z.put("/"+e.gameId,e.attack).then(function(t){a("getGame",e.gameId)}).catch(function(t){return console.error(t.message)})},resetGame:function(t,e){var a=t.commit;t.dispatch;z.delete("/"+e).then(function(t){a("resetGame")}).catch(function(t){return console.error(t.message)})}}});n["a"].config.productionTip=!1,new n["a"]({router:L,store:J,render:function(t){return t(l)}}).$mount("#app")},6531:function(t,e,a){t.exports=a.p+"img/deck2.ae3795a6.png"},"66da":function(t,e,a){"use strict";var n=a("2750"),s=a.n(n);s.a},a595:function(t,e,a){t.exports=a.p+"img/deck3.115efeb0.png"},bb03:function(t,e,a){"use strict";var n=a("03de"),s=a.n(n);s.a},c21b:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},d066:function(t,e,a){t.exports=a.p+"img/deck4.e1d8b3de.png"},d4eb:function(t,e,a){"use strict";var n=a("09c4"),s=a.n(n);s.a},e76e:function(t,e,a){"use strict";var n=a("0b7e"),s=a.n(n);s.a},f9b5:function(t,e,a){t.exports=a.p+"img/cardback.6798e9c1.jpg"}});
//# sourceMappingURL=app.58b46b4b.js.map