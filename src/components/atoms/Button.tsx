import styled from 'styled-components'

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing(1.75)} ${({ theme }) => theme.spacing(1.75)};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grayLight};
    cursor: not-allowed;
  }
`

export default Button
