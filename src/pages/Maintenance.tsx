import { useState } from 'react'
import { Plus, Wrench, Clock, CheckCircle, AlertTriangle, Phone, Mail, MapPin } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Textarea } from '../components/ui/textarea'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog'
import { Separator } from '../components/ui/separator'

export function Maintenance() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [formData, setFormData] = useState({
    type: '',
    urgency: '',
    location: '',
    description: ''
  })

  const maintenanceRequests = [
    {
      id: '2024-001',
      type: 'Plomberie',
      description: 'Fuite robinet salle de bain principale',
      status: 'En cours',
      urgency: 'Urgent',
      date: '2024-01-20',
      estimatedCompletion: '2024-01-25'
    },
    {
      id: '2024-002',
      type: 'Électricité',  
      description: 'Prise électrique cuisine défectueuse',
      status: 'Planifié',
      urgency: 'Moyen',
      date: '2024-01-18',
      estimatedCompletion: '2024-01-30'
    },
    {
      id: '2023-045',
      type: 'Chauffage',
      description: 'Radiateur chambre ne chauffe plus',
      status: 'Terminé',
      urgency: 'Urgent',
      date: '2023-12-15',
      estimatedCompletion: '2023-12-18'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En cours': return 'bg-orange-100 text-orange-700'
      case 'Planifié': return 'bg-blue-100 text-blue-700'
      case 'Terminé': return 'bg-green-100 text-green-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'Urgent': return 'bg-red-100 text-red-700'
      case 'Moyen': return 'bg-yellow-100 text-yellow-700'
      case 'Faible': return 'bg-green-100 text-green-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setIsDialogOpen(false)
    setFormData({ type: '', urgency: '', location: '', description: '' })
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Maintenance</h1>
            <p className="text-muted-foreground">
              Gérez vos demandes de réparation et suivez leur avancement.
            </p>
          </div>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Nouvelle demande
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Nouvelle demande de maintenance</DialogTitle>
                <DialogDescription>
                  Décrivez le problème rencontré pour une intervention rapide.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="type">Type de problème</Label>
                  <Select value={formData.type} onValueChange={(value) => setFormData({...formData, type: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez le type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="plomberie">Plomberie</SelectItem>
                      <SelectItem value="electricite">Électricité</SelectItem>
                      <SelectItem value="chauffage">Chauffage</SelectItem>
                      <SelectItem value="climatisation">Climatisation</SelectItem>
                      <SelectItem value="serrurerie">Serrurerie</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="urgency">Niveau d'urgence</Label>
                  <Select value={formData.urgency} onValueChange={(value) => setFormData({...formData, urgency: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez l'urgence" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="urgent">Urgent (24h)</SelectItem>
                      <SelectItem value="moyen">Moyen (48-72h)</SelectItem>
                      <SelectItem value="faible">Faible (1 semaine)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Localisation</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    placeholder="Ex: Salle de bain, cuisine..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description du problème</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="Décrivez le problème en détail..."
                    rows={4}
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Annuler
                  </Button>
                  <Button type="submit">
                    Envoyer la demande
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Current Requests */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Demandes en cours</CardTitle>
              <CardDescription>Suivi de vos demandes de maintenance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {maintenanceRequests.map((request) => (
                <Card key={request.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                          <Wrench className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium">#{request.id}</h4>
                            <Badge variant="outline">{request.type}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {request.description}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>Créée le {request.date}</span>
                            {request.estimatedCompletion && (
                              <>
                                <span>•</span>
                                <span>Prévue le {request.estimatedCompletion}</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-end">
                        <Badge className={getStatusColor(request.status)}>
                          {request.status === 'En cours' && <Clock className="h-3 w-3 mr-1" />}
                          {request.status === 'Terminé' && <CheckCircle className="h-3 w-3 mr-1" />}
                          {request.status === 'Planifié' && <AlertTriangle className="h-3 w-3 mr-1" />}
                          {request.status}
                        </Badge>
                        <Badge variant="outline" className={getUrgencyColor(request.urgency)}>
                          {request.urgency}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact maintenance</CardTitle>
              <CardDescription>Coordonnées de votre gestionnaire</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Jean Martin</p>
                    <p className="text-sm text-muted-foreground">+33 1 23 45 67 89</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">maintenance@residences-paris.fr</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Bureau de gestion</p>
                    <p className="text-sm text-muted-foreground">
                      45 Avenue de la République<br />
                      75001 Paris
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Heures d'ouverture</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span className="font-medium">8h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span className="font-medium">9h00 - 12h00</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Dimanche</span>
                  <span>Fermé</span>
                </div>
                <Separator className="my-2" />
                <div className="text-xs text-muted-foreground">
                  Urgences 24h/7j : +33 6 12 34 56 78
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}