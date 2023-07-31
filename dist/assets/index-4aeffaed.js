(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function l(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=l(o);fetch(o.href,c)}})();const C=t=>console.log(`Hello ${t}`),D=t=>console.log(`Goodbye ${t}`);let p;const M=new Uint8Array(16);function S(){if(!p&&(p=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!p))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return p(M)}const n=[];for(let t=0;t<256;++t)n.push((t+256).toString(16).slice(1));function _(t,e=0){return(n[t[e+0]]+n[t[e+1]]+n[t[e+2]]+n[t[e+3]]+"-"+n[t[e+4]]+n[t[e+5]]+"-"+n[t[e+6]]+n[t[e+7]]+"-"+n[t[e+8]]+n[t[e+9]]+"-"+n[t[e+10]]+n[t[e+11]]+n[t[e+12]]+n[t[e+13]]+n[t[e+14]]+n[t[e+15]]).toLowerCase()}const H=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),g={randomUUID:H};function B(t,e,l){if(g.randomUUID&&!e&&!t)return g.randomUUID();t=t||{};const s=t.random||(t.rng||S)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,e){l=l||0;for(let o=0;o<16;++o)e[l+o]=s[o];return e}return _(s)}const O="Ufufufu~ Yahallo! Kore wa tekusuto fairu desu~";function P(){const t=document.querySelector("#root");let e=1;if(t){const l="https://hologif.api.fujitime.my.id/api",o=async r=>{try{const a=await fetch(`${l}${r}`);if(!a.ok)throw new Error(`Failed to fetch data from the HoloGif API. Status: ${a.status}`);return a.json()}catch(a){throw console.error(a),t.innerHTML="Failed to fetch Hololive data. Please try again later.",a}},c=async(r,a)=>{const u=localStorage.getItem(r);if(u)return JSON.parse(u);{const d=await o(a);return localStorage.setItem(r,JSON.stringify(d)),d}},i=r=>{Promise.all([c(`gifData-${r}`,`/?id=${r}&format=gif`),c(`quoteData-${r}`,`/?id=${r}&format=quote`),c(`socialMediaData-${r}`,`/?id=${r}&format=social_media`),c(`nameData-${r}`,`/?id=${r}&format=name`)]).then(([a,u,d,v])=>{const I=a.gif,L=u.quote,b=d.social_media.youtube,$=d.social_media.twitter,U=v.name;t.innerHTML=`
            <div class="container">
              <img src="${I}" class="centered-image" />
              <h2>${U}</h2>
              <div class="sosmed">
                <a href="${b}" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                <linearGradient id="PgB_UHa29h0TpFV_moJI9a_9a46bTk3awwI_gr1" x1="9.816" x2="41.246" y1="9.871" y2="41.301" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f44f5a"></stop><stop offset=".443" stop-color="#ee3d4a"></stop><stop offset="1" stop-color="#e52030"></stop></linearGradient><path fill="url(#PgB_UHa29h0TpFV_moJI9a_9a46bTk3awwI_gr1)" d="M45.012,34.56c-0.439,2.24-2.304,3.947-4.608,4.267C36.783,39.36,30.748,40,23.945,40	c-6.693,0-12.728-0.64-16.459-1.173c-2.304-0.32-4.17-2.027-4.608-4.267C2.439,32.107,2,28.48,2,24s0.439-8.107,0.878-10.56	c0.439-2.24,2.304-3.947,4.608-4.267C11.107,8.64,17.142,8,23.945,8s12.728,0.64,16.459,1.173c2.304,0.32,4.17,2.027,4.608,4.267	C45.451,15.893,46,19.52,46,24C45.89,28.48,45.451,32.107,45.012,34.56z"></path><path d="M32.352,22.44l-11.436-7.624c-0.577-0.385-1.314-0.421-1.925-0.093C18.38,15.05,18,15.683,18,16.376	v15.248c0,0.693,0.38,1.327,0.991,1.654c0.278,0.149,0.581,0.222,0.884,0.222c0.364,0,0.726-0.106,1.04-0.315l11.436-7.624	c0.523-0.349,0.835-0.932,0.835-1.56C33.187,23.372,32.874,22.789,32.352,22.44z" opacity=".05"></path><path d="M20.681,15.237l10.79,7.194c0.689,0.495,1.153,0.938,1.153,1.513c0,0.575-0.224,0.976-0.715,1.334	c-0.371,0.27-11.045,7.364-11.045,7.364c-0.901,0.604-2.364,0.476-2.364-1.499V16.744C18.5,14.739,20.084,14.839,20.681,15.237z" opacity=".07"></path><path fill="#fff" d="M19,31.568V16.433c0-0.743,0.828-1.187,1.447-0.774l11.352,7.568c0.553,0.368,0.553,1.18,0,1.549	l-11.352,7.568C19.828,32.755,19,32.312,19,31.568z"></path>
                </svg> 
                </a>
                <a href="${$}" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 120 120">
            <path d="M98.172,36.182L110,25.199l-16.952,4.422c-3.723-3.359-8.638-5.422-14.048-5.422 c-11.598,0-21,9.402-21,21c0,1.34,0.139,2.647,0.379,3.917C25.33,47.69,16,26.999,16,26.999s-5,3.2-5,11.2c0,12,9,17,9,17h-8 c1,14,17,20.5,17,20.5H19c3,9.5,19,14.5,19,14.5c-10,8-28,5-28,5s9,11,35,11c48.593,0,54.896-39.793,54.998-60.48L110,33.299 L98.172,36.182z" opacity=".35"></path><path fill="#0075ff" d="M98.172,32.182L110,21.199l-16.952,4.422c-3.723-3.359-8.638-5.422-14.048-5.422 c-11.598,0-21,9.402-21,21c0,1.34,0.139,2.647,0.379,3.917C25.33,43.69,16,22.999,16,22.999s-5,3.2-5,11.2c0,12,9,17,9,17h-8 c1,14,17,20.5,17,20.5H19c3,9.5,19,14.5,19,14.5c-10,8-28,5-28,5s9,11,35,11c48.593,0,54.896-39.793,54.998-60.48L110,29.299 L98.172,32.182z"></path>
            </svg>
                </a>
              </div>
              <p>${L}</p>
            </div>`}).catch(a=>{console.error(a)})},y=()=>{e=e%31+1,i(e)},w=()=>{e=(e-2+31)%31+1,i(e)},x=()=>{e=Math.floor(Math.random()*31)+1,i(e)};i(e);const m=document.querySelector("#nextButton");m&&m.addEventListener("click",y);const h=document.querySelector("#backButton");h&&h.addEventListener("click",w);const f=document.querySelector("#randomButton");f&&f.addEventListener("click",x)}else console.log("Info container not found")}P();console.log(B());console.log(O);C("i'm fox");D("DIE");
