import React from 'react'
import RecipeForm from './RecipeForm'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Component/RecipeForm',
  component: RecipeForm,
}

const Template = args => <RecipeForm {...args} />

export const Form = Template.bind({})
Form.args = {
  onAddRecipe: action(add => console.log(add)),
}
