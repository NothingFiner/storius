import React from 'react';
import TopStoris from './top_storis';

class Index extends React.Component {
  componentDidMount() {
    this.props.fetchStoris();
  }

  render() {
    return (
      <div>
        <section className="section-row container bg-white">
          <section className="column">
            <h1>Every Song is a Stori, everything is a Stori!</h1>
          </section>
        </section>
        <section className="section-row">
          <TopStoris storis={this.props.storis} />
        </section>
      </div>
    );
  }
}

Index.propTypes = {
  fetchStoris: React.PropTypes.func.isRequired,
  storis: React.PropTypes.arrayOf(React.PropTypes.object),
};

Index.defaultProps = {
  storis: [],
};

export default Index;
