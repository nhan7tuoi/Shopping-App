// import React from 'react';
// import HomeIcon from './HomeIcon.svg';
// import CartIcon from './CartIcon.svg';
// import ProfileIcon from './ProfileIcon.svg';
// import NotifycationIcon from './NotifycationIcon.svg';

// const Svgs = {
//   HomeIcon,
//   CartIcon,
//   ProfileIcon,
//   NotifycationIcon
// }

// export default {
//   Icon: ({name = '', height, width}) => {
//     if (name in Svgs) {
//       const Icons = Svgs[name];
//       return <Icons height={height} width={width} />;
//     } else {
//       return null;
//     }
//   },
// };
import React from 'react';
import HomeIcon from './HomeIcon.svg';
import CartIcon from './CartIcon.svg';
import ProfileIcon from './ProfileIcon.svg';
import NotifycationIcon from './NotifycationIcon.svg';

const Svgs: { [key: string]:any} = {
  HomeIcon,
  CartIcon,
  ProfileIcon,
  NotifycationIcon,
}

interface IconProps {
  name: string;
  height?: string | number;
  width?: string | number;
}

const Icon: React.FC<IconProps> = ({ name = '', height, width }) => {
  if (name in Svgs) {
    const SvgIcon = Svgs[name];
    return <SvgIcon height={height} width={width} />;
  } else {
    return null;
  }
}

export default {
  Icon,
};

