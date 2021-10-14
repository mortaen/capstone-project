import React from 'react'
import AddItemButton from './AddItemButton'

export default {
  title: 'Component/AddItemButton',
  component: AddItemButton,
}

const Template = args => <AddItemButton {...args} />

export const add = Template.bind({})
add.args = {}
