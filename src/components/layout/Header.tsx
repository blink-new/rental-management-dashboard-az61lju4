import { Bell, Search } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { SidebarTrigger } from '../ui/sidebar'
import { Badge } from '../ui/badge'

export function Header() {
  return (
    <header className="flex h-16 items-center gap-4 border-b bg-card px-6 shrink-0">
      <SidebarTrigger className="md:hidden" />
      
      <div className="flex-1 flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher documents, messages..."
            className="pl-10"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-4 w-4" />
          <Badge 
            variant="destructive" 
            className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs flex items-center justify-center"
          >
            2
          </Badge>
        </Button>
      </div>
    </header>
  )
}