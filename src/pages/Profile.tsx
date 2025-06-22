import { useState } from 'react'
import { User, Mail, Phone, MapPin, Edit2, Save, X } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Badge } from '../components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { Separator } from '../components/ui/separator'

export function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    fullName: 'Marie Dubois',
    email: 'marie.dubois@email.com',
    phone: '+33 1 23 45 67 89',
    address: '123 Rue de la Paix, 75001 Paris',
    leaseStatus: 'Actif'
  })

  const [tempProfile, setTempProfile] = useState(profile)

  const handleEdit = () => {
    setIsEditing(true)
    setTempProfile(profile)
  }

  const handleSave = () => {
    setProfile(tempProfile)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setTempProfile(profile)
    setIsEditing(false)
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Mon Profil</h1>
        <p className="text-muted-foreground">
          Gérez vos informations personnelles et votre compte.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Profile Info */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Informations personnelles</CardTitle>
                <CardDescription>
                  Vos informations de contact et détails du compte
                </CardDescription>
              </div>
              {!isEditing ? (
                <Button onClick={handleEdit} variant="outline" size="sm">
                  <Edit2 className="h-4 w-4 mr-2" />
                  Modifier
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button onClick={handleSave} size="sm">
                    <Save className="h-4 w-4 mr-2" />
                    Sauvegarder
                  </Button>
                  <Button onClick={handleCancel} variant="outline" size="sm">
                    <X className="h-4 w-4 mr-2" />
                    Annuler
                  </Button>
                </div>
              )}
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Nom complet</Label>
                  {isEditing ? (
                    <Input
                      id="fullName"
                      value={tempProfile.fullName}
                      onChange={(e) => setTempProfile({...tempProfile, fullName: e.target.value})}
                    />
                  ) : (
                    <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-md">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span>{profile.fullName}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Adresse e-mail</Label>
                  {isEditing ? (
                    <Input
                      id="email"
                      type="email"
                      value={tempProfile.email}
                      onChange={(e) => setTempProfile({...tempProfile, email: e.target.value})}
                    />
                  ) : (
                    <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-md">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>{profile.email}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Numéro de téléphone</Label>
                  {isEditing ? (
                    <Input
                      id="phone"
                      value={tempProfile.phone}
                      onChange={(e) => setTempProfile({...tempProfile, phone: e.target.value})}
                    />
                  ) : (
                    <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-md">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{profile.phone}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Statut du bail</Label>
                  <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-md">
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      {profile.leaseStatus}
                    </Badge>
                    <span className="text-sm text-muted-foreground">(lecture seule)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Adresse de location</Label>
                <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-md">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{profile.address}</span>
                  <Badge variant="outline" className="ml-auto">Lecture seule</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Profile Picture & Summary */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Photo de profil</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/avatars/user.jpg" />
                <AvatarFallback className="text-lg">MD</AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm">
                Changer la photo
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Résumé du compte</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Membre depuis</span>
                <span className="text-sm font-medium">Janvier 2023</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Bail actuel</span>
                <span className="text-sm font-medium">12 mois</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Paiements</span>
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  À jour
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}