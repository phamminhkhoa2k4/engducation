
import Footer from "@/components/Footer";
import Header from "@/components/Header";
const ClientLayout = ({children} : {children : React.ReactNode}) => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-1 flex flex-col items-center justify-center">
          
          {children}
        </main>
        <Footer/>
      </div>
    );
}


export default ClientLayout;