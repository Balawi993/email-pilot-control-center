
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronDown, Search } from 'lucide-react';

const contacts = [
  { email: 'olivia.martin@email.com', firstName: 'Olivia', lastName: 'Martin', added: '2025-06-14', lastChanged: '2025-06-15', status: 'Subscribed' },
  { email: 'liam.johnson@email.com', firstName: 'Liam', lastName: 'Johnson', added: '2025-06-13', lastChanged: '2025-06-14', status: 'Subscribed' },
  { email: 'noah.williams@email.com', firstName: 'Noah', lastName: 'Williams', added: '2025-06-12', lastChanged: '2025-06-13', status: 'Unsubscribed' },
  { email: 'emma.brown@email.com', firstName: 'Emma', lastName: 'Brown', added: '2025-06-11', lastChanged: '2025-06-12', status: 'Subscribed' },
];

const Contacts = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Contacts</h1>
        <div className="flex items-center space-x-2">
          <DropdownMenu>
            <Button asChild>
                <DropdownMenuTrigger className="flex items-center">
                    Add Contact
                    <ChevronDown className="ml-2 h-4 w-4" />
                </DropdownMenuTrigger>
            </Button>
            <DropdownMenuContent>
              <DropdownMenuItem>Add a single contact</DropdownMenuItem>
              <DropdownMenuItem>Import from CSV</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Tabs defaultValue="contacts">
        <TabsList className="grid w-full grid-cols-3 sm:grid-cols-4 md:grid-cols-7">
          <TabsTrigger value="contacts">Contacts</TabsTrigger>
          <TabsTrigger value="fields">Fields</TabsTrigger>
          <TabsTrigger value="tags">Tags</TabsTrigger>
          <TabsTrigger value="segments">Segments</TabsTrigger>
          <TabsTrigger value="imports">Imports</TabsTrigger>
          <TabsTrigger value="exports">Exports</TabsTrigger>
          <TabsTrigger value="customisation">Consent</TabsTrigger>
        </TabsList>
        <TabsContent value="contacts" className="mt-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div className="relative w-full max-w-sm">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search contacts..." className="pl-10" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Email</TableHead>
                    <TableHead>First Name</TableHead>
                    <TableHead>Last Name</TableHead>
                    <TableHead>Added</TableHead>
                    <TableHead>Last Changed</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contacts.map((contact) => (
                    <TableRow key={contact.email}>
                      <TableCell className="font-medium">{contact.email}</TableCell>
                      <TableCell>{contact.firstName}</TableCell>
                      <TableCell>{contact.lastName}</TableCell>
                      <TableCell>{contact.added}</TableCell>
                      <TableCell>{contact.lastChanged}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Contacts;
