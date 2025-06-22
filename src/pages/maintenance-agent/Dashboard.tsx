import { useState } from 'react'
import { Calendar, Plus, Search, Filter, ChevronDown, MapPin, Clock, AlertTriangle, MessageSquare } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { Badge } from '../../components/ui/badge'
import { Input } from '../../components/ui/input'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../components/ui/dropdown-menu'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog'
import { Textarea } from '../../components/ui/textarea'
import { Label } from '../../components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select'

export function MaintenanceAgentDashboard() {
  const [isNewRequestDialogOpen, setIsNewRequestDialogOpen] = useState(false)
  const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false)
  const [selectedRequest, setSelectedRequest] = useState<{
    id: string;
    address: string;
    problem: string;
    urgency: string;
    status: string;
    date: string;
    photos: string[];
    notes: string[];
  } | null>(null)

  const requests = [
    {
      id: 'MAINT-001',
      address: 'Appt 4B, 123 Rue de la Paix',
      problem: 'Fuite sous l\'évier de la cuisine',
      urgency: 'Élevée',
      status: 'À faire',
      date: '2024-07-28',
      photos: ['/photos/leak1.jpg', '/photos/leak2.jpg'],
      notes: []
    },
    {
      id: 'MAINT-002',
      address: 'Appt 12A, 45 Avenue de la République',
      problem: 'Chauffage ne fonctionne pas dans la chambre principale',
      urgency: 'Moyenne',
      status: 'En cours',
      date: '2024-07-27',
      photos: [],
      notes: ['Intervention prévue le 29/07 à 10h']
    },
    {
      id: 'MAINT-003',
      address: 'Espaces communs, RDC',
      problem: 'Ampoule grillée dans le couloir principal',
      urgency: 'Faible',
      status: 'Terminé',
      date: '2024-07-26',
      photos: [],
      notes: ['Remplacée le 26/07']
    },
  ]

  const handleOpenDetails = (request: {
    id: string;
    address: string;
    problem: string;
    urgency: string;
    status: string;
    date: string;
    photos: string[];
    notes: string[];
  }) => {
    setSelectedRequest(request)
    setIsDetailDialogOpen(true)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'À faire':
        return <Badge variant="destructive">À faire</Badge>
      case 'En cours':
        return <Badge variant="secondary" className="bg-yellow-400 text-black">En cours</Badge>
      case 'Terminé':
        return <Badge variant="secondary" className="bg-green-500 text-white">Terminé</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tableau de bord Maintenance</h1>
          <p className="text-muted-foreground">Bienvenue, agent. Voici vos tâches du jour.</p>
        </div>
        <div className="flex gap-2">
          <Dialog open={isNewRequestDialogOpen} onOpenChange={setIsNewRequestDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Signaler un problème
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Signaler un nouveau problème</DialogTitle>
                <DialogDescription>Pour les problèmes remarqués dans les espaces communs.</DialogDescription>
              </DialogHeader>
              {/* New Request Form */}
            </DialogContent>
          </Dialog>
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Mon horaire
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Mes demandes de réparation</CardTitle>
          <CardDescription>Liste des interventions assignées</CardDescription>
          <div className="flex items-center gap-4 pt-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Rechercher par adresse, ID..." className="pl-10" />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtrer par statut
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>À faire</DropdownMenuItem>
                <DropdownMenuItem>En cours</DropdownMenuItem>
                <DropdownMenuItem>Terminé</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {requests.map((request) => (
            <Card key={request.id} className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handleOpenDetails(request)}>
              <CardContent className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <div className="md:col-span-2">
                  <p className="font-bold text-primary">{request.id}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <MapPin className="h-4 w-4" />
                    <span>{request.address}</span>
                  </div>
                  <p className="text-sm mt-2">{request.problem}</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium">Urgence:</p>
                  <Badge variant={request.urgency === 'Élevée' ? 'destructive' : 'outline'}>{request.urgency}</Badge>
                </div>
                <div className="flex items-center justify-between md:justify-end gap-4">
                  {getStatusBadge(request.status)}
                  <Button variant="ghost" size="icon">
                    <ChevronDown className="h-5 w-5 transform transition-transform group-hover:rotate-180" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>

      {selectedRequest && (
        <Dialog open={isDetailDialogOpen} onOpenChange={setIsDetailDialogOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Détail de la demande: {selectedRequest.id}</DialogTitle>
              <DialogDescription>{selectedRequest.problem}</DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
              <div>
                <h3 className="font-semibold mb-2">Informations</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{selectedRequest.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>Signalé le: {selectedRequest.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                    <span>Urgence: <Badge variant={selectedRequest.urgency === 'Élevée' ? 'destructive' : 'outline'}>{selectedRequest.urgency}</Badge></span>
                  </div>
                </div>
                <h3 className="font-semibold mt-6 mb-2">Photos</h3>
                <div className="flex gap-2">
                  {selectedRequest.photos.length > 0 ? (
                    selectedRequest.photos.map((photo: string, index: number) => (
                      <img key={index} src={photo} alt={`Photo ${index + 1}`} className="w-24 h-24 object-cover rounded-md border" />
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground">Aucune photo fournie.</p>
                  )}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Statut & Notes</h3>
                <div className="space-y-4">
                  <div>
                    <Label>Changer le statut</Label>
                    <Select defaultValue={selectedRequest.status}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="À faire">À faire</SelectItem>
                        <SelectItem value="En cours">En cours</SelectItem>
                        <SelectItem value="Terminé">Terminé</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Ajouter une note</Label>
                    <Textarea placeholder="Ajouter une note sur l\'intervention..." />
                  </div>
                  <Button className="w-full">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Mettre à jour
                  </Button>
                </div>
                <h3 className="font-semibold mt-6 mb-2">Historique des notes</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  {selectedRequest.notes.map((note: string, index: number) => (
                    <p key={index}>- {note}</p>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}