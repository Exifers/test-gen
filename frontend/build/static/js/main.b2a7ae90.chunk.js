(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{115:function(n,e,t){"use strict";t.r(e);var r=t(0),c=t.n(r),i=t(36),a=t.n(i),o=t(12),s=t(9),b=t(48),u=t(118),j=t(119),d=t(72),l="csrf-token",x="CSRF-Token";function O(n){var e;return null===(e=document.cookie.split("; ").find((function(e){return(null===e||void 0===e?void 0:e.split("=")[0])===n})))||void 0===e?void 0:e.split("=")[1]}var p,h,g,f,m,v,w,y,S,k,C,E,z,T,N,D=t.n(d).a.create({headers:[{name:x,value:O(l)}].reduce((function(n,e){return e.value&&(n[e.name]=e.value),n}),{})}),I=D,R=t(3),F=t(7),M=F.a.main(p||(p=Object(R.a)(["\n  padding: 32px;\n  flex-grow: 1;\n"]))),Q="#3B49C4",L="#8389c6",P="#D0D5FF",B="#D1D1D1",q="#DEDEDE",A="#ffffff",U="rgba(255,255,255,0.05)",V="rgba(235,235,239,0.71)",J="#EBEBEF",W="#2A2B31",_="#12163A",Z="#f33e3e",G=t(23),H=F.a.h1(h||(h=Object(R.a)(["\n  font-size: 32px;\n"]))),K=F.a.h2(g||(g=Object(R.a)(["\n  font-size: 24px;\n"]))),X=F.a.h3(f||(f=Object(R.a)(["\n  font-size: 20px;\n"]))),Y=F.a.div(m||(m=Object(R.a)(["\n  font-size: 14px;\n"]))),$=Object(F.a)(G.b)(v||(v=Object(R.a)(["\n  color: ",";\n  font-weight: 700;\n  text-decoration: none;\n"])),Q),nn=F.a.ul(w||(w=Object(R.a)(["\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n"]))),en=F.a.li(y||(y=Object(R.a)(["\n  height: 72px;\n  box-shadow: 0 10px 50px -16px rgba(0, 0, 0, 0.05);\n  border-radius: 4px;\n  background-color: ",";\n  margin: 16px 0 16px 0;\n  display: flex;\n  align-items: center;\n  padding: 0 32px 0 32px;\n\n  &:first-child {\n    margin-top: 0;\n  }\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"])),A),tn=Object(F.a)(Y)(S||(S=Object(R.a)(["\n  color: ",";\n"])),W),rn=F.a.div(k||(k=Object(R.a)(["\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  position: relative;\n  cursor: pointer;\n  margin-left: auto;\n\n  &:hover {\n    background-color: ",";\n  }\n"])),V),cn=F.a.img(C||(C=Object(R.a)(["\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),an=F.a.img(E||(E=Object(R.a)(["\n  width: 16px;\n  margin-right: 8px;\n"]))),on=(t(103),t(17)),sn=t(5),bn=t(11),un=t(39),jn=Object(F.a)(un.a)(z||(z=Object(R.a)([""]))),dn=Object(F.a)(un.b)(T||(T=Object(R.a)(["\n  padding: 0.375rem 1rem;\n"]))),ln=t(1),xn=["className","onClick","children"],On=["children","button"],pn=Object(un.c)(un.b)((function(n){var e=n.className,t=n.onClick,r=n.children,c=Object(bn.a)(n,xn);return Object(ln.jsx)(dn,Object(sn.a)(Object(sn.a)({className:e,onClick:t},c),{},{children:r}))})),hn=function(n){var e=n.children,t=n.button,r=Object(bn.a)(n,On);return Object(ln.jsx)(jn,Object(sn.a)(Object(sn.a)({menuButton:t,direction:"left",className:Object(on.a)(N||(N=Object(R.a)(["\n      min-width: auto;\n    "])))},r),{},{children:e}))},gn=function(n){var e=n.children;return Object(ln.jsx)(hn,{button:Object(ln.jsx)(fn,{}),children:e})},fn=c.a.forwardRef((function(n,e){var t=Object.assign({},n);return Object(ln.jsx)(rn,Object(sn.a)(Object(sn.a)({ref:e},t),{},{children:Object(ln.jsx)(cn,{src:"images/dots.svg"})}))})),mn=t(31),vn=t.n(mn);vn.a.setAppElement("#root"),vn.a.defaultStyles.overlay&&(vn.a.defaultStyles.overlay.backgroundColor="rgba(0,0,0,0.5)"),vn.a.defaultStyles.content&&(vn.a.defaultStyles.content.borderRadius="16px",vn.a.defaultStyles.content.padding="32px");var wn,yn,Sn,kn,Cn,En,zn,Tn,Nn,Dn,In,Rn,Fn,Mn,Qn,Ln,Pn,Bn,qn={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},An=function(n){var e=n.children,t=n.isOpen,r=n.onRequestClose;return Object(ln.jsx)(vn.a,{isOpen:t,style:qn,onRequestClose:r,children:e})},Un=function(n){var e=n.id,t=n.title,c=n.onDelete,i=n.renderEditModalContent,a=Object(r.useState)(!1),o=Object(s.a)(a,2),b=o[0],u=o[1];return void 0===e?null:Object(ln.jsxs)(en,{children:[Object(ln.jsx)(tn,{children:t}),Object(ln.jsxs)(gn,{children:[Object(ln.jsxs)(pn,{onClick:function(){return u(!0)},children:[Object(ln.jsx)(an,{src:"/images/pen.svg"}),"Edit"]}),Object(ln.jsxs)(pn,{className:Object(on.a)(wn||(wn=Object(R.a)(["\n            color: ",";\n          "])),Z),onClick:function(){null===c||void 0===c||c()},children:[Object(ln.jsx)(an,{src:"/images/trash.svg"}),"Delete"]})]}),Object(ln.jsx)(An,{isOpen:b,onRequestClose:function(){return u(!1)},children:i({setModalIsOpen:u})})]})},Vn=function(n){var e=n.children;return Object(ln.jsx)(nn,{children:e})},Jn=769,Wn=Object(F.a)(X)(yn||(yn=Object(R.a)(["\n  margin-right: auto;\n"]))),_n=F.a.div(Sn||(Sn=Object(R.a)(["\n  height: 104px;\n  padding: 32px 40px;\n  display: flex;\n  align-items: center;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);\n  box-sizing: border-box;\n  background-color: ",";\n"])),A),Zn=F.a.div(kn||(kn=Object(R.a)(["\n  height: 40px;\n  position: relative;\n"]))),Gn=F.a.img(Cn||(Cn=Object(R.a)(["\n  position: absolute;\n  top: 50%;\n  transform: translate(19px, -50%);\n"]))),Hn=F.a.input(En||(En=Object(R.a)(["\n  border: none;\n  box-shadow: none;\n  border-radius: 8px;\n  padding: 10px 10px 10px 40px;\n  box-sizing: border-box;\n  background-color: ",";\n  height: 40px;\n"])),J),Kn=F.a.button(zn||(zn=Object(R.a)(["\n  border: none;\n  box-shadow: none;\n  height: 40px;\n  background-color: ",";\n  padding: 12px;\n  color: ",";\n  font-size: 14px;\n  font-weight: 600;\n  border-radius: 8px;\n  margin-left: 16px;\n  cursor: pointer;\n  display: flex;\n  white-space: nowrap;\n"])),Q,A),Xn=F.a.img(Tn||(Tn=Object(R.a)(["\n  margin-left: 20px;\n\n  @media (max-width: ","px) {\n    margin: 0;\n  }\n"])),Jn),Yn=function(){var n=Object(r.useState)(window.innerWidth<Jn),e=Object(s.a)(n,2),t=e[0],c=e[1];return Object(r.useEffect)((function(){var n=function(){var n=window.innerWidth<Jn;n!==t&&c(n)};return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[t,c]),t},$n=["children"],ne=function(n){var e=n.value,t=n.onChange;return Object(ln.jsxs)(Zn,{children:[Object(ln.jsx)(Gn,{src:"/images/search.svg"}),Object(ln.jsx)(Hn,{type:"text",placeholder:"Search ...",value:e,onChange:t})]})},ee=function(n){var e=n.children,t=Object(bn.a)(n,$n),r=Yn();return Object(ln.jsxs)(Kn,Object(sn.a)(Object(sn.a)({},t),{},{children:[!r&&e,Object(ln.jsx)(Xn,{src:"/images/plus.svg"})]}))},te=function(n){var e=n.children;return Object(ln.jsx)(_n,{children:e})},re=t(26),ce=Object(F.a)(re.b)(Nn||(Nn=Object(R.a)(["\n  background-color: ",";\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border-radius: 16px;\n  max-width: 335px;\n  padding: 32px;\n  box-sizing: border-box;\n\n  @media (max-width: ","px) {\n    margin: 24px auto 64px auto;\n  }\n"])),A,Jn),ie=Object(F.a)(Y)(Dn||(Dn=Object(R.a)(["\n  padding: 16px 0 16px 0;\n  margin: 10px 0 10px 0;\n"]))),ae=F.a.div(In||(In=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  margin: 10px 0 10px 0;\n"]))),oe=Object(F.a)(re.a)(Rn||(Rn=Object(R.a)(["\n  border: 1px solid ",";\n  border-radius: 4px;\n  height: 40px;\n  margin-top: 10px;\n  width: 100%;\n  font-size: 14px;\n  color: ",";\n  padding-left: 16px;\n  box-sizing: border-box;\n"])),q,W),se=Object(F.a)(Y)(Fn||(Fn=Object(R.a)([""]))),be=F.a.button(Mn||(Mn=Object(R.a)(["\n  box-shadow: none;\n  border: none;\n  color: ",";\n  background-color: ",";\n  border-radius: 8px;\n  padding: 18px;\n  cursor: pointer;\n\n  &:active {\n    background-color: ",";\n  }\n"])),A,Q,L),ue=Object(F.a)(Y)(Qn||(Qn=Object(R.a)(["\n  color: ",";\n"])),Z);var je,de,le,xe,Oe,pe,he,ge,fe,me,ve,we,ye,Se,ke,Ce,Ee,ze,Te,Ne,De,Ie,Re,Fe,Me,Qe,Le,Pe=function(n){var e=n.tiger,t=n.onSubmit,r=n.title,c=n.submitText,i={name:e?e.name:""};return Object(ln.jsx)(re.c,{initialValues:i,validate:function(){return{}},onSubmit:t,children:function(n){var e=n.isSubmitting;return Object(ln.jsxs)(ce,{children:[Object(ln.jsx)(K,{className:Object(on.a)(Ln||(Ln=Object(R.a)(["\n              text-align: center;\n              margin: 0;\n            "]))),children:r}),Object(ln.jsxs)(ae,{className:Object(on.a)(Pn||(Pn=Object(R.a)(["\n              margin: 16px 0 16px 0;\n            "]))),children:[Object(ln.jsx)(se,{children:"Name"}),Object(ln.jsx)(oe,{type:"text",name:"name",placeholder:"Name",autofocus:!0})]}),Object(ln.jsx)(be,{type:"submit",disabled:e,className:Object(on.a)(Bn||(Bn=Object(R.a)(["\n              margin-top: 32px;\n            "]))),children:c})]})}})},Be=function(n){var e=n.onSubmit,t=Object(b.b)(),r=Object(o.g)(),c=Object(j.a)((function(n){return I.post("/api/v1/tigers",n)}),{onSuccess:function(){t.invalidateQueries("tigers")}});return Object(ln.jsx)(Pe,{title:"Create Tiger",submitText:"Create a Tiger",onSubmit:function(n,t){var i=t.setSubmitting;c.mutate(n),null===i||void 0===i||i(!1),null===e||void 0===e||e(),r.push("/tigers")}})},qe=F.a.img(je||(je=Object(R.a)(["\n  cursor: pointer;\n  margin-right: 48px;\n"]))),Ae=function(n){return Object(ln.jsx)(qe,Object(sn.a)({src:"/images/burger_menu.svg"},n))},Ue=F.a.div(de||(de=Object(R.a)(["\n  position: absolute;\n  min-width: 100vw;\n  min-height: 100vh;\n  z-index: 1;\n"]))),Ve=F.a.div(le||(le=Object(R.a)(["\n  width: 240px;\n  height: 100vh;\n  background-color: ",";\n\n  @media (max-width: ","px) {\n    position: absolute;\n    transition: left 0.3s;\n    will-change: left;\n    left: ","px;\n    z-index: 2;\n  }\n"])),_,Jn,(function(n){return n.isOpen?0:-240})),Je=Object(F.a)(K)(xe||(xe=Object(R.a)(["\n  color: ",";\n  font-weight: normal;\n  text-align: center;\n  margin-top: 16px;\n"])),P),We=F.a.img(Oe||(Oe=Object(R.a)(["\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  cursor: pointer;\n"]))),_e=F.a.nav(pe||(pe=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 136px;\n"]))),Ze=Object(F.a)(G.c)(he||(he=Object(R.a)(["\n  color: ",";\n  font-size: 14px;\n  text-decoration: none;\n  padding: 20px 14px;\n  margin: 0 8px 0 8px;\n  border-radius: 8px;\n\n  &.active {\n    background-color: ",";\n  }\n"])),P,U),Ge=function(){var n=Object(r.useContext)(rt),e=n.sidebarIsOpen,t=n.setSidebarIsOpen,c=Yn();return Object(ln.jsxs)(ln.Fragment,{children:[Object(ln.jsxs)(Ve,{isOpen:e,children:[Object(ln.jsx)(Je,{children:"Zoo"}),Object(ln.jsx)(We,{src:"/images/arrow_left.svg",onClick:function(){return t(!1)}}),Object(ln.jsx)(_e,{children:Object(ln.jsx)(Ze,{to:"/tigers",children:"Tigers"})})]}),c&&e&&Object(ln.jsx)(Ue,{onClick:function(){return t(!1)}})]})},He=F.a.div(ge||(ge=Object(R.a)(["\n  height: 64px;\n  background-color: ",";\n  display: flex;\n  border-bottom: 2px solid ",";\n"])),A,J),Ke=F.a.div(fe||(fe=Object(R.a)(["\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n  cursor: pointer;\n"]))),Xe=F.a.img(me||(me=Object(R.a)(["\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n"]))),Ye=Object(F.a)(Y)(ve||(ve=Object(R.a)(["\n  font-weight: 700;\n  margin: 0 80px 0 3px;\n"]))),$e=function(){var n=Object(o.g)(),e=Object(u.a)("user",(function(){return I.get("/auth/me").then((function(n){return n.data}))}),{retry:!1}).data,t=Object(j.a)((function(){return I.get("/auth/logout").then((function(n){return n.data}))}),{onSuccess:function(){n.push("/login")}});return Object(ln.jsx)(hn,{button:Object(ln.jsxs)(Ke,{children:[Object(ln.jsx)(Xe,{src:"/images/user.svg"}),Object(ln.jsx)(Ye,{children:null===e||void 0===e?void 0:e.username})]}),direction:"bottom",children:Object(ln.jsx)(pn,{onClick:t.mutate,children:"Logout"})})},nt=function(){return Object(ln.jsx)(He,{children:Object(ln.jsx)($e,{})})},et=F.a.div(we||(we=Object(R.a)(["\n  min-height: 100vh;\n  min-width: 100vw;\n  display: flex;\n"]))),tt=F.a.div(ye||(ye=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  overflow-y: auto;\n  background-color: ",";\n"])),J),rt=c.a.createContext(null),ct=function(n){var e=n.children,t=function(){var n=Object(r.useState)(!1),e=Object(s.a)(n,2),t=e[0],c=e[1];return Object(r.useMemo)((function(){return{sidebarIsOpen:t,setSidebarIsOpen:c}}),[t,c])}(),c=Yn();return Object(ln.jsx)(et,{children:Object(ln.jsxs)(rt.Provider,{value:t,children:[Object(ln.jsx)(Ge,{}),Object(ln.jsxs)(tt,{children:[!c&&Object(ln.jsx)(nt,{}),e]})]})})},it=function(n){var e=n.modalIsOpen,t=n.setModalIsOpen,c=xt(),i=c.tigersSearchQuery,a=c.setTigersSearchQuery,o=Object(r.useContext)(rt).setSidebarIsOpen,s=Yn();return Object(ln.jsxs)(te,{children:[s&&Object(ln.jsx)(Ae,{onClick:function(){return o(!0)}}),Object(ln.jsx)(Wn,{children:"Tigers"}),!s&&Object(ln.jsx)(ne,{value:i,onChange:function(n){return a(n.target.value)}}),Object(ln.jsx)(ee,{onClick:function(){return t(!0)},children:"New Tiger"}),Object(ln.jsx)(An,{isOpen:e,onRequestClose:function(){return t(!1)},children:Object(ln.jsx)(Be,{onSubmit:function(){return t(!1)}})})]})},at=F.a.div(Se||(Se=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 160px;\n"]))),ot=F.a.img(ke||(ke=Object(R.a)(["\n  margin-bottom: 20px;\n"]))),st=F.a.div(Ce||(Ce=Object(R.a)(["\n  font-size: 20px;\n  font-weight: 700;\n  color: ",";\n"])),B),bt=F.a.button(Ee||(Ee=Object(R.a)(["\n  box-shadow: none;\n  border: none;\n  color: ",";\n  background-color: ",";\n  border-radius: 8px;\n  padding: 18px;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 14px;\n  margin-top: 32px;\n\n  &:active {\n    background-color: ",";\n  }\n"])),A,Q,L),ut=["buttonText","text"],jt=function(n){var e=n.buttonText,t=n.text,r=Object(bn.a)(n,ut);return Object(ln.jsxs)(at,{children:[Object(ln.jsx)(ot,{src:"/images/empty.svg"}),Object(ln.jsx)(st,{children:t}),Object(ln.jsx)(bt,Object(sn.a)(Object(sn.a)({},r),{},{children:e}))]})},dt=function(n){var e=n.id,t=n.onSubmit,r=Object(b.b)(),c=Object(o.g)(),i=Object(u.a)(["tigers",e],(function(){return I.get("/api/v1/tigers/".concat(e)).then((function(n){return n.data}))})),a=i.data,s=i.isLoading,d=Object(j.a)((function(n){return I.put("/api/v1/tigers/".concat(e),n).then((function(n){return n.data}))}),{onSuccess:function(){r.invalidateQueries("tigers")}});if(s)return Object(ln.jsx)("div",{children:"Loading..."});var l=a;return Object(ln.jsx)(Pe,{title:"Edit Tiger",tiger:l,submitText:"Edit Tiger",onSubmit:function(n,e){var r=e.setSubmitting;d.mutate(n),null===r||void 0===r||r(!1),null===t||void 0===t||t(),c.push("/tigers")}})},lt=c.a.createContext(void 0),xt=function(){return Object(r.useContext)(lt)},Ot=function(){var n,e,t,c=Object(r.useState)(!1),i=Object(s.a)(c,2),a=i[0],o=i[1],d=function(){var n=Object(r.useState)(""),e=Object(s.a)(n,2),t=e[0],c=e[1];return Object(r.useMemo)((function(){return{tigersSearchQuery:t,setTigersSearchQuery:c}}),[t,c])}(),l=d.tigersSearchQuery,x=Object(b.b)(),O=Object(u.a)("tigers",(function(){return I.get("/api/v1/tigers").then((function(n){return n.data}))})),p=Object(j.a)((function(n){var e=n.id;return I.delete("/api/v1/tigers/".concat(e))}),{onSuccess:function(){x.invalidateQueries("tigers")}});return Object(ln.jsxs)(lt.Provider,{value:d,children:[Object(ln.jsx)(it,{modalIsOpen:a,setModalIsOpen:o}),Object(ln.jsx)(M,{children:Object(ln.jsxs)(Vn,{children:[null===(n=O.data)||void 0===n||null===(e=n.filter((function(n){return n.name.includes(l)})))||void 0===e?void 0:e.map((function(n){return Object(ln.jsx)(Un,{title:n.name,id:n.id,onDelete:function(){p.mutate({id:n.id})},renderEditModalContent:function(e){var t=e.setModalIsOpen;return Object(ln.jsx)(dt,{id:n.id,onSubmit:function(){return t(!1)}})}},n.id)})),0===(null===(t=O.data)||void 0===t?void 0:t.length)&&Object(ln.jsx)(jt,{buttonText:"Create a Tiger",text:"No tiger could be found",onClick:function(){o(!0)}})]})})]})},pt=t(21),ht=function(){return Object(ln.jsx)(pt.a,{styles:Object(pt.b)(ze||(ze=Object(R.a)(["\n      html {\n        background-color: ",";\n      }\n    "])),_)})},gt=(F.a.img(Te||(Te=Object(R.a)(["\n  position: absolute;\n  ","\n\n  ","\n  \n  ","\n  \n  ","\n  \n  ","\n"])),(function(n){return n.left&&Object(pt.b)(Ne||(Ne=Object(R.a)(["\n      left: ","px;\n    "])),n.left)}),(function(n){return n.top&&Object(pt.b)(De||(De=Object(R.a)(["\n      top: ","px;\n    "])),n.top)}),(function(n){return n.bottom&&Object(pt.b)(Ie||(Ie=Object(R.a)(["\n      bottom: ","px;\n    "])),n.bottom)}),(function(n){return n.right&&Object(pt.b)(Re||(Re=Object(R.a)(["\n      right: ","px;\n    "])),n.right)}),Object(pt.b)(Fe||(Fe=Object(R.a)(["\n    @media (max-width: ","px) {\n      display: none;\n    }\n  "])),Jn)),Object(F.a)(H)(Me||(Me=Object(R.a)(["\n  color: ",";\n  font-weight: bold;\n  text-align: center;\n  margin-top: 96px;\n\n  @media (max-width: ","px) {\n    margin-top: 72px;\n  }\n"])),A,Jn)),ft=function(n){var e=n.children;return Object(ln.jsxs)(ln.Fragment,{children:[Object(ln.jsx)(ht,{}),Object(ln.jsx)(gt,{children:"Eventoo"}),e]})},mt=t(38),vt=t.n(mt),wt=t(51);var yt,St,kt=function(){var n=Object(r.useState)(""),e=Object(s.a)(n,2),t=e[0],c=e[1],i=Object(o.g)(),a=Object(b.b)(),u=function(n,e){var t=e.setSubmitting;if(n.response&&n.response.data){var r=n.response.data.error;r&&c(r)}null===t||void 0===t||t(!1)},j=function(){var n=Object(wt.a)(vt.a.mark((function n(e,t){var r;return vt.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.setSubmitting,n.prev=1,n.next=4,I.post("/auth/login",e);case 4:return null===r||void 0===r||r(!1),n.next=7,a.invalidateQueries("user");case 7:i.push("/"),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),u(n.t0,{setSubmitting:r});case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e,t){return n.apply(this,arguments)}}();return Object(ln.jsx)(re.c,{initialValues:{username:"",password:""},validate:function(){return{}},onSubmit:j,children:function(n){var e=n.isSubmitting;return Object(ln.jsxs)(ce,{className:Object(on.a)(Qe||(Qe=Object(R.a)(["\n            margin: 64px auto 64px auto;\n          "]))),children:[Object(ln.jsx)(K,{className:Object(on.a)(Le||(Le=Object(R.a)(["\n              text-align: center;\n            "]))),children:"Login"}),Object(ln.jsxs)(ae,{children:[Object(ln.jsx)(se,{children:"Username"}),Object(ln.jsx)(oe,{type:"text",name:"username",placeholder:"Username",autoFocus:!0})]}),Object(ln.jsxs)(ae,{children:[Object(ln.jsx)(se,{children:"Password"}),Object(ln.jsx)(oe,{type:"password",name:"password",placeholder:"Password"})]}),t&&Object(ln.jsx)(ue,{children:t}),Object(ln.jsxs)(ie,{children:["Don't have an account yet ? ",Object(ln.jsx)($,{to:"/register",children:"register"})]}),Object(ln.jsx)(be,{type:"submit",disabled:e,children:"Login"})]})}})},Ct=function(){return Object(ln.jsx)(ft,{children:Object(ln.jsx)(kt,{})})};var Et,zt=function(){var n=Object(r.useState)(""),e=Object(s.a)(n,2),t=e[0],c=e[1],i=Object(o.g)(),a=function(){var n=Object(wt.a)(vt.a.mark((function n(e,t){var r,a;return vt.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.setSubmitting,n.prev=1,n.next=4,I.post("/auth/register",e);case 4:return n.next=6,I.post("/auth/login",{username:e.username,password:e.password});case 6:null===r||void 0===r||r(!1),i.push("/"),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(1),n.t0.response&&n.t0.response.data&&(a=n.t0.response.data.error)&&c(a),null===r||void 0===r||r(!1);case 14:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e,t){return n.apply(this,arguments)}}();return Object(ln.jsx)(re.c,{initialValues:{username:"",email:"",password:"",passwordConfirm:""},validate:function(){return{}},onSubmit:a,children:function(n){var e=n.isSubmitting;return Object(ln.jsxs)(ce,{className:Object(on.a)(yt||(yt=Object(R.a)(["\n            margin: 64px auto 64px auto;\n          "]))),children:[Object(ln.jsx)(K,{className:Object(on.a)(St||(St=Object(R.a)(["\n              text-align: center;\n            "]))),children:"Register"}),Object(ln.jsxs)(ae,{children:[Object(ln.jsx)(se,{children:"Username"}),Object(ln.jsx)(oe,{type:"text",name:"username",placeholder:"Username",autoFocus:!0})]}),Object(ln.jsxs)(ae,{children:[Object(ln.jsx)(se,{children:"Email"}),Object(ln.jsx)(oe,{type:"text",name:"email",placeholder:"Email"})]}),Object(ln.jsxs)(ae,{children:[Object(ln.jsx)(se,{children:"Password"}),Object(ln.jsx)(oe,{type:"password",name:"password",placeholder:"Password"})]}),Object(ln.jsxs)(ae,{children:[Object(ln.jsx)(se,{children:"Confirm Password"}),Object(ln.jsx)(oe,{type:"password",name:"passwordConfirm",placeholder:"Confirm password"})]}),t&&Object(ln.jsx)(ue,{children:t}),Object(ln.jsxs)(ie,{children:["Already have an account ? ",Object(ln.jsx)($,{to:"/login",children:"login"})]}),Object(ln.jsx)(be,{type:"submit",disabled:e,children:"Register"})]})}})},Tt=function(){return Object(ln.jsx)(ft,{children:Object(ln.jsx)(zt,{})})},Nt=function(){return Object(ln.jsx)(pt.a,{styles:Object(pt.b)(Et||(Et=Object(R.a)(["\n      html {\n        font-family: 'Lato', sans-serif !important;\n      }\n    "])))})};var Dt=function(){var n=Object(o.g)();return Object(u.a)("user",(function(){return I.get("/auth/me").then((function(n){return n.data}))}),{retry:!1,onError:function(){return n.replace("/login")}}),Object(r.useEffect)((function(){O(l)||D.get("/auth/csrf").then((function(){D.defaults.headers[x]=O(l)})).catch((function(n){console.warn("Received error while fetching CSRF token :",n)}))}),[]),Object(ln.jsxs)(ln.Fragment,{children:[Object(ln.jsx)(Nt,{}),Object(ln.jsxs)(o.d,{children:[Object(ln.jsx)(o.a,{from:"/",exact:!0,to:"/tigers"}),Object(ln.jsx)(o.b,{path:"/login",component:Ct}),Object(ln.jsx)(o.b,{path:"/register",component:Tt}),Object(ln.jsx)(ct,{children:Object(ln.jsx)(o.b,{path:"/tigers",component:Ot})})]})]})},It=new(t(117).a);a.a.render(Object(ln.jsx)(c.a.StrictMode,{children:Object(ln.jsx)(b.a,{client:It,children:Object(ln.jsx)(G.a,{children:Object(ln.jsx)(Dt,{})})})}),document.getElementById("root"))}},[[115,1,2]]]);
//# sourceMappingURL=main.b2a7ae90.chunk.js.map