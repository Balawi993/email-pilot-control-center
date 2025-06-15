
import { useState, Fragment } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
    CheckCircle2, 
    Type, 
    Baseline, 
    Image as ImageIcon, 
    Video, 
    RectangleHorizontal, 
    Minus, 
    Code, 
    Star,
    Pencil
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const contentBlocks = [
  { name: 'Title', icon: Type },
  { name: 'Text', icon: Baseline },
  { name: 'Logo', icon: Star },
  { name: 'Image', icon: ImageIcon },
  { name: 'Video', icon: Video },
  { name: 'Button', icon: RectangleHorizontal },
  { name: 'Divider', icon: Minus },
  { name: 'Code', icon: Code },
];

const CreateTemplate = () => {
    const [step, setStep] = useState('setup');
    const STEPS = ['Setup', 'Design', 'Content', 'Send'];
    const currentStepIndex = STEPS.findIndex(s => s.toLowerCase() === step);

    const handleNext = () => {
        const nextStepIndex = currentStepIndex + 1;
        if (nextStepIndex < STEPS.length) {
            setStep(STEPS[nextStepIndex].toLowerCase());
        }
    };

    // A simplified stepper component
    const Stepper = () => (
        <div className="hidden lg:flex items-center gap-2 text-sm text-gray-600">
            {STEPS.map((s, index) => (
                <Fragment key={s}>
                    <div className={`flex items-center gap-2 transition-colors ${index === currentStepIndex ? 'font-semibold text-primary' : ''} ${index > currentStepIndex ? 'text-gray-400' : index < currentStepIndex ? 'text-primary' : 'text-gray-600'}`}>
                        {index < currentStepIndex ? (
                            <CheckCircle2 className="h-4 w-4" />
                        ) : index === currentStepIndex ? (
                            <span className="w-4 h-4 rounded-full border-2 border-primary flex items-center justify-center">
                                <span className="w-2 h-2 rounded-full bg-primary"></span>
                            </span>
                        ) : (
                            <span className="w-4 h-4 rounded-full border-2 border-gray-400"></span>
                        )}
                        <span>{s}</span>
                    </div>
                    {index < STEPS.length - 1 && <Separator orientation="vertical" className="h-4 bg-gray-300 mx-2" />}
                </Fragment>
            ))}
        </div>
    );

    return (
        <div className="flex flex-col h-[calc(100vh-64px)] bg-background -mt-10 -mb-10 -mx-8">
            {/* Header */}
            <header className="bg-white p-4 border-b flex justify-between items-center shrink-0">
                <div className="flex items-center gap-2">
                    <h1 className="text-xl font-bold text-gray-800">Untitled</h1>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Pencil className="h-4 w-4" />
                    </Button>
                </div>
                <div className="flex-grow flex justify-center">
                    <Stepper />
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline">Preview & test</Button>
                    <Button onClick={handleNext}>Save & next</Button>
                </div>
            </header>

            {/* Main Content */}
            <div className="flex-1 flex overflow-hidden">
                {/* Left Sidebar */}
                <aside className="w-80 bg-white border-r p-6 overflow-y-auto shrink-0">
                    <Tabs value={step} onValueChange={(value) => setStep(value)} className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="setup">Setup</TabsTrigger>
                            <TabsTrigger value="design">Design</TabsTrigger>
                            <TabsTrigger value="content">Content</TabsTrigger>
                        </TabsList>
                        <TabsContent value="setup" className="mt-6">
                            <h2 className="text-lg font-semibold mb-2">Setup</h2>
                            <p className="text-sm text-muted-foreground mb-4">Configure your template settings.</p>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="template-name">Template Name</Label>
                                    <Input id="template-name" defaultValue="The announcement template" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input id="subject" defaultValue="Introducing our new feature!" />
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="design" className="mt-6">
                             <h2 className="text-lg font-semibold mb-2">Design</h2>
                            <p className="text-sm text-muted-foreground mb-4">Customize the look and feel.</p>
                             <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Page Styles</AccordionTrigger>
                                    <AccordionContent>
                                        Here you can add controls for background color, content alignment, etc.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Typography</AccordionTrigger>
                                    <AccordionContent>
                                        Here you can add controls for default fonts, colors, and sizes.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </TabsContent>
                        <TabsContent value="content" className="mt-6">
                            <h2 className="text-lg font-semibold mb-2">Content</h2>
                            <p className="text-sm text-muted-foreground mb-4">Drag and drop content</p>
                            <div className="grid grid-cols-2 gap-3">
                                {contentBlocks.map(block => (
                                    <Card key={block.name} className="p-3 flex flex-col items-center justify-center aspect-square cursor-grab hover:bg-accent/10 transition-colors active:cursor-grabbing">
                                        <block.icon className="h-6 w-6 text-gray-500 mb-2" />
                                        <span className="text-xs font-medium text-center">{block.name}</span>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </aside>

                {/* Canvas */}
                <main className="flex-1 p-8 overflow-y-auto bg-muted/40">
                    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
                         <div className="text-center py-6 border-dashed border-2 rounded-lg bg-gray-50">
                            <Star className="h-8 w-8 text-gray-300 mx-auto mb-2" />
                            <p className="text-sm text-muted-foreground">Logo</p>
                        </div>
                        <div className="text-center py-12 border-dashed border-2 rounded-lg mt-4 bg-gray-50">
                            <ImageIcon className="h-10 w-10 text-gray-300 mx-auto mb-2" />
                             <p className="text-sm text-muted-foreground">Image</p>
                        </div>
                        <div className="mt-6 text-center">
                            <p className="text-sm text-muted-foreground">Introducing you to:</p>
                            <h2 className="text-3xl font-bold my-2">The announcement template</h2>
                            <p className="text-muted-foreground max-w-lg mx-auto">
                                This template is great for announcing new products and features. This text box can extend as far as you need, ensuring you can share all the essential details.
                            </p>
                            <p className="text-muted-foreground max-w-lg mx-auto mt-4">
                                Don't have anything to announce? You could also use this template for welcoming users to your mailing list or thanking them for an event you've run.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default CreateTemplate;

