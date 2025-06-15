
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from 'lucide-react';

const AutomationsPerformance = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>الأتمتة</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col items-center justify-center text-center py-10">
                    <Clock className="h-12 w-12 text-primary mb-4" />
                    <h2 className="text-2xl font-bold text-gray-800">قريباً!</h2>
                    <p className="mt-2 max-w-xs text-muted-foreground">
                        نحن نعمل بجد لنقدم لك ميزات الأتمتة القوية.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};

export default AutomationsPerformance;
