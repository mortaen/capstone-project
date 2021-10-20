import { action } from '@storybook/addon-actions'
import React from 'react'
import Review from './Review'

export default {
  title: 'Component/Review',
  component: Review,
}

const Template = args => <Review {...args} />

export const WithoutRating = Template.bind({})
WithoutRating.args = {
  ratings: [
    {
      id: '1',
      rating: 0,
    },
  ],
  id: '1',
  onAddRating: action((rating, id) => console.log(rating, id)),
}

export const WithFourStars = Template.bind({})
WithFourStars.args = {
  ratings: [
    {
      id: '1',
      rating: 4,
    },
  ],
  id: '1',
  onAddRating: action((rating, id) => console.log(rating, id)),
}
