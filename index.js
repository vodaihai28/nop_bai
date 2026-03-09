// ================================
// AUTO LOGIN
// ================================

const currentUser = JSON.parse(localStorage.getItem("currentUser"))

// if (currentUser && !window.location.pathname.includes("index.html")) {
//     window.location.href = "index.html"
// } 

// currentUser && showToast(`Chào mừng ${currentUser.username}!`, 'success')
const userInfo = document.getElementById("userInfo");
const logoutBtn = document.getElementById("logoutBtn");


if (currentUser) {
    userInfo.textContent = currentUser.username;
    logoutBtn.style.display = "block";
} else {
    userInfo.textContent = "Đăng nhập";
    logoutBtn.style.display = "none";
}

let products = [
    { id: 1, name: 'iPhone 16 Pro Max', brand: 'Apple', cat: 'phone', price: 35990000, oldPrice: 38990000, rating: 4.9, reviews: 1240, label: 'new', icon: 'fas fa-mobile-alt', img: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&q=85' },
    { id: 2, name: 'Samsung Galaxy S25', brand: 'Samsung', cat: 'phone', price: 22990000, oldPrice: 26990000, rating: 4.7, reviews: 980, label: 'sale', icon: 'fas fa-mobile-alt', img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&q=85' },
    { id: 3, name: 'MacBook Pro M4', brand: 'Apple', cat: 'laptop', price: 45990000, oldPrice: 49990000, rating: 4.9, reviews: 560, label: 'new', icon: 'fas fa-laptop', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=85' },
    { id: 4, name: 'Dell XPS 15 OLED', brand: 'Dell', cat: 'laptop', price: 39900000, oldPrice: 43000000, rating: 4.6, reviews: 320, label: 'sale', icon: 'fas fa-laptop', img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=500&q=85' },
    { id: 5, name: 'Apple Watch Ultra 2', brand: 'Apple', cat: 'watch', price: 19990000, oldPrice: 22990000, rating: 4.8, reviews: 870, label: 'hot', icon: 'fas fa-clock', img: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=85' },
    { id: 6, name: 'Sony WH-1000XM6', brand: 'Sony', cat: 'headphone', price: 8990000, oldPrice: 10490000, rating: 4.9, reviews: 2100, label: 'sale', icon: 'fas fa-headphones', img: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=85' },
    { id: 7, name: 'iPad Pro M4 13"', brand: 'Apple', cat: 'tablet', price: 29990000, oldPrice: 32990000, rating: 4.8, reviews: 640, label: 'new', icon: 'fas fa-tablet-alt', img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=85' },
    { id: 8, name: 'Xiaomi 15 Ultra', brand: 'Xiaomi', cat: 'phone', price: 19990000, oldPrice: 23990000, rating: 4.6, reviews: 430, label: 'sale', icon: 'fas fa-mobile-alt', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=85' },
    { id: 9, name: 'Sony WF-1000XM5', brand: 'Sony', cat: 'headphone', price: 5990000, oldPrice: 7490000, rating: 4.7, reviews: 1560, label: 'sale', icon: 'fas fa-headphones', img: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500&q=85' },
    { id: 10, name: 'MacBook Air M4', brand: 'Apple', cat: 'laptop', price: 28990000, oldPrice: 30990000, rating: 4.8, reviews: 910, label: 'hot', icon: 'fas fa-laptop', img: 'https://images.unsplash.com/photo-1611186871525-b0fc7d389c48?w=500&q=85' },
    { id: 11, name: 'Galaxy Watch 7 Pro', brand: 'Samsung', cat: 'watch', price: 9990000, oldPrice: 11990000, rating: 4.5, reviews: 380, label: 'sale', icon: 'fas fa-clock', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=85' },
    { id: 12, name: 'Xiaomi Pad 7 Pro', brand: 'Xiaomi', cat: 'tablet', price: 9490000, oldPrice: 11490000, rating: 4.4, reviews: 250, label: 'sale', icon: 'fas fa-tablet-alt', img: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&q=85' },
];

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

function formatPrice(n) {
    return n.toLocaleString('vi-VN') + ' ₫';
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

searchInput.addEventListener("input", function () {

    const q = this.value.toLowerCase().trim();

    if (!q) {
        searchResults.style.display = "none";
        return;
    }

    const res = products.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q)
    );

    console.log(res); // ✅ log kết quả tìm kiếm

    searchResults.innerHTML = res.slice(0, 5).map(p => `
        <div class="search-item" onclick="goProduct(${p.id})">
            <img src="${p.img}">
            <div>
                <div class="search-name">${p.name}</div>
                <div class="search-price">${formatPrice(p.price)}</div>
            </div>
        </div>
    `).join("");

    searchResults.style.display = res.length ? "block" : "none";
});

function goProduct(id) {
    window.location.href = `products.html?id=${id}`;
}

const counters = document.querySelectorAll(".stat-num");

counters.forEach(counter => {
    const target = parseFloat(counter.getAttribute("data-target"));
    const isDecimal = target % 1 !== 0;
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const value = target * progress;

        if (isDecimal) {
            counter.innerText = value.toFixed(1) + "⭐";
        } else {
            if (target >= 1000) {
                counter.innerText = Math.floor(value / 1000) + "K+";
            } else {
                counter.innerText = Math.floor(value);
            }
        }

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
});




/* ============================================================
   ĐỒNG HỒ ĐẾM NGƯỢC FLASH SALE
============================================================ */
function startCountdown() {
    // Đặt thời gian kết thúc là 6 giờ kể từ bây giờ
    const endTime = new Date().getTime() + 6 * 60 * 60 * 1000;

    function tick() {
        const now = new Date().getTime();
        const diff = endTime - now;

        if (diff <= 0) {
            document.getElementById('cdHour').textContent = '00';
            document.getElementById('cdMin').textContent = '00';
            document.getElementById('cdSec').textContent = '00';
            return;
        }

        const h = Math.floor(diff / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);

        document.getElementById('cdHour').textContent = String(h).padStart(2, '0');
        document.getElementById('cdMin').textContent = String(m).padStart(2, '0');
        document.getElementById('cdSec').textContent = String(s).padStart(2, '0');
    }
    tick();
    setInterval(tick, 1000);
}

/* ============================================================
   TOAST THÔNG BÁO
============================================================ */
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const iconMap = { success: 'fas fa-check-circle', error: 'fas fa-times-circle' };
    toast.innerHTML = `<i class="${iconMap[type] || iconMap.success} toast-icon"></i><span>${message}</span>`;
    container.appendChild(toast);

    // Tự ẩn sau 3 giây
    setTimeout(() => {
        toast.classList.add('hiding');
        setTimeout(() => toast.remove(), 350);
    }, 3000);
}

/* ============================================================
   NEWSLETTER
============================================================ */
function subscribeNewsletter() {
    const input = document.querySelector('.newsletter-input');
    const email = input.value.trim();
    if (!email || !email.includes('@')) {
        showToast('Vui lòng nhập email hợp lệ!', 'error'); return;
    }
    showToast(`✅ Đăng ký thành công với ${email}!`, 'success');
    input.value = '';
}

/* ============================================================
   MENU MOBILE
============================================================ */
document.getElementById('menuToggle').addEventListener('click', function () {
    const nav = document.getElementById('navMenu');
    nav.classList.toggle('mobile-open');
    this.innerHTML = nav.classList.contains('mobile-open')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});

/* ============================================================
   SCROLL: HIGHLIGHT NAV ACTIVE
============================================================ */
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    header.style.background = window.scrollY > 50
        ? 'rgba(15,23,42,0.95)'
        : 'rgba(15,23,42,0.7)';
});


/* ============================================================
   GIỎ HÀNG
============================================================ */
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.product.id === productId);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ product, qty: 1 });
    }
    saveCart();
    updateCartUI();
    showToast(`Đã thêm "${product.name}" vào giỏ hàng!`, 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.product.id !== productId);
    saveCart();
    updateCartUI();
    renderCartItems();
}

function changeQty(productId, delta) {
    const item = cart.find(i => i.product.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) { removeFromCart(productId); return; }
    saveCart();
    updateCartUI();
    renderCartItems();
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartUI() {
    const total = cart.reduce((sum, i) => sum + i.qty, 0);
    document.getElementById('cartBadge').textContent = total;
    renderCartItems();
}

function renderCartItems() {
    const container = document.getElementById('cartItems');
    if (!cart.length) {
        container.innerHTML = `<div class="cart-empty"><i class="fas fa-shopping-cart"></i>Giỏ hàng trống</div>`;
        document.getElementById('cartTotal').textContent = '0 ₫';
        return;
    }

    container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-icon">
        <img src="${item.product.img}" alt="${item.product.name}"
             onerror="this.style.display='none';this.parentElement.innerHTML='<i class=\\''+item.product.icon+'\\'></i>'"/>
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.product.name}</div>
        <div class="cart-item-price">${formatPrice(item.product.price)}</div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="changeQty(${item.product.id}, -1)"><i class="fas fa-minus"></i></button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.product.id}, +1)"><i class="fas fa-plus"></i></button>
          <button class="btn-remove-item" onclick="removeFromCart(${item.product.id})" title="Xóa">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');

    // Tổng tiền
    const total = cart.reduce((sum, i) => sum + i.product.price * i.qty, 0);
    document.getElementById('cartTotal').textContent = formatPrice(total);
}

