import { action } from '@storybook/addon-actions'
import React from 'react'
import RecipeCard from './RecipeCard'

export default {
  title: 'Component/RecipeCard',
  component: RecipeCard,
}

const Template = args => <RecipeCard {...args} />

export const WithName = Template.bind({})
WithName.args = {
  name: 'Vegan Yoghurt Sauce',
  ingredients: [
    '125g vegan yoghurt',
    '1 tbsp extra virgin olive oil',
    '2 tbsp lemon juice',
    '1 tsp fresh mint',
    '2 cloves of garlic',
    '1/2 teaspoon sea salt',
    'pepper',
  ],
  image:
    'https://simpleveganblog.com/wp-content/uploads/2015/09/Vegan-yogurt-sauce.jpg',
}

export const WithoutName = Template.bind({})
WithoutName.args = {
  ingredients: [
    '125g vegan yoghurt',
    '1 tbsp extra virgin olive oil',
    '2 tbsp lemon juice',
    '1 tsp fresh mint',
    '2 cloves of garlic',
    '1/2 teaspoon sea salt',
    'pepper',
  ],
  image:
    'https://simpleveganblog.com/wp-content/uploads/2015/09/Vegan-yogurt-sauce.jpg',
  onDetailsButtonClick: action(click => console.log(click)),
}

export const WithoutImage = Template.bind({})
WithoutImage.args = {
  name: 'Vegan Yoghurt Sauce',
  ingredients: [
    '125g vegan yoghurt',
    '1 tbsp extra virgin olive oil',
    '2 tbsp lemon juice',
    '1 tsp fresh mint',
    '2 cloves of garlic',
    '1/2 teaspoon sea salt',
    'pepper',
  ],
  onDetailsButtonClick: action(click => console.log(click)),
}

export const WithDetails = Template.bind({})
WithDetails.args = {
  name: 'Vegan Yoghurt Sauce',
  ingredients: [
    '125g vegan yoghurt',
    '1 tbsp extra virgin olive oil',
    '2 tbsp lemon juice',
    '1 tsp fresh mint',
    '2 cloves of garlic',
    '1/2 teaspoon sea salt',
    'pepper',
  ],
  instructions:
    'Mix all the ingredients in a bowl. Keep in the fridge for at least 30 minutes.',
  image:
    'https://simpleveganblog.com/wp-content/uploads/2015/09/Vegan-yogurt-sauce.jpg',
  onDetailsButtonClick: action(click => console.log(click)),
  showDetails: true,
}
