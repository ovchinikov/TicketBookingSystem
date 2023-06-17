import "@styles/globals.css"


export default function AppLayout({ children }) {
    return (
        <div className="bg-white h-screen flex flex-col items-center justify-center">
            <main>{children}</main>
        </div>
    )
}