"use strict";

// All content is kept here so this portfolio can be edited without a build system.
const CERTIFICATES = [
  {id:1,file:"01-badminton-tournament-2025-runner-up.jpg",title:"Badminton — Junior Runner-Up",subtitle:"Tournament trophy · 2025",type:"Sports"},
  {id:2,file:"02-chess-2nd-place.jpg",title:"Chess — Second Place",subtitle:"Competition trophy",type:"Sports"},
  {id:3,file:"03-fll-team-winning-prize.jpg",title:"FIRST LEGO League — Team",subtitle:"Team photograph · Robotics",type:"STEM"},
  {id:4,file:"04-fll1st-runner-up.jpg",title:"FIRST LEGO League — Robot Game",subtitle:"First Runner-Up · Team Captain · 2025–26",type:"STEM"},
  {id:5,file:"05-malayalam-solo-singing-1st.jpg",title:"Malayalam Singing — First Place",subtitle:"Singing competition trophy",type:"Arts"},
  {id:6,file:"06-r10-adis-elites-joel-thomas-cyril.jpg",title:"Curtin STEM Challenge",subtitle:"ADIS Elites · Top 12 Teams · 2026",type:"STEM"},
  {id:7,file:"07-whatsapp-image-2026-10-27-at-5-15-53-pm.jpg",title:"IIT Madras — Electronic Systems",subtitle:"Eight-week course participation · 2026",type:"Education"},
  {id:8,file:"08-caroms-doubles-2nd-prize.jpg",title:"Carrom Doubles — Second Prize",subtitle:"Marthoma Smruthi · 2025",type:"Sports"},
  {id:9,file:"09-chess-1st-place.jpg",title:"Chess — First Prize",subtitle:"Marthoma Smruthi · 2025",type:"Sports"},
  {id:10,file:"10-img20260427-20375936.jpg",title:"School Football — Second Place",subtitle:"ADIS Inter-House · 2025",type:"Sports"},
  {id:11,file:"11-img20260427-20391466.jpg",title:"English Short Film — Participation",subtitle:"Indian School Al Ain · 2025",type:"Arts"},
  {id:12,file:"12-img20260427-20402285.jpg",title:"English Short Film — Second Position",subtitle:"Inter-school recognition · 2025",type:"Arts"},
  {id:13,file:"13-img20260427-20412523.jpg",title:"Mayoor STEM — Participation",subtitle:"Senior category · 2024",type:"STEM"},
  {id:14,file:"14-img20260427-20422802.jpg",title:"Sunday School — Participation",subtitle:"Competition certificate",type:"Arts"},
  {id:15,file:"15-img20260427-20432572.jpg",title:"Rubik's Cube — First Place",subtitle:"Abu Dhabi Indian School · 2022",type:"Sports"},
  {id:16,file:"16-img20260427-20443238.jpg",title:"Rubik's Cube — Third Position",subtitle:"Inter-Class competition · 2021–22",type:"Sports"},
  {id:17,file:"17-img20260427-20454307.jpg",title:"CBSE Cluster U-17 Football",subtitle:"Participation certificate · 2024–25",type:"Sports"},
  {id:18,file:"18-img20260427-20470554.jpg",title:"School Football — First Place",subtitle:"ADIS Inter-House · 2024",type:"Sports"},
  {id:19,file:"19-img20260427-20475646.jpg",title:"School Football — Third Place",subtitle:"ADIS Inter-House · 2023",type:"Sports"},
  {id:20,file:"20-img20260427-20485957.jpg",title:"Mayoor STEM — First Runner-Up",subtitle:"6th Inter-School STEM Competition · 2024",type:"STEM"},
  {id:21,file:"21-malayalam-solo-1st.jpg",title:"Malayalam Solo — First Prize",subtitle:"Singing competition trophy · 2023",type:"Arts"},
  {id:22,file:"22-mayoor-stem-competition-winning-prize.jpg",title:"Mayoor STEM — Winning Team",subtitle:"Team recognition photograph · 2024",type:"STEM"}
].map(item => ({
  ...item,
  full: `assets/certificates/full/${item.file}`,
  thumb: `assets/certificates/thumbs/${item.file.replace(/\.jpg$/i, ".webp")}`
}));

