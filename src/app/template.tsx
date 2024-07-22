import { Footer, Topbar } from '@/app/_components'

export default function RootTemplate({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Topbar />
      {children}
      <Footer />
    </div>
  )
}
