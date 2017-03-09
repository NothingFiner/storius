import React from 'react';
import { Link } from 'react-router';


const Search = ({ results }) => {
  const storiResults = [];
  const userResults = [];

  results.forEach((result) => {
    if (result.searchable_type === 'Stori') {
      storiResults.push(result);
    } else if (result.searchable_type === 'User') {
      userResults.push(result);
    }
  });

  const displayStoriResults = () => {
    if (storiResults.length > 0) {
      return (
        <section id="storiResults">
          <h5>Stori</h5>
          <ul>
            {
              storiResults.map(storiResult => (
                <li key={`${storiResult.searchable_type}-${storiResult.searchable_id}`}>
                  <Link to={`storis/${storiResult.searchable_id}`}>
                    <div>
                      <img alt={`result-art-${storiResult.title}`} src={storiResult.image_url} />
                    </div>
                    <div>
                      {storiResult.title}
                      <span>{storiResult.author}</span>
                    </div>
                  </Link>
                </li>
              ))
            }
          </ul>
        </section>
      );
    }
    return null;
  };
  return (
    <div className="searchResults">
      <header>
        <h4>Search Results</h4>
      </header>
      {displayStoriResults()}
    </div>
  );
};

Search.propTypes = {
  results: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default Search;
