import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="relative flex justify-between items-center min-w-[100%]">
            <div className="border border-black min-w-[100%] z-50 h-16 border-t-0 border-l-0 border-r-0">
                <div className="absolute left-0 flex items-center pl-5 m-auto h-full ">
                    <MountainIcon />
                </div>
                <nav className="flex gap-8 items-center justify-center flex-grow z-50 h-full">
                    <NavLink href="/">Inicio</NavLink>
                </nav>
            </div>

            <nav className=" hidden md:lg:flex flex-col gap-4 fixed top-16 border-t-0 border-l-0 left-0 h-[100vh] w-16 bg-[#ac965c] pt-2 border border-black ">
                <NavLinkAside href="/login">In</NavLinkAside>
                <NavLinkAside href="/register">En</NavLinkAside>
            </nav>
        </div>
    );
}

function MountainIcon(props: any) {
    return (
        <Link
            className="font-bold text-lg text-white transition-colors hover:text-gray-300 py-4"
            href="/">
            RoProfile
        </Link>
    );
}

function NavLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            className="relative font-medium text-white text-base transition-colors hover:text-gray-300 py-2"
            href={href}>
            {children}
        </Link>
    );
}

function NavLinkAside({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            className="relative font-medium text-white text-base transition-colors hover:text-gray-300 w-full text-center"
            href={href}>
            {children}
        </Link>
    );
}
