/* ========================================
   Sleep Island — Main JS v2
   Sound card rendering + Audio player + i18n
   ======================================== */

// --- Sound Data ---
const SOUNDS = [
  {
    id: "699466c24a7ad44fa0f98997",
    scene: "入睡 · 放松 · 阅读",
    duration: 549,
    category: "Nature",
    coverUrl: "https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/699466c24a7ad44fa0f98997_zh_6.jpg",
    audioUrl: "https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/vol04_rain_fireplace_2.mp3"
  },
  {
    id: "69949bde4a7ad44fa0f9a39a",
    scene: "沉浸 · 冥想 · 深睡",
    duration: 532,
    category: "Nature",
    coverUrl: "https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/69949bde4a7ad44fa0f9a39a_zh_2.jpg",
    audioUrl: "https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/vol05_rainforest.mp3"
  },
  {
    id: "698c9d384a7ad44fa0f74198",
    scene: "深睡 · 冥想 · 屏蔽杂念",
    duration: 246,
    category: "Nature",
    coverUrl: "https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/698c9d384a7ad44fa0f74198_zh_5.jpg",
    audioUrl: "https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/vol01_deep_sea_bubbles.mp3"
  },
  {
    id: "698ee7a94a7ad44fa0f7f302",
    scene: "入睡 · 放松 · 冥想",
    duration: 180,
    category: "Nature",
    coverUrl: "https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/698ee7a94a7ad44fa0f7f302_zh_2.jpg",
    audioUrl: "https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/vol03_lake_rain_2.mp3"
  },
  {
    id: "69729d6b4a7ad44fa0ef0329",
    scene: "耳鸣缓解 · 深睡 · 放松",
    duration: 603,
    category: "Nature",
    coverUrl: "http://uploadttcdn.fuciyuan7.com/sleep/cover/69729d6b4a7ad44fa0ef0329.jpg",
    audioUrl: "https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/69729d6b4a7ad44fa0ef0329_2.mp3"
  },
  {
    id: "rain_thunder_roof",
    scene: "快速入睡 · 雷雨 · 放松",
    duration: 600,
    category: "Nature",
    coverUrl: "http://uploadttcdn.fuciyuan7.com/sleep/cover/69770a794a7ad44fa0f2a530.jpg",
    audioUrl: "https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/69770a794a7ad44fa0f2a530_2.mp3"
  },
  {
    id: "night_rain_3h",
    scene: "入睡 · 学习 · 放松",
    duration: 600,
    category: "Nature",
    coverUrl: "http://uploadttcdn.fuciyuan7.com/sleep/cover/69729ccc4a7ad44fa0ef0024.jpg",
    audioUrl: "https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/69729ccc4a7ad44fa0ef0024_2.mp3"
  },
  {
    id: "winter_cave_fire",
    scene: "温暖 · 放松 · 深睡",
    duration: 600,
    category: "Nature",
    coverUrl: "http://uploadttcdn.fuciyuan7.com/sleep/cover/698ee3844a7ad44fa0f7e9d6.jpg",
    audioUrl: "https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/698ee3844a7ad44fa0f7e9d6_2.mp3"
  },
  {
    id: "blizzard_forest",
    scene: "深睡 · 屏蔽噪音 · 放松",
    duration: 600,
    category: "Nature",
    coverUrl: "http://uploadttcdn.fuciyuan7.com/sleep/cover/697983474a7ad44fa0f3cec9.jpg",
    audioUrl: "https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/697983474a7ad44fa0f3cec9_2.mp3"
  }
];

// --- Format duration ---
function fmtDur(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return m + ':' + String(s).padStart(2, '0');
}

