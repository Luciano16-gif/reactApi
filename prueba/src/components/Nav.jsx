
function Nav({children}){
    return(
        <>
            <nav className="w-screen bg-green-400 flex justify-center">
                {children}
            </nav>
        </>
    );
}

export default Nav;