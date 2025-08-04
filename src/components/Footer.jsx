import React from 'react'
import { Heart, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <Heart className="footer-logo-icon" />
            <span className="footer-logo-text">Senhor Jesus</span>
          </div>
          <p className="footer-description">
            Um espaço sagrado para comunhão com Deus através da Sua Palavra e da oração.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Recursos</h4>
          <ul className="footer-links">
            <li><a href="#biblia">Leitura da Bíblia</a></li>
            <li><a href="#oracoes">Orações</a></li>
            <li><a href="#devocional">Devocional Diário</a></li>
            <li><a href="#estudos">Estudos Bíblicos</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Comunidade</h4>
          <ul className="footer-links">
            <li><a href="#grupos">Grupos de Oração</a></li>
            <li><a href="#testemunhos">Testemunhos</a></li>
            <li><a href="#eventos">Eventos</a></li>
            <li><a href="#contato">Fale Conosco</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Contato</h4>
          <div className="footer-contact">
            <div className="contact-item">
              <Mail size={16} />
              <span>contato@senhorjesus.com</span>
            </div>
            <div className="contact-item">
              <Phone size={16} />
              <span>(11) 9999-9999</span>
            </div>
            <div className="contact-item">
              <MapPin size={16} />
              <span>São Paulo, SP</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Senhor Jesus. Todos os direitos reservados.</p>
        <p className="footer-verse">
          "E tudo quanto fizerdes por palavras ou por obras, fazei-o em nome do Senhor Jesus" - Colossenses 3:17
        </p>
      </div>
    </footer>
  )
}

export default Footer