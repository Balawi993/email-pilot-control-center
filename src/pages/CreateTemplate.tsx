
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
    CheckCircle2, 
    Type, 
    Baseline, 
    Image as ImageIcon, 
    Video, 
    RectangleHorizontal, 
    Minus, 
    Code, 
    Star
} from 'lucide-react';

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

const STEPS = [
    { id: 'setup', label: 'Setup' },
    { id: 'design', label: 'Design' },
    { id: 'content', label: 'Content' },
    { id: 'send', label: 'Send' },
];

const CreateTemplate = () => {
    const [step, setStep] = useState(STEPS[0].id);
    const [templateName, setTemplateName] = useState('Untitled');

    const currentStepIndex = STEPS.findIndex(s => s.id === step);
    const isLastStep = currentStepIndex === STEPS.length - 1;

    const handleNext = () => {
        if (!isLastStep) {
            setStep(STEPS[currentStepIndex + 1].id);
        }
        // TODO: Add save logic for the last step
    };

    const handleStepClick = (clickedStepId: string) => {
        const clickedStepIndex = STEPS.findIndex(s => s.id === clickedStepId);
        // Allow navigation only to previous/completed steps
        if (clickedStepIndex < currentStepIndex) {
            setStep(clickedStepId);
        }
    };

    const Stepper = () => {
        return (
            <div className="hidden lg:flex items-center gap-4 text-sm text-gray-600">
                {STEPS.map(({ id, label }, index) => {
                    const isCompleted = index < currentStepIndex;
                    const isCurrent = index === currentStepIndex;

                    const stepElement = (
                        <div
                            key={id}
                            onClick={() => isCompleted && handleStepClick(id)}
                            className={`flex items-center gap-2 ${
                                isCompleted || isCurrent ? 'text-primary' : 'text-gray-400'
                            } ${isCurrent ? 'font-semibold' : ''} ${
                                isCompleted ? 'cursor-pointer hover:text-primary/80 transition-colors' : 'cursor-default'
                            }`}
                        >
                            {isCompleted ? (
                                <CheckCircle2 className="h-4 w-4" />
                            ) : isCurrent ? (
                                <span className="w-4 h-4 rounded-full border-2 border-primary flex items-center justify-center">
                                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                                </span>
                            ) : (
                                <span className="w-4 h-4 rounded-full border-2 border-gray-400"></span>
                            )}
                            <span>{label}</span>
                        </div>
                    );

                    if (index < STEPS.length - 1) {
                        // Return array which will be flattened by React
                        return [
                            stepElement,
                            <Separator key={`sep-${id}`} orientation="vertical" className="h-4 bg-gray-300" />,
                        ];
                    }
                    return stepElement;
                })}
            </div>
        );
    };

    return (
        <div className="flex flex-col h-[calc(100vh-64px)] bg-background -mt-10 -mb-10 -mx-8">
            {/* Header */}
            <header className="bg-white p-4 border-b flex justify-between items-center shrink-0">
                <div className="flex items-center gap-2">
                    <h1 className="text-xl font-bold text-gray-800">{templateName}</h1>
                </div>
                <div className="flex-grow flex justify-center">
                    <Stepper />
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline">Preview & test</Button>
                    <Button onClick={handleNext}>{isLastStep ? 'Save Template' : 'Save & next'}</Button>
                </div>
            </header>

            {/* Main Content */}
            <div className="flex-1 flex overflow-hidden">
                {/* Left Sidebar for Content step */}
                {step === 'content' && (
                    <aside className="w-72 bg-white border-r p-6 overflow-y-auto shrink-0">
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
                    </aside>
                )}

                {/* Canvas */}
                <main className="flex-1 p-8 overflow-y-auto bg-muted/40">
                    {step === 'setup' && (
                        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
                            <h2 className="text-2xl font-bold mb-6">Setup Template</h2>
                            <div className="space-y-4">
                                <div>
                                    <Label htmlFor="templateName">Template Name</Label>
                                    <Input 
                                        id="templateName"
                                        value={templateName} 
                                        onChange={(e) => setTemplateName(e.target.value)}
                                        placeholder="e.g. Weekly Newsletter"
                                        className="mt-1"
                                    />
                                </div>
                                <p className="text-sm text-muted-foreground">Give your template a name to easily identify it later.</p>
                            </div>
                        </div>
                    )}
                    {step === 'design' && (
                        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
                            <h2 className="text-2xl font-bold mb-4">Design Template</h2>
                            <p className="text-muted-foreground">This is the design stage. Here you can customize the general look and feel of your template, like background colors, default fonts, etc.</p>
                        </div>
                    )}
                    {step === 'content' && (
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
                    )}
                    {/* Placeholder for the 'send' step content */}
                    {step === 'send' && (
                        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
                            <h2 className="text-2xl font-bold mb-4">Send Template</h2>
                            <p className="text-muted-foreground">This is the final step. Review your template and send it out.</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default CreateTemplate;
