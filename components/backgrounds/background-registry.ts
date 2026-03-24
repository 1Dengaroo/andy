export interface BackgroundDefinition {
  id: string;
  name: string;
}

export const backgrounds: BackgroundDefinition[] = [
  { id: 'none', name: 'None' },
  { id: 'cosmos', name: 'Cosmos' },
  { id: 'aurora', name: 'Aurora' },
  { id: 'grid', name: 'Grid' }
];
