import { PrimaryButton } from "../primaryButton.jsx";

export function FormSection({ formData, onChange, onSubmit }) {
  return (
    <>
      <h1 className="text-xl text-start font-semibold mb-2 text-black">
        Informações de contato
      </h1>
      <p className="text-sm text-gray-600 mb-4 text-start">
        Preencha as informações abaixo para que possamos entrar em contato e te
        dar um orçamento
      </p>
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Seu nome"
          className="input input-bordered w-full text-white"
          name="nome"
          value={formData.nome}
          onChange={onChange}
          required
        />
        <input
          type="email"
          placeholder="Seu email"
          className="input input-bordered w-full text-white"
          name="email"
          value={formData.email}
          onChange={onChange}
          required
        />
        <input
          type="tel"
          placeholder="Seu telefone (com DDD)"
          className="input input-bordered w-full text-white"
          name="telefone"
          value={formData.telefone}
          onChange={onChange}
          required
        />
        <select
          name="localInstalacao"
          className="select select-bordered w-full text-white"
          value={formData.localInstalacao}
          onChange={onChange}
          required
        >
          <option value="">Tipo de estabelecimento</option>
          <option value="residencia">Residência</option>
          <option value="comercio">Comércio</option>
        </select>
        <PrimaryButton text="Confirmar" />
      </form>
    </>
  );
}
