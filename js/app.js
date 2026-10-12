/* JavaScript Principal - Manual y Guía de Backend */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initSidebar();
    initSearch();
    initCodeCopy();
    initServerSimulator();
});

/* 1. Gestión de Tema Claro / Oscuro */
function initTheme() {
    const themeBtn = document.getElementById('theme-toggle-btn');
    const savedTheme = localStorage.getItem('backend_manual_theme');

    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateThemeIcon('dark');
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('backend_manual_theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }
}

function updateThemeIcon(theme) {
    const iconSpan = document.querySelector('#theme-toggle-btn .theme-icon');
    const textSpan = document.querySelector('#theme-toggle-btn .theme-text');
    if (iconSpan && textSpan) {
        if (theme === 'dark') {
            iconSpan.textContent = '☀️';
            textSpan.textContent = 'Modo Claro';
        } else {
            iconSpan.textContent = '🌙';
            textSpan.textContent = 'Modo Oscuro';
        }
    }
}

/* 2. Toggle de Menú Sidebar en Pantallas Pequeñas */
function initSidebar() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.toggle('open');
        });

        // Cerrar sidebar al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!sidebar.contains(e.target) && !menuToggle.contains(e.target) && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
            }
        });
    }
}

/* 3. Búsqueda y Filtrado en Sidebar */
function initSearch() {
    const searchInput = document.getElementById('sidebar-search-input');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');
        const navGroups = document.querySelectorAll('.sidebar-nav .nav-group');

        navLinks.forEach(link => {
            const text = link.textContent.toLowerCase();
            if (text.includes(query)) {
                link.style.display = 'flex';
            } else {
                link.style.display = 'none';
            }
        });

        // Mostrar u ocultar títulos de grupo si tienen elementos visibles
        navGroups.forEach(group => {
            const visibleLinks = group.querySelectorAll('.nav-link[style*="display: flex"], .nav-link:not([style*="display"])');
            if (visibleLinks.length > 0) {
                group.style.display = 'block';
            } else {
                group.style.display = 'none';
            }
        });
    });
}

/* 4. Funcionalidad de Copiado de Código */
function initCodeCopy() {
    const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const wrapper = btn.closest('.code-wrapper');
            const codeBlock = wrapper ? wrapper.querySelector('code') : null;

            if (codeBlock) {
                const text = codeBlock.innerText;
                navigator.clipboard.writeText(text).then(() => {
                    const originalText = btn.textContent;
                    btn.textContent = '✓ ¡Copiado!';
                    btn.style.color = '#34d399';

                    setTimeout(() => {
                        btn.textContent = originalText;
                        btn.style.color = '';
                    }, 2000);
                }).catch(err => {
                    console.error('Error al copiar texto: ', err);
                });
            }
        });
    });
}

/* 5. Simulador Interactivo de Arranque de Servidor Backend */
function initServerSimulator() {
    const startBtn = document.getElementById('server-start-btn');
    const stopBtn = document.getElementById('server-stop-btn');
    const portInput = document.getElementById('server-port');
    const logBox = document.getElementById('server-log');

    if (!startBtn || !logBox) return;

    let serverRunning = false;
    let logInterval = null;
    let requestCount = 0;

    const requestRoutes = [
        'GET /api/v1/usuarios        200  12ms',
        'POST /api/v1/auth/login     200  89ms',
        'GET /api/v1/productos       304   8ms',
        'PUT /api/v1/usuarios/42     200  34ms',
        'GET /api/v1/metricas        200  45ms',
        'POST /api/v1/pedidos        201 156ms',
        'DELETE /api/v1/sesiones/7   204  20ms',
        'GET /favicon.ico            404   3ms'
    ];

    function logLine(line, color = '#34d399') {
        const now = new Date();
        const ts = now.toTimeString().slice(0, 8);
        const div = document.createElement('div');
        div.textContent = `[${ts}] ${line}`;
        div.style.color = color;
        logBox.appendChild(div);
        logBox.scrollTop = logBox.scrollHeight;
    }

    startBtn.addEventListener('click', () => {
        if (serverRunning) return;
        const port = portInput ? portInput.value || '3000' : '3000';

        serverRunning = true;
        logBox.innerHTML = '';
        logLine('Iniciando servidor backend...', '#fbbf24');
        logLine(`$ node server.js --port=${port}`, '#60a5fa');

        setTimeout(() => {
            logLine('✓ Dependencias cargadas (Express, Morgan, CORS, dotenv)', '#34d399');
            logLine('✓ Conexión a base de datos PostgreSQL establecida', '#34d399');
            logLine(`🚀 Servidor escuchando en http://localhost:${port}`, '#a7f3d0');
        }, 600);

        setTimeout(() => {
            logLine('--- Logs de peticiones entrantes ---', '#94a3b8');
        }, 1400);

        // Simular peticiones entrantes
        logInterval = setInterval(() => {
            const route = requestRoutes[Math.floor(Math.random() * requestRoutes.length)];
            requestCount++;
            logLine(`${requestCount.toString().padStart(4, '0')}  ${route}`, '#e2e8f0');

            // Subir highlight a la última línea
            const lines = logBox.querySelectorAll('div');
            lines.forEach(l => l.style.background = '');
            const last = lines[lines.length - 1];
            if (last) last.style.background = 'rgba(5, 150, 105, 0.08)';
        }, 1500);
    });

    if (stopBtn) {
        stopBtn.addEventListener('click', () => {
            if (!serverRunning) return;
            serverRunning = false;
            clearInterval(logInterval);
            logLine('🛑 Servidor detenido por el usuario', '#f87171');
            logLine(`Total de peticiones atendidas: ${requestCount}`, '#94a3b8');
        });
    }
}
