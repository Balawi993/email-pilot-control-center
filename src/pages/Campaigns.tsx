
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { PlusCircle } from 'lucide-react';

const campaigns = [
  { name: 'Summer Sale 2025', status: 'Sent', sent: '10,500', opens: '25.4%', clicks: '4.1%' },
  { name: 'New Arrivals - June', status: 'Draft', sent: '0', opens: 'N/A', clicks: 'N/A' },
  { name: 'Weekly Newsletter #12', status: 'Sent', sent: '9,800', opens: '28.9%', clicks: '5.2%' },
  { name: 'Re-engagement Campaign', status: 'Sending', sent: '5,000 / 20,000', opens: '10.1%', clicks: '1.5%' },
];

const statusVariantMap: { [key: string]: 'default' | 'secondary' | 'outline' | 'destructive' | null | undefined } = {
  Sent: 'default',
  Draft: 'secondary',
  Sending: 'outline'
};

const Campaigns = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold text-gray-800">Campaigns</h1>
      <Button>
        <PlusCircle className="mr-2 h-4 w-4" />
        Create Campaign
      </Button>
    </div>

    <Card>
      <CardHeader>
        <CardTitle>Your Campaigns</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Campaign Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Sent</TableHead>
              <TableHead>Open Rate</TableHead>
              <TableHead>Click Rate</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {campaigns.map((campaign) => (
              <TableRow key={campaign.name}>
                <TableCell className="font-medium">{campaign.name}</TableCell>
                <TableCell>
                  <Badge variant={statusVariantMap[campaign.status]}>
                    {campaign.status}
                  </Badge>
                </TableCell>
                <TableCell>{campaign.sent}</TableCell>
                <TableCell>{campaign.opens}</TableCell>
                <TableCell>{campaign.clicks}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
);
export default Campaigns;
