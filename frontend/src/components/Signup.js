// frontend/src/components/Signup.js
import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/register', formData);
      setMessage('Cadastro realizado com sucesso!');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Erro no cadastro');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Cadastre-se</h2>
        {message && <p className="text-center mb-4">{message}</p>}
        <form onSubmit={onSubmit}>
          <input type="text" name="firstName" placeholder="Nome" onChange={onChange} className="w-full p-2 border mb-4 rounded" required/>
          <input type="text" name="lastName" placeholder="Sobrenome" onChange={onChange} className="w-full p-2 border mb-4 rounded" required/>
          <input type="email" name="email" placeholder="E-mail" onChange={onChange} className="w-full p-2 border mb-4 rounded" required/>
          <input type="password" name="password" placeholder="Senha" onChange={onChange} className="w-full p-2 border mb-4 rounded" required/>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
