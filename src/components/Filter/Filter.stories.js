import { action } from '@storybook/addon-actions'
import React from 'react'
import Filter from './Filter'

export default {
  title: 'Component/Filter',
  component: Filter,
}

const Template = args => <Filter {...args} />

export const example = Template.bind({})
example.args = {
  onCategoryClick: action('filtered by category'),
}
