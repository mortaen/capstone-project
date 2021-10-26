import React from 'react'
import Recipes from './Recipes'

export default {
  title: 'Component/Recipes',
  component: Recipes,
}

const Template = args => <Recipes {...args} />

export const Example = Template.bind({})
Example.args = {
  recipeData: [
    {
      name: 'Vegan Yoghurt Sauce',
      id: '1',
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
    },
  ],
}
