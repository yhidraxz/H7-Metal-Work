import { PrimaryButton } from "../primaryButton.jsx";

export function FormSection({ formData, onChange, onSubmit }) {
  return (
    <>
      <h1 className="text-xl font-semibold mb-2 text-black">
        Preencha seus dados
      </h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Seu nome"
          className="input input-bordered w-full"
          name="nome"
          value={formData.nome}
          onChange={onChange}
          required
        />
        <input
          type="email"
          placeholder="Seu email"
          className="input input-bordered w-full"
          name="email"
          value={formData.email}
          onChange={onChange}
          required
        />
        <input
          type="tel"
          placeholder="Seu telefone"
          className="input input-bordered w-full"
          name="telefone"
          value={formData.telefone}
          onChange={onChange}
          required
        />
        <PrimaryButton text="Enviar formulário" />
      </form>
    </>
  );
}
