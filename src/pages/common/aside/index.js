import React, { useMemo, memo, useState, useEffect } from "react";
import { createFromIconfontCN } from "@ant-design/icons";
import classnames from "classnames";
import { NavLink, withRouter, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { setAsidePath } from "../actions";
import { bindActionCreators } from "redux";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { ReactComponent as Logo } from "~/assets/logo.svg";
import { Avatar } from "antd";
import styles from "./index.module.less";
import asideMap from "./aside_map";
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

const NextCom = ({ path, next }) =>
  next ? (
    <div
      className={styles.menu_lev2}
      style={{ height: next.length * 41 + 5 + "px" }}
    >
      <ul className={styles.next}>
        {next.map((item_, i) => (
          <NextComItem
            key={i}
            to={path + item_.path}
            name={item_.name}
            path={path}
            setAsidePath={setAsidePath}
          />
        ))}
      </ul>
    </div>
  ) : null;

// root

const RootTreeItem = ({ item, setAsidePath, asidePath }) => {
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
              [styles.brick_wrap_active]: asidePath === item.path,
            })}
            activeClassName={styles.brick_wrap_active}
            onClick={() => setAsidePath(item.path)}
          >
            <Icons className={styles.brick_icon} type={item.type} />
            <div className={styles.brick_text}>{item.name}</div>
          </NavLink>
          <NextCom next={item.next} path={item.path} />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = function (state) {
  return state;
};
// withRouter 在 connect 的外部，防止路由更新，组件未重新渲染
const RootTree = withRouter(
  connect(mapStateToProps)((props) => {
    const { commonReducer: asidePath, dispatch } = props;

    const { pathname } = useLocation();
    const rootPath = useMemo(() => `/${pathname.split("/")[1]}`, [pathname]);

    // 初始化页面 改变asidePath
    useEffect(() => {
      dispatch(setAsidePath(rootPath));
    }, [dispatch, rootPath]);

    const setAsidePathCbs = useMemo(
      () => bindActionCreators({ setAsidePath }, dispatch),
      [dispatch]
    );

    return asideMap.map((item, i) => (
      <RootTreeItem
        key={i}
        item={item}
        {...setAsidePathCbs}
        asidePath={asidePath}
      />
    ));
  })
);

const TreeBottom = () => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.tree_bottom}>
      <div className={styles.avatar} onClick={() => setShow(!show)}>
        <Avatar
          style={{ backgroundColor: "#87d068" }}
          icon={<UserOutlined />}
        />
      </div>
      <div
        className={classnames(styles.personal_setting_menu, {
          [styles.show]: show,
        })}
      >
        <div className={styles.menu_triangle} />
        <ul className={styles.menu_items}>
          <li className={styles.group}>
            <a href="/">
              <i>
                <LogoutOutlined />
              </i>
              退出登录
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

// withRouter
const Aside = (props) => {
  return (
    <div className={styles.left_tree}>
      <div className={styles.tree_wrap}>
        <div className={styles.brick}>
          <Logo className={styles.logo} />
        </div>
        {/* 菜单 */}
        <RootTree />
        <TreeBottom />
      </div>
    </div>
  );
};

export default Aside;
