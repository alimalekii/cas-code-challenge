import './style.css';

import { useNavigate } from 'react-router-dom';

const IntroCard = (props: { title: string; link: string }) => {
  const { title, link } = props;
  const navigate = useNavigate();

  const handleNavigate = (link: string) => {
    return navigate(link);
  };

  return (
    <div
      className="cas-main__intro-box__item"
      onClick={() => handleNavigate(link)}
    >
      <h2>{title}</h2>
    </div>
  );
};

const MainPage = () => {
  return (
    <div className="cas-main">
      <div className="cas-main__intro-box">
        <IntroCard title="TaskOne" link="task_one" />
        <IntroCard title="TaskTwo" link="task_two" />
      </div>
    </div>
  );
};

export default MainPage;
