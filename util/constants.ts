export const DEFAULT_TOKEN_BALANCE_REFETCH_INTERVAL = 60000
export const APP_NAME = process.env.NEXT_PUBLIC_SITE_TITLE
export const APP_MAX_WIDTH = '1920px'

// Planned to create themes these are references.

export const neonThemeColors = {
    reddish: '#ff0000',
    green: '#00ff09',
    yellow: '#f4fc03',
    lightBlue: '#03f0fc',
    lightPurp: '#b700ff',
    pink: '#ff00bb',
    blue: '#000dff',
    black: '#000000',
    white: '#ffffff',
    grey: '#474242',
    orange: '#fc4a03',
    purp: '#7303fc'

    // white: 'hsl(0, 0%, 100%)',
    // red: 'hsl(0, 100%, 50%)',
    // green: 'hsl(122, 100%, 50%)',
    // yellow: 'hsl(62, 98%, 50%)',
    // lightBlue: 'hsl(183, 98%, 50%)',
    // lightPurp: 'hsl(283, 100%, 50%)',
    // pink: 'hsl(316, 100%, 50%)',
    // blue: 'hsl(237, 100%, 50%)',
    // black: 'hsl(0, 0%, 0%)',
    // grey: 'hsl(0, 4%, 27%)',
    
}

export const sizes = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '500px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
  };

export const device = {
    mobileS: `(min-width: ${sizes.mobileS})`,
    mobileM: `(min-width: ${sizes.mobileM})`,
    mobileL: `(min-width: ${sizes.mobileL})`,
    tablet: `(min-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    laptopL: `(min-width: ${sizes.laptopL})`,
    desktop: `(min-width: ${sizes.desktop})`,
  };



