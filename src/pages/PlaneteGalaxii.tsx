
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PlaneteGalaxii = () => {
  const planete = [
    {
      nume: "Mercur",
      distanta: "57.9 milioane km",
      descriere: "Cea mai apropiată planetă de Soare, cu temperaturi extreme.",
      emoji: "☿️",
      culoare: "text-orange-400"
    },
    {
      nume: "Venus",
      distanta: "108.2 milioane km", 
      descriere: "Planeta cea mai caldă din sistemul solar.",
      emoji: "♀️",
      culoare: "text-yellow-400"
    },
    {
      nume: "Pământ",
      distanta: "149.6 milioane km",
      descriere: "Casa noastră, singura planetă cunoscută cu viață.",
      emoji: "🌍",
      culoare: "text-blue-400"
    },
    {
      nume: "Marte",
      distanta: "227.9 milioane km",
      descriere: "Planeta roșie, următoarea destinație a omenirii.",
      emoji: "♂️", 
      culoare: "text-red-400"
    }
  ];

  const galaxii = [
    {
      nume: "Calea Lactee",
      tip: "Spirală",
      descriere: "Galaxia noastră, cu peste 100 miliarde de stele.",
      emoji: "🌌"
    },
    {
      nume: "Andromeda",
      tip: "Spirală",
      descriere: "Cea mai apropiată galaxie mare de noi.",
      emoji: "🌠"
    }
  ];

  return (
    <div className="min-h-screen space-gradient py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Planete și Galaxii
        </h1>

        {/* Planete Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Planetele Sistemului Solar</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {planete.map((planeta) => (
              <Card key={planeta.nume} className="bg-card/50 border-border hover:bg-card/70 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-3xl">{planeta.emoji}</span>
                    <span className={planeta.culoare}>{planeta.nume}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="mb-3">{planeta.distanta} de Soare</Badge>
                  <p className="text-muted-foreground">{planeta.descriere}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Galaxii Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Galaxii Fascinante</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {galaxii.map((galaxia) => (
              <Card key={galaxia.nume} className="bg-card/50 border-border hover:bg-card/70 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-3xl">{galaxia.emoji}</span>
                    <span className="text-primary">{galaxia.nume}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="mb-3">Tip: {galaxia.tip}</Badge>
                  <p className="text-muted-foreground">{galaxia.descriere}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PlaneteGalaxii;
