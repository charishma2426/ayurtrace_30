import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth, UserRole } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Leaf, Shield, TestTube, Factory, Package, UserCheck } from 'lucide-react';
import heroImage from '@/assets/hero-botanical.jpg';

const roleConfig = {
  farmer: {
    icon: Leaf,
    title: 'Farmer Portal',
    description: 'Manage herb collection and harvest records'
  },
  testing: {
    icon: TestTube,
    title: 'Testing Lab Portal',
    description: 'Quality control and lab testing interface'
  },
  manufacturer: {
    icon: Factory,
    title: 'Manufacturer Portal',
    description: 'Processing and formulation management'
  },
  packaging: {
    icon: Package,
    title: 'Packaging Portal',
    description: 'QR code generation and product labeling'
  },
  admin: {
    icon: Shield,
    title: 'Admin Portal',
    description: 'System administration and oversight'
  }
};

export default function Login() {
  const { user, login, isLoading } = useAuth();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('farmer');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const success = await login(email, password, role);
    
    if (success) {
      toast({
        title: "Login successful",
        description: `Welcome to the ${roleConfig[role].title}`,
      });
    } else {
      toast({
        title: "Login failed",
        description: "Invalid credentials or role mismatch",
        variant: "destructive",
      });
    }
    
    setIsSubmitting(false);
  };

  const fillDemoCredentials = (selectedRole: UserRole) => {
    setRole(selectedRole);
    setEmail(`${selectedRole}@ayush.gov.in`);
    setPassword('password123');
  };

  const selectedRoleConfig = roleConfig[role];
  const Icon = selectedRoleConfig.icon;

  return (
    <div className="min-h-screen flex">
      {/* Left side - Hero Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img 
          src={heroImage} 
          alt="Ayurvedic herbs traceability" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-dark/80" />
        <div className="relative z-10 flex flex-col justify-center p-12 text-white">
          <div className="flex items-center space-x-3 mb-8">
            <div className="h-12 w-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Leaf className="h-7 w-7" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">AyurTrace</h1>
              <p className="text-white/90">Blockchain Botanical Traceability</p>
            </div>
          </div>
          
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Secure Ayurvedic<br />
            Herb Traceability
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Track medicinal plants from farm to formulation with blockchain technology. 
            Ensuring authenticity, quality, and sustainable sourcing.
          </p>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-white rounded-full" />
              <span>GPS Geo-tagging</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-white rounded-full" />
              <span>Immutable Records</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-white rounded-full" />
              <span>Quality Assurance</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-white rounded-full" />
              <span>Consumer Trust</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-secondary/30">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <div className="mx-auto h-16 w-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
              <Icon className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">
              {selectedRoleConfig.title}
            </h2>
            <p className="text-muted-foreground mt-2">
              {selectedRoleConfig.description}
            </p>
          </div>

          <Card className="shadow-botanical">
            <CardHeader>
              <CardTitle className="text-center">Sign In</CardTitle>
              <CardDescription className="text-center">
                Access your role-specific dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="role">Select Role</Label>
                  <Select value={role} onValueChange={(value: UserRole) => setRole(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose your role" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(roleConfig).map(([key, config]) => (
                        <SelectItem key={key} value={key}>
                          <div className="flex items-center space-x-2">
                            <config.icon className="h-4 w-4" />
                            <span>{config.title}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary text-white font-medium"
                  disabled={isSubmitting || isLoading}
                >
                  {isSubmitting ? 'Signing in...' : 'Sign In'}
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-muted-foreground text-center mb-3">
                  Demo Credentials
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(roleConfig).map(([key, config]) => (
                    <Button
                      key={key}
                      variant="outline"
                      size="sm"
                      onClick={() => fillDemoCredentials(key as UserRole)}
                      className="text-xs"
                    >
                      <config.icon className="h-3 w-3 mr-1" />
                      {config.title.split(' ')[0]}
                    </Button>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  Password: password123
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}