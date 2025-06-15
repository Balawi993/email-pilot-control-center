
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2 } from "lucide-react";

const checklistItems = [
    { text: "Create a contact", done: true },
    { text: "Set up your brand", done: true },
    { text: "Connect your domain", done: false },
    { text: "Create your first campaign", done: false },
];

const SetupChecklist = () => {
    const completedTasks = checklistItems.filter(item => item.done).length;
    const progress = (completedTasks / checklistItems.length) * 100;

    return (
        <Card>
            <CardHeader>
                <CardTitle>Let's get you set up</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-center space-x-4 mb-4">
                    <Progress value={progress} className="w-full" />
                    <span className="text-sm font-medium text-gray-600">{Math.round(progress)}%</span>
                </div>
                <ul className="space-y-3">
                    {checklistItems.map((item, index) => (
                        <li key={index} className="flex items-center">
                            <CheckCircle2 className={`h-5 w-5 mr-3 ${item.done ? 'text-primary' : 'text-gray-300'}`} />
                            <span className={item.done ? 'text-gray-800' : 'text-gray-500'}>{item.text}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
};

export default SetupChecklist;