const PROJECTS = [
  {title:"Reaper One",mark:"R1",category:"Embedded hardware",status:"Physically built",subtitle:"A multifunction ESP32 device",bg:"#382820",description:"I built and tested an ESP32-based electronic prototype with firmware and an interactive interface. The repository documents NFC/RFID, infrared, Sub-GHz radio, Bluetooth and Wi-Fi modules, together with components, wiring and supporting code.",links:[{label:"Source code ↗",url:"https://github.com/JoelCyril/reaper1.2"}]},
  {title:"SWAP",mark:"↔",category:"Full-stack web",status:"Working project",subtitle:"A free item-exchange marketplace",bg:"#24342b",description:"A community-driven platform where users can list items, propose barter offers, exchange messages and trade without cash. Keeping SWAP completely free led me beyond frontend development into self-hosted infrastructure.",links:[{label:"Live app ↗",url:"https://swap-xi-nine.vercel.app/"},{label:"Source code ↗",url:"https://github.com/JoelCyril/swap"}]},
  {title:"Pulso.ai",mark:"P",category:"AI / software",status:"Experimental",subtitle:"AI-assisted health understanding",bg:"#282b44",description:"A TypeScript/Vite application exploring how AI tools can make health-related patterns and information more understandable. The application and its capabilities continue to evolve.",links:[{label:"Live app ↗",url:"https://pulso-ai.vercel.app/"},{label:"Source code ↗",url:"https://github.com/JoelCyril/Pulso.ai"}]},
  {title:"ADIS ReadTrack",mark:"RT",category:"Education technology",status:"In development",subtitle:"Reading activity and progress",bg:"#21382d",description:"A school-focused development project exploring ways to organize reading activity and progress for the ADIS community. Its features and technical documentation are still in development.",links:[{label:"Repository ↗",url:"https://github.com/JoelCyril/adis-readtrack"}]},
  {title:"Veris",mark:"V",category:"Software project",status:"In development",subtitle:"Independent development project",bg:"#282b3a",description:"An independent software experiment focused on taking an idea through implementation and iteration. Further technical details will be added as the repository becomes available.",links:[{label:"Repository ↗",url:"https://github.com/JoelCyril/veris"}]}
];

const AWARDS = [
  {title:"FIRST LEGO League · Robot Game",rank:"First Runner-Up",date:"Abu Dhabi Regional · 2025–26",photoId:4},
  {title:"Mayoor Inter-School STEM",rank:"First Runner-Up",date:"Senior Category · 2024",photoId:20},
  {title:"Curtin STEM Challenge",rank:"Top 12 Teams",date:"Curtin University Dubai · 2026",photoId:6},
  {title:"English Short Film",rank:"Second Position",date:"Indian School Al Ain · 2025",photoId:12},
  {title:"CBSE Cluster U-17 Football",rank:"Participant",date:"CBSE Cluster · 2024–25",photoId:17},
  {title:"Rubik's Cube",rank:"First Place",date:"Inter-House · 2022",photoId:15},
  {title:"Malayalam Song",rank:"First Prize",date:"School competition · 2024",photoId:5},
  {title:"Chess · Junior",rank:"Second Prize",date:"School competition · 2024",photoId:2},
  {title:"Carrom Doubles · Junior",rank:"Second Prize",date:"Marthoma Smruthi · 2025",photoId:8},
  {title:"Badminton · Junior",rank:"Runner-Up",date:"Marthoma Smruthi · 2025",photoId:1},
  {title:"Chess · Junior",rank:"First Prize",date:"Marthoma Smruthi · 2025",photoId:9},
  {title:"Malayalam Solo",rank:"First Prize",date:"Sunday School · 2023",photoId:21},
  {title:"Rubik's Cube · Inter-Class",rank:"Third Place",date:"2021–22",photoId:16}
];

