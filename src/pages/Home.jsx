import { useState } from "react";
import Product from "../components/Product";
import { Container, Navbar} from "react-bootstrap";

const Home = () => {
    const [keranjang, setKeranjang] = useState(0); //hooks, useState
    
    const handleKeranjang = (button) => 
    {
        if (button === 'klik')
        {
            setKeranjang(keranjang + 1);
        }

        // console.log(button);
    }

    return (
        <>
            <Navbar bg="primary">
                <Container>
                    <Navbar.Brand href="#home">{ keranjang }</Navbar.Brand>
                </Container>
            </Navbar>
            <Container>
                <h3>Halaman Home</h3>
                <br />
                <Product kategori={"Rekomendasi"}/>
                <Product kategori={"Diskon"}/>
                <Product kategori={"Bundling"}/>
            </Container>
        </>
    );
}

export default Home;