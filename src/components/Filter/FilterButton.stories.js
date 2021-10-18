import React from 'react'
import FilterButton from './FilterButton'

export default {
  title: 'Component/FilterButton',
  component: FilterButton,
}

const Template = args => <FilterButton {...args} />

export const button = Template.bind({})
button.args = {}
