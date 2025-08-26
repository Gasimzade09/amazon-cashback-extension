const userId = chrome.runtime.id; // уникальный ID пользователя

async function loadBalance() {
  const res = await fetch(`https://your-backend.com/balance/${userId}`);
  const data = await res.json();
  document.getElementById('balance').textContent = data.balance.toFixed(2);
}

async function loadHistory() {
  const res = await fetch(`https://your-backend.com/history/${userId}`);
  const data = await res.json();
  const list = document.getElementById('history');
  list.innerHTML = '';
  data.history.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${new Date(item.timestamp).toLocaleString()} — $${item.amount}`;
    list.appendChild(li);
  });
}

loadBalance();
loadHistory();
