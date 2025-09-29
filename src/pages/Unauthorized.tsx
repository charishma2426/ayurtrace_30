import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Unauthorized() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/30">
      <div className="text-center max-w-md">
        <div className="mx-auto h-16 w-16 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
          <Shield className="h-8 w-8 text-destructive" />
        </div>
        
        <h1 className="text-2xl font-bold text-foreground mb-4">
          Access Denied
        </h1>
        
        <p className="text-muted-foreground mb-2">
          You don't have permission to access this resource.
        </p>
        
        {user && (
          <p className="text-sm text-muted-foreground mb-6">
            Logged in as: <span className="font-medium">{user.email}</span> ({user.role})
          </p>
        )}
        
        <div className="space-y-3">
          <Link to="/dashboard">
            <Button className="w-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return to Dashboard
            </Button>
          </Link>
          
          <Button variant="outline" onClick={logout} className="w-full">
            Switch Account
          </Button>
        </div>
      </div>
    </div>
  );
}