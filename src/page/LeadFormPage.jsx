import { useState } from "react";
import { IntroSection } from "../component/LeadFormSections/IntroSection.jsx";
import { FormSection } from "../component/LeadFormSections/FormSection.jsx";
import { FinishSection } from "../component/LeadFormSections/FinishSection.jsx";
import bgInox from "../assets/bgInox.jpg";

export function LeadFormPage() {
  const [intro, setIntro] = useState(true);
  const [finish, setFinish] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
  });

  const startForm = () => setIntro(false);
  const sendForm = (e) => {
    e.preventDefault();
    setFinish(true);
    console.log("Formulário enviado:", formData);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: `url(${bgInox})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-6 w-full max-w-md text-center space-y-4">
        {intro ? (
          <IntroSection onStart={startForm} />
        ) : finish ? (
          <FinishSection />
        ) : (
          <FormSection
            formData={formData}
            onChange={handleChange}
            onSubmit={sendForm}
          />
        )}
      </div>
    </div>
  );
}
