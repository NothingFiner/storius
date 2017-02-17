import React from 'react';
import TopStoris from './top_storis';

class Index extends React.Component {
  componentDidMount() {
    this.props.fetchStoris();
  }

  render() {
    return (
      <div>
        <section className="container bg-white">
          <h1>Every Song is a Stori, everything is a Stori!</h1>
        </section>
        <section>
          <TopStoris storis={this.props.storis} />
        </section>
      </div>
    );
  }
}

Index.propTypes = {
  fetchStoris: React.PropTypes.func.isRequired,
};

export default Index;
