// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const loginButton = document.getElementById('loginButton');
    const registerButton = document.getElementById('registerButton');
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeLogin = document.getElementById('closeLogin');
    const closeRegister = document.getElementById('closeRegister');
    const openRegister = document.getElementById('openRegister');
    const openLogin = document.getElementById('openLogin');
    const logoutButton = document.getElementById('logout');
    const dashboardSection = document.getElementById('dashboard');
    const landingSection = document.getElementById('landing');
    const settingsSection = document.getElementById('settings');
    const activeJourneySection = document.getElementById('activeJourney');
    const startJourneyButton = document.getElementById('startJourney');
    const endJourneyButton = document.getElementById('endJourney');
    const sosButton = document.getElementById('sosButton');
    const fakeCallButton = document.getElementById('fakeCallButton');
    const safetyCheckPopup = document.getElementById('safetyCheckPopup');
    const safeYes = document.getElementById('safeYes');
    const safeNo = document.getElementById('safeNo');
    const backToTopButton = document.getElementById('backToTop');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const presetForm = document.getElementById('presetForm');
    const presetItems = document.getElementById('presetItems');

    // Authentication Simulation
    let isAuthenticated = false;

    // Open Login Modal
    loginButton.addEventListener('click', () => {
        showModal(loginModal);
    });

    // Open Register Modal
    registerButton.addEventListener('click', () => {
        showModal(registerModal);
    });

    // Close Modals
    closeLogin.addEventListener('click', () => {
        hideModal(loginModal);
    });

    closeRegister.addEventListener('click', () => {
        hideModal(registerModal);
    });

    // Switch to Register Modal
    openRegister.addEventListener('click', () => {
        hideModal(loginModal);
        showModal(registerModal);
    });

    // Switch to Login Modal
    openLogin.addEventListener('click', () => {
        hideModal(registerModal);
        showModal(loginModal);
    });

    // Logout
    logoutButton.addEventListener('click', () => {
        isAuthenticated = false;
        updateAuthUI();
    });

    // Update UI based on authentication
    function updateAuthUI() {
        if (isAuthenticated) {
            landingSection.classList.add('hidden');
            dashboardSection.classList.remove('hidden');
            settingsSection.classList.remove('hidden');
            logoutButton.classList.remove('hidden');
        } else {
            landingSection.classList.remove('hidden');
            dashboardSection.classList.add('hidden');
            settingsSection.classList.add('hidden');
            activeJourneySection.classList.add('hidden');
            logoutButton.classList.add('hidden');
        }
    }

    // Show Modal
    function showModal(modal) {
        modal.classList.add('show');
        modalOverlay.classList.add('show');
    }

    // Hide Modal
    function hideModal(modal) {
        modal.classList.remove('show');
        modalOverlay.classList.remove('show');
    }

    // Handle Login Form Submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Mock authentication
        isAuthenticated = true;
        hideModal(loginModal);
        updateAuthUI();
    });

    // Handle Register Form Submission
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Mock registration
        isAuthenticated = true;
        hideModal(registerModal);
        updateAuthUI();
    });

    // Start Journey
    startJourneyButton.addEventListener('click', () => {
        // In a real app, collect selected services and set up journey
        // For this prototype, simply show the Active Journey section
        landingSection.classList.add('hidden');
        dashboardSection.classList.add('hidden');
        activeJourneySection.classList.remove('hidden');
        // Mock destination
        document.getElementById('destination').textContent = "Central Park";
        // Start safety check intervals
        initiateSafetyChecks();
    });

    // End Journey
    endJourneyButton.addEventListener('click', () => {
        activeJourneySection.classList.add('hidden');
        dashboardSection.classList.remove('hidden');
        // Stop safety checks
        clearInterval(safetyCheckInterval);
    });

    // SOS Button
    sosButton.addEventListener('click', () => {
        alert('SOS Activated! Help is on the way.');
        // Implement actual SOS functionality here
    });

    // Fake Call Button
    fakeCallButton.addEventListener('click', () => {
        initiateFakeCall();
    });

    // Safety Check-In
    let safetyCheckInterval;

    function initiateSafetyChecks() {
        // Example: every 5 minutes
        safetyCheckInterval = setInterval(() => {
            showSafetyCheckPopup();
        }, 5 * 60 * 1000); // 5 minutes in milliseconds
    }

    function showSafetyCheckPopup() {
        safetyCheckPopup.classList.remove('hidden');
    }

    safeYes.addEventListener('click', () => {
        const code = prompt('Enter your 4-digit code:');
        if (code === '1234') { // Replace with actual code verification
            safetyCheckPopup.classList.add('hidden');
            // Reset the interval or adjust as needed
        } else {
            alert('Incorrect code. Please try again.');
        }
    });

    safeNo.addEventListener('click', () => {
        safetyCheckPopup.classList.add('hidden');
        alert('Alert! Your safety is a priority. Authorities have been notified.');
        // Implement actual alert functionality here
    });

    // Fake Call Simulation
    function initiateFakeCall() {
        // In a real app, integrate with a fake call API
        alert('Fake call initiated!');
    }

    // Back to Top Button Functionality
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Handle Preset Form Submission
    presetForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const presetName = document.getElementById('presetName').value.trim();
        const selectedServices = Array.from(document.querySelectorAll('input[name="presetServices"]:checked')).map(cb => cb.value);

        if (presetName === '' || selectedServices.length === 0) {
            alert('Please provide a preset name and select at least one service.');
            return;
        }

        addPreset(presetName, selectedServices);
        presetForm.reset();
    });

    // Add Preset to the List
    function addPreset(name, services) {
        const li = document.createElement('li');
        li.textContent = `${name}: ${services.join(', ')}`;
        presetItems.appendChild(li);
    }

    // Initialize UI
    updateAuthUI();
});
