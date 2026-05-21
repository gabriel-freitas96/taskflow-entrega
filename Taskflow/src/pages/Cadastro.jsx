import { useState } from "react";

function PageCadastro({ setPage }) {
  const [nome, setNome] = useState("");
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
            Comece a organizar seus <span>projetos hoje</span>
          </div>
          <div className="auth-bg-sub">
            Crie sua conta gratuitamente e tenha acesso a todas as ferramentas de gestão de tarefas com IA.
          </div>
        </div>
      </div>
      <div className="auth-panel fade-in">
        <div className="auth-title">Criar conta</div>
        <div className="auth-sub">Preencha os dados para começar</div>
        <div className="form-group">
          <label className="form-label">Nome Completo</label>
          <input className="form-input" value={nome} onChange={e => setNome(e.target.value)} placeholder="Seu Nome" />
        </div>
        <div className="form-group">
          <label className="form-label">E-mail</label>
          <input className="form-input" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="seu@email.com" />
        </div>
        <div className="form-group">
          <label className="form-label">Senha</label>
          <input className="form-input" type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder="Mínimo 8 caracteres" />
        </div>
        <button className="btn btn-primary" style={{ width: "100%", marginTop: 4 }} onClick={() => setPage("login")}>
          Criar Conta
        </button>
        <div className="auth-footer">
          Já tem uma conta?{" "}
          <span className="auth-link" onClick={() => setPage("login")}>Faça Login</span>
        </div>
      </div>
    </div>
  );
}

export default PageCadastro;
