import '../styles/footer.css'

const Footer = () => {
    return (
        <footer>
        <div className="upFooter">
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
        <div className="middleFooter">
            <h1>SolidBuild</h1>
            <ul>
                <li><a href="#"></a>@</li>
                <li><a href="#"></a>@</li>
                <li><a href="#"></a>@</li>
                <li><a href="#"></a>@</li>
                <li><a href="#"></a>@</li>    
            </ul>
        </div>
        <div className="downFooter">
            <ul>
                <li><a href="#">© 2025, Copyright</a></li>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="#">Terms of Use</a></li>
            </ul>
        </div>
    </footer>
    )
}

export default Footer