import React from 'react'
import ProductForm from './ProductForm'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Component/ProductForm',
  component: ProductForm,
}

const Template = args => <ProductForm {...args} />

export const Form = Template.bind({})
Form.args = {
  onAddProduct: action(add => console.log(add)),
}
