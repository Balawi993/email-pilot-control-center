
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, LifeBuoy, Rss } from "lucide-react";
import { Link } from "react-router-dom";

const HelpSection = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Need some help?</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-3">
                    <li className="flex items-center">
                        <Link to="#" className="flex items-center text-primary hover:underline">
                            <BookOpen className="h-5 w-5 mr-3" />
                            <span>Knowledge base</span>
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <Link to="#" className="flex items-center text-primary hover:underline">
                            <LifeBuoy className="h-5 w-5 mr-3" />
                            <span>Support</span>
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <Link to="#" className="flex items-center text-primary hover:underline">
                            <Rss className="h-5 w-5 mr-3" />
                            <span>Blog</span>
                        </Link>
                    </li>
                </ul>
            </CardContent>
        </Card>
    );
};

export default HelpSection;
