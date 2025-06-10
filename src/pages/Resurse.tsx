
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, BookOpen, Video, FileText, Users } from 'lucide-react';

const resources = [
  {
    category: 'Documentare Online',
    icon: BookOpen,
    items: [
      {
        title: 'NASA - Explorarea Spațiului',
        description: 'Site-ul oficial NASA cu informații complete despre misiuni spațiale, planete și descoperiri recente.',
        url: 'https://www.nasa.gov/',
        type: 'Site web'
      },
      {
        title: 'European Space Agency (ESA)',
        description: 'Agenția spațială europeană oferă resurse educaționale și știri despre explorarea spațiului.',
        url: 'https://www.esa.int/',
        type: 'Site web'
      },
      {
        title: 'National Geographic - Spațiu',
        description: 'Articole fascinante și fotografii spectaculoase despre univers și explorarea spațială.',
        url: 'https://www.nationalgeographic.com/science/space/',
        type: 'Articole'
      },
      {
        title: 'Hubble Space Telescope',
        description: 'Galerie cu cele mai spectaculoase imagini ale universului capturate de telescopul Hubble.',
        url: 'https://hubblesite.org/',
        type: 'Imagini'
      }
    ]
  },
  {
    category: 'Videoclipuri Educative',
    icon: Video,
    items: [
      {
        title: 'Crash Course Astronomy',
        description: 'Serie de videoclipuri educative despre astronomie, explicite și ușor de înțeles.',
        url: 'https://youtube.com/playlist?list=PL8dPuuaLjXtPAJr1ysd5yGIyiSFh0mKUq',
        type: 'YouTube'
      },
      {
        title: 'Kurzgesagt - In a Nutshell',
        description: 'Animații creative care explică concepte complexe despre spațiu și univers.',
        url: 'https://www.youtube.com/c/inanutshell',
        type: 'YouTube'
      },
      {
        title: 'SciShow Space',
        description: 'Știri și explicații despre cele mai recente descoperiri din spațiu.',
        url: 'https://www.youtube.com/c/SciShowSpace',
        type: 'YouTube'
      },
      {
        title: 'NOVA PBS',
        description: 'Documentare de calitate despre astronomie și explorarea spațiului.',
        url: 'https://www.pbs.org/nova/',
        type: 'Documentare'
      }
    ]
  },
  {
    category: 'Aplicații Interactive',
    icon: Users,
    items: [
      {
        title: 'Solar System Scope',
        description: 'Model 3D interactiv al sistemului solar care permite explorarea planetelor în timp real.',
        url: 'https://www.solarsystemscope.com/',
        type: 'Aplicație web'
      },
      {
        title: 'NASA Eyes on the Solar System',
        description: 'Aplicație 3D gratuită pentru explorarea sistemului solar și a misiunilor NASA.',
        url: 'https://eyes.nasa.gov/',
        type: 'Aplicație'
      },
      {
        title: 'Stellarium Web',
        description: 'Planetariu online gratuit care arată cerul așa cum îl vezi din orice locație.',
        url: 'https://stellarium-web.org/',
        type: 'Planetariu'
      }
    ]
  },
  {
    category: 'Cărți și Articole',
    icon: FileText,
    items: [
      {
        title: 'Cosmos - Carl Sagan',
        description: 'Una dintre cele mai influente cărți despre astronomie, accesibilă pentru toate vârstele.',
        url: '#',
        type: 'Carte'
      },
      {
        title: 'Astrophysics for People in a Hurry',
        description: 'Neil deGrasse Tyson explică universul într-un mod accesibil și captivant.',
        url: '#',
        type: 'Carte'
      },
      {
        title: 'Scientific American - Space',
        description: 'Articole științifice de calitate despre cele mai recente descoperiri.',
        url: 'https://www.scientificamerican.com/space/',
        type: 'Articole'
      }
    ]
  }
];

const Resurse = () => {
  return (
    <div className="min-h-screen space-gradient py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Resurse Utile
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descoperă o colecție selectată de resurse pentru a-ți aprofunda cunoștințele despre univers
          </p>
        </div>

        <div className="space-y-12">
          {resources.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="text-primary" size={32} />
                <h2 className="text-2xl font-bold text-foreground">{category.category}</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="bg-card/50 border-border hover:bg-card/70 transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </CardTitle>
                        <Badge variant="secondary" className="text-xs">
                          {item.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{item.description}</p>
                      
                      {item.url !== '#' ? (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
                          asChild
                        >
                          <a href={item.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2" size={16} />
                            Vizitează resursa
                          </a>
                        </Button>
                      ) : (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full"
                          disabled
                        >
                          <BookOpen className="mr-2" size={16} />
                          Disponibil în librării
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <Card className="bg-card/30 border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4 animate-float">🌌</div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Continuă explorarea!
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Universul este plin de minuni care așteaptă să fie descoperite. 
                Folosește aceste resurse pentru a-ți aprofunda cunoștințele și pentru a alimenta curiozitatea ta cosmică!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <a href="/" className="inline-flex items-center">
                    Întoarce-te acasă
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/test" className="inline-flex items-center">
                    Testează-ți cunoștințele
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Resurse;
