
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Lightbulb } from 'lucide-react';

const FapteInteresante = () => {
  const [currentFact, setCurrentFact] = useState(0);

  const fapte = [
    {
      title: "Viteza luminii",
      fact: "Lumina de la Soare ajunge pe Pământ în aproximativ 8 minute și 20 de secunde.",
      emoji: "☀️"
    },
    {
      title: "Găuri negre", 
      fact: "O găură neagră poate avea o gravitație atât de puternică încât nici măcar lumina nu poate scăpa din ea.",
      emoji: "🕳️"
    },
    {
      title: "Neutron Stars",
      fact: "O linguriță cu materie de la o stea neutronă ar cântări aproximativ un miliard de tone pe Pământ.",
      emoji: "⭐"
    },
    {
      title: "Temperatura spațiului",
      fact: "Temperatura din spațiul cosmic este de aproximativ -270°C, aproape de zero absolut.",
      emoji: "🥶"
    },
    {
      title: "Vârsta universului",
      fact: "Universul are aproximativ 13.8 miliarde de ani, determinat prin studierea radiației cosmice de fond.",
      emoji: "🌌"
    },
    {
      title: "Dimensiunea Soarelui",
      fact: "În Soare s-ar putea încăpea aproximativ 1.3 milioane de planete ca Pământul.",
      emoji: "🌞"
    },
    {
      title: "Zilele pe Venus",
      fact: "O zi pe Venus (243 zile pământești) durează mai mult decât un an pe Venus (225 zile pământești).",
      emoji: "♀️"
    },
    {
      title: "Calea Lactee",
      fact: "Galaxia noastră se deplasează prin spațiu cu o viteză de aproximativ 600 km/secundă.",
      emoji: "🌠"
    }
  ];

  const nextFact = () => {
    setCurrentFact((prev) => (prev + 1) % fapte.length);
  };

  const prevFact = () => {
    setCurrentFact((prev) => (prev - 1 + fapte.length) % fapte.length);
  };

  useEffect(() => {
    const interval = setInterval(nextFact, 10000); // Auto-advance every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen space-gradient py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Știați că...?
          </h1>
          <p className="text-muted-foreground">
            Descoperă fapte fascinante despre univers
          </p>
        </div>

        <div className="relative">
          <Card className="bg-card/50 border-border min-h-[300px] flex items-center">
            <CardContent className="p-8 text-center w-full">
              <div className="text-6xl mb-6 animate-float">
                {fapte[currentFact].emoji}
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                {fapte[currentFact].title}
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {fapte[currentFact].fact}
              </p>

              <div className="flex items-center justify-center mt-6 gap-2">
                <Lightbulb className="text-accent" size={20} />
                <span className="text-sm text-muted-foreground">
                  Faptul {currentFact + 1} din {fapte.length}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-6">
            <Button 
              variant="outline" 
              onClick={prevFact}
              className="flex items-center gap-2"
            >
              <ChevronLeft size={16} />
              Anterior
            </Button>

            <div className="flex gap-2">
              {fapte.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFact(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentFact 
                      ? 'bg-primary' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <Button 
              variant="outline" 
              onClick={nextFact}
              className="flex items-center gap-2"
            >
              Următor
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>

        {/* Auto-advance indicator */}
        <div className="text-center mt-4">
          <p className="text-sm text-muted-foreground">
            ✨ Faptele se schimbă automat la fiecare 10 secunde
          </p>
        </div>
      </div>
    </div>
  );
};

export default FapteInteresante;
