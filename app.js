// ==================== CONFIG ====================
const BIN_ID = '6a9b0f99da38895dfe399c73';
const ACCESS_KEY = '$2a$10$pqInp3O8CbNngOF0Y2rFW.oI0uk/xVUoGuGjUgpwFMFgRlhY8pAGS';
const MASTER_KEY = '$2a$10$hmXdJoo8tCS.xYXR1iTV9O8YoeagMRUQmupeveyJUy.p81';
const BIN_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

const PRODUCTS = [
  { id: 'starter', name: 'Starter', price: 5000, profit: 50000, badge: '⭐', desc: 'Invest ₦5,000 and earn ₦50,000 profit' },
  { id: 'silver', name: 'Silver', price: 10000, profit: 70000, badge: '🥈', desc: 'Invest ₦10,000 and earn ₦70,000 profit' },
  { id: 'gold', name: 'Gold', price: 15000, profit: 100000, badge: '🥇', desc: 'Invest ₦15,000 and earn ₦100,000 profit' },
  { id: 'diamond', name: 'Diamond', price: 20000, profit: 150000, badge: '💎', desc: 'Invest ₦20,000 and earn ₦150,000 profit' }
];

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

// ==================== STATE ====================
let currentUser = null;
let appData = { users: [], settings: {}, products: PRODUCTS };
let selectedProduct = null;
let carouselIndex = 0;
let liveToastTimer = null;

// ==================== UTILS ====================
function showToast(msg) {
  // simple alert style for non-live
  const t = document.createElement('div');
  t.className = 'toast-live';
  t.innerHTML = `<span>✅</span><span class="text-sm">${msg}</span>`;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2800);
}

function togglePass(id) {
  const el = document.getElementById(id);
  el.type = el.type === 'password' ? 'text' : 'password';
}

function generateId() {
  return 'u_' + Math.random().toString(36).slice(2, 11) + Date.now().toString(36);
}

function generateRefCode() {
  let code;
  do {
    code = 'GF' + Math.random().toString(36).slice(2, 8).toUpperCase();
  } while ((appData.users || []).some(u => u.referralCode === code));
  return code;
}

