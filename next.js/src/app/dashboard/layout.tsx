// build layout file for dashboard

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <section>

                <h1>from Dashboard Layout</h1>

                <main>
                    {children}
                </main>


        </section>
    )
}