import React from 'react'
import { Menu, Sun, Moon, User, Heart } from 'lucide-react'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="logo">
            <Heart className="logo-icon" />
            <span className="logo-text">Senhor Jesus</span>
          </div>
        </div>
        
        <nav className="header-nav">
          <button className="nav-button">
            <User size={20} />
            <span>Minha Conta</span>
          </button>
          <button className="nav-button">
            <Sun size={20} />
          </button>
          <button className="nav-button mobile-menu">
            <Menu size={20} />
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header