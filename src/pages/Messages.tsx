import { useState } from 'react'
import { Send, Bell, AlertTriangle, Info, Plus } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Textarea } from '../components/ui/textarea'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'

export function Messages() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [messageText, setMessageText] = useState('')

  const conversations = [
    {
      id: 1,
      name: 'Jean Martin',
      role: 'Gestionnaire',
      lastMessage: 'La réparation de votre robinet est prévue demain matin à 9h.',
      time: '2h',
      unread: 1,
      avatar: '/avatars/jean.jpg'
    },
    {
      id: 2,
      name: 'Service comptabilité',
      role: 'Administration',
      lastMessage: 'Votre quittance de janvier est disponible dans vos documents.',
      time: '1j',
      unread: 0,
      avatar: '/avatars/admin.jpg'
    }
  ]

  const notifications = [
    {
      id: 1,
      type: 'info',
      title: 'Entretien détecteurs de fumée',
      message: 'Intervention prévue le 15 février 2024 entre 9h et 12h. Votre présence est requise.',
      date: '2024-01-25',
      read: false
    },
    {
      id: 2,
      type: 'warning',
      title: 'Assemblée générale',
      message: 'L\'assemblée générale des copropriétaires aura lieu le 28 février 2024 à 18h30.',
      date: '2024-01-20',
      read: false
    },
    {
      id: 3,
      type: 'info',
      title: 'Travaux ascenseur',
      message: 'Maintenance préventive de l\'ascenseur le 10 février de 8h à 12h.',
      date: '2024-01-15',
      read: true
    }
  ]

  const announcements = [
    {
      id: 1,
      title: 'Nouvelle réglementation tri sélectif',
      content: 'À partir du 1er mars 2024, de nouvelles règles de tri sélectif entrent en vigueur. Merci de consulter le guide joint à votre porte.',
      date: '2024-01-22',
      important: true
    },
    {
      id: 2,
      title: 'Horaires gardien modifiés',
      content: 'Les horaires de présence du gardien sont modifiés : Lundi-Vendredi 7h-19h, Samedi 8h-12h.',
      date: '2024-01-18',
      important: false
    }
  ]

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'warning': return <AlertTriangle className="h-4 w-4 text-orange-500" />
      case 'info': return <Info className="h-4 w-4 text-blue-500" />
      default: return <Bell className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
            <p className="text-muted-foreground">
              Communiquez avec votre gestionnaire et consultez les annonces.
            </p>
          </div>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Nouveau message
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Nouveau message</DialogTitle>
                <DialogDescription>
                  Contactez votre gestionnaire immobilier.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet</Label>
                  <Input id="subject" placeholder="Objet de votre message" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Votre message..."
                    rows={4}
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Annuler
                  </Button>
                  <Button onClick={() => setIsDialogOpen(false)}>
                    <Send className="h-4 w-4 mr-2" />
                    Envoyer
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Tabs defaultValue="conversations" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="conversations" className="relative">
            Conversations
            <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs">
              1
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="relative">
            Notifications
            <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs">
              2
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="announcements">Annonces</TabsTrigger>
        </TabsList>

        <TabsContent value="conversations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Messagerie interne</CardTitle>
              <CardDescription>
                Vos conversations avec l'équipe de gestion
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {conversations.map((conversation) => (
                  <Card key={conversation.id} className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={conversation.avatar} />
                          <AvatarFallback>{conversation.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium truncate">{conversation.name}</h4>
                            <Badge variant="outline" className="text-xs">{conversation.role}</Badge>
                            {conversation.unread > 0 && (
                              <Badge variant="destructive" className="h-5 w-5 p-0 text-xs">
                                {conversation.unread}
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground truncate">
                            {conversation.lastMessage}
                          </p>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {conversation.time}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Centre de notifications</CardTitle>
              <CardDescription>
                Avis d'entretien et informations importantes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <Card 
                    key={notification.id} 
                    className={`hover:shadow-md transition-shadow ${!notification.read ? 'border-l-4 border-l-blue-500' : ''}`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        {getNotificationIcon(notification.type)}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium">{notification.title}</h4>
                            {!notification.read && (
                              <Badge variant="secondary" className="text-xs">Nouveau</Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {notification.message}
                          </p>
                          <div className="text-xs text-muted-foreground">
                            {notification.date}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="announcements" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Annonces officielles</CardTitle>
              <CardDescription>
                Communications du propriétaire et de l'administration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {announcements.map((announcement) => (
                  <Card 
                    key={announcement.id} 
                    className={`hover:shadow-md transition-shadow ${announcement.important ? 'border-l-4 border-l-red-500' : ''}`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-medium">{announcement.title}</h4>
                            {announcement.important && (
                              <Badge variant="destructive" className="text-xs">Important</Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {announcement.content}
                          </p>
                          <div className="text-xs text-muted-foreground">
                            Publié le {announcement.date}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}