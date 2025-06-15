
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontal, PlusCircle } from 'lucide-react';

const templates = [
    { name: 'Weekly Newsletter', lastUpdated: '2025-06-10' },
    { name: 'Product Launch', lastUpdated: '2025-05-28' },
    { name: 'Welcome Email', lastUpdated: '2025-05-15' },
    { name: 'Abandoned Cart', lastUpdated: '2025-06-01' },
    { name: 'Event Invitation', lastUpdated: '2025-04-22' },
    { name: 'Blank Template', lastUpdated: '2025-03-19' },
];


const Templates = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Templates</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Template
        </Button>
      </div>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {templates.map((template) => (
          <Card key={template.name}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-base font-medium">{template.name}</CardTitle>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Duplicate</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent>
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                    <p className="text-sm text-muted-foreground">Thumbnail</p>
                </div>
            </CardContent>
            <CardFooter>
                <p className="text-xs text-muted-foreground">Last updated: {template.lastUpdated}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
  
  export default Templates;
