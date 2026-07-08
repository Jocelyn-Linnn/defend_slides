/**
 * 讓固定尺寸 (1280x720) 的簡報畫布依視窗大小等比例縮放並置中，
 * 避免在不同螢幕解析度下畫面被裁切或偏向左上角。
 */
const SLIDE_WIDTH = 1280;
const SLIDE_HEIGHT = 720;

function fitSlideToViewport(containerId = 'slideContainer') {
  const el = document.getElementById(containerId);
  if (!el) return;

  const scale = Math.min(
    window.innerWidth / SLIDE_WIDTH,
    window.innerHeight / SLIDE_HEIGHT
  );

  el.style.transform = `scale(${scale})`;
}

window.addEventListener('resize', () => fitSlideToViewport());
fitSlideToViewport();
