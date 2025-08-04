import React, { useState } from 'react'
import { Heart, Send, BookOpen, Clock } from 'lucide-react'

const PrayerSection = () => {
  const [prayer, setPrayer] = useState('')
  const [prayers, setPrayers] = useState([
    {
      id: 1,
      title: "Gratidão",
      text: "Senhor, obrigado por todas as bênçãos em minha vida.",
      date: "Hoje"
    },
    {
      id: 2,
      title: "Proteção",
      text: "Pai celestial, proteja minha família e me dê forças para os desafios.",
      date: "Ontem"
    }
  ])

  const predefinedPrayers = [
    {
      title: "Oração do Pai Nosso",
      text: "Pai nosso, que estás nos céus, santificado seja o teu nome. Venha o teu reino. Seja feita a tua vontade, tanto na terra como no céu..."
    },
    {
      title: "Oração de Gratidão",
      text: "Senhor, obrigado por este novo dia, pelas oportunidades que me dás e por tua constante presença em minha vida..."
    },
    {
      title: "Oração de Proteção",
      text: "Deus Todo-Poderoso, protege-me e à minha família. Guarda nossos passos e abençoa nossos caminhos..."
    }
  ]

  const handleSubmitPrayer = (e) => {
    e.preventDefault()
    if (prayer.trim()) {
      const newPrayer = {
        id: Date.now(),
        title: "Nova Oração",
        text: prayer,
        date: "Agora"
      }
      setPrayers([newPrayer, ...prayers])
      setPrayer('')
    }
  }

  return (
    <section className="section-card">
      <h2 className="section-title">
        <Heart size={32} />
        Momento de Oração
      </h2>
      <p className="section-subtitle">
        Comunique-se com Deus através da oração
      </p>

      <form onSubmit={handleSubmitPrayer} className="prayer-form">
        <div className="form-group">
          <label className="form-label">Sua Oração</label>
          <textarea
            className="form-textarea"
            value={prayer}
            onChange={(e) => setPrayer(e.target.value)}
            placeholder="Escreva sua oração aqui..."
            rows={4}
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          <Send size={18} />
          Enviar Oração
        </button>
      </form>

      <div className="predefined-prayers">
        <h3 className="quick-access-title">Orações Sugeridas</h3>
        <div className="prayer-suggestions">
          {predefinedPrayers.map((predefined, index) => (
            <button
              key={index}
              className="prayer-suggestion"
              onClick={() => setPrayer(predefined.text)}
            >
              <BookOpen size={16} />
              {predefined.title}
            </button>
          ))}
        </div>
      </div>

      <div className="recent-prayers">
        <h3 className="quick-access-title">Orações Recentes</h3>
        <div className="prayers-list">
          {prayers.map((p) => (
            <div key={p.id} className="prayer-item">
              <div className="prayer-header">
                <span className="prayer-title">{p.title}</span>
                <span className="prayer-date">
                  <Clock size={14} />
                  {p.date}
                </span>
              </div>
              <p className="prayer-text">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PrayerSection