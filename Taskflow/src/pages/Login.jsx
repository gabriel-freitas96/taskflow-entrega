import { useState } from "react";

function PageLogin({ setPage }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  return (
    <div className="auth-page">
      <div className="auth-bg">
        <div className="auth-bg-text slide-in">
          <div className="auth-bg-logo">
            <div className="auth-bg-logo-icon">⟡</div>
            TaskFlow
          </div>
          <div className="auth-bg-headline">
            Gerencie seus projetos com <span>inteligência</span>
          </div>
          <div className="auth-bg-sub">
            Uma plataforma completa para organizar tarefas, acompanhar projetos acadêmicos e contar com uma IA integrada para otimizar sua produtividade.
          </div>
        </div>
      </div>
      <div className="auth-panel fade-in">
        <div className="auth-title">Bem-vindo de volta</div>
        <div className="auth-sub">Entre com suas credenciais para continuar</div>
        <div className="form-group">
          <label className="form-label">E-mail</label>
          <input className="form-input" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="seu@email.com" />
        </div>
        <div className="form-group">
          <label className="form-label">Senha</label>
          <input className="form-input" type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder="••••••••" />
        </div>
        <button className="btn btn-primary" style={{ width: "100%", marginTop: 4 }} onClick={() => setPage("dashboard")}>
          Entrar no TaskFlow
        </button>
        <div className="auth-footer">
          Não tem uma conta?{" "}
          <span className="auth-link" onClick={() => setPage("cadastro")}>Cadastre-se</span>
        </div>
      </div>
    </div>
  );
}

export default PageLogin;