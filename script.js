document.documentElement.classList.add('js');
const toggle=document.getElementById('navToggle'),links=document.getElementById('navLinks');
toggle.addEventListener('click',()=>links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));

document.querySelectorAll('.stack').forEach(el=>{
  el.innerHTML=el.textContent.split(' · ').map(t=>`<span class="pill">${t.trim()}</span>`).join('');
});
document.querySelectorAll('.skill-group p').forEach(el=>{
  const c=document.createElement('div');c.className='chips';
  c.innerHTML=el.textContent.split(' · ').map(t=>`<span class="chip">${t.trim()}</span>`).join('');
  el.replaceWith(c);
});


document.querySelectorAll('.proj,.ach,.exp-item,.stats div,section .grid2>div').forEach(e=>e.classList.add('reveal'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));


const secs=[...document.querySelectorAll('section[id]')];
window.addEventListener('scroll',()=>{
  const y=scrollY+120;let cur='';
  secs.forEach(s=>{if(s.offsetTop<=y)cur=s.id});
  links.querySelectorAll('a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+cur));
},{passive:true});
