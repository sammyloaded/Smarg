// --- Profile Page Tab Switching Logic ---

function switchSettingTab(tabId, element) {
    // 1. Remove active class from all main tab buttons
    const tabs = document.querySelectorAll('.settings-tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));

    // 2. Add active class to clicked button
    element.classList.add('active');

    // 3. Hide all setting views
    const views = document.querySelectorAll('.settings-view');
    views.forEach(view => view.style.display = 'none');

    // 4. Show the selected view
    document.getElementById(tabId).style.display = 'block';
}

function switchSubTab(subTabId, element) {
    // 1. Remove active class from all sub-tab buttons
    const subTabs = document.querySelectorAll('.sub-tab-btn');
    subTabs.forEach(tab => tab.classList.remove('active'));

    // 2. Add active class to clicked button
    element.classList.add('active');

    // 3. Hide all sub views
    const subViews = document.querySelectorAll('.sub-view');
    subViews.forEach(view => view.style.display = 'none');

    // 4. Show the selected sub view
    document.getElementById(subTabId).style.display = 'block';
}