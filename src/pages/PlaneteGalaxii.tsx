
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const planets = [
  {
    name: 'Mercur',
    emoji: '☿️',
    distance: '57.9 milioane km',
    description: 'Cea mai apropiată planetă de Soare, cu temperaturi extreme.',
    facts: ['O zi pe Mercur durează 59 de zile terestre', 'Nu are atmosferă', 'Temperatura variază între -173°C și 427°C']
  },
  {
    name: 'Venus',
    emoji: '♀️',
    distance: '108.2 milioane km',
    description: 'Cea mai fierbinte planetă din sistemul solar.',
    facts: ['Atmosfera este 96% dioxid de carbon', 'Presiunea atmosferică este de 90 de ori mai mare decât pe Pământ', 'O zi pe Venus durează 243 de zile terestre']
  },
  {
    name: 'Pământul',
    emoji: '🌍',
    distance: '149.6 milioane km',
    description: 'Casa noastră în univers, singura planetă cunoscută cu viață.',
    facts: ['71% din suprafață este acoperită cu apă', 'Are un singur satelit natural - Luna', 'Vârsta: aproximativ 4.5 miliarde de ani']
  },
  {
    name: 'Marte',
    emoji: '♂️',
    distance: '227.9 milioane km',
    description: 'Planeta roșie, destinația viitoare a explorărilor umane.',
    facts: ['Are cea mai mare vulcan din sistemul solar - Olympus Mons', 'O zi pe Marte durează 24h 37min', 'Are două luni: Phobos și Deimos']
  },
  {
    name: 'Jupiter',
    emoji: '♃',
    distance: '778.5 milioane km',
    description: 'Cea mai mare planetă din sistemul solar.',
    facts: ['Are peste 80 de luni', 'Marea Pată Roșie este o furtună mai mare decât Pământul', 'Este o gigantă gazoasă']
  },
  {
    name: 'Saturn',
    emoji: '♄',
    distance: '1.43 miliarde km',
    description: 'Planeta cu cele mai spectaculoase inele.',
    facts: ['Inelele sunt formate din gheață și rocă', 'Are peste 80 de luni', 'Densitatea este mai mică decât cea a apei']
  }
];

const galaxies = [
  {
    name: 'Calea Lactee',
    emoji: '🌌',
    type: 'Spirală',
    description: 'Galaxia noastră, care conține aproximativ 100-400 miliarde de stele.',
    facts: ['Diametrul: ~100.000 ani-lumină', 'Sistemul solar se află în brațul Orion', 'Se mișcă cu 600 km/s prin spațiu']
  },
  {
    name: 'Andromeda',
    emoji: '🌠',
    type: 'Spirală',
    description: 'Cea mai apropiată galaxie majoră de Calea Lactee.',
    facts: ['Se apropie de noi cu 110 km/s', 'Se va ciocni cu Calea Lactee în ~4.5 miliarde ani', 'Conține ~1 trilion de stele']
  },
  {
    name: 'Galaxia Triunghi',
    emoji: '📐',
    type: 'Spirală',
    description: 'A treia cea mai mare galaxie din Grupul Local.',
    facts: ['Distanța: 3 milioane ani-lumină', 'Are o rată mare de formare a stelelor', 'Este a treia cea mai mare din Grupul Local']
  }
];

const PlaneteGalaxii = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(0);
  const [selectedGalaxy, setSelectedGalaxy] = useState(0);

  return (
    <div className="min-h-screen space-gradient py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Planete și Galaxii
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explorează minunile sistemului nostru solar și vastitatea galaxiilor din univers
          </p>
        </div>

        <Tabs defaultValue="planete" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="planete" className="text-lg">🪐 Planete</TabsTrigger>
            <TabsTrigger value="galaxii" className="text-lg">🌌 Galaxii</TabsTrigger>
          </TabsList>
          
          <TabsContent value="planete">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Planet Selection */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Alege o planetă:</h2>
                <div className="grid grid-cols-2 gap-3">
                  {planets.map((planet, index) => (
                    <Card 
                      key={planet.name}
                      className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                        selectedPlanet === index 
                          ? 'bg-primary/20 border-primary' 
                          : 'bg-card/50 border-border hover:bg-card/70'
                      }`}
                      onClick={() => setSelectedPlanet(index)}
                    >
                      <CardContent className="p-4 text-center">
                        <div className="text-3xl mb-2 animate-float">{planet.emoji}</div>
                        <h3 className="font-semibold text-foreground">{planet.name}</h3>
                        <p className="text-xs text-muted-foreground">{planet.distance}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Planet Details */}
              <div>
                <Card className="bg-card/50 border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-foreground">
                      <span className="text-4xl animate-rotate-slow">{planets[selectedPlanet].emoji}</span>
                      <div>
                        <h3 className="text-2xl">{planets[selectedPlanet].name}</h3>
                        <Badge variant="outline">{planets[selectedPlanet].distance}</Badge>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{planets[selectedPlanet].description}</p>
                    <h4 className="font-semibold mb-2 text-foreground">Fapte interesante:</h4>
                    <ul className="space-y-2">
                      {planets[selectedPlanet].facts.map((fact, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          {fact}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="galaxii">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Galaxy Selection */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Alege o galaxie:</h2>
                <div className="space-y-3">
                  {galaxies.map((galaxy, index) => (
                    <Card 
                      key={galaxy.name}
                      className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                        selectedGalaxy === index 
                          ? 'bg-primary/20 border-primary' 
                          : 'bg-card/50 border-border hover:bg-card/70'
                      }`}
                      onClick={() => setSelectedGalaxy(index)}
                    >
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className="text-3xl animate-float">{galaxy.emoji}</div>
                        <div>
                          <h3 className="font-semibold text-foreground">{galaxy.name}</h3>
                          <Badge variant="secondary">{galaxy.type}</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Galaxy Details */}
              <div>
                <Card className="bg-card/50 border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-foreground">
                      <span className="text-4xl animate-rotate-slow">{galaxies[selectedGalaxy].emoji}</span>
                      <div>
                        <h3 className="text-2xl">{galaxies[selectedGalaxy].name}</h3>
                        <Badge variant="outline">{galaxies[selectedGalaxy].type}</Badge>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{galaxies[selectedGalaxy].description}</p>
                    <h4 className="font-semibold mb-2 text-foreground">Fapte interesante:</h4>
                    <ul className="space-y-2">
                      {galaxies[selectedGalaxy].facts.map((fact, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          {fact}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PlaneteGalaxii;
