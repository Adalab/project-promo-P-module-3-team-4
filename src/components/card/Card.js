import '../../styles/App.scss';
import { useState } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import getDataApi from '../../services/Api';
import Preview from '../card/Preview';
import Design from '../form/Design';
import Stuffed from '../form/Stuffed';
import Share from '../form/Share';

function Card() {
  const [data, setData] = useState({
    name: '',
    job: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    palette: '1',
    photo:
      'https://www.zooplus.es/magazine/wp-content/uploads/2019/07/border-collie-.jpeg',
  });

  const [dataAPI, setDataAPI] = useState({});
  const [disable, setDisable] = useState('');
  const [classCollapsible, setClassCollapsible] = useState({
    design: '',
    stuffed: 'hidden',
    share: 'hidden',
  });

  const handleReset = (cleanedData) => {
    setData(cleanedData);
  };

  const handleCollapsible = (id) => {
    const idClass = id;

    const overallCollapsables = {
      stuffed: 'hidden',
      share: 'hidden',
      design: 'hidden',
    };
    if (idClass === 'design') {
      if (classCollapsible.design === 'hidden') {
        const designCollapsable = {
          stuffed: 'hidden',
          share: 'hidden',
          design: '',
        };
        setClassCollapsible(designCollapsable);
      } else {
        setClassCollapsible(overallCollapsables);
      }
    }
    if (idClass === 'stuffed') {
      if (classCollapsible.stuffed === 'hidden') {
        const stuffedCollapsable = {
          stuffed: '',
          share: 'hidden',
          design: 'hidden',
        };
        setClassCollapsible(stuffedCollapsable);
      } else {
        setClassCollapsible(overallCollapsables);
      }
    }
    if (idClass === 'share') {
      if (classCollapsible.share === 'hidden') {
        const shareCollapsable = {
          stuffed: 'hidden',
          design: 'hidden',
          share: '',
        };
        setClassCollapsible(shareCollapsable);
      } else {
        setClassCollapsible(overallCollapsables);
      }
    }
  };

  const handleCreateCard = (ev) => {
    // Se ejecutaba en esta funcion
    setDisable('disable');
    // Que se quite el hidden de la seccion tarjeta creada
    getDataApi(data).then((response) => {
      setDataAPI(response);
    });
  };

  const handleInput = (value, name) => {
    setData({ ...data, [name]: value });
    console.log(data);
  };
  return (
    <>
      <div className="createpage">
        <Header />
        <div className="createwrapper">
          <Preview reset={handleReset} data={data} />
          <form className="form" action="/signup" method="post">
            <Design
              data={data}
              handleInput={handleInput}
              handleCollapsible={handleCollapsible}
              classCollapsible={classCollapsible}
            />
            <Stuffed
              data={data}
              handleInput={handleInput}
              handleCollapsible={handleCollapsible}
              classCollapsible={classCollapsible}
            />
            <Share
              disable={disable}
              data={data}
              handleCreateBtn={handleCreateCard}
              handleCollapsible={handleCollapsible}
              classCollapsible={classCollapsible}
              dataApi={dataAPI}
              message={
                dataAPI.success === true
                  ? `La tarjeta ha sido creada : `
                  : `Falta algún dato`
              }
            />
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Card;
