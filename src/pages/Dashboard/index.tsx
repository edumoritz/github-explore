import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars2.githubusercontent.com/u/19297506?s=460&u=44b3079a5cca8c83bd7e4564340d2c76fd16c298&v=4"
          alt="Eduardo"
        />
        <div>
          <strong>rocketseat</strong>
          <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars2.githubusercontent.com/u/19297506?s=460&u=44b3079a5cca8c83bd7e4564340d2c76fd16c298&v=4"
          alt="Eduardo"
        />
        <div>
          <strong>rocketseat</strong>
          <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars2.githubusercontent.com/u/19297506?s=460&u=44b3079a5cca8c83bd7e4564340d2c76fd16c298&v=4"
          alt="Eduardo"
        />
        <div>
          <strong>rocketseat</strong>
          <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
