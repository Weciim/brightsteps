import React, { useState, useRef, useEffect } from "react";
import HighlightText from "../core/HomePage/HighlightText";

const ChatbotComponent = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Bonjour ! Je suis EduBot, votre assistant d'apprentissage intelligent. Comment puis-je vous aider aujourd'hui ?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [isSearchingWeb, setIsSearchingWeb] = useState(false);
  const messagesEndRef = useRef(null);
  
  const quickResponses = [
    { id: 1, text: "Résumer un cours", category: "resume" },
    { id: 2, text: "Expliquer un concept", category: "explain" },
    { id: 3, text: "Créer des questions", category: "quiz" },
    { id: 4, text: "Trouver des ressources", category: "resources" },
  ];

  // Simulated educational responses based on input
  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    if (input.includes("bonjour") || input.includes("salut")) {
      return "Bonjour ! Comment puis-je vous aider dans vos études aujourd'hui ?";
    } else if (input.includes("résumer") || input.includes("résumé")) {
      return `Bien sûr, je peux résumer votre cours. Voici un résumé structuré basé sur les points clés :

1. **Introduction au sujet**
   - Contexte historique et importance
   - Théories fondamentales et évolution

2. **Concepts principaux**
   - Définitions et terminologie essentielle
   - Relations entre les concepts clés
   
3. **Applications pratiques**
   - Méthodes d'implémentation
   - Études de cas pertinentes

4. **Conclusion**
   - Synthèse des points importants
   - Perspectives futures et questions ouvertes

Souhaitez-vous approfondir une section particulière ?`;
    } else if (input.includes("expliquer") || input.includes("concept")) {
      return `Voici une explication détaillée de ce concept :

**Définition fondamentale :**
Ce concept représente un principe fondamental dans son domaine, caractérisé par ses propriétés distinctives et son rôle dans l'architecture théorique.

**Origine et développement :**
Développé initialement en réponse aux limitations des approches précédentes, ce concept a évolué à travers plusieurs phases d'affinement théorique.

**Mécanismes sous-jacents :**
Le fonctionnement repose sur l'interaction de plusieurs composantes :
- L'élément structurel principal
- Les processus dynamiques
- Les systèmes de régulation

**Applications concrètes :**
Ce concept trouve des applications dans divers contextes, notamment dans la résolution de problèmes complexes et l'optimisation des systèmes.

Avez-vous des questions spécifiques sur un aspect particulier ?`;
    } else if (input.includes("quiz") || input.includes("question") || input.includes("exercice")) {
      return `Voici quelques questions pour tester votre compréhension :

1. **Question de compréhension :**
   Comment les principes fondamentaux s'appliquent-ils dans un contexte réel ?
   
2. **Question d'analyse :**
   Comparez et contrastez les deux approches principales discutées dans le cours.
   
3. **Question de synthèse :**
   Proposez une solution intégrée qui combine les différentes méthodologies.
   
4. **Question d'évaluation :**
   Évaluez l'efficacité de la théorie X dans la résolution du problème Y.
   
5. **Question d'application :**
   Comment appliqueriez-vous ce concept pour améliorer un système existant ?

Souhaitez-vous des indices ou des explications pour l'une de ces questions ?`;
    } else if (input.includes("ressource") || input.includes("référence")) {
      return `J'ai trouvé plusieurs ressources pertinentes pour approfondir ce sujet :

**Articles académiques :**
- "Avancées récentes dans le domaine" (Journal of Advanced Studies, 2024)
- "Analyse comparative des méthodologies" (International Review, 2023)

**Livres de référence :**
- "Principes fondamentaux et applications" par Prof. Martin, 2022
- "Guide pratique des concepts avancés" par Dr. Leclerc, 2023

**Ressources en ligne :**
- Cours en ligne sur la plateforme EduLearn (niveau avancé)
- Série de vidéos explicatives par l'Université de Montréal

**Communautés d'apprentissage :**
- Forum ÉduSciences - section spécialisée
- Groupe d'étude collaboratif sur ResearchNet

Souhaitez-vous des détails supplémentaires sur l'une de ces ressources ?`;
    } else if (input.includes("merci")) {
      return "Je vous en prie ! N'hésitez pas si vous avez d'autres questions. Bon apprentissage !";
    } else {
      // Simulating a more complex research-based response
      return `Après analyse de votre question, voici ce que je peux vous proposer :

**Explication du concept :**
Le sujet que vous abordez touche à plusieurs domaines interconnectés. Les recherches récentes montrent une évolution significative dans la compréhension théorique.

**Points clés à retenir :**
- L'aspect fondamental repose sur le principe de [concept principal]
- Les applications récentes démontrent une efficacité accrue dans [contexte spécifique]
- Les limitations actuelles concernent principalement [facteurs limitants]

**Perspective comparative :**
Comparé aux approches traditionnelles, ce modèle présente des avantages distincts en termes de flexibilité et d'adaptabilité.

**Sources d'information :**
Cette analyse s'appuie sur des publications récentes dans le domaine et des synthèses de recherche actualisées.

Avez-vous une question de suivi ou souhaitez-vous explorer un aspect particulier plus en profondeur ?`;
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages([...messages, userMessage]);
    setInputValue("");
    
    // Simulate web search/research
    setIsTyping(true);
    setIsSearchingWeb(true);
    
    // Simulate bot response after a delay to mimic research
    setTimeout(() => {
      setIsSearchingWeb(false);
      
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: getBotResponse(inputValue),
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
      }, 1000);
    }, 2500);
  };

  const handleQuickResponse = (response) => {
    setSelectedTopic(response.category);
    
    // Add user quick response
    const userMessage = {
      id: messages.length + 1,
      text: response.text,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages([...messages, userMessage]);
    
    // Simulate web search/research
    setIsTyping(true);
    setIsSearchingWeb(true);
    
    // Simulate bot response after a delay
    setTimeout(() => {
      setIsSearchingWeb(false);
      
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: getBotResponse(response.text),
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
      }, 1000);
    }, 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Format timestamp
  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="bg-richblack-800 rounded-xl border border-richblack-700 shadow-lg overflow-hidden max-w-4xl w-full">
      {/* Chat Header */}
      <div className="text-center p-4 border-b border-richblack-700">
        <h2 className="text-2xl font-bold mb-2">
          <HighlightText text={"EduBot"} /> 
        </h2>
        <p className="text-richblack-300 text-sm">
          Posez des questions, demandez des résumés de cours, ou explorez des concepts
        </p>
      </div>

      {/* Chat Messages */}
      <div className="h-96 md:h-[450px] overflow-y-auto p-4 md:p-6">
        <div className="space-y-4">
          {messages.map((message) => (
            <div 
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[90%] md:max-w-[80%] rounded-2xl p-3 md:p-4 ${
                  message.sender === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none'
                    : 'bg-richblack-700 text-white rounded-tl-none'
                }`}
              >
                <p className="text-sm md:text-base whitespace-pre-line">{message.text}</p>
                <p className={`text-xs mt-1 ${
                  message.sender === 'user' ? 'text-blue-200' : 'text-richblack-400'
                }`}>
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-richblack-700 text-white rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                {isSearchingWeb ? (
                  <div className="flex flex-col space-y-2">
                    <div className="text-xs text-richblack-300">Recherche en cours...</div>
                    <div className="flex items-center space-x-2">
                      <svg className="animate-spin h-4 w-4 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Analyse des sources pertinentes</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex space-x-2 items-center">
                    <div className="w-2 h-2 rounded-full bg-richblack-300 animate-bounce" 
                         style={{animationDelay: "0ms"}}></div>
                    <div className="w-2 h-2 rounded-full bg-richblack-300 animate-bounce"
                         style={{animationDelay: "150ms"}}></div>
                    <div className="w-2 h-2 rounded-full bg-richblack-300 animate-bounce"
                         style={{animationDelay: "300ms"}}></div>
                  </div>
                )}
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* Quick Response Options */}
      <div className="bg-richblack-900/50 p-4 border-t border-richblack-700">
        <h3 className="text-sm text-richblack-300 mb-2">Suggestions :</h3>
        <div className="flex flex-wrap gap-2">
          {quickResponses.map((response) => (
            <button
              key={response.id}
              onClick={() => handleQuickResponse(response)}
              className={`px-3 py-1.5 text-sm rounded-full transition-all ${
                selectedTopic === response.category
                  ? 'bg-blue-600 text-white'
                  : 'bg-richblack-700 text-richblack-100 hover:bg-richblack-600'
              }`}
            >
              {response.text}
            </button>
          ))}
        </div>
      </div>
      
      {/* Chat Input */}
      <div className="flex items-center p-4 border-t border-richblack-700">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Posez une question ou demandez un résumé..."
          className="flex-grow bg-richblack-700 text-white rounded-l-lg px-4 py-3 focus:outline-none"
        />
        <button
          onClick={handleSendMessage}
          disabled={!inputValue.trim()}
          className={`px-6 py-3 rounded-r-lg transition-colors ${
            inputValue.trim()
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-richblack-600 text-richblack-400 cursor-not-allowed'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatbotComponent;