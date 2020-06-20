import React, { Component } from 'react';

import { Title } from '../components/title'
import { SearchForm } from '../components/searchForm'
import { MoviesList } from '../components/moviesList';


export class Home extends Component {
    state = { usedSearch: false }

    _handleResults = (results) => {
        this.setState({ results, usedSearch: true })
      }
    
      _renderResults = () => {
        console.log(this.state.results);
    
        return this.state.results.length === 0
          ? <p>Sorry! Results not found.</p>
          : <MoviesList movies={this.state.results} />
      }
    
    render() {
        return (
            <div>
                <Title>Search movies</Title>
                <div className="searchForm-wrapper">
                    <SearchForm onResults={this._handleResults} />
                </div>
                {this.state.usedSearch
                    ? this._renderResults()
                    : <p>Use the form to search a movie.</p>}
            </div>
        )
    }
}