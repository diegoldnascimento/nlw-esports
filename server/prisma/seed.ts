import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const games = [
    {
      title: 'World of Warcraft',
      backgroundImageUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/18122-188x250.jpg',
    },
    {
      title: 'Just Chatting',
      backgroundImageUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/509658-188x250.jpg',
    },
    {
      title: 'Overwatch 2',
      backgroundImageUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/515025_IGDB-188x250.jpg',
    },
    {
      title: 'League of Legends',
      backgroundImageUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg',
    },
    {
      title: 'Dota 2',
      backgroundImageUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/29595-188x250.jpg'
    }
  ];

  for (const game of games) {
    const gameCreated = await prisma.game.create({
      data: {
        ...game,
      }
    });

    const ad = {
      gameId: gameCreated.id,
      name: 'John Doe',
      yearsPlaying: 10,
      discord: 'JohnDoe#1234',
      weekDays: 'm,1',
      hoursStart: 10,
      hoursEnd: 20,
      useVoiceChannel: '1'
    }

    if (game && game.title == 'World of Warcraft') {
      await prisma.ad.create({
        data: {
          ...ad,
        }
      })
    }
  }
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