const byId = Object.fromEntries(CERTIFICATES.map(c => [c.id, c]));
const el = (id) => document.getElementById(id);
function create(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}
function add(node, ...children) { node.append(...children); return node; }
function image(src, alt, loading="lazy") {
  const img = document.createElement("img");
  img.src = src; img.alt = alt; img.loading = loading;
  img.decoding = "async";
  return img;
}

function renderProjects() {
  const wrap = el("projects-list");
  PROJECTS.forEach((p, i) => {
    const card = create("article", "project-card");
    card.setAttribute("data-reveal", "");
    const art = create("div", "project-art");
    art.style.background = p.bg;
    add(art, create("span", "", p.mark), create("small", "", p.category.toUpperCase()));
    const copy = create("div", "project-copy");
    add(copy, create("div", "project-meta", `${p.status} / ${p.category}`), create("h3", "project-title", p.title), create("p", "project-subtitle", p.subtitle), create("p", "project-description", p.description));
    const links = create("div", "project-links");
    p.links.forEach(link => {
      const a = create("a", "", link.label);
      a.href = link.url; a.target = "_blank"; a.rel = "noopener noreferrer";
      links.append(a);
    });
    add(copy, links);
    add(card, art, copy);
    wrap.append(card);
  });
}

function renderAwards() {
  const wrap = el("awards-grid");
  AWARDS.forEach((a) => {
    const photo = byId[a.photoId];
    const card = create("button", "award-card"); card.type = "button";
    card.setAttribute("aria-label", `View ${a.title} photograph`);
    add(card, image(photo.thumb, `${a.title} evidence`), create("h3", "award-title", a.title), create("p", "award-rank", a.rank), create("p", "award-date", a.date), create("span", "award-view", "VIEW PHOTOS ↗"));
    card.addEventListener("click", () => openLightbox(a.photoId));
    wrap.append(card);
  });
}

const FILTERS = ["All", "STEM", "Sports", "Arts", "Education"];
let activeFilter = "All";
let visiblePhotos = CERTIFICATES;
function renderFilters() {
  const toolbar = el("gallery-filters");
  toolbar.replaceChildren();
  FILTERS.forEach(name => {
    const count = name === "All" ? CERTIFICATES.length : CERTIFICATES.filter(c => c.type === name).length;
    const btn = create("button", "gallery-filter", `${name} · ${count}`);
    btn.type = "button";
    btn.setAttribute("aria-pressed", String(name === activeFilter));
    btn.addEventListener("click", () => { activeFilter = name; renderFilters(); renderGallery(); });
    toolbar.append(btn);
  });
}
function renderGallery() {
  const gallery = el("gallery"); gallery.replaceChildren();
  visiblePhotos = activeFilter === "All" ? CERTIFICATES : CERTIFICATES.filter(c => c.type === activeFilter);
  visiblePhotos.forEach(item => {
    const card = create("button", "gallery-card"); card.type="button";
    card.setAttribute("aria-label", `Open full-resolution image: ${item.title}`);
    add(card, image(item.thumb, item.title), create("span", "gallery-title", item.title), create("span", "gallery-sub", item.subtitle));
    card.addEventListener("click", () => openLightbox(item.id));
    gallery.append(card);
  });
}

