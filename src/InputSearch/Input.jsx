import { useState } from 'react';
import './input.css'

const Input = () => {
  const cricketPlayers = [
  {
    id: 1,
    name: "Virat Kohli",
    team: "India",
    role: "Batter",
    country: "India",
  },
  {
    id: 2,
    name: "Kane Williamson",
    team: "New Zealand",
    role: "Batter",
    country: "New Zealand",
  },
  {
    id: 3,
    name: "Ben Stokes",
    team: "England",
    role: "All-rounder",
    country: "England",
  },
  {
    id: 4,
    name: "Pat Cummins",
    team: "Australia",
    role: "Bowler",
    country: "Australia",
  },
  {
    id: 5,
    name: "Jasprit Bumrah",
    team: "India",
    role: "Bowler",
    country: "India",
  },
  {
    id: 6,
    name: "Babar Azam",
    team: "Pakistan",
    role: "Batter",
    country: "Pakistan",
  },
  {
    id: 7,
    name: "Quinton de Kock",
    team: "South Africa",
    role: "Wicket-keeper",
    country: "South Africa",
  },
  {
    id: 8,
    name: "Shakib Al Hasan",
    team: "Bangladesh",
    role: "All-rounder",
    country: "Bangladesh",
  },
];
    const [results,setResults] = useState(cricketPlayers)

const handleSearchCricker = (e) => {
    const value = e.target.value;
//    const filterValues =  cricketPlayers.filter((e)=> e.name.toLowerCase().includes(value.toLowerCase()))
const checkPlayers = []
  for(let i=0;i<cricketPlayers.length;i++){
    if(cricketPlayers[i].name.toLowerCase().includes(value)){
        checkPlayers.push(cricketPlayers[i])
    }
  }
   setResults(checkPlayers)
}
    return (
        <main className="players-page">
            <section className="players-panel" aria-labelledby="players-title">
                <header className="players-header">
                    <span className="players-eyebrow">THE PLAYER DIRECTORY</span>
                    <h1 id="players-title">Find your <span>favorite</span> player</h1>
                    <p>Explore some of the biggest names in international cricket.</p>
                </header>
                <div className="search">
                    <span className="search-icon" aria-hidden="true">⌕</span>
                    <input type="search"
                    placeholder="Search for a player..."
                    aria-label="Search for a player" onChange={handleSearchCricker} />
                    <span className="search-hint">Players</span>
                </div>
                <section className="players_container" aria-label="Cricket players">
                    <div className="players">
                        {
                            results.length === 0 ? (
                                <p className="empty-state">No cricketers found.</p>
                            ) : (
                                results.map((ele) => (
                                    <article className="player-card" key={ele.id}>
                                        <div className="player-avatar" aria-hidden="true">
                                            {ele.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}
                                        </div>
                                        <div className="player-details">
                                            <h2>{ele.name}</h2>
                                            <p>{ele.country}</p>
                                        </div>
                                        <span className="player-role">{ele.role}</span>
                                    </article>
                                ))
                            )
                        }
                    </div>
                </section>
            </section>
        </main>
    )
}

export default Input