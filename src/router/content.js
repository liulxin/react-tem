import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "./router_map";

import { Spin } from "antd";
import index_styles from "./index.module.less";
import load_styles from "./spin_loading.module.less";

// route spin loading
const SpinLoading = () => (
  <div className={load_styles.loading}>
    <Spin />
  </div>
);

const Content = (props) => {
  return (
    <div className={index_styles.content}>
      <Suspense fallback={<SpinLoading />}>
        <Switch>
          {routes.map((route, i) => {
            return route.redirect ? (
              <Redirect
                key={i}
                to={route.redirect}
                from={route.path}
                exact={route.exact || false}
              />
            ) : (
              <Route
                key={i}
                path={route.path}
                render={() => <route.component {...props} />}
                exact={route.exact || false}
              />
            );
          })}
          <Route path="*">{<div>404</div>}</Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default Content;
