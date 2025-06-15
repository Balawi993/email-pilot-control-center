
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const checklistItems = [
    { text: "Create a contact", done: true, link: "/contacts" },
    { text: "Set up your brand", done: true, link: "#" },
    { text: "Connect your domain", done: false, link: "#" },
    { text: "Create your first campaign", done: false, link: "/campaigns" },
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
                    <span className="text-sm font-medium text-muted-foreground">{Math.round(progress)}%</span>
                </div>
                <ul className="space-y-2">
                    {checklistItems.map((item, index) => (
                        <li key={index}>
                            {item.done ? (
                                <div className="flex items-center text-muted-foreground cursor-default p-2">
                                    <CheckCircle2 className="h-5 w-5 mr-3 text-primary" />
                                    <span className="line-through">{item.text}</span>
                                </div>
                            ) : (
                                <Link
                                    to={item.link}
                                    className="flex items-center p-2 rounded-md hover:bg-accent/50 transition-colors group text-card-foreground"
                                >
                                    <CheckCircle2 className="h-5 w-5 mr-3 text-gray-300 group-hover:text-primary transition-colors" />
                                    <span className="font-medium">{item.text}</span>
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
};

export default SetupChecklist;
