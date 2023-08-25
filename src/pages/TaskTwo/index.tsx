const makeRandomCard = () => {
  const position = Math.floor(Math.random() * (4 - 1) + 1);
  console.log(position);

  return Array(4)
    .fill(null)
    .map((item, id) => ({
      id: id,
      value: id === position ? 'circle' : 'square',
    }));
};

import './style.css';

const Card = (props: { value: string }) => {
  const { value } = props;

  return (
    <div className="cas-task-two__card-wrapper">
      <div className="cas-task-two__card">
        <div className="cas-task-two__card__front">
          <span className={`cas-task-two__${value}`}></span>
        </div>
        <div className="cas-task-two__card__back">
          <span className="cas-task-two__guess">?</span>
        </div>
      </div>
    </div>
  );
};

const TaskTwo = () => {
  const RANDOM_CARDS = makeRandomCard();
  console.log({ RANDOM_CARDS });

  return (
    <div className="cas-task-two">
      <h1>Find the circle!</h1>
      <div className="cas-task-two__box">
        {RANDOM_CARDS.map((card) => (
          <Card key={card.id} value={card.value} />
        ))}
      </div>
    </div>
  );
};

export default TaskTwo;
