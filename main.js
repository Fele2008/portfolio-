(function(){
  var btn=document.querySelector('.menu'),nav=document.getElementById('nav');
  btn.addEventListener('click',function(){
    var o=nav.classList.toggle('open');
    btn.setAttribute('aria-expanded',o);
    btn.setAttribute('aria-label',o?'Close menu':'Open menu');
  });
  nav.addEventListener('click',function(e){
    if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded','false')}
  });

  var links=[].slice.call(document.querySelectorAll('nav a'));
  var secs=[].slice.call(document.querySelectorAll('main section'));
  if('IntersectionObserver' in window){
    var so=new IntersectionObserver(function(es){
      es.forEach(function(en){
        if(en.isIntersecting){
          links.forEach(function(a){a.classList.toggle('active',a.getAttribute('href')==='#'+en.target.id)});
        }
      });
    },{rootMargin:'-45% 0px -50% 0px'});
    secs.forEach(function(s){so.observe(s)});

    var fo=new IntersectionObserver(function(es){
      es.forEach(function(en){
        if(en.isIntersecting){
          [].forEach.call(en.target.querySelectorAll('.fill'),function(f){f.style.width=f.dataset.w+'%'});
          fo.unobserve(en.target);
        }
      });
    },{threshold:.3});
    fo.observe(document.getElementById('skillList'));
  }else{
    [].forEach.call(document.querySelectorAll('.fill'),function(f){f.style.width=f.dataset.w+'%'});
  }

  document.getElementById('cf').addEventListener('submit',function(ev){
    ev.preventDefault();
    var n=document.getElementById('n').value.trim(),
        e=document.getElementById('e').value.trim(),
        m=document.getElementById('m').value.trim(),
        ok=document.getElementById('ok');
    if(!n||!/^\S+@\S+\.\S+$/.test(e)||!m){
      ok.style.color='#ffd2d2';
      ok.textContent='Add your name, a valid email, and a message to continue.';
      return;
    }
    ok.style.color='#9cc3ff';
    ok.textContent='Thanks, '+n.split(' ')[0]+'. Your email app will open with the message ready to send.';
    window.location.href='mailto:hello@babosky.dev?subject='+encodeURIComponent('Project enquiry from '+n)+'&body='+encodeURIComponent(m+'\n\n'+n+' ('+e+')');
  });
  document.getElementById('yr').textContent=new Date().getFullYear();
})();
