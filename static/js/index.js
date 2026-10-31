'use strict';
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 const filter=button.dataset.filter;let count=0;
 document.querySelectorAll('[data-filter]').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
 document.querySelectorAll('tr[data-paradigm]').forEach(row=>{row.hidden=filter!=='all'&&row.dataset.paradigm!==filter;if(!row.hidden)count++;});
 document.getElementById('model-count').textContent=`Showing ${count} models. Bold indicates the best score across all 23 models.`;
}));

// Highlights: metadata stays local, so the carousel also works with file://.
(() => {
 const carousel=document.querySelector('.highlight-carousel');if(!carousel)return;
 const items=JSON.parse(document.getElementById('highlights-data').textContent);if(!items.length)return;
 const video=document.getElementById('highlight-video'),gif=document.getElementById('highlight-gif');
 const placeholder=document.getElementById('highlight-placeholder');
 let index=0,startX=null;
 function show(next,announce=true){
  video.pause();video.removeAttribute('src');video.removeAttribute('poster');video.load();gif.removeAttribute('src');
  video.hidden=true;gif.hidden=true;placeholder.hidden=false;placeholder.querySelector('p').textContent='Video coming soon';
  index=(next+items.length)%items.length;const item=items[index];
  document.getElementById('highlight-counter').textContent=`${String(index+1).padStart(2,'0')} / ${String(items.length).padStart(2,'0')}`;
  document.getElementById('highlight-category').textContent=item.category;
  document.getElementById('highlight-title').textContent=item.title;
  document.getElementById('highlight-caption').textContent=item.caption;
  if(item.src){
   if(/\.gif(?:[?#]|$)/i.test(item.src)){gif.src=item.src;gif.alt=item.title;gif.hidden=false;placeholder.hidden=true;}
   else{video.src=item.src;if(item.poster)video.poster=item.poster;video.setAttribute('aria-label',item.title);video.muted=true;video.hidden=false;placeholder.hidden=true;video.play().catch(()=>{});}
  }
  if(announce)document.getElementById('highlight-status').textContent=`Highlight ${index+1} of ${items.length}: ${item.title}${item.src?'':'. Video coming soon.'}`;
 }
 document.getElementById('highlight-prev').addEventListener('click',()=>show(index-1));
 document.getElementById('highlight-next').addEventListener('click',()=>show(index+1));
 carousel.addEventListener('keydown',event=>{if(event.target===video||event.target.closest('video'))return;if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();show(index+(event.key==='ArrowRight'?1:-1));}});
 const stage=carousel.querySelector('.highlight-stage');
 stage.addEventListener('touchstart',e=>{startX=e.touches[0].clientX;},{passive:true});
 stage.addEventListener('touchend',e=>{if(startX!==null){const delta=e.changedTouches[0].clientX-startX;if(Math.abs(delta)>55)show(index+(delta<0?1:-1));}startX=null;},{passive:true});
 video.addEventListener('error',()=>{video.hidden=true;placeholder.hidden=false;placeholder.querySelector('p').textContent='Video unavailable';});
 gif.addEventListener('error',()=>{gif.hidden=true;placeholder.hidden=false;placeholder.querySelector('p').textContent='Video unavailable';});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)video.pause();});
 if('IntersectionObserver' in window)new IntersectionObserver(entries=>{if(!entries[0].isIntersecting)video.pause();},{threshold:0.1}).observe(carousel);
 show(0,false);
})();
