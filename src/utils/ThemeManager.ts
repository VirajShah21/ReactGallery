class ThemeManager {
    private static readonly themes: Record<string, ThemeDefinition>;

    static addTheme(name: string, theme: ThemeDefinition): void {
        ThemeManager.themes[name] = theme;
    }

    static useTheme(name: string) {
        if (ThemeManager.themes[name] === undefined) {
            throw new Error(`${name} is not a defined theme name.`);
        }
        const {
            text,
            background,
            primary,
            secondary,
            success,
            danger,
            warning,
            info,
            muted,
            lightShadow,
        } = ThemeManager.themes[name];
        document.documentElement.style.setProperty('--text', text);
        document.documentElement.style.setProperty('--background', background);
        document.documentElement.style.setProperty('--primary', primary);
        document.documentElement.style.setProperty('--secondary', secondary);
        document.documentElement.style.setProperty('--success', success);
        document.documentElement.style.setProperty('--danger', danger);
        document.documentElement.style.setProperty('--warning', warning);
        document.documentElement.style.setProperty('--info', info);
        document.documentElement.style.setProperty('--muted', muted);
        document.documentElement.style.setProperty('--lightShadow', lightShadow);
    }
}

interface ThemeDefinition {
    text: string;
    background: string;
    primary: string;
    secondary: string;
    success: string;
    danger: string;
    warning: string;
    info: string;
    muted: string;
    lightShadow: string;
}

export default ThemeManager;
export type { ThemeDefinition };
