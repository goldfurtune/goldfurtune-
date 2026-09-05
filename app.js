
const BIN_ID = '6a9b0f99da38895dfe399c73';
const ACCESS_KEY = '$2a$10$pqInp3O8CbNngOF0Y2rFW.oI0uk/xVUoGuGjUgpwFMFgRlhY8pAGS';
const MASTER_KEY = '$2a$10$hmXdJoo8tCS.xYXR1iTV9O8YoeagMRUQmupeveyJUy.p81';
const BIN_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;
const PRODUCTS = [{id:'starter',name:'Starter',price:5000,profit:50000,badge:'⭐',desc:'Invest ₦5,000 and earn ₦50,000 profit'},{id:'silver',name:'Silver',price:10000,profit:70000,badge:'🥈',desc:'Invest ₦10,000 and earn ₦70,000 profit'},{id:'gold',name:'Gold',price:15000,profit:100000,badge:'🥇',desc:'Invest ₦15,000 and earn ₦100,000 profit'},{id:'diamond',name:'Diamond',price:20000,profit:150000,badge:'💎',desc:'Invest ₦20,000 and earn ₦150,000 profit'}];
const NIGERIAN_BANKS = [
  "AL-Barakah Microfinance Bank",
  "3Line Card Management Limited",
  "9 Payment Service Bank",
  "AB Microfinance Bank",
  "ABU Microfinance Bank",
  "AG Mortgage Bank",
  "AMJU Unique Microfinance Bank",
  "AMML MFB",
  "AMOYE MICROFINANCE BANK",
  "ASO Savings and & Loans",
  "ASOSavings & Loans",
  "AVE MARIA MICROFINANCE BANK LTD",
  "Aaa Finance",
  "Abbey Mortgage Bank",
  "Above Only Microfinance Bank",
  "Abucoop Microfinance Bank",
  "Abulesoro Microfinance Bank Ltd",
  "Accelerex Network",
  "Access Bank",
  "Access Money",
  "AccessMobile",
  "Accion Microfinance Bank",
  "Ada Microfinance Bank",
  "Addosser Microfinance Bank",
  "Adeyemi College Staff Microfinance Bank",
  "Afekhafe Microfinance Bank",
  "Afemai Microfinance Bank",
  "Agosasa Microfinance Bank",
  "Akpo Microfinance Bank",
  "Aku Microfinance Bank",
  "Akuchukwu Microfinance Bank Ltd",
  "Akwa Savings & Loans Limited",
  "Al-Hayat Microfinance Bank",
  "Alekun Microfinance Bank",
  "Alert Microfinance Bank",
  "Allworkers Microfinance Bank",
  "Ally Microfinance Bank",
  "Alpha Kapital Microfinance Bank",
  "Alvana Microfinance Bank",
  "Amac Microfinance Bank",
  "Ampersand Microfinance Bank",
  "Anchorage Microfinance Bank",
  "Aniocha Microfinance Bank",
  "Apeks Microfinance Bank",
  "Apple Microfinance Bank",
  "Aramoko Microfinance Bank",
  "Arca Payments",
  "Arise Microfinance Bank",
  "Aspire Microfinance Bank Ltd",
  "Assets Matrix Microfinance Bank",
  "Assets Microfinance Bank",
  "Astrapoloris Microfinance Bank",
  "Atbu Microfinance Bank",
  "Auchi Microfinance Bank",
  "Avuenegbe Microfinance Bank",
  "Aztec Microfinance Bank",
  "BANC CORP MICROFINANCE BANK",
  "BC Kash Microfinance Bank",
  "BRIDGEWAY MICROFINANCE BANK",
  "Baines Credit Microfinance Bank",
  "Balera Microfinance Bank Ltd",
  "Balogun Fulani Microfinance Bank",
  "Balogun Gambari Microfinance Bank",
  "Banex Microfinance Bank",
  "Baobab Microfinance Bank",
  "Bayero Microfinance Bank",
  "Benysta Microfinance Bank",
  "Beststar Microfinance Bank",
  "Beta-Access Yello",
  "Bipc Microfinance Bank",
  "Blue Investments Microfinance Bank",
  "Bluewhales Microfinance Bank",
  "Boctrust Microfinance Bank",
  "Boi Mf Bank",
  "Boji Boji Microfinance Bank",
  "Bonghe Microfinance Bank",
  "Borgu Microfinance Bank",
  "Borno Renaissance Microfinance Bank",
  "Boromu Microfinance Bank",
  "Borstal Microfinance Bank",
  "Bosak Microfinance Bank",
  "Bowen Microfinance Bank",
  "Branch International Financial Services",
  "Brent Mortgage Bank",
  "Brethren Microfinance Bank",
  "Brightway Microfinance Bank",
  "Broadview Microfinance Ltd",
  "Bubayero Microfinance Bank",
  "Bud Infrastructure Limited",
  "Business Support Microfinance Bank",
  "CBN_TSA",
  "CEMCS Microfinance Bank",
  "CIT Microfinance Bank",
  "Calabar Microfinance Bank",
  "Capitalmetriq Swift Microfinance Bank",
  "Capricorn Digital",
  "Capstone Mf Bank",
  "Caretaker Microfinance Bank",
  "Cashconnect Microfinance Bank",
  "Catland Microfinance Bank",
  "Cedar Microfinance Bank Ltd",
  "Cellulant",
  "Cellulant Pssp",
  "Central Bank Of Nigeria",
  "Chanelle Bank",
  "Chase Microfinance Bank",
  "Cherish Microfinance Bank",
  "Chibueze Microfinance Bank",
  "Chikum Microfinance Bank",
  "Chukwunenye Microfinance Bank",
  "Cintrust Microfinance Bank",
  "CitiBank",
  "Citizen Trust Microfinance Bank Ltd",
  "Cloverleaf Microfinance Bank",
  "Coalcamp Microfinance Bank",
  "Consumer Microfinance Bank",
  "Contacts Microfinance Bank",
  "Coop Mortgage Bank",
  "Corestep Microfinance Bank",
  "Coronation Merchant Bank",
  "County Finance Ltd",
  "Covenant Microfinance Bank",
  "Credit Afrique Microfinance Bank",
  "Creditville Microfinance Bank",
  "Crescent Microfinance Bank",
  "Crossriver Microfinance Bank",
  "Diamond Bank",
  "Dignity Finance",
  "ENaira",
  "Eagle Flight Microfinance Bank",
  "Eartholeum",
  "Ebsu Microfinance Bank",
  "EcoMobile",
  "Ecobank Plc",
  "Ecobank Xpress Account",
  "Enterprise Bank",
  "Esan Microfinance Bank",
  "Eso-E Microfinance Bank",
  "Evangel Microfinance Bank",
  "Evergreen Microfinance Bank",
  "Ewt Microfinance Bank",
  "Excellent Microfinance Bank",
  "Eyowo MFB",
  "FAST CREDIT",
  "FAST Microfinance Bank",
  "FET",
  "FFS Microfinance Bank",
  "FINATRUST MICROFINANCE BANK",
  "FLOURISH MFB",
  "FSDH",
  "FSDH Merchant Bank",
  "FUNDQUEST FINANCIAL SERVICES LTD",
  "Fairmoney Microfinance Bank Ltd",
  "Fame Microfinance Bank",
  "Fcmb Microfinance Bank",
  "Fct Microfinance Bank",
  "Fha Mortgage Bank Ltd",
  "Fidelity Bank",
  "Fidelity Mobile",
  "Fidfund Microfinance Bank",
  "Fims Microfinance Bank",
  "Finca Microfinance Bank",
  "Firmus MFB",
  "First Apple Limited",
  "First Bank of Nigeria",
  "First City Monument Bank",
  "First Generation Mortgage Bank",
  "First Royal Microfinance Bank",
  "Firstmidas Microfinance Bank Ltd",
  "Flutterwave Technology Solutions Limited",
  "Foresight Microfinance Bank",
  "Fortis Microfinance Bank",
  "FortisMobile",
  "Fortress Microfinance Bank",
  "Fullrange Microfinance Bank",
  "Futminna Microfinance Bank",
  "Futo Microfinance Bank",
  "GOMBE MICROFINANCE BANK LTD",
  "GOODNEWS MFB",
  "GTBank Plc",
  "GTMobile",
  "Gabsyn Microfinance Bank",
  "Garki Microfinance Bank",
  "Gashua Microfinance Bank",
  "Gateway Mortgage Bank",
  "Gbede Microfinance Bank",
  "Giant Stride Microfinance Bank",
  "Giwa Microfinance Bank",
  "Globus Bank",
  "Glory Microfinance Bank",
  "Gmb Microfinance Bank",
  "GoMoney",
  "Good Neighbours Microfinance Bank",
  "Gowans Microfinance Bank",
  "Grant MF Bank",
  "Green Energy Microfinance Bank Ltd",
  "GreenBank Microfinance Bank",
  "Greenacres MFB",
  "Greenville Microfinance Bank",
  "Gwong Microfinance Bank",
  "Hackman Microfinance Bank",
  "Haggai Mortgage Bank Limited",
  "Halacredit Microfinance Bank",
  "Hasal Microfinance Bank",
  "Headway Microfinance Bank",
  "Hedonmark",
  "Heritage",
  "Highland Microfinance Bank",
  "Homebase Mortgage",
  "Hopepsb",
  "Ibu-Aje Microfinance",
  "Ic Globalmicrofinance Bank",
  "Ijebu-Ife Microfinance Bank Ltd",
  "Ikenne Microfinance Bank",
  "Ikire Microfinance Bank",
  "Ikoyi-Osun Microfinance Bank",
  "Ilaro Poly Microfinance Bank Ltd",
  "Ilasan Microfinance Bank",
  "Ilorin Microfinance Bank",
  "Ilora Microfinance Bank",
  "Imo State Microfinance Bank",
  "Ishie Microfinance Bank",
  "Isuofia Microfinance Bank",
  "Itex Integrated Services Limited",
  "Iwade Microfinance Bank Ltd",
  "Iwoama Microfinance Bank",
  "Iyamoye Microfinance Bank Ltd",
  "Iyeru Okin Microfinance Bank Ltd",
  "Iyin Ekiti MFB",
  "Izon Microfinance Bank",
  "JAIZ Bank",
  "Jessefield Microfinance Bank",
  "Jubilee Life Mortgage Bank",
  "Kayvee Microfinance Bank",
  "Kc Microfinance Bank",
  "Kegow",
  "Kegow(Chamsmobile)",
  "Keystone Bank",
  "Kingdom College Microfinance Bank",
  "Kontagora Microfinance Bank",
  "Koraypay",
  "Kredi Money Microfinance Bank",
  "Kuda",
  "Opay",
  "Kwasu Mf Bank",
  "La Fayette Microfinance Bank",
  "Legend Microfinance Bank",
  "Letshego MFB",
  "Lifegate Microfinance Bank Ltd",
  "Light Microfinance Bank",
  "Links Microfinance Bank",
  "Lobrem Microfinance Bank",
  "Lotus Bank",
  "Lovonus Microfinance Bank",
  "M36",
  "MAUTECH Microfinance Bank",
  "MKOBO MICROFINANCE BANK LTD",
  "Maintrust Microfinance Bank",
  "Malachy Microfinance Bank",
  "Manny Microfinance bank",
  "Maritime Microfinance Bank",
  "Mayfair Microfinance Bank",
  "Mayfresh Mortgage Bank",
  "Medef Microfinance Bank",
  "Megapraise Microfinance Bank",
  "Memphis Microfinance Bank",
  "Mercury MFB",
  "Meridian Microfinance Bank",
  "Mgbidi Microfinance Bank",
  "Monarch Microfinance Bank",
  "Money Master Psb",
  "Money Trust Microfinance Bank",
  "MoneyBox",
  "Moniepoint Microfinance Bank",
  "Moyofade Mf Bank",
  "Mozfin Microfinance Bank",
  "Mutual Benefits Microfinance Bank",
  "Mutual Trust Microfinance Bank",
  "NIP Virtual Bank",
  "Ndiorah Microfinance Bank",
  "Neptune Microfinance Bank",
  "Netapps Technology Limited",
  "New Dawn Microfinance Bank",
  "New Golden Pastures Microfinance Bank",
  "New Prudential Bank",
  "Newedge Finance Ltd",
  "Nibssussd Payments",
  "Nice Microfinance Bank",
  "Nigeria Prisonsmicrofinance Bank",
  "Nkpolu-Ust Microfinance",
  "Nomba Financial Services Limited",
  "Ojokoro Microfinance Bank",
  "Oke-Aro Oredegebe Microfinance Bank Ltd",
  "Okpoga Microfinance Bank",
  "Okuku Microfinance Bank Ltd",
  "Olabisi Onabanjo University Microfinance Bank",
  "Olofin Owena Microfinance Bank",
  "Olowolagba Microfinance Bank",
  "Oluchukwu Microfinance Bank",
  "Oluyole Microfinance Bank",
  "Omiye Microfinance Bank",
  "Omoluabi Mortgage Bank",
  "Omoluabi savings and loans",
  "PALMPAY",
  "Pagatech",
  "Page Financials",
  "Page MFBank",
  "Palmcoast Microfinance Bank",
  "Parallex Bank",
  "Parkway Mf Bank",
  "Parkway-ReadyCash",
  "Parralex",
  "Parralex Microfinance bank",
  "PatrickGold Microfinance Bank",
  "PayAttitude Online",
  "Pillar Microfinance Bank",
  "Platinum Mortgage Bank",
  "Polaris Bank",
  "Polyibadan Microfinance Bank",
  "Polyuwanna Microfinance Bank",
  "Preeminent Microfinance Bank",
  "PremiumTrust Bank",
  "Prestige Microfinance Bank",
  "Prisco Microfinance Bank",
  "Pristine Divitis Microfinance Bank",
  "Projects Microfinance Bank",
  "ProvidusBank PLC",
  "Rehoboth Microfinance Bank",
  "Reliance Microfinance Bank",
  "RenMoney Microfinance Bank",
  "Rephidim Microfinance Bank",
  "Resident Fintech Limited",
  "Richway Microfinance Bank",
  "Rigo Microfinance Bank",
  "Rima Growth Pathway Microfinance Bank",
  "Rima Microfinance Bank",
  "Rockshield Microfinance Bank",
  "Royal Exchange Microfinance Bank",
  "SIGNATURE BANK",
  "Sls Mf Bank",
  "Smartcash Payment Service Bank",
  "Snow Microfinance Bank",
  "Solid Alleanze Microfinance Bank",
  "Solidrock Microfinance Bank",
  "Sparkle",
  "Spay Business",
  "Spectrum Microfinance Bank",
  "Stanbic IBTC @ease wallet",
  "Stanbic IBTC Bank",
  "Stanbic Mobile Money",
  "Standard Chartered Bank",
  "TRINITY FINANCIAL SERVICES LIMITED",
  "TagPay",
  "Taj Bank Limited",
  "Tajwallet",
  "Tangerine Bank",
  "TeamApt",
  "TeasyMobile",
  "Tekla Finance Ltd",
  "Test bank",
  "Tf Microfinance Bank",
  "Ummah Microfinance Bank",
  "Umuchinemere Procredit Microfinance Bank",
  "Umunnachi Microfinance Bank",
  "Unaab Microfinance Bank",
  "Uniben Microfinance Bank",
  "Unical Microfinance Bank",
  "Uniibadan Microfinance Bank",
  "Unilag Microfinance Bank",
  "Unilorin Microfinance Bank",
  "Unimaid Microfinance Bank",
  "Union Bank",
  "United Bank for Africa",
  "Xpress Payments",
  "XsInce Microfinance Bank",
  "Yct Microfinance Bank",
  "Yello Digital Financial Services",
  "Yes Microfinance Bank",
  "Yobe Microfinance Bank",
  "Zenith Bank",
  "ZenithMobile",
  "Zikora Microfinance Bank",
  "Zinternet Nigeria Limited",
  "Zwallet"
];
const NIGERIAN_NAMES = [
  "Chinedu Okafor","Adebayo Adeyemi","Ngozi Eze","Emeka Nwosu","Fatima Ibrahim","Tunde Bakare","Amaka Okonkwo","Ibrahim Musa","Blessing Okoro","Kunle Adebayo",
  "Chioma Nwankwo","Yusuf Abdullahi","Funke Adeola","Obinna Eze","Hauwa Bello","Segun Oladipo","Nneka Obi","Sadiq Mohammed","Ifeoma Anya","Bola Tinubu",
  "Adaeze Nwosu","Ebere Nwizu","Jumoke Afolabi","Kizz Daniel","Queen Nwokoye","Wizkid Ayo","Xavier Onana","Tolu Ogunleye","Chiamaka Eze","Oluwaseun Adeyemi",
  "Zainab Yusuf","Chukwudi Okeke","Aisha Bello","Femi Adebayo","Nkechi Okafor","Ibrahim Lawal","Precious Okonkwo","David Okoro","Grace Eze","Samuel Ojo",
  "Ruth Adebayo","Michael Eze","Joy Okonkwo","Daniel Okoro","Mercy Nwosu","Emmanuel Okafor","Patience Eze","Victor Adebayo","Faith Okonkwo","Joseph Eze"
];
let currentUser=null;let appData={users:[],settings:{},products:PRODUCTS,withdrawals:[]};let selectedProduct=null;let carouselIndex=0;let liveToastTimer=null;let syncInterval=null;

