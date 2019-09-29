import styled, { CreateStyled } from '@emotion/styled'

export interface Theme {
  colors: {
    background: string
    body: string
  }
  border: string
}
export default styled as CreateStyled<Theme>
