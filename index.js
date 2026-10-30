const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    return res.json({message:'index rodando....'});
})

app.post('/produto', (req, res) => {
    const { descricao, marca } = req.body;

   
    const descricaoFormatado = descricao ? descricao.toUpperCase() : 'NÃO INFORMADO'; 
    const marcaFormatado = marca ? marca.toUpperCase() : 'NÃO INFORMADO';
    return res.json({
        mensagem: 'Dados recebidos e processados com sucesso',
        dadosOriginais: {descricao, marca},
        dadosProcessados:{
            descricaoFormatado,
            marcaFormatado,
            
            
        }
    })
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
 //   console.log('Servidor rodando em http://localhost:3000')
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})