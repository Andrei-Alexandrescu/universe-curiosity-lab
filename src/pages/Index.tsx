
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Rocket, Star, Globe, Telescope } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen space-gradient">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 animate-float">
            <div className="text-8xl mb-4">🚀</div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Bun venit în călătoria ta cosmică!
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Universul este plin de mistere și minuni care așteaptă să fie descoperite. 
            Hai să explorăm împreună infinitatea spațiului și să ne lăsăm curiozitatea să ne ghideze 
            prin cele mai fascinante secrete ale cosmosului.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/planete-galaxii">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Globe className="mr-2" size={20} />
                Explorează Planetele
              </Button>
            </Link>
            <Link to="/test">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Star className="mr-2" size={20} />
                Testează-ți Cunoștințele
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Floating stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-primary/30 animate-twinkle">⭐</div>
          <div className="absolute top-40 right-20 text-accent/40 animate-twinkle" style={{ animationDelay: '1s' }}>✨</div>
          <div className="absolute bottom-40 left-1/4 text-primary/20 animate-twinkle" style={{ animationDelay: '2s' }}>🌟</div>
          <div className="absolute bottom-20 right-1/3 text-accent/30 animate-twinkle" style={{ animationDelay: '0.5s' }}>⭐</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Ce vei descoperi în această călătorie?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card/50 border-border hover:bg-card/70 transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:animate-float">🪐</div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Planete Fascinante</h3>
                <p className="text-muted-foreground text-sm">
                  Descoperă secretele planetelor din sistemul nostru solar
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-border hover:bg-card/70 transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:animate-float">🌌</div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Galaxii Misterioase</h3>
                <p className="text-muted-foreground text-sm">
                  Explorează vastitatea galaxiilor din univers
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-border hover:bg-card/70 transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:animate-float">🧠</div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Teste Interactive</h3>
                <p className="text-muted-foreground text-sm">
                  Testează și dezvoltă-ți cunoștințele despre spațiu
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-border hover:bg-card/70 transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:animate-float">💡</div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Fapte Incredibile</h3>
                <p className="text-muted-foreground text-sm">
                  Află curiosități uimitoare despre univers
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Motivational Quote */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-card/30 border-primary/20">
            <CardContent className="p-8">
              <Telescope className="mx-auto mb-4 text-primary" size={48} />
              <blockquote className="text-xl md:text-2xl font-medium mb-4 text-foreground italic">
                "Două lucruri sunt infinite: universul și prostia umană; și nu sunt sigur despre primul."
              </blockquote>
              <cite className="text-muted-foreground">- Albert Einstein</cite>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
