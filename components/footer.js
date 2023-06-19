import Link from "next/link";
import CompanyLogo from "@components/company_logo";
import Image from "next/image";


export default function Footer() {
    const footerLinkItems = [
        { title: "Tickets", items: ["Train", "Airplane", "Charter a Private Jet"], },
        { title: "Company", items: ["About Us", "Careers", "Press", "News"], },
        { title: "Resource", items: ["Blog", "Newsletter", "Events", "Help center"], },
    ]
    const socialMediaLinks = [
        { name: "Facebook", icon: "/icons/facebook.svg", href: "https://www.facebook.com" },
        { name: "Instagram", icon: "/icons/instagram.svg", href: "https://www.instagram.com" },
        { name: "Twitter", icon: "/icons/twitter.svg", href: "https://www.twitter.com" },
        { name: "Github", icon: "/icons/github.svg", href: "https://www.github.com" },
    ]
    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-screen px-8 py-4">
            <div className="">
                <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
                    <CompanyLogo className="mb-6" />

                    <div className="grid grid-cols-3 justify-between gap-4">
                        {footerLinkItems.map(({ title, items }) => (
                            <ul key={title}>
                                <p className="text-lg mb-3 font-semibold text-gray-500">
                                    {title}
                                </p>
                                <div className="flex flex-col gap-y-2">
                                    {items.map((link) => (
                                        <li key={link}>
                                            <Link
                                                href="#"
                                                className="text-gray-500 py-1.5 font-normal transition-colors hover:text-blue-gray-900">
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </div>
                            </ul>
                        ))}
                    </div>
                </div>
                <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
                    <p className="text-sm mb-4 text-center font-normal text-blue-gray-400 md:mb-0">
                        &copy; {currentYear} <Link href="/">Billet d'Avion</Link>. All
                        Rights Reserved.
                    </p>

                    <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
                        {socialMediaLinks.map((item) => (
                            <Link key={item.name} href={item.href} className="opacity-80 transition-opacity hover:opacity-100">
                                <Image 
                                    src={item.icon}
                                    alt={item.name}
                                    width={20}
                                    height={20}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}