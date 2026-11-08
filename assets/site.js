(function(){
 var f=document.getElementById('qform'); if(!f) return;
 var q=new URLSearchParams(location.search);
 var from=document.getElementById('q-from'),to=document.getElementById('q-to'),field=document.getElementById('q-field');
 var type=document.getElementById('q-type'),cw=document.getElementById('q-company-wrap'),svc=document.getElementById('q-service');
 var file=document.getElementById('q-file'),fname=document.getElementById('q-file-name'),box=file.closest('.filebox');
 var warn=document.getElementById('q-warn'),sum=document.getElementById('q-sum'),subj=document.getElementById('q-subject');
 from.value='English'; to.value=q.get('to')||f.getAttribute('data-to')||'Swahili';
 if(q.get('from')){from.value=q.get('from');to.value='English';}
 if(q.get('field')) field.value=q.get('field');
 if(q.get('service')==='agency'){svc.value='Agency partnership / free test';type.value='A translation agency';}
 var defHint=fname.textContent;
 function upd(){
  var bad=from.value===to.value||(from.value!=='English'&&to.value!=='English');
  warn.hidden=!bad;
  cw.hidden=(type.value==='An individual');
  sum.textContent=from.value+' \u2192 '+to.value+' \u00b7 '+field.value;
  subj.value='Quote request: '+from.value+' > '+to.value+' ('+field.value+')';
 }
 [from,to,field,type,svc].forEach(function(el){el.addEventListener('change',upd);});
 file.addEventListener('change',function(){
  var fl=file.files[0];
  if(!fl){fname.textContent=defHint;box.classList.remove('has');return;}
  if(fl.size>10*1024*1024){alert('That file is over 10 MB. Please zip it smaller, or paste a download link in the message.');file.value='';fname.textContent=defHint;box.classList.remove('has');return;}
  fname.textContent=fl.name+' \u00b7 '+(fl.size/1048576).toFixed(1)+' MB';box.classList.add('has');
 });
 f.addEventListener('submit',function(e){
  var bad=from.value===to.value||(from.value!=='English'&&to.value!=='English');
  if(bad){e.preventDefault();warn.hidden=false;warn.scrollIntoView({block:'center'});return;}
  var b=document.getElementById('q-send');b.disabled=true;b.textContent='Sending\u2026';
 });
 upd();
})();
var y=document.getElementById('yr'); if(y) y.textContent=new Date().getFullYear();
