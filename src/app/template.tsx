import { Footer, Topbar } from '@/app/_components'

export default function RootTemplate({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Topbar />
      <main className="flex-grow pt-[67px] text-primary lg:pt-[77px]">
        {children}
      </main>
      <Footer />
    </div>
  )
}
