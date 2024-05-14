import Link from "next/link"
import navLinks from '../utils/links'

const Navbar = () => {
  return (
    <header>
        <nav>
            {navLinks.map((link, idx) => {
                const {href, label} = link

                return <Link key={idx} href={href}>
                    {label}
                </Link>
            })}
        </nav>
    </header>
  )
}

export default Navbar