async function loadConfig() {
    const now = new Date();
    const currentHour = now.getHours();
    const module = await import('./theme.mjs');
    try {
        if (currentHour >= 18) {
            module.setDarkTheme
        } else {
            module.setLightTheme
        }
    } catch (err) {
        console.log(err);
    }
}

loadConfig();