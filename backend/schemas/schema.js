import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'
import projects from './projects'
import testimonials from './testimonials'
import brands from './brands'
import abouts from './abouts'
import experiences from './experiences'
import skills from './skills'
import jobExperience from './jobExperience'
import contact from './contact'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    projects,
    testimonials,
    brands,
    abouts,
    skills,
    jobExperience,
    experiences,
    contact
  ]),
})