import React, { useMemo, memo } from "react";
import { createFromIconfontCN } from "@ant-design/icons";
import classnames from "classnames";
import { NavLink } from "react-router-dom";
import styles from "./aside.module.less";
import asideMap from "./aside_map";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "~/assets/logo.svg";

import { setAsidePath } from "../actions";
import { bindActionCreators } from "redux";
// iconfont
const Icons = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1759395_tcrvu21jqq.js",
});

const NextComItem = memo(({ to, name, setAsidePath, path }) => {
  return (
    <li>
      <NavLink
        to={to}
        activeClassName={styles.active}
        onClick={() => setAsidePath(path)}
      >
        {name}
      </NavLink>
    </li>
  );
});

// root
const RootTreeItem = memo(({ item, setAsidePath, asidePath }) => {
  return (
    <div className={styles.brick}>
      {item.to ? (
        <a
          href={item.to}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.brick_wrap}
        >
          <Icons className={styles.brick_icon} type={item.type} />
          <div className={styles.brick_text}>{item.name}</div>
        </a>
      ) : (
        <div className={styles.nav_next_w}>
          <NavLink
            to={item.path}
            className={classnames(styles.brick_wrap, {
              [styles.active]: asidePath === item.path,
            })}
            onClick={() => setAsidePath(item.path)}
          >
            <Icons className={styles.brick_icon} type={item.type} />
            <div className={styles.brick_text}>{item.name}</div>
          </NavLink>
          {item.next ? (
            <div
              className={styles.menu_lev2}
              style={{ height: item.next.length * 41 + 5 + "px" }}
            >
              <ul className={styles.next}>
                {item.next.map((item_, i) => (
                  <NextComItem
                    key={i}
                    to={item.path + item_.path}
                    name={item_.name}
                    path={item.path}
                    setAsidePath={setAsidePath}
                  />
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
});

const RootTree = (props) => {
  return asideMap.map((item, i) => (
    <RootTreeItem key={i} item={item} {...props} />
  ));
};

const Aside = (props) => {
  const {
    dispatch,
    commonReducer: { asidePath },
  } = props;

  const setAsidePathCbs = useMemo(
    () => bindActionCreators({ setAsidePath }, dispatch),
    [dispatch]
  );

  return (
    <div className={styles.left_tree}>
      <div className={styles.tree_wrap}>
        <div className={styles.brick}>
          <Logo className={styles.logo} />
        </div>
        {<RootTree {...setAsidePathCbs} asidePath={asidePath} />}
      </div>
    </div>
  );
};

const mapStateToProps = function (state) {
  return state;
};

export default connect(mapStateToProps)(Aside);
