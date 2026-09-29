'use strict';
// Set this single URL when the approved consent form is ready. All join buttons use it.
const ENROLMENT_URL = '';
const officeData = {
 nairobi: {name:'Nairobi · Head Office',address:'10th & 11th Floors, 316 Chambers, 2nd Ngong Avenue, Nairobi',phone:'+254 709 805 000',email:'info@lapfund.or.ke'},
 mombasa: {name:'Mombasa Office',address:'2nd Floor, Imaara Building, Dedan Kimathi Avenue',phone:'+254 709 805 300',email:'mombasaoffice@lapfund.or.ke'},
 kisumu: {name:'Kisumu Office',address:'2nd Floor, Al-Imran Plaza, Oginga Odinga Street',phone:'+254 709 805 600',email:'kisumuoffice@lapfund.or.ke'},
 nyeri: {name:'Nyeri Office',address:'1st Floor, Fortress Building, Kimathi Way',phone:'+254 709 805 400',email:'nyerioffice@lapfund.or.ke'},
 isiolo: {name:'Isiolo Office',address:'Desert Trail Building',phone:'+254 709 805 900',email:'isiolooffice@lapfund.or.ke'},
 nakuru: {name:'Nakuru Office',address:'1st Floor, Polo Centre, Kenyatta Avenue',phone:'+254 709 805 500',email:'nakuruoffice@lapfund.or.ke'},
 garissa: {name:'Garissa Office',address:'1st Floor, Lilac Centre, off Kismayu Road',phone:'+254 709 805 800',email:'garissaoffice@lapfund.or.ke'}
};
const menuButton=document.querySelector('.menu-toggle');
const mobileMenu=document.getElementById('mobile-menu');
function closeMenu(){menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open navigation');mobileMenu.hidden=true;}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close navigation':'Open navigation');mobileMenu.hidden=!open;});
mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu();});
let returnFocus=null;
function openDialog(id,trigger){closeMenu();const dialog=document.getElementById(id);returnFocus=trigger;dialog.showModal();document.body.classList.add('no-scroll');dialog.scrollTop=0;dialog.querySelector('.dialog-close').focus({preventScroll:true});}
document.querySelectorAll('[data-dialog]').forEach(button=>button.addEventListener('click',()=>openDialog(button.dataset.dialog,button)));
document.querySelectorAll('[data-enrol]').forEach(button=>button.addEventListener('click',()=>{if(ENROLMENT_URL){const url=new URL(ENROLMENT_URL,location.href);if(url.protocol==='https:'){location.assign(url.href);return;}}openDialog('enrol-dialog',button);}));
document.querySelectorAll('dialog').forEach(dialog=>{dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});dialog.addEventListener('close',()=>{document.body.classList.remove('no-scroll');returnFocus?.focus({preventScroll:true});});});
document.querySelectorAll('[data-period]').forEach(button=>button.addEventListener('click',()=>{const daily=button.dataset.period==='day';document.querySelectorAll('[data-period]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));document.getElementById('allocation-total').textContent=daily?'100':'3,000';document.getElementById('example-caption').textContent=daily?'An illustration based on your first five contributing trips in a day.':'An illustration based on 150 contributing trips in a month.';document.querySelectorAll('[data-amount]').forEach(el=>{const value=Number(el.dataset.amount)/(daily?30:1);el.textContent='KES '+value.toLocaleString('en-KE');});}));
document.getElementById('office').addEventListener('change',event=>{const office=officeData[event.target.value];document.getElementById('office-alternate').hidden=event.target.value!=='nairobi';document.getElementById('office-name').textContent=office.name;document.getElementById('office-address').textContent=office.address;const phone=document.getElementById('office-phone');phone.textContent=office.phone;phone.href='tel:'+office.phone.replaceAll(' ','');const email=document.getElementById('office-email');email.textContent=office.email;email.href='mailto:'+office.email;});