let idleTimer=null;
const IDLE_TIMEOUT = 2*60*1000; // 2 minutes
function handleIdleLogout(){
  if(currentUser){
    showToast('Session expired - you were idle for 2 minutes');
    setTimeout(()=>{ logout(); }, 800);
  }
}
function resetIdleTimer(){
  if(idleTimer) clearTimeout(idleTimer);
  idleTimer = setTimeout(handleIdleLogout, IDLE_TIMEOUT);
}
function initIdleLogout(){
  const events=['mousemove','mousedown','keydown','touchstart','scroll','click'];
  events.forEach(ev=>{ document.addEventListener(ev, resetIdleTimer, {passive:true}); });
  resetIdleTimer();
}

function showToast(m){const t=document.createElement('div');t.className='toast-live';t.innerHTML=`<span>✅</span><span class="text-sm">${m}</span>`;document.body.appendChild(t);setTimeout(()=>t.remove(),2800);}
function togglePass(id){const e=document.getElementById(id);e.type=e.type==='password'?'text':'password';}
function generateId(){return 'u_'+Math.random().toString(36).slice(2,11)+Date.now().toString(36);}
function generateRefCode(){let c;do{c='GF'+Math.random().toString(36).slice(2,8).toUpperCase();}while((appData.users||[]).some(u=>u.referralCode===c));return c;}
function formatNaira(n){return '₦'+Number(n||0).toLocaleString('en-NG');}
function formatNairaDec(n){return '₦'+Number(n||0).toLocaleString('en-NG',{minimumFractionDigits:2,maximumFractionDigits:2});}
function randomAmount(){const s=[50000,100000,200000,500000,1000000,2000000,4000000];return s[Math.floor(Math.random()*s.length)];}
function randomName(){return NIGERIAN_NAMES[Math.floor(Math.random()*NIGERIAN_NAMES.length)];}
function showLiveToast(txt){const el=document.getElementById('live-toast');const t=document.getElementById('live-toast-text');if(!el||!t)return;t.textContent=txt;el.classList.remove('hidden');clearTimeout(liveToastTimer);liveToastTimer=setTimeout(()=>el.classList.add('hidden'),4500);}
let liveInterval=null,liveTimeout=null;
function stopLiveActivity(){if(liveInterval)clearInterval(liveInterval);if(liveTimeout)clearTimeout(liveTimeout);const el=document.getElementById('live-toast');if(el)el.classList.add('hidden');}
function startLiveActivity(){stopLiveActivity();if(!currentUser)return;function fire(){if(!currentUser)return;const d=document.getElementById('page-dashboard');if(!d||d.classList.contains('hidden'))return;const name=randomName();const type=Math.random()>0.4?'withdraw':'referral';if(type==='withdraw')showLiveToast(`${name} just withdrew ${formatNaira(randomAmount())}`);else showLiveToast(`${name} just referred a new user`);}liveTimeout=setTimeout(fire,3500);liveInterval=setInterval(fire,12000+Math.random()*8000);}
function showAuthSpinner(fn){const o=document.getElementById('auth-spinner');if(!o){fn();return;}o.classList.remove('hidden');setTimeout(()=>{o.classList.add('hidden');fn();},3500);}


