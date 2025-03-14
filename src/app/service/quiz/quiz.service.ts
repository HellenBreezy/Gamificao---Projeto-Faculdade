import { Injectable } from '@angular/core';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  message: string;
  image?: string;
  level?: number;
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private questions: Question[] = [
    //nivel 1 - facil
    {
      question: 'Qual é a unidade de medida da força no Sistema Internacional de Unidades?',
      options: ['Newton (N)', 'Joule (J)', 'Watt (W)', 'Metro (m)'],
      correctAnswer: 'Newton (N)',
      message: 'A unidade de medida da força no SI é o Newton (N).',
      level: 1
    },
    {
      question: 'Qual é o estado físico da matéria que tem volume e forma definidos?',
      options: ['Sólido', 'Líquido', 'Gasoso', 'Plasma'],
      correctAnswer: 'Sólido',
      message: 'O estado sólido possui forma e volume definidos.',
      level: 1
    },
    {
      question: 'Qual é a energia que um objeto possui devido à sua posição ou altura?',
      options: ['Energia cinética', 'Energia potencial', 'Energia térmica', 'Energia elétrica'],
      correctAnswer: 'Energia potencial',
      message: 'A energia potencial é armazenada devido à posição do objeto.',
      level: 1
    },
    {
      question: 'Qual é o dispositivo que converte energia elétrica em energia mecânica?',
      options: ['Gerador', 'Motor', 'Transformador', 'Resistência'],
      correctAnswer: 'Motor',
      message: 'Motores elétricos convertem energia elétrica em movimento mecânico.',
      level: 1
    },
    {
      question: 'Qual é a velocidade de um objeto que se move em linha reta e com velocidade constante?',
      options: ['Aceleração', 'Velocidade escalar', 'Velocidade vetorial', 'Deslocamento'],
      correctAnswer: 'Velocidade escalar',
      message: 'A velocidade escalar mede a rapidez com que um objeto se move.',
      level: 1
    },
    {
      question: 'Qual é a força que atua entre dois objetos com cargas elétricas opostas?',
      options: ['Força gravitacional', 'Força eletromagnética', 'Força de atrito', 'Força normal'],
      correctAnswer: 'Força eletromagnética',
      message: 'A força eletromagnética atrai cargas opostas e repele cargas iguais.',
      level: 1
    },
    {
      question: 'Qual é o princípio físico que afirma que a energia não pode ser criada nem destruída, apenas convertida de uma forma para outra?',
      options: ['Princípio da conservação da energia', 'Princípio da conservação da quantidade de movimento', 'Princípio da conservação do momento angular', 'Princípio da relatividade'],
      correctAnswer: 'Princípio da conservação da energia',
      message: 'A energia total de um sistema isolado permanece constante.',
      level: 1
    },
    {
      question: 'Qual é o dispositivo que converte energia mecânica em energia elétrica?',
      options: ['Gerador', 'Motor', 'Transformador', 'Resistência'],
      correctAnswer: 'Gerador',
      message: 'Geradores convertem energia mecânica em elétrica.',
      level: 1
    },


    //nivel 2 - medio
    {
      question: 'O que acontece com a resistência elétrica de um fio quando sua temperatura aumenta?',
      options: ['A resistência diminui', 'A resistência aumenta', 'A resistência permanece a mesma', 'A resistência se torna infinita'],
      correctAnswer: 'A resistência aumenta',
      message: 'Com o aumento da temperatura, os elétrons enfrentam mais dificuldade para se mover, aumentando a resistência.',
      level: 2
    },
    {
      question: 'Se a velocidade de um carro dobra, qual o impacto na sua energia cinética?',
      options: ['Ela dobra', 'Ela triplica', 'Ela quadruplica', 'Ela permanece a mesma'],
      correctAnswer: 'Ela quadruplica',
      message: 'A energia cinética é proporcional ao quadrado da velocidade (Ec = 1/2 m v²).',
      level: 2
    },
    {
      question: 'Um espelho côncavo pode formar uma imagem real e invertida quando?',
      options: ['O objeto está entre o foco e o espelho', 'O objeto está no centro de curvatura', 'O objeto está além do centro de curvatura', 'O objeto está no foco'],
      correctAnswer: 'O objeto está além do centro de curvatura',
      message: 'Quando o objeto está além do centro de curvatura, a imagem formada é real, invertida e menor que o objeto.',
      level: 2
    },
    {
      question: 'Se uma onda sonora passa de um meio para outro com maior densidade, o que acontece com sua velocidade?',
      options: ['Aumenta', 'Diminui', 'Permanece a mesma', 'Se torna zero'],
      correctAnswer: 'Aumenta',
      message: 'Ondas sonoras se propagam mais rápido em meios mais densos, pois há mais partículas para transmitir a vibração.',
      level: 2
    },
    {
      question: 'Qual dessas grandezas NÃO é uma grandeza vetorial?',
      options: ['Força', 'Aceleração', 'Temperatura', 'Velocidade'],
      correctAnswer: 'Temperatura',
      message: 'A temperatura não possui direção e sentido, sendo uma grandeza escalar.',
      level: 2
    },
    {
      question: 'Qual é a principal razão para um objeto flutuar na água?',
      options: ['Peso maior que o empuxo', 'Densidade menor que a da água', 'Área da superfície maior', 'Forma esférica'],
      correctAnswer: 'Densidade menor que a da água',
      message: 'Objetos com densidade menor que a da água deslocam um volume suficiente para gerar um empuxo maior que seu peso, flutuando.',
      level: 2
    },
    {
      question: 'O que acontece com a pressão dentro de um líquido à medida que a profundidade aumenta?',
      options: ['A pressão diminui', 'A pressão aumenta', 'A pressão permanece constante', 'A pressão se torna negativa'],
      correctAnswer: 'A pressão aumenta',
      message: 'A pressão dentro de um líquido cresce com a profundidade devido ao peso da coluna de líquido acima.',
      level: 2
    },
    {
      question: 'O que acontece com um gás ideal quando sua temperatura aumenta, mantendo o volume constante?',
      options: ['A pressão aumenta', 'A pressão diminui', 'O número de moléculas aumenta', 'A densidade diminui'],
      correctAnswer: 'A pressão aumenta',
      message: 'Pela lei dos gases ideais (PV = nRT), se o volume for constante e a temperatura aumentar, a pressão também aumenta.',
      level: 2
    },

    
    //nivel 3 - dificil
    {
      question: 'Um objeto de massa 5 kg é lançado com uma velocidade inicial de 20 m/s em um ângulo de 30° com relação à horizontal. Qual é a sua energia cinética após 2 s?',
      options: ['500 J', '750 J', '1000 J', '1250 J'],
      correctAnswer: '1000 J',
      message: 'A energia cinética é determinada pela fórmula (1/2)mv².',
      level: 3
    },
    {
      question: 'Qual é a força necessária para acelerar um objeto de massa 10 kg a uma aceleração de 5 m/s² em um plano inclinado com um ângulo de 30° com relação à horizontal?',
      options: ['50 N', '75 N', '100 N', '125 N'],
      correctAnswer: '75 N',
      message: 'A força necessária depende da segunda lei de Newton.',
      level: 3
    },
    {
      question: 'Um objeto se move em um círculo de raio 10 m com uma velocidade constante de 20 m/s. Qual é a sua aceleração centrípeta e a força centrípeta necessária para manter o objeto em movimento circular?',
      options: ['Aceleração: 40 m/s², Força: 400 N', 'Aceleração: 60 m/s², Força: 600 N', 'Aceleração: 80 m/s², Força: 800 N', 'Aceleração: 100 m/s², Força: 1000 N'],
      correctAnswer: 'Aceleração: 40 m/s², Força: 400 N',
      message: 'A aceleração centrípeta é dada por a = v²/r.',
      level: 3
    },
    {
      question: 'Qual é a energia potencial de um objeto de massa 10 kg a uma altura de 20 m em um campo gravitacional com uma aceleração da gravidade de 9,8 m/s²?',
      options: ['1960 J', '2450 J', '2940 J', '3430 J'],
      correctAnswer: '1960 J',
      message: 'A energia potencial gravitacional é dada por U = mgh.',
      level: 3
    },
    {
      question: 'Um objeto é submetido a uma força de 200 N durante 3 s. Qual é o trabalho realizado e a energia cinética do objeto após o tempo dado?',
      options: ['Trabalho: 600 J, Energia cinética: 600 J', 'Trabalho: 800 J, Energia cinética: 800 J', 'Trabalho: 1000 J, Energia cinética: 1000 J', 'Trabalho: 1200 J, Energia cinética: 1200 J'],
      correctAnswer: 'Trabalho: 600 J, Energia cinética: 600 J',
      message: 'O trabalho realizado é dado por W = F * d.',
      level: 3
    }
  ];

  private answers: string[] = [];

  getQuestions(): Question[] {
    return this.questions;
  }

  saveAnswer(index: number, answer: string): void {
    this.answers[index] = answer;
  }

  // Retorna as respostas
  getAnswers(): string[] {
    return this.answers;
  }

  addQuestion(newQuestion: Question): void {
    this.questions.push(newQuestion);
  }
}
