import{C as p,n as ns,F as cs,o as Pt,r as T,p as Gt,t as Et,q as _t,H as a,v as os,G as rs,P as hs,u as b,e as c,T as ls,w as Mt,x as ms,y as ps,z as us,c as gs,A as xs,s as o,B as ds,E as Ns,I as Ts,J as bs,K as Hs,L as Ls,S as fs,N as Cs,O as ys,Q as $s,R as Ss,U as vs,V as qs,W as ws,X as As,k as ts,Y as ks,Z as Us,_ as Ws,$ as Bs,a0 as Os,a1 as zs,a2 as ss,a3 as Ds,a4 as Xs,a5 as Ys,a6 as Zs,a7 as Fs,a8 as Js,a9 as Ks,aa as Qs,ab as as,ac as es,l as Vs,d as s}from"./vidstack-Q8NlvF8c-UW6WUufQ.js";import{L as js,x as Is}from"./vidstack-G0VUAMv_-Z2UcJl2r.js";import"./app-QFpzi-98.js";class Rs extends p{onAttach(t){ns(t,"pointer-events","auto")}}class Ps extends p{constructor(){super(),new cs}onConnect(t){Pt(T(()=>{if(!this.connectScope)return;this.Dd();const i=Gt(Et);Pt(()=>{const e=this.Cd();e&&i.wd(e)})}))}Dd(){const t=this.Cd(),i=Gt(Et);t&&i.vd(t)}Cd(){const t=this.el.firstElementChild;return(t==null?void 0:t.localName)==="button"||(t==null?void 0:t.getAttribute("role"))==="button"?t:this.el}}class Gs extends _t{}const rt=class rt extends a(HTMLElement,os){};rt.tagName="media-captions";let H=rt;const ht=class ht extends a(HTMLElement,rs){};ht.tagName="media-gesture";let L=ht;const lt=class lt extends a(HTMLElement,hs){constructor(){super(...arguments),this.Sa=document.createElement("img")}onSetup(){this.B=b(),this.$state.img.set(this.Sa)}onConnect(){const{src:t,alt:i}=this.$state,{crossorigin:e}=this.B.$state;this.Sa.parentNode!==this&&this.prepend(this.Sa),c(()=>{o(this.Sa,"src",t()),o(this.Sa,"alt",i()),o(this.Sa,"crossorigin",/ytimg\.com|vimeo/.test(t()||"")?null:e())})}};lt.tagName="media-poster";let f=lt;const Es=es('<img loading="eager" decoding="async" aria-hidden="true">'),mt=class mt extends a(HTMLElement,ls){constructor(){super(...arguments),this.Sa=this.Ta()}onSetup(){this.B=b(),this.$state.img.set(this.Sa)}onConnect(){const{src:t}=this.$state,{crossorigin:i}=this.B.$props;this.Sa.parentNode!==this&&this.prepend(this.Sa),c(()=>{o(this.Sa,"src",t()),o(this.Sa,"crossorigin",i())})}Ta(){return Mt(Es)}};mt.tagName="media-thumbnail";let x=mt;const pt=class pt extends a(HTMLElement,ms){onConnect(){c(()=>{this.textContent=this.$state.timeText()})}};pt.tagName="media-time";let C=pt;const ut=class ut extends a(HTMLElement,ps){};ut.tagName="media-controls";let y=ut;const gt=class gt extends a(HTMLElement,Rs){};gt.tagName="media-controls-group";let $=gt;class _s extends p{}const xt=class xt extends a(HTMLElement,_s){onSetup(){this.B=b(),this.Ua=us(""),this.Va=gs(this.Wa.bind(this))}onConnect(){xs(this.B.textTracks,"chapters",t=>{if(!t){this.Ua.set("");return}const i=()=>{const e=t==null?void 0:t.activeCues[0];this.Ua.set((e==null?void 0:e.text)||"")};i(),Vs(t,"cue-change",i)}),c(()=>{this.textContent=this.Va()})}Wa(){const{title:t,started:i}=this.B.$state,e=t(),n=this.Ua();return i()?n||e:e||n}};xt.tagName="media-chapter-title";let S=xt;const dt=class dt extends p{onConnect(t){T(()=>{if(!this.connectScope)return;const i=t.querySelector("svg"),e=i.firstElementChild,n=e.nextElementSibling;c(this.Xa.bind(this,i,e,n))})}Xa(t,i,e){const{size:n,trackWidth:h,fillPercent:r}=this.$props;o(t,"width",n()),o(t,"height",n()),o(i,"stroke-width",h()),o(e,"stroke-width",h()),o(e,"stroke-dashoffset",100-r())}};dt.props={size:96,trackWidth:8,fillPercent:50};let v=dt;const Nt=class Nt extends a(js,v){render(){return Is`
      <svg fill="none" viewBox="0 0 120 120" aria-hidden="true" data-part="root">
        <circle cx="60" cy="60" r="54" stroke="currentColor" data-part="track"></circle>
        <circle
          cx="60"
          cy="60"
          r="54"
          stroke="currentColor"
          pathLength="100"
          stroke-dasharray="100"
          data-part="track-fill"
        ></circle>
      </svg>
    `}};Nt.tagName="media-spinner";let q=Nt;const Tt=class Tt extends p{};Tt.props={when:""};let w=Tt;const bt=class bt extends a(HTMLElement,w){onSetup(){this.query=ds.create(this.$props.when)}onConnect(){c(this.Ya.bind(this))}Ya(){const t=this.firstElementChild,i=(t==null?void 0:t.localName)==="template",e=t instanceof HTMLElement;if(!this.query.matches){i?(this.textContent="",this.appendChild(t)):e&&(t.style.display="none");return}i?this.append(t.content.cloneNode(!0)):e&&(t.style.display="")}};bt.tagName="media-layout";let A=bt;const Ht=class Ht extends a(HTMLElement,Ns){};Ht.tagName="media-play-button";let k=Ht;const Lt=class Lt extends a(HTMLElement,Ts){};Lt.tagName="media-mute-button";let U=Lt;const ft=class ft extends a(HTMLElement,bs){};ft.tagName="media-caption-button";let W=ft;const Ct=class Ct extends a(HTMLElement,Hs){};Ct.tagName="media-fullscreen-button";let B=Ct;const yt=class yt extends a(HTMLElement,Ls){};yt.tagName="media-pip-button";let O=yt;const $t=class $t extends a(HTMLElement,fs){};$t.tagName="media-seek-button";let z=$t;const St=class St extends a(HTMLElement,Cs){};St.tagName="media-toggle-button";let D=St;const vt=class vt extends a(HTMLElement,ys){};vt.tagName="media-live-button";let X=vt;const qt=class qt extends a(HTMLElement,$s){};qt.tagName="media-tooltip";let Y=qt;const wt=class wt extends a(HTMLElement,Ps){onConnect(){this.style.display="contents"}};wt.tagName="media-tooltip-trigger";let Z=wt;const At=class At extends a(HTMLElement,Ss){};At.tagName="media-tooltip-content";let F=At;function u(l,t){T(()=>{if(!l.connectScope)return;const i=l.querySelector("template");i&&c(()=>{const e=l.getOptions();as(i,e.length,(n,h)=>{const{label:r,value:g}=e[h],m=n.querySelector('[data-part="label"]');n.setAttribute("value",g),m&&(ts(r)?m.textContent=r:c(()=>{m.textContent=r()})),t==null||t(n,e[h],h)})})})}const kt=class kt extends a(HTMLElement,vs){onConnect(){u(this)}};kt.tagName="media-audio-radio-group";let J=kt;const Ut=class Ut extends a(HTMLElement,qs){onConnect(){u(this)}};Ut.tagName="media-captions-radio-group";let K=Ut;const Wt=class Wt extends a(HTMLElement,ws){};Wt.tagName="media-menu";let Q=Wt;const Bt=class Bt extends a(HTMLElement,_t){};Bt.tagName="media-menu-button";let V=Bt;const d=class d extends a(HTMLElement,As){};d.tagName="media-menu-portal",d.attrs={disabled:{converter(t){return ts(t)?t:t!==null}}};let j=d;const Ot=class Ot extends a(HTMLElement,Gs){};Ot.tagName="media-menu-item";let I=Ot;const zt=class zt extends a(HTMLElement,ks){};zt.tagName="media-menu-items";let R=zt;const Dt=class Dt extends a(HTMLElement,Us){onConnect(){u(this,(t,i)=>{const{cue:e,startTime:n,duration:h}=i,r=t.querySelector(".vds-thumbnail,media-thumbnail"),g=t.querySelector('[data-part="start-time"]'),m=t.querySelector('[data-part="duration"]');g&&(g.textContent=n),m&&(m.textContent=h),r&&(r.setAttribute("time",e.startTime+""),c(()=>{const{thumbnails:is}=this.$props;r.setAttribute("src",is())}))})}};Dt.tagName="media-chapters-radio-group";let P=Dt;const Xt=class Xt extends a(HTMLElement,Ws){onConnect(){u(this)}};Xt.tagName="media-speed-radio-group";let G=Xt;const Yt=class Yt extends a(HTMLElement,Bs){onConnect(){u(this,(t,i)=>{const e=i.bitrate,n=t.querySelector('[data-part="bitrate"]');e&&n&&c(()=>{n.textContent=e()||""})})}};Yt.tagName="media-quality-radio-group";let E=Yt;const Zt=class Zt extends a(HTMLElement,Os){};Zt.tagName="media-radio";let _=Zt;const Ft=class Ft extends a(HTMLElement,zs){};Ft.tagName="media-radio-group";let M=Ft;const Jt=class Jt extends a(HTMLElement,ss){};Jt.tagName="media-slider";let tt=Jt;const Kt=class Kt extends x{onSetup(){super.onSetup(),this.Za=Ds(ss.state)}onConnect(){super.onConnect(),c(this._a.bind(this))}_a(){const{duration:t}=this.B.$state;this.time=this.Za.pointerRate()*t()}};Kt.tagName="media-slider-thumbnail";let st=Kt;const N=class N extends a(HTMLElement,Xs){onConnect(){c(()=>{this.textContent=this.getValueText()})}};N.tagName="media-slider-value",N.attrs={padMinutes:{converter:Ys}};let at=N;const Ms=es('<video muted playsinline preload="none" style="max-width: unset;"></video>'),Qt=class Qt extends a(HTMLElement,Zs){constructor(){super(...arguments),this.$a=this.Ra()}onSetup(){this.B=b(),this.$state.video.set(this.$a)}onConnect(){const{crossorigin:t,canLoad:i}=this.B.$state,{src:e}=this.$state;this.$a.parentNode!==this&&this.prepend(this.$a),c(()=>{o(this.$a,"src",e()),o(this.$a,"crossorigin",t()),o(this.$a,"preload",i()?"auto":"none")})}Ra(){return Mt(Ms)}};Qt.tagName="media-slider-video";let et=Qt;const Vt=class Vt extends a(HTMLElement,Fs){};Vt.tagName="media-time-slider";let it=Vt;const jt=class jt extends a(HTMLElement,Js){};jt.tagName="media-slider-preview";let nt=jt;const It=class It extends a(HTMLElement,Ks){};It.tagName="media-volume-slider";let ct=It;const Rt=class Rt extends a(HTMLElement,Qs){constructor(){super(...arguments),this.ab=null}onConnect(){T(()=>{if(!this.connectScope)return;const t=this.querySelector("template");t&&(this.ab=t,c(this.bb.bind(this)))})}bb(){if(!this.ab)return;const t=as(this.ab,this.cues.length||1);this.setRefs(t)}};Rt.tagName="media-slider-chapters";let ot=Rt;s(A);s(y);s($);s(f);s(W);s(B);s(U);s(O);s(k);s(z);s(D);s(tt);s(ct);s(it);s(ot);s(nt);s(at);s(st);s(et);s(Q);s(V);s(j);s(R);s(I);s(J);s(K);s(G);s(E);s(P);s(M);s(_);s(Y);s(Z);s(F);s(L);s(x);s(H);s(X);s(C);s(S);s(q);
