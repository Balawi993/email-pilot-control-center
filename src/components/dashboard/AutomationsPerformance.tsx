
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";

const AutomationsPerformance = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Automations</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col items-center justify-center text-center py-8">
                    <Clock className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800">Coming Soon!</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Automation performance analytics will appear here.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};

export default AutomationsPerformance;
