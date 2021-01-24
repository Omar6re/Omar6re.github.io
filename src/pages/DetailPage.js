import CardDetail from '../components/CardDetail';
import { PageContainer } from '../styles/GlobalStyles'

const DetailPage = (props) => {
    return(
        <PageContainer>
            <CardDetail
                character = {props.location.state}
                goBack    = {props.history.goBack}
            />
        </PageContainer>
    )
}

export default DetailPage;
