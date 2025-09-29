import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth, UserRole } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Leaf, Shield, TestTube, Factory, Package, UserCheck, QrCode, MapPin, Calendar, CheckCircle } from 'lucide-react';
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
      <div className="flex-1 flex items-center justify-center p-8 bg-secondary/30 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-primary-light rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-3/4 left-1/3 w-16 h-16 bg-primary-dark rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="w-full max-w-md space-y-8 relative z-10 animate-fade-in">
          <div className="text-center">
            <div className="mx-auto h-20 w-20 bg-gradient-primary rounded-full flex items-center justify-center mb-6 shadow-botanical hover-scale animate-scale-in relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full animate-pulse opacity-75"></div>
              <Icon className="h-10 w-10 text-white relative z-10" />
              <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {selectedRoleConfig.title}
            </h2>
            <p className="text-muted-foreground text-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {selectedRoleConfig.description}
            </p>
            <div className="mt-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                <div className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse"></div>
                Secure Blockchain Access
              </div>
            </div>
          </div>

          <Card className="shadow-botanical hover:shadow-lg transition-all duration-300 border-2 border-primary/10 hover:border-primary/20 animate-scale-in bg-gradient-to-br from-background to-secondary/20" style={{ animationDelay: '0.8s' }}>
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

              <div className="mt-6 pt-6 border-t space-y-4">
                <div>
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

                <div className="border-t pt-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="secondary" 
                        className="w-full bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 hover:from-primary/20 hover:to-primary/10"
                      >
                        <QrCode className="h-4 w-4 mr-2" />
                        Consumer? Scan QR Code for Product Info
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="flex items-center space-x-2">
                          <QrCode className="h-5 w-5 text-primary" />
                          <span>Product Traceability: Ashwagandha Root Powder</span>
                        </DialogTitle>
                        <DialogDescription>
                          Complete blockchain-verified supply chain journey
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-6">
                        {/* Product Header */}
                        <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-semibold text-lg">Ashwagandha Root Powder</h3>
                              <p className="text-sm text-muted-foreground">Batch ID: ASH-2024-001</p>
                              <p className="text-sm text-muted-foreground">QR Code: Verified ✓</p>
                            </div>
                            <div className="text-right">
                              <p className="text-xs text-muted-foreground">Manufactured</p>
                              <p className="font-medium">March 15, 2024</p>
                            </div>
                          </div>
                        </div>

                        {/* Supply Chain Steps */}
                        <div className="space-y-4">
                          {/* Collection */}
                          <div className="border rounded-lg p-4 bg-gradient-to-r from-green-50 to-green-25 dark:from-green-950/20 dark:to-green-900/10">
                            <div className="flex items-start space-x-3">
                              <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                                <Leaf className="h-4 w-4 text-green-600" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <h4 className="font-semibold text-green-800 dark:text-green-300">1. Herb Collection</h4>
                                  <CheckCircle className="h-4 w-4 text-green-600" />
                                </div>
                                <div className="mt-2 space-y-1 text-sm">
                                  <div className="flex items-center space-x-2">
                                    <MapPin className="h-3 w-3" />
                                    <span>Rajasthan, India (26.9124°N, 75.7873°E)</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Calendar className="h-3 w-3" />
                                    <span>Collected: March 1, 2024</span>
                                  </div>
                                  <p><strong>Farmer:</strong> Ramesh Kumar Cooperative</p>
                                  <p><strong>Variety:</strong> Withania somnifera (Premium Grade)</p>
                                  <p><strong>Harvest Method:</strong> Sustainable wild collection</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Testing */}
                          <div className="border rounded-lg p-4 bg-gradient-to-r from-blue-50 to-blue-25 dark:from-blue-950/20 dark:to-blue-900/10">
                            <div className="flex items-start space-x-3">
                              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                                <TestTube className="h-4 w-4 text-blue-600" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <h4 className="font-semibold text-blue-800 dark:text-blue-300">2. Quality Testing</h4>
                                  <CheckCircle className="h-4 w-4 text-green-600" />
                                </div>
                                <div className="mt-2 space-y-1 text-sm">
                                  <div className="flex items-center space-x-2">
                                    <Calendar className="h-3 w-3" />
                                    <span>Tested: March 3, 2024</span>
                                  </div>
                                  <p><strong>Lab:</strong> AYUSH Certified Testing Lab, Delhi</p>
                                  <p><strong>Moisture Content:</strong> 8.2% ✓</p>
                                  <p><strong>Withanolides:</strong> 2.8% ✓</p>
                                  <p><strong>Heavy Metals:</strong> Within limits ✓</p>
                                  <p><strong>Pesticides:</strong> Not detected ✓</p>
                                  <p><strong>DNA Authentication:</strong> Confirmed ✓</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Manufacturing */}
                          <div className="border rounded-lg p-4 bg-gradient-to-r from-orange-50 to-orange-25 dark:from-orange-950/20 dark:to-orange-900/10">
                            <div className="flex items-start space-x-3">
                              <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-full">
                                <Factory className="h-4 w-4 text-orange-600" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <h4 className="font-semibold text-orange-800 dark:text-orange-300">3. Manufacturing</h4>
                                  <CheckCircle className="h-4 w-4 text-green-600" />
                                </div>
                                <div className="mt-2 space-y-1 text-sm">
                                  <div className="flex items-center space-x-2">
                                    <Calendar className="h-3 w-3" />
                                    <span>Processed: March 10, 2024</span>
                                  </div>
                                  <p><strong>Facility:</strong> AyurPharma Manufacturing Ltd.</p>
                                  <p><strong>GMP Certified:</strong> Yes ✓</p>
                                  <p><strong>Processing:</strong> Low-temperature grinding</p>
                                  <p><strong>Mesh Size:</strong> 80-100 mesh</p>
                                  <p><strong>Batch Size:</strong> 500 kg</p>
                                  <p><strong>Storage:</strong> Controlled atmosphere</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Packaging */}
                          <div className="border rounded-lg p-4 bg-gradient-to-r from-purple-50 to-purple-25 dark:from-purple-950/20 dark:to-purple-900/10">
                            <div className="flex items-start space-x-3">
                              <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full">
                                <Package className="h-4 w-4 text-purple-600" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <h4 className="font-semibold text-purple-800 dark:text-purple-300">4. Packaging</h4>
                                  <CheckCircle className="h-4 w-4 text-green-600" />
                                </div>
                                <div className="mt-2 space-y-1 text-sm">
                                  <div className="flex items-center space-x-2">
                                    <Calendar className="h-3 w-3" />
                                    <span>Packaged: March 15, 2024</span>
                                  </div>
                                  <p><strong>Facility:</strong> SecurePack Solutions</p>
                                  <p><strong>Package Type:</strong> Food-grade aluminum pouch</p>
                                  <p><strong>Weight:</strong> 100g</p>
                                  <p><strong>Expiry Date:</strong> March 15, 2026</p>
                                  <p><strong>QR Code Generated:</strong> Blockchain verified</p>
                                  <p><strong>Tamper Seal:</strong> Applied ✓</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Verification Footer */}
                        <div className="bg-gradient-to-r from-primary/5 to-success/5 p-4 rounded-lg border border-success/20">
                          <div className="flex items-center space-x-2 mb-2">
                            <CheckCircle className="h-5 w-5 text-success" />
                            <span className="font-semibold text-success">Blockchain Verified</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            This product's complete supply chain has been verified on the blockchain. 
                            Every step from collection to packaging has been authenticated and recorded immutably.
                          </p>
                          <div className="mt-2 text-xs text-muted-foreground">
                            Transaction Hash: 0x1a2b3c4d5e6f7890abcdef1234567890
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}