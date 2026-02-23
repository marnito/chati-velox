// ===============================
// PACK 4 – VALIDACIÓN + ENVÍO + REDIRECCIÓN
// ===============================

// Link del pack 4 (tu payment link real)
const pack4Link = "https://buy.stripe.com/5kQ28rfdL0x22m68uZ4ow01";

// Webhook de Make
const makeWebhookURL = "https://hook.eu1.make.com/6lb0cp5y5gxe3ns6pfip3uaq9nowjfqq";

// Botones que activan el pago (por si tienes dos botones)
const pack4Buttons = document.querySelectorAll("#buyPack4, #buyPack4_2");

pack4Buttons.forEach(btn => {
    btn.addEventListener("click", async () => {

        const form = document.getElementById("formPack4");
        if (!form) {
            alert("Error: No se encontró el formulario del pack.");
            return;
        }

        const data = new FormData(form);

        const c1 = data.get("c1");
        const c2 = data.get("c2");
        const c3 = data.get("c3");
        const c4 = data.get("c4");

        // Validación
        if (!c1 || !c2 || !c3 || !c4) {
            alert("Debes rellenar los 4 correos para continuar.");
            return;
        }

        // ====== 1) Enviar datos a Make ======
        try {
            await fetch(makeWebhookURL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ c1, c2, c3, c4 })
            });
        } catch (error) {
            console.error("Error enviando al webhook:", error);
            alert("Error enviando los datos. Inténtalo otra vez.");
            return;
        }

        // ====== 2) Redirigir a Stripe ======
        window.location.href = pack4Link;
    });
});
