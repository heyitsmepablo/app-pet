import * as runtime from "@prisma/client/runtime/client";
export const PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export const PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export const PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export const PrismaClientValidationError = runtime.PrismaClientValidationError;
export const sql = runtime.sqltag;
export const empty = runtime.empty;
export const join = runtime.join;
export const raw = runtime.raw;
export const Sql = runtime.Sql;
export const Decimal = runtime.Decimal;
export const getExtensionContext = runtime.Extensions.getExtensionContext;
export const prismaVersion = {
    client: "7.10.0",
    engine: "0edf323efd1d98336f3f0a68684b56f689b900d3"
};
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    Tutor: 'Tutor',
    Pet: 'Pet',
    FoodStock: 'FoodStock',
    Vaccine: 'Vaccine',
    Medication: 'Medication'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    Serializable: 'Serializable'
});
export const TutorScalarFieldEnum = {
    id: 'id',
    cpf: 'cpf',
    name: 'name',
    email: 'email',
    phone: 'phone',
    birthDate: 'birthDate',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const PetScalarFieldEnum = {
    id: 'id',
    tutorId: 'tutorId',
    name: 'name',
    species: 'species',
    gender: 'gender',
    breed: 'breed',
    weight: 'weight',
    birthDate: 'birthDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const FoodStockScalarFieldEnum = {
    id: 'id',
    petId: 'petId',
    brandName: 'brandName',
    totalWeightGrams: 'totalWeightGrams',
    dailyPortionGrams: 'dailyPortionGrams',
    purchaseDate: 'purchaseDate',
    estimatedEmptyDate: 'estimatedEmptyDate',
    isActive: 'isActive',
    createdAt: 'createdAt'
};
export const VaccineScalarFieldEnum = {
    id: 'id',
    petId: 'petId',
    name: 'name',
    applicationDate: 'applicationDate',
    nextDueDate: 'nextDueDate',
    veterinarian: 'veterinarian',
    clinic: 'clinic',
    createdAt: 'createdAt'
};
export const MedicationScalarFieldEnum = {
    id: 'id',
    petId: 'petId',
    type: 'type',
    name: 'name',
    applicationDate: 'applicationDate',
    nextDueDate: 'nextDueDate',
    createdAt: 'createdAt'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map