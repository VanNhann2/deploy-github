(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(7),r=n.n(i),c=(n(15),n(2)),l=n(3),s=n(5),u=n(4),d=n(6),h=(n(16),n(17),n(1)),m={lat:27.9878,lng:86.925},p=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={address:"Nh\u1eadt b\u1ea3n",position:{},defaultPosition:m},n.handleLocationChange=n.handleLocationChange.bind(Object(h.a)(Object(h.a)(n))),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleLocationChange",value:function(e){var t=e.position,n=e.address;this.setState({position:t,address:n})}},{key:"componentDidMount",value:function(){var e=this;navigator&&navigator.geolocation.getCurrentPosition(function(t){var n=t.coords,a=n.latitude,o=n.longitude;e.setState({defaultPosition:{lat:a,lng:o}})})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("h1",null,this.state.address),o.a.createElement("h2",{defaultPosition:this.props.defaultPosition}),o.a.createElement("button",{id:"find-me"},"Show my location"),o.a.createElement("br",null),o.a.createElement("button",{onChange:this.handleLocationChange},"Update changes location"),o.a.createElement("br",null),o.a.createElement("p",{id:"status"}),o.a.createElement("a",{id:"map-link",target:"_blank"})))}}]),t}(a.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(p,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.149c223f.chunk.js.map