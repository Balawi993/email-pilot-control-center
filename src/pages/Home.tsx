
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-background font-sans flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Mail className="h-10 w-10 text-primary" />
              <span className="font-bold text-4xl text-gray-800">EmailPilot</span>
            </div>
            <h1 className="text-3xl font-bold mb-2 text-gray-800">Your Email Marketing Journey Starts Here</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
                Design beautiful campaigns, manage your contacts, and grow your audience, all from one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                    <Link to="/login">Login</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                    <Link to="/register">Create Account</Link>
                </Button>
            </div>
        </div>
    </div>
  );
};

export default Home;
