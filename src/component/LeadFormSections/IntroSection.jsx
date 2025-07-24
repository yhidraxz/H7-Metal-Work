import { PrimaryButton } from "../primaryButton.jsx";

export function IntroSection({ onStart }) {
  return (
    <>
      <h1 className="text-xl font-semibold">Seja bem-vindo!</h1>
      <p className="text-sm text-gray-600 mb-4">
        Clique no botão abaixo para começar.
      </p>
      <PrimaryButton text="Tá bom, vou preencher" onClick={onStart} />
    </>
  );
}
