/* ============================================
   GRIYA BUSANA MAHKOTA — app.js
   Logika Login/Logout, Keranjang, dan data produk.
   Semua data disimpan di localStorage (tanpa database/server).
   ============================================ */

/* ---------- DATA PRODUK (12 item per kategori) ---------- */
const PRODUCTS = [
  // ===== KEBAYA (12) =====
  { id:1,  kategori:"Kebaya", nama:"Kebaya Encim Modern Emas",             harga:150000, icon:"kebaya" },
  { id:2,  kategori:"Kebaya", nama:"Kebaya Wisuda Brokat Putih",           harga:125000, icon:"kebaya" },
  { id:3,  kategori:"Kebaya", nama:"Kebaya Kutubaru Batik Pekalongan",     harga:140000, icon:"kebaya" },
  { id:4,  kategori:"Kebaya", nama:"Kebaya Kartini Klasik Beludru",        harga:160000, icon:"kebaya" },
  { id:5,  kategori:"Kebaya", nama:"Kebaya Modern Payet Silver",           harga:175000, icon:"kebaya" },
  { id:6,  kategori:"Kebaya", nama:"Kebaya Brokat Prancis Nude",           harga:190000, icon:"kebaya" },
  { id:7,  kategori:"Kebaya", nama:"Kebaya Encim Toska Bordir",            harga:145000, icon:"kebaya" },
  { id:8,  kategori:"Kebaya", nama:"Kebaya Kutubaru Lurik Modern",         harga:130000, icon:"kebaya" },
  { id:9,  kategori:"Kebaya", nama:"Kebaya Pesta Merah Marun",             harga:165000, icon:"kebaya" },
  { id:10, kategori:"Kebaya", nama:"Kebaya Pengantin Songket Emas",        harga:220000, icon:"kebaya" },
  { id:11, kategori:"Kebaya", nama:"Kebaya Simple Elegan Pastel",          harga:110000, icon:"kebaya" },
  { id:12, kategori:"Kebaya", nama:"Kebaya Tile Transparan Mewah",         harga:185000, icon:"kebaya" },

  // ===== GAUN (12) =====
  { id:13, kategori:"Gaun", nama:"Gaun Pesta Malam Beludru",               harga:200000, icon:"gaun" },
  { id:14, kategori:"Gaun", nama:"Gaun Bridesmaid Satin",                  harga:100000, icon:"gaun" },
  { id:15, kategori:"Gaun", nama:"Gaun Pesta Sequin Emas",                 harga:210000, icon:"gaun" },
  { id:16, kategori:"Gaun", nama:"Gaun Prom Off-Shoulder",                 harga:175000, icon:"gaun" },
  { id:17, kategori:"Gaun", nama:"Gaun Cocktail Midi Elegan",              harga:130000, icon:"gaun" },
  { id:18, kategori:"Gaun", nama:"Gaun Wisuda Ballgown",                   harga:190000, icon:"gaun" },
  { id:19, kategori:"Gaun", nama:"Gaun Pesta Backless Hitam",              harga:195000, icon:"gaun" },
  { id:20, kategori:"Gaun", nama:"Gaun Tile Mermaid Biru",                 harga:205000, icon:"gaun" },
  { id:21, kategori:"Gaun", nama:"Gaun Pesta Two-Piece Modern",            harga:160000, icon:"gaun" },
  { id:22, kategori:"Gaun", nama:"Gaun Bridesmaid Chiffon Dusty Pink",     harga:110000, icon:"gaun" },
  { id:23, kategori:"Gaun", nama:"Gaun Malam Beaded Silver",               harga:220000, icon:"gaun" },
  { id:24, kategori:"Gaun", nama:"Gaun A-Line Sederhana Elegan",           harga:120000, icon:"gaun" },

  // ===== JAS & BESKAP (12) =====
  { id:25, kategori:"Jas", nama:"Jas Pengantin Pria Klasik",               harga:175000, icon:"jas" },
  { id:26, kategori:"Jas", nama:"Beskap Jawa Lengkap",                     harga:180000, icon:"jas" },
  { id:27, kategori:"Jas", nama:"Jas Formal Hitam Slimfit",                harga:150000, icon:"jas" },
  { id:28, kategori:"Jas", nama:"Beskap Solo Modern",                      harga:190000, icon:"jas" },
  { id:29, kategori:"Jas", nama:"Jas Pengantin Putih Mewah",               harga:200000, icon:"jas" },
  { id:30, kategori:"Jas", nama:"Setelan Jas Prewedding",                  harga:165000, icon:"jas" },
  { id:31, kategori:"Jas", nama:"Beskap Yogyakarta Klasik",                harga:185000, icon:"jas" },
  { id:32, kategori:"Jas", nama:"Jas Groomsmen Navy",                      harga:140000, icon:"jas" },
  { id:33, kategori:"Jas", nama:"Jas Tuxedo Hitam Elegan",                 harga:210000, icon:"jas" },
  { id:34, kategori:"Jas", nama:"Beskap Batik Pekalongan",                 harga:170000, icon:"jas" },
  { id:35, kategori:"Jas", nama:"Jas Vest Coklat Casual Formal",           harga:130000, icon:"jas" },
  { id:36, kategori:"Jas", nama:"Setelan Jas Wisuda Pria",                 harga:120000, icon:"jas" },

  // ===== AKSESORIS (12) =====
  { id:37, kategori:"Aksesoris", nama:"Aksesoris Set (Selendang, Bros, Sanggul)", harga:50000, icon:"aksesoris" },
  { id:38, kategori:"Aksesoris", nama:"Selendang Batik Motif Pesisiran",   harga:35000, icon:"aksesoris" },
  { id:39, kategori:"Aksesoris", nama:"Sanggul Modern Cepol",              harga:40000, icon:"aksesoris" },
  { id:40, kategori:"Aksesoris", nama:"Mahkota Bunga Pengantin",           harga:60000, icon:"aksesoris" },
  { id:41, kategori:"Aksesoris", nama:"Bros Kebaya Mewah",                 harga:25000, icon:"aksesoris" },
  { id:42, kategori:"Aksesoris", nama:"Kalung Aksesoris Pesta",            harga:45000, icon:"aksesoris" },
  { id:43, kategori:"Aksesoris", nama:"Anting Set Pengantin",              harga:30000, icon:"aksesoris" },
  { id:44, kategori:"Aksesoris", nama:"Sepatu Heels Pesta",                harga:55000, icon:"aksesoris" },
  { id:45, kategori:"Aksesoris", nama:"Clutch Bag Pesta Elegan",           harga:40000, icon:"aksesoris" },
  { id:46, kategori:"Aksesoris", nama:"Sarung Tangan Pengantin",           harga:20000, icon:"aksesoris" },
  { id:47, kategori:"Aksesoris", nama:"Veil / Kerudung Pengantin",         harga:50000, icon:"aksesoris" },
  { id:48, kategori:"Aksesoris", nama:"Ikat Pinggang Payet Kebaya",        harga:30000, icon:"aksesoris" },
];

