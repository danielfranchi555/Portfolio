import React from "react";
import ecommerceImg from "../../img/ecommerce.png";
import todoList from '../../img/todo-list.png'
import appClima from '../../img/app-clima.png'
import crud from '../../img/crud.png'
import "./sectionThree.scss";
const SectionThree = () => {
  return (
    <div
      className="container text-center "
      id="sectionThree"
      style={{
        marginBottom: "150px",
        marginTop: "200px",
      }}
    >
      <h1 style={{ color: "white" }}>Proyectos</h1>
      <div className="row  row-cols-2 ">
        <div className="col py-4 px-3 ">
          <div class="card" style={{ width: "auto",height:'auto' }}>
            <img src={ecommerceImg} class="card-img-top" alt="..." />
            <div class="card-body">
            <h5 class="card-title">Ecommerce</h5>
              <a href=" https://danielfranchi555.github.io/Ecommerce-React" class="btn btn-primary">
                demo
              </a>
            </div>
          </div>
        </div>
        <div className="col py-4 px-3 card-work ">
          <div class="card" style={{ width: "auto",height:'auto' }}>
            <img src={todoList} class="card-img-top" alt="..." className="border" />
            <div class="card-body">
            <h5 class="card-title">Todo List</h5>
              <a href="https://danielfranchi555.github.io/Todo-List" class="btn btn-primary">
                demo
              </a>
            </div>
          </div>
        </div>
        <div className="col py-4 px-3 card-work ">
          <div class="card" style={{ width: "auto",height:'auto' }}>
            <img src={appClima} class="card-img-top" alt="..." />
            <div class="card-body">
            <h5 class="card-title">App Weather</h5>
              <a href="https://danielfranchi555.github.io/App-Weather" class="btn btn-primary">
                demo
              </a>
            </div>
          </div>
        </div>
        <div className="col py-4 px-3 card-work ">
          <div class="card" style={{ width: "auto",height:'auto' }}>
            <img src={crud} class="card-img-top" alt="..." />
            <div class="card-body">
            <h5 class="card-title">Crud React</h5>
              <a href="https://danielfranchi555.github.io/Crud-React-" class="btn btn-primary">
                demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
