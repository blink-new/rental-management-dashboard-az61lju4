import { Download, FileText, Search, Calendar } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Badge } from '../components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'

export function Documents() {
  const documents = {
    lease: [
      {
        name: 'Contrat de bail signé',
        date: '15/12/2022',
        size: '2.4 MB',
        type: 'PDF',
        category: 'Bail principal'
      },
      {
        name: 'État des lieux d\'entrée',
        date: '20/12/2022',
        size: '1.8 MB',
        type: 'PDF',
        category: 'État des lieux'
      },
      {
        name: 'Inventaire mobilier',
        date: '20/12/2022',
        size: '892 KB',
        type: 'PDF',
        category: 'Inventaire'
      }
    ],
    receipts: [
      {
        name: 'Quittance janvier 2024',
        date: '02/01/2024',
        size: '245 KB',
        type: 'PDF',
        category: 'Quittance'
      },
      {
        name: 'Quittance décembre 2023',
        date: '02/12/2023',
        size: '245 KB',
        type: 'PDF',
        category: 'Quittance'
      },
      {
        name: 'Quittance novembre 2023',
        date: '02/11/2023',
        size: '245 KB',
        type: 'PDF',
        category: 'Quittance'
      },
      {
        name: 'Quittance octobre 2023',
        date: '02/10/2023',
        size: '245 KB',
        type: 'PDF',
        category: 'Quittance'
      }
    ],
    notices: [
      {
        name: 'Avis de renouvellement 2024',
        date: '15/11/2023',
        size: '312 KB',
        type: 'PDF',
        category: 'Renouvellement'
      },
      {
        name: 'Modification charges 2024',
        date: '01/12/2023',
        size: '189 KB',
        type: 'PDF',
        category: 'Modification'
      }
    ],
    regulations: [
      {
        name: 'Règlement de copropriété',
        date: '01/01/2023',
        size: '1.2 MB',
        type: 'PDF',
        category: 'Règlement'
      },
      {
        name: 'Règlement intérieur',
        date: '01/01/2023',
        size: '567 KB',
        type: 'PDF',
        category: 'Règlement'
      }
    ]
  }

  const DocumentCard = ({ doc }: { doc: { name: string; date: string; size: string; type: string; category: string } }) => (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <FileText className="h-5 w-5 text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm truncate">{doc.name}</h4>
              <div className="flex items-center gap-2 mt-1">
                <Calendar className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{doc.date}</span>
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-xs text-muted-foreground">{doc.size}</span>
              </div>
              <Badge variant="outline" className="mt-2 text-xs">
                {doc.category}
              </Badge>
            </div>
          </div>
          <Button variant="ghost" size="sm">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Documents</h1>
        <p className="text-muted-foreground">
          Accédez à tous vos documents de location et téléchargez-les en PDF.
        </p>
      </div>

      {/* Search */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher un document..."
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Télécharger tout
        </Button>
      </div>

      {/* Document Categories */}
      <Tabs defaultValue="receipts" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="receipts">Quittances</TabsTrigger>
          <TabsTrigger value="lease">Bail</TabsTrigger>
          <TabsTrigger value="notices">Avis</TabsTrigger>
          <TabsTrigger value="regulations">Règlements</TabsTrigger>
        </TabsList>

        <TabsContent value="receipts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Quittances de loyer</CardTitle>
              <CardDescription>
                Vos reçus de paiement mensuels téléchargeables
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {documents.receipts.map((doc, index) => (
                  <DocumentCard key={index} doc={doc} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="lease" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Documents du bail</CardTitle>
              <CardDescription>
                Contrat de bail et documents associés
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {documents.lease.map((doc, index) => (
                  <DocumentCard key={index} doc={doc} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notices" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Avis et modifications</CardTitle>
              <CardDescription>
                Notifications de renouvellement et modifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {documents.notices.map((doc, index) => (
                  <DocumentCard key={index} doc={doc} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="regulations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Règlements</CardTitle>
              <CardDescription>
                Règlement de copropriété et règlement intérieur
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {documents.regulations.map((doc, index) => (
                  <DocumentCard key={index} doc={doc} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}