// frontend/src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      setMessage('Login realizado com sucesso!');
      // Redirecione para a área de membros, por exemplo:
      window.location.href = '/';
    } catch (err) {
      setMessage(err.response?.data?.message || 'Erro no login');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Entrar</h2>
        {message && <p className="text-center mb-4">{message}</p>}
        <form onSubmit={onSubmit}>
          <input type="email" name="email" placeholder="E-mail" onChange={onChange} className="w-full p-2 border mb-4 rounded" required/>
          <input type="password" name="password" placeholder="Senha" onChange={onChange} className="w-full p-2 border mb-4 rounded" required/>
          <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
