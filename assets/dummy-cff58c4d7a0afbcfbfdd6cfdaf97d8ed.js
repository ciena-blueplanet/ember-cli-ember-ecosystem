"use strict";define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,r,n,l){var a=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,a=t.default.Application.extend({modulePrefix:l.default.modulePrefix,podModulePrefix:l.default.podModulePrefix,Resolver:r.default}),(0,n.default)(a,l.default.modulePrefix),e.default=a}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,r){var n=r.default.APP.name,l=r.default.APP.version;e.default=t.default.extend({version:l,name:n})}),define("dummy/components/notification-container",["exports","ember-cli-notifications/components/notification-container"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/notification-message",["exports","ember-cli-notifications/components/notification-message","dummy/config/environment"],function(e,t,r){var n=r.default["ember-cli-notifications"]||{};e.default=t.default.extend({icons:n.icons||"font-awesome"})}),define("dummy/controllers/array",["exports","ember"],function(e,t){e.default=t.default.Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){e.default=t.default.Controller}),define("dummy/helpers/and",["exports","ember","ember-truth-helpers/helpers/and"],function(e,t,r){var n=null;t.default.Helper?n=t.default.Helper.helper(r.andHelper):t.default.HTMLBars.makeBoundHelper&&(n=t.default.HTMLBars.makeBoundHelper(r.andHelper)),e.default=n}),define("dummy/helpers/eq",["exports","ember","ember-truth-helpers/helpers/equal"],function(e,t,r){var n=null;t.default.Helper?n=t.default.Helper.helper(r.equalHelper):t.default.HTMLBars.makeBoundHelper&&(n=t.default.HTMLBars.makeBoundHelper(r.equalHelper)),e.default=n}),define("dummy/helpers/gt",["exports","ember","ember-truth-helpers/helpers/gt"],function(e,t,r){var n=null;t.default.Helper?n=t.default.Helper.helper(r.gtHelper):t.default.HTMLBars.makeBoundHelper&&(n=t.default.HTMLBars.makeBoundHelper(r.gtHelper)),e.default=n}),define("dummy/helpers/gte",["exports","ember","ember-truth-helpers/helpers/gte"],function(e,t,r){var n=null;t.default.Helper?n=t.default.Helper.helper(r.gteHelper):t.default.HTMLBars.makeBoundHelper&&(n=t.default.HTMLBars.makeBoundHelper(r.gteHelper)),e.default=n}),define("dummy/helpers/is-array",["exports","ember","ember-truth-helpers/helpers/is-array"],function(e,t,r){var n=null;t.default.Helper?n=t.default.Helper.helper(r.isArrayHelper):t.default.HTMLBars.makeBoundHelper&&(n=t.default.HTMLBars.makeBoundHelper(r.isArrayHelper)),e.default=n}),define("dummy/helpers/lt",["exports","ember","ember-truth-helpers/helpers/lt"],function(e,t,r){var n=null;t.default.Helper?n=t.default.Helper.helper(r.ltHelper):t.default.HTMLBars.makeBoundHelper&&(n=t.default.HTMLBars.makeBoundHelper(r.ltHelper)),e.default=n}),define("dummy/helpers/lte",["exports","ember","ember-truth-helpers/helpers/lte"],function(e,t,r){var n=null;t.default.Helper?n=t.default.Helper.helper(r.lteHelper):t.default.HTMLBars.makeBoundHelper&&(n=t.default.HTMLBars.makeBoundHelper(r.lteHelper)),e.default=n}),define("dummy/helpers/not-eq",["exports","ember","ember-truth-helpers/helpers/not-equal"],function(e,t,r){var n=null;t.default.Helper?n=t.default.Helper.helper(r.notEqualHelper):t.default.HTMLBars.makeBoundHelper&&(n=t.default.HTMLBars.makeBoundHelper(r.notEqualHelper)),e.default=n}),define("dummy/helpers/not",["exports","ember","ember-truth-helpers/helpers/not"],function(e,t,r){var n=null;t.default.Helper?n=t.default.Helper.helper(r.notHelper):t.default.HTMLBars.makeBoundHelper&&(n=t.default.HTMLBars.makeBoundHelper(r.notHelper)),e.default=n}),define("dummy/helpers/or",["exports","ember","ember-truth-helpers/helpers/or"],function(e,t,r){var n=null;t.default.Helper?n=t.default.Helper.helper(r.orHelper):t.default.HTMLBars.makeBoundHelper&&(n=t.default.HTMLBars.makeBoundHelper(r.orHelper)),e.default=n}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("dummy/helpers/xor",["exports","ember","ember-truth-helpers/helpers/xor"],function(e,t,r){var n=null;t.default.Helper?n=t.default.Helper.helper(r.xorHelper):t.default.HTMLBars.makeBoundHelper&&(n=t.default.HTMLBars.makeBoundHelper(r.xorHelper)),e.default=n}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,r){e.default={name:"App Version",initialize:(0,t.default)(r.default.APP.name,r.default.APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/ember-cli-mirage",["exports","ember-cli-mirage/utils/read-modules","dummy/config/environment","dummy/mirage/config","ember-cli-mirage/server","lodash/object/assign"],function(e,t,r,n,l,a){function i(){var e=arguments.length<=0||void 0===arguments[0]?r.default:arguments[0],i=e.environment,o=(0,t.default)(e.modulePrefix),u=(0,a.default)(o,{environment:i,baseConfig:n.default,testConfig:n.testConfig});return new l.default(u)}function o(e,t){var r="undefined"!=typeof t.enabled,n=u(e,t);return r?t.enabled:n}function u(e,t){var r="development"===e&&!t.usingProxy,n="test"===e;return r||n}e.startMirage=i,e.default={name:"ember-cli-mirage",initialize:function(e){if(arguments.length>1){arguments[0],arguments[1]}o(r.default.environment,r.default["ember-cli-mirage"])&&i(r.default)}}}),define("dummy/initializers/ember-css-modules",["exports","ember-css-modules/initializers/ember-css-modules"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,r){function n(){var e=arguments[1]||arguments[0];if(r.default.exportApplicationGlobal!==!1){var n,l=r.default.exportApplicationGlobal;n="string"==typeof l?l:t.default.String.classify(r.default.modulePrefix),window[n]||(window[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[n]}}))}}e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("dummy/initializers/notifications",["exports","ember","ember-cli-notifications/services/notification-messages-service"],function(e,t,r){e.default={name:"notification-messages-service",initialize:function(){var e=arguments[1]||arguments[0];return t.default.Service?(e.register("service:notification-messages",r.default),e.inject("component:notification-container","notifications","service:notification-messages"),void e.inject("component:notification-message","notifications","service:notification-messages")):(e.register("notification-messages:service",r.default),void["controller","component","route","router","service"].forEach(function(t){e.inject(t,"notifications","notification-messages:service")}))}}}),define("dummy/initializers/truth-helpers",["exports","ember","ember-truth-helpers/utils/register-helper","ember-truth-helpers/helpers/and","ember-truth-helpers/helpers/or","ember-truth-helpers/helpers/equal","ember-truth-helpers/helpers/not","ember-truth-helpers/helpers/is-array","ember-truth-helpers/helpers/not-equal","ember-truth-helpers/helpers/gt","ember-truth-helpers/helpers/gte","ember-truth-helpers/helpers/lt","ember-truth-helpers/helpers/lte"],function(e,t,r,n,l,a,i,o,u,d,m,p,s){function f(){t.default.Helper||((0,r.registerHelper)("and",n.andHelper),(0,r.registerHelper)("or",l.orHelper),(0,r.registerHelper)("eq",a.equalHelper),(0,r.registerHelper)("not",i.notHelper),(0,r.registerHelper)("is-array",o.isArrayHelper),(0,r.registerHelper)("not-eq",u.notEqualHelper),(0,r.registerHelper)("gt",d.gtHelper),(0,r.registerHelper)("gte",m.gteHelper),(0,r.registerHelper)("lt",p.ltHelper),(0,r.registerHelper)("lte",s.lteHelper))}e.initialize=f,e.default={name:"truth-helpers",initialize:f}}),define("dummy/mirage/config",["exports"],function(e){e.default=function(){this.passthrough()}}),define("dummy/mirage/factories/contact",["exports","ember-cli-mirage"],function(e,t){e.default=t.default.Factory.extend({})}),define("dummy/mirage/scenarios/default",["exports"],function(e){e.default=function(){}}),define("dummy/mirage/serializers/application",["exports","ember-cli-mirage"],function(e,t){e.default=t.JSONAPISerializer.extend({})}),define("dummy/pods/application/controller",["exports","ember"],function(e,t){e.default=t.default.Controller.extend({})}),define("dummy/pods/application/route",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("dummy/pods/application/template",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@2.8.0",loc:{source:null,start:{line:2,column:2},end:{line:4,column:2}},moduleName:"dummy/pods/application/template.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("    ");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(t,1,1,r),n},statements:[["inline","notification-message",[],["notification",["subexpr","@mut",[["get","notification",["loc",[null,[3,40],[3,52]]],0,0,0,0]],[],[],0,0]],["loc",[null,[3,4],[3,54]]],0,0]],locals:["notification"],templates:[]}}();return{meta:{revision:"Ember@2.8.0",loc:{source:null,start:{line:1,column:0},end:{line:11,column:6}},moduleName:"dummy/pods/application/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createElement("div");e.setAttribute(r,"class","dummy-notification-container");var n=e.createTextNode("\n");e.appendChild(r,n);var n=e.createComment("");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n\n");e.appendChild(t,r);var r=e.createElement("div");e.setAttribute(r,"class","dummy-body");var n=e.createTextNode("\n  ");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"class","dummy-content");var l=e.createTextNode("\n    ");e.appendChild(n,l);var l=e.createComment("");e.appendChild(n,l);var l=e.createTextNode("\n  ");e.appendChild(n,l),e.appendChild(r,n);var n=e.createTextNode("\n");return e.appendChild(r,n),e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(2);return n[0]=e.createMorphAt(e.childAt(t,[0]),1,1),n[1]=e.createMorphAt(e.childAt(t,[2,1]),1,1),n},statements:[["block","each",[["get","notifications",["loc",[null,[2,10],[2,23]]],0,0,0,0]],[],0,null,["loc",[null,[2,2],[4,11]]]],["content","outlet",["loc",[null,[9,4],[9,14]]],0,0,0,0]],locals:[],templates:[e]}}())}),define("dummy/pods/demo/controller",["exports","ember"],function(e,t){e.default=t.default.Controller.extend({})}),define("dummy/pods/demo/route",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("dummy/pods/demo/template",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.8.0",loc:{source:null,start:{line:1,column:0},end:{line:3,column:0}},moduleName:"dummy/pods/demo/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("cli-ember-ecosystem testbed\n");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(t,1,1,r),n},statements:[["content","cli-ember-ecosystem",["loc",[null,[2,0],[2,23]]],0,0,0,0]],locals:[],templates:[]}}())}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,r){var n=t.default.Router.extend({location:r.default.locationType});n.map(function(){this.route("demo",{path:"/"})}),e.default=n}),define("dummy/transitions",["exports"],function(e){e.default=function(){}}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var r=t+"/config/environment",n=document.querySelector('meta[name="'+r+'"]').getAttribute("content"),l=JSON.parse(unescape(n)),a={default:l};return Object.defineProperty(a,"__esModule",{value:!0}),a}catch(e){throw new Error('Could not read config from meta tag with name "'+r+'".')}}),runningTests||require("dummy/app").default.create({name:"ember-cli-ember-ecosystem",version:"v0.1.0"});