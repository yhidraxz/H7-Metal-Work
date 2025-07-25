export async function sendNewLead(formData) {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwdgNw9uk7Ux1KLie8Pz2hoCXsAnuw7WbiRTBi_nCd9Xpx80S2JmcwI5pZujGCULXEWVA/exec",
      {
        method: "POST",
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          telefone: formData.telefone,
          localInstalacao: formData.localInstalacao,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(
        `Erro ao enviar: ${errorData.message || response.statusText}`
      );
    }

    const result = await response.text();
    console.log("Lead enviado com sucesso:", result);
    return result;
  } catch (error) {
    console.error("Erro ao enviar lead:", error.message);
    throw error;
  }
}
