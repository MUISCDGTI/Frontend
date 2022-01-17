import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Card } from 'antd';

const MainPage = () => {
    return (
     <div className="container">
        <div className="form-box">
          <div className="body-form">
           <form>
              <div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"><i class="fa fa-user"></i></span>
  </div>
  <input type="text" className="form-control" placeholder="Usuario" />
</div>
 <div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"><i class="fa fa-lock"></i></span>
  </div>
  <input type="text" className="form-control" placeholder="Contraseña" />
</div>
 <button type="button" className="btn btn-secondary btn-block">Iniciar sesión</button>
 <div className="message">
 </div>
   </form>
          </div>
        </div>
       </div>  
  );
}

export default MainPage;