import React from 'react'
import BackButton from './BackButton'

export default {
  title: 'Component/BackButton',
  component: BackButton,
}

const Template = args => <BackButton {...args} />

export const back = Template.bind({})
back.args = {}
