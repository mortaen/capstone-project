import { action } from '@storybook/addon-actions'
import React from 'react'
import Filter from './Filter'

export default {
  title: 'Component/Filter',
  component: Filter,
}

const Template = args => <Filter {...args} />

export const WithoutActiveCategory = Template.bind({})
WithoutActiveCategory.args = {
  onCategoryClick: action('filtered by category'),
  filterCategories: ['plant milk', 'plant yoghurt', 'meat alternative'],
  activeCategory: '',
}

export const WithActiveCategory = Template.bind({})
WithActiveCategory.args = {
  onCategoryClick: action('filtered by category'),
  filterCategories: ['plant milk', 'plant yoghurt', 'meat alternative'],
  activeCategory: 'plant milk',
}
