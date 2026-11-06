/* CONSTANZA FLORES — PORTAFOLIO BASE
   Todos los proyectos, imágenes y textos descriptivos son temporales.
   Los datos editables están juntos en las constantes siguientes. */
const DATA = {
  design: {
    title:'Diseño.', eyebrow:'UNIVERSO / DISEÑO',
    education:'Diseño Gráfico · Universidad Diego Portales · 2016',
    projects:[
      {title:'Proyecto visual 01',type:'Diseño editorial',image:'assets/demo_diseno_01.jpg',second:'assets/demo_diseno_02.jpg',pos:[22,39]},
      {title:'Proyecto visual 02',type:'Diseño de producto',image:'assets/demo_diseno_02.jpg',second:'assets/demo_diseno_03.jpg',pos:[78,33]},
      {title:'Proyecto visual 03',type:'Campaña gráfica',image:'assets/demo_diseno_03.jpg',second:'assets/demo_diseno_01.jpg',pos:[20,78]},
      {title:'Proyecto visual 04',type:'Audiovisual',image:'assets/demo_diseno_04.jpg',second:'assets/demo_diseno_03.jpg',pos:[79,74]}
    ]
  },
  tech: {
    title:'Informática.', eyebrow:'UNIVERSO / INFORMÁTICA',
    education:'Ingeniería en Informática · Duoc UC · 2025',
    projects:[
      {title:'Proyecto digital 01',type:'Desarrollo web',image:'assets/demo_info_01.jpg',second:'assets/demo_info_02.jpg',pos:[22,40]},
      {title:'Proyecto digital 02',type:'UX/UI',image:'assets/demo_info_02.jpg',second:'assets/demo_info_03.jpg',pos:[79,36]},
      {title:'Proyecto digital 03',type:'Aplicación',image:'assets/demo_info_03.jpg',second:'assets/demo_info_01.jpg',pos:[23,77]}
    ]
  }
};
// 'color' se usa solo para simular el efecto hover. Luego serán logos reales en color.
const BRANDS = [
  {name:'Proust House',context:'Colaboración profesional',color:'#D6A2BC'},
  {name:'Drei Ventures',context:'Diseño freelance',color:'#A5C5B1'},
  {name:'HEAD',context:'Experiencia profesional',color:'#E6C0A2'},
  {name:'Castaño',context:'Experiencia profesional',color:'#D8BBA6'},
  {name:'Property Partners',context:'Cliente vía Proust House',color:'#9CCABF'},
  {name:'Forge Programming',context:'Cliente vía Proust House',color:'#D29CBA'},
  {name:'Imagination Station',context:'Cliente vía Proust House',color:'#AEC4DC'},
  {name:'Scotch Plains Montessori',context:'Cliente vía Proust House',color:'#D9B4AD'},
  {name:'Arbor Counseling Centers',context:'Cliente vía Proust House',color:'#B3C8C2'},
  {name:'Nuva Oxi',context:'Proyecto vía Drei Ventures',color:'#D6A1C3'},
  {name:'R Medy',context:'Proyecto UX/UI freelance',color:'#A5B8D0'}
];
const HOBBIES = [
  {name:'Gym',icon:'gym',image:'assets/demo_hobby_gym.jpg',pos:[12,35]},
  {name:'Cocina',icon:'cocina',image:'assets/demo_hobby_cocina.jpg',pos:[30,28]},
  {name:'Animales',icon:'animales',image:'assets/demo_hobby_animales.jpg',pos:[52,40]},
  {name:'Tarot',icon:'tarot',image:'assets/demo_hobby_tarot.jpg',pos:[72,24]},
  {name:'Herbolaria',icon:'herbolaria',image:'assets/demo_hobby_herbolaria.jpg',pos:[91,45]},
  {name:'Dibujo',icon:'dibujo',image:'assets/demo_hobby_dibujo.jpg',pos:[19,77]},
  {name:'Pintura',icon:'pintura',image:'assets/demo_hobby_pintura.jpg',pos:[41,71]},
  {name:'Jabones',icon:'jabones',image:'assets/demo_hobby_jabones.jpg',pos:[64,79]},
  {name:'Velas',icon:'velas',image:'assets/demo_hobby_velas.jpg',pos:[84,73]}
];
let currentWorld='design';let currentProject=0;let stage='intro';let opening=false;let projectOpen=false;
const $ = s => document.querySelector(s);
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const delay = ms => new Promise(resolve => setTimeout(resolve,reduced?10:ms));