function formatNaira(n) {
  return '₦' + Number(n || 0).toLocaleString('en-NG', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

function formatNairaDec(n) {
  return '₦' + Number(n || 0).toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// ==================== LIVE ACTIVITY ====================
function randomAmount() {
  // 50,000 to 4,000,000
  const min = 50000;
  const max = 4000000;
  const steps = [50000, 75000, 100000, 150000, 200000, 250000, 300000, 400000, 500000, 750000, 1000000, 1500000, 2000000, 2500000, 3000000, 3500000, 4000000];
  return steps[Math.floor(Math.random() * steps.length)];
}

function randomName() {
  return NIGERIAN_NAMES[Math.floor(Math.random() * NIGERIAN_NAMES.length)];
}

function showLiveToast(text) {
  const el = document.getElementById('live-toast');
  const txt = document.getElementById('live-toast-text');
  if (!el || !txt) return;
  txt.textContent = text;
  el.classList.remove('hidden');
  clearTimeout(liveToastTimer);
  liveToastTimer = setTimeout(() => el.classList.add('hidden'), 4500);
}

let liveInterval = null;
let liveTimeout = null;

function stopLiveActivity() {
  if (liveInterval) { clearInterval(liveInterval); liveInterval = null; }
  if (liveTimeout) { clearTimeout(liveTimeout); liveTimeout = null; }
  const el = document.getElementById('live-toast');
  if (el) el.classList.add('hidden');
}

function startLiveActivity() {
  stopLiveActivity();
  if (!currentUser) return;
  // only while logged in
  function fire() {
    if (!currentUser) return;
    // only show when dashboard is visible
    const dash = document.getElementById('page-dashboard');
    if (!dash || dash.classList.contains('hidden')) return;
    const name = randomName();
    const type = Math.random() > 0.4 ? 'withdraw' : 'referral';
    if (type === 'withdraw') {
      const amt = randomAmount();
      showLiveToast(`${name} just withdrew ${formatNaira(amt)}`);
    } else {
      showLiveToast(`${name} just referred a new user`);
    }
  }
  liveTimeout = setTimeout(fire, 3500);
  liveInterval = setInterval(fire, 12000 + Math.random() * 8000);
}

function showAuthSpinner(thenFn) {
  const overlay = document.getElementById('auth-spinner');
  if (!overlay) { thenFn(); return; }
  overlay.classList.remove('hidden');
  setTimeout(() => {
    overlay.classList.add('hidden');
    thenFn();
  }, 6000);
}

// ==================== JSONBIN ====================
async function loadData() {
  try {
    const res = await fetch(BIN_URL + '/latest', {
      headers: { 'X-Master-Key': MASTER_KEY, 'X-Access-Key': ACCESS_KEY }
    });
    if (!res.ok) throw new Error('fail');
    const json = await res.json();
    const record = json.record || json;
    appData = {
      users: record.users || [],
      withdrawals: record.withdrawals || [],
      settings: record.settings || {
        whatsapp: 'https://wa.me/2348148103620',
        telegram: 'https://t.me/goldfortune01',
        telegramChannel: 'https://t.me/goldfortune01',
        bankAccount: '1848130535',
        bankName: 'Smartcash',
        accountName: 'Blessing Asuquo'
      },
      products: record.products || PRODUCTS
    };
    localStorage.setItem('gf_data', JSON.stringify(appData));
  } catch (e) {
    const local = localStorage.getItem('gf_data');
    if (local) appData = JSON.parse(local);
    else {
      appData = {
        users: [],
        withdrawals: [],
        settings: {
          whatsapp: 'https://wa.me/2348148103620',
          telegram: 'https://t.me/goldfortune01',
          telegramChannel: 'https://t.me/goldfortune01',
          bankAccount: '1848130535',
          bankName: 'Smartcash',
          accountName: 'Blessing Asuquo'
        },
        products: PRODUCTS
      };
    }
  }
}

async function saveData() {
  localStorage.setItem('gf_data', JSON.stringify(appData));
  try {
    await fetch(BIN_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': MASTER_KEY,
        'X-Access-Key': ACCESS_KEY
      },
      body: JSON.stringify(appData)
    });
  } catch (e) {}
}

// ==================== AUTH ====================
function getSession() {
  const s = localStorage.getItem('gf_session');
  return s ? JSON.parse(s) : null;
}

function setSession(user) {
  localStorage.setItem('gf_session', JSON.stringify({ id: user.id, email: user.email }));
  currentUser = user;
}

function clearSession() {
  localStorage.removeItem('gf_session');
  currentUser = null;
}

async function handleSignup() {
  const name = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim().toLowerCase();
  const pass = document.getElementById('signup-password').value;
  const confirm = document.getElementById('signup-confirm').value;
  const ref = document.getElementById('signup-ref').value.trim().toUpperCase();

  if (!name || !email || !pass) return showToast('Please fill all required fields');
  if (pass.length < 6) return showToast('Password must be at least 6 characters');
  if (pass !== confirm) return showToast('Passwords do not match');

  await loadData();
  if (appData.users.find(u => u.email === email)) return showToast('Email already registered');

  const user = {
    id: generateId(),
    fullName: name,
    email,
    password: pass,
    referralCode: generateRefCode(),
    referredBy: ref || null,
    balance: 5000,
    totalEarned: 5000,
    referrals: [],
    bank: null,
    purchases: [],
    transactions: [{ type: 'bonus', amount: 5000, note: 'Welcome bonus', date: new Date().toISOString() }],
    createdAt: new Date().toISOString()
  };

  if (ref) {
    const referrer = appData.users.find(u => u.referralCode === ref);
    if (referrer) {
      referrer.balance = (referrer.balance || 0) + 2000;
      referrer.totalEarned = (referrer.totalEarned || 0) + 2000;
      referrer.referrals = referrer.referrals || [];
      referrer.referrals.push({ id: user.id, name: user.fullName, email: user.email, date: user.createdAt });
      referrer.transactions = referrer.transactions || [];
      referrer.transactions.unshift({ type: 'referral', amount: 2000, note: `Referral: ${user.fullName}`, date: new Date().toISOString() });
    }
  }

  appData.users.push(user);
  await saveData();
  setSession(user);
  updateSupportLinks();
  showAuthSpinner(() => {
    showPage('welcome');
  });
}

async function handleLogin() {
  const email = document.getElementById('login-email').value.trim().toLowerCase();
  const pass = document.getElementById('login-password').value;
  if (!email || !pass) return showToast('Enter email and password');

  await loadData();
  const user = appData.users.find(u => u.email === email && u.password === pass);
  if (!user) return showToast('Invalid email or password');

  setSession(user);
  updateSupportLinks();
  showAuthSpinner(() => {
    showPage('dashboard');
    startLiveActivity();
  });
}

function handleForgot() {
  showToast('If this email exists, a reset link has been sent.');
  setTimeout(() => showPage('login'), 2000);
}

function logout() {
  stopLiveActivity();
  clearSession();
  showPage('login');
}

// ==================== PAGES ====================
function showPage(page) {
  document.querySelectorAll('[id^="page-"]').forEach(el => el.classList.add('hidden'));
  document.getElementById('app-shell')?.classList.add('hidden');

  if (['login', 'signup', 'forgot', 'welcome'].includes(page)) {
    document.getElementById('page-' + page)?.classList.remove('hidden');
    if (page === 'signup') {
      const params = new URLSearchParams(window.location.search);
      const ref = params.get('ref');
      if (ref) document.getElementById('signup-ref').value = ref;
    }
    if (page === 'welcome') {
      const tg = appData.settings?.telegram || 'https://t.me/goldfortune01';
      document.getElementById('welcome-telegram').href = tg;
    }
    return;
  }

  if (!currentUser) {
    showPage('login');
    return;
  }

  document.getElementById('app-shell').classList.remove('hidden');
  document.getElementById('page-' + page)?.classList.remove('hidden');

  document.querySelectorAll('.nav-item').forEach(n => {
    const active = n.dataset.page === page;
    n.classList.toggle('text-[#a08c6a]', !active);
    n.classList.toggle('gold', active);
  });

  if (page === 'dashboard') renderDashboard();
  if (page === 'products') renderProducts();
  if (page === 'withdraw') renderWithdraw();
  if (page === 'invite') renderInvite();
  if (page === 'profile') renderProfile();
  if (page === 'support' || page === 'platform') updateSupportLinks();
  if (page === 'add-bank') populateBanks();

  if (page === 'dashboard' && currentUser) startLiveActivity();
  else stopLiveActivity();
}

function getTimeGreeting() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return 'Good morning,';
  if (hour >= 12 && hour < 17) return 'Good afternoon,';
  if (hour >= 17 && hour < 22) return 'Good evening,';
  return 'Good evening,'; // late night still evening
}

