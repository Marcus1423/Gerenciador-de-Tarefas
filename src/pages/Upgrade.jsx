import { useNavigate } from "react-router-dom";

function Upgrade() {

  const navigate = useNavigate();

  function handleUpgrade() {
    localStorage.setItem("premium", "true");
    navigate("/statistics");
  }

  return (
    <div className="p-6 text-center space-y-6">

      <h1 className="text-2xl font-bold">
        Upgrade Premium 🚀
      </h1>

      <p className="text-slate-500">
        Desbloqueie estatísticas avançadas e recursos extras.
      </p>

      <div className="border rounded-xl p-6 max-w-sm mx-auto space-y-4">

        <h2 className="text-xl font-semibold">
          Plano Premium
        </h2>

        <p className="text-3xl font-bold">
          R$9,90 / mês
        </p>

        <button
          onClick={handleUpgrade}
          className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg"
        >
          Assinar agora
        </button>

      </div>

    </div>
  );
}

export default Upgrade;