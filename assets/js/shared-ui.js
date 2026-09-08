/**
 * Shared UI Navigation Header, Modals, and Saxess Pro Biometric Execution Helper
 */

function renderSharedNav(activePage = 'dashboard') {
  const state = getSGoldState();
  const portfolioVal = state.portfolio.ownedGoldOz * state.market.spotPrice;

  const navHtml = `
  <header class="fixed top-0 left-0 right-0 h-20 bg-surface/90 backdrop-blur-xl shadow-[0_1px_12px_rgba(0,0,0,0.3)] z-40 border-b border-surface-container-high">
    <div class="max-w-[1440px] mx-auto h-full px-6 flex items-center justify-between">
      <!-- Left: Brand Logo & Links -->
      <div class="flex items-center space-x-8">
        <a href="dashboard.html" class="flex items-center space-x-3 group">
          <img src="../assets/images/sgold-coin.webp" alt="sGold" class="w-9 h-9 object-contain drop-shadow-[0_0_12px_rgba(242,202,80,0.4)] group-hover:scale-105 transition-transform" />
          <div class="flex flex-col">
            <span class="font-bold text-xl text-primary tracking-tight font-serif">sGold</span>
          </div>
        </a>

        <nav class="hidden md:flex items-center space-x-1 font-medium text-sm">
          <a href="dashboard.html" class="px-3.5 py-2 rounded-lg transition-all ${activePage === 'dashboard' ? 'bg-primary text-on-primary font-semibold shadow-sm' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'}">
            Dashboard
          </a>
          <a href="my-gold.html" class="px-3.5 py-2 rounded-lg transition-all ${activePage === 'my-gold' ? 'bg-primary text-on-primary font-semibold shadow-sm' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'}">
            My Gold
          </a>
          <a href="buy.html" class="px-3.5 py-2 rounded-lg transition-all ${activePage === 'buy' ? 'bg-primary text-on-primary font-semibold shadow-sm' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'}">
            Buy sGold
          </a>
          <a href="sell.html" class="px-3.5 py-2 rounded-lg transition-all ${activePage === 'sell' ? 'bg-primary text-on-primary font-semibold shadow-sm' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'}">
            Sell sGold
          </a>
          <a href="redeem.html" class="px-3.5 py-2 rounded-lg transition-all ${activePage === 'redeem' ? 'bg-primary text-on-primary font-semibold shadow-sm' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'}">
            Redeem Bullion
          </a>
        </nav>
      </div>

      <!-- Right: Ticker & Profile Menu -->
      <div class="flex items-center space-x-4">
        <div class="hidden lg:flex items-center space-x-3 bg-surface-container-low px-3.5 py-1.5 rounded-lg border border-outline-variant/30">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span class="text-[11px] font-mono text-outline">LBMA SPOT:</span>
          <span class="text-xs font-mono font-bold text-primary">$4,950.00 / oz</span>
        </div>

        <div class="hidden sm:flex flex-col items-end">
          <span class="text-[10px] font-mono text-outline uppercase tracking-wider">Portfolio Holdings</span>
          <span class="text-sm font-mono font-bold text-on-surface">${formatUSD(portfolioVal)}</span>
        </div>

        <!-- User Profile Dropdown Toggle -->
        <div class="relative">
          <button onclick="toggleProfileMenu()" class="flex items-center space-x-2.5 p-1.5 rounded-xl bg-surface-container-low border border-surface-container-high hover:border-primary/50 transition-all">
            <div class="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-bold text-xs">
              GT
            </div>
            <span class="hidden md:inline text-xs font-medium text-on-surface">${state.user.name}</span>
            <span class="material-symbols-outlined text-sm text-outline">expand_more</span>
          </button>

          <!-- Dropdown Popover -->
          <div id="profile-dropdown" class="hidden absolute right-0 mt-2 w-64 bg-surface-container-low border border-surface-container-high rounded-xl p-3 shadow-2xl z-50">
            <div class="p-2 border-b border-surface-container-high mb-2">
              <div class="text-xs font-bold text-on-surface">${state.user.name}</div>
              <div class="text-[11px] text-primary font-mono">${state.user.tier}</div>
              <div class="text-[10px] text-outline font-mono truncate">${state.user.wallet}</div>
            </div>
            <a href="profile.html" class="flex items-center space-x-2.5 px-3 py-2 rounded-lg text-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all">
              <span class="material-symbols-outlined text-sm">manage_accounts</span>
              <span>Institution Profile</span>
            </a>
            <a href="my-gold.html" class="flex items-center space-x-2.5 px-3 py-2 rounded-lg text-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all">
              <span class="material-symbols-outlined text-sm">savings</span>
              <span>My Gold Portfolio</span>
            </a>
            <div class="my-1 border-t border-surface-container-high"></div>
            <div class="px-3 py-1 text-[10px] font-mono text-outline uppercase tracking-wider">Admin & Keynote</div>
            <a href="admin-ledger.html" class="flex items-center space-x-2.5 px-3 py-1.5 rounded-lg text-xs text-on-surface-variant hover:bg-surface-container hover:text-primary transition-all">
              <span class="material-symbols-outlined text-sm text-primary">receipt_long</span>
              <span>Token Ledger</span>
            </a>
            <a href="admin-snapshot.html" class="flex items-center space-x-2.5 px-3 py-1.5 rounded-lg text-xs text-on-surface-variant hover:bg-surface-container hover:text-primary transition-all">
              <span class="material-symbols-outlined text-sm text-primary">pie_chart</span>
              <span>Owners Snapshot</span>
            </a>
            <a href="admin-allocation.html" class="flex items-center space-x-2.5 px-3 py-1.5 rounded-lg text-xs text-on-surface-variant hover:bg-surface-container hover:text-primary transition-all">
              <span class="material-symbols-outlined text-sm text-primary">grain</span>
              <span>Bar Allocation Deck</span>
            </a>
            <a href="security.html" class="flex items-center space-x-2.5 px-3 py-1.5 rounded-lg text-xs text-on-surface-variant hover:bg-surface-container hover:text-emerald-400 transition-all">
              <span class="material-symbols-outlined text-sm text-emerald-400">shield</span>
              <span>Security Framework</span>
            </a>
            <div class="my-1 border-t border-surface-container-high"></div>
            <a href="auth.html" class="flex items-center space-x-2.5 px-3 py-2 rounded-lg text-sm text-error hover:bg-error/10 transition-all">
              <span class="material-symbols-outlined text-sm">logout</span>
              <span>Disconnect / Logout</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
  `;

  document.body.insertAdjacentHTML('afterbegin', navHtml);
}

