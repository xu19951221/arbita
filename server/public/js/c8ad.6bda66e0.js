(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["c8ad"],{c8ad:function(t,a,i){"use strict";i.r(a);var l=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("page-title-bar"),i("v-container",{attrs:{fluid:"","grid-list-xl":"","pt-0":""}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("app-card",{attrs:{heading:t.$t("message.simpleDialogs"),colClasses:"lg12"}},[i("div",{staticClass:"mb-3"},[i("p",[t._v("Choosing an option immediately commits the option and closes the menu. Touching outside of the dialog, or pressing Back, cancels the action and closes the dialog.")])]),i("v-btn",{attrs:{color:"primary"},on:{click:function(a){a.stopPropagation(),t.dialog=!0}}},[t._v("Open Dialog 1")]),i("v-btn",{attrs:{color:"success"},on:{click:function(a){a.stopPropagation(),t.dialog2=!0}}},[t._v("Open Dialog 2")]),i("v-btn",{attrs:{color:"error"},on:{click:function(a){a.stopPropagation(),t.dialog3=!0}}},[t._v("Open Dialog 3")]),i("v-menu",{attrs:{bottom:"","offset-y":""}},[i("v-btn",{attrs:{slot:"activator",color:"warning"},slot:"activator"},[t._v("A Menu")]),i("v-list",t._l(t.items,function(a,l){return i("v-list-tile",{key:l,on:{click:function(t){}}},[i("v-list-tile-title",[t._v(t._s(a.title))])],1)}))],1),i("v-dialog",{attrs:{fullscreen:"",transition:"dialog-bottom-transition",overlay:"false",scrollable:""},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[i("v-card",[i("v-toolbar",{attrs:{color:"primary",dark:""}},[i("v-btn",{attrs:{icon:"",dark:""},nativeOn:{click:function(a){t.dialog=!1}}},[i("v-icon",[t._v("close")])],1),i("v-toolbar-title",[t._v("Settings")]),i("v-spacer"),i("v-toolbar-items",[i("v-btn",{attrs:{dark:"",flat:""},nativeOn:{click:function(a){t.dialog=!1}}},[t._v("Save")]),i("v-menu",{attrs:{bottom:"",right:"","offset-y":""}},[i("v-btn",{attrs:{slot:"activator",dark:"",icon:""},slot:"activator"},[i("v-icon",[t._v("more_vert")])],1),i("v-list",t._l(t.items,function(a,l){return i("v-list-tile",{key:l,on:{click:function(t){}}},[i("v-list-tile-title",[t._v(t._s(a.title))])],1)}))],1)],1)],1),i("v-card-text",[i("v-btn",{attrs:{color:"warning"},on:{click:function(a){a.stopPropagation(),t.dialog2=!t.dialog2}}},[t._v("Open Dialog 2")]),i("v-tooltip",{attrs:{right:""}},[i("v-btn",{attrs:{slot:"activator",color:"primary"},slot:"activator"},[t._v("Tool Tip Activator")]),t._v("\n\t\t\t\t\t\t\t\tTool Tip\n\t\t\t\t\t\t\t")],1),i("v-list",{attrs:{"three-line":"",subheader:""}},[i("v-subheader",[t._v("User Controls")]),i("v-list-tile",{attrs:{avatar:""}},[i("v-list-tile-content",[i("v-list-tile-title",[t._v("Content filtering")]),i("v-list-tile-sub-title",[t._v("Set the content filtering level to restrict apps that can be downloaded")])],1)],1),i("v-list-tile",{attrs:{avatar:""}},[i("v-list-tile-content",[i("v-list-tile-title",[t._v("Password")]),i("v-list-tile-sub-title",[t._v("Require password for purchase or use password to restrict purchase")])],1)],1)],1),i("v-divider"),i("v-list",{attrs:{"three-line":"",subheader:""}},[i("v-subheader",[t._v("General")]),i("v-list-tile",{attrs:{avatar:""}},[i("v-list-tile-action",[i("v-checkbox",{attrs:{color:"primary"},model:{value:t.notifications,callback:function(a){t.notifications=a},expression:"notifications"}})],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Notifications")]),i("v-list-tile-sub-title",[t._v("Notify me about updates to apps or games that I downloaded")])],1)],1),i("v-list-tile",{attrs:{avatar:""}},[i("v-list-tile-action",[i("v-checkbox",{attrs:{color:"primary"},model:{value:t.sound,callback:function(a){t.sound=a},expression:"sound"}})],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Sound")]),i("v-list-tile-sub-title",[t._v("Auto-update apps at any time. Data charges may apply")])],1)],1),i("v-list-tile",{attrs:{avatar:""}},[i("v-list-tile-action",[i("v-checkbox",{attrs:{color:"primary"},model:{value:t.widgets,callback:function(a){t.widgets=a},expression:"widgets"}})],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Auto-add widgets")]),i("v-list-tile-sub-title",[t._v("Automatically add home screen widgets")])],1)],1)],1)],1),i("div",{staticStyle:{flex:"1 1 auto"}})],1)],1),i("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog2,callback:function(a){t.dialog2=a},expression:"dialog2"}},[i("v-card",[i("v-card-title",[t._v("\n\t\t\t\t\t\t\tDialog 2\n\t\t\t\t\t\t")]),i("v-card-text",[i("v-btn",{attrs:{color:"success"},on:{click:function(a){a.stopPropagation(),t.dialog3=!t.dialog3}}},[t._v("Open Dialog 3")]),i("v-select",{attrs:{items:t.select,label:"A Select List","item-value":"text"}})],1),i("v-card-actions",[i("v-btn",{attrs:{color:"error"},on:{click:function(a){a.stopPropagation(),t.dialog2=!1}}},[t._v("Close")])],1)],1)],1),i("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog3,callback:function(a){t.dialog3=a},expression:"dialog3"}},[i("v-card",[i("v-card-title",[i("span",[t._v("Dialog 3")]),i("v-spacer"),i("v-menu",{attrs:{bottom:"",left:""}},[i("v-btn",{attrs:{slot:"activator",icon:""},slot:"activator"},[i("v-icon",[t._v("more_vert")])],1),i("v-list",t._l(t.items,function(a,l){return i("v-list-tile",{key:l,on:{click:function(t){}}},[i("v-list-tile-title",[t._v(t._s(a.title))])],1)}))],1)],1),i("v-card-actions",[i("v-btn",{attrs:{color:"error"},on:{click:function(a){a.stopPropagation(),t.dialog3=!1}}},[t._v("Close")])],1)],1)],1)],1)],1),i("v-layout",{attrs:{row:"",wrap:""}},[i("app-card",{attrs:{heading:t.$t("message.withoutActivator"),colClasses:"xs12 md6"}},[i("div",{staticClass:"mb-3"},[i("p",[t._v("If for some reason you are unable to use the activator slot, be sure to add the\n\t\t\t\t\t\t"),i("code",[t._v(".stop")]),t._v(" modifier to the event that triggers the dialog.")])]),i("v-btn",{attrs:{color:"primary",dark:""},nativeOn:{click:function(a){a.stopPropagation(),t.dialog4=!0}}},[t._v("Open Dialog")]),i("v-dialog",{attrs:{"max-width":"500"},model:{value:t.dialog4,callback:function(a){t.dialog4=a},expression:"dialog4"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[t._v("Use Google's location service?")]),i("v-card-text",[t._v("Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"warning",flat:"flat"},nativeOn:{click:function(a){t.dialog4=!1}}},[t._v("Disagree")]),i("v-btn",{attrs:{color:"error",flat:"flat"},nativeOn:{click:function(a){t.dialog4=!1}}},[t._v("Agree")])],1)],1)],1)],1),i("app-card",{attrs:{heading:t.$t("message.scrollable"),colClasses:"xs12 md6"}},[i("div",{staticClass:"mb-3"},[i("p",[t._v("Example of a dialog with scrollable content.")])]),i("v-dialog",{attrs:{scrollable:"","max-width":"300px"},model:{value:t.dialog5,callback:function(a){t.dialog5=a},expression:"dialog5"}},[i("v-btn",{attrs:{slot:"activator",color:"warning",dark:""},slot:"activator"},[t._v("Open Dialog")]),i("v-card",[i("v-card-title",[t._v("Select Country")]),i("v-divider"),i("v-card-text",{staticStyle:{height:"300px"}},[i("v-radio-group",{attrs:{column:""},model:{value:t.dialogm1,callback:function(a){t.dialogm1=a},expression:"dialogm1"}},[i("v-radio",{attrs:{label:"Bahamas, The",value:"bahamas"}}),i("v-radio",{attrs:{label:"Bahrain",value:"bahrain"}}),i("v-radio",{attrs:{label:"Bangladesh",value:"bangladesh"}}),i("v-radio",{attrs:{label:"Barbados",value:"barbados"}}),i("v-radio",{attrs:{label:"Belarus",value:"belarus"}}),i("v-radio",{attrs:{label:"Belgium",value:"belgium"}}),i("v-radio",{attrs:{label:"Belize",value:"belize"}}),i("v-radio",{attrs:{label:"Benin",value:"benin"}}),i("v-radio",{attrs:{label:"Bhutan",value:"bhutan"}}),i("v-radio",{attrs:{label:"Bolivia",value:"bolivia"}}),i("v-radio",{attrs:{label:"Bosnia and Herzegovina",value:"bosnia"}}),i("v-radio",{attrs:{label:"Botswana",value:"botswana"}}),i("v-radio",{attrs:{label:"Brazil",value:"brazil"}}),i("v-radio",{attrs:{label:"Brunei",value:"brunei"}}),i("v-radio",{attrs:{label:"Bulgaria",value:"bulgaria"}}),i("v-radio",{attrs:{label:"Burkina Faso",value:"burkina"}}),i("v-radio",{attrs:{label:"Burma",value:"burma"}}),i("v-radio",{attrs:{label:"Burundi",value:"burundi"}})],1)],1),i("v-divider"),i("v-card-actions",[i("v-btn",{attrs:{color:"secondary"},nativeOn:{click:function(a){t.dialog5=!1}}},[t._v("Close")]),i("v-btn",{attrs:{color:"success"},nativeOn:{click:function(a){t.dialog5=!1}}},[t._v("Save")])],1)],1)],1)],1)],1)],1)],1)},o=[],e={data:function(){return{dialog:!1,dialog2:!1,dialog3:!1,dialog4:!1,dialog5:!1,dialogm1:"",notifications:!1,sound:!0,widgets:!1,items:[{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}],select:[{text:"State 1"},{text:"State 2"},{text:"State 3"},{text:"State 4"},{text:"State 5"},{text:"State 6"},{text:"State 7"}]}}},s=e,r=i("2877"),n=Object(r["a"])(s,l,o,!1,null,null,null);n.options.__file="Dialog.vue";a["default"]=n.exports}}]);
//# sourceMappingURL=c8ad.6bda66e0.js.map