async function loadData(){
  try{
    let rec = null;
    let r = await fetch(BIN_URL+'/latest',{headers:{'X-Access-Key':ACCESS_KEY},cache:'no-store'});
    if(!r.ok){
      r = await fetch(BIN_URL+'/latest',{headers:{'X-Master-Key':MASTER_KEY,'X-Access-Key':ACCESS_KEY},cache:'no-store'});
    }
    if(!r.ok) throw 0;
    const j=await r.json();
    rec=j.record||j;

    // Your Bin uses customers array (screenshot 2) not users
    let customers = rec.customers || rec.users || [];
    let users = customers.map(c=>({
      id: c.id,
      fullName: c.fullName || c.name || 'User',
      email: c.email,
      password: c.password,
      referralCode: c.referralCode || null,
      createdAt: c.joined || c.createdAt || new Date().toISOString(),
      joined: c.joined || c.createdAt,
      balance: Number(c.balance||0),
      status: c.status || 'active',
      referrals: c.referrals || [],
      transactions: c.transactions || [],
      totalEarned: Number(c.totalEarned || c.balance || 0),
      bank: c.bank || null
    }));
    let withdrawals = rec.withdrawals || [];
    let rawSettings = rec.settings || {};
    let settings = {};

    if(rawSettings.paymentAccount && typeof rawSettings.paymentAccount === 'object'){
      settings.bankAccount = rawSettings.paymentAccount.accountNumber || rawSettings.bankAccount || "1848130535";
      settings.accountName = rawSettings.paymentAccount.accountName || rawSettings.accountName || "Blessing Asuquo";
      settings.bankName = rawSettings.paymentAccount.bankName || rawSettings.bankName || "Smartcash";
    } else {
      settings.bankAccount = rawSettings.bankAccount || "1848130535";
      settings.accountName = rawSettings.accountName || "Blessing Asuquo";
      settings.bankName = rawSettings.bankName || "Smartcash";
    }

    if(rawSettings.whatsapp){
      if(typeof rawSettings.whatsapp === 'object'){
        settings.whatsapp = rawSettings.whatsapp.link || "https://wa.me/2348148103620";
      } else {
        settings.whatsapp = rawSettings.whatsapp;
      }
    } else {
      settings.whatsapp = "https://wa.me/2348148103620";
    }

    if(rawSettings.telegram){
      if(typeof rawSettings.telegram === 'object'){
        settings.telegram = rawSettings.telegram.link || "https://t.me/goldfortune01";
      } else {
        settings.telegram = rawSettings.telegram;
      }
    } else {
      settings.telegram = "https://t.me/goldfortune01";
    }

    if(rawSettings.telegramChannel){
      if(typeof rawSettings.telegramChannel === 'object'){
        settings.telegramChannel = rawSettings.telegramChannel.link || "https://t.me/goldfortune01";
      } else {
        settings.telegramChannel = rawSettings.telegramChannel;
      }
    } else {
      settings.telegramChannel = "https://t.me/goldfortune01";
    }

    let adminPass = "202020";
    if(rec.admin && rec.admin.password) adminPass = rec.admin.password;
    if(rawSettings.adminPassword) adminPass = rawSettings.adminPassword;
    settings.adminPassword = adminPass;

    appData={
      users:users,
      withdrawals:withdrawals,
      settings:settings,
      products:rec.products||PRODUCTS
    };
    localStorage.setItem('gf_data',JSON.stringify(appData));
  }catch(e){
    console.log('loadData failed, using cache',e);
    const l=localStorage.getItem('gf_data');
    if(l)try{appData=JSON.parse(l);}catch{}
    if(!appData.users) appData={users:[],withdrawals:[],settings:{bankAccount:'1848130535',bankName:'Smartcash',accountName:'Blessing Asuquo',whatsapp:'https://wa.me/2348148103620',telegram:'https://t.me/goldfortune01',telegramChannel:'https://t.me/goldfortune01',adminPassword:'202020'},products:PRODUCTS};
  }
}

