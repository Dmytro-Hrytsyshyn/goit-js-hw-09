import"./assets/modulepreload-polyfill-3cfb730f.js";const a=document.querySelector(".feedback-form");let r={};const l=e=>{if(e.preventDefault(),e.target.reset(),!r.email||!r.message){alert("Fill please all fields");return}localStorage.removeItem("feedback-form-state")},m=()=>{const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e!==null){r=e;for(const t in e)e.hasOwnProperty(t)&&(a.elements[t].value=e[t])}};m();const s=e=>{const t=e.target.value,o=e.target.name;r[o]=t,localStorage.setItem("feedback-form-state",JSON.stringify(r))};a.addEventListener("input",s);a.addEventListener("submit",l);
//# sourceMappingURL=commonHelpers2.js.map