// --- Render Sound Cards ---
function renderSounds() {
  const grid = document.getElementById('soundsGrid');
  if (!grid) return;

  const catLabel = t('catNature');

  grid.innerHTML = SOUNDS.map((s, i) => `
    <div class="sound-card fade-in" data-idx="${i}" style="animation-delay:${i * 0.06}s">
      <div class="sound-card__cover">
        <img src="${s.coverUrl}" alt="${getSoundName(s.id)}" loading="lazy" />
        <div class="sound-card__play">
          <div class="sound-card__play-btn">
            <svg viewBox="0 0 24 24"><polygon points="8 5 19 12 8 19 8 5"/></svg>
          </div>
        </div>
      </div>
      <div class="sound-card__info">
        <div class="sound-card__name" title="${getSoundName(s.id)}">${getSoundName(s.id)}</div>
        <div class="sound-card__meta">
          <span class="sound-card__tag">${catLabel}</span>
          <span>${fmtDur(s.duration)}</span>
        </div>
      </div>
    </div>
  `).join('');

  // Click handlers
  grid.querySelectorAll('.sound-card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.dataset.idx);
      playSound(idx);
    });
  });

  // Re-init fade-in for new cards
  initFadeIn();
}

// --- Audio Player ---
let audio = null;
let currentIdx = -1;
let isPlaying = false;

const playerEl = document.getElementById('player');
const playerCover = document.getElementById('playerCover');
const playerTitle = document.getElementById('playerTitle');
const playerBar = document.getElementById('playerBar');
const playerPlayBtn = document.getElementById('playerPlayBtn');
const playerPlayIcon = document.getElementById('playerPlayIcon');
const playerProgress = document.getElementById('playerProgress');

function playSound(idx) {
  const s = SOUNDS[idx];
  if (!s) return;

  if (currentIdx === idx && audio) {
    if (isPlaying) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
    return;
  }

  if (audio) { audio.pause(); audio.src = ''; }

  currentIdx = idx;
  audio = new Audio(s.audioUrl);
  audio.crossOrigin = 'anonymous';

  playerEl.classList.add('active');
  playerCover.src = s.coverUrl;
  playerTitle.textContent = getSoundName(s.id);
  playerBar.style.width = '0%';

  audio.addEventListener('canplay', () => {
    audio.play();
    setPlaying(true);
  }, { once: true });

  audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
      playerBar.style.width = (audio.currentTime / audio.duration * 100) + '%';
    }
  });

  audio.addEventListener('ended', () => {
    setPlaying(false);
    playerBar.style.width = '100%';
  });

  audio.addEventListener('error', () => {
    playerTitle.textContent = t('playerError');
    setPlaying(false);
  });

  document.querySelectorAll('.sound-card').forEach((c, i) => {
    c.classList.toggle('active', i === idx);
  });
}

function setPlaying(playing) {
  isPlaying = playing;
  if (playing) {
    playerPlayIcon.innerHTML = '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
  } else {
    playerPlayIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';
  }
}

if (playerPlayBtn) {
  playerPlayBtn.addEventListener('click', () => {
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  });
}

if (playerProgress) {
  playerProgress.addEventListener('click', (e) => {
    if (!audio || !audio.duration) return;
    const rect = playerProgress.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audio.currentTime = pct * audio.duration;
  });
}

// --- Scroll fade-in ---
function initFadeIn() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => observer.observe(el));
}

// --- Hide mobile download bar when player is active ---
function updateMobileDl() {
  const mobileDl = document.getElementById('mobileDl');
  if (!mobileDl) return;
  if (playerEl && playerEl.classList.contains('active')) {
    mobileDl.style.display = 'none';
  }
}

const playerObserver = new MutationObserver(updateMobileDl);
if (playerEl) {
  playerObserver.observe(playerEl, { attributes: true, attributeFilter: ['class'] });
}

// --- Language Switcher ---
function initLangSwitcher() {
  const toggle = document.getElementById('langToggle');
  const dropdown = document.getElementById('langDropdown');
  const label = document.getElementById('langLabel');
  if (!toggle || !dropdown) return;

  const langNames = { zh: '中文', en: 'EN', ja: '日本語', es: 'ES', pt: 'PT' };
  label.textContent = langNames[currentLang] || currentLang;

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    dropdown.classList.remove('open');
  });

  dropdown.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const lang = btn.dataset.lang;
      setLang(lang);
      label.textContent = langNames[lang] || lang;
      dropdown.classList.remove('open');
    });
  });
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  renderSounds();
  initFadeIn();
  initLangSwitcher();
});
