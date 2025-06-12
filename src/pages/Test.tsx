
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const Test = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  const questions = [
    {
      question: "Care este cea mai mare planetă din sistemul nostru solar?",
      options: ["Jupiter", "Saturn", "Neptun", "Uranus"],
      correct: "Jupiter"
    },
    {
      question: "Cât timp îi ia Pământului să se învârtă o dată în jurul Soarelui?",
      options: ["365 zile", "1 an", "12 luni", "Toate de mai sus"],
      correct: "Toate de mai sus"
    },
    {
      question: "Care este cea mai apropiată stea de Pământ?",
      options: ["Sirius", "Proxima Centauri", "Soarele", "Vega"],
      correct: "Soarele"
    },
    {
      question: "Ce galaxie este cea mai apropiată de Calea Lactee?",
      options: ["Andromeda", "Triangulum", "Magellanic Clouds", "Whirlpool"],
      correct: "Andromeda"
    },
    {
      question: "Câte luni are planeta Jupiter?",
      options: ["12", "63", "79+", "45"],
      correct: "79+"
    }
  ];

  const handleAnswer = () => {
    const newAnswers = [...userAnswers, selectedAnswer];
    setUserAnswers(newAnswers);
    
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
    } else {
      setShowResult(true);
    }
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setScore(0);
    setShowResult(false);
    setUserAnswers([]);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return "Excelent! Ești un adevărat explorator cosmic! 🚀";
    if (percentage >= 60) return "Foarte bine! Cunoștințele tale despre spațiu sunt impresionante! ⭐";
    if (percentage >= 40) return "Bun început! Mai ai de învățat despre univers! 🌙";
    return "Nu te descuraja! Universul are multe secrete de descoperit! 🌟";
  };

  if (showResult) {
    return (
      <div className="min-h-screen space-gradient py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-card/50 border-border">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-primary">
                🎉 Test Completat!
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-6xl mb-4">
                {score === questions.length ? "🏆" : score >= questions.length * 0.6 ? "⭐" : "🌟"}
              </div>
              <p className="text-2xl mb-4 text-foreground">
                Scorul tău: {score}/{questions.length}
              </p>
              <p className="text-lg mb-6 text-muted-foreground">
                {getScoreMessage()}
              </p>
              <Button onClick={resetTest} className="bg-primary hover:bg-primary/90">
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
        <Card className="bg-card/50 border-border">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span className="text-primary">Test Interactiv - Spațiul Cosmic</span>
              <span className="text-sm text-muted-foreground">
                {currentQuestion + 1}/{questions.length}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4 text-foreground">
                {questions[currentQuestion].question}
              </h3>
              
              <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
                {questions[currentQuestion].options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="text-muted-foreground">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <Button 
              onClick={handleAnswer} 
              disabled={!selectedAnswer}
              className="w-full bg-primary hover:bg-primary/90"
            >
              {currentQuestion === questions.length - 1 ? 'Finalizează Testul' : 'Următoarea Întrebare'}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Test;
