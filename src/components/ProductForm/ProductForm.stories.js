import React from 'react'
import ProductForm from './ProductForm'

export default {
  title: 'Component/ProductForm',
  component: ProductForm,
}

const Template = args => <ProductForm {...args} />

export const Form = Template.bind({})
Form.args = {}
