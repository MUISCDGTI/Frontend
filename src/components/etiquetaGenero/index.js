import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './index.css';
import { Tag } from 'antd';
import Suscription from '../../models/Suscription';
import PropTypes from 'prop-types';
import * as Actions from '../../services/redux/suscriptions/actions';

const { CheckableTag } = Tag;

const EtiquetaGenero = ({
    valor, getSuscriptions, createSuscription, deleteSuscription, suscriptions,
}) => {

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if (checked){
            createSuscription({subject: valor});
        }
    }, [createSuscription, checked]);

    useEffect(() => {
        if (!checked){
            deleteSuscription();
        }
    }, [deleteSuscription, checked]);

    useEffect(() => {
        getSuscriptions();
    }, [getSuscriptions, checked]);
    /*
    useEffect(() => {
        console.info(suscriptions);
        if (suscriptions[valor]){
            setChecked(true);
        }else{
            setChecked(false);
        }
    }, [suscriptions, setChecked, valor]);*/
    
    return (
        <div>
            <CheckableTag 
                key={valor}
                checked={checked}
                onChange={checked => setChecked(checked)}
            >
                {valor}    
            </CheckableTag>
        </div>
    );
}

EtiquetaGenero.propTypes = {
    getSuscriptions: PropTypes.func.isRequired,
    createSuscription: PropTypes.func.isRequired,
    deleteSuscription: PropTypes.func.isRequired,
    suscriptions: PropTypes.arrayOf(Suscription),
    valor: PropTypes.string,
  };

const mapStateToProps = ({ suscriptions: { suscriptions, } }) => ({
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