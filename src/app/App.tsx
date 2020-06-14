import React, { Fragment } from "react";

import "./App.scss";
import { Users } from "./components/Users/Users";
import Layout from "./components/Layout/Layout";
import Spinner from "./components/common/Spinner";
export class App extends React.PureComponent {
  state = {
    loading: false,
  };

  componentWillMount() {
    this.isLoading(true);
  }

  isLoading = (loadingState: boolean) => {
    this.setState({
      loading: loadingState,
    });
  };

  render() {
    return (
      <Fragment>
        {this.state.loading ? (
          <div className="loader">
            <Spinner />
          </div>
        ) : null}
        <div className="appWrapper">
          <Layout />
          <main className="mainWrapper">
            <Users isLoading={this.isLoading} />
          </main>
        </div>
      </Fragment>
    );
  }
}
