import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import "./index.css";
import { Tag } from "antd";
import Suscription from "../../models/Suscription";
import PropTypes from "prop-types";
import * as Actions from "../../services/redux/suscriptions/actions";

const { CheckableTag } = Tag;

const EtiquetaGenero = ({
  valor,
  getSuscriptions,
  createSuscription,
  deleteSuscription,
  suscriptions,
}) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      let i = 0;
      let s = false;
      while (i < suscriptions.length && !s) {
        if (suscriptions[i].subject === valor) {
          s = true;
        }
        i++;
      }
      if (!s) {
        createSuscription({
          subject: valor,
          category: "Noticia",
          mail: "rottenpotatoesgrupo3fis@gmail.com",
        });
      }
    }
  }, [createSuscription, getSuscriptions, checked]);

  useEffect(() => {
    if (!checked) {
      let i = 0;
      let s = "";
      while (i < suscriptions.length && s === "") {
        if (suscriptions[i].subject === valor) {
          s = suscriptions[i]._id;
        }
        i++;
      }
      if (s !== "") {
        deleteSuscription({ id: s });
      }
    }
  }, [deleteSuscription, getSuscriptions, checked]);

  useEffect(() => {
    getSuscriptions("rottenpotatoesgrupo3fis@gmail.com");
  }, [getSuscriptions]);

  useEffect(() => {
    let i = 0;
    let s = false;
    while (i < suscriptions.length && !s) {
      if (suscriptions[i].subject === valor) {
        s = true;
      }
      i++;
    }

    setChecked(s);
  }, [suscriptions, setChecked, valor]);

  return (
    <CheckableTag
      key={valor}
      checked={checked}
      onChange={(checked) => setChecked(checked)}
    >
      {valor}
    </CheckableTag>
  );
};

EtiquetaGenero.propTypes = {
  getSuscriptions: PropTypes.func.isRequired,
  createSuscription: PropTypes.func.isRequired,
  deleteSuscription: PropTypes.func.isRequired,
  suscriptions: PropTypes.arrayOf(Suscription),
  valor: PropTypes.string,
};

const mapStateToProps = ({ suscriptions: { suscriptions } }) => ({
  suscriptions,
});

EtiquetaGenero.defaultProps = {
  suscriptions: [],
};

const mapDispatchToProps = {
  getSuscriptions: Actions.getSuscriptions,
  createSuscription: Actions.createSuscription,
  deleteSuscription: Actions.deleteSuscription,
};

export default connect(mapStateToProps, mapDispatchToProps)(EtiquetaGenero);
