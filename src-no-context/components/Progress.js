function Progress({ index, numQuestions, points, totalPoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question
        <strong>
          {' ' + ++index} / {numQuestions}
        </strong>
      </p>
      <p>
        <strong>
          {points} / {totalPoints + ' '}
        </strong>
        Points
      </p>
    </header>
  );
}

export default Progress;
