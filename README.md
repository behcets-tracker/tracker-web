# bechets-tracker-web [![Build Status](https://travis-ci.org/behcets-tracker/tracker-web.svg?branch=master)](https://travis-ci.org/behcets-tracker/tracker-web)

The purpose of this app is to keep track of any behcets medical
records. Basically turn this set of spreadsheets into apps:
http://www.behcets.com/site/c.8oIJJRPsGcISF/b.9298129/k.8DC6/Recordkeeping.htm

The stack of choice is:

* [React](https://facebook.github.io/react/): Frontend framework for building user interfaces
* [Apollo Client](https://github.com/apollographql/apollo-client): Fully-featured, production ready caching GraphQL client
* [Graphcool](https://www.graph.cool): Flexible backend platform combining GraphQL + AWS Lambda


## Development

```sh
git clone git@github.com:behcets-tracker/tracker-web.git
cd tracker-web
yarn install
yarn start # open http://localhost:3000 in your browser
```

If you want to run all the tests you can run:

```sh
yarn test
```

Or just one suite

```sh
yarn test:acceptance
## Or
yarn test:unit
```

Current GraphQL schema:

```
type File {
  contentType: String!
  createdAt: DateTime
  id: ID!
  name: String!
  secret: String!
  size: Int!
  updatedAt: DateTime
  url: String!
}

type Medication {
  createdAt: DateTime!
  dailyQuantity: Int
  dateEnded: DateTime
  dateStarted: DateTime
  dosage: Int
  drugName: String
  endReason: String
  id: ID!
  physicianName: String
  sideEffects: [SideEffect!]! @relation(name: "MedicationOnSideEffect")
  startReason: String
  type: String!
  updatedAt: DateTime!
  user: User @relation(name: "UserOnMedication")
}

type SideEffect {
  createdAt: DateTime!
  description: String
  id: ID!
  medications: [Medication!]! @relation(name: "MedicationOnSideEffect")
  name: String
  updatedAt: DateTime!
}

type Surgery {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  user: User @relation(name: "UserOnSurgery")
}

type Symptom {
  createdAt: DateTime!
  description: String
  id: ID!
  name: String
  question: [String!]!
  updatedAt: DateTime!
  user: User @relation(name: "UserOnSymptom")
}

type User {
  auth0UserId: String
  createdAt: DateTime
  displayName: String
  emailAddress: String
  id: ID!
  medications: [Medication!]! @relation(name: "UserOnMedication")
  name: String
  surgeries: [Surgery!]! @relation(name: "UserOnSurgery")
  symptoms: [Symptom!]! @relation(name: "UserOnSymptom")
  updatedAt: DateTime
}
```
