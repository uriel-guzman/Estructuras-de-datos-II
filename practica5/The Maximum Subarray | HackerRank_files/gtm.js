
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"45",
  
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){var b={\"UA-45092266-19\":{test_id:\"cd2\",question_id:\"cd3\",role_name:\"cd9\"},\"UA-45092266-27\":{interview_id:\"cd13\"},\"UA-45092266-26\":{company_slug:\"cd1\",job_unique_id:\"cd2\",role_name:\"cd3\",location_name:\"cd4\",country_id:\"cd5\",badge_id:\"cd6\",experience_years:\"cd7\",skill_name:\"cd8\"}};return b[a]}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,d){var b=null;if(a.matches(\"a\")||a.matches(\"button\"))b=a.innerText;var e=a.getAttribute(\"data-event-category\")||\"Default\",f=a.getAttribute(\"data-event-action\")||\"Click\";b=a.getAttribute(\"data-event-label\")||b;var c=Number(a.getAttribute(\"data-event-value\"));isNaN(c)\u0026\u0026(c=null);var g=null!==a.getAttribute(\"data-click-event-enabled\")||a.matches(\"a\")||a.matches(\"button\"),h=null!==a.getAttribute(\"data-click-event-disabled\");return a={event:d,element:a,eventCategory:e,eventAction:f,\neventLabel:b,eventValue:c,eventEnabled:g,eventDisabled:h}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b){var c=a.getAttribute(\"data-event-category\")||\"Default\",d=a.getAttribute(\"data-event-action\")||\"Hover\",e=a.getAttribute(\"data-event-label\")||null,f=Number(a.getAttribute(\"data-event-value\"))||null,g=null!==a.getAttribute(\"data-hover-event-enabled\");return a={event:b,element:a,eventCategory:c,eventAction:d,eventLabel:e,eventValue:f,eventEnabled:g}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return a?a.hasAttribute(\"data-click-event-enabled\")||a.matches(\"a\")||a.matches(\"button\"):!1}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b){for(;a\u0026\u0026!a.matches(\"body\")\u0026\u0026!b(a);)a=a.parentElement;return b(a)?a:null}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return a?a.hasAttribute(\"data-hover-event-enabled\"):!1}})();"]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gaUserId"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__c",
      "vtp_value":"UA-45092266-11"
    },{
      "function":"__c",
      "vtp_value":"UA-45092266-19"
    },{
      "function":"__c",
      "vtp_value":"UA-45092266-25"
    },{
      "function":"__c",
      "vtp_value":"UA-45092266-27"
    },{
      "function":"__c",
      "vtp_value":"UA-45092266-26"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",8],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^\/work\/create_account","value",["macro",9]],["map","key","^\/work\/(.*)","value",["macro",10]],["map","key","^\/x\/(.*)","value",["macro",10]],["map","key","^\/test\/(.*)","value",["macro",11]],["map","key","^\/paper\/(.*)","value",["macro",12]],["map","key","^\\\/(?!(recruit|tests|ent)(\\\/|\\?|$))(.*)","value",["macro",13]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"companyId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"company_unique_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd13"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd1"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",14],
      "vtp_defaultValue":"null",
      "vtp_map":["list",["map","key",["macro",10],"value",["macro",15]],["map","key",["macro",11],"value",["macro",16]],["map","key",["macro",12],"value",["macro",17]],["map","key",["macro",13],"value",["macro",18]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd2"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"test_unique_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userId"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",14],
      "vtp_defaultValue":"null",
      "vtp_map":["list",["map","key",["macro",10],"value",["macro",20]],["map","key",["macro",11],"value",["macro",21]],["map","key",["macro",12],"value",["macro",22]],["map","key",["macro",13],"value",["macro",20]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd3"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",14],
      "vtp_defaultValue":"null",
      "vtp_map":["list",["map","key",["macro",10],"value",["macro",24]],["map","key",["macro",12],"value",["macro",15]],["map","key",["macro",13],"value",["macro",24]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"attempt_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userRole"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd4"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",14],
      "vtp_defaultValue":"null",
      "vtp_map":["list",["map","key",["macro",10],"value",["macro",22]],["map","key",["macro",11],"value",["macro",26]],["map","key",["macro",12],"value",["macro",27]],["map","key",["macro",13],"value",["macro",28]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"freeTrialSegment"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd5"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",14],
      "vtp_defaultValue":"null",
      "vtp_map":["list",["map","key",["macro",10],"value",["macro",30]],["map","key",["macro",13],"value",["macro",31]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"stripePlan"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd5"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",14],
      "vtp_defaultValue":"null",
      "vtp_map":["list",["map","key",["macro",10],"value",["macro",33]],["map","key",["macro",13],"value",["macro",34]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"companyOwner"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd4"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",14],
      "vtp_defaultValue":"null",
      "vtp_map":["list",["map","key",["macro",10],"value",["macro",36]],["map","key",["macro",13],"value",["macro",37]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd8"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",14],
      "vtp_map":["list",["map","key",["macro",13],"value",["macro",39]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cd9"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",14],
      "vtp_map":["list",["map","key",["macro",10],"value",["macro",41]]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",14],
      "vtp_map":["list",["map","key",["macro",10],"value",["macro",27]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"skadoosh"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",14],
      "vtp_map":["list",["map","key",["macro",10],"value",["macro",44]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"internalAccount"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",14],
      "vtp_map":["list",["map","key",["macro",10],"value",["macro",46]]]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","userId","value",["macro",7]]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",19]],["map","index","2","dimension",["macro",23]],["map","index","3","dimension",["macro",25]],["map","index","4","dimension",["macro",29]],["map","index","5","dimension",["macro",32]],["map","index","6","dimension",["macro",35]],["map","index","7","dimension",["macro",38]],["map","index","8","dimension",["macro",40]],["map","index","9","dimension",["macro",42]],["map","index","10","dimension",["macro",43]],["map","index","11","dimension",["macro",45]],["map","index","12","dimension",["macro",47]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",14],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"null",
      "vtp_name":"eventCategory"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",49],
      "vtp_defaultValue":"null",
      "vtp_map":["list",["map","key","Test Health Dashboard","value","Test Health Dashboard"],["map","key","Default","value","Default"],["map","key","In-Product Tour","value","In-Product Tour"],["map","key","Test Creation Wizard","value","Test Creation Wizard"],["map","key","In-Product Payments","value","In-Product Payments"],["map","key","RBA Question Flow","value","RBA Question Flow"],["map","key","Candidate Invitations Management","value","Candidate Invitations Management"],["map","key","Candidate Login Page","value","Candidate Login Page"],["map","key","Question Listing Page","value","Question Listing Page"],["map","key","Question Details Page","value","Question Details Page"],["map","key","Sign-Up Forms","value","Sign-Up Forms"],["map","key","Test Edit Page","value","Test Edit Page"],["map","key","Simplified Test Creation Wizard","value","Simplified Test Creation Wizard"],["map","key","Test From Scratch Page","value","Test From Scratch Page"],["map","key","Account Settings","value","Account Settings"],["map","key","Library Page","value","Library Page"],["map","key","Cancellation of Start-Up Plan","value","Cancellation of Start-Up Plan"],["map","key","Codepair","value","Codepair"],["map","key","HRW Login Page","value","HRW Login Page"],["map","key","HRC Jobs","value","HRC Jobs"],["map","key","Test Report","value","Test Report"],["map","key","HRC Skills","value","HRC Skills"],["map","key","HRC Profile","value","HRC Profile"],["map","key","HRC Interview Kit","value","HRC Interview Kit"],["map","key","HRC Challenges","value","HRC Challenges"],["map","key","HRC Phone Verification","value","HRC Phone Verification"],["map","key","Candidates","value","Candidates"],["map","key","External Pricing Page","value","External Pricing Page"],["map","key","Skills Panel","value","Skills Panel"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"null",
      "vtp_name":"eventAction"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",51],
      "vtp_defaultValue":"null",
      "vtp_map":["list",["map","key","jsTrackClick","value","jsTrackClick"],["map","key","jsTrack","value","jsTrack"],["map","key","jsTrackView","value","jsTrackView"],["map","key","jsTrackErrors","value","jsTrackErrors"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"null",
      "vtp_name":"eventValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"null",
      "vtp_name":"eventLabel"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){var c=",["escape",["macro",48],8,16],".vtp_trackingId;c=",["escape",["macro",0],8,16],"(c);a=a.attributes;var e={};if(c)for(var b=0;b\u003Ca.length;b++)if(a[b].name.match(\"^data-cd-\")){var d=a[b].name.replace(\"data-cd-\",\"\").replace(\/-\/g,\"_\"),f=c[d];f?(d=a[b].value,e[f]=d):console.error(\"Custom Dimension: \"+d+\" doesn't exist in property: \"+",["escape",["macro",48],8,16],".vtp_trackingId)}return e}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b,c){b=c(a,b);a=",["escape",["macro",55],8,16],"(a);return Object.assign({},b,a)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){var b=",["escape",["macro",3],8,16],";if(a=",["escape",["macro",4],8,16],"(a.target,b))b=",["escape",["macro",1],8,16],",a=",["escape",["macro",56],8,16],"(a,\"custom.gtm.click\",b),!a.eventDisabled\u0026\u0026a.eventEnabled\u0026\u0026window.dataLayer.push(a)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){var b=",["escape",["macro",5],8,16],";if(a=",["escape",["macro",4],8,16],"(a.target,b))b=",["escape",["macro",2],8,16],",a=",["escape",["macro",56],8,16],"(a,\"custom.gtm.hover\",b),a.eventEnabled\u0026\u0026window.dataLayer.push(a)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){var c=",["escape",["macro",48],8,16],".vtp_trackingId;c=",["escape",["macro",0],8,16],"(c);var b=a.eventAction||\"\";b=\"jsTrack\"+b;b={event:\"custom.gtm.jsTrack\",eventAction:b,eventCategory:a.eventCategory,eventLabel:a.eventLabel,eventValue:a.eventValue};a=a.eventAttrs;if(void 0!=c\u0026\u0026void 0!=a){var e=Object.keys(a),f;for(f in e){var d=e[f],g=c[d];d=a[d];void 0!=g\u0026\u0026(b[g]=d)}}window.dataLayer\u0026\u0026\"function\"===typeof window.dataLayer.push\u0026\u0026window.dataLayer.push(b)}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"false",
      "vtp_name":"clickEventDisabled"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"false",
      "vtp_name":"clickEventEnabled"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventEnabled"
    },{
      "function":"__e"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",63],
      "vtp_map":["list",["map","key","gtm.js","value","true"],["map","key","identify","value","true"],["map","key","gtm.dom","value","true"],["map","key","gtm.historyChange","value","true"],["map","key","gtm.load","value","true"],["map","key","track","value","true"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){",["escape",["macro",64],8,16],"||\"null\"!==",["escape",["macro",50],8,16],"||console.error(\"",["escape",["macro",63],7]," - Category: '",["escape",["macro",49],7],"' does not exist\")})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    }],
  "tags":[{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",48],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",53],
      "vtp_eventCategory":["macro",49],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":["macro",51],
      "vtp_eventLabel":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":9
    },{
      "function":"__hl",
      "tag_id":11
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction debounce(b,f,c){var a;return function(){var d=this,e=arguments,g=function(){a=null;c||b.apply(d,e)},h=c\u0026\u0026!a;clearTimeout(a);a=setTimeout(g,f);h\u0026\u0026b.apply(d,e)}}(function(){document.addEventListener(\"click\",debounce(",["escape",["macro",57],8,16],",500,!0),!0);document.addEventListener(\"mouseenter\",debounce(",["escape",["macro",58],8,16],",1E3),!0);window.jsTrackGoogleAnalytics\u0026\u0026\"function\"!==typeof window.jsTrackGoogleAnalytics||(window.jsTrackGoogleAnalytics=",["escape",["macro",59],8,16],")})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":8
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EElement.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);\"function\"!=typeof Object.assign\u0026\u0026Object.defineProperty(Object,\"assign\",{value:function(d,f){if(null==d)throw new TypeError(\"Cannot convert undefined or null to object\");for(var e=Object(d),b=1;b\u003Carguments.length;b++){var a=arguments[b];if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)\u0026\u0026(e[c]=a[c])}return e},writable:!0,configurable:!0});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":10
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"gtm.historyChange"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",50],
      "arg1":"null"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"custom.gtm.click"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"custom.gtm.hover"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"custom.gtm.formSignUp"
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"null"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"custom.gtm.jsTrack"
    }],
  "rules":[
    [["if",0],["add",0]],
    [["if",1],["add",0,3,4,2]],
    [["if",3],["unless",2],["add",1]],
    [["if",4],["unless",2],["add",1]],
    [["if",5],["add",1]],
    [["if",7],["unless",2,6],["add",1]]]
},
"runtime":[]




};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ea;if("function"==typeof Object.setPrototypeOf)ea=Object.setPrototypeOf;else{var fa;a:{var ha={uf:!0},ia={};try{ia.__proto__=ha;fa=ia.uf;break a}catch(a){}fa=!1}ea=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ja=ea,ka=this||self,la=/^[\w+/_-]+[=]{0,2}$/,na=null;var oa=function(){},pa=function(a){return"function"==typeof a},g=function(a){return"string"==typeof a},qa=function(a){return"number"==typeof a&&!isNaN(a)},ra=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},q=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},va=function(a,b){if(a&&ra(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},wa=function(a,b){if(!qa(a)||
!qa(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ya=function(a,b){for(var c=new xa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},C=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},za=function(a){return Math.round(Number(a))||0},Aa=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ba=function(a){var b=[];if(ra(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ca=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Ea=function(){return(new Date).getTime()},xa=function(){this.prefix="gtm.";this.values={}};xa.prototype.set=function(a,b){this.values[this.prefix+a]=b};xa.prototype.get=function(a){return this.values[this.prefix+a]};
var Fa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ga=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ha=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ia=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ja=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Ka=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},La=function(a){var b=
[];C(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ma=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Na=function(a){if(null==a)return String(a);var b=Ma.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Oa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Pa=function(a){if(!a||"object"!=Na(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Oa(a,"constructor")&&!Oa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Oa(a,b)},D=function(a,b){var c=b||("array"==Na(a)?[]:{}),d;for(d in a)if(Oa(a,d)){var e=a[d];"array"==Na(e)?("array"!=Na(c[d])&&(c[d]=[]),c[d]=D(e,c[d])):Pa(e)?(Pa(c[d])||(c[d]={}),c[d]=D(e,c[d])):c[d]=e}return c};
var Qa=[],Ra={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Sa=function(a){return Ra[a]},Ta=/[\x00\x22\x26\x27\x3c\x3e]/g;var Xa=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Ya={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},bb=function(a){return Ya[a]};Qa[7]=function(a){return String(a).replace(Xa,bb)};
Qa[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Xa,bb)+"'"}};var jb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,kb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},mb=function(a){return kb[a]};Qa[16]=function(a){return a};var ob;
var pb=[],qb=[],rb=[],sb=[],tb=[],ub={},vb,xb,yb,zb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Ab=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=ub[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):ob(c,e,b)},Cb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Bb(a[e],b,c));
return d},Db=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=ub[b];return c?c.priorityOverride||0:0},Bb=function(a,b,c){if(ra(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Bb(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=pb[f];if(!h||b.Qc(h))return;c[f]=!0;try{var k=Cb(h,b,c);k.vtp_gtmEventId=b.id;d=Ab(k,b);yb&&(d=yb.Tf(d,k))}catch(y){b.xe&&b.xe(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Bb(a[l],b,c)]=Bb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var r=Bb(a[n],b,c);xb&&(m=m||r===xb.yb);d.push(r)}return xb&&m?xb.Wf(d):d.join("");case "escape":d=Bb(a[1],b,c);if(xb&&ra(a[1])&&"macro"===a[1][0]&&xb.ug(a))return xb.Og(d);d=String(d);for(var t=2;t<a.length;t++)Qa[a[t]]&&(d=Qa[a[t]](d));return d;case "tag":var p=a[1];if(!sb[p])throw Error("Unable to resolve tag reference "+p+".");return d={ke:a[2],
index:p};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=Eb(u,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Eb=function(a,b,c){try{return vb(Cb(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Fb=function(){var a=function(b){return{toString:function(){return b}}};return{vd:a("convert_case_to"),wd:a("convert_false_to"),xd:a("convert_null_to"),yd:a("convert_true_to"),zd:a("convert_undefined_to"),wh:a("debug_mode_metadata"),sa:a("function"),Ve:a("instance_name"),Ze:a("live_only"),af:a("malware_disabled"),bf:a("metadata"),xh:a("original_vendor_template_id"),ff:a("once_per_event"),Hd:a("once_per_load"),Pd:a("setup_tags"),Rd:a("tag_id"),Sd:a("teardown_tags")}}();var Gb=null,Kb=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}var c=[],d=[];Gb=Hb(a);for(var e=0;e<qb.length;e++){var f=qb[e],h=Jb(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var m=[],n=0;n<sb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Jb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Gb(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=Gb(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},Hb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Eb(rb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var F=window,G=document,ec=navigator,fc=G.currentScript&&G.currentScript.src,gc=function(a,b){var c=F[a];F[a]=void 0===c?b:c;return F[a]},hc=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},ic=function(a,b,c){var d=G.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;hc(d,b);c&&(d.onerror=c);var e;if(null===na)b:{var f=ka.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&la.test(k)){na=k;break b}}na=""}e=na;e&&d.setAttribute("nonce",e);var l=G.getElementsByTagName("script")[0]||G.body||G.head;l.parentNode.insertBefore(d,l);return d},jc=function(){if(fc){var a=fc.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},kc=function(a,b){var c=G.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=G.body&&G.body.lastChild||
G.body||G.head;d.parentNode.insertBefore(c,d);hc(c,b);void 0!==a&&(c.src=a);return c},lc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},mc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},nc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},I=function(a){F.setTimeout(a,0)},oc=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},pc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},qc=function(a){var b=G.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},rc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},tc=function(a){ec.sendBeacon&&ec.sendBeacon(a)||lc(a)},uc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var wc=function(a){return vc?G.querySelectorAll(a):null},xc=function(a,b){if(!vc)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!G.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},yc=!1;if(G.querySelectorAll)try{var zc=G.querySelectorAll(":root");zc&&1==zc.length&&zc[0]==G.documentElement&&(yc=!0)}catch(a){}var vc=yc;var J={ra:"_ee",Ah:"_uci",uc:"event_callback",xb:"event_timeout",D:"gtag.config",Y:"allow_ad_personalization_signals",vc:"restricted_data_processing",Ra:"allow_google_signals",Z:"cookie_expires",wb:"cookie_update",Sa:"session_duration",ca:"user_properties"};J.pe=[J.Y,J.Ra,J.wb];J.se=[J.Z,J.xb,J.Sa];var Qc=/[A-Z]+/,Rc=/\s/,Sc=function(a){if(g(a)&&(a=Ca(a),!Rc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Qc.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],o:d}}}}},Uc=function(a){for(var b={},c=0;c<a.length;++c){var d=Sc(a[c]);d&&(b[d.id]=d)}Tc(b);var e=[];C(b,function(f,h){e.push(h)});return e};
function Tc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.o[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Vc={},Wc=null,Xc=Math.random();Vc.s="GTM-NLXX3SZ";Vc.Cb="3b2";var Yc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Zc="www.googletagmanager.com/gtm.js";var $c=Zc,bd=null,cd=null,dd=null,ed="//www.googletagmanager.com/a?id="+Vc.s+"&cv=45",fd={},gd={},hd=function(){var a=Wc.sequence||0;Wc.sequence=a+1;return a};var id={},jd=function(a,b){id[a]=id[a]||[];id[a][b]=!0},kd=function(a){for(var b=[],c=id[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var ld=function(){return"&tc="+sb.filter(function(a){return a}).length},od=function(){md||(md=F.setTimeout(nd,500))},nd=function(){md&&(F.clearTimeout(md),md=void 0);void 0===pd||qd[pd]&&!rd&&!sd||(td[pd]||ud.wg()||0>=vd--?(jd("GTM",1),td[pd]=!0):(ud.Xg(),lc(wd()),qd[pd]=!0,xd=yd=sd=rd=""))},wd=function(){var a=pd;if(void 0===a)return"";var b=kd("GTM"),c=kd("TAGGING");return[zd,qd[a]?"":"&es=1",Ad[a],b?"&u="+b:"",c?"&ut="+c:"",ld(),rd,sd,yd,xd,"&z=0"].join("")},Bd=function(){return[ed,"&v=3&t=t",
"&pid="+wa(),"&rv="+Vc.Cb].join("")},Cd="0.005000">Math.random(),zd=Bd(),Dd=function(){zd=Bd()},qd={},rd="",sd="",xd="",yd="",pd=void 0,Ad={},td={},md=void 0,ud=function(a,b){var c=0,d=0;return{wg:function(){if(c<a)return!1;Ea()-d>=b&&(c=0);return c>=a},Xg:function(){Ea()-d>=b&&(c=0);c++;d=Ea()}}}(2,1E3),vd=1E3,Ed=function(a,b){if(Cd&&!td[a]&&pd!==a){nd();pd=a;xd=rd="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Ad[a]="&e="+c+"&eid="+a;od()}},Fd=function(a,b,c){if(Cd&&
!td[a]&&b){a!==pd&&(nd(),pd=a);var d,e=String(b[Fb.sa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;rd=rd?rd+"."+f:"&tr="+f;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var k=(ub[h]?"1":"2")+d;xd=xd?xd+"."+k:"&ti="+k;od();2022<=wd().length&&nd()}},Gd=function(a,b,c){if(Cd&&!td[a]){a!==pd&&(nd(),pd=a);var d=c+b;sd=
sd?sd+"."+d:"&epr="+d;od();2022<=wd().length&&nd()}};var Hd={},Id=new xa,Jd={},Kd={},Nd={name:"dataLayer",set:function(a,b){D(Ka(a,b),Jd);Ld()},get:function(a){return Md(a,2)},reset:function(){Id=new xa;Jd={};Ld()}},Md=function(a,b){if(2!=b){var c=Id.get(a);if(Cd){var d=Od(a);c!==d&&jd("GTM",5)}return c}return Od(a)},Od=function(a,b,c){var d=a.split("."),e=!1,f=void 0;return e?f:Qd(d)},Qd=function(a){for(var b=Jd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Sd=function(a,b){Kd.hasOwnProperty(a)||(Id.set(a,b),D(Ka(a,b),Jd),Ld())},Ld=function(a){C(Kd,function(b,c){Id.set(b,c);D(Ka(b,void 0),Jd);D(Ka(b,c),Jd);a&&delete Kd[b]})},Td=function(a,b,c){Hd[a]=Hd[a]||{};var d=1!==c?Od(b):Id.get(b);"array"===Na(d)||"object"===Na(d)?Hd[a][b]=D(d):Hd[a][b]=d},Ud=function(a,b){if(Hd[a])return Hd[a][b]},Vd=function(a,b){Hd[a]&&delete Hd[a][b]};var Wd=function(){var a=!1;return a};var Q=function(a,b,c,d){return(2===Xd()||d||"http:"!=F.location.protocol?a:b)+c},Xd=function(){var a=jc(),b;if(1===a)a:{var c=$c;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=G.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var le=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),me={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},ne={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},oe="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var qe=function(a){var b=Md("gtm.whitelist");b&&jd("GTM",9);var c=b&&Ja(Ba(b),me),d=Md("gtm.blacklist");d||(d=Md("tagTypeBlacklist"))&&jd("GTM",3);
d?jd("GTM",8):d=[];pe()&&(d=Ba(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=q(Ba(d),"google")&&jd("GTM",2);var e=d&&Ja(Ba(d),ne),f={};return function(h){var k=h&&h[Fb.sa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=gd[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>q(c,k))if(l&&0<l.length)for(var r=
0;r<l.length;r++){if(0>q(c,l[r])){jd("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var p=0<=q(e,k);if(p)t=p;else{var u=ya(e,l||[]);u&&jd("GTM",10);t=u}}var v=!m||t;v||!(0<=q(l,"sandboxedScripts"))||c&&-1!==q(c,"sandboxedScripts")||(v=ya(e,oe));return f[k]=v}},pe=function(){return le.test(F.location&&F.location.hostname)};var re={Tf:function(a,b){b[Fb.vd]&&"string"===typeof a&&(a=1==b[Fb.vd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Fb.xd)&&null===a&&(a=b[Fb.xd]);b.hasOwnProperty(Fb.zd)&&void 0===a&&(a=b[Fb.zd]);b.hasOwnProperty(Fb.yd)&&!0===a&&(a=b[Fb.yd]);b.hasOwnProperty(Fb.wd)&&!1===a&&(a=b[Fb.wd]);return a}};var se={active:!0,isWhitelisted:function(){return!0}},te=function(a){var b=Wc.zones;!b&&a&&(b=Wc.zones=a());return b};var ue=function(){};var ve=!1,we=0,xe=[];function ye(a){if(!ve){var b=G.createEventObject,c="complete"==G.readyState,d="interactive"==G.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){ve=!0;for(var e=0;e<xe.length;e++)I(xe[e])}xe.push=function(){for(var f=0;f<arguments.length;f++)I(arguments[f]);return 0}}}function ze(){if(!ve&&140>we){we++;try{G.documentElement.doScroll("left"),ye()}catch(a){F.setTimeout(ze,50)}}}var Ae=function(a){ve?a():xe.push(a)};var Be={},Ce={},De=function(a,b,c,d){if(!Ce[a]||Yc[b]||"__zone"===b)return-1;var e={};Pa(d)&&(e=D(d,e));e.id=c;e.status="timeout";return Ce[a].tags.push(e)-1},Ee=function(a,b,c,d){if(Ce[a]){var e=Ce[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Fe(a){for(var b=Be[a]||[],c=0;c<b.length;c++)b[c]();Be[a]={push:function(d){d(Vc.s,Ce[a])}}}
var Ie=function(a,b,c){Ce[a]={tags:[]};pa(b)&&Ge(a,b);c&&F.setTimeout(function(){return Fe(a)},Number(c));return He(a)},Ge=function(a,b){Be[a]=Be[a]||[];Be[a].push(Ga(function(){return I(function(){b(Vc.s,Ce[a])})}))};function He(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ga(function(){b++;d&&b>=c&&Fe(a)})},Ff:function(){d=!0;b>=c&&Fe(a)}}};var Je=function(){function a(d){return!qa(d)||0>d?0:d}if(!Wc._li&&F.performance&&F.performance.timing){var b=F.performance.timing.navigationStart,c=qa(Nd.get("gtm.start"))?Nd.get("gtm.start"):0;Wc._li={cst:a(c-b),cbt:a(cd-b)}}};var Ne={},Oe=function(){return F.GoogleAnalyticsObject&&F[F.GoogleAnalyticsObject]},Pe=!1;
var Qe=function(a){F.GoogleAnalyticsObject||(F.GoogleAnalyticsObject=a||"ga");var b=F.GoogleAnalyticsObject;if(F[b])F.hasOwnProperty(b)||jd("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);F[b]=c}Je();return F[b]},Re=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Oe();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Te=function(a){},Se=function(){return F.GoogleAnalyticsObject||"ga"};var Ve=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var We=/:[0-9]+$/,Xe=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},$e=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Ye(a.protocol)||Ye(F.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:F.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||F.location.hostname).replace(We,"").toLowerCase());var f=b,h,k=Ye(a.protocol);f&&(f=String(f).toLowerCase());switch(f){case "url_no_fragment":h=Ze(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(We,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||jd("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=q(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=Xe(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},Ye=function(a){return a?a.replace(":","").toLowerCase():""},Ze=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
af=function(a){var b=G.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||jd("TAGGING",1),c="/"+c);var d=b.hostname.replace(We,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};function ff(a,b,c,d){var e=sb[a],f=gf(a,b,c,d);if(!f)return null;var h=Bb(e[Fb.Pd],c,[]);if(h&&h.length){var k=h[0];f=ff(k.index,{B:f,w:1===k.ke?b.terminate:f,terminate:b.terminate},c,d)}return f}
function gf(a,b,c,d){function e(){if(f[Fb.af])k();else{var w=Cb(f,c,[]),y=De(c.id,String(f[Fb.sa]),Number(f[Fb.Rd]),w[Fb.bf]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var A=Ea()-z;Fd(c.id,sb[a],"5");Ee(c.id,y,"success",A);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var A=Ea()-z;Fd(c.id,sb[a],"6");Ee(c.id,y,"failure",A);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;Fd(c.id,f,"1");var B=function(){var A=Ea()-z;Fd(c.id,f,"7");Ee(c.id,y,"exception",A);x||(x=!0,k())};var z=Ea();try{Ab(w,c)}catch(A){B(A)}}}var f=sb[a],h=b.B,k=b.w,l=b.terminate;if(c.Qc(f))return null;var m=Bb(f[Fb.Sd],c,[]);if(m&&m.length){var n=m[0],r=ff(n.index,{B:h,w:k,terminate:l},c,d);if(!r)return null;h=r;k=2===n.ke?l:r}if(f[Fb.Hd]||f[Fb.ff]){var t=f[Fb.Hd]?tb:c.gh,p=h,u=k;if(!t[a]){e=Ga(e);var v=hf(a,t,e);h=v.B;k=v.w}return function(){t[a](p,u)}}return e}
function hf(a,b,c){var d=[],e=[];b[a]=jf(d,e,c);return{B:function(){b[a]=kf;for(var f=0;f<d.length;f++)d[f]()},w:function(){b[a]=lf;for(var f=0;f<e.length;f++)e[f]()}}}function jf(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function kf(a){a()}function lf(a,b){b()};var of=function(a,b){for(var c=[],d=0;d<sb.length;d++)if(a.mb[d]){var e=sb[d];var f=b.add();try{var h=ff(d,{B:f,w:f,terminate:f},a,d);h?c.push({Je:d,Ee:Db(e),dg:h}):(mf(d,a),f())}catch(l){f()}}b.Ff();c.sort(nf);for(var k=0;k<c.length;k++)c[k].dg();return 0<c.length};function nf(a,b){var c,d=b.Ee,e=a.Ee;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Je,k=b.Je;f=h>k?1:h<k?-1:0}return f}
function mf(a,b){if(!Cd)return;var c=function(d){var e=b.Qc(sb[d])?"3":"4",f=Bb(sb[d][Fb.Pd],b,[]);f&&f.length&&c(f[0].index);Fd(b.id,sb[d],e);var h=Bb(sb[d][Fb.Sd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var pf=!1,qf=function(a,b,c,d,e){if("gtm.js"==b){if(pf)return!1;pf=!0}Ed(a,b);var f=Ie(a,d,e);Td(a,"event",1);Td(a,"ecommerce",1);Td(a,"gtm");var h={id:a,name:b,Qc:qe(c),mb:[],gh:[],xe:function(){jd("GTM",6)}};h.mb=Kb(h);var k=of(h,f);"gtm.js"!==b&&"gtm.sync"!==b||Te(Vc.s);if(!k)return k;for(var l=0;l<h.mb.length;l++)if(h.mb[l]){var m=sb[l];if(m&&!Yc[String(m[Fb.sa])])return!0}return!1};var sf=/^https?:\/\/www\.googletagmanager\.com/;function tf(){var a;return a}function vf(a,b){}
function uf(a){0!==a.indexOf("http://")&&0!==a.indexOf("https://")&&(a="https://"+a);"/"===a[a.length-1]&&(a=a.substring(0,a.length-1));return a}function wf(){var a=!1;return a};var xf=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.h={};this.globalConfig={};this.B=function(){};this.w=function(){}},yf=function(a){var b=new xf;b.eventModel=a;return b},zf=function(a,b){a.targetConfig=b;return a},Af=function(a,b){a.containerConfig=b;return a},Bf=function(a,b){a.h=b;return a},Cf=function(a,b){a.globalConfig=b;return a},Df=function(a,b){a.B=b;return a},Ef=function(a,b){a.w=b;return a};
xf.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.h[a])return this.h[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Ff=function(a){function b(e){C(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];C(c,function(e){d.push(e)});return d};var Gf=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},Jf=function(a,b,c,d){var e=Hf(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=If(e,function(f){return f.Mb},b);if(1===e.length)return e[0].id;e=If(e,function(f){return f.nb},c);return e[0]?e[0].id:void 0}};
function Kf(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=Gf(b,e).indexOf(c)}
var Nf=function(a,b,c,d,e,f,h){d=d||"auto";var k={path:c||"/"};e&&(k.expires=e);"none"!==d&&(k.domain=d);h&&(k.flags=h);var l;a:{var m=b,n;if(void 0==m)n=a+"=deleted; expires="+(new Date(0)).toUTCString();else{f&&(m=encodeURIComponent(m));var r=m;r&&1200<r.length&&(r=r.substring(0,1200));m=r;n=a+"="+m}var t=void 0,p=void 0,u="",v;for(v in k)if(k.hasOwnProperty(v)){var w=k[v];if(null!=w)switch(v){case "secure":w&&(n+="; secure");break;case "domain":t=w;break;case "flags":u=";"+w;break;default:"path"==
v&&(p=w),"expires"==v&&w instanceof Date&&(w=w.toUTCString()),n+="; "+v+"="+w}}if("auto"===t){for(var y=Lf(),x=0;x<y.length;++x){var B="none"!=y[x]?y[x]:void 0;if(!Mf(B,p)&&Kf(n+(B?"; domain="+B:"")+u,a,m)){l=!0;break a}}l=!1}else t&&"none"!=t&&(n+="; domain="+t),l=!Mf(t,p)&&Kf(n+u,a,m)}return l};function If(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}
function Hf(a,b){for(var c=[],d=Gf(a),e=0;e<d.length;e++){var f=d[e].split("."),h=f.shift();if(!b||-1!==b.indexOf(h)){var k=f.shift();k&&(k=k.split("-"),c.push({id:f.join("."),Mb:1*k[0]||1,nb:1*k[1]||1}))}}return c}
var Of=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Pf=/(^|\.)doubleclick\.net$/i,Mf=function(a,b){return Pf.test(document.location.hostname)||"/"===b&&Of.test(a)},Lf=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Pf.test(e)||Of.test(e)||a.push("none");return a};function Qf(){for(var a=Rf,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Sf(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Rf,Tf;function Uf(a){Rf=Rf||Sf();Tf=Tf||Qf();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,n=(h&15)<<2|k>>6,r=k&63;e||(r=64,d||(n=64));b.push(Rf[l],Rf[m],Rf[n],Rf[r])}return b.join("")}
function Vf(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Tf[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Rf=Rf||Sf();Tf=Tf||Qf();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Wf;var $f=function(){var a=Xf,b=Yf,c=Zf(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){mc(G,"mousedown",d);mc(G,"keyup",d);mc(G,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},ag=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Zf().decorators.push(f)},cg=function(a,b,c){for(var d=Zf().decorators,e={},f=0;f<d.length;++f){var h=
d[f],k;if(k=!c||h.forms)a:{var l=h.domains,m=a;if(l&&(h.sameHost||m!==G.location.hostname))for(var n=0;n<l.length;n++)if(l[n]instanceof RegExp){if(l[n].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[n])){k=!0;break a}k=!1}if(k){var r=h.placement;void 0==r&&(r=h.fragment?2:1);r===b&&Ha(e,h.callback())}}return e},Zf=function(){var a=gc("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var dg=/(.*?)\*(.*?)\*(.*)/,eg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,fg=/^(?:www\.|m\.|amp\.)+/,gg=/([^?#]+)(\?[^#]*)?(#.*)?/;function hg(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var jg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Uf(String(d))))}var e=b.join("*");return["1",ig(e),e].join("*")},ig=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Wf)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=
h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}Wf=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Wf[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},lg=function(){return function(a){var b=af(F.location.href),c=b.search.replace("?",""),d=Xe(c,"_gl",!0)||"";a.query=kg(d)||{};var e=$e(b,"fragment").match(hg("_gl"));a.fragment=kg(e&&e[3]||"")||{}}},mg=function(){var a=lg(),b=Zf();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ha(c,d.query),Ha(c,d.fragment));return c},kg=function(a){var b;
b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=dg.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===ig(k,n)){l=!0;break a}l=!1}if(l){for(var r={},t=k?k.split("*"):[],p=0;p<t.length;p+=2)r[t[p]]=Vf(t[p+1]);return r}}}}catch(u){}};
function ng(a,b,c,d){function e(n){var r=n,t=hg(a).exec(r),p=r;if(t){var u=t[2],v=t[4];p=t[1];v&&(p=p+u+v)}n=p;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+m}d=void 0===d?!1:d;var f=gg.exec(c);if(!f)return"";var h=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+h+k+l}
function og(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=cg(b,1,c),e=cg(b,2,c),f=cg(b,3,c);if(Ia(d)){var h=jg(d);c?pg("_gl",h,a):qg("_gl",h,a,!1)}if(!c&&Ia(e)){var k=jg(e);qg("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){qg(m,n,r,void 0);break a}if("form"===r.tagName.toLowerCase()){pg(m,n,r);break a}}"string"==typeof r&&ng(m,n,r,void 0)}}
function qg(a,b,c,d){if(c.href){var e=ng(a,b,c.href,void 0===d?!1:d);Ve.test(e)&&(c.href=e)}}
function pg(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,h=0;h<e.length;h++){var k=e[h];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=G.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=ng(a,b,c.action);Ve.test(m)&&(c.action=m)}}}
var Xf=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||og(e,e.hostname)}}catch(h){}},Yf=function(a){try{if(a.action){var b=$e(af(a.action),"host");og(a,b)}}catch(c){}},rg=function(a,b,c,d){$f();ag(a,b,"fragment"===c?2:1,!!d,!1)},sg=function(a){$f();ag(a,[F.location.hostname],3,!0,!0)},tg=function(){var a=G.location.hostname,b=eg.exec(G.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(fg,""),l=e.replace(fg,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},ug=function(a,b){return!1===a?!1:a||b||tg()};var vg={};var wg=/^\w+$/,xg=/^[\w-]+$/,yg=/^~?[\w-]+$/,zg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"};function Ag(a){return a&&"string"==typeof a&&a.match(wg)?a:"_gcl"}
var Cg=function(){var a=af(F.location.href),b=$e(a,"query",!1,void 0,"gclid"),c=$e(a,"query",!1,void 0,"gclsrc"),d=$e(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Xe(e,"gclid",void 0);c=c||Xe(e,"gclsrc",void 0)}return Bg(b,c,d)},Bg=function(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(xg))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==
vg.gtm_3pds?0:vg.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Eg=function(a){var b=Cg();Dg(b,a)};
function Dg(a,b,c){function d(r,t){var p=Fg(r,e);p&&Nf(p,t,h,f,l,!0)}b=b||{};var e=Ag(b.prefix),f=b.domain||"auto",h=b.path||"/",k=void 0==b.La?7776E3:b.La;c=c||Ea();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(r){return["GCL",m,r].join(".")};a.aw&&(!0===b.Rh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]));a.gp&&d("gp",n(a.gp[0]))}
var Hg=function(a,b,c,d,e){for(var f=mg(),h=Ag(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==zg[l]){var m=Fg(l,h),n=f[m];if(n){var r=Math.min(Gg(n),Ea()),t;b:{for(var p=r,u=Gf(m,G.cookie),v=0;v<u.length;++v)if(Gg(u[v])>p){t=!0;break b}t=!1}t||Nf(m,n,c,d,0==e?void 0:new Date(r+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};Dg(Bg(f.gclid,f.gclsrc),w)},Fg=function(a,b){var c=zg[a];if(void 0!==c)return b+c},Gg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Ig(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Jg=function(a,b,c,d,e){if(ra(b)){var f=Ag(e);rg(function(){for(var h={},k=0;k<a.length;++k){var l=Fg(a[k],f);if(l){var m=Gf(l,G.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},Kg=function(a){return a.filter(function(b){return yg.test(b)})},Lg=function(a,b){for(var c=Ag(b&&b.prefix),d={},e=0;e<a.length;e++)zg[a[e]]&&(d[a[e]]=zg[a[e]]);C(d,function(f,h){var k=Gf(c+h,G.cookie);if(k.length){var l=k[0],m=Gg(l),n={};n[f]=[Ig(l)];Dg(n,b,m)}})},Mg=function(){var a=["","aw.ds"],b=Cg(),
c=b.gclid,d=b.gclsrc||"";c&&-1!==a.indexOf(d)&&sg(function(){var e={gclid:c};d&&(e.gclsrc=d);return e})};function Ng(){var a=Cg(),b=a.gclid,c=a.gclsrc;if(b&&(!c||"aw.ds"===c)){var d;Wc.reported_gclid||(Wc.reported_gclid={});d=Wc.reported_gclid;if(!d[b]){d[b]=!0;var e="/pagead/landing?gclid="+encodeURIComponent(b);c&&(e+="&gclsrc="+encodeURIComponent(c));tc("https://www.google.com"+e)}}};var Og;if(3===Vc.Cb.length)Og="g";else{var Pg="G";Og=Pg}
var Qg={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Og,OPT:"o"},Rg=function(a){var b=Vc.s.split("-"),c=b[0].toUpperCase(),d=Qg[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Vc.Cb.length){var h=void 0;f="2"+(h||"w")}else f=
"";return f+d+Vc.Cb+e};var ah=function(){for(var a=ec.userAgent+(G.cookie||"")+(G.referrer||""),b=a.length,c=F.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ea()/1E3)].join(".")},dh=function(a,b,c,d){var e=bh(b);return Jf(a,e,ch(c),d)},eh=function(a,b,c,d){var e=""+bh(c),f=ch(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},bh=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},ch=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var fh=["1"],gh={},kh=function(a,b,c,d){var e=hh(a);gh[e]||ih(e,b,c)||(jh(e,ah(),b,c,d),ih(e,b,c))};function jh(a,b,c,d,e){var f=eh(b,"1",d,c);Nf(a,f,c,d,0==e?void 0:new Date(Ea()+1E3*(void 0==e?7776E3:e)))}function ih(a,b,c){var d=dh(a,b,c,fh);d&&(gh[a]=d);return d}function hh(a){return(a||"_gcl")+"_au"};var lh=function(){for(var a=[],b=G.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({jd:e[1],value:e[2]})}var f={};if(!a||!a.length)return f;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(f[a[h].jd]||(f[a[h].jd]=[]),f[a[h].jd].push({timestamp:k[1],gg:k[2]}))}return f};var mh=/^\d+\.fls\.doubleclick\.net$/;function nh(a){var b=af(F.location.href),c=$e(b,"host",!1);if(c&&c.match(mh)){var d=$e(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function oh(a,b){if("aw"==a||"dc"==a){var c=nh("gcl"+a);if(c)return c.split(".")}var d=Ag(b);if("_gcl"==d){var e;e=Cg()[a]||[];if(0<e.length)return e}var f=Fg(a,d),h;if(f){var k=[];if(G.cookie){var l=Gf(f,G.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Ig(l[m]);n&&-1===q(k,n)&&k.push(n)}h=Kg(k)}else h=k}else h=k}else h=[];return h}
var ph=function(){var a=nh("gac");if(a)return decodeURIComponent(a);var b=lh(),c=[];C(b,function(d,e){for(var f=[],h=0;h<e.length;h++)f.push(e[h].gg);f=Kg(f);f.length&&c.push(d+":"+f.join(","))});return c.join(";")},qh=function(a,b,c,d,e){kh(b,c,d,e);var f=gh[hh(b)],h=Cg().dc||[],k=!1;if(f&&0<h.length){var l=Wc.joined_au=Wc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var r="https://adservice.google.com/ddm/regclk";r=r+"?gclid="+h[n]+"&auiddc="+f;tc(r);k=l[m]=!0}}null==a&&(a=k);if(a&&f){var t=
hh(b),p=gh[t];p&&jh(t,p,c,d,e)}};var ii={},ji=["G","GP"];ii.Ke="";var ki=ii.Ke.split(",");function li(){var a=Wc;return a.gcq=a.gcq||new mi}
var ni=function(a,b,c){li().register(a,b,c)},oi=function(a,b,c,d){li().push("event",[b,a],c,d)},pi=function(a,b){li().push("config",[a],b)},qi={},ri=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.h=!1},si=function(a,b,c,d,e){this.type=a;this.m=b;this.N=c||"";this.h=d;this.i=e},mi=function(){this.i={};this.m={};this.h=[]},ti=function(a,b){var c=Sc(b);return a.i[c.containerId]=a.i[c.containerId]||new ri},ui=function(a,b,c,d){if(d.N){var e=ti(a,d.N),
f=e.m;if(f){var h=D(c),k=D(e.targetConfig[d.N]),l=D(e.containerConfig),m=D(e.i),n=D(a.m),r=Md("gtm.uniqueEventId"),t=Sc(d.N).prefix,p=Ef(Df(Cf(Bf(Af(zf(yf(h),k),l),m),n),function(){Gd(r,t,"2");}),function(){Gd(r,t,"3");});try{Gd(r,t,"1");f(d.N,b,d.m,p)}catch(u){
Gd(r,t,"4");}}}};
mi.prototype.register=function(a,b,c){if(3!==ti(this,a).status){ti(this,a).m=b;ti(this,a).status=3;c&&(ti(this,a).i=c);var d=Sc(a),e=qi[d.containerId];if(void 0!==e){var f=Wc[d.containerId].bootstrap,h=d.prefix.toUpperCase();Wc[d.containerId]._spx&&(h=h.toLowerCase());var k=Md("gtm.uniqueEventId"),l=h,m=Ea()-f;if(Cd&&!td[k]){k!==pd&&(nd(),pd=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);yd=yd?yd+","+n:"&cl="+n}delete qi[d.containerId]}this.flush()}};
mi.prototype.push=function(a,b,c,d){var e=Math.floor(Ea()/1E3);a:if(c){var f=Sc(c),h;if(h=f){var k;if(k=1===ti(this,c).status)b:{var l=f.prefix;k=!0}h=k}if(h)if(ti(this,c).status=2,this.push("require",[],f.containerId),qi[f.containerId]=Ea(),Wd()){}else{var n=encodeURIComponent(f.containerId),r=("http:"!=F.location.protocol?"https:":"http:")+"//www.googletagmanager.com";
ic(r+"/gtag/js?id="+n+"&l=dataLayer&cx=c")}}this.h.push(new si(a,e,c,b,d));d||this.flush()};
mi.prototype.flush=function(a){for(var b=this;this.h.length;){var c=this.h[0];if(c.i)c.i=!1,this.h.push(c);else switch(c.type){case "require":if(3!==ti(this,c.N).status&&!a)return;break;case "set":C(c.h[0],function(l,m){D(Ka(l,m),b.m)});break;case "config":var d=c.h[0],e=!!d[J.Ub];delete d[J.Ub];var f=ti(this,c.N),h=Sc(c.N),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.N]={});f.h&&e||ui(this,J.D,d,c);f.h=!0;delete d[J.ra];k?D(d,f.containerConfig):D(d,f.targetConfig[c.N]);break;
case "event":ui(this,c.h[1],c.h[0],c)}this.h.shift()}};var vi=["GP","G"],wi="G".split(/,/);wi.push("HA");var xi=!1;xi=!0;var yi=null,zi={},Ai={},Bi;function Ci(a,b){var c={event:a};b&&(c.eventModel=D(b),b[J.uc]&&(c.eventCallback=b[J.uc]),b[J.xb]&&(c.eventTimeout=b[J.xb]));return c}
var Ii={config:function(a){},event:function(a){var b=a[1];if(g(b)&&!(3<a.length)){var c;if(2<a.length){if(!Pa(a[2])&&void 0!=a[2])return;c=a[2]}var d=Ci(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(){},set:function(a){var b;2==a.length&&Pa(a[1])?b=D(a[1]):3==a.length&&
g(a[1])&&(b={},Pa(a[2])||ra(a[2])?b[a[1]]=D(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},Ji={policy:!0};var Ki=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Mi=function(a){var b=Li(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Ni=!1,Oi=[];function Pi(){if(!Ni){Ni=!0;for(var a=0;a<Oi.length;a++)I(Oi[a])}}var Qi=function(a){Ni?I(a):Oi.push(a)};var fj=function(a){if(ej(a))return a;this.h=a};fj.prototype.kg=function(){return this.h};var ej=function(a){return!a||"object"!==Na(a)||Pa(a)?!1:"getUntrustedUpdateValue"in a};fj.prototype.getUntrustedUpdateValue=fj.prototype.kg;var gj=[],hj=!1,ij=function(a){return F["dataLayer"].push(a)},jj=function(a){var b=Wc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function kj(a){var b=a._clear;C(a,function(f,h){"_clear"!==f&&(b&&Sd(f,void 0),Sd(f,h))});bd||(bd=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=hd(),a["gtm.uniqueEventId"]=d,Sd("gtm.uniqueEventId",d));dd=c;var e=lj(a);
dd=null;switch(c){case "gtm.init":jd("GTM",19),e&&jd("GTM",20)}return e}function lj(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Wc.zones;d=e?e.checkState(Vc.s,c):se;return d.active?qf(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function mj(){for(var a=!1;!hj&&0<gj.length;){hj=!0;delete Jd.eventModel;Ld();var b=gj.shift();if(null!=b){var c=ej(b);if(c){var d=b;b=ej(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=Md(h,1);if(ra(k)||Pa(k))k=D(k);Kd[h]=k}}try{if(pa(b))try{b.call(Nd)}catch(v){}else if(ra(b)){var l=b;if(g(l[0])){var m=
l[0].split("."),n=m.pop(),r=l.slice(1),t=Md(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,r)}catch(v){}}}else{var p=b;if(p&&("[object Arguments]"==Object.prototype.toString.call(p)||Object.prototype.hasOwnProperty.call(p,"callee"))){a:{if(b.length&&g(b[0])){var u=Ii[b[0]];if(u&&(!c||!Ji[b[0]])){b=u(b);break a}}b=void 0}if(!b){hj=!1;continue}}a=kj(b)||a}}finally{c&&Ld(!0)}}hj=!1}
return!a}function nj(){var a=mj();try{Ki(F["dataLayer"],Vc.s)}catch(b){}return a}
var pj=function(){var a=gc("dataLayer",[]),b=gc("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Ae(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Qi(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<Wc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new fj(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);gj.push.apply(gj,d);if(300<
this.length)for(jd("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof f||f;return mj()&&h};gj.push.apply(gj,a.slice(0));oj()&&I(nj)},oj=function(){var a=!0;return a};var qj={};qj.yb=new String("undefined");
var rj=function(a){this.h=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===qj.yb?b:a[d]);return c.join("")}};rj.prototype.toString=function(){return this.h("undefined")};rj.prototype.valueOf=rj.prototype.toString;qj.sf=rj;qj.Cc={};qj.Wf=function(a){return new rj(a)};var sj={};qj.Yg=function(a,b){var c=hd();sj[c]=[a,b];return c};qj.fe=function(a){var b=a?0:1;return function(c){var d=sj[c];if(d&&"function"===typeof d[b])d[b]();sj[c]=void 0}};qj.ug=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};qj.Og=function(a){if(a===qj.yb)return a;var b=hd();qj.Cc[b]=a;return'google_tag_manager["'+Vc.s+'"].macro('+b+")"};qj.Eg=function(a,b,c){a instanceof qj.sf&&(a=a.h(qj.Yg(b,c)),b=oa);return{Oc:a,B:b}};var tj=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||oc(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},uj=function(a){Wc.hasOwnProperty("autoEventsSettings")||(Wc.autoEventsSettings={});var b=Wc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},vj=function(a,b,c){uj(a)[b]=c},wj=function(a,b,c,d){var e=uj(a),f=Fa(e,b,d);e[b]=c(f)},xj=function(a,b,c){var d=uj(a);return Fa(d,b,c)};var yj=["input","select","textarea"],zj=["button","hidden","image","reset","submit"],Aj=function(a){var b=a.tagName.toLowerCase();return!va(yj,function(c){return c===b})||"input"===b&&va(zj,function(c){return c===a.type.toLowerCase()})?!1:!0},Bj=function(a){return a.form?a.form.tagName?a.form:G.getElementById(a.form):rc(a,["form"],100)},Cj=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(Aj(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var Dj=!!F.MutationObserver,Ej=void 0,Fj=function(a){if(!Ej){var b=function(){var c=G.body;if(c)if(Dj)(new MutationObserver(function(){for(var e=0;e<Ej.length;e++)I(Ej[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;mc(c,"DOMNodeInserted",function(){d||(d=!0,I(function(){d=!1;for(var e=0;e<Ej.length;e++)I(Ej[e])}))})}};Ej=[];G.body?b():I(b)}Ej.push(a)};var ak=F.clearTimeout,bk=F.setTimeout,S=function(a,b,c){if(Wd()){b&&I(b)}else return ic(a,b,c)},ck=function(){return F.location.href},dk=function(a){return $e(af(a),"fragment")},ek=function(a){return Ze(af(a))},U=function(a,b){return Md(a,b||2)},fk=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=ij(a)):d=ij(a);return d},gk=function(a,b){F[a]=b},W=function(a,b,c){b&&(void 0===F[a]||c&&!F[a])&&(F[a]=
b);return F[a]},hk=function(a,b,c){return Gf(a,b,void 0===c?!0:!!c)},ik=function(a,b){if(Wd()){b&&I(b)}else kc(a,b)},jk=function(a){return!!xj(a,"init",!1)},kk=function(a){vj(a,"init",!0)},lk=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":$c;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";S(Q("https://","http://",c))},mk=function(a,b){var c=a[b];return c};
var nk=qj.Eg;var Kk=new xa;function Lk(a,b){function c(h){var k=af(h),l=$e(k,"protocol"),m=$e(k,"host",!0),n=$e(k,"port"),r=$e(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Mk(a){return Nk(a)?1:0}
function Nk(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ra(c)){for(var d=0;d<c.length;d++)if(Mk({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=q(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var r;var t=a.ignore_case?"i":void 0;try{var p=String(c)+t,u=Kk.get(p);u||(u=new RegExp(c,t),Kk.set(p,u));r=u.test(b)}catch(v){r=!1}return r;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Lk(b,
c)}return!1};var Ok=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Pk={},Qk=encodeURI,X=encodeURIComponent,Rk=lc;var Sk=function(a,b){if(!a)return!1;var c=$e(af(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Tk=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Pk.vg=function(){var a=!1;return a};var fm=function(){var a=F.gaGlobal=F.gaGlobal||{};a.hid=a.hid||wa();return a.hid};var qm=window,rm=document,sm=function(a){var b=qm._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===qm["ga-disable-"+a])return!0;try{var c=qm.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Gf("AMP_TOKEN",rm.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return rm.getElementById("__gaOptOutExtension")?!0:!1};var vm=function(a){C(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[J.ca]||{};C(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var zm=function(a,b,c){oi(b,c,a)},Am=function(a,b,c){oi(b,c,a,!0)},Cm=function(a,b){};
function Bm(a,b){}var Z={a:{}};


Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();

Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.b="c";Z.__c.g=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(Ud(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=U("gtm.referrer",1)||G.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?$e(af(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):ek(String(b)):String(b)})}();

Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=U("gtm.url",1);c=c||ck();var d=b[a("vtp_component")];if(!d||"URL"==d)return ek(String(c));var e=af(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;h?ra(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var r=$e(e,"QUERY",void 0,void 0,m[n]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=$e(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=U(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.ua=["google"],function(){var a,b={},c=function(d){var e={},f={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;D(Tk(n.vtp_fieldsToSet,"fieldName","value"),f);D(Tk(n.vtp_contentGroup,"index","group"),h);D(Tk(n.vtp_dimension,"index","dimension"),k);D(Tk(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var r=D(n);d=D(d,r)}D(Tk(d.vtp_fieldsToSet,"fieldName","value"),f);D(Tk(d.vtp_contentGroup,
"index","group"),h);D(Tk(d.vtp_dimension,"index","dimension"),k);D(Tk(d.vtp_metric,"index","metric"),l);var t=Qe(d.vtp_functionName);if(pa(t)){var p="",u="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(u=d.vtp_trackerName,p=u+"."):(u="gtm"+hd(),p=u+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0},y=function(O){var L=[].slice.call(arguments,0);L[0]=p+L[0];t.apply(window,L)},x=function(O,L){return void 0===L?L:O(L)},B=function(O,L){if(L)for(var ta in L)L.hasOwnProperty(ta)&&
y("set",O+ta,L[ta])},z=function(){},A=function(O,L,ta){var Ib=0;if(O)for(var Da in O)if(O.hasOwnProperty(Da)&&(ta&&v[Da]||!ta&&void 0===v[Da])){var Za=w[Da]?Aa(O[Da]):O[Da];"anonymizeIp"!=Da||Za||(Za=void 0);L[Da]=Za;Ib++}return Ib},E={name:u};A(f,
E,!0);t("create",d.vtp_trackingId||e.trackingId,E);y("set","&gtm",Rg(!0));d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(O,L){void 0!==d[L]&&y("set",O,d[L])})("nonInteraction","vtp_nonInteraction");B("contentGroup",h);B("dimension",k);B("metric",l);var H={};A(f,H,!1)&&y("set",H);var K;d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var O=f&&f.hitCallback;pa(O)&&O();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),z());var R={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||
e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(za,d.vtp_eventValue||e.value)};A(K,R,!1);y("send",R);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==
d.vtp_trackType){}else if("TRACK_TIMING"==d.vtp_trackType){}else if("DECORATE_LINK"==
d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&
(y("require","ec","ec.js"),z());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var sa="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:sa})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var ma="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:ma})}K?y("send","pageview",K):y("send","pageview");}if(!a){var ua=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(ua="internal/"+ua);a=!0;var ab=Q("https:","http:","//www.google-analytics.com/"+ua,f&&f.forceSSL);
S(ab,function(){var O=Oe();O&&O.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else I(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();






Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.b="gas";Z.__gas.g=!0;Z.__gas.priorityOverride=0})(function(a){var b=D(a),c=b;c[Fb.sa]=null;c[Fb.Ve]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.a.hl=["google"],function(){function a(f){return f.target&&f.target.location&&f.target.location.href?f.target.location.href:ck()}function b(f,h){mc(f,"hashchange",function(k){var l=a(k);h({source:"hashchange",state:null,url:ek(l),J:dk(l)})})}function c(f,h){mc(f,"popstate",function(k){var l=a(k);h({source:"popstate",state:k.state,url:ek(l),J:dk(l)})})}function d(f,h,k){var l=h.history,m=l[f];if(pa(m))try{l[f]=function(n,r,t){m.apply(l,[].slice.call(arguments,0));k({source:f,state:n,url:ek(ck()),
J:dk(ck())})}}catch(n){}}function e(){var f={source:null,state:W("history").state||null,url:ek(ck()),J:dk(ck())};return function(h){var k=f,l={};l[k.source]=!0;l[h.source]=!0;if(!l.popstate||!l.hashchange||k.J!=h.J){var m={event:"gtm.historyChange","gtm.historyChangeSource":h.source,"gtm.oldUrlFragment":f.J,"gtm.newUrlFragment":h.J,"gtm.oldHistoryState":f.state,"gtm.newHistoryState":h.state};m["gtm.oldUrl"]=f.url,m["gtm.newUrl"]=h.url;
f=h;fk(m)}}}(function(f){Z.__hl=f;Z.__hl.b="hl";Z.__hl.g=!0;Z.__hl.priorityOverride=0})(function(f){var h=W("self");if(!jk("hl")){var k=e();b(h,k);c(h,k);d("pushState",h,k);d("replaceState",h,k);kk("hl")}I(f.vtp_gtmOnSuccess)})}();Z.a.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.b="remm";Z.__remm.g=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=0;f<c.length;f++){var h=c[f].key||"";d&&(h="^"+h+"$");var k=new RegExp(h,e);if(k.test(b)){var l=c[f].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();
Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Tk(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();




Z.a.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=G.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,hc(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];k.firstChild;)r.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,r,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(t){I(h)}}}var c=function(d){if(G.body){var e=
d.vtp_gtmOnFailure,f=nk(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.Oc,k=f.B;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(G.body,qc(h),k,e)()}else bk(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();







var Dm={};Dm.macro=function(a){if(qj.Cc.hasOwnProperty(a))return qj.Cc[a]},Dm.onHtmlSuccess=qj.fe(!0),Dm.onHtmlFailure=qj.fe(!1);Dm.dataLayer=Nd;Dm.callback=function(a){fd.hasOwnProperty(a)&&pa(fd[a])&&fd[a]();delete fd[a]};function Em(){Wc[Vc.s]=Dm;Ha(gd,Z.a);xb=xb||qj;yb=re}
function Fm(){vg.gtm_3pds=!0;Wc=F.google_tag_manager=F.google_tag_manager||{};if(Wc[Vc.s]){var a=Wc.zones;a&&a.unregisterChild(Vc.s)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)pb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)sb.push(e[f]);for(var h=b.predicates||[],k=0;k<
h.length;k++)rb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],r={},t=0;t<n.length;t++)r[n[t][0]]=Array.prototype.slice.call(n[t],1);qb.push(r)}ub=Z;vb=Mk;Em();pj();ve=!1;we=0;if("interactive"==G.readyState&&!G.createEventObject||"complete"==G.readyState)ye();else{mc(G,"DOMContentLoaded",ye);mc(G,"readystatechange",ye);if(G.createEventObject&&G.documentElement.doScroll){var p=!0;try{p=!F.frameElement}catch(y){}p&&ze()}mc(F,"load",ye)}Ni=!1;"complete"===G.readyState?Pi():mc(F,
"load",Pi);a:{if(!Cd)break a;F.setInterval(Dd,864E5);}
cd=(new Date).getTime();
}}Fm();

})()
