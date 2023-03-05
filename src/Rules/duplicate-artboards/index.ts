import { RuleDefinition, SketchFileObject } from '@sketch-hq/sketch-assistant-types'

export const duplicateArtboards: RuleDefinition = {
  rule: async (context) => {

    interface Duplicate {
      name: string
      number: number
      object: SketchFileObject
    }

    var duplicates: Array<Duplicate> = [];
    var totalDuplicates: Array<Duplicate> = [];

    for (const artboard of context.utils.objects.artboard) {
      var existingElement = duplicates.find((element) => element.name == artboard.name);
      if (existingElement != null)
        existingElement.number++;
      else
        duplicates.push({ name: artboard.name, number: 1, object:artboard });
    }

    totalDuplicates = (duplicates.filter((element) => element.number > 1));

    totalDuplicates.forEach(element => context.utils.report('\'' + element.name + '\' has a duplicate artboard', element.object));

  },
  name: 'leanix-ux-assistant/duplicate-artboards',
  title: 'Duplicate Artboards',
  description: 'Reports duplicate artboards in your sketch file.',
}