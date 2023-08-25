import './style.css';

import { PropsWithChildren } from 'react';

const Main = (props: PropsWithChildren) => {
  const { children } = props;
  return <main className="cas-main">{children}</main>;
};

export default Main;
