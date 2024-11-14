export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="min-h-screen mx-auto max-w-7xl">
        <main className="p-4">
          {children}
        </main>
      </div>
    )
  }