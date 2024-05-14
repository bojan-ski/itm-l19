const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer>
            <p>
                &copy; {year} BP Development under the tutelage of ITM. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer