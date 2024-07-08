import { PrismaClient, TaskStatus } from '@prisma/client';
import { config } from 'dotenv';
const bcrypt = require('bcrypt');

config();

const prisma = new PrismaClient();

async function main() {
  const hashedPassword: string = await bcrypt.hash('1234', 10);
  const user = await prisma.user.create({
    data: {
      username: 'test-user',
      password: hashedPassword,
    },
  });

  await prisma.task.create({
    data: {
      title: 'Task 1',
      description: 'Description for Task 1',
      status: TaskStatus.pending,
      dueDate: new Date('2024-07-10T10:00:00Z'),
      user: { connect: { id: user.id } },
    },
  });

  await prisma.task.create({
    data: {
      title: 'Task 2',
      description: 'Description for Task 2',
      status: TaskStatus.completed,
      dueDate: new Date('2024-07-15T10:00:00Z'),
      user: { connect: { id: user.id } },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