function updateGreetingLive(){
  const el=document.getElementById('dash-greeting');
  if(el) el.textContent=getTimeGreeting();
}

async function renderDashboard(){await loadData();syncWithdrawStatuses();updateSupportLinks();document.getElementById('dash-name').textContent=currentUser.fullName;document.getElementById('dash-avatar').textContent=(currentUser.fullName||'U')[0].toUpperCase();document.getElementById('dash-balance').textContent=formatNairaDec(currentUser.balance);document.getElementById('dash-refs').textContent=(currentUser.referrals||[]).length;document.getElementById('dash-earned').textContent=formatNaira(currentUser.totalEarned||0);const tx=(currentUser.transactions||[]).slice(0,6);const el=document.getElementById('dash-tx');el.innerHTML=tx.map(t=>`<div class="tx-card p-4 flex justify-between"><div><p class="text-sm">${t.note||t.type} ${t.status?`<span class="text-[10px] ml-1">${t.status}</span>`:''}</p><p class="text-xs text-[#a08c6a]">${new Date(t.date).toLocaleDateString()}</p></div><span class="text-sm">${formatNaira(t.amount)}</span></div>`).join('')||'<div class="tx-card p-4">Welcome bonus +₦5,000</div>';}

async function renderDashboard(){
  await loadData();syncWithdrawStatuses();updateSupportLinks();updateGreetingLive();
  document.getElementById('dash-name').textContent=currentUser.fullName;
  document.getElementById('dash-avatar').textContent=(currentUser.fullName||'U')[0].toUpperCase();
  document.getElementById('dash-balance').textContent=formatNairaDec(currentUser.balance);
  document.getElementById('dash-refs').textContent=(currentUser.referrals||[]).length;
  document.getElementById('dash-earned').textContent=formatNaira(currentUser.totalEarned||0);
  const tx=(currentUser.transactions||[]).slice(0,12);
  const el=document.getElementById('dash-tx');
  if(!el) return;
  if(!tx.length){
    el.innerHTML='<div class="tx-card p-4 flex justify-between items-center"><div><p class="text-sm font-medium">Welcome bonus</p><p class="text-xs" style="color:#a08c6a">'+new Date().toLocaleDateString()+'</p></div><span class="font-semibold text-sm" style="color:#4ade80">+₦5,000</span></div>';
  } else {
    el.innerHTML=tx.map(t=>{
      const amt = Number(t.amount||0);
      const isCredit = amt>=0;
      const absFormatted = formatNaira(Math.abs(amt));
      const displayAmt = isCredit ? `+${absFormatted}` : `-${absFormatted}`;
      const color = isCredit ? '#4ade80' : '#f87171';
      let badge='';
      if(t.status==='pending') badge='<span class="text-[10px] px-2 py-0.5 rounded-full ml-1" style="background:rgba(234,179,8,0.15);color:#eab308;">Pending</span>';
      if(t.status==='approved') badge='<span class="text-[10px] px-2 py-0.5 rounded-full ml-1" style="background:rgba(74,222,128,0.15);color:#4ade80;">Approved</span>';
      if(t.status==='declined') badge='<span class="text-[10px] px-2 py-0.5 rounded-full ml-1" style="background:rgba(248,113,113,0.15);color:#f87171;">Failed</span>';
      return `<div class="tx-card p-4 flex justify-between items-center"><div><p class="text-sm font-medium">${t.note||t.type}${badge}</p><p class="text-xs" style="color:#a08c6a">${new Date(t.date).toLocaleDateString()} ${new Date(t.date).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</p></div><span class="font-bold text-sm" style="color:${color}">${displayAmt}</span></div>`;
    }).join('');
  }
  if(!window._greetingInterval){
    window._greetingInterval = setInterval(updateGreetingLive, 60000);
  }
}

