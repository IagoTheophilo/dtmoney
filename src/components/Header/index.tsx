import logoImg from '../../assets/logo.svg'
import { Container, Contant } from './styles'

interface HeaderProps{
  onOpenNewTransactionModal:()=>void;
}

export function Header({onOpenNewTransactionModal}:HeaderProps) {
  return (
    <Container>
      <Contant>

        <img src={logoImg} alt="dt money " />
        <button type='button' onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>

      </Contant>
    </Container>
  )
}  