import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'

const Layout = ({ children }) => {
    return (
        <div className="pusher">
            <Header />
            <main className="container">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;