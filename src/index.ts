import CoreAssistant from '@sketch-hq/sketch-core-assistant'
import { AssistantPackage } from '@sketch-hq/sketch-assistant-types'
import _ from 'lodash'

import { duplicateArtboards } from './rules/duplicate-artboards'
import { emptyGroup } from './rules/empty-group'

const assistant: AssistantPackage = [
  CoreAssistant,
  async () => {
    return {
      name: 'leanix-ux-assistant',
      rules: [
        duplicateArtboards,
        emptyGroup,
      ],
      config: {
        rules: {
          'leanix-ux-assistant/duplicate-artboards': { active: true },
          'leanix-ux-assistant/empty-group': { active: true },
          'leanix-ux-assistant/text-disallow': {
            active: true,
            //patterns in lowercase, will be checked case insensitive
            pattern: ['lorem ipsum'],
          },
        }, 
      },
    }
  },
]

export default assistant