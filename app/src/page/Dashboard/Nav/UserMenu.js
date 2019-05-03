import React from "react";

import { Menu, Text } from "grommet";

import { Avatar } from "./Avatar";

export const UserMenu = ({ user = {}, items = [], ...rest }) => {
  // const [avatar, setAvatar] = React.useState('user')
  // React.useLayoutEffect(() => {
  //   setAvatar(user.thumbnail);
  //   console.log(user.given_name)
  // }, [user])
  return (
    <Menu
      dropAlign={{ top: "bottom", right: "right" }}
      icon={false}
      items={items.map(item => ({
        ...item,
        label: <Text size="small">{item.label}</Text>,
        onClick: () => { } // no-op
      }))}
      label={<Avatar name={user.name} url={user.thumbnail} />}
      {...rest}
    />
  );
}