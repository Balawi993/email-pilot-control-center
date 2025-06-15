
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const overallStats = [
    { name: 'Total Subscribers', value: '15,234', change: '+2.5%' },
    { name: 'Avg. Open Rate', value: '24.8%', change: '-0.2%' },
    { name: 'Avg. Click Rate', value: '4.1%', change: '+0.5%' },
    { name: 'Total Campaigns Sent', value: '87' },
];

const campaignPerformanceData = [
  { name: 'Summer Sale', opens: 4000, clicks: 800 },
  { name: 'Weekly Newsletter', opens: 3000, clicks: 450 },
  { name: 'New Arrivals', opens: 2000, clicks: 250 },
  { name: 'Re-engagement', opens: 2780, clicks: 500 },
  { name: 'Flash Sale', opens: 1890, clicks: 380 },
];

const Reports = () => (
    <div className="space-y-8">
        <div>
            <h1 className="text-3xl font-bold text-gray-800">Reports</h1>
            <p className="mt-2 text-muted-foreground">An overview of your email marketing performance.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {overallStats.map(stat => (
                <Card key={stat.name}>
                    <CardHeader>
                        <CardTitle className="text-sm font-medium text-muted-foreground">{stat.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        {stat.change && <p className={`text-xs ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{stat.change} from last month</p>}
                    </CardContent>
                </Card>
            ))}
        </div>

        <Card>
            <CardHeader>
                <CardTitle>Campaign Performance</CardTitle>
                <CardDescription>Opens and Clicks for recent campaigns</CardDescription>
            </CardHeader>
            <CardContent style={{ height: '320px' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={campaignPerformanceData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="opens" fill="#6D28D9" />
                        <Bar dataKey="clicks" fill="#A78BFA" />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    </div>
);

export default Reports;
