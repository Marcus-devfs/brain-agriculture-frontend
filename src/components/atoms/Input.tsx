import styled from 'styled-components'

const Input = styled.input`
  width: 100%;
  padding: 0.6rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.textPrimary};
  &:focus {
    border-color: #1976d2;
    outline: none;
  }
`

export default Input
