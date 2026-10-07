import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PetModel = runtime.Types.Result.DefaultSelection<Prisma.$PetPayload>;
export type AggregatePet = {
    _count: PetCountAggregateOutputType | null;
    _avg: PetAvgAggregateOutputType | null;
    _sum: PetSumAggregateOutputType | null;
    _min: PetMinAggregateOutputType | null;
    _max: PetMaxAggregateOutputType | null;
};
export type PetAvgAggregateOutputType = {
    weight: number | null;
};
export type PetSumAggregateOutputType = {
    weight: number | null;
};
export type PetMinAggregateOutputType = {
    id: string | null;
    tutorId: string | null;
    name: string | null;
    species: string | null;
    gender: $Enums.Gender | null;
    breed: string | null;
    weight: number | null;
    birthDate: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PetMaxAggregateOutputType = {
    id: string | null;
    tutorId: string | null;
    name: string | null;
    species: string | null;
    gender: $Enums.Gender | null;
    breed: string | null;
    weight: number | null;
    birthDate: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PetCountAggregateOutputType = {
    id: number;
    tutorId: number;
    name: number;
    species: number;
    gender: number;
    breed: number;
    weight: number;
    birthDate: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PetAvgAggregateInputType = {
    weight?: true;
};
export type PetSumAggregateInputType = {
    weight?: true;
};
export type PetMinAggregateInputType = {
    id?: true;
    tutorId?: true;
    name?: true;
    species?: true;
    gender?: true;
    breed?: true;
    weight?: true;
    birthDate?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PetMaxAggregateInputType = {
    id?: true;
    tutorId?: true;
    name?: true;
    species?: true;
    gender?: true;
    breed?: true;
    weight?: true;
    birthDate?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PetCountAggregateInputType = {
    id?: true;
    tutorId?: true;
    name?: true;
    species?: true;
    gender?: true;
    breed?: true;
    weight?: true;
    birthDate?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PetAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PetWhereInput;
    orderBy?: Prisma.PetOrderByWithRelationInput | Prisma.PetOrderByWithRelationInput[];
    cursor?: Prisma.PetWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PetCountAggregateInputType;
    _avg?: PetAvgAggregateInputType;
    _sum?: PetSumAggregateInputType;
    _min?: PetMinAggregateInputType;
    _max?: PetMaxAggregateInputType;
};
export type GetPetAggregateType<T extends PetAggregateArgs> = {
    [P in keyof T & keyof AggregatePet]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePet[P]> : Prisma.GetScalarType<T[P], AggregatePet[P]>;
};
export type PetGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PetWhereInput;
    orderBy?: Prisma.PetOrderByWithAggregationInput | Prisma.PetOrderByWithAggregationInput[];
    by: Prisma.PetScalarFieldEnum[] | Prisma.PetScalarFieldEnum;
    having?: Prisma.PetScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PetCountAggregateInputType | true;
    _avg?: PetAvgAggregateInputType;
    _sum?: PetSumAggregateInputType;
    _min?: PetMinAggregateInputType;
    _max?: PetMaxAggregateInputType;
};
export type PetGroupByOutputType = {
    id: string;
    tutorId: string;
    name: string;
    species: string;
    gender: $Enums.Gender;
    breed: string | null;
    weight: number | null;
    birthDate: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PetCountAggregateOutputType | null;
    _avg: PetAvgAggregateOutputType | null;
    _sum: PetSumAggregateOutputType | null;
    _min: PetMinAggregateOutputType | null;
    _max: PetMaxAggregateOutputType | null;
};
export type GetPetGroupByPayload<T extends PetGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PetGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PetGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PetGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PetGroupByOutputType[P]>;
}>>;
export type PetWhereInput = {
    AND?: Prisma.PetWhereInput | Prisma.PetWhereInput[];
    OR?: Prisma.PetWhereInput[];
    NOT?: Prisma.PetWhereInput | Prisma.PetWhereInput[];
    id?: Prisma.StringFilter<"Pet"> | string;
    tutorId?: Prisma.StringFilter<"Pet"> | string;
    name?: Prisma.StringFilter<"Pet"> | string;
    species?: Prisma.StringFilter<"Pet"> | string;
    gender?: Prisma.EnumGenderFilter<"Pet"> | $Enums.Gender;
    breed?: Prisma.StringNullableFilter<"Pet"> | string | null;
    weight?: Prisma.FloatNullableFilter<"Pet"> | number | null;
    birthDate?: Prisma.DateTimeNullableFilter<"Pet"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Pet"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Pet"> | Date | string;
    tutor?: Prisma.XOR<Prisma.TutorScalarRelationFilter, Prisma.TutorWhereInput>;
    foodStocks?: Prisma.FoodStockListRelationFilter;
    vaccines?: Prisma.VaccineListRelationFilter;
    medications?: Prisma.MedicationListRelationFilter;
};
export type PetOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tutorId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    species?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    breed?: Prisma.SortOrderInput | Prisma.SortOrder;
    weight?: Prisma.SortOrderInput | Prisma.SortOrder;
    birthDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    tutor?: Prisma.TutorOrderByWithRelationInput;
    foodStocks?: Prisma.FoodStockOrderByRelationAggregateInput;
    vaccines?: Prisma.VaccineOrderByRelationAggregateInput;
    medications?: Prisma.MedicationOrderByRelationAggregateInput;
};
export type PetWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PetWhereInput | Prisma.PetWhereInput[];
    OR?: Prisma.PetWhereInput[];
    NOT?: Prisma.PetWhereInput | Prisma.PetWhereInput[];
    tutorId?: Prisma.StringFilter<"Pet"> | string;
    name?: Prisma.StringFilter<"Pet"> | string;
    species?: Prisma.StringFilter<"Pet"> | string;
    gender?: Prisma.EnumGenderFilter<"Pet"> | $Enums.Gender;
    breed?: Prisma.StringNullableFilter<"Pet"> | string | null;
    weight?: Prisma.FloatNullableFilter<"Pet"> | number | null;
    birthDate?: Prisma.DateTimeNullableFilter<"Pet"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Pet"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Pet"> | Date | string;
    tutor?: Prisma.XOR<Prisma.TutorScalarRelationFilter, Prisma.TutorWhereInput>;
    foodStocks?: Prisma.FoodStockListRelationFilter;
    vaccines?: Prisma.VaccineListRelationFilter;
    medications?: Prisma.MedicationListRelationFilter;
}, "id">;
export type PetOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tutorId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    species?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    breed?: Prisma.SortOrderInput | Prisma.SortOrder;
    weight?: Prisma.SortOrderInput | Prisma.SortOrder;
    birthDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PetCountOrderByAggregateInput;
    _avg?: Prisma.PetAvgOrderByAggregateInput;
    _max?: Prisma.PetMaxOrderByAggregateInput;
    _min?: Prisma.PetMinOrderByAggregateInput;
    _sum?: Prisma.PetSumOrderByAggregateInput;
};
export type PetScalarWhereWithAggregatesInput = {
    AND?: Prisma.PetScalarWhereWithAggregatesInput | Prisma.PetScalarWhereWithAggregatesInput[];
    OR?: Prisma.PetScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PetScalarWhereWithAggregatesInput | Prisma.PetScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Pet"> | string;
    tutorId?: Prisma.StringWithAggregatesFilter<"Pet"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Pet"> | string;
    species?: Prisma.StringWithAggregatesFilter<"Pet"> | string;
    gender?: Prisma.EnumGenderWithAggregatesFilter<"Pet"> | $Enums.Gender;
    breed?: Prisma.StringNullableWithAggregatesFilter<"Pet"> | string | null;
    weight?: Prisma.FloatNullableWithAggregatesFilter<"Pet"> | number | null;
    birthDate?: Prisma.DateTimeNullableWithAggregatesFilter<"Pet"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Pet"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Pet"> | Date | string;
};
export type PetCreateInput = {
    id?: string;
    name: string;
    species: string;
    gender: $Enums.Gender;
    breed?: string | null;
    weight?: number | null;
    birthDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tutor: Prisma.TutorCreateNestedOneWithoutPetsInput;
    foodStocks?: Prisma.FoodStockCreateNestedManyWithoutPetInput;
    vaccines?: Prisma.VaccineCreateNestedManyWithoutPetInput;
    medications?: Prisma.MedicationCreateNestedManyWithoutPetInput;
};
export type PetUncheckedCreateInput = {
    id?: string;
    tutorId: string;
    name: string;
    species: string;
    gender: $Enums.Gender;
    breed?: string | null;
    weight?: number | null;
    birthDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    foodStocks?: Prisma.FoodStockUncheckedCreateNestedManyWithoutPetInput;
    vaccines?: Prisma.VaccineUncheckedCreateNestedManyWithoutPetInput;
    medications?: Prisma.MedicationUncheckedCreateNestedManyWithoutPetInput;
};
export type PetUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tutor?: Prisma.TutorUpdateOneRequiredWithoutPetsNestedInput;
    foodStocks?: Prisma.FoodStockUpdateManyWithoutPetNestedInput;
    vaccines?: Prisma.VaccineUpdateManyWithoutPetNestedInput;
    medications?: Prisma.MedicationUpdateManyWithoutPetNestedInput;
};
export type PetUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tutorId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    foodStocks?: Prisma.FoodStockUncheckedUpdateManyWithoutPetNestedInput;
    vaccines?: Prisma.VaccineUncheckedUpdateManyWithoutPetNestedInput;
    medications?: Prisma.MedicationUncheckedUpdateManyWithoutPetNestedInput;
};
export type PetCreateManyInput = {
    id?: string;
    tutorId: string;
    name: string;
    species: string;
    gender: $Enums.Gender;
    breed?: string | null;
    weight?: number | null;
    birthDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PetUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PetUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tutorId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PetListRelationFilter = {
    every?: Prisma.PetWhereInput;
    some?: Prisma.PetWhereInput;
    none?: Prisma.PetWhereInput;
};
export type PetOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PetCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tutorId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    species?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    breed?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    birthDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PetAvgOrderByAggregateInput = {
    weight?: Prisma.SortOrder;
};
export type PetMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tutorId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    species?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    breed?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    birthDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PetMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tutorId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    species?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    breed?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    birthDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PetSumOrderByAggregateInput = {
    weight?: Prisma.SortOrder;
};
export type PetScalarRelationFilter = {
    is?: Prisma.PetWhereInput;
    isNot?: Prisma.PetWhereInput;
};
export type PetCreateNestedManyWithoutTutorInput = {
    create?: Prisma.XOR<Prisma.PetCreateWithoutTutorInput, Prisma.PetUncheckedCreateWithoutTutorInput> | Prisma.PetCreateWithoutTutorInput[] | Prisma.PetUncheckedCreateWithoutTutorInput[];
    connectOrCreate?: Prisma.PetCreateOrConnectWithoutTutorInput | Prisma.PetCreateOrConnectWithoutTutorInput[];
    createMany?: Prisma.PetCreateManyTutorInputEnvelope;
    connect?: Prisma.PetWhereUniqueInput | Prisma.PetWhereUniqueInput[];
};
export type PetUncheckedCreateNestedManyWithoutTutorInput = {
    create?: Prisma.XOR<Prisma.PetCreateWithoutTutorInput, Prisma.PetUncheckedCreateWithoutTutorInput> | Prisma.PetCreateWithoutTutorInput[] | Prisma.PetUncheckedCreateWithoutTutorInput[];
    connectOrCreate?: Prisma.PetCreateOrConnectWithoutTutorInput | Prisma.PetCreateOrConnectWithoutTutorInput[];
    createMany?: Prisma.PetCreateManyTutorInputEnvelope;
    connect?: Prisma.PetWhereUniqueInput | Prisma.PetWhereUniqueInput[];
};
export type PetUpdateManyWithoutTutorNestedInput = {
    create?: Prisma.XOR<Prisma.PetCreateWithoutTutorInput, Prisma.PetUncheckedCreateWithoutTutorInput> | Prisma.PetCreateWithoutTutorInput[] | Prisma.PetUncheckedCreateWithoutTutorInput[];
    connectOrCreate?: Prisma.PetCreateOrConnectWithoutTutorInput | Prisma.PetCreateOrConnectWithoutTutorInput[];
    upsert?: Prisma.PetUpsertWithWhereUniqueWithoutTutorInput | Prisma.PetUpsertWithWhereUniqueWithoutTutorInput[];
    createMany?: Prisma.PetCreateManyTutorInputEnvelope;
    set?: Prisma.PetWhereUniqueInput | Prisma.PetWhereUniqueInput[];
    disconnect?: Prisma.PetWhereUniqueInput | Prisma.PetWhereUniqueInput[];
    delete?: Prisma.PetWhereUniqueInput | Prisma.PetWhereUniqueInput[];
    connect?: Prisma.PetWhereUniqueInput | Prisma.PetWhereUniqueInput[];
    update?: Prisma.PetUpdateWithWhereUniqueWithoutTutorInput | Prisma.PetUpdateWithWhereUniqueWithoutTutorInput[];
    updateMany?: Prisma.PetUpdateManyWithWhereWithoutTutorInput | Prisma.PetUpdateManyWithWhereWithoutTutorInput[];
    deleteMany?: Prisma.PetScalarWhereInput | Prisma.PetScalarWhereInput[];
};
export type PetUncheckedUpdateManyWithoutTutorNestedInput = {
    create?: Prisma.XOR<Prisma.PetCreateWithoutTutorInput, Prisma.PetUncheckedCreateWithoutTutorInput> | Prisma.PetCreateWithoutTutorInput[] | Prisma.PetUncheckedCreateWithoutTutorInput[];
    connectOrCreate?: Prisma.PetCreateOrConnectWithoutTutorInput | Prisma.PetCreateOrConnectWithoutTutorInput[];
    upsert?: Prisma.PetUpsertWithWhereUniqueWithoutTutorInput | Prisma.PetUpsertWithWhereUniqueWithoutTutorInput[];
    createMany?: Prisma.PetCreateManyTutorInputEnvelope;
    set?: Prisma.PetWhereUniqueInput | Prisma.PetWhereUniqueInput[];
    disconnect?: Prisma.PetWhereUniqueInput | Prisma.PetWhereUniqueInput[];
    delete?: Prisma.PetWhereUniqueInput | Prisma.PetWhereUniqueInput[];
    connect?: Prisma.PetWhereUniqueInput | Prisma.PetWhereUniqueInput[];
    update?: Prisma.PetUpdateWithWhereUniqueWithoutTutorInput | Prisma.PetUpdateWithWhereUniqueWithoutTutorInput[];
    updateMany?: Prisma.PetUpdateManyWithWhereWithoutTutorInput | Prisma.PetUpdateManyWithWhereWithoutTutorInput[];
    deleteMany?: Prisma.PetScalarWhereInput | Prisma.PetScalarWhereInput[];
};
export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type PetCreateNestedOneWithoutFoodStocksInput = {
    create?: Prisma.XOR<Prisma.PetCreateWithoutFoodStocksInput, Prisma.PetUncheckedCreateWithoutFoodStocksInput>;
    connectOrCreate?: Prisma.PetCreateOrConnectWithoutFoodStocksInput;
    connect?: Prisma.PetWhereUniqueInput;
};
export type PetUpdateOneRequiredWithoutFoodStocksNestedInput = {
    create?: Prisma.XOR<Prisma.PetCreateWithoutFoodStocksInput, Prisma.PetUncheckedCreateWithoutFoodStocksInput>;
    connectOrCreate?: Prisma.PetCreateOrConnectWithoutFoodStocksInput;
    upsert?: Prisma.PetUpsertWithoutFoodStocksInput;
    connect?: Prisma.PetWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PetUpdateToOneWithWhereWithoutFoodStocksInput, Prisma.PetUpdateWithoutFoodStocksInput>, Prisma.PetUncheckedUpdateWithoutFoodStocksInput>;
};
export type PetCreateNestedOneWithoutVaccinesInput = {
    create?: Prisma.XOR<Prisma.PetCreateWithoutVaccinesInput, Prisma.PetUncheckedCreateWithoutVaccinesInput>;
    connectOrCreate?: Prisma.PetCreateOrConnectWithoutVaccinesInput;
    connect?: Prisma.PetWhereUniqueInput;
};
export type PetUpdateOneRequiredWithoutVaccinesNestedInput = {
    create?: Prisma.XOR<Prisma.PetCreateWithoutVaccinesInput, Prisma.PetUncheckedCreateWithoutVaccinesInput>;
    connectOrCreate?: Prisma.PetCreateOrConnectWithoutVaccinesInput;
    upsert?: Prisma.PetUpsertWithoutVaccinesInput;
    connect?: Prisma.PetWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PetUpdateToOneWithWhereWithoutVaccinesInput, Prisma.PetUpdateWithoutVaccinesInput>, Prisma.PetUncheckedUpdateWithoutVaccinesInput>;
};
export type PetCreateNestedOneWithoutMedicationsInput = {
    create?: Prisma.XOR<Prisma.PetCreateWithoutMedicationsInput, Prisma.PetUncheckedCreateWithoutMedicationsInput>;
    connectOrCreate?: Prisma.PetCreateOrConnectWithoutMedicationsInput;
    connect?: Prisma.PetWhereUniqueInput;
};
export type PetUpdateOneRequiredWithoutMedicationsNestedInput = {
    create?: Prisma.XOR<Prisma.PetCreateWithoutMedicationsInput, Prisma.PetUncheckedCreateWithoutMedicationsInput>;
    connectOrCreate?: Prisma.PetCreateOrConnectWithoutMedicationsInput;
    upsert?: Prisma.PetUpsertWithoutMedicationsInput;
    connect?: Prisma.PetWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PetUpdateToOneWithWhereWithoutMedicationsInput, Prisma.PetUpdateWithoutMedicationsInput>, Prisma.PetUncheckedUpdateWithoutMedicationsInput>;
};
export type PetCreateWithoutTutorInput = {
    id?: string;
    name: string;
    species: string;
    gender: $Enums.Gender;
    breed?: string | null;
    weight?: number | null;
    birthDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    foodStocks?: Prisma.FoodStockCreateNestedManyWithoutPetInput;
    vaccines?: Prisma.VaccineCreateNestedManyWithoutPetInput;
    medications?: Prisma.MedicationCreateNestedManyWithoutPetInput;
};
export type PetUncheckedCreateWithoutTutorInput = {
    id?: string;
    name: string;
    species: string;
    gender: $Enums.Gender;
    breed?: string | null;
    weight?: number | null;
    birthDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    foodStocks?: Prisma.FoodStockUncheckedCreateNestedManyWithoutPetInput;
    vaccines?: Prisma.VaccineUncheckedCreateNestedManyWithoutPetInput;
    medications?: Prisma.MedicationUncheckedCreateNestedManyWithoutPetInput;
};
export type PetCreateOrConnectWithoutTutorInput = {
    where: Prisma.PetWhereUniqueInput;
    create: Prisma.XOR<Prisma.PetCreateWithoutTutorInput, Prisma.PetUncheckedCreateWithoutTutorInput>;
};
export type PetCreateManyTutorInputEnvelope = {
    data: Prisma.PetCreateManyTutorInput | Prisma.PetCreateManyTutorInput[];
};
export type PetUpsertWithWhereUniqueWithoutTutorInput = {
    where: Prisma.PetWhereUniqueInput;
    update: Prisma.XOR<Prisma.PetUpdateWithoutTutorInput, Prisma.PetUncheckedUpdateWithoutTutorInput>;
    create: Prisma.XOR<Prisma.PetCreateWithoutTutorInput, Prisma.PetUncheckedCreateWithoutTutorInput>;
};
export type PetUpdateWithWhereUniqueWithoutTutorInput = {
    where: Prisma.PetWhereUniqueInput;
    data: Prisma.XOR<Prisma.PetUpdateWithoutTutorInput, Prisma.PetUncheckedUpdateWithoutTutorInput>;
};
export type PetUpdateManyWithWhereWithoutTutorInput = {
    where: Prisma.PetScalarWhereInput;
    data: Prisma.XOR<Prisma.PetUpdateManyMutationInput, Prisma.PetUncheckedUpdateManyWithoutTutorInput>;
};
export type PetScalarWhereInput = {
    AND?: Prisma.PetScalarWhereInput | Prisma.PetScalarWhereInput[];
    OR?: Prisma.PetScalarWhereInput[];
    NOT?: Prisma.PetScalarWhereInput | Prisma.PetScalarWhereInput[];
    id?: Prisma.StringFilter<"Pet"> | string;
    tutorId?: Prisma.StringFilter<"Pet"> | string;
    name?: Prisma.StringFilter<"Pet"> | string;
    species?: Prisma.StringFilter<"Pet"> | string;
    gender?: Prisma.EnumGenderFilter<"Pet"> | $Enums.Gender;
    breed?: Prisma.StringNullableFilter<"Pet"> | string | null;
    weight?: Prisma.FloatNullableFilter<"Pet"> | number | null;
    birthDate?: Prisma.DateTimeNullableFilter<"Pet"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Pet"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Pet"> | Date | string;
};
export type PetCreateWithoutFoodStocksInput = {
    id?: string;
    name: string;
    species: string;
    gender: $Enums.Gender;
    breed?: string | null;
    weight?: number | null;
    birthDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tutor: Prisma.TutorCreateNestedOneWithoutPetsInput;
    vaccines?: Prisma.VaccineCreateNestedManyWithoutPetInput;
    medications?: Prisma.MedicationCreateNestedManyWithoutPetInput;
};
export type PetUncheckedCreateWithoutFoodStocksInput = {
    id?: string;
    tutorId: string;
    name: string;
    species: string;
    gender: $Enums.Gender;
    breed?: string | null;
    weight?: number | null;
    birthDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    vaccines?: Prisma.VaccineUncheckedCreateNestedManyWithoutPetInput;
    medications?: Prisma.MedicationUncheckedCreateNestedManyWithoutPetInput;
};
export type PetCreateOrConnectWithoutFoodStocksInput = {
    where: Prisma.PetWhereUniqueInput;
    create: Prisma.XOR<Prisma.PetCreateWithoutFoodStocksInput, Prisma.PetUncheckedCreateWithoutFoodStocksInput>;
};
export type PetUpsertWithoutFoodStocksInput = {
    update: Prisma.XOR<Prisma.PetUpdateWithoutFoodStocksInput, Prisma.PetUncheckedUpdateWithoutFoodStocksInput>;
    create: Prisma.XOR<Prisma.PetCreateWithoutFoodStocksInput, Prisma.PetUncheckedCreateWithoutFoodStocksInput>;
    where?: Prisma.PetWhereInput;
};
export type PetUpdateToOneWithWhereWithoutFoodStocksInput = {
    where?: Prisma.PetWhereInput;
    data: Prisma.XOR<Prisma.PetUpdateWithoutFoodStocksInput, Prisma.PetUncheckedUpdateWithoutFoodStocksInput>;
};
export type PetUpdateWithoutFoodStocksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tutor?: Prisma.TutorUpdateOneRequiredWithoutPetsNestedInput;
    vaccines?: Prisma.VaccineUpdateManyWithoutPetNestedInput;
    medications?: Prisma.MedicationUpdateManyWithoutPetNestedInput;
};
export type PetUncheckedUpdateWithoutFoodStocksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tutorId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vaccines?: Prisma.VaccineUncheckedUpdateManyWithoutPetNestedInput;
    medications?: Prisma.MedicationUncheckedUpdateManyWithoutPetNestedInput;
};
export type PetCreateWithoutVaccinesInput = {
    id?: string;
    name: string;
    species: string;
    gender: $Enums.Gender;
    breed?: string | null;
    weight?: number | null;
    birthDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tutor: Prisma.TutorCreateNestedOneWithoutPetsInput;
    foodStocks?: Prisma.FoodStockCreateNestedManyWithoutPetInput;
    medications?: Prisma.MedicationCreateNestedManyWithoutPetInput;
};
export type PetUncheckedCreateWithoutVaccinesInput = {
    id?: string;
    tutorId: string;
    name: string;
    species: string;
    gender: $Enums.Gender;
    breed?: string | null;
    weight?: number | null;
    birthDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    foodStocks?: Prisma.FoodStockUncheckedCreateNestedManyWithoutPetInput;
    medications?: Prisma.MedicationUncheckedCreateNestedManyWithoutPetInput;
};
export type PetCreateOrConnectWithoutVaccinesInput = {
    where: Prisma.PetWhereUniqueInput;
    create: Prisma.XOR<Prisma.PetCreateWithoutVaccinesInput, Prisma.PetUncheckedCreateWithoutVaccinesInput>;
};
export type PetUpsertWithoutVaccinesInput = {
    update: Prisma.XOR<Prisma.PetUpdateWithoutVaccinesInput, Prisma.PetUncheckedUpdateWithoutVaccinesInput>;
    create: Prisma.XOR<Prisma.PetCreateWithoutVaccinesInput, Prisma.PetUncheckedCreateWithoutVaccinesInput>;
    where?: Prisma.PetWhereInput;
};
export type PetUpdateToOneWithWhereWithoutVaccinesInput = {
    where?: Prisma.PetWhereInput;
    data: Prisma.XOR<Prisma.PetUpdateWithoutVaccinesInput, Prisma.PetUncheckedUpdateWithoutVaccinesInput>;
};
export type PetUpdateWithoutVaccinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tutor?: Prisma.TutorUpdateOneRequiredWithoutPetsNestedInput;
    foodStocks?: Prisma.FoodStockUpdateManyWithoutPetNestedInput;
    medications?: Prisma.MedicationUpdateManyWithoutPetNestedInput;
};
export type PetUncheckedUpdateWithoutVaccinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tutorId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    foodStocks?: Prisma.FoodStockUncheckedUpdateManyWithoutPetNestedInput;
    medications?: Prisma.MedicationUncheckedUpdateManyWithoutPetNestedInput;
};
export type PetCreateWithoutMedicationsInput = {
    id?: string;
    name: string;
    species: string;
    gender: $Enums.Gender;
    breed?: string | null;
    weight?: number | null;
    birthDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tutor: Prisma.TutorCreateNestedOneWithoutPetsInput;
    foodStocks?: Prisma.FoodStockCreateNestedManyWithoutPetInput;
    vaccines?: Prisma.VaccineCreateNestedManyWithoutPetInput;
};
export type PetUncheckedCreateWithoutMedicationsInput = {
    id?: string;
    tutorId: string;
    name: string;
    species: string;
    gender: $Enums.Gender;
    breed?: string | null;
    weight?: number | null;
    birthDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    foodStocks?: Prisma.FoodStockUncheckedCreateNestedManyWithoutPetInput;
    vaccines?: Prisma.VaccineUncheckedCreateNestedManyWithoutPetInput;
};
export type PetCreateOrConnectWithoutMedicationsInput = {
    where: Prisma.PetWhereUniqueInput;
    create: Prisma.XOR<Prisma.PetCreateWithoutMedicationsInput, Prisma.PetUncheckedCreateWithoutMedicationsInput>;
};
export type PetUpsertWithoutMedicationsInput = {
    update: Prisma.XOR<Prisma.PetUpdateWithoutMedicationsInput, Prisma.PetUncheckedUpdateWithoutMedicationsInput>;
    create: Prisma.XOR<Prisma.PetCreateWithoutMedicationsInput, Prisma.PetUncheckedCreateWithoutMedicationsInput>;
    where?: Prisma.PetWhereInput;
};
export type PetUpdateToOneWithWhereWithoutMedicationsInput = {
    where?: Prisma.PetWhereInput;
    data: Prisma.XOR<Prisma.PetUpdateWithoutMedicationsInput, Prisma.PetUncheckedUpdateWithoutMedicationsInput>;
};
export type PetUpdateWithoutMedicationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tutor?: Prisma.TutorUpdateOneRequiredWithoutPetsNestedInput;
    foodStocks?: Prisma.FoodStockUpdateManyWithoutPetNestedInput;
    vaccines?: Prisma.VaccineUpdateManyWithoutPetNestedInput;
};
export type PetUncheckedUpdateWithoutMedicationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tutorId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    foodStocks?: Prisma.FoodStockUncheckedUpdateManyWithoutPetNestedInput;
    vaccines?: Prisma.VaccineUncheckedUpdateManyWithoutPetNestedInput;
};
export type PetCreateManyTutorInput = {
    id?: string;
    name: string;
    species: string;
    gender: $Enums.Gender;
    breed?: string | null;
    weight?: number | null;
    birthDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PetUpdateWithoutTutorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    foodStocks?: Prisma.FoodStockUpdateManyWithoutPetNestedInput;
    vaccines?: Prisma.VaccineUpdateManyWithoutPetNestedInput;
    medications?: Prisma.MedicationUpdateManyWithoutPetNestedInput;
};
export type PetUncheckedUpdateWithoutTutorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    foodStocks?: Prisma.FoodStockUncheckedUpdateManyWithoutPetNestedInput;
    vaccines?: Prisma.VaccineUncheckedUpdateManyWithoutPetNestedInput;
    medications?: Prisma.MedicationUncheckedUpdateManyWithoutPetNestedInput;
};
export type PetUncheckedUpdateManyWithoutTutorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PetCountOutputType = {
    foodStocks: number;
    vaccines: number;
    medications: number;
};
export type PetCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    foodStocks?: boolean | PetCountOutputTypeCountFoodStocksArgs;
    vaccines?: boolean | PetCountOutputTypeCountVaccinesArgs;
    medications?: boolean | PetCountOutputTypeCountMedicationsArgs;
};
export type PetCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetCountOutputTypeSelect<ExtArgs> | null;
};
export type PetCountOutputTypeCountFoodStocksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FoodStockWhereInput;
};
export type PetCountOutputTypeCountVaccinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VaccineWhereInput;
};
export type PetCountOutputTypeCountMedicationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MedicationWhereInput;
};
export type PetSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tutorId?: boolean;
    name?: boolean;
    species?: boolean;
    gender?: boolean;
    breed?: boolean;
    weight?: boolean;
    birthDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    tutor?: boolean | Prisma.TutorDefaultArgs<ExtArgs>;
    foodStocks?: boolean | Prisma.Pet$foodStocksArgs<ExtArgs>;
    vaccines?: boolean | Prisma.Pet$vaccinesArgs<ExtArgs>;
    medications?: boolean | Prisma.Pet$medicationsArgs<ExtArgs>;
    _count?: boolean | Prisma.PetCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pet"]>;
