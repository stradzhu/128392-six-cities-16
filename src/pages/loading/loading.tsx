import './style.css';

function LoadingScreen(): JSX.Element {
  // console.log('LoadingScreen');
  return (
    <div className="loading">
      <div className="loading__block">
        <div className="loading__text">
          Loading...
        </div>
        <img className="loading__img" src="/img/spinner.svg" alt=""/>
      </div>

    </div>
  );
}

export default LoadingScreen;
