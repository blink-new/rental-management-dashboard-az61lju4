import { SidebarInset } from '../ui/sidebar'
import { AppSidebar } from './AppSidebar'
import { Header } from './Header'

interface AppLayoutProps {
  children: React.ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex h-screen w-full">
      <AppSidebar />
      <SidebarInset className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto bg-muted/20">
          <div className="container mx-auto px-6 py-8 max-w-7xl">
            {children}
          </div>
        </main>
      </SidebarInset>
    </div>
  )
}