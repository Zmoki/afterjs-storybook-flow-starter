import React from 'react'
import {storiesOf} from '@storybook/react'
import Layout from '../src/components/Layout'

storiesOf('components/Layout', module)
  .add('default', () => (
    <Layout>I‘m inside layout</Layout>
  ))
