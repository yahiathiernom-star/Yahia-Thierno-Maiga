import { useState } from 'react'
import UserProfile from './../component/UserProfile'
import MoviesList from './../component/MoviesList'

function Home() {
    const [counter, setCounter] = useState(0);
    const [showUsers, setShowUsers] = useState(true);

    const users = [
        { firstName: "Yahia", lastName: "Maiga", birthdate: "28/04" },
        { firstName: "Yaqub", lastName: "Maiga", birthdate: "13/04" },
        { firstName: "Jimel", lastName: "Toure", birthdate: "03/07" },
        { firstName: "Aminata", lastName: "Konate", birthdate: "12/08" },
    ];

    const films = [
        { filmname: "Le Roi Lion", datedesortie: "1994", genre: "Animation / Aventure", syno: "Simba, un jeune lion, doit reprendre sa place de roi après la mort de son père." },
        { filmname: "Titanic", datedesortie: "1997", genre: "Drame / Romance", syno: "Jack et Rose tombent amoureux sur le Titanic, un paquebot voué à couler." },
        { filmname: "Spiderman", datedesortie: "2002", genre: "Super-héros / Action", syno: "Peter Parker est mordu par une araignée et devient Spider-Man pour sauver New York." },
    ];
    return (
        <>
            <div>
                <h1>Home</h1>
                <p>this is Home page </p>
            </div>
            <div className='test'>
                <div className='counter-box'>
                    <h1>Counter</h1>
                    <p className='count'>{counter}</p>
                    <div className='btn-group'>
                        <button className='btn-add' onClick={() => setCounter(counter + 1)}>+ Ajouter</button>
                        <button className='btn-remove' onClick={() => setCounter(counter === 0 ? 0 : counter - 1)}>− Enlever</button>
                    </div>
                </div>
                <div className='section-header'>
                    <h1>Les utilisateurs</h1>
                    <button className='btn-toggle' onClick={() => setShowUsers(!showUsers)}>
                        {showUsers ? 'Cacher' : 'Afficher'}
                    </button>
                </div>

                <div className='grid'>
                    {showUsers && users.map((user, id) => (
                        <UserProfile
                            key={id}
                            firstName={user.firstName}
                            lastName={user.lastName}
                            birthdate={user.birthdate}
                        />
                    ))}
                </div>

                <h1>Les films</h1>
                <div className='grid'>
                    {films.map((film, id) => (
                        <MoviesList
                            key={id}
                            filmname={film.filmname}
                            datedesortie={film.datedesortie}
                            genre={film.genre}
                            syno={film.syno}
                        />
                    ))}
                </div>

            </div>
        </>
    );
}
export default Home;