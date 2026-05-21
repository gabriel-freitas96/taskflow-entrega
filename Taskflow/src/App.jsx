import { useState, useCallback, useEffect } from "react";
import { PROJETOS_INICIAIS } from "./data/initialData";
import GlobalStyle from "./styles/GlobalStyle";
import Sidebar from "./Componentes/Sidebar/Sidebar";
import Topbar from "./Componentes/Topbar/Topbar";
import AIAssistente from "./Componentes/AIAssistente/AIAssistente";
import PageLogin from "./pages/Login";
import PageCadastro from "./pages/Cadastro";
import PageDashboard from "./pages/Dashboard";
import PageProjeto from "./pages/ProjetoDetalhes";
import PageNovaTarefa from "./pages/NovaTarefa";
import PagePerfil from "./pages/Perfil";
import PageMembros from "./pages/Membros";

export default function App() {
  const [page, setPage] = useState("login");
  const [projetos, setProjetos] = useState(PROJETOS_INICIAIS);
  const [projSelecionado, setProjSelecionado] = useState(null);
  const [toast, setToast] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(v => {
      document.body.classList.toggle("light", v); // adiciona "light" quando sair do dark
      return !v;
    });
  };

  // garante que o body começa sem a classe light
  useEffect(() => {
    document.body.classList.remove("light");
  }, []);

  const showToast = useCallback((msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  }, []);

  const pageTitle = {
    dashboard: "Dashboard",
    projeto: projetos.find(p => p.id === projSelecionado)?.nome || "Projeto",
    "nova-tarefa": "Nova Tarefa",
    perfil: "Meu Perfil",
    membros: "Membros",
  };

  if (page === "login") return (
    <>
      <GlobalStyle />
      <PageLogin setPage={setPage} />
    </>
  );

  if (page === "cadastro") return (
    <>
      <GlobalStyle />
      <PageCadastro setPage={setPage} />
    </>
  );

  return (
    <>
      <GlobalStyle />
      <div className="app-layout">
        <Sidebar page={page} setPage={setPage} />
        <div className="main-content">
          <Topbar
            title={pageTitle[page] || "TaskFlow"}
            setPage={setPage}
            darkMode={darkMode}
            toggleTheme={toggleTheme}
          />
          <div className="page-content">
            {page === "dashboard" && (
              <PageDashboard projetos={projetos} setPage={setPage} setProjSelecionado={setProjSelecionado} />
            )}
            {page === "projeto" && (
              <PageProjeto projetos={projetos} setProjetos={setProjetos} projetoId={projSelecionado} setPage={setPage} />
            )}
            {page === "nova-tarefa" && (
              <PageNovaTarefa projetos={projetos} setProjetos={setProjetos} setPage={setPage} showToast={showToast} />
            )}
            {page === "perfil" && (
              <PagePerfil projetos={projetos} setPage={setPage} />
            )}
            {page === "membros" && (
              <PageMembros />
            )}
          </div>
        </div>
      </div>

      <AIAssistente projetos={projetos} />
      {toast && <div className="toast">{toast}</div>}
    </>
  );
}