function closeMenu(){ $('#mobileMenu').hidden=true;$('#menuToggle').setAttribute('aria-expanded','false'); document.body.classList.remove('menu-open'); }
$('#menuToggle').addEventListener('click',()=>{const expanding=$('#mobileMenu').hidden;$('#mobileMenu').hidden=!expanding;$('#menuToggle').setAttribute('aria-expanded',String(expanding));document.body.classList.toggle('menu-open',expanding)});
$('#homeBtn').addEventListener('click',returnHome);

function returnHome(){
  if($('#hobbyDialog').open) $('#hobbyDialog').close();
  $('#personal').hidden=true;$('#personal').classList.remove('is-open');
  $('#projectView').hidden=true;$('#projectView').classList.remove('is-open');
  document.body.classList.remove('detail-open','personal-open','site-mode');
  $('#chooser').hidden=true;$('#site').hidden=true;$('#intro').hidden=false;
  $('#intro').classList.remove('is-opening'); opening=false;stage='intro'; closeMenu();
  window.scrollTo({top:0,behavior:'instant'}); markNav('');
}
async function openIntro(){
  if(opening) return;opening=true;
  stage='opening'; $('#chooser').hidden=false; $('#chooser').classList.remove('chosen-design','chosen-tech');
  $('#chooser').setAttribute('aria-hidden','false');$('#intro').classList.add('is-opening');
  await delay(1180);
  $('#intro').hidden=true;stage='chooser';opening=false;
}
$('#enterBtn').addEventListener('click',openIntro);
$('#introComposition').addEventListener('click',openIntro);
$('#photoInput').addEventListener('change',e=>{const file=e.target.files?.[0];if(!file)return;const fr=new FileReader();fr.onload=()=>{$('#heroPhoto').src=fr.result;$('#heroPhoto').alt='Fotografía temporal seleccionada por el visitante';};fr.readAsDataURL(file)});

// A small four-point star travels on the still ellipse (optional detail).
const orbitStar=$('#orbitStar');let lastAnim=0;
function orbitLoop(t){
  if(!reduced && !$('#intro').hidden){
    const a=(t/1000) * Math.PI*2/14 - Math.PI/3;const rotation=-20*Math.PI/180;
    const ex=235*Math.cos(a),ey=112*Math.sin(a);
    const x=260+ex*Math.cos(rotation)-ey*Math.sin(rotation);
    const y=190+ex*Math.sin(rotation)+ey*Math.cos(rotation);
    orbitStar.style.left=x+'px';orbitStar.style.top=y+'px';
    orbitStar.style.transform='translate(-50%,-50%)';
  }
  lastAnim=requestAnimationFrame(orbitLoop);
}
if(!reduced) lastAnim=requestAnimationFrame(orbitLoop);

// Hover animation: creative colorful lines on the left; elegant code on the right.
const designPanel=$('.world-panel-design');const codePanel=$('.world-panel-tech');
let designAt=0,techAt=0;
designPanel.addEventListener('pointermove',ev=>{
  if(ev.pointerType==='touch'|| Date.now()-designAt<105)return;designAt=Date.now();
  const bounds=designPanel.getBoundingClientRect(),x=ev.clientX-bounds.x,y=ev.clientY-bounds.y;
  const svg=$('#designArt');svg.setAttribute('viewBox',`0 0 ${bounds.width} ${bounds.height}`);
  const colors=['#C782A2','#88AA9F','#A69ABF','#E0B4BF'];
  const p=document.createElementNS('http://www.w3.org/2000/svg','path');
  const dx=Math.random()*85+45,dy=(Math.random()-.5)*110;
  p.setAttribute('d',`M ${x-dx} ${y+30} C ${x-35} ${y-105+dy} ${x+45} ${y+88-dy} ${x+dx} ${y-22}`);
  p.setAttribute('stroke',colors[Math.floor(Math.random()*colors.length)]);
  svg.appendChild(p);setTimeout(()=>p.remove(),1250);
});
const codeTokens=['const idea = true;','<interface />','{ design: code }','function create() {}','if (clicked) open();','display: grid;','let imagination = 1;'];
codePanel.addEventListener('pointermove',ev=>{
  if(ev.pointerType==='touch'||Date.now()-techAt<170)return;techAt=Date.now();
  const bounds=codePanel.getBoundingClientRect();let x=ev.clientX-bounds.x+12,y=ev.clientY-bounds.y-12;
  x=Math.min(x,bounds.width-190);y=Math.max(30,Math.min(y,bounds.height-40));
  const el=document.createElement('span');el.className='code-float';el.textContent=codeTokens[Math.floor(Math.random()*codeTokens.length)];el.style.left=x+'px';el.style.top=y+'px';$('#codeArt').appendChild(el);setTimeout(()=>el.remove(),1380);
});

