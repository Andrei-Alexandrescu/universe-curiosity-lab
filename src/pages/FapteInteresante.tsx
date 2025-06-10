
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Shuffle } from 'lucide-react';

const facts = [
  {
    emoji: '🌌',
    title: 'Universul în expansiune',
    fact: 'Universul se extinde cu o viteză de aproximativ 70 km/s pentru fiecare megaparsec. Aceasta înseamnă că galaxiile îndepărtate se îndepărtează de noi cu viteze incredibile!'
  },
  {
    emoji: '⭐',
    title: 'Stelele neutroni',
    fact: 'O linguriță de material dintr-o stea neutron ar cântări aproximativ 6 miliarde de tone pe Pământ. Aceste stele sunt atât de dense încât un centimetru cub ar avea masa unui munte!'
  },
  {
    emoji: '🌙',
    title: 'Luna se îndepărtează',
    fact: 'Luna se îndepărtează de Pământ cu aproximativ 3.8 cm în fiecare an. În trecut, Luna era mult mai aproape și zilele pe Pământ erau mai scurte!'
  },
  {
    emoji: '🪐',
    title: 'Inelele lui Saturn',
    fact: 'Deși par solide din depărtare, inelele lui Saturn sunt formate din miliarde de particule de gheață și rocă, de la dimensiunea unor fulgi de zăpadă până la case întregi!'
  },
  {
    emoji: '☀️',
    title: 'Soarele nostru',
    fact: 'Soarele conține 99.86% din masa întregului sistem solar. În fiecare secundă, Soarele convertește 600 de milioane de tone de hidrogen în heliu!'
  },
  {
    emoji: '🌍',
    title: 'Viteza Pământului',
    fact: 'Pământul călătorește prin spațiu cu o viteză de aproximativ 30 km/s în jurul Soarelui. În același timp, întregul sistem solar se mișcă prin galaxie cu 250 km/s!'
  },
  {
    emoji: '🌑',
    title: 'Găurile negre',
    fact: 'Gaura neagră din centrul galaxiei noastre, Sagittarius A*, are o masă de 4 milioane de ori mai mare decât Soarele și este la 26.000 de ani-lumină distanță de noi!'
  },
  {
    emoji: '🚀',
    title: 'Viteza luminii',
    fact: 'Lumina călătorește cu 299.792.458 metri pe secundă. La această viteză, poți face înconjurul Pământului de 7.5 ori într-o singură secundă!'
  },
  {
    emoji: '❄️',
    title: 'Spațiul cosmic',
    fact: 'Temperatura medie a universului este de -270.42°C, doar cu 2.73 grade deasupra zeroului absolut. Aceasta este temperatura radiației cosmice de fond!'
  },
  {
    emoji: '🌟',
    title: 'Formarea stelelor',
    fact: 'Toate elementele grele din corpul tău (carbon, oxigen, azot) au fost create în interiorul stelelor. Suntem literalmente făcuți din "praf de stele"!'
  }
];

const FapteInteresante = () => {
  const [currentFact, setCurrentFact] = useState(0);

  const nextFact = () => {
    setCurrentFact((prev) => (prev + 1) % facts.length);
  };

  const prevFact = () => {
    setCurrentFact((prev) => (prev - 1 + facts.length) % facts.length);
  };

  const randomFact = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * facts.length);
    } while (newIndex === currentFact && facts.length > 1);
    setCurrentFact(newIndex);
  };

  return (
    <div className="min-h-screen space-gradient py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Știați că...?
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descoperă fapte uimitoare și curiosități fascinante despre univers
          </p>
        </div>

        {/* Main Fact Card */}
        <div className="relative mb-8">
          <Card className="bg-card/50 border-border min-h-[400px] flex flex-col justify-between">
            <CardHeader className="text-center pb-4">
              <div className="text-6xl mb-4 animate-float">
                {facts[currentFact].emoji}
              </div>
              <CardTitle className="text-2xl md:text-3xl text-foreground">
                {facts[currentFact].title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex items-center justify-center px-6 md:px-12">
              <p className="text-lg md:text-xl text-muted-foreground text-center leading-relaxed">
                {facts[currentFact].fact}
              </p>
            </CardContent>
            <div className="p-6 text-center">
              <div className="text-sm text-muted-foreground">
                {currentFact + 1} din {facts.length}
              </div>
            </div>
          </Card>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-card/80 hover:bg-card"
            onClick={prevFact}
          >
            <ChevronLeft size={20} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-card/80 hover:bg-card"
            onClick={nextFact}
          >
            <ChevronRight size={20} />
          </Button>
        </div>

        {/* Control Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <Button onClick={prevFact} variant="outline">
            <ChevronLeft className="mr-2" size={16} />
            Anterior
          </Button>
          <Button onClick={randomFact} className="bg-accent hover:bg-accent/90">
            <Shuffle className="mr-2" size={16} />
            Aleatoriu
          </Button>
          <Button onClick={nextFact} variant="outline">
            Următor
            <ChevronRight className="ml-2" size={16} />
          </Button>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {facts.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentFact
                  ? 'bg-primary'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              onClick={() => setCurrentFact(index)}
            />
          ))}
        </div>

        {/* Quick Facts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {facts.slice(0, 6).map((fact, index) => (
            <Card
              key={index}
              className={`bg-card/30 border-border cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-card/50 ${
                index === currentFact ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setCurrentFact(index)}
            >
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">{fact.emoji}</div>
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  {fact.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {fact.fact.substring(0, 80)}...
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FapteInteresante;
