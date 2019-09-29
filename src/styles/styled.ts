import styled, { CreateStyled } from '@emotion/styled'

export interface Theme {
  colors: {
    background: string
    body: string
    head: string
    apply: string
    cancel: string
    poi: string
  }
  border: string
}
export default styled as CreateStyled<Theme>
