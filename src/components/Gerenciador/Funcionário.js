import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { unstable_Box as Box } from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Recurso from './Recurso'
import clsx from 'clsx';
import { Link, browserHistory } from "react-router";
import Icon from '@material-ui/core/Icon';
import Axios from 'axios'
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
const categorias = [
  {
    value: '',
    label: '',
  },
  {
    value: '01',
    label: 'Equipamento',
  },
  {
    value: '02',
    label: 'Espaço',
  },
];
const setores = [
  {
    value: '',
    label: '',
  },
  {
    value: '01',
    label: 'Setor 01',
  },
  {
    value: '02',
    label: 'Setor 02',
  },
];


export default class TextFields extends Component{

  constructor(props) {
    super(props);
    this.state = { 
    name: 'Cat in the Hat',
    age: '',
    recursos: [
      {
        "title": 'Auditório',
        "tipo": "E",
        "estado": "Disponivel",
        "setor": "02",
        "descricao": 'Auditorio com cadeiras pretas e brancas, mesa, e uma tela de proteção para apresentar os projetos, está pronta para o uso 100 x 100. O Auditório será alocada nessas condições de uso.',
        "categoria": "Espaço",
        "gerente": "Daniel, José Eduardo, João Guilherme",
        "identificacao": "214167,",
        "data_criacao": "2008-06-14",
        "data_modificacao": "2009-03-15",
        "tempominimo": "05:30",
        "image": 'auditorio.jpg',
        "reservado": false,
        "datatermino": "2019-05-24T10:30",
        "dataemprestimo": "2019-05-24T10:30"
    },
    {
      "title": 'Conjunto de Ferramentas',
      "tipo": "S",
      "estado": "Disponivel",
      "setor": "01",
      "descricao": 'Conjunto de Ferramentas completo na maleta original com manuais Politriz com regulagem de velocidade boina dupla face , soprador quente, 4 cavaletes, 3 pistolas, Será alocado nessas condições de uso.',
      "categoria": "Equipamento",
      "gerente": "José Eduardo",
      "identificacao": "903067,",
      "data_criacao": "2017-12-12",
      "data_modificacao": "2018-02-13",
      "tempominimo": "05:30",
      "image": 'conjuntoFerramenta.jpeg',
      "reservado": false,
      "datatermino": "2019-05-24T10:30",
      "dataemprestimo": "2019-05-24T10:30"
  },
  {
    "title": 'Escritório Mobiliado',
    "tipo": "E",
    "estado": "Indisponivel",
    "setor": "02",
    "descricao": 'Escritório Mobiliado, opção perfeita de escritório comercial mobiliado em Petrolina. Estrutura completa para alocar você e toda sua equipe de trabalho. Será alocado nessas condições de uso.',
    "categoria": "Espaço",
    "gerente": "Daniel, Lucas",
    "identificacao": "879868,",
    "data_criacao": "2019-01-12",
    "data_modificacao": "2019-04-13",
    "tempominimo": "05:30",
    "image": 'escritorioMobiliado.jpeg',
    "reservado": false,
    "datatermino": "2019-05-24T10:30",
    "dataemprestimo": "2019-05-24T10:30"
},
{
  "title": 'Mini Projetor',
  "tipo": "S",
  "estado": "Indisponivel",
  "setor": "01",
  "descricao": 'Mini Projetor Completo na maleta original com manuais originais Esta ligando, acendendo, puxa o slide mas não roda o carrossel, Será alocado nessas condições de uso.',
  "categoria": "Equipamento",
  "gerente": "João Guilherme",
  "identificacao": "583340,",
  "data_criacao": "2019-04-12",
  "data_modificacao": "2019-08-15",
  "tempominimo": "05:30",
  "image": 'miniProjetor.png',
  "reservado": false,
  "datatermino": "2019-05-24T10:30",
  "dataemprestimo": "2019-05-24T10:30"
},
{
  "title": 'Notebook i7',
  "tipo": "E",
  "estado": "Disponivel",
  "setor": "02",
  "descricao": 'Notebook i7 Completo na maleta original com manuais originais Esta ligando, mas com defeito no aúdio esquerdo caso use fone da apple, Será alocado nessas condições de uso.',
  "categoria": "Equipamento",
  "gerente": "Ian",
  "identificacao": "502707,",
  "data_criacao": "2019-02-16",
  "data_modificacao": "2019-03-13",
  "tempominimo": "05:30",
  "image": 'notebook.jpg',
  "reservado": false,
  "datatermino": "2019-05-24T10:30",
  "dataemprestimo": "2019-05-24T10:30"
},
      {
      "title": 'Projetor Kodak',
      "tipo": "E",
      "estado": "Disponivel",
      "setor": "02",
      "descricao": 'Projetor Kodak Completo na maleta original com manuais originais Esta ligando, acendendo, puxa o slide mas não roda o carrossel Será alocado nessas condições de uso.',
      "categoria": "Equipamento",
      "gerente": "Daniel",
      "identificacao": "79897,",
      "data_criacao": "2019-02-21",
      "data_modificacao": "2019-03-21",
      "tempominimo": "05:30",
      "image": 'projetor.jpg',
      "reservado": false,
      "datatermino": "2019-05-24T10:30",
      "dataemprestimo": "2019-05-24T10:30"
    },
    {
      "title": 'Projetor Portatil',
      "tipo": "E",
      "estado": "Disponivel",
      "setor": "02",
      "descricao": 'Projetor Portatil Completo na maleta original com manuais originais Esta ligando, acendendo, puxa o slide mas não roda o carrossel, Será alocado nessas condições de uso.',
      "categoria": "Equipamento",
      "gerente": "Ian",
      "identificacao": "483807,",
      "data_criacao": "2017-02-11",
      "data_modificacao": "2019-03-21",
      "tempominimo": "05:30",
      "image": 'projetorPortatil.jpeg',
      "reservado": false,
      "datatermino": "2019-05-24T10:30",
      "dataemprestimo": "2019-05-24T10:30"
  },
  {
    "title": 'Sala de Apresentação',
    "tipo": "E",
    "estado": "Disponivel",
    "setor": "01",
    "descricao": 'Sala de Apresentação com cadeiras pretas, mesa, e uma tela de proteção para apresentar, está pronta para o uso 100 x 100. A sala de Apresentação será alocada nessas condições de uso.',
    "categoria": "Espaço",
    "gerente": "Lucas",
    "identificacao": "767426,",
    "data_criacao": "2019-09-12",
    "data_modificacao": "2019-12-21",
    "tempominimo": "05:30",
    "image": 'salaApresentação.jpg',
    "reservado": false,
    "datatermino": "2019-05-24T10:30",
    "dataemprestimo": "2019-05-24T10:30"
},
{
  "title": 'Sala de Criação',
  "tipo": "E",
  "estado": "Disponivel",
  "setor": "01",
  "descricao": 'Sala de Criação com cadeiras pretas, mesa, e uma tela de proteção para apresentar os projetos, está pronta para o uso 100 x 100. A sala de Criação será alocada nessas condições de uso.',
  "categoria": "Espaço",
  "gerente": "Daniel, José Eduardo",
  "identificacao": "39271,",
  "data_criacao": "2017-10-15",
  "data_modificacao": "2019-03-16",
  "tempominimo": "05:30",
  "image": 'salaBrain.jpg',
  "reservado": false,
  "datatermino": "2019-05-24T10:30",
  "dataemprestimo": "2019-05-24T10:30"
},
    {
        "title": 'Sala de Desenvolvimento',
        "tipo": "E",
        "estado": "Indisponivel",
        "setor": "01",
        "descricao": 'Sala de Desenvolvimento com cadeiras pretas, mesa, e uma televisão para apresentar os projetos, está pronta para o uso 100 x 100. A sala será alocada nessas condições de uso.',
        "categoria": "Espaço",
        "gerente": "Daniel, Lucas",
        "identificacao": "934278,",
        "data_criacao": "2019-01-12",
        "data_modificacao": "2019-03-13",
      "tempominimo": "05:30",
      "image": 'salaReuniao.jpg',
      "reservado": false,
      "datatermino": "2019-05-24T10:30",
      "dataemprestimo": "2019-05-24T10:30"
    },
    {
      "title": 'Sala de Reunião',
      "tipo": "E",
      "estado": "Disponivel",
      "setor": "02",
      "descricao": 'Sala de Reuniao com cadeiras pretas, mesa, e uma tela de proteção para apresentar os projetos, está pronta para o uso 100 x 100. A sala de Reunião será alocada nessas condições de uso.',
      "categoria": "Espaço",
      "gerente": "Daniel, João Guilherme",
      "identificacao": "358007,",
      "data_criacao": "2015-09-21",
      "data_modificacao": "2019-03-30",
      "tempominimo": "05:30",
      "image": 'salaReuniao02.jpg',
      "reservado": false,
      "datatermino": "2019-05-24T10:30",
      "dataemprestimo": "2019-05-24T10:30"
  },
  {
      "title": 'Tela de Projeção',
      "tipo": "S",
      "estado": "Disponivel",
      "setor": "01",
      "descricao": 'Tela de Projeção no formato 16:9 com manuais originais e bem fácil de ser manipulável para apresentações de curto período, Será alocado nessas condições de uso.',
      "categoria": "Equipamento",
      "gerente": "Ian, Lucas",
      "identificacao": "557614,",
      "data_criacao": "2005-12-12",
      "data_modificacao": "2010-06-12",
      "tempominimo": "05:30",
      "image": 'telaProjeção.jpg',
      "reservado": false,
      "datatermino": "2019-05-24T10:30",
      "dataemprestimo": "2019-05-24T10:30"
  },
  ],
    multiline: 'Controlled',
    categorias: '',
    setores: '',
  }
  }
  componentDidMount() {
    alert('didMount')
    var recipesCopy = JSON.parse(JSON.stringify(this.state.recursos))
    for(let i=0;i<this.state.recursos.length;i++){
      for(let j = 0; j<this.props.location.state.identificacao.length;j++){
        if(`${this.props.location.state.identificacao[j]},` === this.state.recursos[i].identificacao){
          recipesCopy[i].datatermino = this.props.location.state.datatermino
        recipesCopy[i].dataemprestimo = this.props.location.state.dataemprestimo
           recipesCopy[i].reservado = this.props.location.state.reservado
           alert(recipesCopy[i].datatermino)
           alert(this.props.location.state.datatermino)
        this.setState({
          recursos:recipesCopy,
           }
          );
       }
      }
  }
  }
  componentDidUpdate(prevProps) {
    // Uso típico, (não esqueça de comparar as props):
    if (this.props.location.state !== prevProps.location.state) {
      alert('didUpdate')
      var recipesCopy = JSON.parse(JSON.stringify(this.state.recursos))
      for(let i=0;i<this.state.recursos.length;i++){
      if(this.props.location.state.identificacao === this.state.recursos[i].identificacao){
        recipesCopy[i].datatermino = this.props.location.state.datatermino
        recipesCopy[i].dataemprestimo = this.props.location.state.dataemprestimo
recipesCopy[i].reservado = this.props.location.state.reservado
      this.setState({
        recursos:recipesCopy,
      }
        );
    }
    }
  }
}
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  };


  
  recursos(aux){
    if(aux === this.state.recursos.length){
      aux = 0;
      return(
        <div></div>
      )
    }
    if(this.state.setores == '01' && this.state.categorias == '02'){
      if(this.state.recursos[aux].setor === '01' && this.state.recursos[aux].categoria === 'Espaço'){
        return(
        <div style={{display:'inline'}}>
         <Recurso gerente = {this.state.recursos[aux]} />
        {this.recursos(aux+1)}
      </div>
      )
      }else{
        return(
        <div style={{display:'inline'}}>
        {this.recursos(aux+1)}
      </div>
        )
      }
    
    }
    if(this.state.setores == '02' && this.state.categorias == '01'){
      if(this.state.recursos[aux].setor === '02' && this.state.recursos[aux].categoria === 'Equipamento'){
        return(
        <div style={{display:'inline'}}>
         <Recurso gerente = {this.state.recursos[aux]} />
        {this.recursos(aux+1)}
      </div>
      )
      }else{
        return(
        <div style={{display:'inline'}}>
        {this.recursos(aux+1)}
      </div>
        )
      }
    
    }

    if(this.state.setores == '01' && this.state.categorias == '01'){
      if(this.state.recursos[aux].setor === '01' && this.state.recursos[aux].categoria === 'Equipamento'){
        return(
        <div style={{display:'inline'}}>
         <Recurso gerente = {this.state.recursos[aux]} />
        {this.recursos(aux+1)}
      </div>
      )
      }else{
        return(
        <div style={{display:'inline'}}>
        {this.recursos(aux+1)}
      </div>
        )
      }
    
    }
    
if(this.state.setores == '02' && this.state.categorias == '02'){
  if(this.state.recursos[aux].setor === '02' && this.state.recursos[aux].categoria === 'Espaço'){
    return(
    <div style={{display:'inline'}}>
     <Recurso gerente = {this.state.recursos[aux]} />
    {this.recursos(aux+1)}
  </div>
  )
  }else{
    return(
    <div style={{display:'inline'}}>
    {this.recursos(aux+1)}
  </div>
    )
  }

}
    if(this.state.categorias == '01'){
        if(this.state.recursos[aux].categoria === 'Equipamento'){
          return(
          <div style={{display:'inline'}}>
           <Recurso gerente = {this.state.recursos[aux]} />
          {this.recursos(aux+1)}
        </div>
        )
        }else{
          return(
          <div style={{display:'inline'}}>
          {this.recursos(aux+1)}
        </div>
          )
        }
      
    }
    if(this.state.categorias == '02'){
      if(this.state.recursos[aux].categoria === 'Espaço'){
        return(
        <div style={{display:'inline'}}>
         <Recurso gerente = {this.state.recursos[aux]} />
        {this.recursos(aux+1)}
      </div>
      )
      }else{
        return(
        <div style={{display:'inline'}}>
        {this.recursos(aux+1)}
      </div>
        )
      }
    
  }
  if(this.state.setores == '01'){
    if(this.state.recursos[aux].setor === '01'){
      return(
      <div style={{display:'inline'}}>
       <Recurso gerente = {this.state.recursos[aux]} />
      {this.recursos(aux+1)}
    </div>
    )
    }else{
      return(
      <div style={{display:'inline'}}>
      {this.recursos(aux+1)}
    </div>
      )
    }
  
}
if(this.state.setores == '02'){
  if(this.state.recursos[aux].setor === '02'){
    return(
    <div style={{display:'inline'}}>
     <Recurso gerente = {this.state.recursos[aux]} />
    {this.recursos(aux+1)}
  </div>
  )
  }else{
    return(
    <div style={{display:'inline'}}>
    {this.recursos(aux+1)}
  </div>
    )
  }

}
    if(this.state.categorias === ''){
      return(
        <div style={{display:'inline'}}>
     <Recurso gerente = {this.state.recursos[aux]} />
     {this.recursos(aux+1)}
        </div>
        )
    }
    
  }
  render(){
    return (
      <div>
      <Typography component="div">
      <Box fontWeight={500} textAlign='center' fontSize={34} fontFamily="Roboto" style={{color:'#025c'}} m={2}>
        {this.props.h1first}
      </Box>
      <Box fontWeight={500} textAlign='right' fontSize={15} fontFamily="Roboto" style={{color:'#025c'}} m={2}>
        Funcionário : {this.props.numero}
      </Box>
      <TextField
        id="outlined-select-currency"
        select
        label="Categoria"
        value={this.state.categorias}
        onChange={this.handleChange('categorias')}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Icon style={{color:'black'}}>
        search
      </Icon>
            </InputAdornment>
          ),
        }}
        helperText="Os Recursos são organizados em ordem alfabética"
        margin="normal"
        variant="outlined"
      >
        {categorias.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="outlined-select-currency"
        select
        label="Setor"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Icon style={{color:'black'}}>
        search
      </Icon>
            </InputAdornment>
          ),
        }}
        value={this.state.setores}
        style={{minWidth:120}}
        onChange={this.handleChange('setores')}
        margin="normal"
        variant="outlined"
      >
        {setores.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Typography>
      <div style={{alignSelf: 'stretch',
    textAlign: 'center',}}>
    {this.recursos(0)}
        
      </div>
      </div>
    );}
  }

