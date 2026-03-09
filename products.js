// ================================
// AUTO LOGIN
// ================================

const currentUser = JSON.parse(localStorage.getItem("currentUser"))

// if (currentUser && !window.location.pathname.includes("products.html")) {
//     window.location.href = "products.html"
// } 

// currentUser && showToast(`Chào mừng ${currentUser.username}!`, 'success')
const userInfo = document.getElementById("userInfo");

if (currentUser) {
    userInfo.textContent = currentUser.username;
    logoutBtn.style.display = "block";
} else {
    userInfo.textContent = "Đăng nhập";
    logoutBtn.style.display = "none";
}

/* ============================================================
   DỮ LIỆU SẢN PHẨM
============================================================ */
let categories = [
    { id: 'phone', icon: 'fas fa-mobile-alt', name: 'Điện thoại', count: 120, img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80' },
    { id: 'laptop', icon: 'fas fa-laptop', name: 'Laptop', count: 85, img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80' },
    { id: 'watch', icon: 'fas fa-clock', name: 'Đồng hồ', count: 60, img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80' },
    { id: 'headphone', icon: 'fas fa-headphones', name: 'Tai nghe', count: 95, img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80' },
    { id: 'tablet', icon: 'fas fa-tablet-alt', name: 'Tablet', count: 40, img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80' },
    { id: 'camera', icon: 'fas fa-camera', name: 'Máy ảnh', count: 30, img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80' },
];

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

/* ============================================================
   TRẠNG THÁI GIỎ HÀNG
============================================================ */
let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ============================================================
   SEARCH TỪ URL (index -> products)
============================================================ */
function getSearchFromURL() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    console.log("Search ID from URL:", id); // ✅ log ID tìm kiếm

    if (!id) return products;

    const result = products.filter(p => p.id == id);

    return result;
}
/* ============================================================
   RENDER DANH MỤC
============================================================ */
function renderCategories() {
    const grid = document.getElementById('categoriesGrid');
    grid.innerHTML = categories.map(c => `
    <div class="cat-card" onclick="filterByCategory('${c.id}')">
      <div class="cat-bg" style="background-image:url('${c.img}')"></div>
      <div class="cat-icon"><i class="${c.icon}"></i></div>
      <div class="cat-name">${c.name}</div>
      <div class="cat-count">${c.count} sản phẩm</div>
    </div>
  `).join('');
}

/* ============================================================
   RENDER SẢN PHẨM
============================================================ */
function formatPrice(n) {
    return n.toLocaleString('vi-VN') + ' ₫';
}

function renderStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    return '<span class="stars">'
        + '<i class="fas fa-star"></i>'.repeat(full)
        + (half ? '<i class="fas fa-star-half-alt"></i>' : '')
        + '<i class="far fa-star"></i>'.repeat(empty)
        + '</span>';
}

function renderProducts(list) {
    const grid = document.getElementById('productsGrid');
    const noP = document.getElementById('noProducts');

    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (!list.length) {
        grid.innerHTML = '';
        noP.classList.remove('hidden');
        return;
    }

    noP.classList.add('hidden');

    grid.innerHTML = list.map(p => {

        const liked = wishlist.includes(String(p.id));

        return `
        <div class="product-card" data-aos="fade-up" data-id="${p.id}">
          <div class="product-img-wrap">
            <img src="${p.img}" alt="${p.name}" loading="lazy"
                 onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
            <i class="${p.icon}" style="display:none;position:absolute;font-size:5rem;color:rgba(59,130,246,0.3)"></i>
            ${p.label ? `<span class="label label-${p.label}">${labelText(p.label)}</span>` : ''}

            <button class="btn-wish ${liked ? 'active' : ''}" data-id="${p.id}" onclick="toggleWish(this)" title="Yêu thích">
                <i class="${liked ? 'fas' : 'far'} fa-heart"></i>
            </button>

          </div>

          <div class="product-body">
            <div class="product-brand">${p.brand}</div>
            <div class="product-name">${p.name}</div>

            <div class="product-rating">
              ${renderStars(p.rating)}
              <span class="rating-count">${p.rating} (${p.reviews.toLocaleString()})</span>
            </div>

            <div class="product-price">
              <span class="price-new">${formatPrice(p.price)}</span>
              ${p.oldPrice ? `<span class="price-old">${formatPrice(p.oldPrice)}</span>` : ''}
            </div>

            <button class="btn-add-cart" onclick="addToCart(${p.id})">
              <i class="fas fa-cart-plus"></i> Thêm vào giỏ
            </button>
          </div>
        </div>
        `
    }).join('');

    AOS.refresh();
}

function labelText(lbl) {
    const map = { sale: 'Sale', new: 'Mới', hot: 'Hot' };
    return map[lbl] || lbl;
}

/* ============================================================
   BỘ LỌC
============================================================ */
let activeFilters = { brand: '', category: '', priceMin: 0, priceMax: Infinity };

function applyFilters() {
    const brand = document.getElementById('filterBrand').value;
    const category = document.getElementById('filterCategory').value;
    const priceMin = parseFloat(document.getElementById('priceMin').value) || 0;
    const priceMax = parseFloat(document.getElementById('priceMax').value) || Infinity;

    activeFilters = { brand, category, priceMin, priceMax };
    const filtered = products.filter(p => {
        if (brand && p.brand !== brand) return false;
        if (category && p.cat !== category) return false;
        if (p.price < priceMin) return false;
        if (p.price > priceMax) return false;
        return true;
    });
    renderProducts(filtered);
    document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
}

function resetFilters() {
    document.getElementById('filterBrand').value = '';
    document.getElementById('filterCategory').value = '';
    document.getElementById('priceMin').value = '';
    document.getElementById('priceMax').value = '';
    activeFilters = { brand: '', category: '', priceMin: 0, priceMax: Infinity };
    renderProducts(products);
}

/* Lọc từ bên ngoài (click brand pill hoặc cat card) */
function filterByBrand(brand) {
    document.getElementById('filterBrand').value = brand;
    document.querySelectorAll('.brand-pill').forEach(el => {
        el.classList.toggle('active', el.textContent.trim().includes(brand) || brand === '');
    });
    applyFilters();
}
function filterByCategory(cat) {
    document.getElementById('filterCategory').value = cat;
    applyFilters();
}

document.getElementById('btnFilter').addEventListener('click', applyFilters);
document.getElementById('btnReset').addEventListener('click', resetFilters);

/* ============================================================
   TÌM KIẾM NHANH
============================================================ */
document.getElementById('searchInput').addEventListener('input', function () {
    if (this.value !== '') {
        document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
    }
    const q = this.value.toLowerCase().trim();
    if (!q) { renderProducts(products); return; }
    const res = products.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q)
    );
    renderProducts(res);
});

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
   GIỎ HÀNG
============================================================ */
function addToCart(productId) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) 
    if (!currentUser) {
        showToast('Vui lòng đăng nhập!', 'error')
        setTimeout(() => {
            window.location.href = "login.html"
        }
        , 1500)
        return
    }
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
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) 
    if (!currentUser) {
        showToast('Vui lòng đăng nhập!', 'error')
        setTimeout(() => {
            window.location.href = "login.html"
        }
        , 1500)
        return
    }
    cart = cart.filter(item => item.product.id !== productId);
    saveCart();
    updateCartUI();
    renderCartItems();
}

