interface NavLinkProps {
    icon: React.ComponentType<{ size: number }>
    label: string
    href: string
}

export const NavLink: React.FC<NavLinkProps> = ({ icon: Icon, label, href }) => {
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
            const navHeight = document.querySelector("nav")?.offsetHeight || 0
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - navHeight

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            })
        }
    }

    return (
        <a
            href={href}
            onClick={scrollToSection}
            className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all hover:bg-white/10 text-white/90 hover:text-white"
        >
            <Icon size={20} />
            <span className="hidden md:inline text-sm">{label}</span>
        </a>
    )
}