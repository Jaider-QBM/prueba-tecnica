"use client";

import { useState } from 'react';

export function Subscribe() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const response = await fetch('https://api.test.interactiva.net.co/api/set-newsletter/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    setIsSubmitting(false);

    if (response.ok) {
      alert('¡Te has suscrito correctamente!');
    } else {
      alert('Hubo un error al suscribirte. Intenta de nuevo.');
    }
  };

  return (
    <div className="static px-2 2xl:px-[21rem] 2xl:py-14 bg-[#1B233D]">
      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center">
            <label className="font-base text-white 2xl:text-3xl text-center">
              Suscríbete a nuestro newsletter y recibe noticias, descuentos y más
            </label>
            <input
              type="email"
              placeholder="Correo Electronico"
              className="mt-4 2xl:h-16 2xl:px-6 border rounded-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex justify-center items-center mt-12">
            <button
              type="submit"
              className="bg-yellow-dark text-white rounded-xl font-extrabold 2xl:text-3xl 2xl:py-3 2xl:px-10"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'SUSCRIBIRME'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