function changeQty(productId, delta) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) 
    if (!currentUser) {
        showToast('Vui lòng đăng nhập!', 'error')
        setTimeout(() => {
            window.location.href = "login.html"
        }
        , 1500)
        return
    }
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
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) 
    if (!currentUser) {
        showToast('Vui lòng đăng nhập!', 'error')
        setTimeout(() => {
            window.location.href = "login.html"
        }
        , 1500)
        return
    }
    if (!cart.length) { showToast('Giỏ hàng đang trống!', 'error'); return; }
    showToast('🎉 Thanh toán thành công! Cảm ơn bạn đã mua hàng.', 'success');
    cart = [];
    updateCartUI();
    closeCart();
}

document.getElementById('cartBtn').addEventListener('click', openCart);

/* ============================================================
   WISHLIST (TIM)
============================================================ */
function toggleWish(btn) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) 
    if (!currentUser) {
        showToast('Vui lòng đăng nhập!', 'error')
        setTimeout(() => {
            window.location.href = "login.html"
        }
        , 1500)
        return
    }
    const id = btn.dataset.id
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || []
    const icon = btn.querySelector("i")
    if (wishlist.includes(id)) {
        wishlist = wishlist.filter(i => i !== id)
        btn.classList.remove("active")
        icon.classList.remove("fas")
        icon.classList.add("far")
        showToast('Đã xóa khỏi yêu thích!', 'success')

    } else {
        wishlist.push(id)
        btn.classList.add("active")
        icon.classList.remove("far")
        icon.classList.add("fas")
        showToast('Đã thêm vào yêu thích!', 'success')
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
}

/* ============================================================
   ĐỒNG HỒ ĐẾM NGƯỢC FLASH SALE
============================================================ */
// function startCountdown() {
//     // Đặt thời gian kết thúc là 6 giờ kể từ bây giờ
//     const endTime = new Date().getTime() + 6 * 60 * 60 * 1000;

//     function tick() {
//         const now = new Date().getTime();
//         const diff = endTime - now;

//         if (diff <= 0) {
//             document.getElementById('cdHour').textContent = '00';
//             document.getElementById('cdMin').textContent = '00';
//             document.getElementById('cdSec').textContent = '00';
//             return;
//         }

//         const h = Math.floor(diff / 3600000);
//         const m = Math.floor((diff % 3600000) / 60000);
//         const s = Math.floor((diff % 60000) / 1000);

//         document.getElementById('cdHour').textContent = String(h).padStart(2, '0');
//         document.getElementById('cdMin').textContent = String(m).padStart(2, '0');
//         document.getElementById('cdSec').textContent = String(s).padStart(2, '0');
//     }
//     tick();
//     setInterval(tick, 1000);
// }

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
   KHỞI TẠO
============================================================ */
AOS.init({ once: true, offset: 80, duration: 700 });
renderCategories();
renderProducts(getSearchFromURL());
// startCountdown();
updateCartUI();
renderCartItems();