let activePhoto = null;
let activeSequence = CERTIFICATES;
let lastFocused = null;
let zoom = 1, dragX = 0, dragY = 0;
const stage = el("lightbox-stage"), fullImage = el("lightbox-image");
function renderZoom() {
  fullImage.style.transform = `translate(${dragX}px, ${dragY}px) scale(${zoom})`;
  fullImage.style.cursor = zoom === 1 ? "zoom-in" : "grab";
  el("zoom-reset").textContent = `${Math.round(zoom*100)}%`;
}
function setZoom(next) { zoom = Math.max(1, Math.min(next, 4)); dragX = 0; dragY = 0; renderZoom(); }
function openLightbox(id) {
  const item = byId[id]; if (!item) return;
  lastFocused = document.activeElement;
  activeSequence = visiblePhotos.some(p=>p.id===id) ? visiblePhotos : CERTIFICATES;
  activePhoto = activeSequence.findIndex(p => p.id === id);
  if (activePhoto < 0) { activeSequence = CERTIFICATES; activePhoto = activeSequence.findIndex(p=>p.id===id); }
  el("lightbox").hidden = false;
  el("lightbox").setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  showCurrent();
  el("lightbox-close").focus();
}
function showCurrent() {
  if (activePhoto === null) return;
  const item = activeSequence[activePhoto];
  fullImage.src = item.full;
  fullImage.alt = item.title;
  el("lightbox-counter").textContent = `${String(activePhoto+1).padStart(2,"0")} / ${String(activeSequence.length).padStart(2,"0")}`;
  el("lightbox-title").textContent = item.title;
  el("lightbox-subtitle").textContent = item.subtitle;
  el("original-link").href = item.full;
  setZoom(1);
}
function stepLightbox(step) {
  if(activePhoto === null) return;
  activePhoto = (activePhoto + step + activeSequence.length) % activeSequence.length;
  showCurrent();
}
function closeLightbox() {
  if (activePhoto === null) return;
  el("lightbox").hidden = true;
  el("lightbox").setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  fullImage.removeAttribute("src");
  activePhoto = null;
  if (lastFocused?.focus && lastFocused.isConnected) lastFocused.focus();
}
el("lightbox-close").addEventListener("click", closeLightbox);
el("lightbox-prev").addEventListener("click", () => stepLightbox(-1));
el("lightbox-next").addEventListener("click", () => stepLightbox(1));
el("zoom-in").addEventListener("click", () => setZoom(zoom + .35));
el("zoom-out").addEventListener("click", () => setZoom(zoom - .35));
el("zoom-reset").addEventListener("click", () => setZoom(1));
fullImage.addEventListener("click", () => setZoom(zoom === 1 ? 1.6 : 1));
el("lightbox").addEventListener("mousedown", e => { if (e.target === el("lightbox")) closeLightbox(); });
document.addEventListener("keydown", e => {
  if (activePhoto === null) return;
  if (e.key === "Escape") { e.preventDefault(); closeLightbox(); }
  if (e.key === "ArrowLeft") { e.preventDefault(); stepLightbox(-1); }
  if (e.key === "ArrowRight") { e.preventDefault(); stepLightbox(1); }
  if (e.key === "+" || e.key === "=") { e.preventDefault(); setZoom(zoom + .35); }
  if (e.key === "-") { e.preventDefault(); setZoom(zoom - .35); }
  if (e.key === "Tab") {
    const controls = [...el("lightbox").querySelectorAll("button,a")].filter(x=>x.getClientRects().length);
    const current = controls.indexOf(document.activeElement);
    if (e.shiftKey && current <= 0) { e.preventDefault(); controls.at(-1).focus(); }
    else if (!e.shiftKey && current === controls.length - 1) { e.preventDefault(); controls[0].focus(); }
  }
});
let pointerStart = null;
stage.addEventListener("pointerdown", e => {
  if (e.pointerType === "mouse" && e.button !== 0) return;
  pointerStart = {x:e.clientX,y:e.clientY,ox:dragX,oy:dragY};
  if (zoom > 1) stage.setPointerCapture(e.pointerId);
});
stage.addEventListener("pointermove", e => {
  if (!pointerStart || !stage.hasPointerCapture(e.pointerId) || zoom === 1) return;
  dragX = pointerStart.ox + (e.clientX - pointerStart.x);
  dragY = pointerStart.oy + (e.clientY - pointerStart.y);
  renderZoom();
});
stage.addEventListener("pointerup", e => {
  if (pointerStart && zoom === 1 && Math.abs(e.clientX - pointerStart.x)>65) stepLightbox(e.clientX < pointerStart.x ? 1 : -1);
  pointerStart = null;
});
stage.addEventListener("pointercancel", () => { pointerStart = null; });
document.querySelectorAll("[data-open-image]").forEach(btn => btn.addEventListener("click", () => openLightbox(Number(btn.dataset.openImage))));

