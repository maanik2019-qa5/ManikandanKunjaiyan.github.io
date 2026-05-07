// ==========================================
// LOADER FUNCTIONALITY
// ==========================================

window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.classList.add('hide-loader');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
});

// ==========================================
// NAVIGATION MENU TOGGLE
// ==========================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when link is clicked
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ==========================================
// GO TO TOP BUTTON
// ==========================================

const goTopBtn = document.getElementById('goTopBtn');

// Show/hide go to top button on scroll
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        if (!goTopBtn.classList.contains('show')) {
            goTopBtn.classList.add('show');
            goTopBtn.classList.add('active');
        }
    } else {
        goTopBtn.classList.remove('show');
        goTopBtn.classList.remove('active');
    }
});

// Scroll to top when button is clicked
goTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==========================================
// AI ASSISTANT PANEL
// ==========================================

const assistantBtn = document.getElementById('assistantBtn');
const assistantPanel = document.getElementById('assistantPanel');
const assistantClose = document.getElementById('assistantClose');
const assistantSend = document.getElementById('assistantSend');
const assistantInput = document.getElementById('assistantInput');
const assistantMessages = document.getElementById('assistantMessages');

const assistantResponses = {
    profile: 'I am Manikandan Kunjaiyan, a Software Engineer (SDET) with 6+ years of automation and manual testing experience working on web, mobile, and API testing.',
    skills: 'I have experience with Selenium, TestNG, BDD Cucumber, Playwright, Appium, Java, TypeScript, SQL, Maven, Git, Jenkins, Jira, Postman, Rest Assured, XPath, and UI Automator.',
    experience: 'I currently work as an SDET at Wissen Technology, Bangalore, and previously worked as an Automation Test Engineer at UST Global for Moulton Technologies.',
    projects: 'My key projects include PWM-BSCM Margin, EVP & FXB, RevitaLash Cosmetics, and Kutxabank, focusing on automation, regression, sanity, and API testing.',
    education: 'I completed an MCA from E.G.S Pillay Engineering College and a BCA from A.V.C College – Autonomous.',
    contact: 'You can reach me via email at manikandan.kunjaiyan@wissen.com, or find me on LinkedIn and GitHub.'
};

function addAssistantMessage(text, sender = 'bot') {
    const messageEl = document.createElement('div');
    messageEl.className = `assistant-message ${sender}`;
    messageEl.textContent = text;
    assistantMessages.appendChild(messageEl);
    assistantMessages.scrollTop = assistantMessages.scrollHeight;
}

function getAssistantResponse(query) {
    const lowerQuery = query.toLowerCase();
    if (lowerQuery.includes('profile') || lowerQuery.includes('about') || lowerQuery.includes('name')) {
        return assistantResponses.profile;
    }
    if (lowerQuery.includes('skill') || lowerQuery.includes('technology') || lowerQuery.includes('tool')) {
        return assistantResponses.skills;
    }
    if (lowerQuery.includes('experience') || lowerQuery.includes('work') || lowerQuery.includes('job')) {
        return assistantResponses.experience;
    }
    if (lowerQuery.includes('project') || lowerQuery.includes('work on') || lowerQuery.includes('current project')) {
        return assistantResponses.projects;
    }
    if (lowerQuery.includes('education') || lowerQuery.includes('degree') || lowerQuery.includes('college')) {
        return assistantResponses.education;
    }
    if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('linkedin') || lowerQuery.includes('github')) {
        return assistantResponses.contact;
    }
    return 'I can help answer questions about the profile, skills, projects, experience, education, and contact details. Please ask something related to my profile.';
}

function sendAssistantQuestion() {
    const question = assistantInput.value.trim();
    if (!question) {
        return;
    }

    addAssistantMessage(question, 'user');
    assistantInput.value = '';
    setTimeout(() => {
        addAssistantMessage(getAssistantResponse(question), 'bot');
    }, 300);
}

assistantBtn.addEventListener('click', () => {
    assistantPanel.classList.toggle('open');
    assistantPanel.setAttribute('aria-hidden', assistantPanel.classList.contains('open') ? 'false' : 'true');
    assistantInput.focus();
});

assistantClose.addEventListener('click', () => {
    assistantPanel.classList.remove('open');
    assistantPanel.setAttribute('aria-hidden', 'true');
});

assistantSend.addEventListener('click', sendAssistantQuestion);

assistantInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendAssistantQuestion();
    }
});
