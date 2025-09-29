import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Factory, Package, CheckCircle, TrendingUp, Plus, Eye, Activity } from 'lucide-react';

export const ManufacturerDashboard: React.FC = () => {
  const activeBatches = [
    {
      id: 'PROC001',
      formula: 'Ashwagandha Churna',
      stage: 'Drying',
      ingredients: ['Ashwagandha Root', 'Ginger', 'Black Pepper'],
      quantity: '500 kg',
      progress: 65,
      expectedCompletion: '2024-01-18'
    },
    {
      id: 'PROC002',
      formula: 'Brahmi Ghrita',
      stage: 'Mixing',
      ingredients: ['Brahmi Extract', 'Cow Ghee', 'Sesame Oil'],
      quantity: '200 L',
      progress: 40,
      expectedCompletion: '2024-01-20'
    },
    {
      id: 'PROC003',
      formula: 'Triphala Tablets',
      stage: 'Tablet Formation',
      ingredients: ['Amla', 'Bibhitaki', 'Haritaki'],
      quantity: '10000 tablets',
      progress: 85,
      expectedCompletion: '2024-01-16'
    }
  ];

  const stats = [
    { title: 'Active Batches', value: '12', icon: Factory, change: '+3 this week' },
    { title: 'Completed Products', value: '456', icon: Package, change: '+25 this month' },
    { title: 'Quality Passed', value: '98.5%', icon: CheckCircle, change: '+0.3%' },
    { title: 'Production Rate', value: '2.4T/day', icon: TrendingUp, change: '+12%' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Manufacturer Dashboard</h1>
          <p className="text-muted-foreground">Processing and formulation management interface</p>
        </div>
        <Button className="bg-gradient-primary text-white">
          <Plus className="w-4 h-4 mr-2" />
          New Batch
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

      {/* Active Production Batches */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Active Production Batches</CardTitle>
          <CardDescription>Currently processing formulations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activeBatches.map((batch) => (
              <div key={batch.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Factory className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{batch.formula}</h3>
                    <p className="text-sm text-muted-foreground">Stage: {batch.stage} • Quantity: {batch.quantity}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {batch.ingredients.map((ingredient) => (
                        <Badge key={ingredient} variant="outline" className="text-xs">
                          {ingredient}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="text-foreground font-medium">{batch.progress}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300" 
                          style={{ width: `${batch.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="secondary" className="mb-2">
                    <Activity className="h-3 w-3 mr-1" />
                    In Progress
                  </Badge>
                  <p className="text-xs text-muted-foreground">Completion: {batch.expectedCompletion}</p>
                  <Button variant="ghost" size="sm" className="mt-2">
                    <Eye className="h-4 w-4" />
                  </Button>
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
              <Factory className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Start Processing</h3>
            <p className="text-sm text-muted-foreground">Begin new formulation batch processing</p>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-botanical transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Quality Control</h3>
            <p className="text-sm text-muted-foreground">Monitor batch quality and compliance</p>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-botanical transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Package className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Supply Chain</h3>
            <p className="text-sm text-muted-foreground">Track ingredient sourcing and logistics</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};