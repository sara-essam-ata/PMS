"use strict";(self.webpackChunkProject_Management_System=self.webpackChunkProject_Management_System||[]).push([[771],{9771:(w,g,o)=>{o.r(g),o.d(g,{UsersModule:()=>M});var c=o(6814),l=o(7700),t=o(5879),r=o(3403),Z=o(9862);let d=(()=>{class a{constructor(e){this._HttpClient=e}onGetUsers(e){return this._HttpClient.get("Users",{params:e})}onActivateUser(e){return this._HttpClient.put(`Users/${e}`,{})}onGetUserById(e){return this._HttpClient.get(`Users/${e}`)}static#t=this.\u0275fac=function(s){return new(s||a)(t.LFG(Z.eN))};static#e=this.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),m=(()=>{class a{constructor(e,s,i,n){this.dialogRef=e,this.Router=s,this._UsersService=i,this.data=n}ngOnInit(){}onClose(){this.dialogRef.close()}static#t=this.\u0275fac=function(s){return new(s||a)(t.Y36(l.so),t.Y36(r.F0),t.Y36(d),t.Y36(l.WI))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-block-user"]],decls:15,vars:5,consts:[[1,"auth-card"],[1,"text-center","text-white"],[1,"mb-2"],[1,"text-secondry"],[1,"d-flex","justify-content-around","mt-4"],["cdkFocusInitial","",1,"outline-primary","me-2",3,"click"],["cdkFocusInitial","",1,"primary",3,"mat-dialog-close"]],template:function(s,i){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h3",2)(3,"span"),t._uU(4),t.qZA(),t.TgZ(5,"span",3),t._uU(6),t.qZA()(),t.TgZ(7,"p"),t._uU(8),t.qZA()(),t.TgZ(9,"div",4)(10,"button",5),t.NdJ("click",function(){return i.onClose()}),t._uU(11,"Cancle"),t.qZA(),t.TgZ(12,"button",6)(13,"span"),t._uU(14),t.qZA()()()()),2&s&&(t.xp6(4),t.Oqu(i.data.isActivated?"Block ":"Unblock "),t.xp6(2),t.Oqu(i.data.userName),t.xp6(2),t.hij("are you sure you want to block ",i.data.userName," ? if you are sure just click on block "),t.xp6(4),t.Q6J("mat-dialog-close",i.data.id),t.xp6(2),t.Oqu(i.data.isActivated?"Block":"Unblock"))},dependencies:[l.ZT],styles:[".auth-card[_ngcontent-%COMP%]{border-radius:0!important}"]})}return a})();var h=o(2425),v=o(2296),f=o(617),p=o(6311),b=o(3365);const A=function(a){return["/dashboard/manager/users/view/",a]};function T(a,O){if(1&a){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td")(4,"span",6),t._uU(5),t.qZA()(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"date"),t.qZA(),t.TgZ(13,"td")(14,"button",7)(15,"mat-icon"),t._uU(16,"more_vert"),t.qZA()(),t.TgZ(17,"mat-menu",null,8)(19,"button",9),t.NdJ("click",function(){const n=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.openBlockDialog(n))}),t.TgZ(20,"mat-icon"),t._uU(21,"block"),t.qZA(),t.TgZ(22,"span"),t._uU(23),t.qZA()(),t.TgZ(24,"button",10)(25,"mat-icon",11),t._uU(26,"visibility"),t.qZA(),t.TgZ(27,"span"),t._uU(28,"View"),t.qZA()()()()()}if(2&a){const e=O.$implicit,s=t.MAs(18);t.xp6(2),t.Oqu(e.userName),t.xp6(2),t.Tol(e.isActivated?"active":"notActive"),t.xp6(1),t.hij(" ",e.isActivated?"Active":"notActive"," "),t.xp6(2),t.Oqu(e.phoneNumber),t.xp6(2),t.Oqu(e.email),t.xp6(2),t.Oqu(t.xi3(12,10,e.creationDate,"dd-MM-yyyy")),t.xp6(3),t.Q6J("matMenuTriggerFor",s),t.xp6(9),t.Oqu(e.isActivated?"Block":"Unblock"),t.xp6(1),t.Q6J("routerLink",t.VKq(13,A,e.id))}}const _=function(){return[5,10,50,100]};let y=(()=>{class a{constructor(e,s,i,n){this._UsersService=e,this.ActivatedRoute=s,this.dialog=i,this.toastr=n,this.searchValue="",this.listUsers=[],this.pageSize=10,this.pageNumber=1,this.pageIndex=0,this.Messgage=""}ngOnInit(){this.getAllUsers()}getAllUsers(){this._UsersService.onGetUsers({pageSize:this.pageSize,pageNumber:this.pageNumber}).subscribe({next:s=>{console.log(s),this.tableData=s,this.listUsers=this.tableData.data}})}openBlockDialog(e){this.dialog.open(m,{data:e,width:"35%"}).afterClosed().subscribe(i=>{console.log("The dialog was closed",i),i&&this.activateUser(i)})}activateUser(e){this._UsersService.onActivateUser(e).subscribe({next:s=>{this.Messgage=s.message},error:s=>{this.toastr.error(s.error.message,"error")},complete:()=>{this.getAllUsers(),this.toastr.success(this.Messgage,"User Active now")}})}handlePageEvent(e){console.log(e),this.pageSize=e.pageSize,this.pageNumber=e.pageIndex+1,this.getAllUsers()}static#t=this.\u0275fac=function(s){return new(s||a)(t.Y36(d),t.Y36(r.gz),t.Y36(l.uw),t.Y36(h._W))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-users"]],decls:24,vars:6,consts:[[1,"page-header","shadow-sm"],[1,"table-card","container","py-5"],[1,"bg-whiteColor"],[1,"table","table-striped","header-table"],[4,"ngFor","ngForOf"],["aria-label","Select page",3,"length","pageSizeOptions","pageSize","pageIndex","page"],[1,"status"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],["mat-menu-item","",3,"routerLink"],["color","text-main"]],template:function(s,i){1&s&&(t.TgZ(0,"section")(1,"div",0)(2,"h3"),t._uU(3,"Users"),t.qZA()(),t.TgZ(4,"div",1),t._UZ(5,"div",2),t.TgZ(6,"table",3)(7,"thead")(8,"th"),t._uU(9,"Title"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"Status"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Phone Number"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Email"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Creation Date"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Actions"),t.qZA()(),t.TgZ(20,"tbody"),t.YNc(21,T,29,15,"tr",4),t.qZA()(),t.TgZ(22,"div")(23,"mat-paginator",5),t.NdJ("page",function(u){return i.handlePageEvent(u)}),t.qZA()()()()),2&s&&(t.xp6(21),t.Q6J("ngForOf",i.listUsers),t.xp6(2),t.Q6J("length",null==i.tableData?null:i.tableData.totalNumberOfRecords)("pageSizeOptions",t.DdM(5,_))("pageSize",null==i.tableData?null:i.tableData.pageSize)("pageIndex",i.pageIndex))},dependencies:[c.sg,r.rH,v.RK,f.Hw,p.VK,p.OP,p.p6,b.NW,c.uU],styles:[".status[_ngcontent-%COMP%]{padding:8px 15px;border-radius:16px;color:#fff}.status.active[_ngcontent-%COMP%]{background-color:#009247}.status.notActive[_ngcontent-%COMP%]{background-color:#922e25b3}input[_ngcontent-%COMP%]{background-color:#f5f5f5}.form-select[_ngcontent-%COMP%]:focus, .form-control[_ngcontent-%COMP%]:focus{border-color:#ef9b28;outline:0;box-shadow:0 0 0 .25rem #ef9b2836}.header-table[_ngcontent-%COMP%]{height:80px;width:100%}"]})}return a})();var C=o(6208),q=o(2032),U=o(9157);const x=function(){return["/dashboard/manager/users/"]},k=[{path:"",component:y},{path:"view/:id",component:(()=>{class a{constructor(e,s,i,n,u){this.toastr=e,this._router=s,this._UsersService=i,this._activatedRoute=n,this.dialog=u,this.pathHttps="https://upskilling-egypt.com:443/",this.Messgage="",this.userId=n.snapshot.params.id,this.getUserById(this.userId)}getUserById(e){this._UsersService.onGetUserById(e).subscribe({next:s=>{console.log(s),this.user=s},error:s=>{console.log(s.error.message)},complete:()=>{}})}openBlockDialog(e){this.dialog.open(m,{data:e,width:"35%"}).afterClosed().subscribe(i=>{console.log("The dialog was closed",i),i&&this.activateUser(i)})}activateUser(e){this._UsersService.onActivateUser(e).subscribe({next:s=>{this.Messgage=s.message},error:s=>{this.toastr.error(s.error.message,"error")},complete:()=>{this.getUserById(this.userId),this.toastr.success(this.Messgage,"User Active now")}})}static#t=this.\u0275fac=function(s){return new(s||a)(t.Y36(h._W),t.Y36(r.F0),t.Y36(d),t.Y36(r.gz),t.Y36(l.uw))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-view-user"]],decls:53,vars:19,consts:[["id","user-view",1,"p-5"],[1,"container"],[1,"row"],[1,"col-md-8"],[1,"title","my-4"],[1,"text-secondry"],[1,"col-md-6"],["appearance","fill",1,"w-100"],["matInput","",1,"text-main",3,"value","disabled"],[1,"d-flex","justify-content-end","gap-2","my-4"],["type","submit",1,"px-4",3,"click"],[1,"primary",3,"routerLink"],[1,"fa-solid","fa-arrow-left","pl-2"],[1,"col-md-4"],["src","../../../../../assets/images/avatar.png","alt","",1,"img-fluid"]],template:function(s,i){1&s&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"span"),t._uU(6,"Status Active : "),t.TgZ(7,"span",5),t._uU(8),t.qZA()(),t.TgZ(9,"h3"),t._uU(10,"User "),t.TgZ(11,"span",5),t._uU(12),t.qZA()()(),t.TgZ(13,"div",2)(14,"div",6)(15,"mat-form-field",7)(16,"mat-label",5),t._uU(17,"User Name"),t.qZA(),t._UZ(18,"input",8),t.qZA()(),t.TgZ(19,"div",6)(20,"mat-form-field",7)(21,"mat-label",5),t._uU(22,"E-mail"),t.qZA(),t._UZ(23,"input",8),t.qZA()(),t.TgZ(24,"div",6)(25,"mat-form-field",7)(26,"mat-label",5),t._uU(27,"Country"),t.qZA(),t._UZ(28,"input",8),t.qZA()(),t.TgZ(29,"div",6)(30,"mat-form-field",7)(31,"mat-label",5),t._uU(32,"Phone Number"),t.qZA(),t._UZ(33,"input",8),t.qZA()(),t.TgZ(34,"div",6)(35,"mat-form-field",7)(36,"mat-label",5),t._uU(37,"Join Date"),t.qZA(),t._UZ(38,"input",8),t.qZA()(),t.TgZ(39,"div",6)(40,"mat-form-field",7)(41,"mat-label",5),t._uU(42,"Role"),t.qZA(),t._UZ(43,"input",8),t.qZA()(),t.TgZ(44,"div",9)(45,"button",10),t.NdJ("click",function(){return i.openBlockDialog(i.user)}),t._uU(46),t.qZA(),t.TgZ(47,"button",11),t._UZ(48,"i",12),t._uU(49," Back To All Users"),t.qZA()()()(),t.TgZ(50,"div",13)(51,"div"),t._UZ(52,"img",14),t.qZA()()()()()),2&s&&(t.xp6(8),t.Oqu(i.user.isActivated),t.xp6(4),t.hij(" ",i.user.userName," "),t.xp6(6),t.Q6J("value",i.user.userName)("disabled",!0),t.xp6(5),t.Q6J("value",i.user.email)("disabled",!0),t.xp6(5),t.Q6J("value",i.user.country)("disabled",!0),t.xp6(5),t.Q6J("value",i.user.phoneNumber)("disabled",!0),t.xp6(5),t.Q6J("value",i.user.group.creationDate)("disabled",!0),t.xp6(5),t.Q6J("value",i.user.group.name)("disabled",!0),t.xp6(2),t.Tol(i.user.isActivated?"primary":"outline-primary"),t.xp6(1),t.Oqu(i.user.isActivated?"Block":"Unblock"),t.xp6(1),t.Q6J("routerLink",t.DdM(18,x)))},dependencies:[r.rH,q.Nt,U.KE,U.hX],styles:["input[_ngcontent-%COMP%]{--mdc-filled-text-field-disabled-input-text-color: rgba(0, 0, 0, 1)}img[_ngcontent-%COMP%]{border-radius:50%}"]})}return a})()}];let M=(()=>{class a{static#t=this.\u0275fac=function(s){return new(s||a)};static#e=this.\u0275mod=t.oAB({type:a});static#s=this.\u0275inj=t.cJS({imports:[c.ez,r.Bz.forChild(k),C.m]})}return a})()}}]);