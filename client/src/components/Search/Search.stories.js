import { action } from '@storybook/addon-actions'
import React from 'react'
import Search from './Search'

export default {
  title: 'Component/Search',
  component: Search,
}

const Template = args => <Search {...args} />

export const Searchbar = Template.bind({})
Searchbar.args = {
  onSearchInput: action(search => console.log(search)),
}
