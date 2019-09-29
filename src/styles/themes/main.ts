import { darken } from 'polished'
import { Theme } from '../styled'
// needs color pallette
const mainTheme: Theme = {
  colors: {
    background: '',
    body: '',
    head: darken(0.2, '#007bff'),
    cancel: 'lime',
    apply: 'dodgerblue',
    poi: '#a4d1ff'
  },
  border: '0px'
}

export default mainTheme
