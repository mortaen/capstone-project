import React from 'react'
import { AiOutlineFileAdd } from 'react-icons/ai'
import CustomLink from './CustomLink'

export default {
  title: 'Component/CustomLink',
  component: CustomLink,
}

const Template = args => <CustomLink {...args} />

export const add = Template.bind({})
add.args = {
  path: '/product-form',
  name: 'Add Item',
  icon: <AiOutlineFileAdd />,
}