$('.world-panel-design').addEventListener('click',()=>enterWorld('design',true));
$('.world-panel-tech').addEventListener('click',()=>enterWorld('tech',true));
async function enterWorld(which,animate=false){
  currentWorld=which;closeMenu();
  if($('#personal').hidden===false)closePersonal(true);
  if($('#projectView').hidden===false)closeProject(true);
  const chooser=$('#chooser');
  if(animate && !chooser.hidden){chooser.classList.add(which==='design'?'chosen-design':'chosen-tech');await delay(830)}
  $('#intro').hidden=true;chooser.hidden=true;chooser.classList.remove('chosen-design','chosen-tech');
  $('#site').hidden=false;stage='site';document.body.classList.add('site-mode');
  renderUniverse(which);
  window.scrollTo({top:0,behavior:'instant'});markNav(which);
}
function renderUniverse(which){
  const info=DATA[which];$('#universeTitle').textContent=info.title;$('#universeEyebrow').textContent=info.eyebrow;
  $('#universeEducation').textContent=info.education;
  const root=$('#constellation');root.replaceChildren();
  info.projects.forEach((project,i)=>{
    const b=document.createElement('button');b.className='project-star';b.type='button';b.style.setProperty('--x',project.pos[0]+'%');b.style.setProperty('--y',project.pos[1]+'%');
    b.innerHTML=`<span class="rings"><span class="dot"></span></span><span class="project-name"></span><span class="project-n">PROYECTO ${String(i+1).padStart(2,'0')}</span>`;
    b.querySelector('.project-name').textContent=project.title;b.setAttribute('aria-label',`Ver ${project.title}`);b.addEventListener('click',()=>openProject(i,b));root.appendChild(b);
  });
}

// Decorative very faint stars, deterministic positions for stable composition.
let seed=57;function random(){seed=(seed*16807)%2147483647;return (seed-1)/2147483646}
for(let i=0;i<76;i++){let s=document.createElement('span');s.className='tiny-space-star';s.style.left=(4+random()*92)+'%';s.style.top=(6+random()*89)+'%';s.style.setProperty('--op',(0.08+random()*.31).toFixed(2));$('#spaceDust').appendChild(s)}

// Brand tiles (real relationships, placeholder wordmarks).
BRANDS.forEach(brand=>{
  const tile=document.createElement('div');tile.className='brand-tile';tile.style.setProperty('--brand-color',brand.color);tile.tabIndex=0;
  const n=document.createElement('span');n.className='brand-name';n.textContent=brand.name;
  const o=document.createElement('span');o.className='brand-origin';o.textContent=brand.context;
  tile.append(n,o);$('#brandGrid').appendChild(tile);
});

function markNav(section){document.querySelectorAll('[data-nav]').forEach(b=>b.classList.toggle('active',b.dataset.nav===section))}
async function navigate(target){
  closeMenu();
  if(target==='design'||target==='tech'){await enterWorld(target,stage==='chooser');return}
  if(stage!=='site'){await enterWorld(currentWorld,false)}
  if(target==='personal'){openPersonal();markNav('personal');return}
  if(!$('#personal').hidden)closePersonal(true);if(!$('#projectView').hidden)closeProject(true);
  const el=target==='brands'?$('#marcas'):$('#contacto');
  window.scrollTo({top:el.offsetTop,behavior:reduced?'instant':'smooth'});markNav(target);
}
document.querySelectorAll('[data-nav]').forEach(button=>button.addEventListener('click',()=>navigate(button.dataset.nav)));
$('#personalPortal').addEventListener('click',openPersonal);