export type PetSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tutorId?: boolean;
    name?: boolean;
    species?: boolean;
    gender?: boolean;
    breed?: boolean;
    weight?: boolean;
    birthDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    tutor?: boolean | Prisma.TutorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pet"]>;
export type PetSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tutorId?: boolean;
    name?: boolean;
    species?: boolean;
    gender?: boolean;
    breed?: boolean;
    weight?: boolean;
    birthDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    tutor?: boolean | Prisma.TutorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pet"]>;
export type PetSelectScalar = {
    id?: boolean;
    tutorId?: boolean;
    name?: boolean;
    species?: boolean;
    gender?: boolean;
    breed?: boolean;
    weight?: boolean;
    birthDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PetOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tutorId" | "name" | "species" | "gender" | "breed" | "weight" | "birthDate" | "createdAt" | "updatedAt", ExtArgs["result"]["pet"]>;
export type PetInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tutor?: boolean | Prisma.TutorDefaultArgs<ExtArgs>;
    foodStocks?: boolean | Prisma.Pet$foodStocksArgs<ExtArgs>;
    vaccines?: boolean | Prisma.Pet$vaccinesArgs<ExtArgs>;
    medications?: boolean | Prisma.Pet$medicationsArgs<ExtArgs>;
    _count?: boolean | Prisma.PetCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PetIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tutor?: boolean | Prisma.TutorDefaultArgs<ExtArgs>;
};
export type PetIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tutor?: boolean | Prisma.TutorDefaultArgs<ExtArgs>;
};
export type $PetPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Pet";
    objects: {
        tutor: Prisma.$TutorPayload<ExtArgs>;
        foodStocks: Prisma.$FoodStockPayload<ExtArgs>[];
        vaccines: Prisma.$VaccinePayload<ExtArgs>[];
        medications: Prisma.$MedicationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tutorId: string;
        name: string;
        species: string;
        gender: $Enums.Gender;
        breed: string | null;
        weight: number | null;
        birthDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["pet"]>;
    composites: {};
};
export type PetGetPayload<S extends boolean | null | undefined | PetDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PetPayload, S>;
export type PetCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PetCountAggregateInputType | true;
};
export interface PetDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Pet'];
        meta: {
            name: 'Pet';
        };
    };
    findUnique<T extends PetFindUniqueArgs>(args: Prisma.SelectSubset<T, PetFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PetClient<runtime.Types.Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PetFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PetFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PetClient<runtime.Types.Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PetFindFirstArgs>(args?: Prisma.SelectSubset<T, PetFindFirstArgs<ExtArgs>>): Prisma.Prisma__PetClient<runtime.Types.Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PetFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PetFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PetClient<runtime.Types.Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PetFindManyArgs>(args?: Prisma.SelectSubset<T, PetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PetCreateArgs>(args: Prisma.SelectSubset<T, PetCreateArgs<ExtArgs>>): Prisma.Prisma__PetClient<runtime.Types.Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PetCreateManyArgs>(args?: Prisma.SelectSubset<T, PetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PetCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PetDeleteArgs>(args: Prisma.SelectSubset<T, PetDeleteArgs<ExtArgs>>): Prisma.Prisma__PetClient<runtime.Types.Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PetUpdateArgs>(args: Prisma.SelectSubset<T, PetUpdateArgs<ExtArgs>>): Prisma.Prisma__PetClient<runtime.Types.Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PetDeleteManyArgs>(args?: Prisma.SelectSubset<T, PetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PetUpdateManyArgs>(args: Prisma.SelectSubset<T, PetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PetUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PetUpsertArgs>(args: Prisma.SelectSubset<T, PetUpsertArgs<ExtArgs>>): Prisma.Prisma__PetClient<runtime.Types.Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PetCountArgs>(args?: Prisma.Subset<T, PetCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PetCountAggregateOutputType> : number>;
    aggregate<T extends PetAggregateArgs>(args: Prisma.Subset<T, PetAggregateArgs>): Prisma.PrismaPromise<GetPetAggregateType<T>>;
    groupBy<T extends PetGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PetGroupByArgs['orderBy'];
    } : {
        orderBy?: PetGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PetFieldRefs;
}
export interface Prisma__PetClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tutor<T extends Prisma.TutorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TutorDefaultArgs<ExtArgs>>): Prisma.Prisma__TutorClient<runtime.Types.Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    foodStocks<T extends Prisma.Pet$foodStocksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pet$foodStocksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FoodStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    vaccines<T extends Prisma.Pet$vaccinesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pet$vaccinesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    medications<T extends Prisma.Pet$medicationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pet$medicationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PetFieldRefs {
    readonly id: Prisma.FieldRef<"Pet", 'String'>;
    readonly tutorId: Prisma.FieldRef<"Pet", 'String'>;
    readonly name: Prisma.FieldRef<"Pet", 'String'>;
    readonly species: Prisma.FieldRef<"Pet", 'String'>;
    readonly gender: Prisma.FieldRef<"Pet", 'Gender'>;
    readonly breed: Prisma.FieldRef<"Pet", 'String'>;
    readonly weight: Prisma.FieldRef<"Pet", 'Float'>;
    readonly birthDate: Prisma.FieldRef<"Pet", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Pet", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Pet", 'DateTime'>;
}
export type PetFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetSelect<ExtArgs> | null;
    omit?: Prisma.PetOmit<ExtArgs> | null;
    include?: Prisma.PetInclude<ExtArgs> | null;
    where: Prisma.PetWhereUniqueInput;
};
export type PetFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetSelect<ExtArgs> | null;
    omit?: Prisma.PetOmit<ExtArgs> | null;
    include?: Prisma.PetInclude<ExtArgs> | null;
    where: Prisma.PetWhereUniqueInput;
};
export type PetFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetSelect<ExtArgs> | null;
    omit?: Prisma.PetOmit<ExtArgs> | null;
    include?: Prisma.PetInclude<ExtArgs> | null;
    where?: Prisma.PetWhereInput;
    orderBy?: Prisma.PetOrderByWithRelationInput | Prisma.PetOrderByWithRelationInput[];
    cursor?: Prisma.PetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PetScalarFieldEnum | Prisma.PetScalarFieldEnum[];
};
export type PetFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetSelect<ExtArgs> | null;
    omit?: Prisma.PetOmit<ExtArgs> | null;
    include?: Prisma.PetInclude<ExtArgs> | null;
    where?: Prisma.PetWhereInput;
    orderBy?: Prisma.PetOrderByWithRelationInput | Prisma.PetOrderByWithRelationInput[];
    cursor?: Prisma.PetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PetScalarFieldEnum | Prisma.PetScalarFieldEnum[];
};
export type PetFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetSelect<ExtArgs> | null;
    omit?: Prisma.PetOmit<ExtArgs> | null;
    include?: Prisma.PetInclude<ExtArgs> | null;
    where?: Prisma.PetWhereInput;
    orderBy?: Prisma.PetOrderByWithRelationInput | Prisma.PetOrderByWithRelationInput[];
    cursor?: Prisma.PetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PetScalarFieldEnum | Prisma.PetScalarFieldEnum[];
};
export type PetCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetSelect<ExtArgs> | null;
    omit?: Prisma.PetOmit<ExtArgs> | null;
    include?: Prisma.PetInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PetCreateInput, Prisma.PetUncheckedCreateInput>;
};
export type PetCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PetCreateManyInput | Prisma.PetCreateManyInput[];
};
export type PetCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PetOmit<ExtArgs> | null;
    data: Prisma.PetCreateManyInput | Prisma.PetCreateManyInput[];
    include?: Prisma.PetIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PetUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetSelect<ExtArgs> | null;
    omit?: Prisma.PetOmit<ExtArgs> | null;
    include?: Prisma.PetInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PetUpdateInput, Prisma.PetUncheckedUpdateInput>;
    where: Prisma.PetWhereUniqueInput;
};
export type PetUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PetUpdateManyMutationInput, Prisma.PetUncheckedUpdateManyInput>;
    where?: Prisma.PetWhereInput;
    limit?: number;
};
export type PetUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PetOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PetUpdateManyMutationInput, Prisma.PetUncheckedUpdateManyInput>;
    where?: Prisma.PetWhereInput;
    limit?: number;
    include?: Prisma.PetIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PetUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetSelect<ExtArgs> | null;
    omit?: Prisma.PetOmit<ExtArgs> | null;
    include?: Prisma.PetInclude<ExtArgs> | null;
    where: Prisma.PetWhereUniqueInput;
    create: Prisma.XOR<Prisma.PetCreateInput, Prisma.PetUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PetUpdateInput, Prisma.PetUncheckedUpdateInput>;
};
export type PetDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetSelect<ExtArgs> | null;
    omit?: Prisma.PetOmit<ExtArgs> | null;
    include?: Prisma.PetInclude<ExtArgs> | null;
    where: Prisma.PetWhereUniqueInput;
};
export type PetDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PetWhereInput;
    limit?: number;
};
export type Pet$foodStocksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FoodStockSelect<ExtArgs> | null;
    omit?: Prisma.FoodStockOmit<ExtArgs> | null;
    include?: Prisma.FoodStockInclude<ExtArgs> | null;
    where?: Prisma.FoodStockWhereInput;
    orderBy?: Prisma.FoodStockOrderByWithRelationInput | Prisma.FoodStockOrderByWithRelationInput[];
    cursor?: Prisma.FoodStockWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FoodStockScalarFieldEnum | Prisma.FoodStockScalarFieldEnum[];
};
export type Pet$vaccinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VaccineSelect<ExtArgs> | null;
    omit?: Prisma.VaccineOmit<ExtArgs> | null;
    include?: Prisma.VaccineInclude<ExtArgs> | null;
    where?: Prisma.VaccineWhereInput;
    orderBy?: Prisma.VaccineOrderByWithRelationInput | Prisma.VaccineOrderByWithRelationInput[];
    cursor?: Prisma.VaccineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VaccineScalarFieldEnum | Prisma.VaccineScalarFieldEnum[];
};
export type Pet$medicationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicationSelect<ExtArgs> | null;
    omit?: Prisma.MedicationOmit<ExtArgs> | null;
    include?: Prisma.MedicationInclude<ExtArgs> | null;
    where?: Prisma.MedicationWhereInput;
    orderBy?: Prisma.MedicationOrderByWithRelationInput | Prisma.MedicationOrderByWithRelationInput[];
    cursor?: Prisma.MedicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MedicationScalarFieldEnum | Prisma.MedicationScalarFieldEnum[];
};
export type PetDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetSelect<ExtArgs> | null;
    omit?: Prisma.PetOmit<ExtArgs> | null;
    include?: Prisma.PetInclude<ExtArgs> | null;
};