function openCart() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    if (!currentUser) {
        showToast('Vui lòng đăng nhập để xem giỏ hàng!', 'error')
        setTimeout(() => {
            window.location.href = "login.html"
        }
            , 1500)
        return
    }
    document.getElementById('cartOverlay').classList.add('open');
    document.getElementById('cartSidebar').classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeCart() {
    document.getElementById('cartOverlay').classList.remove('open');
    document.getElementById('cartSidebar').classList.remove('open');
    document.body.style.overflow = '';
}
function checkout() {
    if (!cart.length) { showToast('Giỏ hàng đang trống!', 'error'); return; }
    showToast('🎉 Thanh toán thành công! Cảm ơn bạn đã mua hàng.', 'success');
    cart = [];
    updateCartUI();
    closeCart();
}

document.getElementById('cartBtn').addEventListener('click', openCart);
logoutBtn && currentUser && logoutBtn.addEventListener('click', function () {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("cart");
    localStorage.removeItem("wishlist");
    showToast('Đăng xuất thành công!', 'success');
    setTimeout(() => {
        window.location.href = "login.html"
    }, 1500);
});


/* ============================================================
   KHỞI TẠO
============================================================ */
AOS.init({ once: true, offset: 80, duration: 700 });
// renderCategories();
// renderProducts(products);
startCountdown();
updateCartUI();
renderCartItems();