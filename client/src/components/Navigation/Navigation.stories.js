import React from 'react'
import Navigation from './Navigation'

export default {
  title: 'Component/Navigation',
  component: Navigation,
}

const Template = args => <Navigation {...args} />

export const NavMenu = Template.bind({})
NavMenu.args = {}
