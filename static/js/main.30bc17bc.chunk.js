(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{20:function(e,t,a){e.exports=a(39)},25:function(e,t,a){},26:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),c=a.n(l),o=(a(25),a(26),a(2)),i=a(3),s=a(5),m=a(4),u=a(1),p=a.n(u),h={name:"Nicholas Finch",headerTagline:["Full-Stack Web Developer from","Greensboro, North Carolina"],contactEmail:"nicfinch223@gmail.com",abouttext:"In May 2019 I earned my Associate's degree in IT from Alamance Community College. After that, I decided to further my education with the UNC coding bootcamp and earned my Full Stack Web Development Certificate. Passionate web developer with skills in Node.js, Express, JavaScript, jQuery, React.js, React, JSX, GIT, GitHub, MongoDB, MySQL, Mongoose, Handlebars, HTML, CSS, Bootstrap, Materialize, APIs, Heroku, Terminal, ES6+. Deeply motivated programmer, I love learning new things and continuing to challenge myself.",aboutImage:"https://avatars2.githubusercontent.com/u/57764795?s=400&u=4be80bacf42ba1b0d47a387ebdf1df1081456dcd&v=4",ShowAboutImage:!0,projects:[{id:1,title:"Doctor and Diet",service:"AJAX | Jquery | Bootsrap",imageSrc:"https://i.ibb.co/D7FCnH7/Capture1.png",url:"https://github.com/Finch23/Project1",deploy:"https://finch23.github.io/Doctor-Diet/"},{id:2,title:"Quest for the Net",service:"MySQL | Node | Express | Handlebars ",imageSrc:"https://i.ibb.co/CsdHctm/project2.png",url:"https://github.com/gwlee244/project2",deploy:"https://vast-headland-47194.herokuapp.com/"},{id:3,title:"Password Generator",service:"Javascript | HTML | CSS",imageSrc:"https://i.ibb.co/B6WH95f/Capture.png",url:"https://github.com/Finch23/Random-Password",deploy:"https://finch23.github.io/Random-Password/"},{id:4,title:"Motivate Me",service:"React | Express | Passport | MongoDB",imageSrc:"https://i.ibb.co/crHqgPS/84715507-a3d99400-af3e-11ea-958e-0e1aa019c808.png",url:"https://github.com/Finch23/Motivate-Me",deploy:"https://pacific-wave-23407.herokuapp.com/"}],social:[{name:"Github",url:"https://github.com/Finch23"},{name:"LinkedIn",url:"https://www.linkedin.com/in/nicholas-finch-506447185/"},{name:"Resume",url:"https://drive.google.com/file/d/1IuxStIAdj6dw_Vg1aEcGSnrIf_bvaNQ9/view?usp=sharing"}]},d=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"heading-background"},"Portfolio"),r.a.createElement("header",null,h.ShowAboutImage?r.a.createElement("img",{src:h.aboutImage,alt:"about",style:{borderRadius:"5%",width:"100px",height:"100px"}}):null,r.a.createElement("h1",null,r.a.createElement(p.a,{bottom:!0,cascade:!0},h.name))),r.a.createElement(p.a,{bottom:!0},r.a.createElement("p",{className:"header-title"},h.headerTagline[0],r.a.createElement("br",null),h.headerTagline[1],r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{class:"btn btn"},r.a.createElement("a",{href:"mailto:".concat(h.contactEmail),rel:"noopener noreferrer"},"Contact")))))}}]),a}(n.Component),b=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"about"},r.a.createElement("div",{className:"about-content"},r.a.createElement("h1",null,r.a.createElement(p.a,{bottom:!0,cascade:!0},"About.")),r.a.createElement(p.a,{bottom:!0},r.a.createElement("p",null,h.abouttext))))}}]),a}(n.Component),E=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,{bottom:!0},r.a.createElement("div",{className:"project"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:this.props.url},r.a.createElement("img",{src:this.props.imageSrc,alt:this.props.title})),r.a.createElement("h1",null,this.props.title),r.a.createElement("span",null,this.props.service),r.a.createElement("br",null),r.a.createElement("button",{class:"btn btn deploy"},r.a.createElement("a",{rel:"noopener noreferrer",href:this.props.deploy,target:"_blank"}," Deploy"))))}}]),a}(n.Component),v=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"heading"},r.a.createElement(p.a,{bottom:!0,cascade:!0},"Projects.")),r.a.createElement("h3",null,"Click the picture for the repo | Click deploy to view the app"),r.a.createElement("div",{className:"work-content"},h.projects.map((function(e){return r.a.createElement(E,{key:e.id,title:e.title,service:e.service,imageSrc:e.imageSrc,url:e.url,deploy:e.deploy})}))))}}]),a}(n.Component),f=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement(p.a,{bottom:!0,cascade:!0}," Contact.")),r.a.createElement(p.a,{bottom:!0},r.a.createElement("div",{className:"contact-content"},r.a.createElement("h1",null,"Feel free to explore",r.a.createElement("br",null),r.a.createElement("span",{className:"amazing-color"},"My links")),r.a.createElement("a",{href:"mailto:".concat(h.contactEmail),className:"email"},h.contactEmail),r.a.createElement("ul",null,h.social.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.url},e.name))}))))))}}]),a}(n.Component),g=a(7),y=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e.scrollToTop=function(){g.animateScroll.scrollToTop()},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(g.Link,{className:"link",activeClass:"active",to:"home",spy:!0,smooth:!0,offset:-70,duration:500,onClick:this.scrollToTop},"Home")),r.a.createElement("li",null,r.a.createElement(g.Link,{className:"link",activeClass:"active",to:"About",spy:!0,smooth:!0,offset:-70,duration:500},"About")),r.a.createElement("li",null,r.a.createElement(g.Link,{className:"link",activeClass:"active",to:"work",spy:!0,smooth:!0,offset:-70,duration:500},"Projects")),r.a.createElement("li",null,r.a.createElement(g.Link,{className:"link",activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-70,duration:500},"Contact"))))}}]),a}(n.Component);var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,null),r.a.createElement("div",{className:"App-header"},r.a.createElement(d,null)),r.a.createElement("div",{className:"About"},r.a.createElement(b,null)),r.a.createElement("div",{className:"work"},r.a.createElement(v,null)),r.a.createElement("div",{className:"contact"},r.a.createElement(f,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.30bc17bc.chunk.js.map