(function(){
 var f=document.getElementById('qform'); if(!f) return;
 var names=["English", "Arabic", "Chinese", "Danish", "French", "Greek", "Korean", "Latvian", "Mongolian", "Russian", "Shona", "Spanish", "Swahili", "Swedish", "Turkish", "Uzbek", "Vietnamese"];
 var from=document.getElementById('q-from'),to=document.getElementById('q-to');
 names.forEach(function(n){from.add(new Option(n,n));to.add(new Option(n,n));});
 from.value=f.getAttribute('data-from')||'English';to.value=f.getAttribute('data-to')||'Swahili';
 var field=document.getElementById('q-field'),words=document.getElementById('q-words'),date=document.getElementById('q-date'),email=document.getElementById('q-email');
 var warn=document.getElementById('q-warn'),sum=document.getElementById('q-sum'),send=document.getElementById('q-send');
 function upd(){
  var bad=from.value===to.value||(from.value!=='English'&&to.value!=='English');
  warn.hidden=!bad;
  var w=words.value?Number(words.value).toLocaleString('en-US')+' words':'word count TBC';
  sum.textContent=from.value+' \u2192 '+to.value+' \u00b7 '+field.value+' \u00b7 '+w;
  var body=['Hello Actimvated,','','I would like a quote for:','Language pair: '+from.value+' > '+to.value,'Subject area: '+field.value,'Approx. word count: '+(words.value||'to be confirmed'),'Needed by: '+(date.value||'flexible'),'Reply to: '+(email.value||'(this address)'),'','Files attached. Notes:',''].join('\n');
  send.href='mailto:studio@actimvated.com?subject='+encodeURIComponent('Quote request: '+from.value+' > '+to.value)+'&body='+encodeURIComponent(body);
 }
 [from,to,field,words,date,email].forEach(function(el){el.addEventListener('input',upd);el.addEventListener('change',upd);});
 f.addEventListener('submit',function(ev){ev.preventDefault();window.location.href=send.href;});
 upd();
})();
var y=document.getElementById('yr'); if(y) y.textContent=new Date().getFullYear();
