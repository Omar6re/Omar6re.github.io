import { Container, Button } from './styles'

const PageDivider = ({info, page, handleClick}) => {
    return(
        <Container>
            <Button
                onClick={() => handleClick('DECREMENT')}
                disabled={info.prev ? false : true}
            >
                Anterior
            </Button>

            <div>{`${page} de ${info.pages}`}</div>

            <Button
                onClick={() => handleClick('INCREMENT')}
                disabled={info.next ? false : true}
            >
                Siguiente
            </Button>
        </Container>
    )
}

export default PageDivider;