function renderProducts(){const list=document.getElementById('products-list');const prods=appData.products||PRODUCTS;list.innerHTML=prods.map(p=>`<div class="card p-5 space-y-3"><div class="flex gap-2"><span>${p.badge}</span><h3 class="gold">${p.name}</h3></div><p class="text-sm text-[#a08c6a]">${p.desc}</p><div class="flex justify-between"><span>${formatNaira(p.price)}</span><span class="gold">${formatNaira(p.profit)}</span></div><button onclick="selectProduct('${p.id}')" class="btn-gold w-full">Buy Product</button><button onclick="showClaim('${p.id}')" class="btn-outline w-full mt-2">Verify & Claim</button><div id="claim-${p.id}" class="hidden"><input id="code-${p.id}" class="input-field mt-2" placeholder="Code"/><button onclick="claimProduct('${p.id}')" class="btn-gold w-full mt-2">Claim</button></div></div>`).join('');}
function showClaim(id){document.getElementById('claim-'+id).classList.toggle('hidden');}
function claimProduct(id){showToast('Invalid code. Contact support.');}
function selectProduct(id){const prods=appData.products||PRODUCTS;selectedProduct=prods.find(p=>p.id===id);document.getElementById('pay-plan-name').textContent=selectedProduct.name;document.getElementById('pay-plan-desc').textContent=selectedProduct.desc;document.getElementById('pay-amount').textContent=formatNaira(selectedProduct.price);document.getElementById('pay-acc').textContent=appData.settings.bankAccount||'1848130535';document.getElementById('pay-name').textContent=appData.settings.accountName||'Blessing Asuquo';document.getElementById('pay-bank').textContent=appData.settings.bankName||'Smartcash';showPage('payment');}
async function submitPayment(){if(!selectedProduct)return;await loadData();const f=appData.users.find(u=>u.id===currentUser.id);if(f)currentUser=f;currentUser.purchases=currentUser.purchases||[];currentUser.purchases.push({productId:selectedProduct.id,productName:selectedProduct.name,amount:selectedProduct.price,status:'pending',date:new Date().toISOString()});currentUser.transactions=currentUser.transactions||[];currentUser.transactions.unshift({type:'purchase',amount:-selectedProduct.price,note:`Purchase pending: ${selectedProduct.name}`,date:new Date().toISOString()});const idx=appData.users.findIndex(u=>u.id===currentUser.id);if(idx>=0)appData.users[idx]=currentUser;await saveData();showToast('Submitted!');setTimeout(()=>showPage('products'),2000);}
function renderWithdraw(){document.getElementById('wd-balance').textContent=formatNairaDec(currentUser.balance);const noBank=document.getElementById('wd-no-bank');const hasBank=document.getElementById('wd-has-bank');if(currentUser.bank){noBank.classList.add('hidden');hasBank.classList.remove('hidden');document.getElementById('wd-bank-display').textContent=`${currentUser.bank.accountName} · ${currentUser.bank.bankName} - ${currentUser.bank.accountNumber}`;}else{noBank.classList.remove('hidden');hasBank.classList.add('hidden');}}
async function handleWithdraw(){const amount=Number(document.getElementById('wd-amount').value);if(!amount||amount<50000)return showToast('Min ₦50,000');if(amount>currentUser.balance)return showToast('Insufficient');if(!currentUser.bank)return showToast('Add bank first');const o=document.getElementById('withdraw-spinner');if(o)o.classList.remove('hidden');await new Promise(r=>setTimeout(r,10000));if(o)o.classList.add('hidden');const wid='w_'+Math.random().toString(36).slice(2,11)+Date.now().toString(36);await loadData();const f=appData.users.find(u=>u.id===currentUser.id);if(f)currentUser=f;currentUser.balance-=amount;currentUser.transactions=currentUser.transactions||[];currentUser.transactions.unshift({type:'withdraw',amount:-amount,note:'Withdrawal pending',status:'pending',withdrawId:wid,date:new Date().toISOString()});appData.withdrawals=appData.withdrawals||[];appData.withdrawals.unshift({id:wid,userId:currentUser.id,userName:currentUser.fullName,userEmail:currentUser.email,amount,bank:{...currentUser.bank},status:'pending',date:new Date().toISOString()});const idx=appData.users.findIndex(u=>u.id===currentUser.id);if(idx>=0)appData.users[idx]=currentUser;await saveData();setSession(currentUser);document.getElementById('wd-amount').value='';renderWithdraw();showToast('Pending - 30 mins');}
let filteredBanks=[];let selectedBankName='';
function populateBanks(){filteredBanks=[...NIGERIAN_BANKS];selectedBankName='';document.getElementById('bank-select').value='';document.getElementById('bank-search').value='';renderBankList();}
function filterBanks(){const q=document.getElementById('bank-search').value.toLowerCase().trim();filteredBanks=q?NIGERIAN_BANKS.filter(b=>b.toLowerCase().includes(q)):[...NIGERIAN_BANKS];renderBankList();}
function renderBankList(){const list=document.getElementById('bank-list');if(!list)return;list.innerHTML=filteredBanks.map(b=>`<label class="flex justify-between p-3 border-b border-[#2e2618] cursor-pointer" data-bank="${b}"><span class="text-sm">${b}</span><input type="radio" name="bank-radio" ${selectedBankName===b?'checked':''}/></label>`).join('');list.querySelectorAll('label').forEach(el=>el.addEventListener('click',()=>selectBank(el.dataset.bank)));}
function selectBank(n){selectedBankName=n;document.getElementById('bank-select').value=n;renderBankList();}
async function saveBank(){const bankName=selectedBankName||document.getElementById('bank-select').value;const acc=document.getElementById('bank-acc').value.trim();const accName=document.getElementById('bank-accname').value.trim();if(!bankName)return showToast('Select bank');if(!acc||acc.length<10)return showToast('Valid acc');if(!accName)return showToast('Enter name');await loadData();const f=appData.users.find(u=>u.id===currentUser.id);if(f)currentUser=f;currentUser.bank={bankName,accountNumber:acc,accountName:accName};const idx=appData.users.findIndex(u=>u.id===currentUser.id);if(idx>=0)appData.users[idx]=currentUser;await saveData();showToast('Bank added');showPage('withdraw');}
function renderInvite(){document.getElementById('ref-code').textContent=currentUser.referralCode;document.getElementById('inv-refs').textContent=(currentUser.referrals||[]).length;document.getElementById('inv-earned').textContent=formatNaira((currentUser.referrals||[]).length*2000);document.getElementById('ref-link').textContent=`${location.origin}${location.pathname}?ref=${currentUser.referralCode}#signup`;}
function copyRef(){navigator.clipboard.writeText(currentUser.referralCode);showToast('Copied');}
function copyLink(){const l=`${location.origin}${location.pathname}?ref=${currentUser.referralCode}#signup`;navigator.clipboard.writeText(l);showToast('Link copied');}
function renderProfile(){document.getElementById('prof-avatar').textContent=(currentUser.fullName||'U')[0].toUpperCase();document.getElementById('prof-name').textContent=currentUser.fullName;document.getElementById('prof-email').textContent=currentUser.email;document.getElementById('prof-fullname2').textContent=currentUser.fullName;document.getElementById('prof-email2').textContent=currentUser.email;document.getElementById('prof-joined').textContent=new Date(currentUser.createdAt).toLocaleDateString();}
function updateSupportLinks(){const s=appData.settings||{};const wa=s.whatsapp||'https://wa.me/2348148103620';const tg=s.telegram||'https://t.me/goldfortune01';const ch=s.telegramChannel||'https://t.me/goldfortune01';const waEl=document.getElementById('support-wa');if(waEl)waEl.href=wa;const tgEl=document.getElementById('support-tg');if(tgEl)tgEl.href=tg;const chEl=document.getElementById('support-channel');if(chEl)chEl.href=ch;const wEl=document.getElementById('welcome-telegram');if(wEl)wEl.href=tg;}
function triggerWelcomeBalloons(){const stage=document.getElementById('balloon-stage');if(!stage)return;stage.innerHTML='';const colors=['linear-gradient(135deg,#FFD700,#FFA500)','linear-gradient(135deg,#FF6B6B,#FF8E53)','linear-gradient(135deg,#4facfe,#00f2fe)','linear-gradient(135deg,#43e97b,#38f9d7)','linear-gradient(135deg,#fa709a,#fee140)','linear-gradient(135deg,#a18cd1,#fbc2eb)'];for(let i=0;i<8;i++){const b=document.createElement('div');b.className='real-balloon';b.style.left=(5+i*12+Math.random()*5)+'%';b.style.background=colors[i%colors.length];b.style.animationDelay=i*0.25+'s';b.style.animationDuration=(3+Math.random()*2)+'s';b.innerHTML='<div class="balloon-string"></div><div class="balloon-knot"></div>';stage.appendChild(b);}for(let i=0;i<25;i++){const c=document.createElement('div');c.className='confetti-piece';c.style.left=Math.random()*100+'%';c.style.background=colors[Math.floor(Math.random()*colors.length)];c.style.animationDelay=Math.random()*0.8+'s';stage.appendChild(c);}}
function startCarousel(){setInterval(()=>{carouselIndex=(carouselIndex+1)%3;const el=document.getElementById('carousel');if(el)el.style.transform=`translateX(-${carouselIndex*100}%)`;document.querySelectorAll('.carousel-dot').forEach((d,i)=>d.classList.toggle('active',i===carouselIndex));},4500);}
function handleHash(){const h=location.hash.slice(1)||'';const p=new URLSearchParams(location.search);if(p.get('ref')&&!getSession()){showPage('signup');return;}if(h==='signup')showPage('signup');else if(h==='forgot')showPage('forgot');else if(h==='login'||!h){if(getSession()){loadData().then(()=>{const s=getSession();currentUser=appData.users.find(u=>u.id===s.id);if(currentUser){showPage('dashboard');startSyncLoop();}else showPage('login');});}else showPage('login');}}
function startSyncLoop(){stopSyncLoop();syncInterval=setInterval(async()=>{await loadData();syncWithdrawStatuses();updateSupportLinks();if(selectedProduct&&!document.getElementById('page-payment').classList.contains('hidden')){document.getElementById('pay-acc').textContent=appData.settings.bankAccount||'';document.getElementById('pay-name').textContent=appData.settings.accountName||'';document.getElementById('pay-bank').textContent=appData.settings.bankName||'';}},8000);}
function stopSyncLoop(){if(syncInterval){clearInterval(syncInterval);syncInterval=null;}}
addEventListener('hashchange',handleHash);
addEventListener('load',async()=>{await loadData();updateSupportLinks();handleHash();startCarousel();startSyncLoop();initIdleLogout();document.addEventListener('visibilitychange',()=>{if(!document.hidden)loadData().then(()=>{syncWithdrawStatuses();updateSupportLinks();});});});
