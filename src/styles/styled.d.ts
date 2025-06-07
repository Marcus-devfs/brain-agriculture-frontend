// styles/styled.d.ts
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      primaryLight: string
      white: string
      grayLight: string
      textPrimary: string
      // outras cores aqui
    }
    spacing: (factor: number) => string
    borderRadius: string
  }
}
