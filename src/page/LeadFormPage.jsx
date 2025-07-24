import { useState } from "react";

export function LeadFormPage() {
  const [intro, setIntro] = useState(true);
  const [finish, setFinish] = useState(false);

  const startForm = () => {
    setIntro(false);
  };

  const sendForm = () => {
    setFinish(true);
  };

  return (
    <div>
      <div
        className="min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="text-center text-neutral-content">
          {intro ? (
            <div>
              <h1>Seja bem vindo, preencha o form</h1>
              <button onClick={startForm}>tabom vou preencher</button>
            </div>
          ) : finish ? (
            <h1>parabens por ser lead</h1>
          ) : (
            <div>
              <h1>Mim de as info</h1>
              <button onClick={sendForm}>eu dei!!</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
