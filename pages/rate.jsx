import Header from '../components/Header';
import Footer from '../components/Footer';
import MaxWidth from '../components/MaxWidth';
import Main from '../components/Main';
import Link from 'next/link';

const Rate = ({ url: { query: { code } } }) => {
    const rate = async () => {
        try {
            const result = fetch('/api/beer/rate', {
                method: 'POST', headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    beer: code,
                    rate: {
                        overall: 10
                    }
                })
            });
            console.log(result);
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <>
            <Header />
            <Main center>
                <MaxWidth>
                    <form onSubmit={rate}>
                        <h3>Betygsätt ölen {code}</h3>
                        <button type="submit">Bästa betyg</button>
                    </form>
                </MaxWidth>
            </Main>
            <Footer />
        </>
    );
}

export default Rate;