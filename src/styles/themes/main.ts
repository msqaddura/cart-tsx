import { darken } from 'polished'
import { Theme } from '../styled'
// needs color pallette
const mainTheme: Theme = {
  colors: {
    background: '',
    body: '',
    head: darken(0.2, '#007bff'),
    cancel: '#28a745', // wrong name but anyway
    apply: 'dodgerblue',
    poi: '#a4d1ff',
    disabled: 'red'
  },
  border: '0px'
}

export default mainTheme
