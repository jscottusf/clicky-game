(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Rick Sanchez","image":"/images/rick.jpg"},{"id":2,"name":"Birdman","image":"/images/birdman.jpg"},{"id":3,"name":"Beth\'s Mytholog","image":"/images/bethclone.jpg"},{"id":4,"name":"Evil Morty","image":"/images/evilmorty.jpg"},{"id":5,"name":"Beth","image":"/images/beth.png"},{"id":6,"name":"Summer","image":"/images/summer.jpg"},{"id":7,"name":"Jerry","image":"/images/jerry.png"},{"id":8,"name":"Morty C-137","image":"/images/morty.jpg"},{"id":9,"name":"Jessica","image":"/images/jessica.png"},{"id":10,"name":"Mr. Poopybutthole","image":"/images/poopy.jpg"},{"id":11,"name":"Squanchy","image":"/images/Squanchy.png"},{"id":12,"name":"Mr. Meeseeks","image":"/images/meeseeks.png"}]')},,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),s=a.n(i),n=a(2),c=a.n(n),r=a(3),o=a(4),m=a(7),l=a(6);a(13);var h=function(e){return s.a.createElement("div",{className:"img-container",onClick:function(){return e.handleClickEvent(e.id,e.clicked)}},s.a.createElement("img",{alt:e.name,src:"/clicky-game"+e.image}),s.a.createElement("div",{class:"bottom-right"},e.name))},u=a(5);a(14);var d=function(e){return s.a.createElement("div",{className:"header-grid"},s.a.createElement("h4",{className:"title"},"Score: ",e.score),s.a.createElement("h4",{className:"status",style:{color:e.style}},e.status),s.a.createElement("h4",null,"High Score: ",e.highScore))};a(15);var g=function(e){return s.a.createElement("div",{className:"grid-container"},e.children)},f=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var i=arguments.length,s=new Array(i),n=0;n<i;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={score:0,cards:u,status:"Rick and Morty Clicky Game",highScore:0,style:"#ccff15"},e.shuffle=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),i=[e[a],e[t]];e[t]=i[0],e[a]=i[1]}},e.handleClickEvent=function(t,a){if(!0===a){if(e.state.highScore<e.state.score){var i=e.state.score;e.setState({highScore:i})}e.shuffle(e.state.cards),e.state.cards.map((function(e){return e.clicked=!1})),e.setState({cards:e.state.cards,status:"oooooooooowweeee better luck next time",style:"#ff0dbf",score:0})}else if(11===e.state.score){e.shuffle(e.state.cards),e.state.cards.map((function(e){return e.clicked=!1})),e.setState({cards:e.state.cards,status:"winner winner chicken dinner! Try again?",style:"#15f4ee",score:0,highScore:12})}else{var s=["Wubbalubbadubdub!","Rikitikitavi, bitch!","Rikitikitavi, bitch!","Hit the sack, Jack!","Uh ohhhh! Somersoult jump!","AIDS!","And that's why I always say, 'Shumshumschilpiddydah!'","GRASSSSS... tastes bad!","Lick lick lick my balls!","Rubber baby burger bumpers!"][Math.floor(10*Math.random())],n=e.state.cards.map((function(e){return e.id===t&&!1===e.clicked?(e.clicked=!0,e):e}));e.shuffle(n);var c=e.state.score;if(c++,e.state.highScore<=c){var r=c;e.setState({highScore:r})}e.setState({cards:n,score:c,style:"#39FF14",status:s})}},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.state.cards.map((function(e){return e.clicked=!1})),this.shuffle(this.state.cards),this.setState({cards:this.state.cards})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(d,{score:this.state.score,status:this.state.status,highScore:this.state.highScore,style:this.state.style}),s.a.createElement(g,{wrong:this.state.wrong},this.state.cards.map((function(t){return s.a.createElement(h,{key:t.id,id:t.id,name:t.name,image:t.image,handleClickEvent:e.handleClickEvent,clicked:t.clicked})}))))}}]),a}(s.a.Component);a(16);var k=function(){return s.a.createElement("div",{className:"main-container"},s.a.createElement(f,null))};a(17);c.a.render(s.a.createElement(k,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.6ab6ffef.chunk.js.map