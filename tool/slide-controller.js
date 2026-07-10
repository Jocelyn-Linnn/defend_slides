/**
 * 簡報通用導覽控制器 (Slide Controller)
 * 支援功能：上下頁雜湊（#last）追蹤、鍵盤/滑鼠事件監聽、按上退回前一頁最後一個動畫
 *
 * 換頁順序優先從 slide-order.js 清單自動解析（依目前檔名在清單中的位置找出
 * 上一頁／下一頁），呼叫端傳入的 nextSlideUrl / prevSlideUrl 只在「目前頁面
 * 不在清單中」時作為備援使用。這樣插入新頁面時，只需更新 slide-order.js，
 * 不必逐頁修改 prevSlideUrl / nextSlideUrl。
 */
import { slideOrder } from './slide-order.js';

function resolveNeighborUrls(fallbackNext, fallbackPrev) {
  const currentFile = window.location.pathname.split('/').pop();
  const idx = slideOrder.indexOf(currentFile);

  if (idx === -1) {
    // 目前檔案不在清單中，退回呼叫端傳入的值
    return { next: fallbackNext, prev: fallbackPrev };
  }

  return {
    next: idx < slideOrder.length - 1 ? slideOrder[idx + 1] : null,
    prev: idx > 0 ? slideOrder[idx - 1] : null
  };
}

export function initSlideController({
  maxSteps,
  nextSlideUrl: fallbackNextSlideUrl,
  prevSlideUrl: fallbackPrevSlideUrl,
  containerId = 'slideContainer',
  onUpdate // 這是外部傳進來的 updateSlide 函式
}) {
  const { next: nextSlideUrl, prev: prevSlideUrl } = resolveNeighborUrls(fallbackNextSlideUrl, fallbackPrevSlideUrl);
  const container = document.getElementById(containerId);

  // 初始化偵測：若網址帶有 #last 暗號則直接跳至最後一步，否則從第 0 步開始
  let currentStep = window.location.hash === '#last' ? maxSteps : 0;

  // 首次載入頁面時，立即同步畫面狀態
  if (typeof onUpdate === 'function') {
    onUpdate(currentStep);
  }

  // 前進一步 (Next)
  function nextStep() {
    if (currentStep >= maxSteps) {
      if (nextSlideUrl) window.location.href = nextSlideUrl;
      return;
    }
    currentStep++;
    if (typeof onUpdate === 'function') onUpdate(currentStep);
  }

  // 後退一步 (Prev)
  function prevStep() {
    if (currentStep <= 0) {
      if (prevSlideUrl) {
        // 處於初始狀態時按退回鍵，在網址尾端加上 #last 錨點跳轉至前一頁
        window.location.href = prevSlideUrl + '#last';
      }
      return;
    }
    currentStep--;
    if (typeof onUpdate === 'function') onUpdate(currentStep);
  }

  // 監聽滑鼠點擊前進
  if (container) {
    container.addEventListener('click', () => {
      nextStep();
    });
  }

  // 監聽鍵盤事件
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
      e.preventDefault();
      nextStep();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      prevStep();
    }
  });

  // 如果未來有其他客製化需求，可以將當前步數暴露出去
  return {
    getCurrentStep: () => currentStep
  };
}