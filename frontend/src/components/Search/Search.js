import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import classes from './search.module.css';

Search.defaultProps = {
  searchRoute: '/Menu/search/',
  defaultRoute: '/',
};

export default function Search({ searchRoute, defaultRoute, margin }) {
  const [term, setTerm] = useState('');
  const navigate = useNavigate();
  const { searchTerm } = useParams();

  useEffect(() => {
    setTerm(searchTerm ?? '');
  }, [searchTerm]);

  const search = async () => {
    term ? navigate(searchRoute + term) : navigate(defaultRoute);
  };
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
      <h3>Feast <span>Your Way </span>Home</h3>
     <div className={classes.searchContainer} style={{ margin }}>
      <input
        type="text"
        placeholder="Type here..."
        onChange={e => setTerm(e.target.value)}
        onKeyUp={e => e.key === 'Enter' && search()}
        value={term}
      />
      <button onClick={search}>Search</button>
    </div>
    </div>
    </div>
  );
}
