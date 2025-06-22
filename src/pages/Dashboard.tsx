import { Calendar, CreditCard, AlertTriangle, CheckCircle, Clock, Euro } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Progress } from '../components/ui/progress'

export function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Tableau de bord</h1>
        <p className="text-muted-foreground">
          Bienvenue, Marie. Voici un aperçu de votre location.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Prochain loyer</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1 245 €</div>
            <p className="text-xs text-muted-foreground">
              Dû le 1er février 2024
            </p>
            <Badge variant="secondary" className="mt-2">
              <Clock className="h-3 w-3 mr-1" />
              Dans 5 jours
            </Badge>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Statut du bail</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Actif</div>
            <p className="text-xs text-muted-foreground">
              Expire le 31 décembre 2024
            </p>
            <div className="mt-2">
              <Progress value={75} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">9 mois restants</p>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Demandes en cours</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              Maintenance en attente
            </p>
            <Badge variant="outline" className="mt-2 text-orange-600 border-orange-200">
              Urgent
            </Badge>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Derniers paiements</CardTitle>
            <Euro className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">✓ Payé</div>
            <p className="text-xs text-muted-foreground">
              Janvier 2024
            </p>
            <Badge variant="secondary" className="mt-2 bg-green-100 text-green-700">
              <CheckCircle className="h-3 w-3 mr-1" />
              À jour
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Activité récente</CardTitle>
            <CardDescription>Vos dernières interactions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="h-2 w-2 rounded-full bg-green-500 mt-2"></div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">Paiement effectué</p>
                <p className="text-xs text-muted-foreground">
                  Loyer de janvier 2024 - 1 245 €
                </p>
                <p className="text-xs text-muted-foreground">Il y a 3 jours</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-2 w-2 rounded-full bg-orange-500 mt-2"></div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">Demande de maintenance</p>
                <p className="text-xs text-muted-foreground">
                  Fuite robinet salle de bain
                </p>
                <p className="text-xs text-muted-foreground">Il y a 5 jours</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-2 w-2 rounded-full bg-blue-500 mt-2"></div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">Document reçu</p>
                <p className="text-xs text-muted-foreground">
                  Quittance de loyer décembre 2023
                </p>
                <p className="text-xs text-muted-foreground">Il y a 1 semaine</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Actions rapides</CardTitle>
            <CardDescription>Accès direct aux fonctions importantes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <CreditCard className="h-4 w-4 mr-2" />
              Payer le loyer
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Signaler un problème
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Voir les documents
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Important Notices */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-blue-500" />
            Informations importantes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Badge variant="secondary">Nouveau</Badge>
              <div>
                <p className="text-sm font-medium">Entretien annuel des détecteurs de fumée</p>
                <p className="text-sm text-muted-foreground">
                  Prévu le 15 février 2024 entre 9h et 12h. Votre présence est requise.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Badge variant="outline">Rappel</Badge>
              <div>
                <p className="text-sm font-medium">Assemblée générale des copropriétaires</p>
                <p className="text-sm text-muted-foreground">
                  Le 28 février 2024 à 18h30 en salle commune. Ordre du jour disponible dans vos documents.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}