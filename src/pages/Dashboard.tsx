
import { Users, TrendingUp, Mail, BarChart } from 'lucide-react';
import StatsCard from '@/components/dashboard/StatsCard';
import SubscriberChart from '@/components/dashboard/SubscriberChart';
import SetupChecklist from '@/components/dashboard/SetupChecklist';
import AutomationsPerformance from '@/components/dashboard/AutomationsPerformance';
import HelpSection from '@/components/dashboard/HelpSection';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard 
          title="Total Subscribers"
          value="12,345"
          change="+123"
          changeType="increase"
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard 
          title="Avg. Open Rate"
          value="25.4%"
          change="+1.2%"
          changeType="increase"
          icon={<Mail className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard 
          title="Avg. Click Rate"
          value="4.8%"
          change="-0.5%"
          changeType="decrease"
          icon={<BarChart className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard 
          title="Campaigns Sent"
          value="7"
          change="+2"
          changeType="increase"
          icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />}
        />
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <SubscriberChart />
          <AutomationsPerformance />
        </div>
        <div className="space-y-6">
          <SetupChecklist />
          <HelpSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
