interface SeedData {
  entries: SeedEntry[]
}

interface SeedEntry {
  description: string
  status: string
  createdAt: number
}

export const seedData: SeedData = {
  entries: [
    {
      description: 'next-up: todo 1',
      status: 'next-up',
      createdAt: Date.now(),
    },
    {
      description: 'in-progress: todo 2',
      status: 'in-progress',
      createdAt: Date.now() - 10000000,
    },
    {
      description: 'completed: todo 3',
      status: 'completed',
      createdAt: Date.now() - 100000,
    },
  ],
}
