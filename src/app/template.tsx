import { Footer, Topbar } from '@/app/_components'

export default function RootTemplate({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Topbar />
      <main className="pt-[67px] text-primary lg:pt-[77px] flex-grow">{children}</main>
      <Footer />
    </div>
  )
}
