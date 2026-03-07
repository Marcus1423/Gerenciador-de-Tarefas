import { useNavigate } from "react-router-dom";

function withPremiumAccess(Component) {
  return function PremiumComponent(props) {

    const navigate = useNavigate();
    

    const isPremium = localStorage.getItem("premium") === "true";

    if (!isPremium) {
      return (
        <div className="p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">
            Recurso Premium 🔒
          </h2>

          <p className="text-slate-500">
            Faça upgrade para acessar as estatísticas.
          </p>

          <button
            onClick={() => navigate("/upgrade")}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg"
          >
            Fazer Upgrade
          </button>
        </div>
      );
    }

    return <Component {...props} />;
  };
}

export default withPremiumAccess;