import 'server-only';
import { prisma } from './prisma';

export async function getAllPosts() {
  return await prisma.post.findMany({
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
}

export async function createPost(data: {
  title: string;
  content: string;
  userId: string;
}) {
  return await prisma.post.create({
    data,
  });
}

export async function getPostById(id: string) {
  return await prisma.post.findUnique({
    where: { id },
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });
}
