import { Link } from 'react-router-dom'
import { User, Shield, Wrench, Building } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

export function Landing() {
  const roles = [
    {
      title: 'Espace Locataire',
      description: 'Accédez à votre bail, paiements et documents.',
      icon: <User className="h-8 w-8 text-primary" />,
      link: '/locataire',
    },
    {
      title: 'Portail Gestionnaire',
      description: 'Gérez les locataires, les baux et la comptabilité.',
      icon: <Shield className="h-8 w-8 text-primary" />,
      link: '/gestionnaire',
    },
    {
      title: 'Interface Maintenance',
      description: 'Suivez les demandes de réparation et les interventions.',
      icon: <Wrench className="h-8 w-8 text-primary" />,
      link: '/maintenance-agent',
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-muted/20 p-4">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Building className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Résident Pro</h1>
        </div>
        <p className="text-xl text-muted-foreground">
          Votre portail de gestion locative tout-en-un.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-4xl w-full">
        {roles.map((role) => (
          <Link to={role.link} key={role.title}>
            <Card className="h-full hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
              <CardHeader className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  {role.icon}
                </div>
                <CardTitle className="text-lg">{role.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground text-sm">
                {role.description}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <footer className="mt-16 text-center text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} Résident Pro. Tous droits réservés.</p>
      </footer>
    </div>
  )
}