// Projects: full page expands from clicked point, accessible via 'previous/next'.
function projectText(){return {
  summary:'Texto de ejemplo: descripción breve del proyecto y de la idea principal. Esta información se reemplazará al seleccionar el trabajo definitivo.',
  objective:'Texto provisional. Aquí explicaremos qué necesitaba el cliente o cuál era el problema que debía resolverse.',
  role:'Texto provisional. Aquí detallaremos exactamente qué partes diseñé, desarrollé o coordiné.',
  tools:'Herramienta 01 · Herramienta 02 · Herramienta 03',
  result:'Texto de ejemplo. Este espacio estará dedicado a las imágenes finales, capturas, mockups o resultados del trabajo.'
};}
function updateProject(){
  const items=DATA[currentWorld].projects;const p=items[currentProject];const text=projectText();
  $('#projectCounter').textContent=String(currentProject+1).padStart(2,'0')+' / '+String(items.length).padStart(2,'0');
  $('#detailType').textContent=(currentWorld==='design'?'DISEÑO':'INFORMÁTICA')+' / '+p.type.toUpperCase();
  $('#projectTitle').innerHTML='';$('#projectTitle').append(document.createTextNode(p.title));const dot=document.createElement('span');dot.textContent='.';$('#projectTitle').appendChild(dot);
  $('#projectSummary').textContent=text.summary;$('#projectObjective').textContent=text.objective;$('#projectRole').textContent=text.role;$('#projectTools').textContent=text.tools;$('#projectResult').textContent=text.result;
  $('#projectMainImage').src=p.image;$('#projectSecondImage').src=p.second;
  $('#projectMainImage').alt='Imagen de muestra del '+p.title;$('#projectSecondImage').alt='Imagen secundaria de muestra del '+p.title;
}
function openProject(i,from){
  currentProject=i;projectOpen=true;updateProject();
  const v=$('#projectView');const r=from.getBoundingClientRect();
  v.style.setProperty('--start-x',(r.x+r.width/2)+'px');v.style.setProperty('--start-y',(r.y+r.height/2)+'px');
  v.hidden=false;document.body.classList.add('detail-open');v.scrollTop=0;
  requestAnimationFrame(()=>v.classList.add('is-open'));markNav(currentWorld);
}
async function closeProject(immediate=false){
  const v=$('#projectView');if(v.hidden)return;v.classList.remove('is-open');document.body.classList.remove('detail-open');
  if(!immediate)await delay(800);v.hidden=true;projectOpen=false;
}
$('#detailBack').addEventListener('click',()=>closeProject());
$('#projectPrevious').addEventListener('click',()=>{const n=DATA[currentWorld].projects.length;currentProject=(currentProject+n-1)%n;updateProject();$('#projectView').scrollTo({top:0,behavior:reduced?'instant':'smooth'})});
$('#projectNext').addEventListener('click',()=>{const n=DATA[currentWorld].projects.length;currentProject=(currentProject+1)%n;updateProject();$('#projectView').scrollTo({top:0,behavior:reduced?'instant':'smooth'})});

// Personal collage, popup with demo image and small placeholder description.
HOBBIES.forEach((h,i)=>{
  let b=document.createElement('button');b.type='button';b.className='hobby-item';b.style.setProperty('--hx',h.pos[0]+'%');b.style.setProperty('--hy',h.pos[1]+'%');b.style.setProperty('--rot',((-2+i%5)*3)+'deg');
  b.innerHTML=`<svg aria-hidden="true"><use href="#i-${h.icon}"></use></svg><span class="hobby-name"></span>`;b.querySelector('.hobby-name').textContent=h.name;
  b.setAttribute('aria-label','Descubrir '+h.name);b.addEventListener('click',()=>openHobby(h));$('#hobbyCollage').appendChild(b);
});
function openPersonal(){if(stage!=='site')enterWorld(currentWorld,false);if(!$('#projectView').hidden)closeProject(true);
  let p=$('#personal');p.hidden=false;document.body.classList.add('personal-open');p.scrollTop=0;
  requestAnimationFrame(()=>p.classList.add('is-open'));markNav('personal');
}
async function closePersonal(immediate=false){
  let p=$('#personal');if(p.hidden)return;if($('#hobbyDialog').open)$('#hobbyDialog').close();p.classList.remove('is-open');document.body.classList.remove('personal-open');
  if(!immediate)await delay(950);p.hidden=true;markNav(currentWorld);
}
$('#personalBack').addEventListener('click',()=>closePersonal());
function openHobby(h){
  $('#hobbyTitle').textContent=h.name;$('#hobbyImage').src=h.image;$('#hobbyImage').alt='Imagen ilustrativa provisional para '+h.name;
  $('#hobbyDescription').textContent='Texto de ejemplo sobre '+h.name.toLowerCase()+'. Aquí escribiré unas líneas personales cuando incorpore mis fotografías y contenido definitivo.';
  $('#hobbyDialog').showModal();
}
$('#hobbyClose').addEventListener('click',()=>$('#hobbyDialog').close());
$('#hobbyDialog').addEventListener('click',e=>{if(e.target===$('#hobbyDialog'))$('#hobbyDialog').close()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(!$('#hobbyDialog').open){if(!$('#projectView').hidden)closeProject();else if(!$('#personal').hidden)closePersonal();else closeMenu()}}});

// Highlight the current chapter in the desktop nav as the user scrolls.
let watch=null;if('IntersectionObserver' in window){watch=new IntersectionObserver(entries=>{
  if(stage!=='site'||!$('#projectView').hidden||!$('#personal').hidden)return;
  for(const entry of entries){if(entry.isIntersecting&&entry.intersectionRatio>.48){markNav(entry.target.id==='marcas'?'brands':entry.target.id==='contacto'?'contact':currentWorld)}}
},{threshold:[.5,.75]});watch.observe($('#universo'));watch.observe($('#marcas'));watch.observe($('#contacto'))}

// Start entirely on the intro scene, no fetched content required.
$('#site').hidden=true;$('#chooser').hidden=true;
