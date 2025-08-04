import React, { useState } from 'react'
import { BookOpen, Search, ChevronRight, RefreshCw } from 'lucide-react'

const BibliaSection = () => {
  const [currentVerse, setCurrentVerse] = useState({
    text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
    reference: "João 3:16"
  })

  const verses = [
    {
      text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
      reference: "João 3:16"
    },
    {
      text: "Posso todas as coisas naquele que me fortalece.",
      reference: "Filipenses 4:13"
    },
    {
      text: "O Senhor é o meu pastor; nada me faltará.",
      reference: "Salmos 23:1"
    },
    {
      text: "Entrega o teu caminho ao Senhor; confia nele, e ele o fará.",
      reference: "Salmos 37:5"
    },
    {
      text: "Jesus disse-lhe: Eu sou o caminho, e a verdade, e a vida. Ninguém vem ao Pai senão por mim.",
      reference: "João 14:6"
    }
  ]

  const getRandomVerse = () => {
    const randomIndex = Math.floor(Math.random() * verses.length)
    setCurrentVerse(verses[randomIndex])
  }

  return (
    <section className="section-card">
      <h2 className="section-title">
        <BookOpen size={32} />
        Palavra de Deus
      </h2>
      <p className="section-subtitle">
        Encontre inspiração e sabedoria nas Sagradas Escrituras
      </p>
      
      <div className="bible-verse-container">
        <div className="text-verse">
          "{currentVerse.text}"
        </div>
        <div className="text-reference">
          — {currentVerse.reference}
        </div>
      </div>

      <div className="bible-actions">
        <button className="btn btn-primary" onClick={getRandomVerse}>
          <RefreshCw size={18} />
          Novo Versículo
        </button>
        <button className="btn btn-outline">
          <Search size={18} />
          Buscar na Bíblia
        </button>
      </div>

      <div className="bible-quick-access">
        <h3 className="quick-access-title">Acesso Rápido</h3>
        <div className="quick-books">
          <button className="quick-book">
            Salmos
            <ChevronRight size={16} />
          </button>
          <button className="quick-book">
            Provérbios
            <ChevronRight size={16} />
          </button>
          <button className="quick-book">
            João
            <ChevronRight size={16} />
          </button>
          <button className="quick-book">
            Filipenses
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default BibliaSection