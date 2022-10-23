# NLW eSports HTTP Server

## Installation

### Before you start

Don't forget to install all of dependencies required to get the service up and running by executing the following command:
```
yarn install
```

### Getting Started

Start the seed migration to the DB that is located at `prisma/seed.ts`. To get that, you have to run the following command:

```
yarn run prisma db seed
```

## Use Cases

- The listing of games with the number of ads
- The User can create new ads
- The User can list all ads per game
- The user can search the Discord ID of another user by giving the Ads ID

## Data Model

### Game

```
model Game {
  id                 String   @id @default(uuid())
  title              String
  backgroundImageUrl String
  ads                Ad[]
  createdAt          DateTime @default(now())
  updatedAt          DateTime @default(now())
}
```

### Ad

```
model Ad {
  id              String   @id @default(uuid())
  gameId          String
  name            String
  yearsPlaying    Int
  discord         String
  weekDays        String
  hoursStart      Int
  hoursEnd        Int
  useVoiceChannel String
  createdAt       DateTime @default(now())
  updatedAt       DateTime @default(now())

  game Game @relation(fields: [gameId], references: [id])
}
```

## Technical Stack

- Language: TypeScript & NodeJS
- HTTP Server: Express
- Database: SQLite
- Database ORM: Primsa

## Clean Architecture Diagrams

![Alt text](./docs/nlw-esports-clean-architecture.png?raw=true")

