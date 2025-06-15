import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { AlertCircle, Terminal, Bell } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const ColorDisplay = ({ name, className }: { name: string, className: string }) => (
    <div className="text-center">
        <div className={cn("w-full h-24 rounded-lg mb-2 border", className)}></div>
        <p className="font-semibold capitalize">{name}</p>
    </div>
);

const UIGuide = () => (
    <div className="space-y-12 p-4 md:p-6">
        <header>
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">UI Style Guide</h1>
            <p className="mt-4 text-lg text-muted-foreground">A reference for all the UI components and styles used in EmailPilot.</p>
        </header>

        <Separator />

        {/* Colors Section */}
        <section id="colors">
            <h2 className="text-3xl font-semibold mb-6 pb-2 border-b">Colors</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <ColorDisplay name="Primary" className="bg-primary" />
                <ColorDisplay name="Secondary" className="bg-secondary" />
                <ColorDisplay name="Destructive" className="bg-destructive" />
                <ColorDisplay name="Muted" className="bg-muted" />
                <ColorDisplay name="Accent" className="bg-accent" />
                <ColorDisplay name="Background" className="bg-background" />
                <ColorDisplay name="Foreground" className="bg-foreground" />
                <ColorDisplay name="Card" className="bg-card" />
                <ColorDisplay name="Popover" className="bg-popover" />
                <ColorDisplay name="Border" className="bg-border" />
                <ColorDisplay name="Input" className="bg-input" />
                <ColorDisplay name="Ring" className="bg-ring" />
            </div>
        </section>

        <Separator />

        {/* Typography Section */}
        <section id="typography">
            <h2 className="text-3xl font-semibold mb-6 pb-2 border-b">Typography</h2>
            <div className="space-y-4">
                <h1 className="text-4xl font-bold">Heading 1 (4xl, bold)</h1>
                <h2 className="text-3xl font-semibold">Heading 2 (3xl, semibold)</h2>
                <h3 className="text-2xl font-semibold">Heading 3 (2xl, semibold)</h3>
                <h4 className="text-xl font-bold">Heading 4 (xl, bold)</h4>
                <p>This is a standard paragraph. The quick brown fox jumps over the lazy dog. Used for most body text.</p>
                <p className="text-sm text-muted-foreground">This is a muted paragraph (sm, muted-foreground). Used for hints and secondary information.</p>
            </div>
        </section>

        <Separator />

        {/* Buttons Section */}
        <section id="buttons">
            <h2 className="text-3xl font-semibold mb-6 pb-2 border-b">Buttons</h2>
            <div className="space-y-6">
                <div>
                    <h3 className="text-xl font-medium mb-4">Variants</h3>
                    <div className="flex flex-wrap gap-4 items-center">
                        <Button>Default</Button>
                        <Button variant="destructive">Destructive</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="link">Link</Button>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-medium mb-4">Sizes</h3>
                    <div className="flex flex-wrap gap-4 items-center">
                        <Button size="lg">Large</Button>
                        <Button size="default">Default</Button>
                        <Button size="sm">Small</Button>
                        <Button size="icon"><Bell className="h-4 w-4" /></Button>
                    </div>
                </div>
            </div>
        </section>
        
        <Separator />

        {/* Card Section */}
        <section id="card">
            <h2 className="text-3xl font-semibold mb-6 pb-2 border-b">Card</h2>
            <Card className="max-w-md">
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>This is a card description. It provides more context.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>This is the main content area of the card. You can put any information here.</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Deploy</Button>
                </CardFooter>
            </Card>
        </section>
        
        <Separator />

        {/* Form Elements Section */}
        <section id="form-elements">
            <h2 className="text-3xl font-semibold mb-6 pb-2 border-b">Form Elements</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email-guide">Email</Label>
                        <Input type="email" id="email-guide" placeholder="user@emailpilot.com" />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="message-guide">Your Message</Label>
                        <Textarea id="message-guide" placeholder="Type your message here." />
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms-guide" />
                        <Label htmlFor="terms-guide">Accept terms and conditions</Label>
                    </div>
                    <RadioGroup defaultValue="comfortable">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="default" id="r1-guide" />
                            <Label htmlFor="r1-guide">Default</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="comfortable" id="r2-guide" />
                            <Label htmlFor="r2-guide">Comfortable</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="compact" id="r3-guide" />
                            <Label htmlFor="r3-guide">Compact</Label>
                        </div>
                    </RadioGroup>
                    <div className="flex items-center space-x-2">
                        <Switch id="airplane-mode-guide" />
                        <Label htmlFor="airplane-mode-guide">Airplane Mode</Label>
                    </div>
                </div>
            </div>
        </section>

        <Separator />

        {/* Other Components */}
        <section id="other-components">
             <h2 className="text-3xl font-semibold mb-6 pb-2 border-b">Other Components</h2>
             <div className="space-y-8">
                <div>
                    <h3 className="text-xl font-medium mb-4">Alert</h3>
                    <div className="space-y-4">
                        <Alert>
                            <Terminal className="h-4 w-4" />
                            <AlertTitle>Heads up!</AlertTitle>
                            <AlertDescription>
                                You can add components to your app using the cli.
                            </AlertDescription>
                        </Alert>
                        <Alert variant="destructive">
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>
                                Your session has expired. Please log in again.
                            </AlertDescription>
                        </Alert>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-medium mb-4">Badge</h3>
                    <div className="flex gap-4">
                        <Badge>Default</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                        <Badge variant="destructive">Destructive</Badge>
                        <Badge variant="outline">Outline</Badge>
                    </div>
                </div>

                <div>
                     <h3 className="text-xl font-medium mb-4">Accordion</h3>
                     <Accordion type="single" collapsible className="w-full max-w-md">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Is it styled?</AccordionTrigger>
                            <AccordionContent>
                            Yes. It comes with default styles that matches the other components' aesthetic.
                            </AccordionContent>
                        </AccordionItem>
                     </Accordion>
                </div>

                <div>
                     <h3 className="text-xl font-medium mb-4">Tooltip</h3>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="outline">Hover me</Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>This is a tooltip!</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
             </div>
        </section>
    </div>
);

export default UIGuide;
