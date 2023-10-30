// import Component
import Header from "./Header"
import Footer from "./Footer"
import ScrollTop from "./ScrollTop"

export default function Layout({ children }) {
    return (
        <div className="flex flex-col h-screen min-w-[1280px] justify-center">
            <Header />
            <ScrollTop>
                <div className="overflow-y-auto h-full flex flex-col justify-between items-center bg-container-image">
                    <div className="w-[1200px] xl:w-[1280px] mx-auto py-5 h-full">
                        {children}
                    </div>
                </div>
            </ScrollTop>
            <Footer />
        </div>
    )
}