function syncWithdrawStatuses() {
  // Pull latest user from appData (admin may have approved/declined)
  if (!currentUser) return;
  const fresh = (appData.users || []).find(u => u.id === currentUser.id);
  if (fresh) {
    currentUser = fresh;
    setSession(currentUser);
  }
}

async function renderDashboard() {
  await loadData();
  syncWithdrawStatuses();
  const initial = (currentUser.fullName || 'U').charAt(0).toUpperCase();
  const greetEl = document.getElementById('dash-greeting');
  if (greetEl) greetEl.textContent = getTimeGreeting();
  document.getElementById('dash-name').textContent = currentUser.fullName;
  document.getElementById('dash-avatar').textContent = initial;
  document.getElementById('dash-balance').textContent = formatNairaDec(currentUser.balance);
  // Referral count = how many people signed up with this user's referral ID
  document.getElementById('dash-refs').textContent = (currentUser.referrals || []).length;
  document.getElementById('dash-earned').textContent = formatNaira(currentUser.totalEarned || 0);

  const tx = (currentUser.transactions || []).slice(0, 6);
  const el = document.getElementById('dash-tx');
  if (!tx.length) {
    el.innerHTML = `<div class="tx-card p-4 flex justify-between items-center">
      <div><p class="text-sm font-medium">Welcome bonus</p><p class="text-xs" style="color:#a08c6a">${new Date().toLocaleDateString()}</p></div>
      <span class="font-semibold text-sm" style="color:#4ade80">+₦5,000</span></div>`;
  } else {
    el.innerHTML = tx.map(t => {
      let statusBadge = '';
      if (t.status === 'pending') statusBadge = '<span class="text-[10px] px-2 py-0.5 rounded-full ml-1" style="background:rgba(234,179,8,0.15);color:#eab308;">Pending</span>';
      if (t.status === 'approved') statusBadge = '<span class="text-[10px] px-2 py-0.5 rounded-full ml-1" style="background:rgba(74,222,128,0.15);color:#4ade80;">Successful</span>';
      if (t.status === 'declined') statusBadge = '<span class="text-[10px] px-2 py-0.5 rounded-full ml-1" style="background:rgba(248,113,113,0.15);color:#f87171;">Refunded</span>';
      const note = t.note || t.type;
      return `<div class="tx-card p-4 flex justify-between items-center">
        <div>
          <p class="text-sm font-medium">${note}${statusBadge}</p>
          <p class="text-xs" style="color:#a08c6a">${new Date(t.date).toLocaleDateString()}</p>
        </div>
        <span class="font-semibold text-sm" style="color:${t.amount >= 0 ? '#4ade80' : '#f87171'}">${t.amount >= 0 ? '+' : ''}${formatNaira(t.amount)}</span>
      </div>`;
    }).join('');
  }
}

