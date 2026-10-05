/* Homepage behavior: before/after slider, mobile sticky bar, claim form (Web3Forms). */
(function(){
  var d=document, reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  d.getElementById('yr').textContent=new Date().getFullYear();

  /* ---- Before/after slider ---- */
  var cmp=d.getElementById('compare'), range=d.getElementById('compare-range'), touched=false;
  function setPos(p){p=Math.max(0,Math.min(100,p));cmp.style.setProperty('--pos',p+'%');range.value=Math.round(p);}
  function fromEvent(e){var r=cmp.getBoundingClientRect();setPos((e.clientX-r.left)/r.width*100);}
  var drag=false,decided=false,horiz=false,sx=0,sy=0;
  cmp.addEventListener('pointerdown',function(e){
    touched=true;cmp.classList.remove('nudge');sx=e.clientX;sy=e.clientY;
    if(e.pointerType==='mouse'){drag=true;horiz=true;decided=true;cmp.setPointerCapture(e.pointerId);fromEvent(e);}
    else{drag=true;decided=false;horiz=false;}
  });
  cmp.addEventListener('pointermove',function(e){
    if(!drag)return;
    if(!decided){var dx=Math.abs(e.clientX-sx),dy=Math.abs(e.clientY-sy);if(dx<6&&dy<6)return;decided=true;horiz=dx>dy;if(horiz)cmp.setPointerCapture(e.pointerId);}
    if(horiz){e.preventDefault();fromEvent(e);}
  });
  function end(e){if(drag&&!decided&&e.type==='pointerup')fromEvent(e);drag=false;}
  cmp.addEventListener('pointerup',end);cmp.addEventListener('pointercancel',function(){drag=false;});
  range.addEventListener('input',function(){touched=true;setPos(+range.value);});
  /* One nudge when the map first comes into view, so people know it moves */
  if(!reduce&&'IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(en){
      if(!en.isIntersecting)return;io.disconnect();
      setTimeout(function(){if(touched)return;cmp.classList.add('nudge');setPos(34);
        setTimeout(function(){if(!touched)setPos(50);setTimeout(function(){cmp.classList.remove('nudge');},750);},800);},900);
    });},{threshold:.6});io.observe(cmp);
  }

  /* ---- Mobile sticky bar: after the hero button scrolls away, hidden while the form is on screen ---- */
  var bar=d.getElementById('sticky-bar'),heroCta=d.getElementById('hero-cta'),claim=d.getElementById('claim-form'),past=false,inClaim=false;
  function upd(){var on=past&&!inClaim;bar.classList.toggle('show',on);bar.setAttribute('aria-hidden',on?'false':'true');bar.querySelectorAll('a').forEach(function(a){a.tabIndex=on?0:-1;});}
  if('IntersectionObserver' in window){
    new IntersectionObserver(function(es){es.forEach(function(en){past=!en.isIntersecting&&en.boundingClientRect.top<0;upd();});}).observe(heroCta);
    new IntersectionObserver(function(es){es.forEach(function(en){inClaim=en.isIntersecting;upd();});},{rootMargin:'0px 0px -35% 0px'}).observe(claim);
  }

  /* ---- On phones, claim buttons land on the form itself, not the steps above it ---- */
  var narrow=window.matchMedia('(max-width: 899px)');
  d.querySelectorAll('a[href="#claim"]:not(.skip)').forEach(function(a){a.addEventListener('click',function(e){
    if(!narrow.matches)return;e.preventDefault();claim.scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'});
  });});

  /* ---- Form ---- */
  var form=d.getElementById('claim-form'),status=d.getElementById('f-status'),btn=d.getElementById('f-submit'),t0=Date.now();
  var qs=new URLSearchParams(location.search);d.getElementById('f-source').value=qs.get('utm_source')||qs.get('ref')||(d.referrer?('referral: '+d.referrer):'direct');
  function digits(v){return v.replace(/\D/g,'');}
  function check(input){
    var f=input.closest('.field'),err=f.querySelector('.err'),v=input.value.trim(),msg='';
    if(!v)msg=err.dataset.empty;
    else if(input.type==='email'&&!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v))msg=err.dataset.bad;
    else if(input.type==='tel'){var n=digits(v);if(!(n.length===10||(n.length===11&&n[0]==='1')))msg=err.dataset.bad;}
    err.textContent=msg;f.classList.toggle('invalid',!!msg);input.setAttribute('aria-invalid',msg?'true':'false');return !msg;
  }
  var inputs=form.querySelectorAll('.field input');
  inputs.forEach(function(i){i.addEventListener('blur',function(){if(i.value.trim())check(i);});i.addEventListener('input',function(){if(i.closest('.field').classList.contains('invalid'))check(i);});});
  form.addEventListener('submit',function(e){
    e.preventDefault();status.classList.remove('show');
    var first=null;inputs.forEach(function(i){if(!check(i)&&!first)first=i;});
    if(first){first.focus();return;}
    /* Bots: honeypot ticked or submitted faster than a person can type. Quietly drop. */
    if(form.botcheck.checked||Date.now()-t0<3000){location.href='/thanks';return;}
    var fd=new FormData(form);fd.delete('redirect');fd.delete('botcheck');
    fd.set('subject','Baseline map request: '+form.company.value.trim()+' ('+form.job_location.value.trim()+')');
    btn.disabled=true;btn.textContent='Sending…';
    fetch('https://api.web3forms.com/submit',{method:'POST',headers:{Accept:'application/json'},body:fd})
      .then(function(r){return r.json();})
      .then(function(j){if(j&&j.success){location.href='/thanks';}else{throw new Error(j&&j.message);}})
      .catch(function(){
        status.innerHTML='That didn\'t go through. Email <a href="mailto:hayden@1010drones.com">hayden@1010drones.com</a> with the job location and I\'ll call you today.';
        status.classList.add('show');btn.disabled=false;btn.textContent='Claim my free baseline map';
      });
  });
})();
