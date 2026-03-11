function toggleDarkMode() {
    // Toggle the "dark-mode" class on the <body> element
    document.body.classList.toggle('dark-mode');
}

function setActiveTab(tabName) {
    const tabs = document.querySelectorAll('[role="tab"][data-tab]');
    const panels = document.querySelectorAll('[role="tabpanel"][data-panel]');

    tabs.forEach((tab) => {
        const isActive = tab.dataset.tab === tabName;
        tab.setAttribute('aria-selected', String(isActive));
        tab.tabIndex = isActive ? 0 : -1;
    });

    panels.forEach((panel) => {
        panel.hidden = panel.dataset.panel !== tabName;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('[role="tab"][data-tab]');

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            setActiveTab(tab.dataset.tab);
        });
    });

    // Ensure consistent initial state (Home visible, others hidden)
    setActiveTab('hero');
});

