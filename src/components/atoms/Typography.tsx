import styled, { css } from 'styled-components'

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'body' | 'caption'
  mb?: number
}

const variantStyles = (theme: any) => ({
  h1: css`
    font-size: 2rem;
    font-weight: 700;
    color: ${theme.colors.textDark};
  `,
  h2: css`
    font-size: 1.75rem;
    font-weight: 700;
    color: ${theme.colors.textDark};
  `,
  h3: css`
    font-size: 1.5rem;
    font-weight: 700;
    color: ${theme.colors.textDark};
  `,
  h4: css`
    font-size: 1.25rem;
    font-weight: 700;
    color: ${theme.colors.textDark};
  `,
  h5: css`
    font-size: 1rem;
    font-weight: 700;
    color: ${theme.colors.textDark};
  `,
  body: css`
    font-size: 1rem;
    color: ${theme.colors.textDark};
  `,
  caption: css`
    font-size: 0.8rem;
    color: ${theme.colors.textDark};
  `,
})

const Typography = styled.p<TypographyProps>`
  margin-bottom: ${({ mb = 0 }) => mb}rem;
  ${({ variant = 'body', theme }) => variantStyles(theme)[variant]}
`

export default Typography
