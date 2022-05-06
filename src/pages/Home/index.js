import './styles.scss';
import profileImage from '../../images/me.png';
import boxImage from '../../images/box.svg';
import arrowImage from '../../images/arrow.svg';
import LINKS from '../../graphql/queries/links';
import { useQuery } from '@apollo/client';

function Home() {

  const {loading, data} = useQuery(LINKS)

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <header>
        <img src={profileImage} className='profileImage' alt='Giovanna Moeller'/>
        <div className='name-box'>
          <div className='box-image'>
            <img src={boxImage} alt='Box'/>
            <img src={arrowImage} alt='Arrow' className='arrow-image'/>
          </div>
          <h1>
            Giovanna Moeller
          </h1>
        </div>
        <span>iOS and Web Developer.</span>
      </header>
      <section className='links'>
        {data.allLinks.map(link => {
          return (
            <a href={link.url} target='_blank' className='link' key={link.name} rel='noreferrer'>
              <span>{link.name}</span>
              <img src={link.icon.url} alt={link.name}/>
            </a>
          )
        })}
      </section>
    </main>
  );
}

export default Home;
