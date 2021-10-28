import React from 'react'
import NavButton from './NavButton'

export default {
  title: 'Component/NavButton',
  component: NavButton,
}

const Template = args => <NavButton {...args} />

export const WithNavMenuOpen = Template.bind({})
WithNavMenuOpen.args = {
  navigation: true,
}

export const WithNavMenuClosed = Template.bind({})
WithNavMenuClosed.args = {
  navigation: false,
}