function initReveal() {
  const nodes = document.querySelectorAll("[data-reveal]");
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
    nodes.forEach(n=>n.classList.add("revealed")); return;
  }
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("revealed");obs.unobserve(entry.target);}});
  }, {threshold:.09,rootMargin:"0px 0px 10px 0px"});
  nodes.forEach(n=>obs.observe(n));
}
function initNavigation() {
  const anchors = [...document.querySelectorAll('.navigation a')];
  const sections = anchors.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        anchors.forEach(a=>{a.classList.toggle('active',a.getAttribute('href') === '#'+entry.target.id);});
      }
    });
  }, {rootMargin:'-20% 0px -75% 0px',threshold:0});
  sections.forEach(s=>observer.observe(s));
}

function initAmbientBackground() {
  const canvas = el("ambient-canvas");
  const context = canvas.getContext("2d", {alpha:true});
  if(!context) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mouse = {x:-9999,y:-9999,on:false};
  const dots=Array.from({length:65},(_,i)=>({x:(i*.61803398875+.06)%1,y:(i*.38196601125+.27)%1,p:i*1.94,r:i%8===0?2.1:1.1}));
  let w=1,h=1,dpr=1,last=0,raf=0,visible=true;
  function resize(){
    w=window.innerWidth;h=window.innerHeight;dpr=Math.min(2,devicePixelRatio||1);
    canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);
    context.setTransform(dpr,0,0,dpr,0,0);
    paint(0);
  }
  function rgba(a){return `rgba(255,93,53,${a})`;}
  function paint(t){
    context.clearRect(0,0,w,h);
    const glow=context.createRadialGradient(w*.7,h*.22,10,w*.7,h*.22,Math.max(w,h)*.8);
    glow.addColorStop(0,"rgba(255,93,53,0.085)");glow.addColorStop(1,"rgba(255,93,53,0)");
    context.fillStyle=glow;context.fillRect(0,0,w,h);
    for(let x=20;x<w;x+=54){context.strokeStyle=rgba(.03);context.beginPath();context.moveTo(x,0);context.lineTo(x,h);context.stroke();}
    for(let y=20;y<h;y+=54){context.strokeStyle=rgba(.03);context.beginPath();context.moveTo(0,y);context.lineTo(w,y);context.stroke();}
    if(mouse.on){
      const a=context.createRadialGradient(mouse.x,mouse.y,0,mouse.x,mouse.y,210);
      a.addColorStop(0,rgba(.16));a.addColorStop(.3,rgba(.05));a.addColorStop(1,rgba(0));
      context.fillStyle=a;context.fillRect(mouse.x-210,mouse.y-210,420,420);
    }
    dots.forEach(d=>{
      const seconds=t/1000;
      let x=d.x*w+(reduce?0:Math.sin(seconds*.32+d.p)*8);
      let y=d.y*h+(reduce?0:Math.cos(seconds*.27+d.p)*8);
      let intensity=0;
      if(mouse.on){const dx=x-mouse.x,dy=y-mouse.y,dist=Math.hypot(dx,dy);if(dist<148&&dist>.01){intensity=1-dist/148;x+=(dx/dist)*intensity*17;y+=(dy/dist)*intensity*17;context.strokeStyle=rgba(intensity*.2);context.beginPath();context.moveTo(x,y);context.lineTo(mouse.x,mouse.y);context.stroke();}}
      context.fillStyle=rgba((.21+intensity*.53)*(reduce?.85:(.8+Math.sin(seconds*.7+d.p)*.17)));
      context.beginPath();context.arc(x,y,d.r+intensity*1.5,0,2*Math.PI);context.fill();
    });
  }
  function loop(time){if(visible&&time-last>32){paint(time);last=time;}raf=requestAnimationFrame(loop);}
  window.addEventListener("pointermove",e=>{mouse.x=e.clientX;mouse.y=e.clientY;mouse.on=true; if(reduce)paint(0);},{passive:true});
  document.addEventListener("visibilitychange",()=>{visible=!document.hidden;});
  window.addEventListener("resize",resize,{passive:true});
  resize();if(!reduce)raf=requestAnimationFrame(loop);
}

renderProjects();
renderAwards();
renderFilters();
renderGallery();
initReveal();
initNavigation();
initAmbientBackground();
