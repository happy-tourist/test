"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[959],{3426:(e,n,l)=>{l.d(n,{Z:()=>g});var t=l(3673);const o={class:""};function a(e,n,l,a,s,i){const u=(0,t.up)("q-card-section"),d=(0,t.up)("q-btn"),r=(0,t.up)("q-card"),c=(0,t.up)("q-dialog"),m=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(c,{modelValue:e.showInner,"onUpdate:modelValue":n[0]||(n[0]=n=>e.showInner=n)},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{class:"column q-col-gutter-lg q-pb-lg",style:{width:"350px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{class:"text-h6"},{default:(0,t.w5)((()=>[(0,t.WI)(e.$slots,"body")])),_:3}),(0,t._)("div",o,[(0,t.wy)((0,t.Wm)(d,{label:"Отмена",color:"primary"},null,512),[[m]]),(0,t.wy)((0,t.Wm)(d,{label:"Продолжить",color:"secondary",class:"q-ml-lg",onClick:e.onConfirm},null,8,["onClick"]),[[m]])])])),_:3})])),_:3},8,["modelValue"])}const s=(0,t.aZ)({name:"Confirm",props:{modelValue:{type:Boolean,required:!0}},emits:["update:modelValue","onConfirm"],setup(e,{emit:n}){const l=(0,t.Fl)({get(){return e.modelValue},set(e){n("update:modelValue",e)}}),o=()=>{n("onConfirm")};return{showInner:l,onConfirm:o}}});var i=l(4260),u=l(6818),d=l(151),r=l(5589),c=l(2452),m=l(677),p=l(7518),f=l.n(p);const v=(0,i.Z)(s,[["render",a]]),g=v;f()(s,"components",{QDialog:u.Z,QCard:d.Z,QCardSection:r.Z,QBtn:c.Z}),f()(s,"directives",{ClosePopup:m.Z})},5054:(e,n,l)=>{l.r(n),l.d(n,{default:()=>E});var t=l(3673),o=l(2323);const a=(0,t.Uk)(" Назад "),s={class:"text-h6"},i=(0,t.Uk)(" Добавить задание "),u={key:0},d={class:"he-name"},r={key:1,class:"text-h6"};function c(e,n,l,c,m,p){const f=(0,t.up)("q-btn"),v=(0,t.up)("q-page"),g=(0,t.up)("q-input"),k=(0,t.up)("q-form"),C=(0,t.up)("q-card"),w=(0,t.up)("q-dialog"),y=(0,t.up)("confirm");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(v,{class:"column items-center q-col-gutter-lg"},{default:(0,t.w5)((()=>[(0,t._)("div",null,[(0,t.Wm)(f,{to:e.lessonsRoute},{default:(0,t.w5)((()=>[a])),_:1},8,["to"])]),(0,t._)("div",s,(0,o.zw)(e.lessonContent.name),1),(0,t._)("div",null,[(0,t.Wm)(f,{loading:e.isLoading,onClick:e.addTask},{default:(0,t.w5)((()=>[i])),_:1},8,["loading","onClick"])]),e.lessonContent.tasks&&e.lessonContent.tasks.length?((0,t.wg)(),(0,t.iD)("table",u,[(0,t._)("tbody",null,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.lessonContent.tasks,(n=>((0,t.wg)(),(0,t.iD)("tr",{key:n.id},[(0,t._)("td",null,[(0,t.Wm)(f,{color:"secondary",to:{name:e.taskRouteName,params:{id:n.id}}},{default:(0,t.w5)((()=>[(0,t._)("div",d,(0,o.zw)(n.name),1)])),_:2},1032,["to"])]),(0,t._)("td",null,[(0,t.Wm)(f,{round:"",color:"amber",icon:"edit",onClick:l=>e.editTask(n.id)},null,8,["onClick"])]),(0,t._)("td",null,[(0,t.Wm)(f,{round:"",color:"deep-orange",icon:"delete",onClick:l=>e.openConfirm(n.id)},null,8,["onClick"])])])))),128))])])):((0,t.wg)(),(0,t.iD)("div",r," Список заданий пуст "))])),_:1}),(0,t.Wm)(w,{modelValue:e.openSettings,"onUpdate:modelValue":n[2]||(n[2]=n=>e.openSettings=n)},{default:(0,t.w5)((()=>[(0,t.Wm)(C,{class:"q-pa-md",style:{"max-width":"400px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(k,{class:"q-gutter-md",onSubmit:e.onSubmit,onReset:e.onReset},{default:(0,t.w5)((()=>[(0,t.Wm)(g,{filled:"",modelValue:e.taskName,"onUpdate:modelValue":n[0]||(n[0]=n=>e.taskName=n),label:"Введите название",dense:"",autofocus:"",rules:[e=>e&&e.length>0||"Поле не может быть пустым"],"lazy-rules":""},null,8,["modelValue","rules"]),e.isEdit?(0,t.kq)("",!0):((0,t.wg)(),(0,t.j4)(g,{key:0,filled:"",modelValue:e.taskContent,"onUpdate:modelValue":n[1]||(n[1]=n=>e.taskContent=n),label:"Вставьте текст задания",type:"textarea",dense:"",rules:[e=>e&&e.length>0||"Поле не может быть пустым"],"lazy-rules":""},null,8,["modelValue","rules"])),(0,t._)("div",null,[(0,t.Wm)(f,{label:"Отмена",type:"reset",color:"primary",flat:""}),(0,t.Wm)(f,{loading:e.isLoading,label:e.isEdit?"Редактировать":"Добавить",type:"submit",color:"primary",class:"q-ml-sm"},null,8,["loading","label"])])])),_:1},8,["onSubmit","onReset"])])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(y,{modelValue:e.isOpenConfirm,"onUpdate:modelValue":n[3]||(n[3]=n=>e.isOpenConfirm=n),onOnConfirm:e.deleteTask},{body:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.deleteMessage),1)])),_:1},8,["modelValue","onOnConfirm"])],64)}var m=l(1959),p=l(9582),f=l(3426),v=l(9253),g=l(6912),k=l(3863),C=function(e,n,l,t){function o(e){return e instanceof l?e:new l((function(n){n(e)}))}return new(l||(l=Promise))((function(l,a){function s(e){try{u(t.next(e))}catch(n){a(n)}}function i(e){try{u(t["throw"](e))}catch(n){a(n)}}function u(e){e.done?l(e.value):o(e.value).then(s,i)}u((t=t.apply(e,n||[])).next())}))};const w=(0,t.aZ)({name:"Lesson",components:{Confirm:f.Z},setup(){const e=(0,k.useStore)(),n=(0,p.yj)(),l=n.params.id,o={name:v.n8.LESSONS},a=(0,m.iH)({});(0,t.bv)((()=>C(this,void 0,void 0,(function*(){a.value=yield e.dispatch(g.e.FETCH_LESSON_CONTENT,l)}))));const s=(0,m.iH)(""),i=(0,m.iH)(""),u=(0,m.iH)(!1),d=(0,m.iH)(!1);let r="";const c=e=>{r=e,d.value=!0},f=v.sj.DELETE,w=()=>{e.dispatch(g.e.REMOVE_TASK,{id:r,name:"",lessonId:l})},y=()=>{u.value=!1},h=()=>{s.value="",i.value="",y()},_=(0,m.iH)(!1),b=(0,m.iH)(!1),S=()=>{s.value="",i.value="",_.value=!1,u.value=!0},V=".?!",q=()=>C(this,void 0,void 0,(function*(){const n=i.value.split(/(\.\s|\?\s|!\s|\n)/),t=[];n.forEach(((e,l)=>{let o=e.trim();if(o&&o.length>1){const e=o[o.length-1];V.indexOf(e)<0&&(o+=n[l+1].trim()),t.push({task:o,answer:""})}})),b.value=!0,yield e.dispatch(g.e.ADD_TASK,{name:s.value,lessonId:l,content:t}).finally((()=>{b.value=!1}))}));let W={};const Z=e=>{_.value=!0;const n=a.value.tasks.find((n=>n.id===e));n&&(W=JSON.parse(JSON.stringify(n)),s.value=W.name,u.value=!0)},T=()=>C(this,void 0,void 0,(function*(){b.value=!0,yield e.dispatch(g.e.EDIT_TASK,Object.assign(Object.assign({},W),{name:s.value})).finally((()=>{b.value=!1}))})),E=()=>C(this,void 0,void 0,(function*(){_.value?yield T():yield q(),h()})),O=v.n8.TASK;return{lessonsRoute:o,lessonContent:a,isLoading:b,addTask:S,isEdit:_,taskName:s,openSettings:u,onReset:h,onSubmit:E,editTask:Z,taskRouteName:O,isOpenConfirm:d,deleteMessage:f,openConfirm:c,deleteTask:w,taskContent:i}}});var y=l(4260),h=l(4379),_=l(2452),b=l(6818),S=l(151),V=l(8689),q=l(1478),W=l(7518),Z=l.n(W);const T=(0,y.Z)(w,[["render",c],["__scopeId","data-v-975ed49c"]]),E=T;Z()(w,"components",{QPage:h.Z,QBtn:_.Z,QDialog:b.Z,QCard:S.Z,QForm:V.Z,QInput:q.Z})}}]);