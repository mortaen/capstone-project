import { action } from '@storybook/addon-actions'
import React from 'react'
import ShowAllButton from './ShowAllButton'

export default {
  title: 'Component/ShowAllButton',
  component: ShowAllButton,
}

const Template = args => <ShowAllButton {...args} />

export const button = Template.bind({})
button.args = {
  showAllProducts: action(click => console.log(click)),
}
