
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Day 1', subscribers: 4000 },
  { name: 'Day 2', subscribers: 3000 },
  { name: 'Day 3', subscribers: 2000 },
  { name: 'Day 4', subscribers: 2780 },
  { name: 'Day 5', subscribers: 1890 },
  { name: 'Day 6', subscribers: 2390 },
  { name: 'Day 7', subscribers: 3490 },
];

const SubscriberChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Subscriber Growth</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="subscribers" stroke="hsl(var(--primary))" strokeWidth={2} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default SubscriberChart;
