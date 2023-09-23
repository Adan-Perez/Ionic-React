import{K as O,e as P,g as B,b as p,f as F,h as H,j as h,k as U,l as Y,m as $}from"./index-8bbd338a.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const A=new WeakMap,D=(e,s,t,o=0,n=!1)=>{A.has(e)!==t&&(t?G(e,s,o,n):W(e,s))},q=e=>e===e.getRootNode().activeElement,G=(e,s,t,o=!1)=>{const n=s.parentNode,i=s.cloneNode(!1);i.classList.add("cloned-input"),i.tabIndex=-1,o&&(i.disabled=!0),n.appendChild(i),A.set(e,i);const a=e.ownerDocument.dir==="rtl"?9999:-9999;e.style.pointerEvents="none",s.style.transform="translate3d(".concat(a,"px,").concat(t,"px,0) scale(0)")},W=(e,s)=>{const t=A.get(e);t&&(A.delete(e),t.remove()),e.style.pointerEvents="",s.style.transform=""},N=50,j=(e,s,t)=>{if(!t||!s)return()=>{};const o=a=>{q(s)&&D(e,s,a)},n=()=>D(e,s,!1),i=()=>o(!0),c=()=>o(!1);return P(t,"ionScrollStart",i),P(t,"ionScrollEnd",c),s.addEventListener("blur",n),()=>{B(t,"ionScrollStart",i),B(t,"ionScrollEnd",c),s.removeEventListener("blur",n)}},I="input, textarea, [no-blur], [contenteditable]",z=()=>{let e=!0,s=!1;const t=document,o=()=>{s=!0},n=()=>{e=!0},i=c=>{if(s){s=!1;return}const a=t.activeElement;if(!a||a.matches(I))return;const f=c.target;f!==a&&(f.matches(I)||f.closest(I)||(e=!1,setTimeout(()=>{e||a.blur()},50)))};return P(t,"ionScrollStart",o),t.addEventListener("focusin",n,!0),t.addEventListener("touchend",i,!1),()=>{B(t,"ionScrollStart",o,!0),t.removeEventListener("focusin",n,!0),t.removeEventListener("touchend",i,!1)}},J=.3,Q=(e,s,t,o)=>{var n;const i=(n=e.closest("ion-item,[ion-item]"))!==null&&n!==void 0?n:e;return V(i.getBoundingClientRect(),s.getBoundingClientRect(),t,o)},V=(e,s,t,o)=>{const n=e.top,i=e.bottom,c=s.top,a=Math.min(s.bottom,o-t),f=c+15,v=a-N-i,d=f-n,l=Math.round(v<0?-v:d>0?-d:0),S=Math.min(l,n-c),T=Math.abs(S)/J,r=Math.min(400,Math.max(150,T));return{scrollAmount:S,scrollDuration:r,scrollPadding:t,inputSafeY:-(n-f)+4}},R="$ionPaddingTimer",M=(e,s,t)=>{const o=e[R];o&&clearTimeout(o),s>0?e.style.setProperty("--keyboard-offset","".concat(s,"px")):e[R]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),t&&t()},120)},_=(e,s,t)=>{const o=()=>{s&&M(s,0,t)};e.addEventListener("focusout",o,{once:!0})};let g=0;const K="data-ionic-skip-scroll-assist",X=(e,s,t,o,n,i,c,a=!1)=>{const f=i&&(c===void 0||c.mode===H.None);let u=!1;const v=h!==void 0?h.innerHeight:0,d=m=>{if(u===!1){u=!0;return}k(e,s,t,o,m.detail.keyboardHeight,f,a,v,!1)},l=()=>{u=!1,h===null||h===void 0||h.removeEventListener("ionKeyboardDidShow",d),e.removeEventListener("focusout",l,!0)},S=async()=>{if(s.hasAttribute(K)){s.removeAttribute(K);return}k(e,s,t,o,n,f,a,v),h===null||h===void 0||h.addEventListener("ionKeyboardDidShow",d),e.addEventListener("focusout",l,!0)};return e.addEventListener("focusin",S,!0),()=>{e.removeEventListener("focusin",S,!0),h===null||h===void 0||h.removeEventListener("ionKeyboardDidShow",d),e.removeEventListener("focusout",l,!0)}},C=e=>{document.activeElement!==e&&(e.setAttribute(K,"true"),e.focus())},k=async(e,s,t,o,n,i,c=!1,a=0,f=!0)=>{if(!t&&!o)return;const u=Q(e,t||o,n,a);if(t&&Math.abs(u.scrollAmount)<4){C(s),i&&t!==null&&(M(t,g),_(s,t,()=>g=0));return}if(D(e,s,!0,u.inputSafeY,c),C(s),U(()=>e.click()),i&&t&&(g=u.scrollPadding,M(t,g)),typeof window<"u"){let v;const d=async()=>{v!==void 0&&clearTimeout(v),window.removeEventListener("ionKeyboardDidShow",l),window.removeEventListener("ionKeyboardDidShow",d),t&&await $(t,0,u.scrollAmount,u.scrollDuration),D(e,s,!1,u.inputSafeY),C(s),i&&_(s,t,()=>g=0)},l=()=>{window.removeEventListener("ionKeyboardDidShow",l),window.addEventListener("ionKeyboardDidShow",d)};if(t){const S=await Y(t),m=S.scrollHeight-S.clientHeight;if(f&&u.scrollAmount>m-S.scrollTop){s.type==="password"?(u.scrollAmount+=N,window.addEventListener("ionKeyboardDidShow",l)):window.addEventListener("ionKeyboardDidShow",d),v=setTimeout(d,1e3);return}}d()}},Z=!0,te=async(e,s)=>{const t=document,o=s==="ios",n=s==="android",i=e.getNumber("keyboardHeight",290),c=e.getBoolean("scrollAssist",!0),a=e.getBoolean("hideCaretOnScroll",o),f=e.getBoolean("inputBlurring",o),u=e.getBoolean("scrollPadding",!0),v=Array.from(t.querySelectorAll("ion-input, ion-textarea")),d=new WeakMap,l=new WeakMap,S=await O.getResizeMode(),m=async r=>{await new Promise(b=>p(r,b));const y=r.shadowRoot||r,w=y.querySelector("input")||y.querySelector("textarea"),L=F(r),x=L?null:r.closest("ion-footer");if(!w)return;if(L&&a&&!d.has(r)){const b=j(r,w,L);d.set(r,b)}if(!(w.type==="date"||w.type==="datetime-local")&&(L||x)&&c&&!l.has(r)){const b=X(r,w,L,x,i,u,S,n);l.set(r,b)}},T=r=>{if(a){const y=d.get(r);y&&y(),d.delete(r)}if(c){const y=l.get(r);y&&y(),l.delete(r)}};f&&Z&&z();for(const r of v)m(r);t.addEventListener("ionInputDidLoad",r=>{m(r.detail)}),t.addEventListener("ionInputDidUnload",r=>{T(r.detail)})};export{te as startInputShims};