function renderProducts() {
  const list = document.getElementById('products-list');
  list.innerHTML = PRODUCTS.map(p => `
    <div class="card p-5 space-y-3" style="border-color:rgba(212,165,54,0.2);">
      <div class="flex items-center gap-2">
        <span class="text-xl">${p.badge}</span>
        <h3 class="font-semibold text-lg" style="color:#e8c25a">${p.name}</h3>
      </div>
      <p class="text-sm" style="color:#a08c6a">${p.desc}</p>
      <div class="grid grid-cols-2 gap-3 text-sm">
        <div>
          <p class="text-xs" style="color:#a08c6a">Investment</p>
          <p class="font-bold text-lg">${formatNaira(p.price)}</p>
        </div>
        <div class="text-right">
          <p class="text-[#a08c6a] text-xs">Profit</p>
          <p class="font-bold text-lg gold">${formatNaira(p.profit)}</p>
        </div>
      </div>
      <button onclick="selectProduct('${p.id}')" class="btn-gold flex items-center justify-center gap-2">📦 Buy Product</button>
      <button onclick="showClaim('${p.id}')" class="btn-outline flex items-center justify-center gap-2">🎁 Verify & Claim Product</button>
      <div id="claim-${p.id}" class="hidden space-y-2 pt-1">
        <p class="text-sm font-medium">Enter Product Code</p>
        <input type="text" id="code-${p.id}" class="input-field" placeholder="Enter your product code" />
        <div class="flex gap-2">
          <button onclick="claimProduct('${p.id}')" class="btn-gold flex-1">Claim Now</button>
          <button onclick="document.getElementById('claim-${p.id}').classList.add('hidden')" class="btn-outline flex-1">Cancel</button>
        </div>
      </div>
    </div>
  `).join('');
}

function showClaim(id) {
  document.getElementById('claim-' + id).classList.toggle('hidden');
}

