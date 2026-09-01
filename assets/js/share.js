(function () {
  const toast = document.querySelector('[data-toast]');
  const notify = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('visible');
    window.setTimeout(() => toast.classList.remove('visible'), 3000);
  };
  document.querySelectorAll('[data-demo-order]').forEach((button) => {
    button.addEventListener('click', () => notify('演示下单：此按钮不会创建订单、付款或交付任何资料。'));
  });
  document.querySelectorAll('[data-copy-link]').forEach((button) => {
    button.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(window.location.href); notify('链接已复制。'); }
      catch (_) { notify('请复制浏览器地址栏中的当前链接。'); }
    });
  });
  document.querySelectorAll('[data-share-page]').forEach((button) => {
    button.addEventListener('click', async () => {
      if (navigator.share) {
        try { await navigator.share({ title: document.title, url: window.location.href }); } catch (_) { /* 用户取消分享 */ }
      } else {
        try { await navigator.clipboard.writeText(window.location.href); notify('当前浏览器不支持系统分享，链接已复制。'); }
        catch (_) { notify('请复制浏览器地址栏中的当前链接。'); }
      }
    });
  });
}());
