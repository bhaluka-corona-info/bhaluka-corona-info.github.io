(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79ad00bd"],{"25b4":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("h3",{staticClass:"mt-4 text-center"},[t._v("Add new union")]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6 offset-lg-3"},[n("union-form-component")],1)])]),n("div",{staticClass:"col-12 mt-3"},[n("h3",{staticClass:"text-center"},[t._v("Union List")]),n("union-list-component")],1)])},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-sm-3 col-form-label",attrs:{for:"name"}},[t._v("নাম")]),n("div",{staticClass:"col-sm-9"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"name",placeholder:"ইউনিয়নের নাম লিখুন",required:"",disabled:t.isSaving},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),n("div",{staticClass:"form-group row"},[n("div",{staticClass:"col-sm-9 offset-sm-3"},[n("button",{staticClass:"btn btn-success btn-block",attrs:{type:"submit",disabled:t.isSaving}},[t.isSaving?n("div",{staticClass:"spinner-border spinner-border-sm mb-2",attrs:{role:"status"}},[n("span",{staticClass:"sr-only"},[t._v("Saving")])]):t._e(),t._v(" Save ")])])])])},i=[],o=(n("b0c0"),n("96cf"),n("1da1")),c=n("d940"),l={name:"UnionFormComponent",data:function(){return{name:null,isSaving:!1}},methods:{submitForm:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isSaving=!0,e.prev=1,n=c["c"].collection("unions").doc(),e.next=5,n.set({id:n.id,name:t.name,createdAt:c["a"].now(),updatedAt:c["a"].now()});case 5:t.name="",e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),alert("Failed to add union. Try again later");case 11:t.isSaving=!1;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))()}}},u=l,d=n("2877"),p=Object(d["a"])(u,s,i,!1,null,"3abff606",null),m=p.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"table"},[t._m(0),n("tbody",[null===t.unions?n("tr",[n("td",{attrs:{colspan:"3"}},[n("preloader-component")],1)]):0===t.unions.length?n("tr",[n("td",{staticClass:"text-center",attrs:{colspan:"3"}},[t._v(" No union is available ")])]):t._l(t.unions,(function(t,e){return n("union-item-component",{key:e,attrs:{index:e,union:t}})}))],2)])},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("#")]),n("th",{attrs:{scope:"col"}},[t._v("নাম")]),n("th",{attrs:{scope:"col"}},[t._v("Action")])])])}],v=n("5530"),g=n("2f62"),h=n("953d"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",{attrs:{scope:"row"}},[t._v(t._s(t.index+1))]),n("td",[t.isEdit?n("form",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],ref:"inputField",staticClass:"form-control",attrs:{type:"text",placeholder:"Enter union name",required:"",disabled:t.isUpdating},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t.errorMessage?n("small",{staticClass:"form-text text-danger",domProps:{textContent:t._s(t.errorMessage)}}):t._e()]):n("span",[t._v(t._s(t.union.name))])]),n("td",[t.isEdit?t._e():n("button",{staticClass:"btn btn-sm btn-info mr-2",on:{click:function(e){t.isEdit=!0}}},[t._v(" Edit ")]),t.isEdit?t._e():n("button",{staticClass:"btn btn-sm btn-danger",attrs:{disabled:t.isDeleting},on:{click:t.deleteUnion}},[t.isDeleting?n("div",{staticClass:"spinner-border spinner-border-sm mb-2",attrs:{role:"status"}},[n("span",{staticClass:"sr-only"},[t._v("Loading")])]):t._e(),t._v(" Delete ")]),t.isEdit?n("button",{staticClass:"btn btn-sm btn-success mr-2",attrs:{type:"button",disabled:t.isUpdating},on:{click:t.updateUnion}},[t.isUpdating?n("div",{staticClass:"spinner-border spinner-border-sm mb-2",attrs:{role:"status"}},[n("span",{staticClass:"sr-only"},[t._v("Loading")])]):t._e(),t._v(" Update ")]):t._e(),t.isEdit?n("button",{staticClass:"btn btn-sm btn-info",attrs:{disabled:t.isUpdating},on:{click:function(e){!t.isUpdating&&(t.isEdit=!1)}}},[t._v(" Cancel ")]):t._e()])])},C=[],x=(n("4160"),n("a9e3"),n("159b"),{name:"UnionItemComponent",props:{union:{type:Object,required:!0},index:{type:Number,required:!0}},watch:{union:{handler:function(t){var e=t.name;this.name=e},immediate:!0,deep:!0}},data:function(){return{name:"",isEdit:!1,errorMessage:null,isUpdating:!1,isDeleting:!1}},methods:{updateUnion:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.isUpdating&&!t.isDeleting){e.next=2;break}return e.abrupt("return");case 2:if(t.errorMessage=null,0!==t.name.length){e.next=7;break}return t.errorMessage="Name should not empty",t.$refs.inputField.focus(),e.abrupt("return");case 7:return t.isUpdating=!0,e.prev=8,n=c["c"].collection("unions").doc(t.union.id),e.next=12,n.update({name:t.name,updatedAt:c["a"].now()});case 12:t.isEdit=!1,e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](8),alert("Failed to update. Try again later");case 18:t.isUpdating=!1;case 19:case"end":return e.stop()}}),e,null,[[8,15]])})))()},deleteUnion:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.isUpdating&&!t.isDeleting){e.next=2;break}return e.abrupt("return");case 2:if(confirm("Are you sure want to delete? This will also delete patients of this union.")){e.next=4;break}return e.abrupt("return");case 4:return t.isDeleting=!0,e.prev=5,e.next=8,c["c"].collection("patients").where("unionId","==",t.union.id).get();case 8:return n=e.sent,n.forEach(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.ref.delete();case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r=c["c"].collection("unions").doc(t.union.id),e.next=13,r.delete();case 13:e.next=19;break;case 15:e.prev=15,e.t0=e["catch"](5),console.log(e.t0),console.log("Failed to delete. Try again later");case 19:t.isDeleting=!1;case 20:case"end":return e.stop()}}),e,null,[[5,15]])})))()}}}),w=x,E=Object(d["a"])(w,_,C,!1,null,"783cc8ca",null),U=E.exports,y={name:"UnionListComponent",components:{UnionItemComponent:U,PreloaderComponent:h["a"]},computed:Object(v["a"])({},Object(g["d"])(["unions"])),methods:Object(v["a"])(Object(v["a"])({},Object(g["b"])(["bindUnions"])),{},{initUnion:function(){null===this.unions&&this.bindUnions()}}),mounted:function(){this.initUnion()}},N=y,k=Object(d["a"])(N,f,b,!1,null,"3e39ce7a",null),I=k.exports,O={name:"Unions",components:{UnionListComponent:I,UnionFormComponent:m}},A=O,j=Object(d["a"])(A,r,a,!1,null,"5fc2dbe9",null);e["default"]=j.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),a=n("5899"),s="["+a+"]",i=RegExp("^"+s+s+"*"),o=RegExp(s+s+"*$"),c=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(i,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,e,n){var r=n("861d"),a=n("d2bb");t.exports=function(t,e,n){var s,i;return a&&"function"==typeof(s=e.constructor)&&s!==n&&r(i=s.prototype)&&i!==n.prototype&&a(t,i),t}},"953d":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-content-center"},[n("div",{staticClass:"spinner-border",attrs:{role:"status"}},[n("span",{staticClass:"sr-only"},[t._v("Loading...")])])])}],s={name:"PreloaderComponent"},i=s,o=n("2877"),c=Object(o["a"])(i,r,a,!1,null,"74a8d882",null);e["a"]=c.exports},a9e3:function(t,e,n){"use strict";var r=n("83ab"),a=n("da84"),s=n("94ca"),i=n("6eeb"),o=n("5135"),c=n("c6b6"),l=n("7156"),u=n("c04e"),d=n("d039"),p=n("7c73"),m=n("241c").f,f=n("06cf").f,b=n("9bf2").f,v=n("58a8").trim,g="Number",h=a[g],_=h.prototype,C=c(p(_))==g,x=function(t){var e,n,r,a,s,i,o,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=v(l),e=l.charCodeAt(0),43===e||45===e){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+l}for(s=l.slice(2),i=s.length,o=0;o<i;o++)if(c=s.charCodeAt(o),c<48||c>a)return NaN;return parseInt(s,r)}return+l};if(s(g,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var w,E=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof E&&(C?d((function(){_.valueOf.call(n)})):c(n)!=g)?l(new h(x(e)),n,E):x(e)},U=r?m(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;U.length>y;y++)o(h,w=U[y])&&!o(E,w)&&b(E,w,f(h,w));E.prototype=_,_.constructor=E,i(a,g,E)}},b0c0:function(t,e,n){var r=n("83ab"),a=n("9bf2").f,s=Function.prototype,i=s.toString,o=/^\s*function ([^ (]*)/,c="name";r&&!(c in s)&&a(s,c,{configurable:!0,get:function(){try{return i.call(this).match(o)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-79ad00bd.41f86621.js.map