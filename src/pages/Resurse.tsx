
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Youtube, BookOpen, Globe, Telescope } from 'lucide-react';

const Resurse = () => {
  const resurse = {
    documentare: [
      {
        titlu: "NASA - Explorarea sistemului solar",
        descriere: "Ghid oficial NASA despre planetele și misiunile spațiale",
        link: "https://solarsystem.nasa.gov/",
        icon: Telescope
      },
      {
        titlu: "ESA - Agenția Spațială Europeană",
        descriere: "Resurse educaționale și noutăți despre misiunile europene",
        link: "https://www.esa.int/kids",
        icon: Globe
      },
      {
        titlu: "National Geographic - Spațiul",
        descriere: "Articole și fotografii despre univers și explorarea spațială",
        link: "https://www.nationalgeographic.com/science/space/",
        icon: BookOpen
      }
    ],
    videoclipuri: [
      {
        titlu: "Crash Course Astronomy",
        descriere: "Serie educațională completă despre astronomie",
        link: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtPAJr1ysd5yGIyiSFuh0mIL",
        canal: "Crash Course"
      },
      {
        titlu: "Kurzgesagt - In a Nutshell",
        descriere: "Videoclipuri animate despre spațiu și știință",
        link: "https://www.youtube.com/c/inanutshell",
        canal: "Kurzgesagt"
      },
      {
        titlu: "NASA's Goddard",
        descriere: "Videoclipuri oficiale NASA despre descoperiri și misiuni",
        link: "https://www.youtube.com/user/NASAgoddard",
        canal: "NASA Goddard"
      }
    ],
    aplicatii: [
      {
        titlu: "Star Walk 2",
        descriere: "Hartă interactivă a cerului pentru identificarea constelațiilor",
        platforma: "iOS/Android"
      },
      {
        titlu: "Solar Walk",
        descriere: "Explorare 3D a sistemului solar",
        platforma: "iOS/Android/Web"
      },
      {
        titlu: "SkySafari",
        descriere: "Planetariu digital pentru observarea cerului",
        platforma: "iOS/Android"
      }
    ]
  };

  return (
    <div className="min-h-screen space-gradient py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Resurse Utile
          </h1>
          <p className="text-muted-foreground">
            Descoperă mai multe despre univers prin aceste resurse educaționale
          </p>
        </div>

        {/* Documentare */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-2">
            <BookOpen className="text-primary" />
            Documentare și Articole
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {resurse.documentare.map((resursa, index) => {
              const IconComponent = resursa.icon;
              return (
                <Card key={index} className="bg-card/50 border-border hover:bg-card/70 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <IconComponent className="text-primary" size={20} />
                      {resursa.titlu}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {resursa.descriere}
                    </p>
                    <Button 
                      asChild 
                      variant="outline" 
                      size="sm"
                      className="w-full"
                    >
                      <a 
                        href={resursa.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        Vizitează
                        <ExternalLink size={14} />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Videoclipuri */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-2">
            <Youtube className="text-primary" />
            Videoclipuri Educaționale
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {resurse.videoclipuri.map((video, index) => (
              <Card key={index} className="bg-card/50 border-border hover:bg-card/70 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg">{video.titlu}</CardTitle>
                  <p className="text-sm text-accent">{video.canal}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {video.descriere}
                  </p>
                  <Button 
                    asChild 
                    variant="outline" 
                    size="sm"
                    className="w-full"
                  >
                    <a 
                      href={video.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Youtube size={14} />
                      Vezi pe YouTube
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Aplicații */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-2">
            <Globe className="text-primary" />
            Aplicații Recomandate
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {resurse.aplicatii.map((app, index) => (
              <Card key={index} className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle className="text-lg">{app.titlu}</CardTitle>
                  <p className="text-sm text-accent">{app.platforma}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {app.descriere}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="bg-card/30 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                🚀 Continuă călătoria de învățare!
              </h3>
              <p className="text-muted-foreground mb-4">
                Universul este plin de mistere care așteaptă să fie descoperite. 
                Folosește aceste resurse pentru a-ți aprofunda cunoștințele și a deveni un adevărat explorator cosmic!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Resurse;
