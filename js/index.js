"use strict";

const body = document.getElementById('body');
const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

function setTheme(isDark) {
    if (isDark) {
        body.classList.add('dark');
        body.classList.remove('light'); // Remove light class
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
        localStorage.setItem('pref-theme', 'dark');
    } else {
        body.classList.add('light'); // Add light class
        body.classList.remove('dark');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
        localStorage.setItem('pref-theme', 'light');
    }
}

const savedTheme = localStorage.getItem('pref-theme');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Update icon status
if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
} else {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
}

// Event listener
themeToggle.addEventListener('click', () => {
    const isDark = body.classList.contains('dark') || (!body.classList.contains('light') && systemDark);
    setTheme(!isDark);
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (!localStorage.getItem('pref-theme')) {
        if (event.matches) {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        } else {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
    }
});
