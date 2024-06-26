import { useState, useEffect } from 'react';
import { fetchData } from '../../api';
import styles from './ProjetoForm.module.css';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function ProjetoForm({ btnText }) {
  const [categorias, setCategorias] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData();
        setCategorias(data);
      } catch (error) {
        setError(error.message);
      }
    };

    getData();
  }, []);

  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento do projeto"
      />
      <Select name="category_id" text="Selecione a categoria" options={categorias} />
      <SubmitButton text={btnText} />
      {error && <p className={styles.error}>Erro ao buscar categorias: {error}</p>}
    </form>
  );
}

export default ProjetoForm;
