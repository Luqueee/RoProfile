import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="relative flex justify-between items-center min-w-[100%]">
            <div className="absolute left-0 flex items-center pl-8">
                <MountainIcon />
            </div>

            <nav className="flex gap-8 items-center justify-center flex-grow">
                <NavLink href="#">About</NavLink>
                <NavLink href="#">Services</NavLink>
                <NavLink href="#">Contact</NavLink>
            </nav>
        </div>
    );
}

function MountainIcon(props: any) {
    return (
        <Link
            className="font-bold text-lg text-white transition-colors hover:text-gray-300 py-4"
            href="#">
            roblox
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
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 transition-transform duration-300 ease-in-out transform origin-left group-hover:scale-x-100"></span>
        </Link>
    );
}
