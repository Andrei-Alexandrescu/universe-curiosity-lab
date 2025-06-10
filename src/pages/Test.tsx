
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';

const questions = [
  {
    question: "Care este cea mai apropiată planetă de Soare?",
    options: ["Venus", "Mercur", "Marte", "Pământul"],
    correct: 1,
    explanation: "Mercur este cea mai apropiată planetă de Soare, la o distanță medie de 57.9 milioane km."
  },
  {
    question: "Câte luni are planeta Jupiter?",
    options: ["50+", "60+", "70+", "80+"],
    correct: 3,
    explanation: "Jupiter are peste 80 de luni confirmate, fiind planeta cu cele mai multe sateliți naturali."
  },
  {
    question: "Care este numele galaxiei noastre?",
    options: ["Andromeda", "Calea Lactee", "Galaxia Triunghi", "Centaurus A"],
    correct: 1,
    explanation: "Galaxia noastră se numește Calea Lactee și conține aproximativ 100-400 miliarde de stele."
  },
  {
    question: "Care planetă este cunoscută ca 'Planeta Roșie'?",
    options: ["Venus", "Jupiter", "Marte", "Saturn"],
    correct: 2,
    explanation: "Marte este cunoscută ca 'Planeta Roșie' din cauza oxidului de fier de pe suprafața sa."
  },
  {
    question: "Care este cea mai mare planetă din sistemul solar?",
    options: ["Saturn", "Jupiter", "Neptun", "Uranus"],
    correct: 1,
    explanation: "Jupiter este cea mai mare planetă din sistemul solar, cu o masă de peste două ori mai mare decât toate celelalte planete la un loc."
  }
];

const Test = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setShowExplanation(true);
  };

  const handleContinue = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setIsComplete(true);
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setAnswers([]);
    setShowResult(false);
    setShowExplanation(false);
    setIsComplete(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return { message: "Excelent! Ești un adevărat explorator cosmic! 🚀", emoji: "🌟" };
    if (percentage >= 60) return { message: "Foarte bine! Cunoștințele tale despre spațiu sunt impresionante! 🌙", emoji: "⭐" };
    if (percentage >= 40) return { message: "Bun! Mai ai câte ceva de învățat despre univers! 🪐", emoji: "🌍" };
    return { message: "Continuă să explorezi! Universul are multe secrete de dezvăluit! 🔭", emoji: "🚀" };
  };

  if (showResult) {
    const { message, emoji } = getScoreMessage();
    return (
      <div className="min-h-screen space-gradient py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-card/50 border-border">
            <CardHeader className="text-center">
              <div className="text-6xl mb-4 animate-float">{emoji}</div>
              <CardTitle className="text-3xl text-foreground">Testul s-a încheiat!</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="text-5xl font-bold text-primary">
                {score}/{questions.length}
              </div>
              <Progress value={(score / questions.length) * 100} className="w-full" />
              <p className="text-xl text-muted-foreground">{message}</p>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Rezultatele detaliate:</h3>
                {questions.map((q, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                    <span className="text-sm text-muted-foreground">Întrebarea {index + 1}</span>
                    {answers[index] === q.correct ? (
                      <CheckCircle className="text-green-500" size={20} />
                    ) : (
                      <XCircle className="text-red-500" size={20} />
                    )}
                  </div>
                ))}
              </div>

              <Button onClick={resetQuiz} size="lg" className="bg-primary hover:bg-primary/90">
                <RotateCcw className="mr-2" size={20} />
                Încearcă din nou
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen space-gradient py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Test Interactiv despre Spațiu
          </h1>
          <p className="text-muted-foreground">Testează-ți cunoștințele despre univers!</p>
        </div>

        <Card className="bg-card/50 border-border">
          <CardHeader>
            <div className="flex justify-between items-center">
              <Badge variant="outline">
                Întrebarea {currentQuestion + 1} din {questions.length}
              </Badge>
              <div className="text-sm text-muted-foreground">
                Scor: {score}/{currentQuestion + (showExplanation ? 1 : 0)}
              </div>
            </div>
            <Progress value={((currentQuestion + (showExplanation ? 1 : 0)) / questions.length) * 100} className="w-full" />
          </CardHeader>
          
          <CardContent className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">
              {questions[currentQuestion].question}
            </h2>

            {!showExplanation ? (
              <>
                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      variant={selectedAnswer === index ? "default" : "outline"}
                      className={`w-full text-left justify-start h-auto p-4 ${
                        selectedAnswer === index 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted/20 hover:bg-muted/40'
                      }`}
                      onClick={() => handleAnswerSelect(index)}
                    >
                      <span className="mr-3 text-sm bg-background/20 rounded-full w-6 h-6 flex items-center justify-center">
                        {String.fromCharCode(65 + index)}
                      </span>
                      {option}
                    </Button>
                  ))}
                </div>

                <Button 
                  onClick={handleNextQuestion}
                  disabled={selectedAnswer === null}
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  {currentQuestion === questions.length - 1 ? 'Finalizează testul' : 'Următoarea întrebare'}
                </Button>
              </>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  {selectedAnswer === questions[currentQuestion].correct ? (
                    <CheckCircle className="text-green-500" size={24} />
                  ) : (
                    <XCircle className="text-red-500" size={24} />
                  )}
                  <span className="text-lg font-semibold">
                    {selectedAnswer === questions[currentQuestion].correct ? 'Corect!' : 'Incorect!'}
                  </span>
                </div>

                <div className="p-4 bg-muted/20 rounded-lg">
                  <p className="text-muted-foreground">
                    <strong>Explicație:</strong> {questions[currentQuestion].explanation}
                  </p>
                  {selectedAnswer !== questions[currentQuestion].correct && (
                    <p className="mt-2 text-sm text-green-600">
                      <strong>Răspunsul corect:</strong> {questions[currentQuestion].options[questions[currentQuestion].correct]}
                    </p>
                  )}
                </div>

                <Button 
                  onClick={handleContinue}
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  {currentQuestion === questions.length - 1 ? 'Vezi rezultatele' : 'Continuă'}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Test;
