import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { QrCode, Package, Truck, CheckCircle, Plus, Eye, BarChart3 } from 'lucide-react';

export const PackagingDashboard: React.FC = () => {
  const qrCodeQueue = [
    {
      id: 'QR001',
      product: 'Ashwagandha Churna - 100g',
      batch: 'PROC001',
      quantity: '500 units',
      status: 'ready',
      manufacturer: 'Suresh Patel',
      packagingDate: '2024-01-16'
    },
    {
      id: 'QR002',
      product: 'Brahmi Ghrita - 250ml',
      batch: 'PROC002',
      quantity: '200 units',
      status: 'in-progress',
      manufacturer: 'Suresh Patel',
      packagingDate: '2024-01-17'
    },
    {
      id: 'QR003',
      product: 'Triphala Tablets - 60 count',
      batch: 'PROC003',
      quantity: '1000 units',
      status: 'pending',
      manufacturer: 'Suresh Patel',
      packagingDate: '2024-01-18'
    }
  ];

  const stats = [
    { title: 'QR Codes Generated', value: '15,420', icon: QrCode, change: '+245 today' },
    { title: 'Packages Ready', value: '2,340', icon: Package, change: '+89 today' },
    { title: 'Shipped Products', value: '12,680', icon: Truck, change: '+156 this week' },
    { title: 'Success Rate', value: '99.7%', icon: CheckCircle, change: '+0.2%' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Packaging Dashboard</h1>
          <p className="text-muted-foreground">QR code generation and product labeling interface</p>
        </div>
        <Button className="bg-gradient-primary text-white">
          <Plus className="w-4 h-4 mr-2" />
          Generate QR Codes
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

      {/* QR Code Generation Queue */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>QR Code Generation Queue</CardTitle>
          <CardDescription>Products ready for QR code generation and labeling</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {qrCodeQueue.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <QrCode className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.product}</h3>
                    <p className="text-sm text-muted-foreground">
                      Batch: {item.batch} • Quantity: {item.quantity}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Manufacturer: {item.manufacturer} • Date: {item.packagingDate}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge 
                    variant={item.status === 'ready' ? 'default' : item.status === 'in-progress' ? 'secondary' : 'outline'}
                    className={item.status === 'ready' ? 'bg-success text-success-foreground' : ''}
                  >
                    {item.status}
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
              <QrCode className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Batch QR Generation</h3>
            <p className="text-sm text-muted-foreground">Generate unique QR codes for product batches</p>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-botanical transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Package className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Label Design</h3>
            <p className="text-sm text-muted-foreground">Create and manage product label templates</p>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-botanical transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Track Performance</h3>
            <p className="text-sm text-muted-foreground">Monitor packaging and shipping metrics</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent QR Code Activity */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Recent QR Code Activity</CardTitle>
          <CardDescription>Latest QR code generation and scanning activity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 bg-success/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-success" />
                </div>
                <div>
                  <p className="text-sm font-medium">1,250 QR codes generated for Batch PROC001</p>
                  <p className="text-xs text-muted-foreground">5 minutes ago</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <QrCode className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Consumer scanned QR for Ashwagandha Churna</p>
                  <p className="text-xs text-muted-foreground">15 minutes ago</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 bg-info/10 rounded-full flex items-center justify-center">
                  <Truck className="h-4 w-4 text-info" />
                </div>
                <div>
                  <p className="text-sm font-medium">Batch PROC002 shipped with 200 QR codes</p>
                  <p className="text-xs text-muted-foreground">1 hour ago</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};