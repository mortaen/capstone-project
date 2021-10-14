import React from 'react'
import CustomLink from './CustomLink'

export default {
  title: 'Component/CustomLink',
  component: CustomLink,
}

const Template = args => <CustomLink {...args} />

export const add = Template.bind({})
add.args = {}
