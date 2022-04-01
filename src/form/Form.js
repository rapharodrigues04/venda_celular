import React from "react";
import celular from '../img/celular.png';
import './form.css';
import Example from "./modal";

function Form() {
  return (
    <div>

      <header>
        <div className="container p-0">
          <a href="#">
            <img src={celular} alt="Imagem-logo" />
          </a>
          <h1>revenda de celulares</h1>
        </div>
      </header>

      <section className="py-0">
        <div className="container">
          <div className="row">
            <div className="col p-0">
              <h3 className="col-6">Produtos</h3>
              {/* <button type="button" className="btn btn-primary col-2 m-0" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Adicionar</button> */}
              <Example />
            </div>
            <table id="tableClient" className="table my-5">
              <thead>
                <tr className="cabecalhoTr">
                  <td>Código</td>
                  <td>Modelo</td>
                  <td>Preço</td>
                  <td>Marca</td>
                  <td>Cor</td>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Adicionar Novo Celular</h5>
              <button id="close" type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                <span onClick="clearFields()" aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form id="form">
                <div className="form-group">
                  <label for="recipient-name" className="col-form-label">Código</label>
                  <input type="text" data-index="new" className="form-control" id="recipient-codigo" />
                </div>
                <div className="form-group">
                  <label for="recipient-name" class="col-form-label">Modelo:</label>
                  <input type="text" className="form-control" id="recipient-modelo" />
                </div>
                <div className="form-group">
                  <label for="message-text" className="col-form-label">Preço:</label>
                  <input type="text" className="form-control" id="recipient-preco" />
                </div>
                <div className="form-group">
                  <label for="message-text" className="col-form-label">Marca:</label>
                  <input type="text" className="form-control" id="recipient-marca" />
                </div>
                <div className="form-group">
                  <label for="message-text" className="col-form-label">Cor:</label>
                  <input type="text" className="form-control" id="recipient-cor" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button id="btnSalvar" type="button" className="btn btn-primary">SALVAR</button>
              <button onClick="clearFields()" id="btnCancelar" type="button" className="btn btn-secondary"
                data-dismiss="modal">CANCELAR</button>
            </div>
          </div>
        </div>
      </div> */}

      <footer className="p-0">
        <div className="container text-center p-0">
          <p className="m-0 p-3">
            &copy; copyright 2022
          </p>
        </div>
      </footer>

    </div>
  )
}

export default Form;