function claimProduct(id) {
  const code = document.getElementById('code-' + id).value.trim();
  if (!code) return showToast('Enter product code');
  showToast('Invalid or already claimed product code. Contact support.');
}

function selectProduct(id) {
  selectedProduct = PRODUCTS.find(p => p.id === id);
  if (!selectedProduct) return;
  document.getElementById('pay-plan-name').textContent = selectedProduct.name + ' Plan';
  document.getElementById('pay-plan-desc').textContent = selectedProduct.desc;
  document.getElementById('pay-amount').textContent = formatNaira(selectedProduct.price);
  document.getElementById('pay-acc').textContent = appData.settings.bankAccount || '1848130535';
  document.getElementById('pay-name').textContent = appData.settings.accountName || 'Blessing Asuquo';
  document.getElementById('pay-bank').textContent = appData.settings.bankName || 'Smartcash';
  showPage('payment');
}

async function submitPayment() {
  if (!selectedProduct) return;
  currentUser.purchases = currentUser.purchases || [];
  currentUser.purchases.push({
    productId: selectedProduct.id,
    productName: selectedProduct.name,
    amount: selectedProduct.price,
    status: 'pending',
    date: new Date().toISOString()
  });
  currentUser.transactions = currentUser.transactions || [];
  currentUser.transactions.unshift({
    type: 'purchase',
    amount: -selectedProduct.price,
    note: `Purchase pending: ${selectedProduct.name}`,
    date: new Date().toISOString()
  });
  const idx = appData.users.findIndex(u => u.id === currentUser.id);
  if (idx >= 0) appData.users[idx] = currentUser;
  await saveData();
  showToast('Payment submitted! Awaiting approval. Contact support.');
  setTimeout(() => showPage('products'), 2000);
}

function renderWithdraw() {
  document.getElementById('wd-balance').textContent = formatNairaDec(currentUser.balance);
  const noBank = document.getElementById('wd-no-bank');
  const hasBank = document.getElementById('wd-has-bank');
  if (currentUser.bank) {
    noBank.classList.add('hidden');
    hasBank.classList.remove('hidden');
    document.getElementById('wd-bank-display').textContent =
      `${currentUser.bank.accountName} · ${currentUser.bank.bankName} - ${currentUser.bank.accountNumber}`;
  } else {
    noBank.classList.remove('hidden');
    hasBank.classList.add('hidden');
  }
}

async function handleWithdraw() {
  const amount = Number(document.getElementById('wd-amount').value);
  if (!amount || amount < 50000) return showToast('Amount not up to withdraw');
  if (amount > currentUser.balance) return showToast('Insufficient balance');
  if (!currentUser.bank) return showToast('Please add bank details first');

  // 10 second processing spinner
  const overlay = document.getElementById('withdraw-spinner');
  if (overlay) overlay.classList.remove('hidden');

  await new Promise(r => setTimeout(r, 10000));

  if (overlay) overlay.classList.add('hidden');

  const withdrawId = 'w_' + Math.random().toString(36).slice(2, 11) + Date.now().toString(36);
  currentUser.balance -= amount;
  currentUser.transactions = currentUser.transactions || [];
  currentUser.transactions.unshift({
    type: 'withdraw',
    amount: -amount,
    note: 'Withdrawal pending',
    status: 'pending',
    withdrawId,
    date: new Date().toISOString()
  });

  appData.withdrawals = appData.withdrawals || [];
  appData.withdrawals.unshift({
    id: withdrawId,
    userId: currentUser.id,
    userName: currentUser.fullName,
    userEmail: currentUser.email,
    amount,
    bank: { ...currentUser.bank },
    status: 'pending',
    date: new Date().toISOString()
  });

  const idx = appData.users.findIndex(u => u.id === currentUser.id);
  if (idx >= 0) appData.users[idx] = currentUser;
  await saveData();
  setSession(currentUser);

  document.getElementById('wd-amount').value = '';
  renderWithdraw();

  // Success / pending message
  const msg = document.getElementById('wd-pending-msg');
  if (msg) {
    msg.classList.remove('hidden');
    msg.innerHTML = `<div class="card p-5 text-center space-y-2" style="border-color:rgba(212,165,54,0.35);">
      <p class="text-lg font-semibold" style="color:#e8c25a;">Pending</p>
      <p class="text-sm" style="color:#c4b08a;">Your withdraw is expected to be credited in your account within 30 minutes.</p>
    </div>`;
  } else {
    showToast('Pending — expected within 30 minutes');
  }
}

