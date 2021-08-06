import { FunctionalComponent, h } from 'preact';
import style from './style.css';

// https://www.seehearparty.com/party/:id
const Home: FunctionalComponent = () => {
    return (
        <div>
            <h1>Make a game</h1>
            <button>Create Game</button>

            <h1>Join Game</h1>
            <input type="text" placeholder={'MTIzNDVkZg=='} />
            <button>Join game</button>
        </div>
    );
};

export default Home;
