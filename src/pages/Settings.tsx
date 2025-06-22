import { useState } from 'react'
import { Lock, Bell, Eye, LogOut, Shield } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Label } from '../components/ui/label'
import { Switch } from '../components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Separator } from '../components/ui/separator'
import { Badge } from '../components/ui/badge'

export function Settings() {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    maintenance: true,
    payments: true,
    announcements: false
  })

  const [privacy, setPrivacy] = useState({
    dataSharing: false,
    analytics: true,
    marketing: false
  })

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Paramètres</h1>
        <p className="text-muted-foreground">
          Gérez votre compte, vos préférences et votre confidentialité.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Sécurité du compte
            </CardTitle>
            <CardDescription>
              Gérez votre mot de passe et la sécurité de votre compte
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">Mot de passe</h4>
                  <p className="text-sm text-muted-foreground">
                    Dernière modification : 15 décembre 2023
                  </p>
                </div>
                <Button variant="outline">
                  <Lock className="h-4 w-4 mr-2" />
                  Changer
                </Button>
              </div>

              <Separator />

              <div className="space-y-3">
                <h4 className="text-sm font-medium">Authentification à deux facteurs</h4>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">
                      Sécurisez votre compte avec un code supplémentaire
                    </p>
                    <Badge variant="outline" className="text-xs">
                      Recommandé
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm">
                    Activer
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <h4 className="text-sm font-medium">Sessions actives</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <p className="font-medium">Navigateur actuel</p>
                      <p className="text-muted-foreground">Chrome sur Windows</p>
                    </div>
                    <Badge variant="secondary">Actuelle</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <p className="font-medium">Application mobile</p>
                      <p className="text-muted-foreground">iPhone - il y a 2 jours</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      Déconnecter
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications
            </CardTitle>
            <CardDescription>
              Choisissez comment vous souhaitez être notifié
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Méthodes de notification</h4>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-notifications" className="text-sm">
                    Notifications par e-mail
                  </Label>
                  <Switch
                    id="email-notifications"
                    checked={notifications.email}
                    onCheckedChange={(checked) =>
                      setNotifications({ ...notifications, email: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="sms-notifications" className="text-sm">
                    Notifications par SMS
                  </Label>
                  <Switch
                    id="sms-notifications"
                    checked={notifications.sms}
                    onCheckedChange={(checked) =>
                      setNotifications({ ...notifications, sms: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="push-notifications" className="text-sm">
                    Notifications push
                  </Label>
                  <Switch
                    id="push-notifications"
                    checked={notifications.push}
                    onCheckedChange={(checked) =>
                      setNotifications({ ...notifications, push: checked })
                    }
                  />
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <h4 className="text-sm font-medium">Types de notifications</h4>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="maintenance-notifications" className="text-sm">
                    Demandes de maintenance
                  </Label>
                  <Switch
                    id="maintenance-notifications"
                    checked={notifications.maintenance}
                    onCheckedChange={(checked) =>
                      setNotifications({ ...notifications, maintenance: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="payment-notifications" className="text-sm">
                    Rappels de paiement
                  </Label>
                  <Switch
                    id="payment-notifications"
                    checked={notifications.payments}
                    onCheckedChange={(checked) =>
                      setNotifications({ ...notifications, payments: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="announcement-notifications" className="text-sm">
                    Annonces et communications
                  </Label>
                  <Switch
                    id="announcement-notifications"
                    checked={notifications.announcements}
                    onCheckedChange={(checked) =>
                      setNotifications({ ...notifications, announcements: checked })
                    }
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Confidentialité
            </CardTitle>
            <CardDescription>
              Contrôlez vos données personnelles et leur utilisation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="data-sharing" className="text-sm">
                    Partage de données
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Partager des données anonymisées pour améliorer le service
                  </p>
                </div>
                <Switch
                  id="data-sharing"
                  checked={privacy.dataSharing}
                  onCheckedChange={(checked) =>
                    setPrivacy({ ...privacy, dataSharing: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="analytics" className="text-sm">
                    Données d'usage
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Collecter des statistiques d'utilisation anonymes
                  </p>
                </div>
                <Switch
                  id="analytics"
                  checked={privacy.analytics}
                  onCheckedChange={(checked) =>
                    setPrivacy({ ...privacy, analytics: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="marketing" className="text-sm">
                    Communications marketing
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Recevoir des offres et promotions personnalisées
                  </p>
                </div>
                <Switch
                  id="marketing"
                  checked={privacy.marketing}
                  onCheckedChange={(checked) =>
                    setPrivacy({ ...privacy, marketing: checked })
                  }
                />
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <h4 className="text-sm font-medium">Gestion des données</h4>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Télécharger mes données
                </Button>
                <Button variant="outline" size="sm">
                  Supprimer mon compte
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Account Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Préférences du compte</CardTitle>
            <CardDescription>
              Personnalisez votre expérience utilisateur
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="language">Langue</Label>
                <Select defaultValue="fr">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timezone">Fuseau horaire</Label>
                <Select defaultValue="europe/paris">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="europe/paris">Europe/Paris (GMT+1)</SelectItem>
                    <SelectItem value="europe/london">Europe/London (GMT)</SelectItem>
                    <SelectItem value="america/new_york">America/New_York (GMT-5)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="currency">Devise</Label>
                <Select defaultValue="eur">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="eur">Euro (€)</SelectItem>
                    <SelectItem value="usd">Dollar ($)</SelectItem>
                    <SelectItem value="gbp">Livre Sterling (£)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h4 className="text-sm font-medium text-destructive">Zone de danger</h4>
              <Button variant="destructive" className="w-full">
                <LogOut className="h-4 w-4 mr-2" />
                Se déconnecter
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}