// Resolve beneficiary name when 10-digit account + bank selected
let resolveTimer = null;
function onAccountNumberInput() {
  const acc = (document.getElementById('bank-acc')?.value || '').replace(/\D/g, '');
  const nameInput = document.getElementById('bank-accname');
  const spin = document.getElementById('bank-resolve-spin');
  const msg = document.getElementById('bank-resolve-msg');
  if (nameInput) nameInput.value = '';
  if (msg) { msg.classList.add('hidden'); msg.textContent = ''; }
  if (spin) spin.classList.add('hidden');
  clearTimeout(resolveTimer);

  if (acc.length !== 10) return;
  if (!selectedBankName) {
    if (msg) {
      msg.textContent = 'Please select a bank first';
      msg.classList.remove('hidden');
      msg.style.color = '#f87171';
    }
    return;
  }

  if (spin) spin.classList.remove('hidden');
  if (msg) {
    msg.textContent = 'Resolving account name...';
    msg.classList.remove('hidden');
    msg.style.color = '#a08c6a';
  }

  resolveTimer = setTimeout(() => {
    // Simulated name resolution (deterministic from account digits)
    const names = NIGERIAN_NAMES;
    const idx = parseInt(acc.slice(-4), 10) % names.length;
    const resolved = names[idx].toUpperCase();
    if (nameInput) nameInput.value = resolved;
    if (spin) spin.classList.add('hidden');
    if (msg) {
      msg.textContent = '✓ Account name resolved';
      msg.style.color = '#4ade80';
      msg.classList.remove('hidden');
    }
  }, 1800 + Math.random() * 700);
}

let filteredBanks = [];
let selectedBankName = '';

function populateBanks() {
  filteredBanks = [...NIGERIAN_BANKS];
  selectedBankName = '';
  const hidden = document.getElementById('bank-select');
  if (hidden) hidden.value = '';
  const search = document.getElementById('bank-search');
  if (search) search.value = '';
  renderBankList();
}

function filterBanks() {
  const q = (document.getElementById('bank-search')?.value || '').toLowerCase().trim();
  filteredBanks = q
    ? NIGERIAN_BANKS.filter(b => b.toLowerCase().includes(q))
    : [...NIGERIAN_BANKS];
  renderBankList();
}

function renderBankList() {
  const list = document.getElementById('bank-list');
  if (!list) return;
  if (!filteredBanks.length) {
    list.innerHTML = '<p class="p-4 text-sm text-[#a08c6a] text-center">No banks found</p>';
    return;
  }
  list.innerHTML = filteredBanks.map((b, i) => {
    const checked = selectedBankName === b ? 'checked' : '';
    const active = selectedBankName === b ? 'style="background:#2a2215"' : '';
    const safe = b.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
    return `<label class="flex items-center justify-between px-4 py-3.5 border-b border-[#2e2618] cursor-pointer hover:bg-[#221c12]" ${active} data-bank="${safe}">
      <span class="text-sm">${safe}</span>
      <input type="radio" name="bank-radio" class="accent-[#d4a536] w-4 h-4" ${checked} />
    </label>`;
  }).join('');
  list.querySelectorAll('label[data-bank]').forEach(el => {
    el.addEventListener('click', () => selectBank(el.getAttribute('data-bank')));
  });
}

function selectBank(name) {
  selectedBankName = name;
  const hidden = document.getElementById('bank-select');
  if (hidden) hidden.value = name;
  renderBankList();
}