/* ---------- METODE PEMBAYARAN (simulasi UI — tidak terhubung ke gateway asli) ---------- */
const PAYMENT_METHODS = [
  { id:"transfer", label:"Transfer Bank",   icon:"bi-bank",           color:"#5B1A22", qris:true,  qrisImage:"images/qris-transfer.png" },
  { id:"ovo",      label:"OVO",             icon:"bi-wallet2",        color:"#4C2A86", qris:true,  qrisImage:"images/qris-ovo.png" },
  { id:"dana",     label:"DANA",            icon:"bi-wallet2",        color:"#0C6FE8", qris:true,  qrisImage:"images/qris-dana.png" },
  { id:"gopay",    label:"GoPay",           icon:"bi-wallet2",        color:"#00AA5B", qris:true,  qrisImage:"images/qris-gopay.png" },
  { id:"seabank",  label:"SeaBank",         icon:"bi-bank2",          color:"#EE4D2D", qris:true,  qrisImage:"images/qris-seabank.png" },
  { id:"cod",      label:"Bayar di Tempat", icon:"bi-cash-coin",      color:"#8a6d1e", qris:false, qrisImage:null },
];

/* ---------- DATA ONGKIR (lokasi usaha: Kec. Siwalan, Kab. Pekalongan) ---------- */
const ONGKIR = {
  "Siwalan":     5000,   // kecamatan lokasi toko sendiri
  "Wonokerto":   6000,
  "Sragi":       7000,
  "Karangdadap": 7500,
};

/* ---------- UTIL ---------- */
function formatRupiah(angka){
  return "Rp " + Math.round(angka).toLocaleString("id-ID");
}

function iconSVG(type){
  const icons = {
    kebaya: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M9 3l3 2 3-2 2 4-2 2v11a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9L6 7l3-4z"/></svg>',
    gaun:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M10 2h4l1 5-2 1 4 12a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1l4-12-2-1 1-5z"/></svg>',
    jas:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M8 4l4 2 4-2 4 3-2 2v10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9L4 7l4-3z"/><path d="M12 6v14"/></svg>',
    aksesoris:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="8" r="4"/><path d="M8 12l-3 8h14l-3-8"/></svg>',
    crown:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M3 8l4 3 5-6 5 6 4-3-2 10H5L3 8z"/></svg>',
  };
  return icons[type] || icons.crown;
}

/* ---------- SEED DEFAULT USER (biar bisa langsung dicoba login) ---------- */
function seedUsers(){
  if(!localStorage.getItem("gbm_users")){
    const defaultUsers = [
      { nama:"Customer Demo", username:"customer1", password:"sewa123" }
    ];
    localStorage.setItem("gbm_users", JSON.stringify(defaultUsers));
  }
}
seedUsers();

