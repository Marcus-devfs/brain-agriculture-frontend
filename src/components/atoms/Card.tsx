import styled, { css } from 'styled-components'

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing(2)};
  box-shadow: 0 4px 12px rgba(164, 0, 127, 0.12);
  border: 1px solid #f4f4f4;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 20px rgba(164, 0, 127, 0.25);
  }
`

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  color: #4a4a4a;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  font-weight: 700;
`

export const CardText = styled.p`
  font-size: 1rem;
  color: #4a4a4acc;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`

interface BadgeProps {
  variant?: 'primary' | 'secondary'
}

const badgeVariants = (theme: any) => ({
  primary: css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  `,
  secondary: css`
    background-color: ${theme.colors.secondaryLight || '#ffe6f0'};
    color: ${theme.colors.secondary || '#e4007f'};
  `,
})

export const Badge = styled.span<BadgeProps>`
  display: inline-block;
  padding: 0.25rem 0.7rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  ${({ variant = 'primary', theme }) => badgeVariants(theme)[variant]}
`
