import React from 'react'
import ProductCard from './ProductCard'

export default {
  title: 'Component/ProductCard',
  component: ProductCard,
}

const Template = args => <ProductCard {...args} />

export const WithName = Template.bind({})
WithName.args = {
  name: 'Food product name',
  description: 'This is a food product',
  image: 'https://www.baristaproshop.com/images/big_prod3523.jpg',
}

export const WithoutName = Template.bind({})
WithoutName.args = {
  description: 'This is a food product',
  image: 'https://www.baristaproshop.com/images/big_prod3523.jpg',
}

export const WithoutImage = Template.bind({})
WithoutImage.args = {
  name: 'Food product name',
  description: 'This is a food product',
}
