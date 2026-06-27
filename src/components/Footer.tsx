import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="site-footer border-t border-[var(--glass-border)]">
      <div className="footer-inner mx-auto flex max-w-6xl flex-col gap-7 px-6 py-10">
        <div className="footer-logo flex flex-col">
          <span className="font-display text-[15px] font-bold tracking-[0.18em] text-[var(--text-primary)]">DIGITALTECH</span>
          <span className="mt-1 text-[13px] text-[color:var(--secondary-jade)]">Tecnologia em um Minuto</span>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-[var(--text-secondary)]">
          <li><a href="#" className="transition-colors hover:text-[var(--text-primary)]">Sobre</a></li>
          <li><Link to="/contato" className="transition-colors hover:text-[var(--text-primary)]">Contato</Link></li>
          <li><Link to="/politica-de-privacidade" className="transition-colors hover:text-[var(--text-primary)]">Politica de Privacidade</Link></li>
          <li><a href="#" className="transition-colors hover:text-[var(--text-primary)]">Termos de Uso</a></li>
        </ul>
        <ul className="flex flex-col gap-2 text-[13px] text-[var(--text-secondary)]">
          <li><a href="https://github.com/michelfreitasdev" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--text-primary)]">GitHub</a></li>
          <li><a href="https://linkedin.com/in/michelfreitas-ads" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--text-primary)]">LinkedIn</a></li>
          <li><a href="https://tiktok.com/@digitaltech00" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--text-primary)]">TikTok</a></li>
        </ul>
        <p className="text-[13px] text-[var(--text-secondary)]">2026 Michel Freitas. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
