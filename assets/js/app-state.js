/**
 * sGold Shared Application State & Data Store
 * Provides persistent dummy data across all pages (localStorage enabled)
 */

const DEFAULT_SGOLD_STATE = {
  user: {
    name: "Global Trust Fund",
    email: "executive@sovereign-cap.ch",
    tier: "Tier-1 Institutional",
    entityType: "Organisation",
    wallet: "0x71C8...8B42",
    saxessProId: "SP-9982-ZURICH",
    kycStatus: "VERIFIED",
    amlScore: "0.00 Risk (Pristine)",
    jurisdiction: "Liechtenstein (TVTG Approved)"
  },
  market: {
    spotPrice: 4950.00,
    change24h: 1.18,
    aumUsd: 140000000,
    aumOz: 30020.42,
    circulatingSupply: 30020.42,
    physicalGoldOz: 30000,
    tokensIssuedOz: 28000,
    backingRatio: 107
  },
  portfolio: {
    ownedGoldOz: 25.80,
    prefundedUsd: 20500.00,
    avgAcquisitionPrice: 4500.00,
    portfolioGainsUsd: 18500.00,
    portfolioGainsPct: 12.5,
    breakdown: {
      availableOz: 21.00,
      availableUsd: 240000.00,
      pendingPurchaseOz: 4.00,
      pendingPurchaseUsd: 16000.00,
      pendingSaleOz: 4.00,
      pendingSaleUsd: 16000.00,
      pendingRedeemOz: 4.00,
      pendingRedeemUsd: 16000.00
    },
    custody: {
      vault: "Dallas Sovereign Depository, USA",
      securedOz: 12.500,
      status: "ALLOCATED",
      verification: "VERIFIED",
      barSerial: "LBMA-99482-TX",
      purity: "99.99% Fine Gold",
      insurance: "Lloyd's of London (Full Value Policy)"
    }
  },
  activities: [
    { id: "TXN-99842", date: "2026-09-07 14:22 UTC", action: "Buy", quantity: "+5.0 oz", price: "$4,950.00", status: "Completed", mode: "Prefunded USD" },
    { id: "TXN-99821", date: "2026-09-05 09:15 UTC", action: "Swap", quantity: "-2.0 oz -> $9,909 USD-S", price: "$4,954.50", status: "Completed", mode: "Settlement Token" },
    { id: "TXN-99818", date: "2026-09-02 18:40 UTC", action: "Redeem", quantity: "-4.0 oz (Bullion)", price: "Melt Equiv", status: "Pending Vault Release", mode: "Physical Delivery" },
    { id: "TXN-99792", date: "2026-08-28 11:05 UTC", action: "Sell", quantity: "-2.5 oz", price: "$4,920.00", status: "Completed", mode: "Fiat Wire" },
    { id: "TXN-99754", date: "2026-08-20 16:30 UTC", action: "Buy", quantity: "+10.0 oz", price: "$4,890.00", status: "Completed", mode: "Crypto USDC" }
  ]
};

// Initialize State
function getSGoldState() {
  const saved = localStorage.getItem('sgold_app_state');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.warn("Failed to parse saved sGold state, reverting to default", e);
    }
  }
  localStorage.setItem('sgold_app_state', JSON.stringify(DEFAULT_SGOLD_STATE));
  return DEFAULT_SGOLD_STATE;
}

function saveSGoldState(state) {
  localStorage.setItem('sgold_app_state', JSON.stringify(state));
}

function formatUSD(num) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(num);
}

function formatOz(num) {
  return (Number(num) || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 }) + ' oz';
}
