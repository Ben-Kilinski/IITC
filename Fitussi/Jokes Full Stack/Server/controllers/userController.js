const mongoose = require('mongoose');

// Definição do esquema para usuários
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'O nome é obrigatório'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'O email é obrigatório'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Por favor, insira um email válido']
    },
    password: {
        type: String,
        required: [true, 'A senha é obrigatória'],
        minlength: [6, 'A senha deve ter pelo menos 6 caracteres'],
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Criação do modelo
const User = mongoose.model('User', userSchema);

module.exports = User;
