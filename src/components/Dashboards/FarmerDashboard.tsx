import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Package, TrendingUp, Plus, Eye } from 'lucide-react';

export const FarmerDashboard: React.FC = () => {
  const recentCollections = [
    {
      id: 'COL001',
      herb: 'Ashwagandha',
      location: 'Field A2, Uttarakhand',
      date: '2024-01-15',
      quantity: '25 kg',
      status: 'verified',
      coordinates: '30.0668° N, 79.0193° E'
    },
    {
      id: 'COL002',
      herb: 'Brahmi',
      location: 'Field B1, Uttarakhand',
      date: '2024-01-14',
      quantity: '18 kg',
      status: 'pending',
      coordinates: '30.0655° N, 79.0201° E'
    },
    {
      id: 'COL003',
      herb: 'Tulsi',
      location: 'Field C3, Uttarakhand',
      date: '2024-01-13',
      quantity: '35 kg',
      status: 'verified',
      coordinates: '30.0642° N, 79.0188° E'
    }
  ];

  const stats = [
    { title: 'Total Collections', value: '156', icon: Package, change: '+12%' },
    { title: 'This Month', value: '23', icon: Calendar, change: '+8%' },
    { title: 'Active Fields', value: '8', icon: MapPin, change: '+2' },
    { title: 'Revenue', value: '₹45,670', icon: TrendingUp, change: '+15%' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Farmer Dashboard</h1>
          <p className="text-muted-foreground">Track your herb collections and manage field activities</p>
        </div>
        <Button className="bg-gradient-primary text-white">
          <Plus className="w-4 h-4 mr-2" />
          New Collection
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

      {/* Recent Collections */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Recent Collections</CardTitle>
          <CardDescription>Your latest herb collection activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentCollections.map((collection) => (
              <div key={collection.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{collection.herb}</h3>
                    <p className="text-sm text-muted-foreground flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {collection.location}
                    </p>
                    <p className="text-xs text-muted-foreground">{collection.coordinates}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge 
                    variant={collection.status === 'verified' ? 'default' : 'secondary'}
                    className={collection.status === 'verified' ? 'bg-success text-success-foreground' : ''}
                  >
                    {collection.status}
                  </Badge>
                  <p className="text-sm text-muted-foreground mt-1">{collection.quantity}</p>
                  <p className="text-xs text-muted-foreground">{collection.date}</p>
                </div>
                <Button variant="ghost" size="sm">
                  <Eye className="h-4 w-4" />
                </Button>
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
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Record Collection</h3>
            <p className="text-sm text-muted-foreground">Log a new herb collection with GPS coordinates</p>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-botanical transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Package className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">View Batches</h3>
            <p className="text-sm text-muted-foreground">Track your herb batches and their status</p>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-botanical transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Analytics</h3>
            <p className="text-sm text-muted-foreground">View collection trends and performance</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};