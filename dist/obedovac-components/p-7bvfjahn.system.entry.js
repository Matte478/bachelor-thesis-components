System.register(["./p-0f12e65a.system.js"],(function(e){"use strict";var t,i,n;return{setters:[function(e){t=e.r;i=e.c;n=e.h}],execute:function(){var o=e("obd_table_employees",function(){function e(e){t(this,e);this.employees="[]";this.columns=[{key:"name",text:"Meno"},{key:"email",text:"Email"},{key:"type-of-employment",text:"Druh pracovného pomeru"}];this.tableActions=[{text:"",action:"edit",icon:"fas fa-edit",color:"#2d4059"},{text:"",action:"delete",icon:"fas fa-trash-alt",color:"#ea5455"}];this.edit=i(this,"edit",7);this.delete=i(this,"delete",7)}e.prototype.action=function(e){var t=e.detail.action;var i=e.detail.id;switch(t){case"edit":this.edit.emit(i);break;case"delete":this.delete.emit(i);break}};e.prototype.render=function(){var e=this;return n("obd-table",{data:this.employees,columns:JSON.stringify(this.columns),actions:JSON.stringify(this.tableActions),onAction:function(t){return e.action(t)}})};Object.defineProperty(e,"style",{get:function(){return":host{display:block}"},enumerable:true,configurable:true});return e}())}}}));