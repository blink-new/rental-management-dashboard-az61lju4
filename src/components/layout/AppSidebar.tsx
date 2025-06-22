import { useLocation, Link } from 'react-router-dom'
import {
  Home,
  Building,
  Calendar,
  Bell,
} from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarFooter,
} from '../ui/sidebar'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Badge } from '../ui/badge'

const menuItems = [
  {
    title: 'Tableau de bord',
    url: '/agent-entretien',
    icon: Home,
  },
  {
    title: 'Mon Horaire',
    url: '/agent-entretien/horaire',
    icon: Calendar,
  },
  {
    title: 'Notifications',
    url: '/agent-entretien/notifications',
    icon: Bell,
    badge: 2,
  },
]

export function AppSidebar() {
  const location = useLocation()

  const isActive = (url: string) => {
    return location.pathname === url || location.pathname.startsWith(url + '/')
  }

  return (
    <Sidebar className="border-r bg-card">
      <SidebarHeader className="border-b p-4">
        <Link to="/agent-entretien" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Building className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Résident Pro</span>
            <span className="text-sm text-muted-foreground">Gestion locative</span>
          </div>
        </Link>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)}
                    className="w-full justify-start"
                  >
                    <Link to={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                      {item.badge && (
                        <Badge variant="secondary" className="ml-auto h-5 w-5 p-0 text-xs flex items-center justify-center">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/avatars/user.jpg" />
            <AvatarFallback>MJ</AvatarFallback>
          </Avatar>
          <div className="flex flex-col flex-1 min-w-0">
            <span className="text-sm font-medium truncate">Marie Dubois</span>
            <span className="text-xs text-muted-foreground truncate">marie.dubois@email.com</span>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
          <span>Bail actif</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}