async function saveBank() {
  const bankName = selectedBankName || document.getElementById('bank-select')?.value || '';
  const accountNumber = document.getElementById('bank-acc').value.trim();
  const accountName = document.getElementById('bank-accname').value.trim();
  if (!bankName) return showToast('Select a bank');
  if (!accountNumber || accountNumber.length < 10) return showToast('Enter valid 10-digit account number');
  if (!accountName) return showToast('Enter account name');

  currentUser.bank = { bankName, accountNumber, accountName };
  const idx = appData.users.findIndex(u => u.id === currentUser.id);
  if (idx >= 0) appData.users[idx] = currentUser;
  await saveData();
  showToast('Bank account added successfully');
  showPage('withdraw');
}

function renderInvite() {
  document.getElementById('ref-code').textContent = currentUser.referralCode;
  document.getElementById('inv-refs').textContent = (currentUser.referrals || []).length;
  const refEarned = (currentUser.referrals || []).length * 2000;
  document.getElementById('inv-earned').textContent = formatNaira(refEarned);
  const link = `${window.location.origin}${window.location.pathname}?ref=${currentUser.referralCode}#signup`;
  document.getElementById('ref-link').textContent = link;
}

function copyRef() {
  navigator.clipboard.writeText(currentUser.referralCode);
  showToast('Referral code copied!');
}

function copyLink() {
  const link = `${window.location.origin}${window.location.pathname}?ref=${currentUser.referralCode}#signup`;
  navigator.clipboard.writeText(link);
  showToast('Referral link copied!');
}

function renderProfile() {
  const initial = (currentUser.fullName || 'U').charAt(0).toUpperCase();
  document.getElementById('prof-avatar').textContent = initial;
  document.getElementById('prof-name').textContent = currentUser.fullName;
  document.getElementById('prof-email').textContent = currentUser.email;
  document.getElementById('prof-fullname2').textContent = currentUser.fullName;
  document.getElementById('prof-email2').textContent = currentUser.email;
  document.getElementById('prof-joined').textContent = new Date(currentUser.createdAt).toLocaleDateString();
}

function updateSupportLinks() {
  const s = appData.settings || {};
  const wa = s.whatsapp || 'https://wa.me/2348148103620';
  const tg = s.telegram || 'https://t.me/goldfortune01';
  const ch = s.telegramChannel || 'https://t.me/goldfortune01';
  ['support-wa'].forEach(id => { const el = document.getElementById(id); if (el) el.href = wa; });
  ['support-tg'].forEach(id => { const el = document.getElementById(id); if (el) el.href = tg; });
  ['support-channel'].forEach(id => { const el = document.getElementById(id); if (el) el.href = ch; });
}

// Carousel
function startCarousel() {
  setInterval(() => {
    carouselIndex = (carouselIndex + 1) % 3;
    const el = document.getElementById('carousel');
    if (el) el.style.transform = `translateX(-${carouselIndex * 100}%)`;
    document.querySelectorAll('.carousel-dot').forEach((d, i) => {
      d.classList.toggle('active', i === carouselIndex);
    });
  }, 4500);
}

// ==================== ROUTING ====================
function handleHash() {
  const hash = window.location.hash.slice(1) || '';
  const params = new URLSearchParams(window.location.search);
  if (params.get('ref') && !getSession()) {
    showPage('signup');
    return;
  }
  if (hash === 'signup') showPage('signup');
  else if (hash === 'forgot') showPage('forgot');
  else if (hash === 'login' || !hash) {
    if (getSession()) {
      loadData().then(() => {
        const sess = getSession();
        currentUser = appData.users.find(u => u.id === sess.id);
        if (currentUser) showPage('dashboard');
        else showPage('login');
      });
    } else showPage('login');
  }
}

// ==================== INIT ====================
window.addEventListener('hashchange', handleHash);
window.addEventListener('load', async () => {
  await loadData();
  updateSupportLinks();
  handleHash();
  startCarousel();
  // live activity only starts after login when on dashboard
});
