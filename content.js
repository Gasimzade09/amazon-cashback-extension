document.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (!link || !link.href.includes('amazon.com')) return;

  const url = new URL(link.href);
  if (url.searchParams.get('tag') === 'smartcashba04-20') {
    console.log('Affiliate click detected:', url.href);

    // Отправляем клик на backend
    fetch('https://your-backend.com/log-click', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: chrome.runtime.id, // можно использовать уникальный id расширения или сгенерированный внутренний ID
        url: url.href,
        timestamp: Date.now()
      })
    });
  }
});
