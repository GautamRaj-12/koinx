import koinxLogo from "../../assets/koinx-logo.svg"
const Navbar = () =>{
    return(
        <>
        <header className="shadow-lg">
            <nav className="flex w-[90%] mx-auto justify-between items-center p-3">
                <div><img src={koinxLogo} alt="" className="w-40"/></div>
                <ul className="flex gap-16">
                    <li className="py-1 font-semibold">Crypto Taxes</li>
                    <li className="py-1 font-semibold">Free Tools</li>
                    <li className="py-1 font-semibold">Resource Center</li>
                    <li className="px-4 py-1 font-semibold bg-blue-600 rounded-md text-slate-100">Get Started</li>
                </ul>
            </nav>
        </header>
        </>
    )
}
export default Navbar;