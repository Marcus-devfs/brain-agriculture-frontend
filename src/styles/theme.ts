
export const theme = {
  colors: {
    background: '#f4f4f4',
    textDark: '#4a4a4a',
    white: '#ffffff',
    primary: '#e4007f',       // rosa forte Serasa
    primaryLight: '#ff66b2',  // rosa claro
    textPrimary: '#4a4a4a',   // cinza escuro
    textSecondary: '#757575', // cinza médio
    grayLight: '#e0e0e0',     // cinza claro para bordas, bg etc
  },
  spacing: (factor: number) => `${factor * 8}px`,
  borderRadius: '12px',
}
