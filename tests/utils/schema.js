const typeDefs = `
enum _ModelMutationType {
  CREATED
  UPDATED
  DELETED
}

# Meta information about the query.
type _QueryMeta {
  count: Int!
}

type AddToMedicationOnSideEffectPayload {
  medicationsMedication: Medication
  sideEffectsSideEffect: SideEffect
}

type AddToUserOnMedicationPayload {
  userUser: User
  medicationsMedication: Medication
}

type AddToUserOnSurgeryPayload {
  userUser: User
  surgeriesSurgery: Surgery
}

type AddToUserOnSymptomPayload {
  userUser: User
  symptomsSymptom: Symptom
}

input AUTH_PROVIDER_AUTH0 {
  # Is returned when calling any of the Auth0 functions which invoke
  # authentication. This includes calls to the Lock widget, to the auth0.js
  # library, or the libraries for other languages. See
  # https://auth0.com/docs/tokens/id_token for more detail
  idToken: String!
}

input AuthProviderSignupData {
  auth0: AUTH_PROVIDER_AUTH0
}

# The 'BigDecimal' scalar type represents signed fractional values with arbitrary precision.
scalar BigDecimal

# The 'BigInt scalar type represents non-fractional signed whole numeric values. BigInt can represent arbitrary big values.
scalar BigInt

input CreateFile {
  name: String!
}

input CreateMedication {
  dailyQuantity: Int
  dateEnded: DateTime
  dateStarted: DateTime
  dosage: Int
  drugName: String
  endReason: String
  physicianName: String
  startReason: String
  type: String
  userId: ID
  sideEffectsIds: [ID!]
  sideEffects: [MedicationsideEffectsSideEffect!]
}

input CreateSideEffect {
  description: String
  name: String
  medicationsIds: [ID!]
  medications: [SideEffectmedicationsMedication!]
}

input CreateSurgery {
  userId: ID
}

input CreateSymptom {
  description: String
  name: String
  question: [String!]
  userId: ID
}

input CreateUser {
  displayName: String
  emailAddress: String
  name: String
  medicationsIds: [ID!]
  medications: [UsermedicationsMedication!]
  surgeriesIds: [ID!]
  symptomsIds: [ID!]
  symptoms: [UsersymptomsSymptom!]
}

scalar DateTime

type File implements Node {
  contentType: String!
  createdAt: DateTime
  id: ID!
  name: String!
  secret: String!
  size: Int!
  updatedAt: DateTime
  url: String!
}

input FileFilter {
  AND: [FileFilter!]
  OR: [FileFilter!]
  contentType: String
  contentType_not: String
  contentType_in: [String!]
  contentType_not_in: [String!]
  contentType_lt: String
  contentType_lte: String
  contentType_gt: String
  contenntType_gte: String
  contentType_contains: String
  contentType_not_contains: String
  contentType_starts_with: String
  contentType_not_starts_with: String
  contentType_ends_with: String
  contentType_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  secret: String
  secret_not: String
  secret_in: [String!]
  secret_not_in: [String!]
  secret_lt: String
  secret_lte: String
  secret_gt: String
  secret_gte: String
  secret_contains: String
  secret_not_contains: String
  secret_starts_with: String
  secret_not_starts_with: String
  secret_ends_with: String
  secret_not_ends_with: String
  size: Int
  size_not: Int
  size_in: [Int!]
  size_not_in: [Int!]
  size_lt: Int
  size_lte: Int
  size_gt: Int
  size_gte: Int
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
}

enum FileOrderBy {
  contentType_ASC
  contentType_DESC
  createdAt_ASC
  createdAt_DESC
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  secret_ASC
  secret_DESC
  size_ASC
  size_DESC
  updatedAt_ASC
  updatedAt_DESC
  url_ASC
  url_DESC
}

type FilePreviousValues {
  contentType: String!
  createdAt: DateTime
  id: ID!
  name: String!
  secret: String!
  size: Int!
  updatedAt: DateTime
  url: String!
}

input FileSubscriptionFilter {
  AND: [FileSubscriptionFilter!]
  OR: [FileSubscriptionFilter!]

  # The subscription event gets dispatched when it's listed in mutation_in
  mutation_in: [_ModelMutationType!]

  # The subscription event gets only dispatched when one of the updated fields names is included in this list
  updatedFields_contains: String

  # The subscription event gets only dispatched when all of the field names included in this list have been updated
  updatedFields_contains_every: [String!]

  # The subscription event gets only dispatched when some of the field names included in this list have been updated
  updatedFields_contains_some: [String!]
  node: FileSubscriptionFilterNode
}

input FileSubscriptionFilterNode {
  contentType: String
  contentType_not: String
  contentType_in: [String!]
  contentType_not_in: [String!]
  contentType_lt: String
  contentType_lte: String
  contentType_gt: String
  contentType_gte: String
  contentType_contains: String
  contentType_not_contains: String
  contentType_starts_with: String
  contentType_not_starts_with: String
  contentType_ends_with: String
  contentType_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  secret: String
  secret_not: String
  secret_in: [String!]
  secret_not_in: [String!]
  secret_lt: String
  secret_lte: String
  secret_gt: String
  secret_gte: String
  secret_contains: String
  secret_not_contains: String
  secret_starts_with: String
  secret_not_starts_with: String
  secret_ends_with: String
  secret_not_ends_with: String
  size: Int
  size_not: Int
  size_in: [Int!]
  size_not_in: [Int!]
  size_lt: Int
  size_lte: Int
  size_gt: Int
  size_gte: Int
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
}

type FileSubscriptionPayload {
  mutation: _ModelMutationType!
  node: File
  updatedFields: [String!]
  previousValues: FilePreviousValues
}

# The 'Long' scalar type represents non-fractional signed whole numeric values.
# Long can represent values between -(2^63) and 2^63 - 1.
scalar Long

type Medication implements Node {
  createdAt: DateTime!
  dailyQuantity: Int
  dateEnded: DateTime
  dateStarted: DateTime

  # in mg
  dosage: Int
  drugName: String
  endReason: String
  id: ID!
  physicianName: String
  sideEffects(filter: SideEffectFilter, orderBy: SideEffectOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): [SideEffect!]
  startReason: String

  # daily, discontinued, as needed
  type: String!
  updatedAt: DateTime!
  user(filter: UserFilter): User

  # Meta information about the query.
  _sideEffectsMeta(filter: SideEffectFilter, orderBy: SideEffectOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): _QueryMeta!
}

input MedicationFilter {
  AND: [MedicationFilter!]
  OR: [MedicationFilter!]
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  dailyQuantity: Int
  dailyQuantity_not: Int
  dailyQuantity_in: [Int!]
  dailyQuantity_not_in: [Int!]
  dailyQuantity_lt: Int
  dailyQuantity_lte: Int
  dailyQuantity_gt: Int
  dailyQuantity_gte: Int
  dateEnded: DateTime
  dateEnded_not: DateTime
  dateEnded_in: [DateTime!]
  dateEnded_not_in: [DateTime!]
  dateEnded_lt: DateTime
  dateEnded_lte: DateTime
  dateEnded_gt: DateTime
  dateEnded_gte: DateTime
  dateStarted: DateTime
  dateStarted_not: DateTime
  dateStarted_in: [DateTime!]
  dateStarted_not_in: [DateTime!]
  dateStarted_lt: DateTime
  dateStarted_lte: DateTime
  dateStarted_gt: DateTime
  dateStarted_gte: DateTime
  dosage: Int
  dosage_not: Int
  dosage_in: [Int!]
  dosage_not_in: [Int!]
  dosage_lt: Int
  dosage_lte: Int
  dosage_gt: Int
  dosage_gte: Int
  drugName: String
  drugName_not: String
  drugName_in: [String!]
  drugName_not_in: [String!]
  drugName_lt: String
  drugName_lte: String
  drugName_gt: String
  drugName_gte: String
  drugName_contains: String
  drugName_not_contains: String
  drugName_starts_with: String
  drugName_not_starts_with: String
  drugName_ends_with: String
  drugName_not_ends_with: String
  endReason: String
  endReason_not: String
  endReason_in: [String!]
  endReason_not_in: [String!]
  endReason_lt: String
  endReason_lte: String
  endReason_gt: String
  endReason_gte: String
  endReason_contains: String
  endReason_not_contains: String
  endReason_starts_with: String
  endReason_not_starts_with: String
  endReason_ends_with: String
  endReason_not_ends_with: String
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  physicianName: String
  physicianName_not: String
  physicianName_in: [String!]
  physicianName_not_in: [String!]
  physicianName_lt: String
  physicianName_lte: String
  physicianName_gt: String
  physicianName_gte: String
  physicianName_contains: String
  physicianName_not_contains: String
  physicianName_starts_with: String
  physicianName_not_starts_with: String
  physicianName_ends_with: String
  physicianName_not_ends_with: String
  startReason: String
  startReason_not: String
  startReason_in: [String!]
  startReason_not_in: [String!]
  startReason_lt: String
  startReason_lte: String
  startReason_gt: String
  startReason_gte: String
  startReason_contains: String
  startReason_not_contains: String
  startReason_starts_with: String
  startReason_not_starts_with: String
  startReason_ends_with: String
  startReason_not_ends_with: String
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  sideEffects_every: SideEffectFilter
  sideEffects_some: SideEffectFilter
  sideEffects_none: SideEffectFilter
  user: UserFilter
}

enum MedicationOrderBy {
  createdAt_ASC
  createdAt_DESC
  dailyQuantity_ASC
  dailyQuantity_DESC
  dateEnded_ASC
  dateEnded_DESC
  dateStarted_ASC
  dateStarted_DESC
  dosage_ASC
  dosage_DESC
  drugName_ASC
  drugName_DESC
  endReason_ASC
  endReason_DESC
  id_ASC
  id_DESC
  physicianName_ASC
  physicianName_DESC
  startReason_ASC
  startReason_DESC
  type_ASC
  type_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MedicationPreviousValues {
  createdAt: DateTime!
  dailyQuantity: Int
  dateEnded: DateTime
  dateStarted: DateTime

  # in mg
  dosage: Int
  drugName: String
  endReason: String
  id: ID!
  physicianName: String
  startReason: String

  # daily, discontinued, as needed
  type: String!
  updatedAt: DateTime!
}

input MedicationsideEffectsSideEffect {
  description: String
  name: String
  medicationsIds: [ID!]
  medications: [MedicationsideEffectsSideEffectmedicationsMedication!]
}

input MedicationsideEffectsSideEffectmedicationsMedication {
  dailyQuantity: Int
  dateEnded: DateTime
  dateStarted: DateTime

  # in mg
  dosage: Int
  drugName: String
  endReason: String
  physicianName: String
  startReason: String

  # daily, discontinued, as needed
  type: String
  userId: ID
  sideEffectsIds: [ID!]
  sideEffects: [MedicationsideEffectsSideEffectmedicationsMedicationsideEffectsSideEffect!]
}

input MedicationsideEffectsSideEffectmedicationsMedicationsideEffectsSideEffect {
  description: String
  name: String
  medicationsIds: [ID!]
}

input MedicationSubscriptionFilter {
  AND: [MedicationSubscriptionFilter!]
  OR: [MedicationSubscriptionFilter!]

  # The subscription event gets dispatched when it's listed in mutation_in
  mutation_in: [_ModelMutationType!]

  # The subscription event gets only dispatched when one of the updated fields names is included in this list
  updatedFields_contains: String

  # The subscription event gets only dispatched when all of the field names included in this list have been updated
  updatedFields_contains_every: [String!]

  # The subscription event gets only dispatched when some of the field names included in this list have been updated
  updatedFields_contains_some: [String!]
  node: MedicationSubscriptionFilterNode
}

input MedicationSubscriptionFilterNode {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  dailyQuantity: Int
  dailyQuantity_not: Int
  dailyQuantity_in: [Int!]
  dailyQuantity_not_in: [Int!]
  dailyQuantity_lt: Int
  dailyQuantity_lte: Int
  dailyQuantity_gt: Int
  dailyQuantity_gte: Int
  dateEnded: DateTime
  dateEnded_not: DateTime
  dateEnded_in: [DateTime!]
  dateEnded_not_in: [DateTime!]
  dateEnded_lt: DateTime
  dateEnded_lte: DateTime
  dateEnded_gt: DateTime
  dateEnded_gte: DateTime
  dateStarted: DateTime
  dateStarted_not: DateTime
  dateStarted_in: [DateTime!]
  dateStarted_not_in: [DateTime!]
  dateStarted_lt: DateTime
  dateStarted_lte: DateTime
  dateStarted_gt: DateTime
  dateStarted_gte: DateTime
  dosage: Int
  dosage_not: Int
  dosage_in: [Int!]
  dosage_not_in: [Int!]
  dosage_lt: Int
  dosage_lte: Int
  dosage_gt: Int
  dosage_gte: Int
  drugName: String
  drugName_not: String
  drugName_in: [String!]
  drugName_not_in: [String!]
  drugName_lt: String
  drugName_lte: String
  drugName_gt: String
  drugName_gte: String
  drugName_contains: String
  drugName_not_contains: String
  drugName_starts_with: String
  drugName_not_starts_with: String
  drugName_ends_with: String
  drugName_not_ends_with: String
  endReason: String
  endReason_not: String
  endReason_in: [String!]
  endReason_not_in: [String!]
  endReason_lt: String
  endReason_lte: String
  endReason_gt: String
  endReason_gte: String
  endReason_contains: String
  endReason_not_contains: String
  endReason_starts_with: String
  endReason_not_starts_with: String
  endReason_ends_with: String
  endReason_not_ends_with: String
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  physicianName: String
  physicianName_not: String
  physicianName_in: [String!]
  physicianName_not_in: [String!]
  physicianName_lt: String
  physicianName_lte: String
  physicianName_gt: String
  physicianName_gte: String
  physicianName_contains: String
  physicianName_not_contains: String
  physicianName_starts_with: String
  physicianName_not_starts_with: String
  physicianName_ends_with: String
  physicianName_not_ends_with: String
  startReason: String
  startReason_not: String
  startReason_in: [String!]
  startReason_not_in: [String!]
  startReason_lt: String
  startReason_lte: String
  startReason_gt: String
  startReason_gte: String
  startReason_contains: String
  startReason_not_contains: String
  startReason_starts_with: String
  startReason_not_starts_with: String
  startReason_ends_with: String
  startReason_not_ends_with: String
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  sideEffects_every: SideEffectFilter
  sideEffects_some: SideEffectFilter
  sideEffects_none: SideEffectFilter
  user: UserFilter
}

type MedicationSubscriptionPayload {
  mutation: _ModelMutationType!
  node: Medication
  updatedFields: [String!]
  previousValues: MedicationPreviousValues
}

type Mutation {
  createFile(name: String!): File
  createMedication(
    dailyQuantity: Int
    dateEnded: DateTime
    dateStarted: DateTime

    # in mg
    dosage: Int
    drugName: String
    endReason: String
    physicianName: String
    startReason: String

    # daily, discontinued, as needed
    type: String
    userId: ID
    sideEffectsIds: [ID!]
    sideEffects: [MedicationsideEffectsSideEffect!]
  ): Medication
  createSideEffect(description: String, name: String, medicationsIds: [ID!], medications: [SideEffectmedicationsMedication!]): SideEffect
  createSurgery(userId: ID): Surgery
  createSymptom(description: String, name: String, question: [String!], userId: ID): Symptom
  updateFile(id: ID!, name: String): File
  updateMedication(
    dailyQuantity: Int
    dateEnded: DateTime
    dateStarted: DateTime

    # in mg
    dosage: Int
    drugName: String
    endReason: String
    id: ID!
    physicianName: String
    startReason: String

    # daily, discontinued, as needed
    type: String
    userId: ID
    sideEffectsIds: [ID!]
    sideEffects: [MedicationsideEffectsSideEffect!]
  ): Medication
  updateSideEffect(description: String, id: ID!, name: String, medicationsIds: [ID!], medications: [SideEffectmedicationsMedication!]): SideEffect
  updateSurgery(id: ID!, userId: ID): Surgery
  updateSymptom(description: String, id: ID!, name: String, question: [String!], userId: ID): Symptom
  updateUser(displayName: String, emailAddress: String, id: ID!, name: String, medicationsIds: [ID!], medications: [UsermedicationsMedication!], surgeriesIds: [ID!], symptomsIds: [ID!], symptoms: [UsersymptomsSymptom!]): User
  updateOrCreateFile(update: UpdateFile!, create: CreateFile!): File
  updateOrCreateMedication(update: UpdateMedication!, create: CreateMedication!): Medication
  updateOrCreateSideEffect(update: UpdateSideEffect!, create: CreateSideEffect!): SideEffect
  updateOrCreateSurgery(update: UpdateSurgery!, create: CreateSurgery!): Surgery
  updateOrCreateSymptom(update: UpdateSymptom!, create: CreateSymptom!): Symptom
  updateOrCreateUser(update: UpdateUser!, create: CreateUser!): User
  deleteFile(id: ID!): File
  deleteMedication(id: ID!): Medication
  deleteSideEffect(id: ID!): SideEffect
  deleteSurgery(id: ID!): Surgery
  deleteSymptom(id: ID!): Symptom
  deleteUser(id: ID!): User
  addToMedicationOnSideEffect(sideEffectsSideEffectId: ID!, medicationsMedicationId: ID!): AddToMedicationOnSideEffectPayload
  addToUserOnMedication(medicationsMedicationId: ID!, userUserId: ID!): AddToUserOnMedicationPayload
  addToUserOnSurgery(surgeriesSurgeryId: ID!, userUserId: ID!): AddToUserOnSurgeryPayload
  addToUserOnSymptom(symptomsSymptomId: ID!, userUserId: ID!): AddToUserOnSymptomPayload
  removeFromMedicationOnSideEffect(sideEffectsSideEffectId: ID!, medicationsMedicationId: ID!): RemoveFromMedicationOnSideEffectPayload
  removeFromUserOnMedication(medicationsMedicationId: ID!, userUserId: ID!): RemoveFromUserOnMedicationPayload
  removeFromUserOnSurgery(surgeriesSurgeryId: ID!, userUserId: ID!): RemoveFromUserOnSurgeryPayload
  removeFromUserOnSymptom(symptomsSymptomId: ID!, userUserId: ID!): RemoveFromUserOnSymptomPayload
  signinUser(auth0: AUTH_PROVIDER_AUTH0): SigninPayload!
  createUser(displayName: String, emailAddress: String, name: String, medicationsIds: [ID!], medications: [UsermedicationsMedication!], surgeriesIds: [ID!], symptomsIds: [ID!], symptoms: [UsersymptomsSymptom!], authProvider: AuthProviderSignupData!): User
}

# An object with an ID
interface Node {
  # The id of the object.
  id: ID!
}

type Query {
  allFiles(filter: FileFilter, orderBy: FileOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): [File!]!
  allMedications(filter: MedicationFilter, orderBy: MedicationOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): [Medication!]!
  allSideEffects(filter: SideEffectFilter, orderBy: SideEffectOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): [SideEffect!]!
  allSurgeries(filter: SurgeryFilter, orderBy: SurgeryOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): [Surgery!]!
  allSymptoms(filter: SymptomFilter, orderBy: SymptomOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): [Symptom!]!
  allUsers(filter: UserFilter, orderBy: UserOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): [User!]!
  _allFilesMeta(filter: FileFilter, orderBy: FileOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): _QueryMeta!
  _allMedicationsMeta(filter: MedicationFilter, orderBy: MedicationOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): _QueryMeta!
  _allSideEffectsMeta(filter: SideEffectFilter, orderBy: SideEffectOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): _QueryMeta!
  _allSurgeriesMeta(filter: SurgeryFilter, orderBy: SurgeryOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): _QueryMeta!
  _allSymptomsMeta(filter: SymptomFilter, orderBy: SymptomOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): _QueryMeta!
  _allUsersMeta(filter: UserFilter, orderBy: UserOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): _QueryMeta!
  File(id: ID, secret: String, url: String): File
  Medication(id: ID): Medication
  SideEffect(id: ID): SideEffect
  Surgery(id: ID): Surgery
  Symptom(id: ID): Symptom
  User(auth0UserId: String, displayName: String, emailAddress: String, id: ID): User
  user: User

  # Fetches an object given its ID
  node(
    # The ID of an object
    id: ID!
  ): Node
}

type RemoveFromMedicationOnSideEffectPayload {
  medicationsMedication: Medication
  sideEffectsSideEffect: SideEffect
}

type RemoveFromUserOnMedicationPayload {
  userUser: User
  medicationsMedication: Medication
}

type RemoveFromUserOnSurgeryPayload {
  userUser: User
  surgeriesSurgery: Surgery
}

type RemoveFromUserOnSymptomPayload {
  userUser: User
  symptomsSymptom: Symptom
}

type SideEffect implements Node {
  createdAt: DateTime!
  description: String
  id: ID!
  medications(filter: MedicationFilter, orderBy: MedicationOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): [Medication!]
  name: String
  updatedAt: DateTime!

  # Meta information about the query.
  _medicationsMeta(filter: MedicationFilter, orderBy: MedicationOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): _QueryMeta!
}

input SideEffectFilter {
  AND: [SideEffectFilter!]
  OR: [SideEffectFilter!]
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  medications_every: MedicationFilter
  medications_some: MedicationFilter
  medications_none: MedicationFilter
}

input SideEffectmedicationsMedication {
  dailyQuantity: Int
  dateEnded: DateTime
  dateStarted: DateTime

  # in mg
  dosage: Int
  drugName: String
  endReason: String
  physicianName: String
  startReason: String

  # daily, discontinued, as needed
  type: String
  userId: ID
  sideEffectsIds: [ID!]
  sideEffects: [SideEffectmedicationsMedicationsideEffectsSideEffect!]
}

input SideEffectmedicationsMedicationsideEffectsSideEffect {
  description: String
  name: String
  medicationsIds: [ID!]
  medications: [SideEffectmedicationsMedicationsideEffectsSideEffectmedicationsMedication!]
}

input SideEffectmedicationsMedicationsideEffectsSideEffectmedicationsMedication {
  dailyQuantity: Int
  dateEnded: DateTime
  dateStarted: DateTime

  # in mg
  dosage: Int
  drugName: String
  endReason: String
  physicianName: String
  startReason: String

  # daily, discontinued, as needed
  type: String
  userId: ID
  sideEffectsIds: [ID!]
}

enum SideEffectOrderBy {
  createdAt_ASC
  createdAt_DESC
  description_ASC
  description_DESC
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SideEffectPreviousValues {
  createdAt: DateTime!
  description: String
  id: ID!
  name: String
  updatedAt: DateTime!
}

input SideEffectSubscriptionFilter {
  AND: [SideEffectSubscriptionFilter!]
  OR: [SideEffectSubscriptionFilter!]

  # The subscription event gets dispatched when it's listed in mutation_in
  mutation_in: [_ModelMutationType!]

  # The subscription event gets only dispatched when one of the updated fields names is included in this list
  updatedFields_contains: String

  # The subscription event gets only dispatched when all of the field names included in this list have been updated
  updatedFields_contains_every: [String!]

  # The subscription event gets only dispatched when some of the field names included in this list have been updated
  updatedFields_contains_some: [String!]
  node: SideEffectSubscriptionFilterNode
}

input SideEffectSubscriptionFilterNode {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  medications_every: MedicationFilter
  medications_some: MedicationFilter
  medications_none: MedicationFilter
}

type SideEffectSubscriptionPayload {
  mutation: _ModelMutationType!
  node: SideEffect
  updatedFields: [String!]
  previousValues: SideEffectPreviousValues
}

# If authentication was successful the payload contains the user and a token. If unsuccessful this payload is null.
type SigninPayload {
  token: String
  user: User
}

type Subscription {
  File(filter: FileSubscriptionFilter): FileSubscriptionPayload
  Medication(filter: MedicationSubscriptionFilter): MedicationSubscriptionPayload
  SideEffect(filter: SideEffectSubscriptionFilter): SideEffectSubscriptionPayload
  Surgery(filter: SurgerySubscriptionFilter): SurgerySubscriptionPayload
  Symptom(filter: SymptomSubscriptionFilter): SymptomSubscriptionPayload
  User(filter: UserSubscriptionFilter): UserSubscriptionPayload
}

type Surgery implements Node {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  user(filter: UserFilter): User
}

input SurgeryFilter {
  AND: [SurgeryFilter!]
  OR: [SurgeryFilter!]
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  user: UserFilter
}

enum SurgeryOrderBy {
  createdAt_ASC
  createdAt_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SurgeryPreviousValues {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
}

input SurgerySubscriptionFilter {
  AND: [SurgerySubscriptionFilter!]
  OR: [SurgerySubscriptionFilter!]

  # The subscription event gets dispatched when it's listed in mutation_in
  mutation_in: [_ModelMutationType!]

  # The subscription event gets only dispatched when one of the updated fields names is included in this list
  updatedFields_contains: String

  # The subscription event gets only dispatched when all of the field names included in this list have been updated
  updatedFields_contains_every: [String!]

  # The subscription event gets only dispatched when some of the field names included in this list have been updated
  updatedFields_contains_some: [String!]
  node: SurgerySubscriptionFilterNode
}

input SurgerySubscriptionFilterNode {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  user: UserFilter
}

type SurgerySubscriptionPayload {
  mutation: _ModelMutationType!
  node: Surgery
  updatedFields: [String!]
  previousValues: SurgeryPreviousValues
}

type Symptom implements Node {
  createdAt: DateTime!
  description: String
  id: ID!
  name: String
  question: [String!]
  updatedAt: DateTime!
  user(filter: UserFilter): User
}

input SymptomFilter {
  AND: [SymptomFilter!]
  OR: [SymptomFilter!]
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  user: UserFilter
}

enum SymptomOrderBy {
  createdAt_ASC
  createdAt_DESC
  description_ASC
  description_DESC
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SymptomPreviousValues {
  createdAt: DateTime!
  description: String
  id: ID!
  name: String
  updatedAt: DateTime!
}

input SymptomSubscriptionFilter {
  AND: [SymptomSubscriptionFilter!]
  OR: [SymptomSubscriptionFilter!]

  # The subscription event gets dispatched when it's listed in mutation_in
  mutation_in: [_ModelMutationType!]

  # The subscription event gets only dispatched when one of the updated fields names is included in this list
  updatedFields_contains: String

  # The subscription event gets only dispatched when all of the field names included in this list have been updated
  updatedFields_contains_every: [String!]

  # The subscription event gets only dispatched when some of the field names included in this list have been updated
  updatedFields_contains_some: [String!]
  node: SymptomSubscriptionFilterNode
}

input SymptomSubscriptionFilterNode {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  user: UserFilter
}

type SymptomSubscriptionPayload {
  mutation: _ModelMutationType!
  node: Symptom
  updatedFields: [String!]
  previousValues: SymptomPreviousValues
}

input UpdateFile {
  id: ID!
  name: String
}

input UpdateMedication {
  dailyQuantity: Int
  dateEnded: DateTime
  dateStarted: DateTime
  dosage: Int
  drugName: String
  endReason: String
  id: ID!
  physicianName: String
  startReason: String
  type: String
  userId: ID
  sideEffectsIds: [ID!]
  sideEffects: [MedicationsideEffectsSideEffect!]
}

input UpdateSideEffect {
  description: String
  id: ID!
  name: String
  medicationsIds: [ID!]
  medications: [SideEffectmedicationsMedication!]
}

input UpdateSurgery {
  id: ID!
  userId: ID
}

input UpdateSymptom {
  description: String
  id: ID!
  name: String
  question: [String!]
  userId: ID
}

input UpdateUser {
  displayName: String
  emailAddress: String
  id: ID!
  name: String
  medicationsIds: [ID!]
  medications: [UsermedicationsMedication!]
  surgeriesIds: [ID!]
  symptomsIds: [ID!]
  symptoms: [UsersymptomsSymptom!]
}

type User implements Node {
  auth0UserId: String
  createdAt: DateTime
  displayName: String
  emailAddress: String
  id: ID!
  medications(filter: MedicationFilter, orderBy: MedicationOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): [Medication!]
  name: String
  surgeries(filter: SurgeryFilter, orderBy: SurgeryOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): [Surgery!]
  symptoms(filter: SymptomFilter, orderBy: SymptomOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): [Symptom!]
  updatedAt: DateTime

  # Meta information about the query.
  _medicationsMeta(filter: MedicationFilter, orderBy: MedicationOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): _QueryMeta!

  # Meta information about the query.
  _surgeriesMeta(filter: SurgeryFilter, orderBy: SurgeryOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): _QueryMeta!

  # Meta information about the query.
  _symptomsMeta(filter: SymptomFilter, orderBy: SymptomOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): _QueryMeta!
}

input UserFilter {
  AND: [UserFilter!]
  OR: [UserFilter!]
  auth0UserId: String
  auth0UserId_not: String
  auth0UserId_in: [String!]
  auth0UserId_not_in: [String!]
  auth0UserId_lt: String
  auth0UserId_lte: String
  auth0UserId_gt: String
  auth0UserId_gte: String
  auth0UserId_contains: String
  auth0UserId_not_contains: String
  auth0UserId_starts_with: String
  auth0UserId_not_starts_with: String
  auth0UserId_ends_with: String
  auth0UserId_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  displayName: String
  displayName_not: String
  displayName_in: [String!]
  displayName_not_in: [String!]
  displayName_lt: String
  displayName_lte: String
  displayName_gt: String
  displayName_gte: String
  displayName_contains: String
  displayName_not_contains: String
  displayName_starts_with: String
  displayName_not_starts_with: String
  displayName_ends_with: String
  displayName_not_ends_with: String
  emailAddress: String
  emailAddress_not: String
  emailAddress_in: [String!]
  emailAddress_not_in: [String!]
  emailAddress_lt: String
  emailAddress_lte: String
  emailAddress_gt: String
  emailAddress_gte: String
  emailAddress_contains: String
  emailAddress_not_contains: String
  emailAddress_starts_with: String
  emailAddress_not_starts_with: String
  emailAddress_ends_with: String
  emailAddress_not_ends_with: String
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  medications_every: MedicationFilter
  medications_some: MedicationFilter
  medications_none: MedicationFilter
  surgeries_every: SurgeryFilter
  surgeries_some: SurgeryFilter
  surgeries_none: SurgeryFilter
  symptoms_every: SymptomFilter
  symptoms_some: SymptomFilter
  symptoms_none: SymptomFilter
}

input UsermedicationsMedication {
  dailyQuantity: Int
  dateEnded: DateTime
  dateStarted: DateTime

  # in mg
  dosage: Int
  drugName: String
  endReason: String
  physicianName: String
  startReason: String

  # daily, discontinued, as needed
  type: String
  sideEffectsIds: [ID!]
  sideEffects: [UsermedicationsMedicationsideEffectsSideEffect!]
}

input UsermedicationsMedicationsideEffectsSideEffect {
  description: String
  name: String
  medicationsIds: [ID!]
  medications: [UsermedicationsMedicationsideEffectsSideEffectmedicationsMedication!]
}

input UsermedicationsMedicationsideEffectsSideEffectmedicationsMedication {
  dailyQuantity: Int
  dateEnded: DateTime
  dateStarted: DateTime

  # in mg
  dosage: Int
  drugName: String
  endReason: String
  physicianName: String
  startReason: String

  # daily, discontinued, as needed
  type: String
  userId: ID
  sideEffectsIds: [ID!]
}

enum UserOrderBy {
  auth0UserId_ASC
  auth0UserId_DESC
  createdAt_ASC
  createdAt_DESC
  displayName_ASC
  displayName_DESC
  emailAddress_ASC
  emailAddress_DESC
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  auth0UserId: String
  createdAt: DateTime
  displayName: String
  emailAddress: String
  id: ID!
  name: String
  updatedAt: DateTime
}

input UserSubscriptionFilter {
  AND: [UserSubscriptionFilter!]
  OR: [UserSubscriptionFilter!]

  # The subscription event gets dispatched when it's listed in mutation_in
  mutation_in: [_ModelMutationType!]

  # The subscription event gets only dispatched when one of the updated fields names is included in this list
  updatedFields_contains: String

  # The subscription event gets only dispatched when all of the field names included in this list have been updated
  updatedFields_contains_every: [String!]

  # The subscription event gets only dispatched when some of the field names included in this list have been updated
  updatedFields_contains_some: [String!]
  node: UserSubscriptionFilterNode
}

input UserSubscriptionFilterNode {
  auth0UserId: String
  auth0UserId_not: String
  auth0UserId_in: [String!]
  auth0UserId_not_in: [String!]
  auth0UserId_lt: String
  auth0UserId_lte: String
  auth0UserId_gt: String
  auth0UserId_gte: String
  auth0UserId_contains: String
  auth0UserId_not_contains: String
  auth0UserId_starts_with: String
  auth0UserId_not_starts_with: String
  auth0UserId_ends_with: String
  auth0UserId_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  displayName: String
  displayName_not: String
  displayName_in: [String!]
  displayName_not_in: [String!]
  displayName_lt: String
  displayName_lte: String
  displayName_gt: String
  displayName_gte: String
  displayName_contains: String
  displayName_not_contains: String
  displayName_starts_with: String
  displayName_not_starts_with: String
  displayName_ends_with: String
  displayName_not_ends_with: String
  emailAddress: String
  emailAddress_not: String
  emailAddress_in: [String!]
  emailAddress_not_in: [String!]
  emailAddress_lt: String
  emailAddress_lte: String
  emailAddress_gt: String
  emailAddress_gte: String
  emailAddress_contains: String
  emailAddress_not_contains: String
  emailAddress_starts_with: String
  emailAddress_not_starts_with: String
  emailAddress_ends_with: String
  emailAddress_not_ends_with: String
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  medications_every: MedicationFilter
  medications_some: MedicationFilter
  medications_none: MedicationFilter
  surgeries_every: SurgeryFilter
  surgeries_some: SurgeryFilter
  surgeries_none: SurgeryFilter
  symptoms_every: SymptomFilter
  symptoms_some: SymptomFilter
  symptoms_none: SymptomFilter
}

type UserSubscriptionPayload {
  mutation: _ModelMutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UsersymptomsSymptom {
  description: String
  name: String
  question: [String!]
}
`;


export default typeDefs;
