const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    //event storage
    window.deferredPrompt = event;

    //remove hidden class
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.defferredPrompt;
    if (!promptEvent) {
        return;
    }

    //reveal the prompt
    promptEvent.prompt();

    //resetting the prompt variable
    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
    
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    //clears the prompt
    window.deferredPrompt = null;
});
