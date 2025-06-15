
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const AutomationsPerformance = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Automations</CardTitle>
                <CardDescription>7-day performance</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                        <p className="text-2xl font-bold">5</p>
                        <p className="text-sm text-muted-foreground">Automations</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold">45.2%</p>
                        <p className="text-sm text-muted-foreground">Open %</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold">12.8%</p>
                        <p className="text-sm text-muted-foreground">Click %</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default AutomationsPerformance;
