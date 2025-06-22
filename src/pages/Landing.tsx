import { Link } from 'react-router-dom'
import { User, Shield, Wrench, Building } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

export function Landing() {
  const roles = [
    {
      title: 'Espace Locataire',
      description: 'Accédez à votre bail, paiements et documents.',
      icon: <User className="h-8 w-8 text-blue-600" />,
      link: '/locataire',
      color: 'from-blue-500 to-blue-700',
      hover: 'hover:ring-blue-400',
    },
    {
      title: 'Portail Gestionnaire',
      description: 'Gérez les locataires, les baux et la comptabilité.',
      icon: <Shield className="h-8 w-8 text-green-600" />,
      link: '/gestionnaire',
      color: 'from-green-500 to-green-700',
      hover: 'hover:ring-green-400',
    },
    {
      title: "Interface Maintenance",
      description: "Suivez les demandes de réparation et les interventions.",
      icon: <Wrench className="h-8 w-8 text-yellow-600" />,
      link: '/maintenance-agent',
      color: 'from-yellow-400 to-yellow-600',
      hover: 'hover:ring-yellow-400',
    },
  ]

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Motif décoratif */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0" aria-hidden>
        <svg width="100%" height="100%" className="absolute inset-0" style={{mixBlendMode:'multiply'}}>
          <defs>
            <radialGradient id="bg1" cx="50%" cy="50%" r="80%">
              <stop offset="0%" stopColor="#e0f2fe" />
              <stop offset="100%" stopColor="#fff" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#bg1)" />
        </svg>
      </div>
      <div className="relative z-10 w-full max-w-2xl mx-auto text-center mb-12 mt-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-green-500 shadow-lg">
            <Building className="h-8 w-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-blue-900 mb-2 font-sans">Résident Pro</h1>
        <p className="text-lg md:text-xl text-muted-foreground font-medium mb-2">Votre portail de gestion locative tout-en-un</p>
        <p className="text-base text-blue-700/80">Choisissez votre espace pour commencer</p>
      </div>
      <div className="relative z-10 grid gap-8 md:grid-cols-3 max-w-4xl w-full px-4">
        {roles.map((role) => (
          <Link to={role.link} key={role.title} className="group">
            <Card className={`h-full bg-white/90 shadow-xl border-0 rounded-2xl transition-all duration-300 ease-in-out group-hover:scale-105 group-active:scale-100 group-hover:shadow-2xl ${role.hover} ring-2 ring-transparent group-hover:ring-4` }>
              <CardHeader className="flex flex-col items-center text-center space-y-4">
                <div className={`p-4 rounded-full bg-gradient-to-br ${role.color} shadow-md mb-2 transition-all duration-300 group-hover:scale-110`}>{role.icon}</div>
                <CardTitle className="text-lg font-bold text-blue-900 group-hover:text-primary transition-colors">{role.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground text-sm font-medium pb-6">
                {role.description}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <footer className="relative z-10 mt-16 text-center text-muted-foreground text-xs opacity-80">
        <p>&copy; {new Date().getFullYear()} Résident Pro. Tous droits réservés.</p>
      </footer>
    </div>
  )
}
