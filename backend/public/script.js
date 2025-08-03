document.addEventListener('DOMContentLoaded', () => {
  const loginSection = document.getElementById('login-section');
  const tableSection = document.getElementById('table-section');
  const loginForm = document.getElementById('login-form');
  const logoutBtn = document.getElementById('logout-btn');
  const token = localStorage.getItem('token');

  if (token) {
    fetchAiTools(token);
  } else {
    loginSection.style.display = 'block';
  }

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    try {
      const res = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token', data.token);
        fetchAiTools(data.token);
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (err) {
      alert('Login error');
    }
  });

  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('token');
    tableSection.style.display = 'none';
    loginSection.style.display = 'block';
  });

  async function fetchAiTools(token) {
    try {
      const res = await fetch('/ai-tools', {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (res.ok) {
        const tools = await res.json();
        displayTable(tools);
        loginSection.style.display = 'none';
        tableSection.style.display = 'block';
      } else {
        throw new Error();
      }
    } catch {
      localStorage.removeItem('token');
      loginSection.style.display = 'block';
      tableSection.style.display = 'none';
    }
  }

  function displayTable(tools) {
    const tbody = document.getElementById('tools-table-body');
    tbody.innerHTML = '';
    tools.forEach(tool => {
      const row = `<tr>
        <td>${tool.name}</td>
        <td>${tool.year_published}</td>
        <td>${tool.cost_usd_per_month}</td>
        <td>${tool.average_monthly_users}</td>
      </tr>`;
      tbody.insertAdjacentHTML('beforeend', row);
    });
  }
});
