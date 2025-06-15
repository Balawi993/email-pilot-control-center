
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

type StatsCardProps = {
  title: string;
  value: string;
  change: string;
  changeType: "increase" | "decrease";
  icon: ReactNode;
};

const StatsCard = ({ title, value, change, changeType, icon }: StatsCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className={`text-xs ${changeType === 'increase' ? 'text-green-600' : 'text-red-600'}`}>
          {change} from last 7 days
        </p>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
