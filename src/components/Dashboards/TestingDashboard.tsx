import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TestTube, Clock, CheckCircle, AlertCircle, Plus, Eye } from 'lucide-react';

export const TestingDashboard: React.FC = () => {
  const pendingTests = [
    {
      id: 'TEST001',
      herb: 'Ashwagandha',
      batch: 'BAT001',
      farmer: 'Ramesh Kumar',
      received: '2024-01-15',
      tests: ['Moisture Content', 'Pesticide Analysis', 'DNA Barcode'],
      priority: 'high'
    },
    {
      id: 'TEST002',
      herb: 'Brahmi',
      batch: 'BAT002',
      farmer: 'Sita Devi',
      received: '2024-01-14',
      tests: ['Heavy Metals', 'Microbial Load'],
      priority: 'medium'
    },
    {
      id: 'TEST003',
      herb: 'Tulsi',
      batch: 'BAT003',
      farmer: 'Gopal Singh',
      received: '2024-01-13',
      tests: ['Authenticity', 'Purity Analysis'],
      priority: 'low'
    }
  ];

  const stats = [
    { title: 'Pending Tests', value: '24', icon: Clock, change: '+3 today' },
    { title: 'Completed Tests', value: '156', icon: CheckCircle, change: '+12 this week' },
    { title: 'Failed Tests', value: '8', icon: AlertCircle, change: '-2 this month' },
    { title: 'Success Rate', value: '95.2%', icon: TestTube, change: '+1.2%' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Testing Lab Dashboard</h1>
          <p className="text-muted-foreground">Quality control and authentication testing interface</p>
        </div>
        <Button className="bg-gradient-primary text-white">
          <Plus className="w-4 h-4 mr-2" />
          Add Test Results
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="shadow-md hover:shadow-botanical transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-success font-medium">{stat.change}</p>
                </div>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pending Tests */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Pending Tests</CardTitle>
          <CardDescription>Samples awaiting quality control analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pendingTests.map((test) => (
              <div key={test.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <TestTube className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{test.herb}</h3>
                    <p className="text-sm text-muted-foreground">Batch: {test.batch} • From: {test.farmer}</p>
                    <p className="text-xs text-muted-foreground">Received: {test.received}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {test.tests.map((testType) => (
                        <Badge key={testType} variant="outline" className="text-xs">
                          {testType}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge 
                    variant={test.priority === 'high' ? 'destructive' : test.priority === 'medium' ? 'default' : 'secondary'}
                  >
                    {test.priority} priority
                  </Badge>
                  <div className="mt-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-md hover:shadow-botanical transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TestTube className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Lab Analysis</h3>
            <p className="text-sm text-muted-foreground">Perform quality control tests on samples</p>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-botanical transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Quality Reports</h3>
            <p className="text-sm text-muted-foreground">Generate and view test result reports</p>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-botanical transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Schedule Tests</h3>
            <p className="text-sm text-muted-foreground">Plan and schedule upcoming test procedures</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};