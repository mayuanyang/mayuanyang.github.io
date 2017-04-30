define("app",["exports"],function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});e.App=function(){function e(){t(this,e),this.message="Hello World!"}return e.prototype.configureRouter=function(e,t){this.router=t,e.title="Aurelia",e.map([{route:["","home"],nav:!0,name:"home",title:"Home",moduleId:"home/home"},{route:["about"],nav:!0,name:"about me",title:"About Me",moduleId:"aboutme/aboutme"},{route:["contact"],nav:!0,name:"contact me",title:"Contact Me",moduleId:"contactme/contactme"},{route:["http"],nav:!0,name:"http",title:"Http Pratice",moduleId:"httppratice/http-pratice"},{route:["dynamicloader"],nav:!0,name:"dynamicloader",title:"Dynamic Component Loader",moduleId:"dynamicloader/dynamic-loader"},{route:["nosql"],nav:!0,name:"nosql",title:"Connect to Database",moduleId:"nosql/nosql"},{route:["authentication"],nav:!0,name:"authentication",title:"Authentication",moduleId:"authentication/authentication"}])},e}()}),define("environment",["exports"],function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={debug:!1,testing:!1}}),define("main",["exports","./environment"],function(e,t){"use strict";function i(e){e.use.standardConfiguration().feature("resources"),n.default.debug&&e.use.developmentLogging(),n.default.testing&&e.use.plugin("aurelia-testing"),e.start().then(function(){return e.setRoot()})}Object.defineProperty(e,"__esModule",{value:!0}),e.configure=i;var n=function(e){return e&&e.__esModule?e:{default:e}}(t)}),define("aboutme/aboutme",["exports"],function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});e.Aboutme=function e(){t(this,e),this.message="My name is Eddy Ma"}}),define("authentication/authentication",["exports"],function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});e.Authentication=function(){function e(){t(this,e),this.title="Authentication",this.description="This pratice is to use Auth0 for the authentication, currently will only support Google",this.items=[],this.user=JSON.parse(localStorage.getItem("user")),console.log(this.user)}return e.prototype.login=function(){var e=this,t=void 0;t=new firebase.auth.GoogleAuthProvider,firebase.auth().signInWithPopup(t).then(function(t){e.authToken=t.credential.accessToken,e.user=t.user,localStorage.setItem("user",JSON.stringify(t.user)),e.userLoggedIn=!0,console.log(e.user)}).catch(function(e){e.code,e.message,e.email,e.credential})},e.prototype.logout=function(){var e=this;firebase.auth().signOut().then(function(){e.userLoggedIn=!1,localStorage.clear(),e.user=null}).catch(function(e){throw new Error(e)})},e}()}),define("contactme/contactme",["exports"],function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});e.Contactme=function e(){t(this,e),this.message="You can contact me by calling xxxxx"}}),define("dynamicloader/dynamic-loader",["exports"],function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});e.DynamicLoader=function(){function e(){t(this,e),this.components=[{id:"1",name:"Http Pratice",path:"../httppratice/http-pratice"},{id:"2",name:"About Me",path:"../aboutme/aboutme"},{id:"3",name:"Contact Me",path:"../contactme/contactme"},{id:"4",name:"Home",path:"../home/home"}],this.title="Dynamic Component Loading",this.description="It is quite often that you only know what components need to be loaded until runtime, Aurelia provides a dynamic loading element <compose> to accomplish that",this.items=[{description:"Add or Remove component on the fly"},{description:"Each component has its own state"}],this.viewModels=[]}return e.prototype.addComponent=function(e){this.viewModels.push(e)},e.prototype.removeComponent=function(e){this.viewModels.splice(e,1)},e}()}),define("home/home",["exports"],function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});e.Home=function(){function e(){t(this,e),this.message="Welcome to my Aurelia Pratices",this.style="default",this.description="Please click on the following cards to see what the pratice is"}return e.prototype.attached=function(){console.log("attached")},e.prototype.activated=function(){console.log("activated")},e.prototype.created=function(){console.log("created"),this.screenWidth=screen.width-100},e.prototype.activate=function(){console.log("activate"),this.screenWidth=screen.width-100},e.prototype.canActivate=function(){console.log("canActivate")},e}()}),define("httppratice/http-pratice",["exports","../modules/youtube.service","aurelia-framework"],function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.HttpPratice=void 0;var o,r;e.HttpPratice=(o=(0,i.inject)(t.YoutubeService))(r=function(){function e(t){n(this,e),this.term="",this.youtubeService=t,this.title="Http Pratice",this.description="This pratice is to use the build in aurelia-fetch-client to fetch the videos from youtube by using youtube api. ",this.items=[{description:"Create module to talk to youtube api"},{description:"Use dependancy injection to inject the youtube module"},{description:"Use Rxjs to handle the onkeyup event with conditions of: wait for 300ms pause in events, ignore if next search term is same as previous"}]}return e.prototype.onkeyup=function(){var e=this;this.youtubeService.fetch(this.term).then(function(e){return e.json()}).then(function(t){e.videos=t.items})},e}())||r}),define("modules/youtube.service",["exports","aurelia-fetch-client"],function(e,t){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.YoutubeService=void 0;e.YoutubeService=function(){function e(){i(this,e),this.webapiUrl="https://www.googleapis.com/youtube/v3/search",this.api_key="AIzaSyDrPpZkJ6tBkdCemWS3jXu6zKTipcZA7SQ",this.client=new t.HttpClient}return e.prototype.fetch=function(e){console.log(e);var t=this.webapiUrl+"?q="+e+"&part=snippet&maxResults=25&key="+this.api_key,i=this.client.fetch(t);return console.log(i),i},e}()}),define("navbar/navbar",["exports","aurelia-framework"],function(e,t){"use strict";function i(e,t,i,n){i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(n):void 0})}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.Navbar=void 0;var o,r;e.Navbar=(o=function e(){n(this,e),i(this,"router",r,this)},r=function(e,t,i,n,o){var r={};return Object.keys(n).forEach(function(e){r[e]=n[e]}),r.enumerable=!!r.enumerable,r.configurable=!!r.configurable,("value"in r||r.initializer)&&(r.writable=!0),r=i.slice().reverse().reduce(function(i,n){return n(e,t,i)||i},r),o&&void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(o):void 0,r.initializer=void 0),void 0===r.initializer&&(Object.defineProperty(e,t,r),r=null),r}(o.prototype,"router",[t.bindable],{enumerable:!0,initializer:function(){return null}}),o)}),define("nosql/nosql",["exports"],function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});e.Nosql=function(){function e(){t(this,e),this.title="Using Database",this.description="This pratice is to connect to a nosql database and manage the data",this.items=[{description:"Use Firebase as the backend database"},{description:"Use form and validation to add and update data"}]}return e.prototype.getData=function(){var e=this;firebase.database().ref("/Makes").on("value",function(t){e.makes=t.val()},function(e){console.log("The read failed: "+e.code)})},e}()}),define("readme/read-me",["exports","aurelia-framework"],function(e,t){"use strict";function i(e,t,i,n){i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(n):void 0})}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t,i,n,o){var r={};return Object.keys(n).forEach(function(e){r[e]=n[e]}),r.enumerable=!!r.enumerable,r.configurable=!!r.configurable,("value"in r||r.initializer)&&(r.writable=!0),r=i.slice().reverse().reduce(function(i,n){return n(e,t,i)||i},r),o&&void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(o):void 0,r.initializer=void 0),void 0===r.initializer&&(Object.defineProperty(e,t,r),r=null),r}Object.defineProperty(e,"__esModule",{value:!0}),e.ReadMe=void 0;var r,a,s,l,c;e.ReadMe=(r=function(){function e(){n(this,e),i(this,"title",a,this),i(this,"description",s,this),i(this,"style",l,this),i(this,"items",c,this)}return e.prototype.contructor=function(){console.log("i am readme")},e}(),a=o(r.prototype,"title",[t.bindable],{enumerable:!0,initializer:function(){return"title goes here"}}),s=o(r.prototype,"description",[t.bindable],{enumerable:!0,initializer:function(){return"description goes here"}}),l=o(r.prototype,"style",[t.bindable],{enumerable:!0,initializer:function(){return"info"}}),c=o(r.prototype,"items",[t.bindable],{enumerable:!0,initializer:function(){return[]}}),r)}),define("resources/index",["exports"],function(e){"use strict";function t(e){}Object.defineProperty(e,"__esModule",{value:!0}),e.configure=t}),define("text!style.css",["module"],function(e){e.exports=".row{\r\n    margin: 0;\r\n}\r\n\r\n.navbar{\r\n    margin-bottom: 0px;\r\n    \r\n    font-size: 16px;\r\n}\r\n\r\nvideo {\r\n    width: 100%;\r\n    overflow: auto;\r\n    -webkit-overflow-scrolling: touch;\r\n    top:50px; /* start 470px below top left corner */\r\n    bottom: 0px; /* This is the trick - specify bottom instead of height */\r\n    left:0px;\r\n}\r\n\r\n.component-box{\r\n    margin: 10px 10px 10px 10px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    background-color: #fff;\r\n    border-color: #ddd;\r\n    border-width: 1px;\r\n    border-radius: 4px 4px 0 0;\r\n    -webkit-box-shadow: none;\r\n    box-shadow: none;\r\n    border-style: solid;\r\n}\r\n\r\n.grid{\r\n    margin-top: 20px;\r\n    display: block;\r\n}\r\n\r\n.grid-item{\r\n    width: 33.33%;\r\n    display: block;\r\n    float: left;\r\n}\r\n\r\n.pod__item__image {\r\n    position: relative;\r\n    width: 200px;\r\n    height: 200px;\r\n    margin: 0 auto 30px;\r\n    border-radius: 1000px;\r\n    overflow: hidden;\r\n    background-color: #003e69;\r\n}\r\n\r\n.pod__item__heading {\r\n    font-size: 20px;\r\n    line-height: 1em;\r\n    margin-bottom: .5em;\r\n    text-transform: uppercase;\r\n    color: #003e69;\r\n    text-align: center;\r\n        font-weight: 700;\r\n}\r\n\r\n.pod__item__heading1{\r\n    color: #116900;\r\n}\r\n\r\n.pod__item__heading2{\r\n    color: #003e69;\r\n}\r\n\r\n.pod__item__heading3{\r\n    color: #8a6d3b;\r\n}\r\n\r\n.pod__item__1{\r\n    background-color: #116900;\r\n}\r\n\r\n\r\n\r\n.pod__item__2{\r\n    background-color: #003e69;\r\n    color: #003e69;\r\n}\r\n\r\n.pod__item__3{\r\n    background-color: #8a6d3b;\r\n    color: #8a6d3b;\r\n}\r\n\r\n.pod__item__image__mask {\r\n    position: absolute;\r\n    top: 2px;\r\n    right: 2px;\r\n    bottom: 2px;\r\n    left: 2px;\r\n    background-color: #fff;\r\n    border-radius: 1000px;\r\n}\r\n\r\n.pod__item__image img {\r\n    width: 138px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%,-50%);\r\n    transform: translate(-50%,-50%);\r\n}\r\n\r\n.project-description {\r\n    min-height: 200px;\r\n    color: white;\r\n    margin: 0;\r\n    padding: 0;\r\n    background-image: -webkit-gradient(linear, top, from(#6E4D9B), to(#E82887));\r\n    background-image: -webkit-linear-gradient(top, #6E4D9B, #E82887);\r\n    background-image: -moz-linear-gradient(top, #6E4D9B, #E82887);\r\n    background-image: linear-gradient(to top, #6E4D9B, #E82887);\r\n}\r\n\r\n.project-description .big-title{\r\n    font-size: 40px;\r\n    text-align: center;\r\n    color: white;\r\n}\r\n\r\n.project-description .big-title .small{\r\n    font-size: 20px;\r\n    text-align: center;\r\n    color: white;\r\n}\r\n\r\n.project-description .content{\r\n    font-size: 20px;\r\n    text-align: center;\r\n    color: white;\r\n}\r\n\r\n\r\n/*Business Card Css */\r\n.business-card {\r\n  border: 1px solid #cccccc;\r\n  background: #f8f8f8;\r\n  padding: 10px;\r\n  border-radius: 4px;\r\n  margin-bottom: 10px;\r\n}\r\n.profile-img {\r\n  height: 120px;\r\n  background: white;\r\n}\r\n.job {\r\n  color: #666666;\r\n  font-size: 17px;\r\n}\r\n.mail {\r\n  font-size: 16px;\r\n }\r\n\r\n.col-sm-6{\r\n    padding-left: 0px;\r\n}"}),define("text!app.html",["module"],function(e){e.exports='<template><require from="navbar/navbar"></require><require from="style.css"></require><div class="row"><navbar router.bind="router"></navbar></div><div class="row router-view"><router-view></router-view></div></template>'}),define("text!authentication/authentication.html",["module"],function(e){e.exports='<template><require from="../readme/read-me"></require><div class="container"><read-me title.bind="title" description.bind="description" items.bind="items"></read-me><button click.trigger="login()" class="btn btn-primary">Login</button> <button click.trigger="logout()" class="btn btn-warning">Logout</button></div><br><div class="container" if.bind="user != undefined"><div class="row"><div class="col-sm-6"><div class="business-card"><div class="media"><div class="media-left"><img class="media-object img-circle profile-img" src="${user.photoURL}"></div><div class="media-body"><h2 class="media-heading">${user.displayName}</h2><div class="mail"><a href="mailto:daniel@bla.ch">${user.email}</a></div></div></div></div></div></div></div></template>'}),define("text!aboutme/aboutme.html",["module"],function(e){e.exports="<template><h1>${message}</h1></template>"}),define("text!contactme/contactme.html",["module"],function(e){e.exports="<template><h1>${message}</h1></template>"}),define("text!dynamicloader/dynamic-loader.html",["module"],function(e){e.exports='<template><require from="../readme/read-me"></require><div class="container"><read-me title.bind="title" description.bind="description" items.bind="items"></read-me><h3>Components to be loaded</h3><ul class="list-group"><li class="list-group-item" repeat.for="component of components"><div class="btn-group" role="group" aria-label="..." style="float:right;margin-bottom:5px"><button click.trigger="addComponent(component)" class="btn btn-sm btn-success">Add</button></div>${component.name}</li></ul></div><div class="row component-box" repeat.for="vm of viewModels"><button click.trigger="removeComponent($index)" class="btn btn-sm btn-danger">Remove</button><compose view-model.bind="vm.path"></compose></div></template>'}),define("text!home/home.html",["module"],function(e){e.exports='<template><div class="home"><video loop="" autoplay="" id="slider-video"><source src="https://s3-ap-southeast-2.amazonaws.com/tatts-group-website-storage/wp-content/uploads/2016/08/15114716/Tatts-Group-values-cutdown-960-V2.mp4" type="video/mp4">Your browser doesn\'t support HTML5 video tag</video><div class="container grid"><div class="grid-item grid__item--third"><div class="pod__item pod__item--purple js-wow fadeInUp" data-wow-delay="0.1s" data-wow-offset="20" data-wow-duration="1s" style="visibility:visible;animation-duration:1s;animation-delay:.1s;animation-name:fadeInUp"><div class="pod__item__image pod__item__1"><div class="pod__item__image__mask"><img src="../assets/images/testability.png" alt="testability"></div></div><h4 class="pod__item__heading pod__item__heading1">Testability</h4></div></div><div class="grid-item grid__item--third"><div class="pod__item pod__item--purple js-wow fadeInUp" data-wow-delay="0.1s" data-wow-offset="20" data-wow-duration="1s" style="visibility:visible;animation-duration:1s;animation-delay:.1s;animation-name:fadeInUp"><div class="pod__item__image pod__item__2"><div class="pod__item__image__mask"><img src="../assets/images/maintainability.jpg" alt="Maintainability"></div></div><h4 class="pod__item__heading pod__item__heading2">Maintainability</h4></div></div><div class="grid-item grid__item--third"><div class="pod__item pod__item--purple js-wow fadeInUp" data-wow-delay="0.1s" data-wow-offset="20" data-wow-duration="1s" style="visibility:visible;animation-duration:1s;animation-delay:.1s;animation-name:fadeInUp"><div class="pod__item__image pod__item__3"><div class="pod__item__image__mask"><img src="../assets/images/Extensibility.jpg" alt="Extensibility"></div></div><h4 class="pod__item__heading pod__item__heading3">Extensibility</h4></div></div></div><div class="project-description"><div class="big-title">Aurelia allows us to focus on business logic, not on the framework - so concise and simple, yet so powerful and flexible!<br><small class="small">Ats Uiboupin</small></div><div class="content">This site is mainly setup for study purpose, it including the following items<ul><li>Router</li><li>Use http module to send request</li></ul></div></div></div></template>'}),define("text!httppratice/http-pratice.html",["module"],function(e){e.exports='<template><require from="../readme/read-me"></require><div class="container"><read-me title.bind="title" description.bind="description" items.bind="items"></read-me><h3>Youtube Search</h3><div class="input-group"><span class="input-group-addon" id="basic-addon1">Search youtube</span> <input id="search-box" type="text" class="form-control" placeholder="" aria-describedby="basic-addon1" keyup.trigger="onkeyup()" value.bind="term"></div><div class="row" repeat.for="result of videos" style="margin-bottom:10px;margin-top:10px"><div class="col-md-6"><img src="${result.snippet.thumbnails.high.url}" class="img-rounded" alt=""></div><div class="col-md-6"><a href="https://www.youtube.com/watch?v=${result.id.videoId}" target="_blank"><h3>${result.snippet.title}</h3></a><p>${result.snippet.description}</p></div></div></div></template>'}),define("text!navbar/navbar.html",["module"],function(e){e.exports='<template><nav class="navbar navbar-default"><div class="container-fluid"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"><span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button> <a class="navbar-brand" href="#">Aurelia Pratices</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"><ul class="nav navbar-nav"><li repeat.for="row of router.navigation" class="${row.isActive ? \'active\' : \'\'}"><a href.bind="row.href">${ row.title }</a></li></ul></div></div></nav></template>'}),define("text!nosql/nosql.html",["module"],function(e){e.exports='<template><require from="../readme/read-me"></require><div class="container"><read-me title.bind="title" description.bind="description" items.bind="items"></read-me><button click.trigger="getData()" class="btn btn-default">Get Data</button><table class="table" if.bind="makes.length > 0"><th>Country of Origin</th><th>Display</th><th>Make Id</th><tr repeat.for="record of makes"><td>${record.make_country}</td><td>${record.make_display}</td><td>${record.make_id}</td></tr></table></div></template>'}),define("text!readme/read-me.html",["module"],function(e){e.exports='<template><div class="panel panel-${style}" style="margin-top:10px"><div class="panel-heading"><span class="glyphicon glyphicon-info-sign"></span>${title}</div><div class="panel-body">${description}<p></p><b>Important things covered in this pratice</b><ul class="list-group"><li class="list-group-item" repeat.for="item of items">${item.description}</li></ul></div></div></template>'});