function toggleProfileMenu() {
  const el = document.getElementById('profile-dropdown');
  if (el) el.classList.toggle('hidden');
}

// Global click outside closer for dropdown
document.addEventListener('click', (e) => {
  const dropdown = document.getElementById('profile-dropdown');
  if (dropdown && !dropdown.contains(e.target) && !e.target.closest('button[onclick="toggleProfileMenu()"]')) {
    dropdown.classList.add('hidden');
  }
});

/**
 * Universal Saxess Pro Biometric Execution Modal Handler
 */
function triggerSaxessProBiometrics({ title, subtitle, challenge, onApproved }) {
  // Remove existing if any
  const existing = document.getElementById('saxess-biometric-modal');
  if (existing) existing.remove();

  const modalHtml = `
  <div id="saxess-biometric-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface/85 backdrop-blur-md">
    <div class="bg-surface-container-low border border-primary/40 rounded-2xl max-w-md w-full p-6 shadow-2xl relative overflow-hidden animate-in fade-in zoom-in-95 duration-200">
      <div class="absolute -top-16 -right-16 w-40 h-40 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>

      <!-- Header -->
      <div class="flex items-center justify-between pb-4 border-b border-surface-container-high">
        <div class="flex items-center space-x-2">
          <div class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
          <span class="text-xs font-mono text-primary font-bold tracking-wider">SAXESS PRO BIOMETRIC AUTHENTICATION</span>
        </div>
        <button onclick="closeSaxessModal()" class="text-outline hover:text-on-surface">
          <span class="material-symbols-outlined text-sm">close</span>
        </button>
      </div>

      <!-- Content -->
      <div class="py-6 text-center space-y-4" id="bio-state-waiting">
        <div class="relative w-24 h-24 mx-auto flex items-center justify-center">
          <div class="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
          <div class="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-primary relative z-10 shadow-[0_0_20px_rgba(242,202,80,0.3)]">
            <span class="material-symbols-outlined text-4xl">fingerprint</span>
          </div>
        </div>

        <div class="space-y-1">
          <h3 class="text-xl font-serif font-bold text-on-surface">${title || 'Biometric Authorization'}</h3>
          <p class="text-sm text-outline">${subtitle || 'Open your registered Saxess Pro mobile authenticator or touch Hardware Key'}</p>
        </div>

        <div class="p-3 bg-surface-container rounded-lg border border-outline-variant/30 text-left font-mono text-xs text-outline space-y-1">
          <div class="flex justify-between text-on-surface-variant">
            <span>CHALLENGE NONCE:</span>
            <span class="text-primary">${challenge || '0x9948-ZURICH-AUTH'}</span>
          </div>
          <div class="flex justify-between text-on-surface-variant">
            <span>TARGET DEVICE:</span>
            <span class="text-on-surface font-semibold">iPhone 15 Pro (Secure Enclave)</span>
          </div>
        </div>

        <div class="flex space-x-3 pt-2">
          <button onclick="closeSaxessModal()" class="w-1/3 py-3 bg-surface-container border border-surface-container-high rounded-lg text-sm text-on-surface font-medium hover:bg-surface-container-high">
            Cancel
          </button>
          <button onclick="simulateSaxessApprove()" class="w-2/3 py-3 bg-primary text-on-primary rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:brightness-110 flex items-center justify-center space-x-2">
            <span class="material-symbols-outlined text-sm">touch_app</span>
            <span>Approve on Device</span>
          </button>
        </div>
      </div>

      <!-- Processing state -->
      <div class="py-6 space-y-4 hidden" id="bio-state-processing">
        <div class="text-center space-y-1">
          <h3 class="text-xl font-serif font-bold text-primary">Cryptographic Proof Verified</h3>
          <p class="text-sm text-outline">Executing atomic signature on-chain...</p>
        </div>
        <div class="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden">
          <div id="bio-progress-bar" class="bg-primary h-full transition-all duration-700 w-1/3"></div>
        </div>
        <div class="space-y-2 text-xs font-mono text-outline pt-2">
          <div class="flex items-center space-x-2 text-emerald-400">
            <span class="material-symbols-outlined text-xs">done</span>
            <span>Hardware Enclave Attested</span>
          </div>
          <div id="bio-log-sign" class="flex items-center space-x-2 opacity-50">
            <span class="material-symbols-outlined text-xs">schedule</span>
            <span>Broadcasting transaction to custody network</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
  window._currentBioApproved = onApproved;
}

function simulateSaxessApprove() {
  document.getElementById('bio-state-waiting').classList.add('hidden');
  document.getElementById('bio-state-processing').classList.remove('hidden');

  const bar = document.getElementById('bio-progress-bar');
  const log = document.getElementById('bio-log-sign');

  setTimeout(() => {
    if (bar) bar.style.width = '100%';
    if (log) {
      log.classList.remove('opacity-50');
      log.className = 'flex items-center space-x-2 text-emerald-400';
      log.querySelector('span:first-child').innerText = 'done';
    }
  }, 600);

  setTimeout(() => {
    closeSaxessModal();
    if (typeof window._currentBioApproved === 'function') {
      window._currentBioApproved();
    }
  }, 1200);
}

setTimeout(() => {
  simulateSaxessApprove();
}, 6000);

function closeSaxessModal() {
  const el = document.getElementById('saxess-biometric-modal');
  if (el) el.remove();
}
