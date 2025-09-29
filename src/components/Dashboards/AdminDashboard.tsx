import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Database, 
  Shield, 
  TrendingUp, 
  Activity, 
  AlertTriangle,
  CheckCircle,
  Clock,
  BarChart3
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const systemStats = [
    { title: 'Total Users', value: '1,247', icon: Users, change: '+23 this week' },
    { title: 'Active Transactions', value: '3,456', icon: Database, change: '+156 today' },
    { title: 'Network Health', value: '99.8%', icon: Activity, change: 'Excellent' },
    { title: 'Compliance Score', value: '96%', icon: Shield, change: '+2% this month' }
  ];

  const recentActivity = [
    {
      id: 'TXN001',
      type: 'Collection Event',
      user: 'Ramesh Kumar (Farmer)',
      herb: 'Ashwagandha',
      location: 'Uttarakhand',
      timestamp: '2 minutes ago',
      status: 'verified'
    },
    {
      id: 'TXN002',
      type: 'Quality Test',
      user: 'Dr. Priya Sharma (Testing)',
      herb: 'Brahmi',
      location: 'Delhi Lab',
      timestamp: '15 minutes ago',
      status: 'completed'
    },
    {
      id: 'TXN003',
      type: 'Processing',
      user: 'Suresh Patel (Manufacturer)',
      herb: 'Tulsi',
      location: 'Gujarat Facility',
      timestamp: '1 hour ago',
      status: 'in-progress'
    },
    {
      id: 'TXN004',
      type: 'QR Generation',
      user: 'Meera Singh (Packaging)',
      herb: 'Mixed Formulation',
      location: 'Karnataka Plant',
      timestamp: '2 hours ago',
      status: 'completed'
    }
  ];

  const alerts = [
    {
      type: 'warning',
      message: 'Unusual collection pattern detected in Region 3',
      time: '30 minutes ago'
    },
    {
      type: 'info',
      message: 'Monthly compliance report generated',
      time: '2 hours ago'
    },
    {
      type: 'success',
      message: 'Network performance optimization completed',
      time: '4 hours ago'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">System Administration</h1>
          <p className="text-muted-foreground">Monitor blockchain network and manage botanical traceability system</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <BarChart3 className="w-4 h-4 mr-2" />
            Reports
          </Button>
          <Button className="bg-gradient-primary text-white">
            <Shield className="w-4 h-4 mr-2" />
            System Health
          </Button>
        </div>
      </div>

      {/* System Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {systemStats.map((stat, index) => (
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Network Activity */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Recent Network Activity</CardTitle>
            <CardDescription>Latest blockchain transactions across all roles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      {activity.type === 'Collection Event' && <Users className="h-5 w-5 text-primary" />}
                      {activity.type === 'Quality Test' && <Shield className="h-5 w-5 text-primary" />}
                      {activity.type === 'Processing' && <Activity className="h-5 w-5 text-primary" />}
                      {activity.type === 'QR Generation' && <Database className="h-5 w-5 text-primary" />}
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{activity.type}</h4>
                      <p className="text-sm text-muted-foreground">{activity.user}</p>
                      <p className="text-xs text-muted-foreground">{activity.herb} • {activity.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge 
                      variant={activity.status === 'completed' || activity.status === 'verified' ? 'default' : 'secondary'}
                      className={activity.status === 'completed' || activity.status === 'verified' ? 'bg-success text-success-foreground' : ''}
                    >
                      {activity.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">{activity.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Alerts */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>System Alerts</CardTitle>
            <CardDescription>Important notifications and status updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alerts.map((alert, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 border border-border rounded-lg">
                  <div className="mt-1">
                    {alert.type === 'warning' && <AlertTriangle className="h-5 w-5 text-warning" />}
                    {alert.type === 'info' && <Clock className="h-5 w-5 text-info" />}
                    {alert.type === 'success' && <CheckCircle className="h-5 w-5 text-success" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-foreground">{alert.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Admin Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-md hover:shadow-botanical transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">User Management</h3>
            <p className="text-sm text-muted-foreground">Manage user roles and permissions</p>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-botanical transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Database className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Blockchain Analytics</h3>
            <p className="text-sm text-muted-foreground">Monitor network performance and transactions</p>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-botanical transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Compliance Reports</h3>
            <p className="text-sm text-muted-foreground">Generate regulatory compliance reports</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};