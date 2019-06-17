import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import { unstable_Box as Box } from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import RecursoGerente from "./RecursoGerente";
import clsx from "clsx";
import Icon from "@material-ui/core/Icon";
import Axios from "axios";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";
const categorias = [
  {
    value: "",
    label: ""
  },
  {
    value: "01",
    label: "Equipamento"
  },
  {
    value: "02",
    label: "Espaço"
  }
];
const setores = [
  {
    value: "",
    label: ""
  },
  {
    value: "01",
    label: "Setor 01"
  },
  {
    value: "02",
    label: "Setor 02"
  }
];

export default class TextFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Cat in the Hat",
      age: "",
      recursos: [],
      multiline: "Controlled",
      categorias: "",
      setores: "",
      rec: [],
      mensagem:'',
    };
  }
  componentDidMount() {
    const message = this.props.location.state.message
    const recurso = this.props.location.state.recurso
    this.setState({
      mensagem: message,
      recursos: recurso
    })
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  recursos(aux) {
    //aux == this.state.recursos.length
    if (aux == this.state.recursos.length) {
      if(this.state.mensagem == ""){
        aux = 0;
        return (
          <div style={{ display: "inline" }}>
            Sem reservas
          </div>
        );
      }else{
      aux = 0;
      return <div />;
      }
    }
    if (this.state.setores == "01" && this.state.categorias == "02") {
      if (
        this.state.recursos[aux].setor === "01" &&
        this.state.recursos[aux].categoria === "Espaço"
      ) {
        return (
          <div style={{ display: "inline" }}>
            <RecursoGerente gerente={this.state.recursos[aux]} />
            {this.recursos(aux + 1)}
          </div>
        );
      } else {
        return (
          <div style={{ display: "inline" }}>{this.recursos(aux + 1)}</div>
        );
      }
    }
    if (this.state.setores == "02" && this.state.categorias == "01") {
      if (
        this.state.recursos[aux].setor === "02" &&
        this.state.recursos[aux].categoria === "Equipamento"
      ) {
        return (
          <div style={{ display: "inline" }}>
            <RecursoGerente gerente={this.state.recursos[aux]} />
            {this.recursos(aux + 1)}
          </div>
        );
      } else {
        return (
          <div style={{ display: "inline" }}>{this.recursos(aux + 1)}</div>
        );
      }
    }

    if (this.state.setores == "01" && this.state.categorias == "01") {
      if (
        this.state.recursos[aux].setor === "01" &&
        this.state.recursos[aux].categoria === "Equipamento"
      ) {
        return (
          <div style={{ display: "inline" }}>
            <RecursoGerente gerente={this.state.recursos[aux]} />
            {this.recursos(aux + 1)}
          </div>
        );
      } else {
        return (
          <div style={{ display: "inline" }}>{this.recursos(aux + 1)}</div>
        );
      }
    }

    if (this.state.setores == "02" && this.state.categorias == "02") {
      if (
        this.state.recursos[aux].setor === "02" &&
        this.state.recursos[aux].categoria === "Espaço"
      ) {
        return (
          <div style={{ display: "inline" }}>
            <RecursoGerente gerente={this.state.recursos[aux]} />
            {this.recursos(aux + 1)}
          </div>
        );
      } else {
        return (
          <div style={{ display: "inline" }}>{this.recursos(aux + 1)}</div>
        );
      }
    }
    if (this.state.categorias == "01") {
      if (this.state.recursos[aux].categoria === "Equipamento") {
        return (
          <div style={{ display: "inline" }}>
            <RecursoGerente gerente={this.state.recursos[aux]} />
            {this.recursos(aux + 1)}
          </div>
        );
      } else {
        return (
          <div style={{ display: "inline" }}>{this.recursos(aux + 1)}</div>
        );
      }
    }
    if (this.state.categorias == "02") {
      if (this.state.recursos[aux].categoria === "Espaço") {
        return (
          <div style={{ display: "inline" }}>
            <RecursoGerente gerente={this.state.recursos[aux]} />
            {this.recursos(aux + 1)}
          </div>
        );
      } else {
        return (
          <div style={{ display: "inline" }}>{this.recursos(aux + 1)}</div>
        );
      }
    }
    if (this.state.setores == "01") {
      if (this.state.recursos[aux].setor === "01") {
        return (
          <div style={{ display: "inline" }}>
            <RecursoGerente gerente={this.state.recursos[aux]} />
            {this.recursos(aux + 1)}
          </div>
        );
      } else {
        return (
          <div style={{ display: "inline" }}>{this.recursos(aux + 1)}</div>
        );
      }
    }
    if (this.state.setores == "02") {
      if (this.state.recursos[aux].setor === "02") {
        return (
          <div style={{ display: "inline" }}>
            <RecursoGerente gerente={this.state.recursos[aux]} />
            {this.recursos(aux + 1)}
          </div>
        );
      } else {
        return (
          <div style={{ display: "inline" }}>{this.recursos(aux + 1)}</div>
        );
      }
    }
    if (this.state.categorias == "" && this.state.setores == "" && this.state.mensagem != "") {

      return (
        <div style={{ display: "inline" }}>
          <RecursoGerente gerente={this.state.recursos[aux]} />
          {this.recursos(aux + 1)}
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <Typography component="div">
          <Box
            fontWeight={500}
            textAlign="center"
            fontSize={34}
            fontFamily="Roboto"
            style={{ color: "#025c" }}
            m={2}
          >
            {this.props.h1first}
          </Box>
          <Box
            fontWeight={500}
            textAlign="right"
            fontSize={15}
            fontFamily="Roboto"
            style={{ color: "#025c" }}
            m={2}
          >
            Gerente : {this.props.numero}
          </Box>
          <TextField
            id="outlined-select-currency"
            select
            label="Categoria"
            value={this.state.categorias}
            onChange={this.handleChange("categorias")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon style={{ color: "black" }}>search</Icon>
                </InputAdornment>
              )
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
                  <Icon style={{ color: "black" }}>search</Icon>
                </InputAdornment>
              )
            }}
            value={this.state.setores}
            style={{ minWidth: 120 }}
            onChange={this.handleChange("setores")}
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
        {this.state.mensagem}
        <div style={{ alignSelf: "stretch", textAlign: "center" }}>
        
          {this.recursos(0)}
        </div>
      </div>
    );
  }
}
