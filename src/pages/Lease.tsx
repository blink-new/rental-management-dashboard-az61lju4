import { useState } from 'react'
import { Calendar, Euro, Download, CreditCard, Clock, CheckCircle, Edit2 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Progress } from '../components/ui/progress'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table'
import { Separator } from '../components/ui/separator'

export function Lease() {
  const [paymentMethod, setPaymentMethod] = useState('virement')

  const paymentHistory = [
    { date: '01/01/2024', amount: '1 245 €', status: 'Payé', method: 'Virement', receipt: true },
    { date: '01/12/2023', amount: '1 245 €', status: 'Payé', method: 'Virement', receipt: true },
    { date: '01/11/2023', amount: '1 245 €', status: 'Payé', method: 'Chèque', receipt: true },
    { date: '01/10/2023', amount: '1 245 €', status: 'Payé', method: 'Virement', receipt: true },
    { date: '01/09/2023', amount: '1 245 €', status: 'Payé', method: 'Virement', receipt: true },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Mon Bail</h1>
        <p className="text-muted-foreground">
          Détails de votre contrat de location et historique des paiements.
        </p>
      </div>

      {/* Lease Overview */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Détails du bail</CardTitle>
            <CardDescription>Informations sur votre contrat de location</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-muted-foreground">Durée du bail</h4>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">1er janvier 2023 - 31 décembre 2024</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-muted-foreground">Loyer mensuel</h4>
                <div className="flex items-center gap-2">
                  <Euro className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium text-lg">1 245 €</span>
                  <Badge variant="outline">Charges comprises</Badge>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-muted-foreground">Modalité de paiement</h4>
                <Button variant="outline" size="sm">
                  <Edit2 className="h-4 w-4 mr-2" />
                  Modifier
                </Button>
              </div>
              <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="virement">Virement bancaire</SelectItem>
                  <SelectItem value="cheque">Chèque</SelectItem>
                  <SelectItem value="prelevement">Prélèvement automatique</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator />

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-muted-foreground">Dépôt de garantie</h4>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="font-medium">1 245 € versé</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-muted-foreground">Progression du bail</h4>
                <div className="space-y-2">
                  <Progress value={75} className="h-2" />
                  <span className="text-sm text-muted-foreground">9 mois restants (75%)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Prochain paiement</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold">1 245 €</div>
              <div className="text-sm text-muted-foreground">Dû le 1er février 2024</div>
              <Badge variant="secondary" className="mt-2">
                <Clock className="h-3 w-3 mr-1" />
                Dans 5 jours
              </Badge>
            </div>
            
            <Separator />
            
            <Button className="w-full" size="lg">
              <CreditCard className="h-4 w-4 mr-2" />
              Payer maintenant
            </Button>
            
            <div className="text-xs text-center text-muted-foreground">
              Paiement sécurisé par Stripe
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payment History */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Historique des paiements</CardTitle>
            <CardDescription>Vos derniers paiements de loyer</CardDescription>
          </div>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Exporter PDF
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Montant</TableHead>
                <TableHead>Méthode</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Reçu</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paymentHistory.map((payment, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{payment.date}</TableCell>
                  <TableCell>{payment.amount}</TableCell>
                  <TableCell>{payment.method}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      {payment.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {payment.receipt && (
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}