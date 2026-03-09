
// ================================
// AUTO LOGIN
// ================================

const currentUser = JSON.parse(localStorage.getItem("currentUser"))

if (currentUser) {
    window.location.href = "index.html"
    showToast(`Chào mừng ${currentUser.username}!`, 'success')
}

// ================================
// LẤY INPUT
// ================================

const usernameInput = document.querySelector('input[placeholder="Tên người dùng"]')
const emailInput = document.querySelector('input[placeholder="Email"]')
const passwordInput = document.querySelector('input[placeholder="Mật khẩu"]')
const confirmInput = document.querySelector('input[placeholder="Xác nhận mật khẩu"]')

const registerBtn = document.querySelector('.btn-sign-up')
const loginBtn = document.querySelector('.btn-sign-in')

// ================================
// VALIDATE EMAIL
// ================================

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

/* ============================================================
   TOAST
============================================================ */

function showToast(message, type = 'success') {

    const container = document.getElementById('toastContainer')
    if (!container) return

    const toast = document.createElement('div')

    const iconMap = {
        success: 'fas fa-check-circle',
        error: 'fas fa-times-circle'
    }

    toast.className = `toast toast-${type}`

    toast.innerHTML = `
        <i class="${iconMap[type]} toast-icon"></i>
        <span>${message}</span>
    `

    container.appendChild(toast)

    setTimeout(() => {
        toast.classList.add('hiding')
        setTimeout(() => toast.remove(), 300)
    }, 3000)
}

// ================================
// REGISTER
// ================================

function registerUser() {

    const username = usernameInput.value.trim()
    const email = emailInput.value.trim()
    const password = passwordInput.value.trim()
    const confirm = confirmInput.value.trim()

    if (!username || !email || !password || !confirm) {
        showToast('Vui lòng nhập đầy đủ thông tin!', 'error')
        return
    }

    if (!isValidEmail(email)) {
        showToast('Email không hợp lệ!', 'error')
        emailInput.focus()
        return
    }

    if (password.length < 6) {
        showToast('Mật khẩu phải ≥ 6 ký tự!', 'error')
        passwordInput.focus()
        return
    }

    if (password !== confirm) {
        showToast('Mật khẩu xác nhận không khớp!', 'error')
        confirmInput.focus()
        return
    }

    let users = JSON.parse(localStorage.getItem("users")) || []

    const emailExist = users.find(u => u.email === email)

    if (emailExist) {
        showToast('Email đã tồn tại!', 'error')
        return
    }

    const newUser = {
        id: Date.now(),
        username,
        email,
        password,
        createdAt: new Date().toISOString()
    }

    users.push(newUser)

    localStorage.setItem("users", JSON.stringify(users))

    showToast('Đăng ký thành công!', 'success')

    ;[usernameInput, emailInput, passwordInput, confirmInput].forEach(i => i.value = "")

}

// ================================
// LOGIN
// ================================

function loginUser() {

    const username = usernameInput.value.trim()
    const password = passwordInput.value.trim()

    if (!username || !password) {
        showToast('Nhập tên người dùng và mật khẩu!', 'error')
        return
    }

    let users = JSON.parse(localStorage.getItem("users")) || []

    const user = users.find(
        u => u.username === username && u.password === password
    )

    if (!user) {
        showToast('Sai tên người dùng hoặc mật khẩu!', 'error')
        return
    }

    localStorage.setItem("currentUser", JSON.stringify(user))

    showToast('Đăng nhập thành công!', 'success')

    setTimeout(() => {
        window.location.href = "index.html"
    }, 1000)
}

// ================================
// EVENT
// ================================

registerBtn?.addEventListener("click", registerUser)

loginBtn?.addEventListener("click", loginUser)

// ================================
// ENTER KEY
// ================================

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        registerUser()
    }
})