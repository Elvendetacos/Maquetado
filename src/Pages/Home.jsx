import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Layout from "../Conteiners/Layout";
import FromHome from "../Components/FromHome";

function Home() {
    return (
        <>
        <Header></Header>
        <Layout>
            <FromHome></FromHome>
        </Layout> 
        <Footer></Footer>
        </>
     );
}

export default Home;