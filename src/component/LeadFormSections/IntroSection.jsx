import { PrimaryButton } from "../primaryButton.jsx";

export function IntroSection({ onStart }) {
  return (
    <>
      <h1 className="text-xl font-semibold text-black">
        Inscreva-se e receba um orçamento no mesmo dia!
      </h1>
      <p className="text-sm text-gray-600 mb-4">
        Nos dê suas informações para entrarmos em contato em até 24 horas
      </p>
      <PrimaryButton text="Continuar" onClick={onStart} />
    </>
  );
}