/* ---------- AUTH ---------- */
function getUsers(){ return JSON.parse(localStorage.getItem("gbm_users") || "[]"); }
function saveUsers(users){ localStorage.setItem("gbm_users", JSON.stringify(users)); }
function getSession(){ return JSON.parse(localStorage.getItem("gbm_session") || "null"); }
function setSession(user){ localStorage.setItem("gbm_session", JSON.stringify(user)); }
function clearSession(){ localStorage.removeItem("gbm_session"); }

function registerUser(nama, username, password){
  const users = getUsers();
  if(users.find(u => u.username === username)){
    return { ok:false, msg:"Username sudah terdaftar, silakan pilih username lain." };
  }
  users.push({ nama, username, password });
  saveUsers(users);
  return { ok:true };
}

function loginUser(username, password){
  const users = getUsers();
  const found = users.find(u => u.username === username && u.password === password);
  if(!found) return { ok:false, msg:"Username atau password salah." };
  setSession({ nama:found.nama, username:found.username });
  return { ok:true };
}

function logoutUser(){
  clearSession();
  window.location.href = "index.html";
}

/* ---------- CART ---------- */
function getCart(){ return JSON.parse(localStorage.getItem("gbm_cart") || "[]"); }
function saveCart(cart){ localStorage.setItem("gbm_cart", JSON.stringify(cart)); }

function addToCart(productId){
  const cart = getCart();
  const existing = cart.find(i => i.id === productId);
  if(existing){ existing.qty += 1; }
  else{
    const p = PRODUCTS.find(p => p.id === productId);
    cart.push({ id:p.id, nama:p.nama, harga:p.harga, qty:1 });
  }
  saveCart(cart);
  updateCartBadge();
}

function updateQty(productId, qty){
  let cart = getCart();
  cart = cart.map(i => i.id === productId ? { ...i, qty:Math.max(1, qty) } : i);
  saveCart(cart);
}

function removeFromCart(productId){
  const cart = getCart().filter(i => i.id !== productId);
  saveCart(cart);
  updateCartBadge();
}

function cartSubtotal(){
  return getCart().reduce((sum, i) => sum + i.harga * i.qty, 0);
}

function updateCartBadge(){
  const count = getCart().reduce((sum, i) => sum + i.qty, 0);
  $(".cart-count").text(count);
}

/* ---------- NAVBAR: render status login & badge cart di semua halaman ---------- */
function renderNavAuth(){
  const session = getSession();
  const $slot = $("#nav-auth-slot");
  if(!$slot.length) return;
  if(session){
    $slot.html(
      '<div class="user-pill">' +
        '<span>Halo, ' + session.nama.split(" ")[0] + '</span>' +
        '<button class="btn-logout" id="btnLogout">Logout</button>' +
      '</div>'
    );
    $("#btnLogout").on("click", logoutUser);
  } else {
    $slot.html('<a href="login.html" class="btn-outline btn-sm">Login</a>');
  }
}

$(function(){
  updateCartBadge();
  renderNavAuth();

  // ---- header fixed: sinkronkan tinggi spacer & scroll-margin agar konten tidak ketutupan ----
  function syncHeaderHeight(){
    const h = $("#siteHeadFixed").outerHeight() || 0;
    $("#headerSpacer").css("height", h + "px");
    document.documentElement.style.setProperty("--fixed-header-h", (h + 10) + "px");
  }
  syncHeaderHeight();
  $(window).on("resize", syncHeaderHeight);
  // ukur ulang setelah font & gambar selesai dimuat (tinggi header bisa berubah)
  $(window).on("load", syncHeaderHeight);

  // toggle menu mobile
  $("#navToggle").on("click", function(){
    $("#mainNav").toggleClass("open");
    setTimeout(syncHeaderHeight, 50);
  });

  // set tahun footer
  $(".footer-year").text(new Date().getFullYear());

  // ---- musik latar: tombol on/off, status disimpan di localStorage ----
  const $music = $("#bgMusic")[0];
  const $musicBtn = $("#musicToggle");
  if($music && $musicBtn.length){
    function setMusicIcon(playing){
      $musicBtn.toggleClass("playing", playing);
      $musicBtn.html(playing ? '<i class="bi bi-pause-fill"></i>' : '<i class="bi bi-music-note-beamed"></i>');
    }

    // coba lanjutkan otomatis kalau sebelumnya user sudah menyalakan musik
    if(localStorage.getItem("gbm_music") === "on"){
      $music.play().then(()=> setMusicIcon(true)).catch(()=> setMusicIcon(false));
    }

    $musicBtn.on("click", function(){
      if($music.paused){
        $music.play().then(()=>{
          setMusicIcon(true);
          localStorage.setItem("gbm_music", "on");
        }).catch(()=>{
          alert("Musik tidak dapat diputar otomatis oleh browser. Coba klik tombol musik sekali lagi.");
        });
      } else {
        $music.pause();
        setMusicIcon(false);
        localStorage.setItem("gbm_music", "off");
      }
    });
  }
});
