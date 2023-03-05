import { RuleDefinition } from '@sketch-hq/sketch-assistant-types'

export const emptyGroup: RuleDefinition = {
    rule: async (context) => {
      const { utils } = context
      for (const group of utils.objects.group) {
        if (group.layers.length === 0) {
          utils.report(`Group “${group.name}” is empty`, group)
        }
      }
    },
    name: 'leanix-ux-assistant/empty-group',
    title: 'Empty Groups',
    description: 'Reports any empty groups in the document',
  }
  